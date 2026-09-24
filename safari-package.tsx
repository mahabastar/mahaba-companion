import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingForm } from "@/components/BookingForm";
import { JOURNEYS } from "@/lib/journeys";
import { LeadMagnetCTA } from "@/components/lead-magnet/LeadMagnetCTA";
import { SITE_CONFIG, buildPageMeta } from "@/lib/site-config";

const BEST_FOR: Record<string, string> = {
  "gorilla-escape": "A long weekend built around one gorilla trek",
  "budget-gorilla-safari": "The essential trek by road on a leaner budget",
  "gorilla-and-bunyonyi": "A gorilla trek by road, plus a day on the lake",
  "primates-adventure": "Gorillas, chimpanzees and golden monkeys",
  "pearl-of-africa": "First-timers who want the classic week",
  "wildlife-and-primates": "The classic route at a slower pace, with time for a second trek",
  "ultimate-uganda": "Adding Kidepo, the Rwenzori and the Nile to the classics",
  "grand-explorer": "The whole country, including Sipi Falls and two gorilla treks",
};

const CHOOSE = [
  { when: "3 to 4 days", pick: "Gorillas only. Choose Gorilla Escape, Budget Gorilla Safari, or Gorilla & Lake Bunyonyi." },
  { when: "5 days", pick: "Three primate treks in one arc: Primates Adventure." },
  { when: "7 to 10 days", pick: "The classic circuit of parks, primates and the Nile: Pearl of Africa, or Wildlife & Primates at a slower pace." },
  { when: "14 to 21 days", pick: "A fuller Uganda, reaching Kidepo and the Rwenzori: Ultimate Uganda or Grand Explorer." },
];

const HOW_IT_WORKS = [
  "Planned and guided locally by a Ugandan team.",
  "Permits and park bookings arranged for you.",
  "Private vehicles and guides rather than shared group transport.",
  "Adjusted to your dates, pace and budget.",
];

const GUIDES = [
  { name: "What a Gorilla Safari Costs", to: "/travel-journal/budget-gorilla-safari-uganda-cost", desc: "The permit, everything around it, and how to bring the total down." },
  { name: "Safari Budget Calculator", to: "/safari-budget-calculator", desc: "Estimate your trip cost before you request a quote." },
  { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide", desc: "Permit prices, low-season savings and how booking works." },
  { name: "Seasonal Safari Calendar", to: "/seasonal-safari-calendar", desc: "What is best each month, from dry-season treks to green-season birding." },
  { name: "First-Timer's Guide", to: "/travel-journal/uganda-safari-first-timers-guide", desc: "How long you need, when to go, what to book first and what to pack." },
  { name: "How Much Does a Uganda Safari Cost?", to: "/travel-journal/how-much-does-a-uganda-safari-cost", desc: "Daily rates by travel style and three worked examples." },
];

const FAQS = [
  {
    q: "How many days do I need for a Uganda safari?",
    a: "Three days is enough for a gorilla trek by road, five adds chimpanzees and golden monkeys, and seven covers the classic circuit of parks, primates and the Nile. Ten to twenty-one days let you go further and slower.",
  },
  {
    q: "Can I customise a package?",
    a: "Yes. Every package is a starting point, and we adjust it to your dates, pace and budget. You can also build your own route from scratch.",
  },
  {
    q: "What is the best time for a Uganda safari?",
    a: "The dry seasons of June to September and December to February are the most popular, but gorilla trekking runs year-round, and gorilla permits are cheaper in April, May and November. Our Seasonal Safari Calendar shows what is best each month.",
  },
  {
    q: "How much does a Uganda safari cost?",
    a: "It depends on the length, the season, the lodges and the transport. The gorilla permit is a fixed cost of USD 800 per person, or USD 600 in April, May and November. Use our Safari Budget Calculator for an estimate, or request a quote for a costed itinerary.",
  },
  {
    q: "Are the packages private or group tours?",
    a: "Our itineraries are built around private vehicles and guides rather than shared group transport, so the pace stays flexible.",
  },
  {
    q: "How do I book a package?",
    a: "Send a quote request with your dates and group size. We check availability, including gorilla permits, and reply with a costed itinerary. Permits are paid in full when you book.",
  },
];

export const Route = createFileRoute("/safari-package")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Tour Packages: Gorilla & Wildlife | Biikuya Trails",
      description:
        "Compare eight Uganda safari packages from 3 to 21 days: gorillas, chimps, wildlife and the Nile, planned and guided locally by Biikuya Trails Uganda.",
      path: "/safari-package",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Uganda safari packages",
          itemListElement: JOURNEYS.map((j, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${j.title} (${j.days} days)`,
            url: `${SITE_CONFIG.url}/journeys/${j.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
            { "@type": "ListItem", position: 2, name: "Safari Packages", item: `${SITE_CONFIG.url}/safari-package` },
          ],
        }),
      },
    ],
  }),
  component: SafariPackages,
});

