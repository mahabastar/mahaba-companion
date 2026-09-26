import { GUIDE_COVER, GUIDE_HEADLINE, GUIDE_TEASER, CTA_LABEL, openLeadMagnet, useSubscribed } from "@/lib/lead-magnet";

interface LeadMagnetCTAProps {
  /** Identifies where this CTA lives, for analytics (e.g. "homepage", "gorilla-trekking"). */
  placement: string;
  /** "card" (default): full block with cover image, for a page section.
   *  "inline": compact banner, for slotting into an existing section. */
  variant?: "card" | "inline";
  className?: string;
}

/**
 * Reusable "Get the Free Uganda Travel Guide" CTA. Opens the shared
 * sign-up dialog (mounted once in the root layout) rather than embedding
 * its own form, so there is exactly one sign-up flow site-wide. Hides
 * itself once the visitor has already subscribed.
 */
export function LeadMagnetCTA({ placement, variant = "card", className = "" }: LeadMagnetCTAProps) {
  const subscribed = useSubscribed();
  if (subscribed) return null;

  if (variant === "inline") {
    return (
      <div
        className={`flex flex-col items-start gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-5 sm:flex-row sm:items-center sm:justify-between ${className}`}
      >
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-forest">Free download</div>
          <p className="mt-1 text-sm text-charcoal/80">
            <span className="font-medium text-charcoal">{GUIDE_HEADLINE}</span> — practical tips before you go.
          </p>
        </div>
        <button
          type="button"
          onClick={() => openLeadMagnet(placement)}
          className="shrink-0 rounded-full bg-forest px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
        >
          {CTA_LABEL}
        </button>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-luxe ${className}`}>
      <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
        <div className="h-40 sm:h-full">
          <img
            src={GUIDE_COVER}
            width={480}
            height={679}
            alt="Cover of the FREE Uganda Travel Guide"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="eyebrow !text-forest">Free PDF Guide</div>
          <h3 className="mt-2 font-display text-xl text-charcoal text-balance sm:text-2xl">{GUIDE_HEADLINE}</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{GUIDE_TEASER}</p>
          <button
            type="button"
            onClick={() => openLeadMagnet(placement)}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep"
          >
            {CTA_LABEL} <span aria-hidden>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
