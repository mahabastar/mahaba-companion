import { SITE_CONFIG } from "@/lib/site-config";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {
  RouteErrorBoundary,
  RouteNotFoundBoundary,
} from "@/components/RouteBoundary";
import {
  getJournalPostLive,
  listJournalPosts,
} from "@/lib/content.functions";
import { getJournalPost as getStaticJournalPost } from "@/lib/journal-posts";

export const Route = createFileRoute("/travel-journal/$slug")({
  loader: async ({ params }) => {
    const [livePost, all] = await Promise.all([
      getJournalPostLive({ data: { slug: params.slug } }),
      listJournalPosts(),
    ]);

    // Fall back to the local journal source if this article has no matching
    // published Supabase row, preventing valid local article URLs from 404ing.
    const post = livePost ?? getStaticJournalPost(params.slug);

    if (!post) throw notFound();

    return { ...post, all };
  },

  head: ({ params, loaderData }) => {
    const url = `${SITE_CONFIG.url}/travel-journal/${params.slug}`;
    const ogImage = loaderData
      ? `${SITE_CONFIG.url}${loaderData.img}`
      : undefined;

    return {
      meta: loaderData
        ? [
            {
              title: `${loaderData.title} — Biikuya Trails Uganda Journal`,
            },
            {
              name: "description",
              content: loaderData.excerpt,
            },
            {
              property: "og:title",
              content: loaderData.title,
            },
            {
              property: "og:description",
              content: loaderData.excerpt,
            },
            {
              property: "og:image",
              content: ogImage!,
            },
            {
              property: "og:url",
              content: url,
            },
            {
              property: "og:type",
              content: "article",
            },
            {
              property: "og:site_name",
              content: SITE_CONFIG.name,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
            {
              name: "twitter:title",
              content: loaderData.title,
            },
            {
              name: "twitter:description",
              content: loaderData.excerpt,
            },
            {
              name: "twitter:image",
              content: ogImage!,
            },
          ]
        : [],
      links: [{ rel: "canonical", href: url }],
    };
  },

  component: JournalArticle,

  errorComponent: (props) => (
    <RouteErrorBoundary {...props} label="journal story" />
  ),

  notFoundComponent: () => (
    <RouteNotFoundBoundary label="journal story" />
  ),
});

function JournalArticle() {
  const { all: JOURNAL_POSTS, ...post } = Route.useLoaderData();

  // FAQs are optional, so existing journal posts continue
  // to render without requiring changes to every article.
  const faqs = (
    post as typeof post & {
      faqs?: { q: string; a: string }[];
    }
  ).faqs ?? [];

  // Find related articles from the same category.
  const related = JOURNAL_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3);

  // If no articles share the category, show other articles.
  const relatedFallback =
    related.length > 0
      ? related
      : JOURNAL_POSTS.filter(
          (p) => p.slug !== post.slug,
        ).slice(0, 3);

  // Structured data helps search engines identify the page as an article.
  // Keep URLs aligned with the existing canonical URL and article image.
  const canonicalUrl = `${SITE_CONFIG.url}/travel-journal/${post.slug}`;
  const imageUrl = post.img.startsWith("http")
    ? post.img
    : `${SITE_CONFIG.url}${post.img.startsWith("/") ? "" : "/"}${post.img}`;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    articleSection: post.category,
    inLanguage: "en",
  };

  const faqStructuredData =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  return (
    <div className="bg-ivory text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[70svh] w-full overflow-hidden bg-charcoal">
        <img
          src={post.img}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />

        <div className="relative mx-auto flex min-h-[70svh] max-w-[900px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <nav className="mb-6 text-xs uppercase tracking-widest text-ivory/70">
            <Link
              to="/travel-journal"
              className="hover:text-gold"
            >
              Journal
            </Link>

            <span className="mx-2">/</span>

            <span className="text-ivory/50">
              {post.category}
            </span>
          </nav>

          <div className="eyebrow !text-gold">
            {post.category} · {post.readMins} min read
          </div>

          <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,4rem)] text-ivory text-balance">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:px-10 md:py-24">
          {post.body.map((para: string, index: number) => (
            <p
              key={index}
              className="mb-6 text-lg leading-relaxed text-charcoal/80 text-pretty"
            >
              {para}
            </p>
          ))}

          {/* Optional Pull Quote */}
          {post.pullQuote && (
            <blockquote className="my-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-charcoal text-balance">
              &ldquo;{post.pullQuote}&rdquo;
            </blockquote>
          )}

          {/* Frequently Asked Questions */}
          {faqs.length > 0 && (
            <section
              className="mt-14 border-t border-charcoal/15 pt-10"
              aria-labelledby="article-faq-heading"
            >
              <div className="eyebrow !text-forest">
                Helpful answers
              </div>

              <h2
                id="article-faq-heading"
                className="mt-3 mb-6 font-display text-3xl text-charcoal text-balance"
              >
                Frequently asked questions
              </h2>

              <div className="divide-y divide-charcoal/15">
                {faqs.map((faq, index) => (
                  <details
                    key={`${faq.q}-${index}`}
                    className="group py-5"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-charcoal marker:hidden">
                      <span>{faq.q}</span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-forest transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-3 pr-6 text-base leading-relaxed text-charcoal/75">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Featured Destination */}
          {post.destination && (
            <div className="mt-12 rounded-3xl bg-forest/5 p-8 md:p-10">
              <div className="eyebrow !text-forest">
                Featured in this story
              </div>

              <div className="mt-2 font-display text-2xl text-charcoal">
                {post.destination.name}
              </div>

              <Link
                to={post.destination.to}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
              >
                Explore this destination{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {relatedFallback.length > 0 && (
        <section className="bg-charcoal grain">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="eyebrow !text-gold">
              Keep reading
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedFallback.map((p) => (
                <Link
                  key={p.slug}
                  to="/travel-journal/$slug"
                  params={{ slug: p.slug }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />

                  <div className="absolute inset-x-4 bottom-4">
                    <div className="text-[0.65rem] uppercase tracking-widest text-gold">
                      {p.category}
                    </div>

                    <div className="mt-1 font-display text-lg text-ivory">
                      {p.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
