import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 8, "Sitemap must contain all eight indexable pages");
assert.equal(new Set(urls).size, urls.length, "Sitemap URLs must be unique");
const legalPaths = ["/privacy", "/terms", "/legal", "/accessibility"];
const paths = [...urls.map(url => new URL(url).pathname), ...legalPaths];
const origin = new URL(urls[0]).origin;
for (const path of legalPaths) assert.ok(!urls.includes(`${origin}${path}`), `Noindex page excluded from sitemap: ${path}`);
const titles = new Set();
const descriptions = new Set();
for (const pathname of paths) {
  const url = `${origin}${pathname}`;
  const isLegal = legalPaths.includes(pathname);
  const html = await readFile(resolve("dist", pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`), "utf8");
  assert.match(html, /data-prerendered="true"/, `Pre-rendered content: ${url}`);
  assert.match(html, /data-rh="true"/, `Helmet-managed head: ${url}`);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `Exactly one H1: ${url}`);
  assert.equal([...html.matchAll(/rel="canonical"/g)].length, 1, `One canonical: ${url}`);
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `Correct canonical: ${url}`);
  assert.ok(html.includes(`name="robots" content="${isLegal ? "noindex, follow" : "index, follow, max-image-preview:large"}"`), `Correct indexing policy: ${url}`);
  assert.equal([...html.matchAll(/<title(?:\s|>)/g)].length, 1, `One title: ${url}`);
  assert.equal([...html.matchAll(/name="description"/g)].length, 1, `One description: ${url}`);
  titles.add(html.match(/<title[^>]*>(.*?)<\/title>/)[1]);
  descriptions.add(html.match(/name="description" content="(.*?)"/)[1]);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  assert.equal(schemas.length, isLegal ? 0 : 1, `Correct structured data count: ${url}`);
  assert.equal([...html.matchAll(/rel="icon"/g)].length, 1, "One favicon source");
  assert.match(html, /rel="icon" type="image\/x-icon" href="\/favicon.ico\?v=2" sizes="32x32"/, "Existing favicon must be linked");
  for (const path of legalPaths) assert.ok(html.includes(`href="${path}"`), `Footer policy link: ${path}`);
  assert.match(html, /id="main-content"/, `Skip-link target: ${url}`);
  assert.ok(html.includes('NK Shikshan Sankul') && html.includes('href="https://flux8labs.com"'), `Both footer credits: ${url}`);
  assert.ok(html.includes('9:00 AM - 5:00 PM') && html.includes('10:00 AM - 7:00 PM'), `Office and visiting hours: ${url}`);
  if (!isLegal) {
    const schema = JSON.parse(schemas[0][1]);
    assert.equal(schema["@context"], "https://schema.org");
    const business = schema["@graph"].find(item => item["@type"] === "LocalBusiness");
    assert.equal(business.email, "contact@sandhyaneed.com");
    assert.ok(html.includes(business.email), "Business email must be visible in the page");
    assert.equal(business.address.addressLocality, "Dhodsar");
    assert.ok(!business.aggregateRating, "Do not add unsupported rating markup");
    if (pathname === "/") {
      const faq = schema["@graph"].find(item => item["@type"] === "FAQPage");
      assert.equal(faq.mainEntity.length, 5);
      for (const question of faq.mainEntity) {
        assert.ok(html.includes(question.name), `Visible FAQ: ${question.name}`);
      }
      assert.match(html, /src="\/img\/homepage\/community-greeting.webp"/);
      assert.match(html, /src="\/img\/homepage\/inauguration.webp"/);
    } else {
      const breadcrumbs = schema["@graph"].find(item => item["@type"] === "BreadcrumbList");
      assert.equal(breadcrumbs.itemListElement[1].item, url);
    }
  }
  if (pathname === "/contact") {
    assert.match(html, /<fieldset[^>]*disabled=""/, "Email form remains disabled until its JavaScript handler is ready");
    const checkbox = html.match(/<input[^>]*id="privacy-acknowledgement"[^>]*>/)?.[0];
    assert.ok(checkbox?.includes('type="checkbox"') && checkbox.includes('required=""'), "Required privacy acknowledgement");
    assert.ok(!checkbox.includes('checked=""'), "Privacy acknowledgement must start unchecked");
    assert.ok(!html.includes("<iframe"), "Map must not load in initial HTML");
    assert.ok(html.includes("Load Google Map"), "Map load control must be present");
  }
  if (pathname === "/gallery") {
    assert.equal([...html.matchAll(/aria-label="View /g)].length, 37, "Gallery retains all 37 Deepansh photos");
    for (const src of ["/img/room/twin-room.webp", "/img/homepage/group-photo.webp", "/img/faci/gym3.webp", "/img/garden/garden6.webp"]) {
      assert.ok(html.includes(`src="${src}"`), `Extra Deepansh photo: ${src}`);
    }
  }
  if (pathname === "/about") assert.ok(!html.includes("<iframe"), "Videos must not load in initial HTML");
  for (const [, src] of html.matchAll(/<img[^>]*src="([^"]+)"/g)) {
    if (src.startsWith("https://")) {
      assert.doesNotThrow(() => new URL(src), `Valid external image URL: ${src}`);
      continue;
    }
    assert.ok(src.startsWith("/"), `Image paths must be absolute: ${src}`);
    await access(resolve("dist", src.slice(1)));
  }
  for (const [, href] of html.matchAll(/href="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const path = decodeURIComponent(href.split("?")[0]);
    if (paths.includes(path)) continue;
    await access(resolve("dist", path.slice(1)));
  }
}
assert.equal(titles.size, paths.length, "Every page needs a unique title");
assert.equal(descriptions.size, paths.length, "Every page needs a unique description");
const notFound = await readFile("dist/404.html", "utf8");
assert.match(notFound, /name="robots" content="noindex, follow"/);
const robots = await readFile("dist/robots.txt", "utf8");
assert.ok(robots.includes(`Sitemap: ${new URL(urls[0]).origin}/sitemap.xml`));
const hosting = await readFile("netlify.toml", "utf8");
const vercel = JSON.parse(await readFile("vercel.json", "utf8"));
assert.equal(vercel.framework, "vite");
assert.equal(vercel.installCommand, "npm ci");
assert.equal(vercel.buildCommand, "npm run build");
assert.equal(vercel.outputDirectory, "dist");
assert.equal(vercel.cleanUrls, true, "Vercel serves each route's own HTML");
assert.equal(vercel.trailingSlash, false);
assert.ok(!vercel.rewrites?.length && !vercel.routes, "Preserve Vercel filesystem routing and true 404 responses");
assert.match(hosting, /to = "\/404.html"\s+status = 404/);
const redirects = [...hosting.matchAll(/\[\[redirects\]\]\s+([\s\S]*?)(?=\[\[|$)/g)].map(([, block]) => ({
  from: block.match(/from = "([^"]+)"/)?.[1],
  to: block.match(/to = "([^"]+)"/)?.[1],
  status: Number(block.match(/status = (\d+)/)?.[1]),
}));
for (const [from, to] of Object.entries({
  "/cookies": "/privacy#cookies",
  "/disclaimer": "/terms#website-content",
  "/copyright": "/terms#copyright",
  "/refund-cancellation": "/legal#cancellations-refunds",
})) {
  const index = redirects.findIndex(rule => rule.from === from && rule.to === to && rule.status === 301);
  assert.ok(index >= 0 && index < redirects.findIndex(rule => rule.from === "/*"), `Legacy redirect before 404: ${from}`);
  assert.ok(vercel.redirects.some(rule => rule.source === from && rule.destination === to && rule.permanent === true), `Vercel legacy redirect: ${from}`);
  const [path, id] = to.split("#");
  const page = await readFile(resolve("dist", `${path.slice(1)}.html`), "utf8");
  assert.ok(page.includes(`id="${id}"`), `Redirect anchor exists: ${to}`);
}
for (const path of legalPaths) {
  assert.ok(redirects.some(rule => rule.from === path && rule.to === `${path}.html` && rule.status === 200), `Serve static legal route: ${path}`);
  assert.ok(redirects.some(rule => rule.from === `${path}.html` && rule.to === path && rule.status === 301), `Canonical legal route redirect: ${path}`);
}
const favicon = await readFile(resolve("dist", "favicon.ico"));
assert.equal(favicon.readUInt16LE(2), 1, "Valid ICO format");
assert.equal(favicon.readUInt16LE(4), 1, "One favicon image");
assert.equal(favicon[6], 32, "Favicon width");
assert.equal(favicon[7], 32, "Favicon height");
console.log("SEO checks passed: 12 static pages, four noindex notices, eight sitemap entries, unique metadata, canonical URLs, structured data, visible FAQs, assets, policy links, privacy acknowledgement, gated embeds, redirects and 404 handling.");
