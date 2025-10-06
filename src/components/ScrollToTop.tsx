import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll both window and #root element
    window.scrollTo(0, 0);

    // Find and scroll the root element (which has overflow-auto)
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.scrollTo(0, 0);
    }

    // Also scroll document element and body as fallback
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
