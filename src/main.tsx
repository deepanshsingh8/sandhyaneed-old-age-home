import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import '@fontsource-variable/playfair-display/wght.css'
import './index.css'

const root = document.getElementById("root")!;
const app = <HelmetProvider><BrowserRouter><App /></BrowserRouter></HelmetProvider>;
if (root.dataset.prerendered === "true") {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
