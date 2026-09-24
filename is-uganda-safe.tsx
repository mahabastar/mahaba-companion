import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { SITE_CONFIG, buildPageMeta } from "@/lib/site-config";

const SECTIONS: LegalSection[] = [
  {
    title: "What governments currently advise",
    paragraphs: ["Uganda's safety picture in 2026 is more complicated than a simple yes or no. As of 20 September 2026:"],
    bullets: ["United States: the State Department rates Uganda Level 4, Do Not Travel, in an advisory issued on 4 June 2026. The level was raised from Level 3 on 17 May 2026 after an Ebola outbreak, and the advisory cites crime, health, terrorism and unrest.", "United Kingdom: the FCDO advises against all but essential travel to Queen Elizabeth National Park, the area south-west of Kasese town, and Semuliki National Park. It warns that your travel insurance could be invalidated if you travel against its advice.", "Other governments publish their own advice, so check your own country's latest guidance before you book."],
  },
  {
    title: "What this means for your trip",
    paragraphs: ["Advisories change, and different governments weigh the same facts differently. We will tell you directly if anything on your itinerary is affected by current advice, and we recommend you check with your insurer before you book."],
  },
  {
    title: "Ebola: where things stand",
    paragraphs: ["An outbreak of Ebola caused by the Bundibugyo virus was declared in DR Congo on 15 May 2026, and Uganda reported cases soon after. Uganda recorded 20 confirmed cases, and the World Health Organization declared Uganda's outbreak over in late August 2026, after 42 days with no new case.", "The outbreak in DR Congo is continuing. Uganda closed its border crossings with DR Congo during the outbreak, and travellers arriving from DR Congo were required to quarantine for 21 days. Rules can change quickly, so check the WHO and CDC pages below for the latest."],
  },
  {
    title: "Crime and personal safety",
    paragraphs: ["Petty theft, bag snatching and phone theft are the most common problems for visitors, especially in Kampala. Armed robbery also occurs, including in daylight, and is more common in larger cities, the Karamoja region and near the western and northern borders."],
    bullets: ["Do not display expensive jewellery, watches or phones.", "Avoid walking at night, and use a trusted driver or a reputable ride-hailing app.", "Do not physically resist a robbery attempt.", "Be extra careful at banks and ATMs.", "Keep food and drinks in sight. Women travellers have reported being drugged, so stay with a group in public."],
  },
  {
    title: "Road safety",
    paragraphs: ["Road crashes are a leading danger for visitors. The US State Department cites 5,144 road deaths in 2024, and highway driving at night is especially risky, including the road between Entebbe airport and Kampala."],
    bullets: ["Avoid night driving wherever possible.", "Travel with an experienced driver-guide rather than driving yourself.", "Avoid motorbike taxis (boda-bodas) and crowded minibus taxis.", "Wear a seatbelt on every journey."],
  },
  {
    title: "Terrorism and border areas",
    paragraphs: ["The risk is highest in western Uganda near the border with DR Congo, where armed groups are active in the east of DR Congo. In 2023, attacks in Queen Elizabeth National Park, Kasese and Mpondwe killed both Ugandans and foreign nationals. The Karamoja region in the north-east is also volatile because of crime-related conflict.", "This is why the UK advises against all but essential travel to parts of western Uganda. If your itinerary includes western Uganda or Karamoja, talk to us about the route and current conditions before you book."],
  },
  {
    title: "Protests and unrest",
    paragraphs: ["Protests can happen with little warning, and security forces have used batons, tear gas and gunfire to disperse crowds. During the Ebola outbreak, the Ministry of Health also restricted mass gatherings in Kampala and border districts. Avoid demonstrations and crowds, and follow local media for updates."],
  },
  {
    title: "Wildlife, treks and tourism safety",
    paragraphs: ["Gorilla and chimpanzee treks are led by armed Uganda Wildlife Authority rangers, who brief every group before you set off. Follow their instructions on distance from the animals.", "Outside the parks, the US State Department notes that safety inspections in tourism are rare and that emergency responders may not reach remote areas. Choose a reputable operator, ask about vehicle maintenance and guide training, and carry travel insurance that includes medical evacuation."],
  },
  {
    title: "Health basics",
    bullets: ["Carry your yellow fever vaccination certificate, and check current entry requirements with your doctor and the Ugandan embassy.", "Talk to your doctor about malaria prevention well before you travel.", "Drink bottled or filtered water only.", "Good medical care is concentrated in Kampala. Outside it, facilities are basic, and hospitals often want payment upfront, so insurance with medical evacuation matters."],
  },
  {
    title: "LGBT+ travellers",
    paragraphs: ["Uganda's 2023 Anti-Homosexuality Act criminalises consensual same-sex relations, and it applies to visitors as well as residents. People have reported harassment, blackmail and violence based on real or perceived sexual orientation. LGBT+ travellers should read their own government's guidance before booking."],
  },
  {
    title: "Photography, drones and local laws",
    paragraphs: ["Avoid photographing military, government or security buildings, and do not bring a drone without approval, because travellers have been questioned, detained or arrested. Camouflage clothing is illegal for civilians in Uganda."],
  },
  {
    title: "Emergency numbers",
    paragraphs: ["Police and emergencies: 999 (or 112). Keep your lodge's number and your guide's number to hand. If anything goes wrong on a trip with us, call us too."],
  },
];

