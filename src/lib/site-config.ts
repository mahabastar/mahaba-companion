/**
 * Single source of truth for Biikuya Trails Uganda business identity,
 * contact details, canonical URL, and verified social profiles.
 *
 * IMPORTANT:
 * Keep factual business information here only.
 * SEO keywords belong in page-specific metadata and content.
 */

export const SITE_CONFIG = {
  /**
   * Primary brand name.
   */
  name: "Biikuya Trails Uganda",

  /**
   * Single canonical website origin.
   *
   * All canonical URLs, sitemap URLs, Open Graph URLs and structured
   * data should ultimately resolve to this origin.
   */
  url: "https://www.biikuyatrailsuganda.com",

  /**
   * Default social sharing image used whenever a page has no
   * meaningful hero of its own. Absolute URL — required by crawlers.
   */
  socialImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/GFmBvthTZXOQLte29ny3bTtPx8W2/social-images/social-1786073343154-social-image.webp",


  /**
   * Primary business email.
   */
  email: "trekwilduganda@gmail.com",

  /**
   * WhatsApp number in international digits-only format.
   *
   * Required for wa.me URLs.
   */
  whatsappNumber: "256774959383",

  /**
   * Display-formatted contact numbers.
   */
  phoneWhatsApp: "+256 774 959383",
  phoneLandline: "+256 755 393233",

  /**
   * Verified/promoted social profiles.
   *
   * Only profiles that are confirmed to represent Biikuya Trails Uganda
   * should be exposed through Organization structured data.
   */
  social: {
    /**
     * Instagram is currently not promoted or verified.
     *
     * Kept as null rather than publishing an unverified URL in
     * structured data.
     */
    instagram: null,

    /**
     * Official Biikuya Trails Uganda TikTok profile.
     */
    tiktok: "https://www.tiktok.com/@trek_wild_uganda",

    /**
     * Facebook profile currently requires verification.
     *
     * Keep null until the official Biikuya Trails Uganda Facebook Page
     * URL has been confirmed.
     */
    facebook: null,

    /**
     * Official Biikuya Trails Uganda YouTube channel.
     */
    youtube: "https://www.youtube.com/@trekwilduganda",
  },
} as const;

/**
 * Returns the canonical website origin without a trailing slash.
 *
 * This prevents accidental double slashes when constructing URLs.
 */
export function getSiteUrl(path = ""): string {
  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";

  return `${SITE_CONFIG.url}${normalizedPath}`;
}

/**
 * Builds a wa.me link with a pre-filled, URL-encoded message.
 */
export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

/**
 * Builds a mailto: link with an optional subject and body.
 */
export function buildEmailHref(
  options: {
    subject?: string;
    body?: string;
  } = {},
): string {
  const params = new URLSearchParams();

  if (options.subject) {
    params.set("subject", options.subject);
  }

  if (options.body) {
    params.set("body", options.body);
  }

  const query = params.toString();

  return `mailto:${SITE_CONFIG.email}${query ? `?${query}` : ""}`;
}

/**
 * Returns only social profiles that are actually configured.
 *
 * Useful when generating Schema.org sameAs arrays.
 */
export function getVerifiedSocialProfiles(): string[] {
  return (Object.values(SITE_CONFIG.social) as (string | null)[]).filter(
    (url): url is string => typeof url === "string" && url.length > 0,
  );
}


/**
 * Builds a consistent per-page head() object: title, description,
 * Open Graph, Twitter and a self-referencing canonical.
 *
 * Global identity (Organization / WebSite schema, site name, icons)
 * stays in __root.tsx — pages only add what is specific to them.
 */
export function buildPageMeta(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  robots?: string;
}) {
  const canonicalUrl = getSiteUrl(options.path);
  const ogType = options.type ?? "website";
  const rawImage = options.image ?? SITE_CONFIG.socialImage;
  const image = rawImage.startsWith("http")
    ? rawImage
    : getSiteUrl(rawImage);

  return {
    meta: [
      { title: options.title },
      { name: "description", content: options.description },
      { name: "robots", content: options.robots ?? "index,follow,max-image-preview:large" },
      { property: "og:site_name", content: SITE_CONFIG.name },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}



/**
 * Locally served brand logo. Kept in /public so it can never 404
 * the way an externally hosted asset can.
 */
export const LOGO_URL = "/logo.png";
