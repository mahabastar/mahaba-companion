import { createFileRoute } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import { RIVERS } from "@/lib/rivers";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/rivers")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda's Rivers — Trek Wild Uganda",
      description: "The Nile at its source and at Murchison Falls, the Kazinga Channel, and the Semliki River — Uganda's defining waterways.",
      path: "/rivers",
    }),
  }),
  component: () => (
    <CategoryHub
      eyebrow="The Nile & Beyond"
      title={<>One river, <em className="italic text-gold">four completely different faces</em>.</>}
      intro="The Nile begins gently in Jinja and ends violently through a 7-metre gorge at Murchison Falls — and it's just one of the waterways that define how Uganda's parks connect to each other."
      heroImage={nileBridgeAerial}
      heroAlt="Aerial view of the Nile River in Uganda"
      items={RIVERS}
      ctaTitle="Rafting, cruising, or just watching the water go by?"
      ctaBody="Whether it's white-water rafting in Jinja or a sunset cruise on the Nile at Murchison, tell us what you're after."
    />
  ),
});
