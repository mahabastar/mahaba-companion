import { SITE_CONFIG } from "@/lib/site-config";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { RouteErrorBoundary, RouteNotFoundBoundary } from "@/components/RouteBoundary";
import { JOURNAL_POSTS, getJournalPost, type JournalPost } from "@/lib/journal-posts";
import { JOURNEYS } from "@/lib/journeys";
import { LeadMagnetCTA } from "@/components/lead-magnet/LeadMagnetCTA";
import { JOURNAL_SEO_TITLES } from "@/lib/seo-titles";


function articleScripts(post: JournalPost, url: string, image: string) {
  const org = { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image,
    ...(post.published ? { datePublished: post.published, dateModified: post.published } : {}),
    author: org,
    publisher: { ...org, logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/logo.png` } },
    mainEntityOfPage: url,
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
      { "@type": "ListItem", position: 2, name: "Travel Journal", item: `${SITE_CONFIG.url}/travel-journal` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
  const scripts = [
    { type: "application/ld+json", children: JSON.stringify(article) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
  ];
  if (post.faqs?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    });
  }
  return scripts;
}

function renderBody(body: string[]) {
  const out: ReactNode[] = [];
  let list: string[] = [];
  const flush = (key: string) => {
    if (list.length) {
      out.push(
        <ul key={key} className="mb-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-charcoal/80">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  body.forEach((para, i) => {
    if (para.startsWith("- ")) {
      list.push(para.slice(2));
      return;
    }
    flush(`ul-${i}`);
    if (para.startsWith("### ")) {
      out.push(<h3 key={i} className="mb-3 mt-8 font-display text-xl text-charcoal">{para.slice(4)}</h3>);
    } else if (para.startsWith("## ")) {
      out.push(<h2 key={i} className="mb-4 mt-12 font-display text-2xl text-charcoal md:text-3xl">{para.slice(3)}</h2>);
    } else {
      out.push(<p key={i} className="mb-6 text-lg leading-relaxed text-charcoal/80 text-pretty">{para}</p>);
    }
  });
  flush("ul-end");
  return out;
}

export const Route = createFileRoute("/travel-journal/$slug")({
  loader: ({ params }) => {
    const post = getJournalPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const url = `${SITE_CONFIG.url}/travel-journal/${params.slug}`;
    const ogImage = loaderData ? `${SITE_CONFIG.url}${loaderData.img}` : undefined;
    return {
    meta: loaderData
      ? [
          { title: JOURNAL_SEO_TITLES[params.slug] ?? `${loaderData.title} | Biikuya Trails` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: ogImage! },
          { property: "og:url", content: url },
          { property: "og:type", content: "article" },
          { property: "og:site_name", content: SITE_CONFIG.name },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: loaderData.title },
          { name: "twitter:description", content: loaderData.excerpt },
          { name: "twitter:image", content: ogImage! },
        ]
      : [],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData ? articleScripts(loaderData, url, ogImage!) : [],
    };
  },
  component: JournalArticle,
  errorComponent: (props) => <RouteErrorBoundary {...props} label="journal story" />,
  notFoundComponent: () => <RouteNotFoundBoundary label="journal story" />,
});

function JournalArticle() {
  const post = Route.useLoaderData();

  const journey = post.journeySlug ? JOURNEYS.find((j) => j.slug === post.journeySlug) : undefined;
  const related = JOURNAL_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const relatedFallback = related.length > 0 ? related : JOURNAL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[70svh] w-full overflow-hidden bg-charcoal">
        <img src={post.img} width={1600} height={900} alt={post.title} className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-[900px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <nav className="mb-6 text-xs uppercase tracking-widest text-ivory/70">
            <Link to="/travel-journal" className="hover:text-gold">Journal</Link>
            <span className="mx-2">/</span>
            <span className="text-ivory/50">{post.category}</span>
          </nav>
          <div className="eyebrow !text-gold">{post.category} · {post.readMins} min read</div>
          <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,4rem)] text-ivory text-balance">{post.title}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:px-10 md:py-24">
          {renderBody(post.body)}

          {post.pullQuote && (
            <blockquote className="my-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-charcoal text-balance">
              &ldquo;{post.pullQuote}&rdquo;
            </blockquote>
          )}

          <LeadMagnetCTA placement={`journal-post-${post.slug}`} variant="inline" className="my-10" />

          {post.destination && (
            <div className="mt-12 rounded-3xl bg-forest/5 p-8 md:p-10">
              <div className="eyebrow !text-forest">Featured in this story</div>
              <div className="mt-2 font-display text-2xl text-charcoal">{post.destination.name}</div>
              <Link
                to={post.destination.to}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
              >
                Explore this destination <span aria-hidden>→</span>
              </Link>
            </div>
          )}

          {journey && (
            <div className="mt-8 rounded-3xl bg-gold/10 p-8 md:p-10">
              <div className="eyebrow !text-forest">Related package</div>
              <div className="mt-2 font-display text-2xl text-charcoal">
                {journey.title} · {journey.days} days
              </div>
              <p className="mt-2 text-base text-charcoal/70">{journey.tagline}</p>
              <Link
                to="/journeys/$slug"
                params={{ slug: journey.slug }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
              >
                View this itinerary <span aria-hidden>→</span>
              </Link>
            </div>
          )}

          {post.links && post.links.length > 0 && (
            <div className="mt-10">
              <div className="eyebrow">Related guides</div>
              <ul className="mt-4 space-y-2 text-lg">
                {post.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-forest underline underline-offset-4 hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">Frequently asked questions</h2>
              <div className="mt-6 divide-y divide-charcoal/10 border-y border-charcoal/10">
                {post.faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <span className="font-display text-lg text-charcoal">{f.q}</span>
                      <span className="mt-1 shrink-0 text-gold transition-transform group-open:rotate-45">＋</span>
                    </summary>
                    <p className="mt-3 text-base leading-relaxed text-charcoal/75">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {relatedFallback.length > 0 && (
        <section className="bg-charcoal grain">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="eyebrow !text-gold">Keep reading</div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedFallback.map((p) => (
                <Link
                  key={p.slug}
                  to="/travel-journal/$slug"
                  params={{ slug: p.slug }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <img src={p.img} width={800} height={600} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="text-[0.65rem] uppercase tracking-widest text-gold">{p.category}</div>
                    <div className="mt-1 font-display text-lg text-ivory">{p.title}</div>
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
