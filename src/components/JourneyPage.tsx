 import { LeadMagnetCTA } from "@/components/lead-magnet/LeadMagnetCTA";
import { Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingForm } from "@/components/BookingForm";
import { JOURNEYS, getJourney, type Journey } from "@/lib/journeys";

// Indicative "from" prices shown as a badge in the hero. Add a slug here to show one.
const PRICE_FROM: Record<string, string> = {
  "big-five-safari": "From about USD 2,600 per person sharing",
};

export function JourneyPage({ journey }: { journey: Journey }) {
  const otherJourneys = JOURNEYS.filter((j) => j.slug !== journey.slug).slice(0, 3);
  // FAQs come from the loaded journey, or from the bundled data when the journey
  // is served from a live database row that doesn't have them yet.
  const faqs = journey.faqs ?? getJourney(journey.slug)?.faqs;
  const priceFrom = PRICE_FROM[journey.slug];

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[75svh] w-full overflow-hidden bg-charcoal">
        <img src={journey.img} width={1600} height={900} alt={journey.title} className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        <div className="relative mx-auto flex min-h-[75svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <nav className="mb-6 text-xs uppercase tracking-widest text-ivory/70">
            <Link to="/safari-package" className="hover:text-gold">Safari Packages</Link>
          </nav>
          <div className="eyebrow !text-gold">{journey.days}-Day Journey</div>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">{journey.title}</h1>
          <p className="mt-4 max-w-xl text-lg text-ivory/75">{journey.tagline}</p>
          {priceFrom && (
            <div className="mt-6 inline-flex self-start rounded-full border border-gold/60 bg-charcoal/40 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gold backdrop-blur-sm">
              {priceFrom}
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-forest">Overview</div>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/80 text-pretty">{journey.overview}</p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {journey.highlights.map((h) => (
              <div key={h} className="flex gap-3 rounded-2xl bg-mist p-4 text-sm text-charcoal/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-charcoal grain text-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
          <div className="eyebrow !text-gold">The route</div>
          <h2 className="mt-4 font-display text-4xl text-ivory text-balance md:text-5xl">Day by day</h2>

          <div className="mt-14 space-y-10">
            {journey.itinerary.map((d) => (
              <div key={d.day} className="flex gap-6 border-b border-ivory/10 pb-10 last:border-0">
                <div className="shrink-0 font-display text-3xl text-gold/70 md:text-4xl">
                  {typeof d.day === "number" ? String(d.day).padStart(2, "0") : d.day}
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory md:text-2xl">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/70 md:text-base">{d.copy}</p>
                  {d.destination && (
                    <Link
                      to={d.destination.to}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-gold hover:text-ivory"
                    >
                      Explore {d.destination.name} <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
                    
