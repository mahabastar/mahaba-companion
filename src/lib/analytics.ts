 /**
 * Google Analytics 4 integration.
 *
 * Uses VITE_GA_MEASUREMENT_ID when set, and falls back to the
 * production stream below so tracking never silently turns off.
 *
 * The gtag script itself is loaded in src/routes/__root.tsx.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const FALLBACK_GA_ID = "G-CLZE8GT71P";

export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() ||
  FALLBACK_GA_ID;

export const analyticsEnabled = Boolean(GA_MEASUREMENT_ID);

/**
 * Record a page view for a client-side route change.
 * __root.tsx sets send_page_view: false, so every page view
 * (including the first load) is sent from here.
 */
export function trackPageview(path: string): void {
  if (
    !analyticsEnabled ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}

/**
 * Record a custom GA4 event.
 * Example: trackEvent("whatsapp_click", { page_path: window.location.pathname });
 */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
): void {
  if (
    !analyticsEnabled ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", name, params ?? {});
}

