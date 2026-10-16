import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildWhatsAppHref } from "@/lib/site-config";

export type GuideFact = { label: string; value: string };
export type GuideSection = { title: string; body: string; checklist?: string[] };
export type GuideFaq = { q: string; a: string };

export interface GuidePageProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  heroImage: string;
  heroAlt: string;
  facts: GuideFact[];
  sections: GuideSection[];
  faqs: GuideFaq[];
  related?: { name: string; to: string }[];
}

export function GuidePage(p: GuidePageProps) {
  const whatsappMessage =
    `Hi! I have a question after reading your ${
      typeof p.eyebrow === "string" ? p.eyebrow.toLowerCase() : "travel"
    } guide.`;

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative min-h-[55svh] w-full overflow-hidden bg-charcoal grain">
          <img
            src={p.heroImage}
            width={1600}
            height={900}
            alt={p.heroAlt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover ken-burns opacity-55"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative z-10 mx-auto flex min-h-[55svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 text-center md:px-10 md:pb-20">
            <div className="eyebrow !text-gold">{p.eyebrow}</div>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4rem)] text-ivory text-balance">
              {p.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/75">{p.intro}</p>
          </div>
        </section>

        {/* Quick facts */}
        {p.facts.length > 0 && (
          <section aria-label="Guide highlights" className="border-b border-charcoal/10 bg-ivory">
            <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:gap-10 md:px-10 md:py-14">
              {p.facts.map((fact) => (
                <div key={fact.label}>
                  <div className="eyebrow">{fact.label}</div>
                  <div className="mt-2 font-display text-2xl text-forest md:text-3xl">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main guide content */}
        <section className="bg-ivory">
          <div className="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-24">
            {p.sections.map((section) => (
              <section key={section.title} className="mb-14 last:mb-0">
                <h2 className="font-display text-2xl text-charcoal md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                  {section.body}
                </p>

                {section.checklist && section.checklist.length > 0 && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-mist px-4 py-3 text-sm text-charcoal/80"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 12.5 9.5 17 19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </section>

        {/* Related reading and useful next steps */}
        {p.related && p.related.length > 0 && (
          <section aria-labelledby="guide-related-heading" className="bg-white">
            <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
              <div className="eyebrow">Explore further</div>
              <h2
                id="guide-related-heading"
                className="mt-4 max-w-3xl font-display text-3xl text-charcoal text-balance md:text-4xl"
              >
                Keep planning your Uganda adventure.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-charcoal/70">
                Explore these related guides and experiences for more practical information
                and ideas for your itinerary.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.related.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-charcoal/10 bg-ivory px-5 py-5 transition hover:-translate-y-0.5 hover:border-forest/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
                  >
                    <span className="font-medium text-charcoal">{item.name}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-forest transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {p.faqs.length > 0 && (
          <section aria-labelledby="guide-faq-heading" className="bg-mist">
            <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10 md:py-28">
              <div className="eyebrow">Frequently asked</div>
              <h2
                id="guide-faq-heading"
                className="mt-5 max-w-3xl font-display text-3xl text-charcoal text-balance md:text-4xl"
              >
                What travellers <em className="italic text-forest">ask us</em> most.
              </h2>
              <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
                {p.faqs.map((faq) => (
                  <details key={faq.q} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
                      <span className="font-display text-lg text-charcoal md:text-xl">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-gold transition-transform group-open:rotate-45"
                      >
                        ＋
                      </span>
                    </summary>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/75">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Clear next step */}
        <section aria-labelledby="guide-cta-heading" className="bg-charcoal">
          <div className="mx-auto max-w-[1000px] px-6 py-20 text-center md:px-10 md:py-24">
            <h2
              id="guide-cta-heading"
              className="font-display text-3xl text-ivory md:text-4xl"
            >
              Let’s plan your trip around what matters to you.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ivory/70">
              Tell us what you would love to see and do in Uganda. We can help you explore
              the options and shape an itinerary around your interests.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/build-my-safari"
                className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Plan my safari
              </Link>
              <a
                href={buildWhatsAppHref(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-forest/70 px-7 py-4 text-sm font-medium text-ivory transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
