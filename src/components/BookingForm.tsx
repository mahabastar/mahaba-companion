import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";

import { submitBooking } from "@/lib/booking.functions";
import { SITE_CONFIG, buildEmailHref, buildWhatsAppHref } from "@/lib/site-config";

type Props = {
  /** Trip / package this enquiry is about. */
  tripName: string;
  /** Path the form was submitted from, recorded with the enquiry. */
  sourcePath: string;
  /** Optional heading override. */
  title?: string;
  intro?: string;
};

const FIELD =
  "mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-forest";

const LABEL = "block text-xs uppercase tracking-widest text-charcoal/60";

/**
 * Real booking / trip enquiry form.
 *
 * Submissions are stored server-side and appear in the internal bookings
 * console. Travellers also get a one-click email and WhatsApp handoff so
 * nothing depends on a single channel.
 */
export function BookingForm({ tripName, sourcePath, title, intro }: Props) {
  const send = useServerFn(submitBooking);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    travellers: "2",
    startDate: "",
    endDate: "",
    message: "",
  });

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const summary = [
    `Trip: ${tripName}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone/WhatsApp: ${values.phone}` : null,
    `Travellers: ${values.travellers}`,
    values.startDate ? `Start: ${values.startDate}` : null,
    values.endDate ? `End: ${values.endDate}` : null,
    values.message ? `Notes: ${values.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      await send({
        data: {
          tripName,
          sourcePath,
          name: values.name,
          email: values.email,
          phone: values.phone,
          travellers: Number(values.travellers),
          startDate: values.startDate,
          endDate: values.endDate,
          message: values.message,
        },
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please email or WhatsApp us instead.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-forest/20 bg-white p-8 text-center md:p-10">
        <div className="eyebrow !text-forest">Request received</div>
        <h3 className="mt-4 font-display text-2xl text-charcoal">
          Thank you, {values.name.split(" ")[0] || "traveller"}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-charcoal/70">
          Your {tripName} enquiry is with our Kampala team. We normally reply
          within a few hours. Want it faster?
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={buildWhatsAppHref(`Hi! I just submitted a booking request.\n\n${summary}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-forest-deep"
          >
            Continue on WhatsApp
          </a>
          <a
            href={buildEmailHref({ subject: `Booking request — ${tripName}`, body: summary })}
            className="rounded-full border border-charcoal/15 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-forest hover:text-forest"
          >
            Email {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-charcoal/10 bg-white p-6 md:p-10">
      <div className="eyebrow !text-forest">{title ?? "Book this trip"}</div>
      <h3 className="mt-4 font-display text-2xl text-charcoal md:text-3xl">{tripName}</h3>
      <p className="mt-3 max-w-xl text-sm text-charcoal/65">
        {intro ??
          "Send us your dates and group size. A Ugandan guide-planner will come back to you with availability, permits and a costed itinerary."}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="bf-name">Full name</label>
          <input id="bf-name" className={FIELD} value={values.name} onChange={set("name")} required maxLength={100} placeholder="Jane Doe" />
        </div>

        <div>
          <label className={LABEL} htmlFor="bf-email">Email</label>
          <input id="bf-email" type="email" className={FIELD} value={values.email} onChange={set("email")} required maxLength={255} placeholder="you@example.com" />
        </div>

        <div>
          <label className={LABEL} htmlFor="bf-phone">Phone / WhatsApp (optional)</label>
          <input id="bf-phone" className={FIELD} value={values.phone} onChange={set("phone")} maxLength={40} placeholder="+1 555 000 0000" />
        </div>

        <div>
          <label className={LABEL} htmlFor="bf-travellers">Travellers</label>
          <input id="bf-travellers" type="number" min={1} max={40} className={FIELD} value={values.travellers} onChange={set("travellers")} required />
        </div>

        <div>
          <label className={LABEL} htmlFor="bf-start">Arrival date</label>
          <input id="bf-start" type="date" className={FIELD} value={values.startDate} onChange={set("startDate")} />
        </div>

        <div>
          <label className={LABEL} htmlFor="bf-end">Departure date</label>
          <input id="bf-end" type="date" className={FIELD} value={values.endDate} onChange={set("endDate")} />
        </div>

        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="bf-message">What matters most on this trip?</label>
          <textarea id="bf-message" rows={4} className={FIELD} value={values.message} onChange={set("message")} maxLength={2000} placeholder="Gorilla permits, lodge style, budget range, anything else…" />
        </div>
      </div>

      {error && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send booking request"}
        </button>

        <span className="text-xs text-charcoal/50">
          No payment now. We reply from {SITE_CONFIG.email}.
        </span>
      </div>
    </form>
  );
}
