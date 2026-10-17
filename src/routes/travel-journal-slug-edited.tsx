import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildPageMeta, getSiteUrl } from "@/lib/site-config";
import { JOURNAL_POSTS, getJournalPost } from "@/lib/journal-posts";

export const Route = createFileRoute("/travel-journal/$slug")({
  loader: ({ params }) => {
    const post = getJournalPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const path = `/travel-journal/${post.slug}`;

    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.img,
          mainEntityOfPage: getSiteUrl(path),
          url: getSiteUrl(path),
          datePublished: post.published,
          author: { "@type": "Organization", name: "Biikuya Trails Uganda" },
          publisher: {
            "@type": "Organization",
            name: "Biikuya Trails Uganda",
            url: getSiteUrl("/"),
          },
        }),
      },
      ...(post.faqs?.length
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: post.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            },
          ]
        : []),
    ];

    return {
      ...buildPageMeta({
        title: `${post.title} | Biikuya Trails Uganda`,
        description: post.excerpt,
        path,
        image: post.img,
        type: "article",
      }),
      scripts,
    };
  },
  notFoundComponent: JournalPostNotFound,
  component: JournalPostPage,
});

function JournalPostNotFound() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-center">
        <p className="eyebrow text-gold">Travel Journal</p>
        <h1 className="mt-4 font-display text-4xl">Story not found</h1>
        <p className="mt-4 text-charcoal/70">
          This story may have moved. Browse the journal for more Uganda travel
          stories and practical guides.
        </p>
        <Link to="/travel-journal" className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-medium text-white">
          Explore the travel journal
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function JournalPostPage() {
  const { post } = Route.useLoaderData();
  const relatedPosts = JOURNAL_POSTS
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <SiteNav />
      <header className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-4xl px-6 pb-14 pt-36 md:pb-20 md:pt-44">
          <Link to="/travel-journal" className="text-sm text-ivory/70 hover:text-gold">
            ← Back to the travel journal
          </Link>
          <p className="eyebrow mt-10 !text-gold">{post.category} · {post.readMins} min read</p>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-tight text-balance">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ivory/75">{post.excerpt}</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <figure className="mb-12 overflow-hidden rounded-3xl">
          <img src={post.img} alt={post.title} className="max-h-[580px] w-full object-cover" />
        </figure>

        {post.pullQuote && (
          <blockquote className="mb-10 border-l-4 border-gold pl-6 font-display text-2xl italic leading-relaxed text-forest md:text-3xl">
            {post.pullQuote}
          </blockquote>
        )}

        <article className="space-y-6 text-base leading-8 text-charcoal/85 md:text-lg">
          {post.body.map((paragraph, index) => {
            const text = paragraph.trim();
            if (!text) return null;
            if (text.startsWith("## ")) {
              return <h2 key={index} className="!mb-0 !mt-10 font-display text-2xl leading-tight text-charcoal md:text-3xl">{text.slice(3)}</h2>;
            }
            return <p key={index}>{text}</p>;
          })}
        </article>

        {post.faqs?.length ? (
          <section className="mt-14 border-t border-charcoal/10 pt-10">
            <h2 className="font-display text-3xl">Frequently asked questions</h2>
            <div className="mt-6 space-y-6">
              {post.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal/75">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {post.links?.length ? (
          <section className="mt-14 rounded-3xl bg-mist p-6 md:p-8">
            <h2 className="font-display text-2xl">Continue exploring Uganda</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {post.links.map((link) => (
                <Link key={`${link.label}-${link.to}`} to={link.to as "/travel-journal"} className="rounded-full border border-forest/20 bg-white px-4 py-2 text-sm text-forest hover:border-forest">
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {relatedPosts.length ? (
          <section className="mt-14 border-t border-charcoal/10 pt-10">
            <h2 className="font-display text-3xl">Related stories</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link key={related.slug} to="/travel-journal/$slug" params={{ slug: related.slug }} className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white">
                  <img src={related.img} alt={related.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5">
                    <p className="eyebrow !text-gold">{related.category}</p>
                    <h3 className="mt-2 font-display text-xl">{related.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-14 rounded-3xl bg-forest p-8 text-ivory md:p-10">
          <h2 className="font-display text-3xl">Plan your Uganda journey</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ivory/75">
            Talk to our local team about a birding trip, wildlife safari or tailor-made journey across Uganda.
          </p>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal hover:opacity-90">
            Contact Biikuya Trails Uganda
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
