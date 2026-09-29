# 🏡 Sandhyaneed Old Age Home Website

A compassionate, modern web platform for **Sandhyaneed**, Rajasthan’s trusted old age home. Built to showcase services, raise awareness, and support elderly care with love and dignity.

---

## ✨ Features

* ✅ Fast and lightweight using **Vite**
* 🎨 Beautiful UI powered by **Tailwind CSS** and **shadcn/ui**
* ⚛️ Modern frontend with **React + TypeScript**
* 🌓 Responsive design for mobile and desktop
* 🔄 Live development server with **hot reloading**
* 🚀 Ready for deployment and scaling

---

## 🖥️ Technologies Used

| Tech         | Description                        |
| ------------ | ---------------------------------- |
| Vite         | Blazing fast frontend build tool   |
| TypeScript   | Type-safe JavaScript               |
| React        | UI library for building components |
| shadcn/ui    | Beautiful, accessible components   |
| Tailwind CSS | Utility-first CSS framework        |
| GitHub       | Version control and collaboration  |

---

## 🚀 Getting Started

### 📦 Install Locally

> Make sure you have Node.js and npm installed. You can use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage Node versions.

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm ci

# 4. Start the development server
npm run dev
```

---

### 🌐 GitHub Editing

To make changes directly on GitHub:

1. Navigate to the desired file.
2. Click the ✏️ pencil icon at the top right.
3. Make your edits and commit the changes.

---

### ⚡ GitHub Codespaces

Run the project directly in the cloud:

1. Go to the repository's main page.
2. Click the **Code** button → **Codespaces** tab.
3. Click **New codespace**.
4. Start editing and testing instantly in-browser.

---

## 📁 Folder Structure

```plaintext
.
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components
│   ├── styles/           # Global styles (e.g., Tailwind setup)
│   ├── App.tsx           # Root app
│   └── main.tsx          # App entry point
├── index.html            # Root HTML file
└── vite.config.ts        # Vite configuration
```

---

## 🤝 Contributing

Contributions are welcome! Here’s how you can help:

* 🔧 Fix bugs or improve components
* 📝 Update or improve documentation
* 🚀 Suggest new features or enhancements

> Open a pull request with clear details and screenshots if applicable.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
You are free to use, modify, and distribute with attribution.

---

## 📬 Contact

Have questions or want to collaborate?

📧 Email: `contact@sandhyaneed.com`
🌐 Website: [https://sandhyaneed.com](https://sandhyaneed.com)

## Search visibility and production builds

Use Node.js 22.12 or later; `.nvmrc`, the package engine and Netlify’s `NODE_VERSION` select Node 22; Vercel uses the package engine. npm and `package-lock.json` are the supported dependency workflow; the obsolete Bun lockfile has been removed so deployments install the same dependency set used for verification. Run `npm run build` to produce twelve pre-rendered HTML pages, a noindex 404 page, `sitemap.xml`, and `robots.txt` in `dist`. The four legal pages are noindex and excluded from the eight-page sitemap. Deploy the complete `dist` directory. `netlify.toml` serves each route’s own HTML and returns HTTP 404 for unknown URLs. `vercel.json` configures the existing Vercel deployment with `npm ci`, `npm run build`, output directory `dist`, extensionless HTML routes (`cleanUrls`), and the same policy redirects. Missing routes use the custom `404.html` with HTTP 404; there is no homepage catch-all rewrite.

Run `npm run lint`, `npx tsc --project tsconfig.app.json --noEmit`, `npx tsc --project tsconfig.node.json --noEmit`, and `npm run check:seo` after building. Use `npm run preview` to review the production output.

Public contact details, the canonical domain and homepage FAQs live in `src/lib/site.ts`. Per-page metadata and JSON-LD live in `src/lib/seo.ts`. `SEO.tsx` uses `react-helmet-async`; each pre-rendered route gets its own `HelmetProvider` context, and the build writes Helmet’s collected tags into the HTML head. The browser hydrates that same markup and Helmet updates metadata on navigation. Homepage FAQ text and structured data share a single source. CTA styling lives in `.cta-button` in `src/index.css`.

The favicon uses the existing artwork in `public/favicon.ico`. Its original 32×30 pixels are preserved with one transparent row above and below to form a square 32×32 icon without stretching. All pages link to this single favicon file.

Phone layouts use compact icon-and-text cards, a two-column photo grid, horizontal testimonial scrolling, smaller headings and section spacing, and 44px or larger primary tap targets. Desktop hero wording, colors and imagery remain unchanged.

The enquiry form opens a prefilled email in the visitor’s email app. It has no server-side submission service. An email link replaces the previous inactive newsletter signup.

## Website notices and privacy controls

`src/lib/legal.ts` contains the four notices and their section IDs. They share `LegalPage.tsx` and appear as four links in the footer: Privacy & Cookies (`/privacy`), Terms & Website Notices (`/terms`), Legal & Admission Notices (`/legal`), and Accessibility Statement (`/accessibility`). Helmet emits unique metadata and `noindex, follow` into each page’s static HTML; robots.txt allows crawlers to read those directives. See [Google’s noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Vercel and Netlify return permanent redirects for `/cookies` → `/privacy#cookies`, `/disclaimer` → `/terms#website-content`, `/copyright` → `/terms#copyright`, and `/refund-cancellation` → `/legal#cancellations-refunds`. React Router also handles those aliases during client navigation. Other hosts must reproduce these redirects and clean-route rewrites.

