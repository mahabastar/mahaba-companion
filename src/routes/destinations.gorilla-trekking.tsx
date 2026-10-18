import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import expChimp from "@/assets/exp-chimp.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneLion from "@/assets/scene-lion.jpg";

const FAQS = [
  {
    q: "Where can I go gorilla trekking in Uganda?",
    a: "Two parks in the southwest: Bwindi Impenetrable National Park, which holds roughly half of the world's mountain gorillas and offers trekking from four sectors (Buhoma, Ruhija, Rushaga and Nkuringo), and Mgahinga Gorilla National Park, in the Virunga volcanoes on the border with Rwanda and DR Congo.",
  },
  {
    q: "How much does a gorilla trekking permit cost?",
    a: "A gorilla trekking permit costs USD 800 per person for foreign non-residents. It gives you up to one hour with a habituated gorilla family, with ranger guides leading the trek. Biikuya Trails Uganda arranges permits as part of every itinerary, and we confirm current rates when we book.",
  },
  {
    q: "How does gorilla trekking compare to chimpanzee trekking?",
    a: "Gorilla trekking is a quieter, more intimate encounter: the families rest and feed on the forest floor, often within a few metres of you. It costs more (USD 800 against USD 250 for chimpanzees) and the terrain can be steeper and longer. Many travellers combine the two on one itinerary.",
  },
  {
    q: "What is the minimum age for gorilla trekking?",
    a: "15 years old, under the current Uganda Wildlife Authority guidelines.",
  },
  {
    q: "How many people are in a gorilla trekking group?",
    a: "Each habituated gorilla family can be visited by a maximum of eight people per day, which keeps the encounter calm and protects the gorillas.",
  },
  {
    q: "How difficult is gorilla trekking?",
    a: "It varies with where the family is feeding that day. Treks can take under an hour or most of a day, on steep, muddy and sometimes slippery forest trails at altitude. A reasonable level of fitness helps, and porters are available to carry your bag and give you a hand on the climbs.",
  },
  {
    q: "When is the best time to go gorilla trekking?",
    a: "Trekking runs year-round. The drier months of June to August and December to February usually mean firmer trails, while the rainy seasons of March to May and September to November bring muddier going but fewer visitors. Permits sell out in peak months, so we recommend booking several months ahead.",
  },
  {
    q: "How do I get to Bwindi?",
    a: "Bwindi is roughly 8 to 10 hours by road from Kampala or Entebbe, depending on the sector. Scheduled and charter flights to airstrips near the park shorten the journey considerably, followed by a transfer to your lodge.",
  },
  {
    q: "Is gorilla trekking affected by travel advice?",
    a: "Government advice on travel to Uganda varies, so please read your own government's advice, check your insurance and see our safety guide before you book. We monitor official updates and will tell you directly if anything on your itinerary is affected.",
  },
];

