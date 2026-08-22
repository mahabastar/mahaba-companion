import { createFileRoute } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import { LAKES } from "@/lib/lakes";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/lakes")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda's Great Lakes — Trek Wild Uganda",
      description: "Lake Bunyonyi, Lake Victoria, Lake Albert and the Kazinga Channel — Uganda's most striking lakes and waterways, in one place.",
      path: "/lakes",
    }),
  }),
  component: () => (
    <CategoryHub
      eyebrow="Uganda's Waterways"
      title={<>Lakes that shape <em className="italic text-gold">every itinerary</em>.</>}
      intro="Uganda sits inside the African Great Lakes region, and its lakes are rarely a detour — they're often the destination. From dugout canoes on Bunyonyi to the highest hippo density in Africa on the Kazinga Channel."
      heroImage={sceneBunyonyi}
      heroAlt="Terraced hills surrounding Lake Bunyonyi, Uganda"
      items={LAKES}
      ctaTitle="Not sure which lake fits your trip?"
      ctaBody="Lake Bunyonyi pairs with gorilla trekking; the Kazinga Channel sits inside Queen Elizabeth National Park. Tell us your route and we'll place it."
    />
  ),
});
