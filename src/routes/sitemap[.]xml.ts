import { createFileRoute } from "@tanstack/react-router";

import { EXPERIENCES } from "@/lib/experiences";
import { JOURNEYS } from "@/lib/journeys";
import { JOURNAL_POSTS } from "@/lib/journal-posts";

const BASE_URL = "https://www.biikuyatrailsuganda.com";

const STATIC_PATHS = [
  "/",
  "/about",
  "/ai-trip-planner",
  "/bird-guide",
  "/build-my-safari",
  "/coffee-tea-guide",
  "/contact",
  "/cultural-heritage",

  "/destinations/bwindi-impenetrable",
  "/destinations/chimpanzee-trekking",
  "/destinations/crater-lakes",
  "/destinations/entebbe",
  "/destinations/gorilla-trekking",
  "/destinations/jinja-source-of-the-nile",
  "/destinations/kibale-forest",
  "/destinations/kidepo-valley",
  "/destinations/lake-bunyonyi",
  "/destinations/lake-mburo",
  "/destinations/mgahinga-gorilla",
  "/destinations/mount-elgon",
  "/destinations/murchison-falls",
  "/destinations/queen-elizabeth-national-park",
  "/destinations/rwenzori-mountains",
  "/destinations/semuliki",
  "/destinations/sipi-falls",
  "/destinations/tree-climbing-lions",
  "/destinations/ziwa-rhino-sanctuary",

  "/experiences",
  "/faqs",
  "/food-guide",
  "/forests",
  "/gallery",
  "/gorilla-permit-guide",
  "/lakes",
  "/mountains",
  "/national-parks",
  "/packing-guide",
  "/quote-request",
  "/responsible-tourism",
  "/rivers",
  "/safari-budget-calculator",
  "/seasonal-safari-calendar",
  "/travel-journal",
  "/uganda-explorer",
  "/untold-secrets",
  "/visa-guide",
  "/weather",
  "/wild-uganda-tv",
  "/wildlife-encyclopedia",
  "/wildlife-reserves",
];

const DYNAMIC_PATHS = [
  ...EXPERIENCES.map((e) => `/experiences/${e.slug}`),
  ...JOURNEYS.map((j) => `/journeys/${j.slug}`),
  ...JOURNAL_POSTS.map((p) => `/travel-journal/${p.slug}`),
];

const ALL_PATHS = Array.from(new Set([...STATIC_PATHS, ...DYNAMIC_PATHS]));

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = STATIC_PATHS.map((path) => {
          const loc = `${BASE_URL}${path}`;

          return [
            "  <url>",
            `    <loc>${escapeXml(loc)}</loc>`,
            "  </url>",
          ].join("\n");
        }).join("\n");

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          urls,
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          status: 200,
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control":
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        });
      },
    },
  },
});
