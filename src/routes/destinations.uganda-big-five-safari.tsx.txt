import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneElephants from "@/assets/scene-elephants.jpg";
import elephantSavanna from "@/assets/elephant-savanna.jpg";
import rhinoZiwa from "@/assets/rhino-ziwa.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_rhino_ziwa from "@/assets/gallery/rhino-ziwa.jpg";
import g_mammals_1 from "@/assets/gallery/mammals-1.jpg";
import g_ziwa_moments_2 from "@/assets/gallery/ziwa-moments-2.jpg";

const FAQS = [
  {
    q: "Can you see the Big Five in Uganda?",
    a: "Yes, with one honest caveat. Lions, leopards, elephants and buffalo live wild in Uganda’s savanna parks, mainly Murchison Falls, Queen Elizabeth and Kidepo Valley. Rhinos are the exception: Uganda’s wild rhinos were lost to poaching decades ago, and the only rhinos you can see today are southern white rhinos at Ziwa Rhino Sanctuary, tracked on foot. A well-planned route covers all five in about a week.",
  },
  {
    q: "Where is the best place to see the Big Five in Uganda?",
    a: "No single park has all five. Murchison Falls, Queen Elizabeth and Kidepo Valley each offer the four wild species, and Ziwa Rhino Sanctuary, on the road to Murchison, is where you see rhinos. Most travellers combine Ziwa, Murchison and Queen Elizabeth.",
  },
  {
    q: "Are the rhinos in Uganda wild?",
    a: "No. Ziwa’s southern white rhinos were reintroduced and live in a protected, monitored sanctuary managed by Rhino Fund Uganda. You track them on foot with an armed ranger, usually for one to two hours. It is a conservation success story, but it is a sanctuary experience rather than a wild one.",
  },
  {
    q: "Which Big Five animal is hardest to see in Uganda?",
    a: "The leopard. It is solitary, mostly nocturnal and well camouflaged, so sightings take patience and some luck. Murchison Falls, Queen Elizabeth and Kidepo all have leopards, and a good guide, early starts and (where permitted) night drives improve your chances. We never promise a leopard.",
  },
  {
    q: "How many days do you need for a Uganda Big Five safari?",
    a: "Plan on six to seven days to cover Ziwa, Murchison Falls and Queen Elizabeth without rushing. Add more days if you want to include Kidepo Valley, which is remote, or a gorilla trek in Bwindi.",
  },
  {
    q: "Can I combine a Big Five safari with gorilla trekking?",
    a: "Yes. Queen Elizabeth’s Ishasha sector sits on the natural route south to Bwindi, so many travellers finish their Big Five route there and continue to a gorilla trek.",
  },
  {
    q: "When is the best time for a Big Five safari in Uganda?",
    a: "The dry seasons, roughly December to February and June to September, concentrate wildlife near water and make roads easier. Wildlife can be seen year-round, and the wetter months are greener with fewer visitors.",
  },
];

