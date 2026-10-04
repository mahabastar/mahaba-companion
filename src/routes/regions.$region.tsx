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

type Spot = {
  name: string;
  to: string;
  img: string;
  blurb: string;
};

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
      "The green half of the country. Rainforest along the Congo border " +
      "shelters mountain gorillas and chimpanzees, the Rwenzori carries " +
      "glaciers on the equator, and the savanna of Queen Elizabeth drops " +
      "away into crater lakes and the Kazinga Channel.",
    hero: heroGorilla,
    heroAlt: "Mountain gorilla in the forests of western Uganda",
    when:
      "June-September and December-February are driest, which makes forest " +
      "trails firmer for trekking. Green-season months bring lower rates " +
      "and better birding.",
    spots: [
      {
        name: "Bwindi Impenetrable Forest",
        to: "/destinations/bwindi-impenetrable",
        img: heroGorilla,
        blurb:
          "Roughly half the world's mountain gorillas, in ancient montane rainforest.",
      },
      {
        name: "Mgahinga Gorilla National Park",
        to: "/destinations/mgahinga-gorilla",
        img: mgahingaMoment,
        blurb: "Volcano slopes, golden monkeys and a quieter gorilla trek.",
      },
      {
        name: "Kibale Forest",
        to: "/destinations/chimpanzee-trekking",
        img: expChimp,
        blurb: "The highest primate density in Africa, led by wild chimpanzees.",
      },
      {
        name: "Queen Elizabeth National Park",
        to: "/destinations/queen-elizabeth-national-park",
        img: qenpPhoto,
        blurb: "The Kazinga Channel, Kasenyi plains and Kyambura Gorge.",
      },
      {
        name: "Tree-Climbing Lions, Ishasha",
        to: "/destinations/tree-climbing-lions",
        img: treeLion,
        blurb: "Lions draped over fig branches in the park's southern sector.",
      },
      {
        name: "Rwenzori Mountains",
        to: "/destinations/rwenzori-mountains",
        img: rwenzoriSnow,
        blurb: "Glaciated peaks on the equator, Africa's third-highest summit.",
      },
      {
        name: "Crater Lakes",
        to: "/destinations/crater-lakes",
        img: craterLakes,
        blurb: "A field of volcanic lakes between Fort Portal and Kibale.",
      },
      {
        name: "Semuliki National Park",
        to: "/destinations/semuliki",
        img: semulikiHotSprings,
        blurb:
          "Boiling springs and Congo-basin birdlife found nowhere else in Uganda.",
      },
      {
        name: "Lake Bunyonyi",
        to: "/destinations/lake-bunyonyi",
        img: bunyonyiAerial,
        blurb: "Terraced hills, still water, and nothing at all on the schedule.",
      },
      {
        name: "Lake Mburo National Park",
        to: "/destinations/lake-mburo",
        img: mburoZebras,
        blurb: "Zebra, impala and walking safaris on the road west from Kampala.",
      },
    ],
  },

  "central-uganda": {
    name: "Central Uganda",
    eyebrow: "Lake Victoria and the heartland",
    tagline: "Where every Uganda journey begins.",
    intro:
      "The arrival region: Entebbe on the shore of Lake Victoria, " +
      "Kampala's markets and music, papyrus swamps holding shoebills, " +
      "and the country's only rhinos on the road north.",
    hero: expLodge,
    heroAlt: "Lakeside lodge in central Uganda",
    when:
      "Year-round. Mabamba's shoebill boat trips are best at first light, any month.",
    spots: [
      {
        name: "Entebbe",
        to: "/destinations/entebbe",
        img: expLodge,
        blurb:
          "Lakeside gateway city, botanical gardens and a chimpanzee island offshore.",
      },
      {
        name: "Ziwa Rhino Sanctuary",
        to: "/destinations/ziwa-rhino-sanctuary",
        img: rhinoZiwa,
        blurb: "The only place to track rhinos in Uganda, on foot.",
      },
      {
        name: "Shoebill and Mabamba Birding",
        to: "/bird-guide",
        img: expShoebill,
        blurb: "Papyrus channels holding one of Africa's most sought-after birds.",
      },
      {
        name: "Cultural Heritage",
        to: "/cultural-heritage",
        img: sceneCulture,
        blurb: "Kingdoms, craft and the living traditions of the heartland.",
      },
    ],
  },

  "eastern-uganda": {
    name: "Eastern Uganda",
    eyebrow: "Elgon, Sipi and the Nile",
    tagline: "White water, waterfalls and coffee terraces.",
    intro:
      "Uganda's adventure corner. The Nile leaves Lake Victoria at Jinja " +
      "and turns into grade 3-5 white water; further north, Sipi's three " +
      "waterfalls spill off the shoulder of Mount Elgon through Arabica " +
      "coffee farms.",
    hero: expSipi,
    heroAlt: "Sipi Falls on the slopes of Mount Elgon",
    when:
      "June-August and December-February for rafting and hiking; the trails " +
      "on Elgon are considerably easier when dry.",
    spots: [
      {
        name: "Jinja and the Source of the Nile",
        to: "/destinations/jinja-source-of-the-nile",
        img: nileBridgeAerial,
        blurb: "Rafting, kayaking and the point where the Nile begins.",
      },
      {
        name: "Sipi Falls",
        to: "/destinations/sipi-falls",
        img: expSipi,
        blurb:
          "Three waterfalls, coffee terraces, and views over the Karamoja plains.",
      },
      {
        name: "Mount Elgon",
        to: "/destinations/mount-elgon",
        img: mountElgon,
        blurb:
          "The world's largest volcanic caldera, hiked over four to seven days.",
      },
      {
        name: "Coffee and Tea Origins",
        to: "/coffee-tea-guide",
        img: coffeeTea,
        blurb: "Washing stations and smallholder farms on Elgon's slopes.",
      },
    ],
  },

  "northern-uganda": {
    name: "Northern Uganda",
    eyebrow: "Murchison and the far north",
    tagline: "The Nile at full force, and savanna without crowds.",
    intro:
      "North of the Victoria Nile the country opens out. Murchison Falls " +
      "squeezes the entire river through a seven-metre gorge, and beyond " +
      "it lie the borassus palms and big herds of Uganda's " +
      "least-visited plains.",
    hero: sceneFalls,
    heroAlt: "Murchison Falls on the Victoria Nile",
    when:
      "December-February for concentrated game around the river; the boat " +
      "cruise to the base of the falls runs year-round.",
    spots: [
      {
        name: "Murchison Falls National Park",
        to: "/destinations/murchison-falls",
        img: sceneFalls,
        blurb:
          "Game drives on the delta, and a boat cruise to the foot of the falls.",
      },
      {
        name: "Ziwa Rhino Sanctuary",
        to: "/destinations/ziwa-rhino-sanctuary",
        img: rhinoZiwa,
        blurb: "A rhino tracking stopover on the drive north from Kampala.",
      },
      {
        name: "Kidepo Valley National Park",
        to: "/destinations/kidepo-valley",
        img: kidepoCheetahCard,
        blurb:
          "Uganda's remotest park: cheetah, ostrich and complete isolation.",
      },
      {
        name: "National Parks Overview",
        to: "/national-parks",
        img: sceneElephants,
        blurb: "How the northern parks compare, and how to combine them.",
      },
    ],
  },

  karamoja: {
    name: "Karamoja",
    eyebrow: "The north-eastern frontier",
    tagline: "Warrior culture and Uganda's wildest horizon.",
    intro:
      "Semi-arid, sparsely travelled and culturally unlike anywhere else " +
      "in the country. Karamoja is cattle-keeping country framed by " +
      "isolated mountains, with Kidepo Valley at its northern edge.",
    hero: ctaSunset,
    heroAlt: "Sunset over the plains of Karamoja",
    when:
      "September-March. Access roads deteriorate quickly during the heaviest rains.",
    spots: [
      {
        name: "Kidepo Valley National Park",
        to: "/destinations/kidepo-valley",
        img: kidepoCheetahCard,
        blurb:
          "Mountain-ringed savanna with wildlife you'll usually have to yourself.",
      },
      {
        name: "Karamojong Culture",
        to: "/cultural-heritage",
        img: karamojongCulture,
        blurb:
          "Manyattas, cattle traditions and one of Uganda's most distinct cultures.",
      },
      {
        name: "Mount Moroto and Elgon Highlands",
        to: "/mountains",
        img: sceneRwenzori,
        blurb: "Dry-country peaks rising straight out of the plains.",
      },
      {
        name: "Responsible Travel Here",
        to: "/responsible-tourism",
        img: batwaDance,
        blurb:
          "How visits are arranged so revenue reaches the communities involved.",
      },
    ],
  },
};

export const Route = createFileRoute("/regions/$region")({
  loader: ({ params }) => {
    const region = REGIONS[params.region];
    if (!region) throw notFound();
    return { region: params.region };
  },
  head: ({ params }) => {
    const region = REGIONS[params.region];
    if (!region) {
      return {
        meta: [
          { title: "Region not found | Biikuya Trails Uganda" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title =
      REGION_SEO_TITLES[params.region] ??
      `${region.name} Travel Guide | Biikuya Trails`;
    const description = `${region.tagline} ${region.intro}`.slice(0, 155);
    return buildPageMeta({
      title,
      description,
      path: `/regions/${params.region}`,
      image: region.hero,
    });
  },
  notFoundComponent: () => <RegionNotFound />,
  component: RegionPage,
});

function RegionNotFound() {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />
      <sec
