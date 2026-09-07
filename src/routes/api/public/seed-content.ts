import { createFileRoute } from "@tanstack/react-router";
import seed from "@/lib/__seed.json";

/** Temporary one-off route used to copy the original hardcoded content into the database. */
export const Route = createFileRoute("/api/public/seed-content")({
  server: {
    handlers: {
      POST: async () => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const data = seed as unknown as {
          JOURNEYS: Record<string, unknown>[];
          EXPERIENCES: Record<string, unknown>[];
          JOURNAL_POSTS: Record<string, unknown>[];
        };

        const journeys = data.JOURNEYS.map((r, i) => ({
          slug: r["slug"],
          title: r["title"],
          days: String(r["days"] ?? ""),
          tagline: r["tagline"] ?? "",
          copy_text: r["copy"] ?? "",
          img: r["img"] ?? "",
          overview: r["overview"] ?? "",
          highlights: r["highlights"] ?? [],
          itinerary: r["itinerary"] ?? [],
          destinations: r["destinations"] ?? [],
          sort_order: i * 10,
        }));

        const experiences = data.EXPERIENCES.map((r, i) => ({
          slug: r["slug"],
          title: r["title"],
          tagline: r["tagline"] ?? "",
          excerpt: r["excerpt"] ?? "",
          hero_img: r["heroImg"] ?? "",
          intro: r["intro"] ?? "",
          sections: r["sections"] ?? [],
          highlights: r["highlights"] ?? [],
          comparison: r["comparison"] ?? null,
          destinations: r["destinations"] ?? [],
          journey: r["journey"] ?? null,
          faqs: r["faqs"] ?? [],
          sort_order: i * 10,
        }));

        const posts = data.JOURNAL_POSTS.map((r, i) => ({
          slug: r["slug"],
          title: r["title"],
          category: r["category"] ?? "Destinations",
          excerpt: r["excerpt"] ?? "",
          img: r["img"] ?? "",
          read_mins: r["readMins"] ?? 5,
          destination: r["destination"] ?? null,
          body: r["body"] ?? [],
          pull_quote: r["pullQuote"] ?? null,
          sort_order: i * 10,
        }));

        const out: Record<string, unknown> = {};
        const tables = [
          ["journeys", journeys],
          ["experiences", experiences],
          ["journal_posts", posts],
        ] as const;

        for (const [table, rows] of tables) {
          const { error, count } = await supabaseAdmin
            .from(table)
            .upsert(rows as never, { onConflict: "slug", count: "exact" });
          out[table] = error ? error.message : (count ?? rows.length);
        }

        return new Response(JSON.stringify(out), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