The enquiry checkbox starts unchecked and is required by native form validation and the email-handoff handler. Its acknowledgement is included in the email draft. The fieldset stays disabled until the JavaScript handler is ready, preventing native GET submissions with enquiry details in the URL before hydration or with JavaScript disabled; a noscript notice offers direct email and phone links. There is no server to check it and no consent database; this flow does not claim a durable server-side consent record. Direct email and phone remain available. Any future form endpoint must validate acknowledgement itself, keep the notices current, and use confirmed delivery and retention arrangements.

`ClickToLoadEmbed.tsx` keeps Google Maps, YouTube and Vimeo iframes out of the initial HTML and mounts each only after its own load button is pressed. The choice is not persisted. The privacy notice separately discloses the Google Fonts requests that still occur when pages load. Homepage stock portraits and the unsupported numerical rating badge were replaced with the established date. This is not a site-wide cookie-consent manager.

Verified from this repository: form fields and mailto flow; no first-party cookies, local/session storage or analytics scripts in the application code; external font/image services and video/map providers; public contact details; and dated 2023/2024 admission PDFs. The site owner confirmed NK Shikshan Sankul as the operator, the supplied CSR attribution, and that enquiry details are used only to reply, with no marketing or follow-up emails. The 2023 rent PDF lists room-specific refundable deposits, so the previous unverified one-month-fee claim was removed from the Rules summary.

Information still needs confirmation: the operator’s registration/approval details and entity named in admission agreements; mailbox provider and downstream data recipients; retention/deletion procedures; current admissions, deposits, cancellation deductions and refund timeframes; credentials; and accessibility of the full service. No fixed data-retention period was supplied. Land ownership does not determine retention of enquiry emails or personal records. The new notices avoid invented identifiers, blanket refund exclusions or a certification claim. They are not an independent audit of the operator’s practices. Update the content and explicit last-updated date when these facts are confirmed.

After deployment:

1. Verify `https://www.sandhyaneed.com` in Google Search Console and submit `https://www.sandhyaneed.com/sitemap.xml`. Inspect the homepage and key routes to request indexing.
2. Validate published pages using Google’s Rich Results Test. FAQ markup describes the visible questions; it does not promise a FAQ rich result.
3. Keep the Google Business Profile name, address, website, phone numbers and hours consistent with the site. Maintain accurate local listings and invite real resident or family reviews.
4. Office hours are 9 AM–5 PM Monday–Saturday and visiting hours are 10 AM–7 PM daily, shared across the homepage, footer, contact page and rules. Review existing testimonials and care-service descriptions with management. No review ratings are added to structured data.
5. Monitor search queries, indexing, Core Web Vitals and enquiries. Update room availability and fees through the team instead of publishing unverified prices.

Google’s [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) recommends the same crawlability, helpful content and accurate structured data used for ordinary search. Google’s [local business documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) explains the business markup. Neither search rankings nor AI inclusion are guaranteed by technical SEO changes.

---

## 🧠 Credits

Developed with care by [**Flux8 Labs**](https://flux8labs.com) 💡
Building purposeful technology for people, brands, and communities.

---

## Keeping the Desktop copies in sync

The Deepansh repository (`deepanshsingh8/sandhyaneed-old-age-home`) is the deployment source for the existing Vercel project. Both Desktop folders contain the same application source, deployment configuration and 37 gallery photos. Their Git histories and remotes stay separate. Make future changes in `sandhyaneed-old-age-home-1` and synchronize source files to the other folder without copying `.git`, dependencies, build output or local credentials.

The footer retains both the NK Shikshan Sankul CSR attribution and Flux8labs developer credit. Gallery controls support keyboard activation, contain focus while the photo viewer is open and restore focus on close. The hero location and phone controls are native links; the slideshow has a pause control and does not autoplay with reduced motion enabled.
