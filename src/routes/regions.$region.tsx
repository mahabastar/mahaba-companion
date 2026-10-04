import kidepoCheetahCard from "@/assets/gallery/kidepo-cheetah-card.jpg";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildPageMeta } from "@/lib/site-config";

import heroGorilla from "@/assets/hero-gorilla.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import bunyonyiAerial from "@/assets/gallery/bunyonyi-aerial.jpg";
import mgahingaMoment from "@/assets/gallery/mgahinga-moments-1.jpg";
import rwenzoriSnow from "@/assets/gallery/rwenzori-snow.jpg";
import qenpPhoto from "@/assets/gallery/qenp-1.jpg";
import treeLion from "@/assets/gallery/tree-lion.jpg";
import craterLakes from "@/assets/gallery/crater-lakes-1.jpg";
import mburoZebras from "@/assets/gallery/mburo-9.jpg";
import rhinoZiwa from "@/assets/gallery/rhino-ziwa.jpg";
import mountElgon from "@/assets/gallery/mount-elgon-1.jpg";
import coffeeTea from "@/assets/gallery/coffee-tea-1.jpg";
import batwaDance from "@/assets/gallery/batwa-dance-2.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expLodge from "@/assets/exp-lodge.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import nileBridgeAerial from "@/assets/nile-bridge-aerial.jpg";
import semulikiHotSprings from "@/assets/semuliki-hot-springs.jpg";
import ctaSunset from "@/assets/cta-sunset.jpg";
import karamojongCulture from "@/assets/gallery/karamojong-culture.jpg";
import { REGION_SEO_TITLES } from "@/lib/seo-titles";

type Spot = { name: string; to: string; img: string; blurb: string };
type Region = {
  name: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  hero: string;
  heroAlt: string;
  when: string;
  spots: Spot[];
};

const REGIONS: Record<string, Region> = {
  "western-uganda": {
    name: "Western Uganda",
    eyebrow: "The Albertine Rift",
    tagline: "Gorillas, chimps, glaciers and crater lakes.",
    intro:
      "The green half of the country. Rainforest along the Congo border shelters mountain gorillas and chimpanzees, the Rwenzori carries glaciers on the equator, and the savanna of Queen Elizabeth drops away into crater lakes and the Kazinga Channel.",
    hero: heroGorilla,
    heroAlt: "Mountain gorilla in the forests of western Uganda",
    when: "June–September and December–February are driest, which makes forest trails firmer for trekking. Green-season months bring lower rates and better birding.",
    spots: [
      { name: "Bwindi Impenetrable Forest", to: "/dest
    
                  
