import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: "custom" });
try {
  const { render, pageSEO, site } = await server.ssrLoadModule("/src/entry-server.tsx");
  // Preload the self-hosted heading font (latin subset) so headings don't swap late.
  const font = (await readdir(resolve("dist/assets"))).find(file => /^playfair-display-latin-wght-normal-.*\.woff2$/.test(file));
  if (!font) throw new Error("Playfair Display latin font not found in dist/assets");
  const template = (await readFile(resolve("dist/index.html"), "utf8"))
    .replace("</head>", () => `  <link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />\n  </head>`);
  const paths = Object.keys(pageSEO);
  const indexablePaths = paths.filter(path => !pageSEO[path].noindex);
  for (const path of [...paths, "/404"]) {
    const file = resolve("dist", path === "/" ? "index.html" : `${path.slice(1)}.html`);
    const rendered = render(path);
    const html = template
      .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, () => rendered.head)
      .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="true">${rendered.html}</div>`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
  await writeFile(resolve("dist/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePaths.map(path => `  <url><loc>${site.url}${path === "/" ? "/" : path}</loc></url>`).join("\n")}
</urlset>\n`);
  await writeFile(resolve("dist/robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
  console.log(`Pre-rendered ${paths.length} pages and a 404 page; sitemap includes ${indexablePaths.length} indexable pages.`);
} finally {
  await server.close();
}
