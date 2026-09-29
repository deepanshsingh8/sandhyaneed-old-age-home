
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Activities from "./pages/Activities";
import HealthSecurity from "./pages/HealthSecurity";
import Rules from "./pages/Rules";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/scrollToTop";
import SEO from "./components/SEO";
import LegalPage from "./pages/LegalPage";
import { legalPages, legalRedirects, type LegalPath } from "./lib/legal";

const App = () => (
  <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal-800 focus:px-5 focus:py-3 focus:text-white">Skip to main content</a>
    <SEO />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/health-security" element={<HealthSecurity />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      {Object.keys(legalPages).map(path => <Route key={path} path={path} element={<LegalPage path={path as LegalPath} />} />)}
      {Object.entries(legalRedirects).map(([path, destination]) => <Route key={path} path={path} element={<Navigate to={destination} replace />} />)}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
