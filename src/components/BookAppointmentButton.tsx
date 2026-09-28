import { BOOKING_URL } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

interface BookAppointmentButtonProps {
  label?: string;
  /** Where the button sits, for analytics. */
  source?: string;
  className?: string;
}

/**
 * Link to the Picktime appointment page. Opens in a new tab and is styled to
 * match the site rather than using Picktime's stock violet button image.
 */
export function BookAppointmentButton({
  label = "Book an appointment",
  source = "site",
  className = "",
}: BookAppointmentButtonProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("book_appointment_click", { source })}
      className={`inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory shadow-md transition-all hover:scale-105 hover:bg-forest-deep ${className}`}
    >
      {label} <span aria-hidden>→</span>
    </a>
  );
}
