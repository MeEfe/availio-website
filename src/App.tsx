import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import ThreeCursor from "./components/ui/three-cursor";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Features from "./pages/features";
import Imprint from "./pages/imprint";
import About from "./pages/about";
import Contact from "./pages/contact";
import { trackPageView } from "./lib/analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <ThreeCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
