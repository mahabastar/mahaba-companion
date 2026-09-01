import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Booking / trip enquiry submissions coming from the public site.
 *
 * Submissions are stored in the `bookings` table (visible in the internal
 * /admin/bookings console) using the service-role client, because the
 * public site has no authenticated session and RLS blocks anonymous
 * inserts by design.
 */
const BookingInput = z.object({
  tripName: z.string().trim().min(1).max(120),
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().default(""),
  travellers: z.coerce.number().int().min(1).max(40),
  startDate: z.string().trim().max(20).optional().default(""),
  endDate: z.string().trim().max(20).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  sourcePath: z.string().trim().max(200).optional().default(""),
});

export type BookingInputValues = z.input<typeof BookingInput>;

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => BookingInput.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("bookings").insert({
      trip_name: data.tripName,
      traveler_email: data.email,
      start_date: data.startDate || null,
      end_date: data.endDate || null,
      status: "inquiry" as const,
      itinerary: [
        {
          day: 1,
          title: `Enquiry from ${data.name}`,
          description: [
            `Travellers: ${data.travellers}`,
            data.phone ? `Phone/WhatsApp: ${data.phone}` : null,
            data.sourcePath ? `Submitted from: ${data.sourcePath}` : null,
            data.message ? `Notes: ${data.message}` : null,
          ]
            .filter(Boolean)
            .join(" · "),
        },
      ],
    });

    if (error) {
      throw new Error("We couldn't save your request. Please try again.");
    }

    return { ok: true as const };
  });