export const Route = createFileRoute("/destinations/gorilla-trekking")({
  head: () =>
    buildDestinationHead({
      slug: "gorilla-trekking",
      name: "Gorilla Trekking",
      title: "Gorilla Trekking in Uganda: Bwindi & Permits | Biikuya Trails",
      description:
        "Gorilla trekking in Uganda: Bwindi and Mgahinga permits and costs, trekking sectors, best time to go, age limits and how it compares to chimpanzee trekking.",
      ogImage: heroGorilla,
      region: "Southwest Uganda",
      keywords: [
        "Uganda gorilla trekking",
        "Bwindi Impenetrable National Park",
        "gorilla permit Uganda",
        "Mgahinga Gorilla National Park",
        "mountain gorillas",
        "Buhoma",
        "Rushaga",
        "Biikuya Trails Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="gorilla-trekking"
      eyebrow="Bwindi & Mgahinga"
      name="Gorilla Trekking"
      tagline={<>An hour with <em className="italic text-gold">mountain gorillas.</em></>}
      intro="Uganda is home to roughly half of the world's mountain gorillas. Trek through the misty forests of Bwindi Impenetrable National Park, or the Virunga volcanoes of Mgahinga, to spend an unforgettable hour with a habituated gorilla family."
      heroImage={heroGorilla}
      heroAlt="Mountain gorilla in the forest of Bwindi Impenetrable National Park"
      facts={[
        { label: "Best location", value: "Bwindi Impenetrable National Park" },
        { label: "Duration", value: "Up to 1 hour with the gorillas" },
        { label: "Permit", value: "USD 800 per person" },
        { label: "Difficulty", value: "Moderate to Challenging" },
      ]}
      sections={[
        {
          title: "Two parks, one extraordinary encounter",
          body: "Bwindi Impenetrable National Park, a UNESCO World Heritage Site, protects around half of the world's mountain gorillas and is the most popular place to trek. Mgahinga Gorilla National Park, a smaller park in the Virunga volcanoes near Kisoro, offers a quieter alternative with a very different landscape.",
        },
        {
          title: "Four sectors in Bwindi",
          body: "Trekking in Bwindi is organised through four sectors: Buhoma, Ruhija, Rushaga and Nkuringo. Each has its own gorilla families, scenery and lodges, and the right choice depends on your route, fitness and the time you have. We match you to a sector when we book your permit.",
        },
        {
          title: "What a trek is like",
          body: "Treks begin with a ranger briefing at the park trailhead, then head into the forest on foot with guides and trackers who follow the gorillas' movements from the day before. The walk can take under an hour or most of a day. Once you find the family, you have up to one hour to watch them feed, play and rest. Groups are limited to a maximum of eight people.",
        },
        {
          title: "Meeting the gorillas well",
          body: "Gorillas are wild animals and share a lot of our biology, so there are strict rules to keep them healthy: keep your distance, stay in a group, and stay away if you are unwell. Porters from nearby communities can carry your bag and help on the steep sections, and hiring one directly supports local families.",
        },
        {
          title: "Beyond the trek",
          body: "Many travellers pair gorilla trekking with chimpanzees in Kibale, game drives in Queen Elizabeth National Park, or a few quiet days by a lake in the southwest, a gentle way to follow one of the most demanding days of the trip.",
        },
      ]}
      galleryImages={[
        { src: heroGorilla, alt: "Mountain gorilla in Bwindi Impenetrable National Park" },
      ]}
      highlights={[
        { title: "Half of the world's mountain gorillas", desc: "Uganda protects roughly half of the remaining population, across Bwindi and Mgahinga." },
        { title: "Bwindi Impenetrable National Park", desc: "A UNESCO World Heritage Site and one of Africa's most biodiverse rainforests." },
        { title: "Four trekking sectors", desc: "Buhoma, Ruhija, Rushaga and Nkuringo, each with its own gorilla families and scenery." },
        { title: "Up to one hour with a family", desc: "A small group of no more than eight visitors, guided by rangers and trackers." },
        { title: "Mgahinga and the Virunga volcanoes", desc: "A quieter second option on the border with Rwanda and DR Congo." },
        { title: "Porters and community benefit", desc: "Local porters help on the trail, and park fees support conservation and neighbouring communities." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Arrive & transfer to Bwindi", desc: "Fly or drive from Entebbe to the southwest, settling into a lodge near the forest edge in your trekking sector." },
        { day: "Day 02", title: "Gorilla trekking", desc: "An early briefing at the trailhead, then a guided trek into the forest to find and spend an hour with a gorilla family." },
        { day: "Day 03", title: "Rest or onward journey", desc: "A slower morning, with a community walk or a scenic drive, before departing or continuing on to your next stop." },
      ]}
      bestTime="Gorilla trekking runs year-round. June to August and December to February usually bring firmer trails; March to May and September to November are wetter and quieter. Permits sell out in peak months, so book several months ahead."
      gettingThere="Bwindi is roughly an 8 to 10 hour drive from Kampala or Entebbe, depending on the sector. Flights to airstrips near the park shorten the journey, followed by a transfer to your lodge. Mgahinga is close to the town of Kisoro."
      showLeadMagnet
      packageSlugs={["primates-adventure", "ultimate-uganda", "grand-explorer"]}
      guides={[
        { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide", desc: "What the permit includes, and how to book it." },
        { name: "Gorilla vs Chimp Trekking", to: "/experiences/gorilla-vs-chimp-trekking", desc: "Cost, difficulty and age limits, and which trek to do first." },
        { name: "Chimpanzee Trekking in Uganda", to: "/destinations/chimpanzee-trekking", desc: "Kibale, Kyambura Gorge and Budongo compared." },
        { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park", desc: "Kazinga Channel, game drives and the Valley of Apes." },
        { name: "Is Uganda Safe to Visit?", to: "/faqs", desc: "Current government advice and how to plan around it." },
      ]}
      related={[
        { name: "Chimpanzee Trekking, Kibale", to: "/destinations/chimpanzee-trekking", img: expChimp },
        { name: "The Crater Lakes", to: "/destinations/crater-lakes", img: expCoffee },
        { name: "Queen Elizabeth National Park", to: "/destinations/queen-elizabeth-national-park", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
      ]}
      faqs={FAQS}
    />
  ),
});
