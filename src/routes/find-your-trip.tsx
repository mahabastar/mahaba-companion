import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { recommendTrips, type Recommendation } from "@/lib/recommend.functions";

export const Route = createFileRoute("/find-your-trip")({
  head: () => ({
    meta: [
      { title: "Find Your Uganda Trip: Personal Recommendations | Biikuya Trails Uganda" },
      { name: "description", content: "Tell us your interests, dates and favourite activities and get journeys and experiences matched to you." },
      { property: "og:title", content: "Find Your Uganda Trip | Biikuya Trails Uganda" },
      { property: "og:description", content: "Personal journey and experience recommendations for your Uganda trip." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FindYourTrip,
});

const ACTIVITIES = ["Gorilla trekking", "Chimp trekking", "Game drives", "Birding", "Hiking", "Rafting", "Boat cruises", "Culture", "Relaxing by lakes", "Coffee & tea"];
const FIELD = "mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-forest";
const LABEL = "block text-xs uppercase tracking-widest text-charcoal/60";

function FindYourTrip() {
  const run = useServerFn(recommendTrips);
  const [interests, setInterests] = useState("");
  const [startDate, setStart] = useState("");
  const [endDate, setEnd] = useState("");
  const [acts, setActs] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rec, setRec] = useState<Recommendation | null>(null);

  const toggle = (a: string) => setActs((s) => (s.includes(a) ? s.filter((x) => x !== a) : [...s, a]));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setRec(null);
    try {
      setRec(await run({ data: { interests, startDate, endDate, activities: acts } }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="eyebrow !text-forest">Personal recommendations</div>
        <h1 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">Find your Uganda trip</h1>
        <p className="mt-4 max-w-2xl text-charcoal/70">Tell us what you love, when you can travel and what you'd like to do. We'll match you with journeys and experiences from our collection.</p>

        <form onSubmit={submit} className="mt-10 rounded-3xl border border-charcoal/10 bg-white p-6 md:p-10">
          <label className={LABEL} htmlFor="fy-int">Your interests</label>
          <textarea id="fy-int" rows={4} required maxLength={1500} className={FIELD} value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="e.g. first safari, love primates and photography, travelling as a couple" />
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div><label className={LABEL} htmlFor="fy-s">Arrival</label><input id="fy-s" type="date" className={FIELD} value={startDate} onChange={(e) => setStart(e.target.value)} /></div>
            <div><label className={LABEL} htmlFor="fy-e">Departure</label><input id="fy-e" type="date" className={FIELD} value={endDate} onChange={(e) => setEnd(e.target.value)} /></div>
          </div>
          <div className={`${LABEL} mt-6`}>Activities you'd enjoy</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {ACTIVITIES.map((a) => (
              <button type="button" key={a} onClick={() => toggle(a)} aria-pressed={acts.includes(a)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${acts.includes(a) ? "border-forest bg-forest text-ivory" : "border-charcoal/15 text-charcoal hover:border-forest"}`}>
                {a}
              </button>
            ))}
          </div>
          {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={busy} className="mt-8 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory hover:bg-forest-deep disabled:opacity-60">
            {busy ? "Finding your matches…" : "Get recommendations"}
          </button>
        </form>

        {rec && (
          <section className="mt-12">
            <p className="text-lg text-charcoal/80">{rec.intro}</p>
            {rec.journeys.length > 0 && <h2 className="mt-8 font-display text-2xl text-charcoal">Journeys for you</h2>}
            <div className="mt-4 grid gap-4">
              {rec.journeys.map((j) => (
                <Link key={j.slug} to="/journeys/$slug" params={{ slug: j.slug }} className="rounded-2xl border border-charcoal/10 bg-white p-5 hover:border-forest">
                  <div className="font-display text-xl text-charcoal">{j.title}</div>
                  <p className="mt-1 text-sm text-charcoal/70">{j.reason}</p>
                </Link>
              ))}
            </div>
            {rec.experiences.length > 0 && <h2 className="mt-10 font-display text-2xl text-charcoal">Experiences to add</h2>}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {rec.experiences.map((e) => (
                <Link key={e.slug} to="/experiences/$slug" params={{ slug: e.slug }} className="rounded-2xl border border-charcoal/10 bg-white p-5 hover:border-forest">
                  <div className="font-display text-lg text-charcoal">{e.title}</div>
                  <p className="mt-1 text-sm text-charcoal/70">{e.reason}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