const FAQS = [
  { q: "Is Uganda safe to visit right now?", a: "It depends on where you go and how you travel. Some governments currently advise against travel to all or parts of Uganda, while many visitors travel without incident on organised itineraries. Read the advice from your own government, check with your insurer, and talk to us about your route." },
  { q: "Is there Ebola in Uganda?", a: "The World Health Organization declared Uganda's 2026 outbreak over in late August, after 42 days with no new case. The outbreak in DR Congo is continuing, so check the latest WHO and CDC updates before you travel." },
  { q: "Is gorilla trekking safe?", a: "Treks are led by armed Uganda Wildlife Authority rangers who brief every group. The UK's list of areas it advises against does not include Bwindi, but US advice covers all of Uganda, so check your own government's advice." },
  { q: "Is Uganda safe for solo travellers?", a: "Solo travellers face the same main risks as everyone: petty theft, robbery in larger cities and road safety. Use trusted transport, avoid walking at night and keep food and drinks in sight." },
  { q: "Will my travel insurance cover me?", a: "That depends on your insurer and your government's advice. The UK FCDO warns that insurance could be invalidated if you travel against its advice, so confirm your cover for your itinerary before you book." },
];

const SOURCES = [
  { label: "US State Department: Uganda travel advisory", href: "https://travel.state.gov/en/international-travel/travel-advisories/uganda.html" },
  { label: "UK FCDO: Uganda travel advice", href: "https://www.gov.uk/foreign-travel-advice/uganda" },
  { label: "WHO: Ebola outbreak, DR Congo and Uganda 2026", href: "https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026" },
  { label: "CDC: Ebola outbreak, current situation", href: "https://www.cdc.gov/ebola/situation-summary/index.html" },
];

export const Route = createFileRoute("/is-uganda-safe")({
  head: () => ({
    ...buildPageMeta({
      title: "Is Uganda Safe to Visit? Safety Guide | Biikuya Trails",
      description:
        "An honest guide to safety in Uganda: current government advice, Ebola, crime, roads, health and how to travel more safely on safari.",
      path: "/is-uganda-safe",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
            { "@type": "ListItem", position: 2, name: "Is Uganda Safe to Visit?", item: `${SITE_CONFIG.url}/is-uganda-safe` },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Safety Guide"
      title="Is Uganda Safe to Visit?"
      updated="20 September 2026"
      updatedLabel="Last reviewed"
      intro="Most visitors on organised safaris travel without serious incident, but the honest answer in 2026 depends on where you go and how you travel. Here is what governments advise, what the real risks are, and how to plan around them."
      sections={SECTIONS}
      numbered={false}
      faqs={FAQS}
      sources={SOURCES}
      related={{ label: "Uganda Safari FAQs", to: "/faqs" }}
    />
  ),
});
