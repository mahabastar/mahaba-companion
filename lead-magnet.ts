import { useEffect, useState } from "react";

/**
 * Free Uganda Travel Guide: shared constants, browser-storage helpers and the
 * tiny event bus used to open the sign-up dialog from anywhere on the site.
 */

export const GUIDE_TITLE = "FREE Uganda Travel Guide: 10 Things You Should Know Before Your Uganda Safari";
export const GUIDE_HEADLINE = "10 Things You Should Know Before Your Uganda Safari";
export const GUIDE_URL = "/guides/Biikuya-Trails-Uganda-Travel-Guide.pdf";
export const GUIDE_FILENAME = "Biikuya-Trails-Uganda-Travel-Guide.pdf";
export const GUIDE_COVER = "/guides/uganda-travel-guide-cover.jpg";

export const GUIDE_TEASER =
  "Planning a Uganda safari? Get our free guide with practical tips on gorilla trekking, chimpanzee tracking, wildlife safaris, best times to visit, what to pack, permits, transport and how to plan your trip.";
export const CTA_LABEL = "Get the Free Uganda Travel Guide";
export const NEWSLETTER_LINE =
  "Join the Biikuya Trails Uganda travel newsletter and get your FREE Uganda Travel Guide.";
export const CONSENT_TEXT =
  "By subscribing, you agree to receive Uganda travel tips, safari inspiration and occasional offers from Biikuya Trails Uganda. You can unsubscribe at any time.";

const SUBSCRIBED_KEY = "bt_lead_subscribed";
const DISMISSED_KEY = "bt_lead_dismissed_at";
const POPUP_SESSION_KEY = "bt_lead_popup_shown";

export const OPEN_EVENT = "bt:open-lead-magnet";
const SUBSCRIBED_EVENT = "bt:lead-subscribed";

const DAY_MS = 24 * 60 * 60 * 1000;

function read(store: "local" | "session", key: string): string | null {
  try {
    if (typeof window === "undefined") return null;
    return (store === "local" ? window.localStorage : window.sessionStorage).getItem(key);
  } catch {
    return null;
  }
}

function write(store: "local" | "session", key: string, value: string) {
  try {
    if (typeof window === "undefined") return;
    (store === "local" ? window.localStorage : window.sessionStorage).setItem(key, value);
  } catch {
    /* storage can be unavailable (private mode); the feature still works */
  }
}

export function isSubscribed(): boolean {
  return read("local", SUBSCRIBED_KEY) === "1";
}

export function markSubscribed() {
  write("local", SUBSCRIBED_KEY, "1");
  if (typeof window !== "undefined") window.dispatchEvent(new Event(SUBSCRIBED_EVENT));
}

/** True if the pop-up was closed within the last `days` days. */
export function wasRecentlyDismissed(days = 14): boolean {
  const at = Number(read("local", DISMISSED_KEY));
  return Number.isFinite(at) && at > 0 && Date.now() - at < days * DAY_MS;
}

export function markDismissed() {
  write("local", DISMISSED_KEY, String(Date.now()));
}

export function popupShownThisSession(): boolean {
  return read("session", POPUP_SESSION_KEY) === "1";
}

export function markPopupShown() {
  write("session", POPUP_SESSION_KEY, "1");
}

/** Ask the dialog (mounted once in the root layout) to open. */
export function openLeadMagnet(placement: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { placement } }));
}

/** Reactive "has this visitor already subscribed?" flag (false during SSR). */
export function useSubscribed(): boolean {
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    const sync = () => setSubscribed(isSubscribed());
    sync();
    window.addEventListener(SUBSCRIBED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(SUBSCRIBED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return subscribed;
}
