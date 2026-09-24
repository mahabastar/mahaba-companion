import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expChimp from "@/assets/exp-chimp.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import g_chimp_trekking_1 from "@/assets/gallery/chimp-trekking-1.jpg";
import g_chimp_trekking_2 from "@/assets/gallery/chimp-trekking-2.jpg";
import g_chimp_trekking_3 from "@/assets/gallery/chimp-trekking-3.jpg";
import g_chimpanzee_1 from "@/assets/gallery/chimpanzee-1.jpg";
import g_chimp_roadside from "@/assets/gallery/chimp-roadside.jpg";
import g_ngamba_chimps_1 from "@/assets/gallery/ngamba-chimps-1.jpg";

const FAQS = [
  {
    q: "Where can I go chimpanzee trekking in Uganda?",
    a: "Three main places: Kibale National Park, which holds the highest chimpanzee density in Africa; Kyambura Gorge in Queen Elizabeth National Park, nicknamed the 'Valley of Apes'; and Budongo Forest near Murchison Falls, one of the country's most established habituation sites.",
  },
  {
    q: "How much does a chimpanzee trekking permit cost?",
    a: "A standard Kibale permit costs USD 250 per person for one hour with a habituated chimpanzee community, or USD 200 in April, May and November. The Chimpanzee Habituation Experience costs USD 300 and gives you up to four hours with a community still being habituated. Budongo is approximately USD 120 to 130, and Kyambura Gorge rates vary, so we confirm current rates when we book. Biikuya Trails Uganda arranges permits as part of every itinerary.",
  },
  {
    q: "How does chimpanzee trekking compare to gorilla trekking?",
    a: "Chimp trekking is shorter, less demanding and far cheaper than gorilla trekking, with permits at USD 250 against USD 800. Chimpanzees are also more mobile and vocal, so encounters are noisier and more energetic, swinging through the canopy rather than resting on the ground. It works well as a complement to a gorilla trek or as a standalone alternative.",
  },
  {
    q: "What is the minimum age for chimpanzee trekking?",
    a: "12 years old, under the current UWA guidelines.",
  },
  {
    q: "How many people are in a chimpanzee trekking group?",
    a: "Kibale groups are limited to a maximum of six participants.",
  },
  {
    q: "Which location should I choose?",
    a: "Kibale offers the highest odds of a sighting and the widest range of primates. Kyambura Gorge suits travellers already based in Queen Elizabeth National Park who want to add primates without a detour. Budongo pairs naturally with Murchison Falls and offers the longer Habituation Experience.",
  },
  {
    q: "What else is there to do around Kibale?",
    a: "Kibale sits near Fort Portal, in Uganda's crater-lake and tea-growing country. Most itineraries pair chimp trekking with a walk through the Bigodi Wetland, a visit to a working tea estate, or a day looking toward the Rwenzori foothills.",
  },
  {
    q: "When is the best time to trek chimpanzees in Kibale?",
    a: "Chimp trekking runs year-round. The dry seasons of June to September and December to February offer firmer forest trails, while April, May and November bring quieter trails and a cheaper permit: USD 200 instead of USD 250 for foreign non-residents. Discounted permits cannot be rescheduled, and we confirm current rates when we book.",
  },
  {
    q: "How do I get to Kibale National Park?",
    a: "Kibale is roughly 5 to 6 hours by road from Kampala or Entebbe, or about 45 minutes by scheduled light aircraft to Kasese airstrip, followed by a short transfer.",
  },
  {
    q: "Are the chimpanzee trekking areas affected by travel advice?",
    a: "Kyambura Gorge lies inside Queen Elizabeth National Park, where the UK FCDO currently advises against all but essential travel, and US advice covers all of Uganda. Kibale and Budongo are not among the areas the UK lists, but please read your own government's advice, check your insurance and see our safety guide before you book.",
  },
];

