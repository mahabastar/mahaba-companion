import { createServerFn } from "@tanstack/react-start";
import { streamText, Output } from "ai";
import { z } from "zod";

import { JOURNEYS } from "@/lib/journeys";
import { EXPERIENCES } from "@/lib/experiences";

const Input = z.object({
  interests: z.string().trim().min(1).max(1500),
  startDate: z.string().max(20).optional().default(""),
  endDate: z.string().max(20).optional().default(""),
  activities: z.array(z.string().max(60)).max(20).default([]),
});

const Out = z.object({
  intro: z.string(),
  journeys: z.array(z.object({ slug: z.string(), reason: z.string() })),
  experiences: z.array(z.object({ slug: z.string(), reason: z.string() })),
});

export type Recommendation = {
  intro: string;
  journeys: { slug: string; title: string; reason: string }[];
  experiences: { slug: string; title: string; reason: string }[];
};

export const recommendTrips = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) => Input.parse(i))
  .handler(async ({ data }): Promise<Recommendation> => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI is not configured for this site yet.");
    const { createOpenAI } = await import("@ai-sdk/openai");
    const openai = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey: key,
      headers: { "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });

    const catalog = [
      "JOURNEYS:",
      ...JOURNEYS.map((j) => `- ${j.slug} | ${j.title} (${j.days} days) | ${j.tagline}`),
      "EXPERIENCES:",
      ...EXPERIENCES.map((e) => `- ${e.slug} | ${e.title} | ${e.excerpt}`),
    ].join("\n");

    const result = streamText({
      model: openai.responses("openai/gpt-6-astra"),
      output: Output.object({ schema: Out }),
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
      system:
        "You are a Uganda safari planner for Biikuya Trails Uganda. Recommend ONLY items from the catalog, using their exact slugs. Pick 1-3 journeys and 2-4 experiences. Each reason is one warm, specific sentence. Intro is 1-2 sentences. Consider season from the dates (Uganda dry seasons: Jun-Sep, Dec-Feb). No emoji or sales language.",
      prompt: [
        `Interests: ${data.interests}`,
        `Dates: ${data.startDate || "flexible"} to ${data.endDate || "flexible"}`,
        `Preferred activities: ${data.activities.join(", ") || "none specified"}`,
        "",
        catalog,
      ].join("\n"),
    });

    let out: z.infer<typeof Out>;
    try {
      out = await result.output;
    } catch {
      throw new Error("We couldn't build recommendations right now. Please try again shortly.");
    }

    const jMap = new Map(JOURNEYS.map((j) => [j.slug, j.title]));
    const eMap = new Map(EXPERIENCES.map((e) => [e.slug, e.title]));
    return {
      intro: out.intro,
      journeys: out.journeys
        .filter((j) => jMap.has(j.slug))
        .slice(0, 3)
        .map((j) => ({ ...j, title: jMap.get(j.slug)! })),
      experiences: out.experiences
        .filter((e) => eMap.has(e.slug))
        .slice(0, 4)
        .map((e) => ({ ...e, title: eMap.get(e.slug)! })),
    };
  });
