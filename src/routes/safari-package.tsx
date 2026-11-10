import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BookingForm } from "@/components/BookingForm";
import { JOURNEYS } from "@/lib/journeys";
import { LeadMagnetCTA } from "@/components/lead-magnet/LeadMagnetCTA";
import { SITE_CONFIG, buildPageMeta } from "@/lib/site-config";

const BEST_FOR: Record<string, string> = {
  "gorilla-escape": "A long weekend built around one gorilla trek",
  "budget-gorilla-safari": "The essential trek by road on a leaner budget",
  "gorilla-and-bunyonyi": "A gorilla trek by road, plus a day on the lake",
  "primates-adventure": "Gorillas, chimpanzees and golden monkeys",
  "pearl-of-africa": "First-timers who want the classic week",
  "big-five-safari": "Rhinos on foot, lions and elephants, with honest odds on leopard",
  "wildlife-and-primates": "The classic route at a slower pace, with time for a second trek",
  "ultimate-uganda": "Adding Kidepo, the Rwenzori and the Nile to the classics",
  "grand-explorer": "The whole country, including Sipi Falls and two gorilla treks",
};

const CHOOSE = [
  { when: "3 to 4 days", pick: "Gorillas only. Choose Gorilla Escape, Budget Gorilla Safari, or Gorilla & Lake Bunyonyi." },
  { when: "5 days", pick: "Three primate treks in one arc: Primates Adventure." },
  { when: "7 to 10 days", pick: "The classic circuit of parks, primates and the Nile: Pearl of Africa, or Wildlife & Primates at a slower pace." },
  { when: "7 days, wildlife", pick: "The Big Five and the Nile: Big Five Safari, with rhinos on foot at Ziwa and lions in Murchison, Queen Elizabeth and Ishasha." },
  { when: "14 to 21 days", pick: "A fuller Uganda, reaching Kidepo and the Rwenzori: Ultimate Uganda or Grand Explorer." },
];

const HOW_IT_WORKS = [
  "Planned and guided locally by a Ugandan team.",
  "Permits and park bookings arranged for you.",
  "Private vehicles and guides rather than shared group transport.",
  "Adjusted to your dates, pace and budget.",
];

const GUIDES = [
  { name: "Uganda Big Five Safari Guide", to: "/destinations/uganda-big-five-safari", desc: "Where to see each of the five, how likely it is, and how to plan the route." },
  { name: "What a Gorilla Safari Costs", to: "/travel-journal/budget-gorilla-safari-uganda-cost", desc: "The permit, everything around it, and how to bring the total down." },
  { name: "Safari Budget Calculator", to: "/safari-budget-calculator", desc: "Estimate your trip cost before you request a quote." },
  { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide", desc: "Permit prices, low-season savings and how booking works." },
  { name: "Seasonal Safari Calendar", to: "/seasonal-safari-calendar", desc: "What is best each month, from dry-season treks to green-season birding." },
  { name: "First-Timer's Guide", to: "/travel-journal/uganda-safari-first-timers-guide", desc: "How long you need, when to go, what to book first and what to pack." },
  { name: "How Much Does a Uganda Safari Cost?", to: "/travel-journal/how-much-does-a-uganda-safari-cost", desc: "Daily rates by travel style and three worked examples
