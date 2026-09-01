import { createFileRoute } from "@tanstack/react-router";
import { CategoryHub } from "@/components/CategoryHub";
import expChimp from "@/assets/exp-chimp.jpg";
import { FORESTS } from "@/lib/forests";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/forests")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda's Forests — Biikuya Trails Uganda",
      description: "Bwindi, Kibale, Mabira and Budongo — Uganda's key forests for gorilla and chimpanzee trekking, canopy tours, and birding.",
      path: "/forests",
    }),
  }),
  component: () => (
    <CategoryHub
      eyebrow="Ancient Canopy"
      title={<>Where the primates <em className="italic text-gold">actually live</em>.</>}
      intro="Uganda's forests hold more primate diversity than almost anywhere on Earth — gorillas in the south-west, the continent's densest chimpanzee population in Kibale, and quieter escapes just outside Kampala."
      heroImage={expChimp}
      heroAlt="Chimpanzee in the forest canopy in Uganda"
      items={FORESTS}
      ctaTitle="Gorillas, chimps, or both?"
      ctaBody="Bwindi and Kibale can be combined on one western circuit — tell us how many days you have and we'll map the route."
    />
  ),
});
