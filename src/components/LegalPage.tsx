import { Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_CONFIG, buildEmailHref } from "@/lib/site-config";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

interface LegalPageProps {
  eyebrow: string;
  title: string;
  /** Shown as "Last updated" (legal pages) or "Last reviewed" (guides). */
  updated: string;
  updatedLabel?: string;
  intro: string;
  sections: LegalSection[];
  /** Number the section headings (legal pages) or leave them plain (guides). */
  numbered?: boolean;
  /** Frequently asked questions shown after the sections. */
  faqs?: { q: string; a: string }[];
  /** External sources, shown as links that open in a new tab. */
  sources?: { label: string; href: string }[];
  /** A related page, shown at the bottom. */
  related?: { label: string; to: string };
}

export function LegalPage({
  eyebrow,
  title,
  updated,
  updatedLabel = "Last updated",
  intro,
  sections,
  numbered = true,
  faqs,
  sources,
  related,
}: LegalPageProps) {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />

      <header className="relative bg-charcoal grain">
        <div className="relative z-10 mx-auto max-w-[900px] px-6 pb-14 pt-36 md:px-10 md:pb-20 md:pt-44">
          <div className="eyebrow !text-gold">{eyebrow}</div>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,6vw,3.8rem)] text-ivory text-balance">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-ivory/75">{intro}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-ivory/50">
            {updatedLabel}: {updated}
          </p>
        </div>
      </header>

      <main className="bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 py-14 md:px-10 md:py-20">
          {sections.map((s, i) => (
            <section key={s.title} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">
                {numbered ? `${i + 1}. ` : ""}
                {s.title}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-base leading-relaxed text-charcoal/75">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-charcoal/75">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {faqs && faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">Frequently asked questions</h2>
              <div className="mt-6 divide-y divide-charcoal/10 border-y border-charcoal/10">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <span className="font-display text-lg text-charcoal">{f.q}</span>
                      <span className="mt-1 shrink-0 text-gold transition-transform group-open:rotate-45">＋</span>
                    </summary>
                    <p className="mt-3 text-base leading-relaxed text-charcoal/75">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {sources && sources.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">Official sources</h2>
              <ul className="mt-4 space-y-2 text-base">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest underline underline-offset-4 hover:text-gold"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-16 rounded-2xl bg-mist p-6 md:p-8">
            <h2 className="font-display text-2xl text-charcoal">Questions?</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              Email{" "}
              <a
                className="text-forest underline underline-offset-4 hover:text-gold"
                href={buildEmailHref({ subject: `${title} question` })}
              >
                {SITE_CONFIG.email}
              </a>{" "}
              or message us on WhatsApp at {SITE_CONFIG.phoneWhatsApp}.
            </p>
            {related && (
              <p className="mt-4 text-sm text-charcoal/60">
                Also see our{" "}
                <Link to={related.to} className="text-forest underline underline-offset-4 hover:text-gold">
                  {related.label}
                </Link>
                .
              </p>
            )}
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
