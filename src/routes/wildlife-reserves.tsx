import { createFileRoute } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import { WILDLIFE_RESERVES } from "@/lib/wildlife-reserves";
import elephantSavanna from "@/assets/elephant-savanna.jpg";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/wildlife-reserves")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda's Wildlife Reserves — Trek Wild Uganda",
      description: "Beyond the national parks — Ziwa Rhino Sanctuary, Pian Upe, Toro-Semliki and Kabwoya, Uganda's key wildlife reserves in one place.",
      path: "/wildlife-reserves",
    }),
  }),
  component: () => (
    <CategoryHub
      eyebrow="Beyond the National Parks"
      title={<>Wildlife reserves, <em className="italic text-gold">off the main circuit</em>.</>}
      intro="Uganda's national parks aren't the whole story. These community and government-run reserves protect rhinos, cheetah, and landscapes most visitors never see — often with far fewer people around."
      heroImage={elephantSavanna}
      heroAlt="Savanna wildlife reserve landscape in Uganda"
      items={WILDLIFE_RESERVES}
      ctaTitle="Want to add a reserve to your itinerary?"
      ctaBody="Ziwa Rhino Sanctuary pairs naturally with Murchison Falls — tell us your route and we'll work out where it fits."
    />
  ),
});
