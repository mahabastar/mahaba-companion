import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

import heroGorilla from "@/assets/hero-gorilla.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneCrane from "@/assets/scene-crane.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import rhinoZiwa from "@/assets/rhino-ziwa.jpg";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/wildlife-encyclopedia")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Wildlife Encyclopedia & Animal Guide | Biikuya Trails",
      description: "A searchable guide to Uganda’s wildlife, from the Big Five to primates, birds and reptiles — what to look for, where to see it, and when.",
      path: "/wildlife-encyclopedia",
    }),
  }),
  component: WildlifeEncyclopedia,
});

/* ---------------- Data ---------------- */

type Category = "Mammals" | "Primates" | "Birds" | "Reptiles";
type Filter = Category | "All" | "Big Five";

type Species = {
  id: string;
  name: string;
  latin: string;
  category: Category;
  status: "Endangered" | "Vulnerable" | "Near Threatened" | "Least Concern";
  blurb: string;
  bestSeen: string;
  whereToSee: { name: string; to: string }[];
  img?: string;
  bigFive?: boolean;
};

const BIG_FIVE_LINK = {
  name: "Uganda Big Five Safari",
  to: "/destinations/uganda-big-five-safari",
};

const SPECIES: Species[] = [
  {
    id: "mountain-gorilla",
    name: "Mountain Gorilla",
    latin: "Gorilla beringei beringei",
    category: "Primates",
    status: "Endangered",
    blurb:
      "Uganda's signature encounter. Families are tracked daily through Bwindi's forest, offering a rare hour face-to-face with one of our closest living relatives.",
    bestSeen: "Year-round, drier months (Jun–Aug, Dec–Feb) ease the trek",
    whereToSee: [{ name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" }],
    img: heroGorilla,
  },
  {
    id: "chimpanzee",
    name: "Chimpanzee",
    latin: "Pan troglodytes",
    category: "Primates",
    status: "Endangered",
    blurb:
      "Boisterous, intelligent and highly social, chimp communities move through the forest canopy in loose troops — expect noise, drama and the occasional charging display.",
    bestSeen: "Year-round; early morning tracking gives the best odds",
    whereToSee: [{ name: "Chimpanzee Trekking, Kibale", to: "/destinations/chimpanzee-trekking" }],
    img: expChimp,
  },
  {
    id: "golden-monkey",
    name: "Golden Monkey",
    latin: "Cercopithecus kandti",
    category: "Primates",
    status: "Endangered",
    blurb:
      "A flash of burnt-orange fur high in the bamboo of the Virunga foothills — playful, fast-moving, and found almost nowhere else on Earth.",
    bestSeen: "Year-round, best in the Virunga bamboo zone",
    whereToSee: [{ name: "Gorilla Trekking", to: "/destinations/gorilla-trekking" }],
  },
  {
    id: "african-elephant",
    name: "African Elephant",
    latin: "Loxodonta africana",
    category: "Mammals",
    status: "Endangered",
    blurb:
      "One of Uganda’s Big Five. Herds move along ancient river paths through Murchison Falls, often crossing the Nile itself — matriarchs leading calves down to drink at dusk — and also gather along Queen Elizabeth’s Kazinga Channel.",
    bestSeen: "Dry season (Dec–Feb, Jun–Sep) for easier river-crossing sightings",
    whereToSee: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park" },
      BIG_FIVE_LINK,
    ],
    img: sceneElephants,
    bigFive: true,
  },
  {
    id: "tree-climbing-lion",
    name: "Tree-Climbing Lion",
    latin: "Panthera leo",
    category: "Mammals",
    status: "Vulnerable",
    blurb:
      "One of Uganda’s Big Five. Lions hunt the open plains of Queen Elizabeth, Murchison Falls and Kidepo, and in the Ishasha sector they are famous for lounging in fig trees — one of very few places in Africa where this is regularly seen.",
    bestSeen: "Dry season mornings, when they climb to escape the heat and biting flies",
    whereToSee: [
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
      { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park" },
      BIG_FIVE_LINK,
    ],
    img: sceneLion,
    bigFive: true,
  },
  {
    id: "african-buffalo",
    name: "African Buffalo",
    latin: "Syncerus caffer",
    category: "Mammals",
    status: "Near Threatened",
    blurb:
      "One of Uganda’s Big Five. Herds of hundreds gather on the savannah at Murchison and Ishasha, and by reputation buffalo are the most unpredictable when alone.",
    bestSeen: "Year-round on open savannah, especially near water in the dry season",
    whereToSee: [
      { name: "Murchison Falls", to: "/destinations/murchison-falls" },
      { name: "Tree-Climbing Lions, Ishasha", to: "/destinations/tree-climbing-lions" },
      BIG_FIVE_LINK,
    ],
    bigFive: true,
  },
  {
    id: "southern-white-rhino",
    name: "Southern White Rhino",
    latin: "Ceratotherium simum simum",
    category: "Mammals",
    status: "Near Threatened",
    blurb:
      "One of Uganda’s Big Five, and the only rhino you can see in the country. Uganda’s wild rhinos were lost to poaching decades ago; today reintroduced southern white rhinos live at Ziwa Rhino Sanctuary and are tracked on foot with an armed ranger.",
    bestSeen: "Year-round; early morning tracking is coolest and rhinos are most active",
    whereToSee: [
      { name: "Ziwa Rhino Sanctuary", to: "/destinations/ziwa-rhino-sanctuary" },
      BIG_FIVE_LINK,
    ],
    img: rhinoZiwa,
    bigFive: true,
  },
  {
    id: "uganda-kob",
    name: "Uganda Kob",
    latin: "Kobus kob thomasi",
    category: "Mammals",
    status: "Least Concern",
    blurb:
      "A russet-coated antelope and Uganda's national emblem — males gather on breeding grounds called leks, performing display duels at dawn.",
    bestSeen: "Year-round; lek displays peak at sunri
