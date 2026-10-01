import { homeFAQs, site } from "./site";
import { legalPages } from "./legal";

type PageMetadata = { title: string; description: string; label: string; noindex?: boolean };

export const pageSEO: Record<string, PageMetadata> = {
  "/": {
    title: "Old Age Home in Jaipur | Sandhyaneed Senior Living",
    description: "Explore Sandhyaneed Old Age Home near Jaipur in Dhodsar on the Jaipur-Sikar Highway. Discover senior living, rooms, facilities and arrange a visit.",
    label: "Home",
  },
  "/about": {
    title: "About Sandhyaneed | Old Age Home near Jaipur Since 2015",
    description: "Learn about Sandhyaneed Old Age Home, founded in 2015 by Dr. N. C. Lunayach, and our mission to support senior citizens with dignity near Jaipur.",
    label: "About Us",
  },
  "/facilities": {
    title: "Senior Living Rooms & Facilities in Jaipur | Sandhyaneed",
    description: "Explore flats, suites and shared rooms at Sandhyaneed near Jaipur, with dining, gardens, a library and recreation. Enquire about availability.",
    label: "Facilities",
  },
  "/activities": {
    title: "Senior Activities & Community Life | Sandhyaneed Jaipur",
    description: "Discover daily activities, cultural programs, celebrations and companionship for senior citizens at Sandhyaneed Old Age Home near Jaipur.",
    label: "Activities",
  },
  "/health-security": {
    title: "Senior Health & Security | Sandhyaneed Old Age Home",
    description: "Learn about health support, emergency arrangements and security at Sandhyaneed near Jaipur. Discuss your family member’s care needs with our team.",
    label: "Health & Security",
  },
  "/rules": {
    title: "Admission Rules & Registration | Sandhyaneed Jaipur",
    description: "Read Sandhyaneed’s resident rules and download admission documents. Contact our old age home near Jaipur to confirm current fees and requirements.",
    label: "Rules & Regulations",
  },
  "/gallery": {
    title: "Photos of Sandhyaneed | Old Age Home near Jaipur",
    description: "View photographs of Sandhyaneed’s rooms, gardens, facilities and resident activities. Explore our senior living community near Jaipur, Rajasthan.",
    label: "Gallery",
  },
  "/contact": {
    title: "Contact & Visit Sandhyaneed Old Age Home near Jaipur",
    description: "Call Sandhyaneed at +91 96801 47319 for senior living enquiries. Find our old age home in Dhodsar on the Jaipur-Sikar Highway and arrange a visit.",
    label: "Contact Us",
  },
  ...Object.fromEntries(Object.entries(legalPages).map(([path, page]) => [path, {
    title: `${page.title} | Sandhyaneed`,
    description: page.description,
    label: page.title,
    noindex: true,
  }])),
};

export function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export function getSEO(path: string) {
  const pathname = normalizePath(path);
  const page = pageSEO[pathname as keyof typeof pageSEO];
  return {
    pathname,
    title: page?.title ?? "Page Not Found | Sandhyaneed Old Age Home",
    description: page?.description ?? "This page could not be found. Visit Sandhyaneed’s homepage to explore senior living near Jaipur.",
    canonical: `${site.url}${pathname === "/" ? "/" : pathname}`,
    robots: page && !page.noindex ? "index, follow, max-image-preview:large" : "noindex, follow",
    image: `${site.url}${site.image}`,
  };
}

export function getStructuredData(path: string) {
  const seo = getSEO(path);
  const page = pageSEO[seo.pathname as keyof typeof pageSEO];
  if (!page || page.noindex) return null;

  const businessId = `${site.url}/#organization`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: site.name,
      url: `${site.url}/`,
      description: "An old age home in Dhodsar on the Jaipur-Sikar Highway, Rajasthan, offering senior living, accommodation and community life since 2015.",
      logo: `${site.url}/img/main-logo.webp`,
      image: [seo.image, `${site.url}/img/homepage/community-greeting.webp`],
      telephone: "+919680147319",
      email: site.email,
      foundingDate: "2015",
      founder: {
        "@type": "Person",
        "@id": `${site.url}/about#founder`,
        name: "Dr. N. C. Lunayach",
        jobTitle: "Founder and Trustee",
        image: `${site.url}/img/about/1-500x500.webp`,
        url: `${site.url}/about`,
      },
      parentOrganization: { "@type": "Organization", name: site.operator },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.streetAddress,
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: "IN",
      },
      areaServed: ["Jaipur", "Rajasthan"],
      hasMap: site.mapsUrl,
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+919680147319", contactType: "admission enquiries" },
        { "@type": "ContactPoint", telephone: "+919414047082", contactType: "admission enquiries" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
        description: "Office hours; resident care and visiting hours are separate.",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      publisher: { "@id": businessId },
      inLanguage: "en-IN",
    },
    {
      "@type": seo.pathname === "/about" ? "AboutPage" : seo.pathname === "/contact" ? "ContactPage" : "WebPage",
      "@id": `${seo.canonical}#webpage`,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": businessId },
      inLanguage: "en-IN",
      ...(seo.pathname !== "/" ? { breadcrumb: { "@id": `${seo.canonical}#breadcrumb` } } : {}),
    },
  ];

  if (seo.pathname !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${seo.canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: page.label, item: seo.canonical },
      ],
    });
  } else {
    graph.push({
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: homeFAQs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

// Shared by Helmet in both pre-rendered HTML and client navigation.
export function getMetaTags(path: string) {
  const seo = getSEO(path);
  return [
    { name: "description", content: seo.description },
    { name: "robots", content: seo.robots },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: "en_IN" },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:url", content: seo.canonical },
    { property: "og:image", content: seo.image },
    { property: "og:image:alt", content: "Sandhyaneed Old Age Home near Jaipur, Rajasthan" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: seo.image },
    { name: "twitter:image:alt", content: "Sandhyaneed Old Age Home near Jaipur, Rajasthan" },
  ];
}
