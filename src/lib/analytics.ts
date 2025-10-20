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

let buttonTrackingInitialized = false;

/**
 * Initialize global click tracking for buttons and button-like elements.
 * Returns a cleanup function that removes the listener.
 */
export const initButtonClickTracking = () => {
  if (buttonTrackingInitialized || typeof document === 'undefined') {
    return () => {};
  }

  const handler = (event: Event) => {
    const target = event.target as Element | null;
    if (!target || !(target instanceof Element)) return;

    // Find the nearest button-like element
    const el = target.closest(
      'button, [role="button"], input[type="button"], input[type="submit"]'
    ) as HTMLElement | null;

    if (!el) return;
    if (el.getAttribute('data-ga-skip') === 'true') return;

    const overrideEvent = el.getAttribute('data-ga-event') || 'button_click';
    // Prefer explicit data attribute or aria-label, then visible text/value
    const explicitLabel = el.getAttribute('data-ga-label');
    const ariaLabel = el.getAttribute('aria-label') || undefined;
    const valueAttr = (el as HTMLInputElement).value;
    const textContent = (el.textContent || '').trim();

    const labelSource = explicitLabel || ariaLabel || textContent || valueAttr || '';
    const buttonText = (labelSource || '').toString().trim().slice(0, 100);

    // Build event params (avoid sending PII; keep generic metadata)
    const params: Record<string, any> = {
      button_text: buttonText,
      button_id: el.id || undefined,
      button_name: el.getAttribute('name') || undefined,
      button_role: el.getAttribute('role') || (el.tagName || '').toLowerCase(),
      button_classes: (el.getAttribute('class') || '').trim() || undefined,
      location_path: window.location.pathname + window.location.search,
    };

    try {
      trackEvent(overrideEvent, params);
    } catch (_) {
      // Silently ignore analytics errors to avoid breaking UI
    }
  };

  // Use capture phase to catch clicks before stopPropagation
  document.addEventListener('click', handler, true);
  buttonTrackingInitialized = true;

  return () => {
    document.removeEventListener('click', handler, true);
    buttonTrackingInitialized = false;
  };
};
