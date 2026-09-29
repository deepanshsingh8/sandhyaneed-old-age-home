import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";

export { pageSEO } from "./lib/seo";
export { site } from "./lib/site";

export function render(path: string) {
  const context = {} as { helmet: HelmetServerState };
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={path}><App /></StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = context;
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map(tags => tags.toString()).join("\n    ");
  return { html, head };
}
