import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildPageMeta } from "@/lib/site-config";
import { REGION_SEO_TITLES } from "@/lib/seo-titles";
import { REGIONS } from "@/lib/regions-data";

export const Route = createFileRoute("/regions/$region")({
  loader: ({ params }) => {
    const region = REGIONS[params.region];
    if (!region) throw notFound();
    return { region: params.region };
  },
  head: ({ params }) => {
    const region = REGIONS[params.region];
    if (!region) {
      return {
        meta: [
          { title: "Region not found | Biikuya Trails Uganda" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title =
      REGION_SEO_TITLES[params.region] ??
      `${region.name} Travel Guide | Biikuya Trails`;
    const description = `${region.tagline} ${region.intro}`.slice(0, 155);
    return buildPageMeta({
      title,
      description,
      path: `/regions/${params.region}`,
      image: region.hero,
    });
  },
  notFoundComponent: () => <RegionNotFound />,
  component: RegionPage,
});

function RegionNotFound() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />
      <section className="mx-auto max-w-[900px] px-6 pb-24 pt-40 text-center md:px-10">
        <h1 className="font-display text-4xl text-charcoal md:text-5xl">
          That region doesn&rsquo;t exist
        </h1>
        <p className="mt-4 text-charcoal/70">
          Try the Uganda Explorer for every destination we cover.
        </p>
        <Link
          to="/uganda-explorer"
          className="mt-8 inline-flex rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory hover:bg-forest-deep"
        >
          Open Uganda Explorer
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}

function RegionPage() {
  const { region: slug } = Route.useParams();
  const region = REGIONS[slug];
  if (!region) throw notFound();

  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <section className="relative min-h-[60svh] w-full overflow-hidden bg-charcoal">
        <img
          src={region.hero}
          width={1600}
          height={900}
          alt={region.heroAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="relative mx-auto flex min-h-[60svh] max-w-[1000px] flex-col justify-end px-6 pb-16 pt-40 md:px-10">
          <div className="eyebrow !text-gold">{region.eyebrow}</div>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ivory text-balance">
            {region.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ivory/80">
            {region.tagline}
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-24">
          <p className="text-lg leading-relaxed text-charcoal/80 text-pretty">
            {region.intro}
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
          <div className="eyebrow !text-forest">Where to go</div>
          <h2 className="mt-4 font-display text-3xl text-charcoal text-balance md:text-4xl">
            Destinations in {region.name}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {region.spots.map((s) => (
              <Link
                key={s.name}
                to={s.to}
                className="group relative block overflow-hidden rounded-3xl hover-lift"
              >
                <img
                  src={s.img}
                  width={800}
                  height={600}
                  alt={s.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="font-display text-xl text-ivory md:text-2xl">
                    {s.name}
                  </div>
                  <p className="mt-1 text-sm text-ivory/75">{s.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep grain text-ivory">
        <div className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-24">
          <div className="eyebrow !text-gold">When to go</div>
          <p className="mt-5 text-lg leading-relaxed text-ivory/80 text-pretty">
            {region.when}
          </p>
          <Link
            to="/seasonal-safari-calendar"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold hover:text-ivory"
          >
            Seasonal calendar <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <div className="eyebrow !text-forest">Other regions</div>
          <div className="mt-6 flex flex-wrap gap-3">
            {Object.entries(REGIONS)
              .filter(([key]) => key !== slug)
              .map(([key, r]) => (
                <Link
                  key={key}
                  to="/regions/$region"
                  params={{ region: key }}
                  className="rounded-full border border-charcoal/15 px-5 py-3 text-sm text-charcoal/70 transition-colors hover:border-forest hover:text-forest"
                >
                  {r.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal grain">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-28">
          <h2 className="font-display text-4xl text-ivory text-balance md:text-5xl">
            Build a trip around{" "}
            <em className="italic text-gold">{region.name}</em>.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/build-my-safari"
              className="rounded-full bg-forest px-7 py-4 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
            >
              Plan my {region.name} trip
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ivory/40 px-7 py-4 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Ask a local guide
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
