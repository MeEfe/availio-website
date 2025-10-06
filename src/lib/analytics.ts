// Google Analytics helper functions

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a page view in Google Analytics
 * @param path - The path of the page being viewed
 * @param title - Optional title of the page
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-NHLQBBV0K7', {
      page_path: path,
      page_title: title || document.title,
    });
  }
};

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event
 * @param eventParams - Optional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};
