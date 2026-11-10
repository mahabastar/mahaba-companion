import { SITE_CONFIG } from "@/lib/site-config";
import { createFileRoute, notFound } from "@tanstack/react-router";

import { JourneyPage } from "@/components/JourneyPage";
import { RouteErrorBoundary, RouteNotFoundBoundary } from "@/components/RouteBoundary";
import { getJourneyLive } from "@/lib/content.functions";
import { getJourney, type Journey } from "@/lib/journeys";
import { JOURNEY_SEO_TITLES } from "@/lib/seo-titles";

// SEO fields (metaTitle, metaDescription, faqs) are read from the loaded journey
// first, then from the bundled journey data. The fallback means they still apply
// when the journey is served from a live database row that doesn't have them yet.
function getSeoFields(slug: string, journey: unknown) {
  const loaded = journey as Partial<Journey>;
  const bundled = getJourney(slug);
  return {
    metaTitle: loaded.metaTitle ?? bundled?.metaTitle,
    metaDescription: loaded.metaDescription ?? bundled?.metaDescription,
    faqs: loaded.faqs ?? bundled?.faqs,
  };
}

export const Route = createFileRoute("/journeys/$slug")({
  loader: async ({ params }) => {
    // Prefer live database content, but fall back to the bundled journey data
    // when a database row is missing.
    const liveJourney = await getJourneyLive({ data: { slug: params.slug } });
    const journey = liveJourney ?? getJourney(params.slug);
    if (!journey) throw notFound();
    return journey;
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_CONFIG.url}/journeys/${params.slug}`;

    if (!loaderData) {
      return { meta: [], links: [{ rel: "canonical", href: url }], scripts: [] };
    }

    const ogImage = `${SITE_CONFIG.url}${loaderData.img}`;
    const seo = getSeoFields(params.slug, loaderData);
    const pageTitle =
      seo.metaTitle ??
      JOURNEY_SEO_TITLES[params.slug] ??
      `${loaderData.days}-Day ${loaderData.title} Uganda Safari | Biikuya Trails`;
    const description = seo.metaDescription ?? loaderData.overview;

    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: loaderData.title, item: url },
        ],
      },
    ];

    if (seo.faqs && seo.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seo.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      });
    }

    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: description },
        { property: "og:title", content: seo.metaTitle ?? loaderData.title },
        { property: "og:description", content: description },
        { property: "og:image", content: ogImage },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: SITE_CONFIG.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.metaTitle ?? loaderData.title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    };
  },
  component: JourneyRoute,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="journey" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="journey" />,
});

function JourneyRoute() {
  const journey = Route.useLoaderData();
  return <JourneyPage journey={journey} />;
}
