import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { listExperiences } from "@/lib/content.functions";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/experiences/")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Safari Experiences, Birding & Trip Styles | Biikuya Trails",
      description:
        "Explore Uganda safari experiences, including birding trips, wildlife viewing, family travel, honeymoons and primate trekking. Plan around your interests with local guidance.",
      path: "/experiences",
    }),
  }),
  loader: () => listExperiences(),
  component: ExperiencesIndex,
});

function ExperiencesIndex() {
  const EXPERIENCES = Route.useLoaderData();

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <section className="relative bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 pb-16 pt-40 text-center md:px-10 md:pb-20 md:pt-48">
          <div className="eyebrow !text-gold">Experiences in Uganda</div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            However you want <em className="italic text-gold">to travel.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/75">
            Discover Uganda at your own pace, from birdwatching and wildlife safaris to
            family holidays, honeymoons and primate trekking. Choose the experience that
            fits your interests, available time and travel style.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="eyebrow !text-forest">Find your kind of trip</div>
          <h2 className="mt-4 font-display text-3xl text-charcoal text-balance md:text-4xl">
            Explore Uganda safari experiences
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/75">
            Each journey can be shaped around the places you want to explore and the
            experiences that matter most to you. Review the options below, then follow
            the relevant guide or contact us to discuss a practical itinerary.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {EXPERIENCES.map((e) => (
              <Link
                key={e.slug}
                to="/experiences/$slug"
                params={{ slug: e.slug }}
                className="group relative block aspect-[16/10] overflow-hidden rounded-3xl hover-lift"
              >
                <img
                  src={e.heroImg}
                  width={800}
                  height={500}
                  alt={e.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="font-display text-2xl text-ivory md:text-3xl">{e.title}</div>
                  <p className="mt-2 max-w-md text-sm text-ivory/70">{e.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-20">
          <div>
            <div className="eyebrow !text-forest">Birding in Uganda</div>
            <h2 className="mt-4 font-display text-3xl text-charcoal text-balance md:text-4xl">
              Plan a Uganda birding safari
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/75">
              Uganda brings together Lake Victoria wetlands, forest habitats in the
              Albertine Rift, lowland rainforest and open savanna. A birding itinerary
              works best when it is planned around your target species, the habitats
              they use, the time you have available and realistic travel distances.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/75">
              From a guided search for the Shoebill at Mabamba Bay to forest birding in
              western Uganda, a knowledgeable local guide can help you use your time
              well while keeping wildlife observation responsible. Sightings of wild
              birds can never be guaranteed, so allow time to observe, listen and enjoy
              the wider birdlife as well as your priority species.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/experiences/birding"
                className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-deep"
              >
                Explore birding safaris
              </Link>
              <Link
                to="/bird-guide"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                Read the Uganda Bird Guide
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl bg-ivory p-7 md:p-8">
            <h3 className="font-display text-2xl text-charcoal">
              Useful birding resources
            </h3>
            <p className="mt-3 leading-relaxed text-charcoal/70">
              Learn about a signature wetland species and the region where many Uganda
              journeys begin.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/travel-journal/chasing-the-shoebill"
                className="font-medium text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                Shoebill birding in Uganda
              </Link>
              <Link
                to="/regions/central-uganda"
                className="font-medium text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                Explore Central Uganda
              </Link>
              <Link
                to="/regions/western-uganda"
                className="font-medium text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                Explore Western Uganda
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center md:px-10 md:py-20">
          <div className="eyebrow !text-gold">Make it your journey</div>
          <h2 className="mt-4 font-display text-3xl text-ivory text-balance md:text-4xl">
            Not sure which experience fits?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ivory/75">
            Tell us when you plan to travel, what you most want to see and how much
            time you have. We can help you think through the route and activities that
            fit your priorities.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full bg-ivory px-7 py-4 text-sm font-medium text-forest transition-colors hover:bg-gold"
          >
            Discuss your trip
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
