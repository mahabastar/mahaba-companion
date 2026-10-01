import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import {
  buildWhatsAppHref,
  buildEmailHref,
  buildPageMeta,
} from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";

export const Route = createFileRoute("/build-my-safari")({
  head: () => ({
    ...buildPageMeta({
      title: "Build Your Own Uganda Safari Itinerary | Biikuya Trails",
      description:
        "Answer a few questions and get personalised Uganda safari suggestions — destinations, trip length and travel style, tailored to you.",
      path: "/build-my-safari",
    }),
  }),
  component: BuildMySafari,
});

/* ---------------- Data ---------------- */

type DestinationKey =
  | "gorilla-trekking"
  | "tree-climbing-lions"
  | "murchison-falls"
  | "sipi-falls"
  | "lake-bunyonyi";

const DESTINATIONS: Record<
  DestinationKey,
  { name: string; to: string; img: string }
> = {
  "gorilla-trekking": {
    name: "Gorilla Trekking, Bwindi",
    to: "/destinations/gorilla-trekking",
    img: heroGorilla,
  },
  "tree-climbing-lions": {
    name: "Tree-Climbing Lions, Ishasha",
    to: "/destinations/tree-climbing-lions",
    img: sceneLion,
  },
  "murchison-falls": {
    name: "Murchison Falls",
    to: "/destinations/murchison-falls",
    img: sceneFalls,
  },
  "sipi-falls": {
    name: "Sipi Falls",
    to: "/destinations/sipi-falls",
    img: expSipi,
  },
  "lake-bunyonyi": {
    name: "Lake Bunyonyi",
    to: "/destinations/lake-bunyonyi",
    img: sceneBunyonyi,
  },
};

const INTERESTS: {
  key: string;
  label: string;
  dest: DestinationKey[];
}[] = [
  {
    key: "gorillas",
    label: "Mountain Gorillas",
    dest: ["gorilla-trekking"],
  },
  {
    key: "big-game",
    label: "Big Game & Tree-Climbing Lions",
    dest: ["tree-climbing-lions"],
  },
  {
    key: "nile",
    label: "The Nile & Waterfalls",
    dest: ["murchison-falls"],
  },
  {
    key: "adventure",
    label: "Hiking & Adventure",
    dest: ["sipi-falls"],
  },
  {
    key: "lakes",
    label: "Lakes & Relaxation",
    dest: ["lake-bunyonyi"],
  },
  {
    key: "birding",
    label: "Birding",
    dest: ["murchison-falls", "lake-bunyonyi"],
  },
  {
    key: "culture",
    label: "Culture & Communities",
    dest: ["sipi-falls", "gorilla-trekking"],
  },
];

const TIMINGS = [
  "In the next month",
  "1–3 months from now",
  "3–6 months from now",
  "Just exploring, no date yet",
];

const DAYS = ["3–5 days", "6–9 days", "10–14 days", "15+ days"];

const STYLES = [
  {
    label: "Comfort",
    desc: "Well-appointed mid-range lodges",
  },
  {
    label: "Luxury",
    desc: "Premium camps & private guides",
  },
  {
    label: "Adventure",
    desc: "Lean, active, budget-conscious",
  },
];

const TRAVELERS = [
  "Solo",
  "Couple",
  "Family with kids",
  "Friends / group",
];

type Answers = {
  interests: string[];
  days: string | null;
  style: string | null;
  travelers: string | null;
  timing: string | null;
};

const EMPTY_ANSWERS: Answers = {
  interests: [],
  days: null,
  style: null,
  travelers: null,
  timing: null,
};

const STEPS = [
  "interests",
  "days",
  "style",
  "travelers",
  "timing",
] as const;

type StepKey = (typeof STEPS)[number];

/* ---------------- Component ---------------- */

function BuildMySafari() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [done, setDone] =
  
