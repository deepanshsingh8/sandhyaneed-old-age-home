# SEO & performance pass — 2026-10-01

## Audit of the checklist (live site + repo, after syncing to origin/main 24eed69)

| Item | Status before this pass |
|---|---|
| Server-side rendering | Done — every route pre-rendered to static HTML at build (`scripts/prerender.mjs`), then hydrated |
| sitemap.xml | Done — 8 indexable URLs, live at /sitemap.xml, generated at build |
| Googlebot unblocked | Done — robots.txt `Allow: /`, no X-Robots-Tag header |
| noindex tags | Correct — only the 4 legal notices + 404 are noindex, and they're excluded from the sitemap |
| Redirect chains | OK — www/https/trailing-slash/.html all 1 hop; `http://sandhyaneed.com` is 2 hops (Vercel forces HTTPS before the apex→www redirect; not fixable in code, harmless) |
| Canonical tags | Done — one self-referencing canonical per page |
| 404s | Done — real HTTP 404 with noindex custom page; all internal links/images resolve |
| Meta descriptions | Done — unique per page |
| One H1 per page | Done |
| FAQ schema | Done — homepage FAQPage matches visible FAQ |
| Breadcrumbs | Schema only — **no visible breadcrumbs** |
| Orphan pages | None — all pages linked from nav + footer |
| Alt text | Present on all images; some gallery alts duplicate visible captions |
| Images → WebP | All WebP except `faci/common-area2.jpg` |
| Layout shift | CLS 0, but logo and most images lack width/height |
| Load < 2s | **No** — mobile LCP 2.8–3.4 s (Lighthouse mobile: Perf 83/89/88) |
| Author bio | Not applicable as such (no articles); trustees shown on About, not in schema |
| Forbes backlink | Can't be done from code — see notes |

## Plan

- [x] Self-host Playfair Display (remove render-blocking Google Fonts request, ~0.9 s) + preload; update privacy notice text
- [x] Responsive images: generate 480w/960w WebP variants + manifest with dimensions; shared `<Img>` sets width/height/srcset/sizes
- [x] Convert `common-area2.jpg` + 3 JPEGs mislabelled `.webp` → WebP
- [x] Hero LCP image `fetchpriority="high"`; gallery above-the-fold images eager
- [x] Logo width/height
- [x] A11y: contrast on teal-600 button/links and purple badge; accessible names on hero contact links; redundant gallery alts
- [x] Visible breadcrumbs on inner pages (same labels as BreadcrumbList schema)
- [x] Founder/trustees as `Person` in About structured data (E-E-A-T)
- [x] Extend `check-seo.mjs` to cover the above
- [x] Build, lint, typecheck, check:seo, Lighthouse before/after
- [x] Remove framer-motion (~110 KB raw, 23% of JS) — replaced with CSS + 15-line hook
- [x] Defer hidden hero slides until after hydration (they were competing with the LCP image)
- [x] Hero CTAs: JS `onClick` buttons → crawlable `<a href>` links
- [x] Correct inaccurate gallery captions/alt text (e.g. "Morning walk" photo shows no walk)
- [ ] (needs OK) push → Vercel deploy → Search Console: resubmit sitemap, inspect URLs, review indexing/404 reports

## Review

Lighthouse mobile, same machine, original `main` build vs this branch (simulated slow 4G):

| Page | Perf | A11y | FCP | LCP | Page weight |
|---|---|---|---|---|---|
| Home | 91 → 96 | 96 → 100 | 2.0 → 1.5 s | 3.3 → 2.6 s | 775 → 453 KiB |
| About | 98 → 99 | 100 | 2.0 → 1.5 s | 2.1 → 1.8 s | 212 → 176 KiB |
| Gallery | 80 → 91 | 99 → 100 | 2.6 → 1.5 s | 4.3 → 3.4 s | 3066 → 780 KiB |
| Facilities | 96 → 98 | 100 | 2.0 → 1.5 s | 2.5 → 2.3 s | 354 → 319 KiB |

JS 152 → 114 KB gzip. CLS 0 everywhere. SEO 100 before and after (it was already technically sound).
Remaining LCP is mostly the JS bundle sharing bandwidth in the slow-4G simulation; next lever would be route-level code splitting (needs streaming SSR in prerender) — not done, diminishing returns.

Not done / not possible from code: Forbes backlink, guaranteed #1 ranking, apex http→https→www 2-hop (Vercel platform behaviour).
