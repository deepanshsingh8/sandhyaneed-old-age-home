import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getMetaTags, getSEO, getStructuredData } from "@/lib/seo";

export default function SEO() {
  const { pathname } = useLocation();
  const seo = getSEO(pathname);
  const schema = getStructuredData(pathname);
  return (
    <Helmet defer={false} htmlAttributes={{ lang: "en-IN" }}>
      <title>{seo.title}</title>
      {getMetaTags(pathname).map(meta => <meta key={meta.name ?? meta.property} {...meta} />)}
      <link rel="canonical" href={seo.canonical} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, "\\u003c")}</script>}
    </Helmet>
  );
}