export const Route = createFileRoute("/destinations/uganda-big-five-safari")({
  head: () =>
    buildDestinationHead({
      slug: "uganda-big-five-safari",
      name: "Uganda Big Five Safari",
      title: "Uganda Big 5 Safari: Where to See All Five | Biikuya",
      description:
        "Uganda Big 5 safari guide: lions, leopards, elephants and buffalo in the savanna parks, plus rhinos at Ziwa. Where to go, honest odds and a 7-day route.",
      ogImage: sceneLion,
      region: "Uganda",
      keywords: [
        "Uganda Big 5 safari",
        "Uganda Big Five",
        "Big Five in Uganda",
        "where to see rhinos in Uganda",
        "Uganda lions leopards elephants buffalo",
        "Biikuya Trails Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="uganda-big-five-safari"
      eyebrow="Murchison Falls · Queen Elizabeth · Kidepo · Ziwa"
      name="Uganda Big Five Safari"
      tagline={<>Four in the wild. One <em className="italic text-gold">on foot</em>.</>}
      intro="Uganda has all of the Big Five, with one honest twist: lions, leopards, elephants and buffalo roam free in the savanna parks, while the country’s rhinos live in a sanctuary at Ziwa and are tracked on foot. Here is where to see each one, what your odds really look like, and how to link them into a single route."
      heroImage={sceneLion}
      heroAlt="Lions resting in a fig tree in Ishasha, Queen Elizabeth National Park, Uganda"
      facts={[
        { label: "Where", value: "Murchison Falls, Queen Elizabeth, Kidepo + Ziwa" },
        { label: "The honest answer", value: "Four in the wild, rhinos in a sanctuary" },
        { label: "Suggested length", value: "6–7 days" },
        { label: "Best season", value: "Dry months: Dec–Feb, Jun–Sep" },
      ]}
      sections={[
        {
          title: "Can you see the Big Five in Uganda?",
          body: "Yes, with one caveat most operators skip. Lions, leopards, elephants and buffalo live wild in Murchison Falls, Queen Elizabeth and Kidepo Valley. Rhinos do not: Uganda’s wild rhinos were poached out decades ago, and the only rhinos today are southern white rhinos reintroduced at Ziwa Rhino Sanctuary. You can still see all five on one trip, as long as you know what you are booking.",
        },
        {
          title: "Lions: start with Queen Elizabeth",
          body: "Queen Elizabeth is where most visitors have their first Ugandan lion sighting, from the open Kasenyi plains to the Ishasha sector, famous for tree-climbing lions resting in fig trees. Murchison Falls and remote Kidepo Valley also hold lions, with Kidepo offering the quietest, least-visited experience.",
        },
        {
          title: "Leopards: patience, not promises",
          body: "Leopards live in Murchison Falls, Queen Elizabeth and Kidepo, but they are solitary, camouflaged and mostly active at night, so they are the Big Five member most often missed. Early starts, an experienced guide and, where permitted, night drives improve your chances. A good operator will tell you that honestly rather than guarantee a sighting.",
        },
        {
          title: "Elephants and buffalo: the reliable ones",
          body: "Elephants and buffalo are the most dependable sightings. The Nile boat cruise from Paraa towards the base of Murchison Falls and the Kazinga Channel cruise in Queen Elizabeth both bring elephants, buffalo and hippos to the water’s edge, and large buffalo herds gather on the open savanna, especially in the dry season.",
        },
        {
          title: "Rhinos: on foot at Ziwa",
          body: "Ziwa Rhino Sanctuary, between Kampala and Murchison Falls, is the only place to see rhinos in Uganda. Guided tracking is on foot with an armed ranger, usually one to two hours, and brings you far closer than a vehicle allows. It sits directly on the road north, so it fits naturally at the start of a Murchison route.",
        },
        {
          title: "How to link all five into one route",
          body: "The classic route runs Kampala to Ziwa for rhinos, north to Murchison Falls for elephants, buffalo and a Nile cruise, then across to Queen Elizabeth for lions, with Ishasha for tree-climbing lions. Kidepo Valley is a remote extension for travellers with extra days, and Ishasha is also the natural gateway south to Bwindi if you want to add a gorilla trek.",
        },
      ]}
      galleryImages={[
        { src: sceneLion, alt: "Lions resting in a fig tree in Ishasha, Queen Elizabeth National Park" },
        { src: sceneElephants, alt: "Elephant herd crossing the savanna at golden hour in Uganda" },
        { src: elephantSavanna, alt: "Elephants on the savanna in a Ugandan wildlife reserve" },
        { src: g_rhino_ziwa, alt: "White rhino grazing at Ziwa Rhino Sanctuary" },
        { src: g_ziwa_moments_2, alt: "Rhino tracking on foot at Ziwa" },
        { src: g_mammals_1, alt: "Wildlife in Uganda’s savanna reserves" },
      ]}
      highlights={[
        { title: "All five on one connected route", desc: "Ziwa, Murchison Falls and Queen Elizabeth link naturally into a single trip of about a week." },
        { title: "Four in the wild, one on foot", desc: "Lions, leopards, elephants and buffalo roam free; rhinos are tracked on foot at Ziwa." },
        { title: "Tree-climbing lions", desc: "Ishasha, in Queen Elizabeth, is one of very few places where lions regularly rest in fig trees." },
        { title: "Two classic boat cruises", desc: "The Nile at Murchison and the Kazinga Channel at Queen Elizabeth put elephants and buffalo at the water’s edge." },
        { title: "Honest sighting odds", desc: "We tell you which animals are near-certain and which, like leopard, take patience." },
        { title: "Quieter parks", desc: "Fewer vehicles at most sightings, and Kidepo adds true remoteness for those with time." },
      ]}
      itinerary={[
        { day: "Day 1", title: "Kampala to Ziwa to Murchison Falls", desc: "Drive north and stop at Ziwa Rhino Sanctuary for a guided rhino tracking walk on foot, then continue to Murchison Falls." },
        { day: "Day 2", title: "Murchison Falls game drive and Nile cruise", desc: "Morning game drive for elephants, buffalo and lions, then an afternoon boat cruise on the Nile towards the base of the falls." },
        { day: "Day 3", title: "Transfer towards Queen Elizabeth", desc: "A long scenic transfer day south via the Fort Portal region, with an optional early game drive before you leave." },
        { day: "Day 4", title: "Queen Elizabeth: Kasenyi plains", desc: "Afternoon game drive across the open plains for lions, elephants and buffalo." },
        { day: "Day 5", title: "Kazinga Channel cruise", desc: "Boat cruise along the channel, with a night drive for leopard where permitted." },
        { day: "Day 6", title: "Ishasha tree-climbing lions", desc: "Drive south to the Ishasha sector to look for lions resting in the fig trees." },
        { day: "Day 7", title: "Return, or continue to Bwindi", desc: "A long drive back to Kampala or Entebbe, or continue south for a gorilla trek." },
      ]}
      bestTime="The dry seasons, roughly December to February and June to September, concentrate wildlife near water and make roads easier. Wildlife can be seen year-round; the wetter months are greener with fewer visitors. Early morning and late afternoon drives are best for lions and leopards."
      gettingThere="Most Big Five routes start in Kampala or Entebbe. Ziwa Rhino Sanctuary is roughly a 3-hour drive north, directly on the road to Murchison Falls. Queen Elizabeth is reached via the Fort Portal region, or from the south through Ishasha. Kidepo Valley is remote and best added as an extension."
      related={[
        { name: "Ziwa Rhino Sanctuary", to: "/destinations/ziwa-rhino-sanctuary", img: rhinoZiwa },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park", img: elephantSavanna },
      ]}
      faqs={FAQS}
    />
  ),
});