export const Route = createFileRoute("/destinations/chimpanzee-trekking")({
  head: () =>
    buildDestinationHead({
      slug: "chimpanzee-trekking",
      name: "Chimpanzee Trekking",
      title: "Chimp Trekking in Uganda: Kibale & Permits | Biikuya Trails",
      description:
        "Chimpanzee trekking in Uganda: Kibale Forest permits and costs, best time to go, Kyambura Gorge, Budongo, and how it compares to gorilla trekking.",
      ogImage: expChimp,
      region: "Western Uganda",
      keywords: [
        "Uganda chimpanzee trekking",
        "Kibale National Park",
        "Kibale chimpanzee permit",
        "chimp permit Uganda",
        "Kyambura Gorge",
        "Budongo Forest chimpanzees",
        "Chimpanzee Habituation Experience",
        "Fort Portal Uganda",
        "Biikuya Trails Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="chimpanzee-trekking"
      eyebrow="Kibale, Kyambura Gorge & Budongo"
      name="Chimpanzee Trekking"
      tagline={<>Uganda's <em className="italic text-gold">other</em> great ape.</>}
      intro="Louder, faster and more expressive than their gorilla cousins, Uganda's chimpanzees can be tracked in three very different forests. Kibale, near Fort Portal, is the classic choice, with an estimated 1,500 chimpanzees and twelve other primate species in a forest that rarely goes quiet."
      heroImage={expChimp}
      heroAlt="Wild chimpanzee in the forest canopy of Kibale National Park"
      facts={[
        { label: "Best location", value: "Kibale National Park" },
        { label: "Duration", value: "1 hour with the community" },
        { label: "Permit (Kibale)", value: "USD 250 (USD 200 low season)" },
        { label: "Difficulty", value: "Easy to Moderate" },
      ]}
      sections={[
        {
          title: "Three forests, three experiences",
          body: "Kibale holds Africa's highest chimpanzee density and the best odds of a sighting. Kyambura Gorge, a steep-sided rift valley cutting through Queen Elizabeth National Park's savanna, offers a more dramatic setting and a chance to combine chimps with game drives. Budongo Forest near Murchison Falls runs one of Uganda's longest-established habituation programmes.",
        },
        {
          title: "Kibale: the primate capital",
          body: "Kibale National Park protects one of the last major stands of tropical rainforest in Uganda, and with it the highest concentration of primates on the continent: an estimated 1,500 chimpanzees across several communities, alongside red colobus, black-and-white colobus, grey-cheeked mangabeys and L'Hoest's monkeys.",
        },
        {
          title: "A more active encounter than gorilla trekking",
          body: "Treks begin with a ranger briefing at the park headquarters, then move into the forest on foot in search of a habituated community. Chimpanzees move fast, forage noisily and rarely stay still, so trackers often follow calls and canopy movement rather than a fixed location. Kibale groups are limited to a maximum of six participants. Expect a faster pace and the occasional dramatic canopy chase before an hour spent simply watching them be chimpanzees.",
        },
        {
          title: "The Habituation Experience",
          body: "For a deeper encounter, Kibale and Budongo both offer a Chimpanzee Habituation Experience: up to four hours following researchers and rangers as they work with a community still being acclimated to human presence, rather than a fully habituated group. In Kibale it costs USD 300 per person, places are limited to a small group, and it is more demanding than a standard trek.",
        },
        {
          title: "Beyond the trek",
          body: "Most visitors pair a Kibale trek with a walk through the nearby Bigodi Wetland Sanctuary, known for its birdlife and monkeys, or an afternoon among the tea estates that blanket the hills toward Fort Portal, with the Rwenzori's snow line visible on a clear day.",
        },
      ]}
      galleryImages={[
        { src: g_chimp_trekking_1, alt: "Chimpanzee trekking in Kibale Forest" },
        { src: g_chimp_trekking_2, alt: "Chimpanzee high in the forest canopy" },
        { src: g_chimp_trekking_3, alt: "Moments from a chimpanzee trek" },
        { src: g_chimpanzee_1, alt: "Chimpanzee portrait in Kibale" },
        { src: g_chimp_roadside, alt: "Chimpanzee in a roadside tree" },
        { src: g_ngamba_chimps_1, alt: "Rescued chimpanzees at Ngamba Island" },
      ]}
      highlights={[
        { title: "Africa's highest chimp density", desc: "Kibale holds an estimated 1,500 wild chimpanzees, the best sighting odds on the continent." },
        { title: "Kyambura Gorge, the Valley of Apes", desc: "A dramatic rift gorge inside Queen Elizabeth National Park, chimps included." },
        { title: "Chimpanzee Habituation Experience", desc: "Up to four hours following researchers as a wild community learns to tolerate humans." },
        { title: "Twelve other primate species", desc: "Kibale alone also holds red colobus, grey-cheeked mangabey and L'Hoest's monkey." },
        { title: "Cheaper, easier permits than gorillas", desc: "USD 250 versus USD 800, with far more daily permits available." },
        { title: "Bigodi Wetland and Fort Portal's tea country", desc: "A community-run sanctuary and rolling tea estates, with the Rwenzori as a backdrop." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & transfer to Kibale", desc: "Fly or drive in from Entebbe to the Fort Portal region, settling into a lodge near the forest edge." },
        { day: "Day 02", title: "Chimpanzee trekking", desc: "An early briefing, then a guided trek through the forest to find and spend an hour with a chimpanzee community." },
        { day: "Day 03", title: "Bigodi Wetland or tea estate", desc: "A gentler morning, with a guided wetland walk for birds and monkeys or a visit to a working tea estate, before departing or continuing on." },
      ]}
      bestTime="Chimpanzee trekking runs year-round. June to September and December to February bring firmer trails; April, May and November are quieter, and the Kibale permit costs USD 200 instead of USD 250 (discounted permits cannot be rescheduled)."
      gettingThere="Kibale is roughly a 5 to 6 hour drive from Kampala via Fort Portal, or about 45 minutes by scheduled light aircraft to Kasese airstrip followed by a short transfer. Kyambura Gorge sits inside Queen Elizabeth National Park, and Budongo Forest is en route to Murchison Falls, around 4 to 5 hours from Kampala."
      showLeadMagnet
      packageSlugs={["primates-adventure", "ultimate-uganda", "grand-explorer"]}
      guides={[
        { name: "Gorilla vs Chimp Trekking", to: "/experiences/gorilla-vs-chimp-trekking", desc: "Cost, difficulty and age limits, and which trek to do first." },
        { name: "Gorilla Trekking in Uganda", to: "/destinations/gorilla-trekking", desc: "Permits, sectors and what to expect on a gorilla trek." },
        { name: "Murchison Falls & Budongo", to: "/destinations/murchison-falls", desc: "The Nile, boat cruises and the Budongo chimpanzee forest." },
        { name: "Queen Elizabeth & Kyambura", to: "/destinations/queen-elizabeth-national-park", desc: "Kazinga Channel, game drives and the Valley of Apes." },
        { name: "Fort Portal Crater Lakes", to: "/destinations/crater-lakes", desc: "Crater lakes and tea country near Kibale." },
        { name: "Is Uganda Safe to Visit?", to: "/is-uganda-safe", desc: "Current government advice and how to plan around it." },
      ]}
      related={[
        { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking", img: heroGorilla },
        { name: "The Crater Lakes", to: "/destinations/crater-lakes", img: expCoffee },
        { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
      ]}
      faqs={FAQS}
    />
  ),
});
