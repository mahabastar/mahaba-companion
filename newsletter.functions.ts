import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { CONSENT_TEXT } from "@/lib/lead-magnet";

/**
 * Newsletter / free-guide sign-ups from the public site.
 *
 * Subscribers are stored in the `newsletter_subscribers` table using the
 * service-role client, because the public site has no authenticated session
 * and RLS blocks anonymous inserts by design. They can be reviewed and
 * exported in the internal /admin/subscribers console.
 */
const SubscribeInput = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name").max(80),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  source: z.string().trim().max(60).optional().default("website"),
  sourcePath: z.string().trim().max(200).optional().default(""),
  /** Honeypot: real visitors never see or fill this field. */
  website: z.string().max(200).optional().default(""),
});

export type SubscribeInputValues = z.input<typeof SubscribeInput>;

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SubscribeInput.parse(input))
  .handler(async ({ data }) => {
    // Bots fill the hidden field. Pretend it worked and store nothing.
    if (data.website) return { ok: true as const, alreadySubscribed: false };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("newsletter_subscribers").insert({
      email: data.email.toLowerCase(),
      first_name: data.firstName,
      source: data.source,
      source_path: data.sourcePath,
      consent: true,
      consent_text: CONSENT_TEXT,
    });

    if (error) {
      // 23505 = unique violation: this address is already on the list.
      if (error.code === "23505") return { ok: true as const, alreadySubscribed: true };
      throw new Error("We couldn't save your details. Please try again.");
    }

    return { ok: true as const, alreadySubscribed: false };
  });
