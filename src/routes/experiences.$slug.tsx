import { createFileRoute, notFound } from "@tanstack/react-router";

import { ExperiencePage } from "@/components/ExperiencePage";
import { RouteErrorBoundary, RouteNotFoundBoundary } from "@/components/RouteBoundary";
import { getExperienceLive } from "@/lib/content.functions";
import { getExperience } from "@/lib/experiences";
import { SITE_CONFIG } from "@/lib/site-config";
import { EXPERIENCE_SEO_TITLES } from "@/lib/seo-titles";

export const Route = createFileRoute("/experiences/$slug")({
  loader: async ({ params }) => {
    // Keep the birding page on the reviewed, bundled source so new birding
    // improvements are not hidden by an older published database record.
    // All other experiences continue to prefer published database content.
    if (params.slug === "birding") {
      const bundledBirding = getExperience("birding");
      if (!bundledBirding) throw notFound();
      return bundledBirding;
    }

    // Use published database content when available. If the database lookup
    // fails or the item is not published there, use the bundled experience.
    let liveExperience = null;

    try {
      liveExperience = await getExperienceLive({ data: { slug: params.slug } });
    } catch (error) {
      console.error("Could not load live experience; trying bundled content.", error);
    }

    const experience = liveExperience ?? getExperience(params.slug);

    if (!experience) {
      throw notFound();
    }

    return experience;
  },

  head: ({ params, loaderData }) => {
    const canonicalUrl = `${SITE_CONFIG.url}/experiences/${params.slug}`;

    if (!loaderData) {
      return {
        links: [{ rel: "canonical", href: canonicalUrl }],
      };
    }

    const pageTitle =
      EXPERIENCE_SEO_TITLES[params.slug] ??
      `${loaderData.title} | Biikuya Trails Uganda`;

    const pageDescription =
      loaderData.excerpt?.trim() ||
      `Explore ${loaderData.title} with Biikuya Trails Uganda. Discover trip details and plan your Uganda experience with local knowledge.`;

    const imagePath = loaderData.heroImg;
    const socialImage =
      imagePath && /^https?:\/\//i.test(imagePath)
        ? imagePath
        : imagePath
          ? `${SITE_CONFIG.url}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`
          : undefined;

    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: pageDescription },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        ...(socialImage ? [{ property: "og:image", content: socialImage }] : []),
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: SITE_CONFIG.name },
        { name: "twitter:card", content: socialImage ? "summary_large_image" : "summary" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: pageDescription },
        ...(socialImage ? [{ name: "twitter:image", content: socialImage }] : []),
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },

  component: ExperienceRoute,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="experience" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="experience" />,
});

function ExperienceRoute() {
  const experience = Route.useLoaderData();

  return <ExperiencePage experience={experience} />;
}
