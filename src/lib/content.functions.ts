import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";
import { resolveImg } from "@/lib/asset-library";
import type { Journey } from "@/lib/journeys";
import type { Experience } from "@/lib/experiences";
import type { JournalPost, Category } from "@/lib/journal-posts";

export type ContentTable = "journeys" | "experiences" | "journal_posts";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

/* ---------------------------------- mapping --------------------------------- */

type Row = Record<string, unknown>;

export function mapJourney(r: Row): Journey {
  return {
    slug: String(r["slug"]),
    title: String(r["title"]),
    days: String(r["days"] ?? ""),
    tagline: String(r["tagline"] ?? ""),
    copy: String(r["copy_text"] ?? ""),
    img: resolveImg(r["img"] as string),
    overview: String(r["overview"] ?? ""),
    highlights: (r["highlights"] ?? []) as string[],
    itinerary: (r["itinerary"] ?? []) as Journey["itinerary"],
    destinations: (r["destinations"] ?? []) as Journey["destinations"],
  };
}

export function mapExperience(r: Row): Experience {
  return {
    slug: String(r["slug"]),
    title: String(r["title"]),
    tagline: String(r["tagline"] ?? ""),
    excerpt: String(r["excerpt"] ?? ""),
    heroImg: resolveImg(r["hero_img"] as string),
    intro: String(r["intro"] ?? ""),
    sections: (r["sections"] ?? []) as Experience["sections"],
    highlights: (r["highlights"] ?? []) as Experience["highlights"],
    ...(r["comparison"] ? { comparison: r["comparison"] as Experience["comparison"] } : {}),
    destinations: (r["destinations"] ?? []) as Experience["destinations"],
    ...(r["journey"] ? { journey: r["journey"] as Experience["journey"] } : {}),
    faqs: (r["faqs"] ?? []) as Experience["faqs"],
  };
}

export function mapJournalPost(r: Row): JournalPost {
  return {
    slug: String(r["slug"]),
    title: String(r["title"]),
    category: (r["category"] ?? "Destinations") as Category,
    excerpt: String(r["excerpt"] ?? ""),
    img: resolveImg(r["img"] as string),
    readMins: Number(r["read_mins"] ?? 5),
    ...(r["destination"] ? { destination: r["destination"] as JournalPost["destination"] } : {}),
    body: (r["body"] ?? []) as string[],
    ...(r["pull_quote"] ? { pullQuote: String(r["pull_quote"]) } : {}),
  };
}

/* ------------------------------- public reads ------------------------------- */

async function published(table: ContentTable) {
  const { data, error } = await publicClient()
    .from(table)
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as Row[];
}

export const listJourneys = createServerFn({ method: "GET" }).handler(async () =>
  (await published("journeys")).map(mapJourney),
);

export const listExperiences = createServerFn({ method: "GET" }).handler(async () =>
  (await published("experiences")).map(mapExperience),
);

export const listJournalPosts = createServerFn({ method: "GET" }).handler(async () =>
  (await published("journal_posts")).map(mapJournalPost),
);

export const listContentSlugs = createServerFn({ method: "GET" }).handler(async () => {
  const [journeys, experiences, posts] = await Promise.all([
    published("journeys"),
    published("experiences"),
    published("journal_posts"),
  ]);
  return {
    journeys: journeys.map((r) => ({ slug: String(r["slug"]), title: String(r["title"]), days: String(r["days"] ?? "") })),
    experiences: experiences.map((r) => ({ slug: String(r["slug"]), title: String(r["title"]) })),
    journalPosts: posts.map((r) => ({ slug: String(r["slug"]), title: String(r["title"]) })),
  };
});

/* -------------------------------- admin CRUD -------------------------------- */

const tableSchema = z.enum(["journeys", "experiences", "journal_posts"]);

export const adminListContent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { table: ContentTable }) => z.object({ table: tableSchema }).parse(input))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from(data.table)
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw new Error(error.message);
    return (rows ?? []) as Row[];
  });

export const adminSaveContent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { table: ContentTable; row: Record<string, unknown> }) =>
    z.object({ table: tableSchema, row: z.record(z.string(), z.unknown()) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const row = { ...data.row };
    delete row["created_at"];
    delete row["updated_at"];
    if (!row["id"]) delete row["id"];
    const query = row["id"]
      ? context.supabase.from(data.table).update(row as never).eq("id", row["id"] as string).select("*").single()
      : context.supabase.from(data.table).insert(row as never).select("*").single();
    const { data: saved, error } = await query;
    if (error) throw new Error(error.message);
    return saved as Row;
  });

export const adminDeleteContent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { table: ContentTable; id: string }) =>
    z.object({ table: tableSchema, id: z.string().uuid() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from(data.table).delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