function SafariPackages() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Uganda Safari Packages</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            Uganda safari packages, <em className="italic text-gold">built around you.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            Eight routes from a three-day gorilla trek to a three-week circuit of the whole country,
            each planned and guided locally and adjusted to your dates and budget.
          </p>
        </div>
      </section>

      {/* All packages */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow">All packages</div>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-charcoal text-balance md:text-5xl">
            Choose a route, <em className="italic text-forest">then make it yours</em>.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEYS.map((j) => (
              <Link
                key={j.slug}
                to="/journeys/$slug"
                params={{ slug: j.slug }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white hover-lift"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={j.img}
                    width={800}
                    height={600}
                    alt={j.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-charcoal">
                    {j.days} Days
                  </div>                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-charcoal">{j.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{j.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-forest">
                    View itinerary <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1000px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow">How to choose</div>
          <h2 className="mt-5 font-display text-4xl text-charcoal text-balance md:text-5xl">
            Start with the time you have.
          </h2>
          <div className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {CHOOSE.map((c) => (
              <div key={c.when} className="grid gap-2 py-6 md:grid-cols-[180px_1fr] md:gap-8">
                <div className="font-display text-xl text-forest">{c.when}</div>
                <p className="text-base leading-relaxed text-charcoal/75">{c.pick}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-16 font-display text-2xl text-charcoal">Packages compared</h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-charcoal/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-charcoal text-ivory">
                <tr>
                  <th className="px-4 py-3 font-medium">Package</th>
                  <th className="px-4 py-3 font-medium">Days</th>
                  <th className="px-4 py-3 font-medium">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                {JOURNEYS.map((j) => (
                  <tr key={j.slug}>
                    <td className="px-4 py-3 font-medium text-charcoal">
                      <Link to="/journeys/$slug" params={{ slug: j.slug }} className="text-forest hover:text-gold">
                        {j.title}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-charcoal/75">{j.days}</td>
                    <td className="px-4 py-3 text-charcoal/75">{BEST_FOR[j.slug] ?? j.tagline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How every package works */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1000px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow">How every package works</div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {HOW_IT_WORKS.map((h) => (
              <li key={h} className="flex gap-3 rounded-2xl bg-mist p-5 text-base text-charcoal/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Free Uganda Travel Guide */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 pt-20 md:px-10 md:pt-28">
          <LeadMagnetCTA placement="safari-package" />
        </div>
      </section>

      {/* Planning guides */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow">Plan your trip</div>
          <h2 className="mt-5 max-w-3xl font-display text-4xl text-charcoal text-balance md:text-5xl">
            Everything to know <em className="italic text-forest">before you book</em>.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="group rounded-2xl border border-charcoal/10 bg-white p-6 hover-lift"
              >
                <div className="font-display text-xl text-charcoal">{g.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{g.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-forest">
                  Read the guide <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="font-display text-lg text-charcoal">{f.q}</span>
                  <span className="mt-1 shrink-0 text-gold transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-charcoal/75">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-charcoal p-8 text-center text-ivory md:p-12">
            <h2 className="font-display text-2xl text-ivory">Not sure what a Uganda safari costs?</h2>
            <p className="mx-auto mt-3 max-w-md text-ivory/70">
              Use our safari cost calculator to estimate your budget before you request a custom itinerary.
            </p>
            <Link
              to="/safari-budget-calculator"
              className="mt-6 inline-block rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Estimate your safari cost
            </Link>
          </div>

          <div className="mt-16">
            <BookingForm
              tripName="Uganda Safari Package"
              sourcePath="/safari-package"
              title="Request a package booking"
              intro="Tell us which package interests you, your dates and group size. A Ugandan guide-planner will reply with availability and a costed itinerary."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
