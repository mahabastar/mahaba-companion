import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage } from "@/components/DestinationPage";
import { buildDestinationHead } from "@/lib/destination-head";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import sceneBunyonyi from "@/assets/scene-bunyonyi.jpg";
import expChimp from "@/assets/exp-chimp.jpg";
import sceneLion from "@/assets/scene-lion.jpg";
import sceneFalls from "@/assets/scene-falls.jpg";
import g_gorilla_silverback from "@/assets/gallery/gorilla-silverback.jpg";
import g_gorilla_lookup from "@/assets/gallery/gorilla-lookup.jpg";
import g_gorilla_baby from "@/assets/gallery/gorilla-baby.jpg";
import g_gorilla_backlit from "@/assets/gallery/gorilla-backlit.jpg";
import g_gorilla_tracking_1 from "@/assets/gallery/gorilla-tracking-1.jpg";
import g_gorilla_tracking_2 from "@/assets/gallery/gorilla-tracking-2.jpg";
import g_gorilla_tracking_3 from "@/assets/gallery/gorilla-tracking-3.jpg";
import g_virunga_volcanoes from "@/assets/gallery/virunga-volcanoes.jpg";
import g_golden_monkey_1 from "@/assets/gallery/golden-monkey-1.jpg";

const FAQS = [
  {
    q: "How much does a Uganda gorilla trekking permit cost?",
    a: "A Uganda Wildlife Authority gorilla permit costs USD 800 per person (USD 600 in April, May and November) and includes one hour with a habituated gorilla family, ranger guides and park entry. Biikuya Trails Uganda secures permits on your behalf as part of every itinerary.",
  },
  {
    q: "When is the best time to go gorilla trekking in Bwindi?",
    a: "The dry seasons of June to September and December to February offer firmer trails and easier trekking. Gorilla trekking runs year-round, and the wet-season months of March–May and October–November mean fewer travellers and beautifully lush forest. Permits are also cheaper in April, May and November.",
  },
  {
    q: "How difficult is the gorilla trek?",
    a: "Treks range from 1 to 8 hours through steep, muddy rainforest. Fitness helps, but local porters carry your pack and rangers match each guest to a gorilla family suited to their ability.",
  },
  {
    q: "Is Uganda safe for gorilla trekking?",
    a: "Every trek is led by armed Uganda Wildlife Authority rangers, and Biikuya Trails Uganda handles logistics, transfers and lodges throughout. Government advice on travel to Uganda varies in 2026, so read our safety guide and check your own government's advice before you book.",
  },
  {
    q: "How many people are in a gorilla trekking group?",
    a: "Groups are limited to a maximum of eight guests per gorilla family, with strict distancing rules to protect the gorillas from disease and stress.",
  },
  {
    q: "What is the minimum age for gorilla trekking in Uganda?",
    a: "The minimum age is 15. Younger children can still enjoy a family trip: Lake Bunyonyi suits all ages, and chimpanzee trekking in Kibale is open from age 12.",
  },
  {
    q: "How far ahead should I book a gorilla permit?",
    a: "As early as your dates allow. In the peak months of June to September and December to February, popular sectors can sell out four to six months ahead. Once your dates are set, we check availability and secure the permit for you.",
  },
  {
    q: "What should I pack for gorilla trekking?",
    a: "Sturdy waterproof hiking boots, long trousers and sleeves, a rain jacket, gardening gloves for gripping vegetation, and plenty of water. Our Packing Guide has the full list.",
  },
  {
    q: "Can I trek if I have a cold or feel unwell?",
    a: "Gorillas are vulnerable to human illnesses, so rangers may ask anyone with a cough, cold or other infection to stay behind. Tell your guide if you feel unwell, and let us know before you travel if you have any concerns.",
  },
  {
    q: "Which is better, Bwindi or Mgahinga?",
    a: "Bwindi is the more dependable choice: it has many gorilla families across four sectors. Mgahinga is smaller and quieter, with volcano scenery and golden monkeys, but it has a single habituated family that sometimes ranges outside the park.",
  },
  {
    q: "What is the Gorilla Habituation Experience?",
    a: "It lets a group of no more than four spend up to four hours with a gorilla family that is still being accustomed to visitors, instead of the usual one hour. It starts earlier than a standard trek, at 6:30 am, and the minimum age is 15. It is offered in the Rushaga sector, permits are limited, and it costs more than a standard permit. Our Gorilla Permit Guide explains how the two compare.",
  },
  {
    q: "Can I trek gorillas in both Uganda and Rwanda?",
    a: "Yes. Many travellers combine the two. Each country issues its own permit, and you will need the right visa for each, so see our Visa Guide when you plan.",
  },
  {
    q: "Do I need to tip rangers, trackers and porters?",
    a: "Tipping is customary and forms a meaningful part of local income. We give specific guidance on typical amounts as part of your itinerary.",
  },
];

export const Route = createFileRoute("/destinations/gorilla-trekking")({
  head: () =>
    buildDestinationHead({
      slug: "gorilla-trekking",
      name: "Gorilla Trekking in Bwindi",
      title: "Uganda Gorilla Trekking: Permits & Tours | Biikuya Trails",
      description:
        "Everything to know about trekking Uganda's mountain gorillas in Bwindi: permits, sectors, best time to go, fitness, itineraries and guided packages.",
      ogImage: heroGorilla,
      region: "South-western Uganda",
      keywords: [
        "Uganda gorilla trekking",
        "Bwindi Impenetrable Forest",
        "mountain gorilla safari",
        "gorilla permit Uganda",
        "Bwindi gorilla trekking sectors",
        "best time for gorilla trekking Uganda",
        "Uganda safari",
        "Biikuya Trails Uganda",
      ],
      faqs: FAQS,
    }),
  component: () => (
    <DestinationPage
      slug="gorilla-trekking"
      eyebrow="Bwindi Impenetrable Forest"
      name="Gorilla Trekking"
      tagline={<>An hour with the <em className="italic text-gold">silverbacks</em>.</>}
      intro="You leave the lodge before the mist has lifted, follow a tracker who has known this forest since childhood, and climb until the trail stops being a trail. Then he raises a hand, and three metres away a silverback lifts his head from a stem of wild celery and looks straight at you. There is no fence, no vehicle, no glass. It is the rarest wildlife encounter left on earth — and Uganda protects nearly half of the world's remaining mountain gorillas."
      heroImage={heroGorilla}
      heroAlt="Silverback mountain gorilla resting in the undergrowth of Bwindi rainforest"
      facts={[
        { label: "Location", value: "Bwindi & Mgahinga" },
        { label: "Duration", value: "1 hour with gorillas" },
        { label: "Permit", value: "USD 800 (USD 600 low season)" },
        { label: "Difficulty", value: "Moderate to Strenuous" },
      ]}
      sections={[
        {
          title: "A forest older than memory",
          body: "Bwindi Impenetrable Forest is one of Africa's oldest ecosystems — some 25,000 years of unbroken canopy that survived the Ice Age when forests around it did not. Ferns, orchids and hardwoods layer into a green so complete it changes the colour of the light. More than 400 mountain gorillas live here, roughly half the world's remaining population, in a species whose numbers are now climbing rather than falling: the only great ape on earth of which that is true.",
        },
        {
          title: "The hour that changes you",
          body: "You gather at dawn for a briefing, are matched to a family by fitness, and walk in behind rangers already in radio contact with the trackers who found the group at first light. The walk can take anywhere from an hour to most of a day. Then the clock starts, and everything narrows: an infant somersaulting off a branch, a mother eating with her back turned, a silverback breathing so audibly you feel it. Almost no one speaks. Almost everyone remembers it as the hour that reset their sense of scale.",
        },
        {
          title: "Trekked with intention",
          body: "Every permit funds ranger patrols, veterinary care and the revenue-sharing scheme that returns a share of park income to the villages on the forest boundary — the arrangement that turned local farmers from adversaries into the gorillas' most effective protection. Group sizes are capped at eight guests, distancing rules are enforced, and we book porters, guides and community lodges from the surrounding villages, so the money stays where the forest is.",
        },
        {
          title: "The people you'll meet along the way",
          body: "Your tracker is likely a Bakiga man from a farm within sight of the park gate; your porter, a woman from a cooperative that shares the day's earnings across the group. The Batwa, evicted from this forest in 1991, now run guided walks that explain how they lived inside it — how to find water in a vine, fire in wet air, medicine in a leaf. Set aside a morning for it. The gorillas are why you came; these conversations are often what you find yourself describing at home.",
        },
        {
          title: "Which Bwindi sector should you trek from?",
          body: "Bwindi is trekked from four sectors, each with its own gorilla families, lodges and character. Your permit is issued for a specific sector and date, so it pays to choose deliberately.\n\nBuhoma, in the north, is the oldest and most developed sector, with the widest choice of lodges and easy access to Batwa and waterfall walks. Ruhija, in the east, sits higher and cooler, sees fewer visitors and is one of the best sectors for birding. Rushaga, in the south-east, has the most gorilla families and is where the Gorilla Habituation Experience is offered, which makes it the easiest for permit availability. Nkuringo, in the south-west, is steep and demanding but rewards you with views across the valleys toward the Virunga volcanoes.\n\nThe right sector depends on your fitness, your dates and where you are heading next. We match the sector to your itinerary rather than the other way round.",
        },
        {
          title: "Permit rules and what happens on the day",
          body: "Every permit is issued by the Uganda Wildlife Authority for a set date and sector, and covers one hour with a habituated gorilla family. Groups are limited to eight visitors, the minimum age is 15, and rangers ask everyone to stay about seven metres from the gorillas, keep their voices low and skip the flash.\n\nThe day starts with an early-morning briefing at the park office, where you are assigned a family. Trackers have already located the group by then, so the walk in depends on where the gorillas spent the night. Once you reach them the hour begins, and afterwards you walk back out. Most people are back at the lodge by mid-afternoon, sometimes earlier.",
        },
        {
          title: "How fit do you need to be?",
          body: "Bwindi's terrain is steep, wet and uneven, at roughly 1,200 to 2,600 metres above sea level. The trek can take anywhere from an hour to most of a day, and how hard it feels depends on which family you are assigned and where it moved overnight.\n\nYou do not need to be an athlete. Steady walking fitness, sturdy boots and a walking stick will get most people through. Tell us about any knee, heart or breathing concerns before you book so we can request a group in easier terrain, and hire a porter: they carry your bag, steady you on slippery slopes, and the fee supports a local family.",
        },
        {
          title: "Standard trek or Habituation Experience?",
          body: "A standard permit gives you one hour with a habituated family. The Gorilla Habituation Experience, offered in Rushaga, lets a group of no more than four spend up to four hours with a family that is still getting used to visitors. It starts at 6:30 am, the minimum age is 15, permits are limited and cost more, and it suits photographers and repeat visitors best. Our Gorilla Permit Guide explains how the two compare.",
        },
        {
          title: "Bwindi or Mgahinga?",
          body: "Uganda has two gorilla parks. Bwindi, with its many families and four sectors, is the dependable choice. Mgahinga, in the far south-west, is smaller and quieter, set beneath three Virunga volcanoes, and pairs well with golden monkey trekking. But it has one habituated family that sometimes moves out of the park for periods, so if your dates are fixed, Bwindi is the safer bet.",
        },
        {
          title: "Uganda or Rwanda?",
          body: "Both countries offer superb gorilla trekking. Uganda's permit is priced well below Rwanda's, and Uganda lets you pair gorillas with chimpanzees, savannah safaris and the Nile in one trip. Rwanda's advantage is a shorter transfer from Kigali. Travellers with time often do both.",
        },
        {
          title: "Pair the gorillas with the rest of Uganda",
          body: "Most travellers build the trek into a longer journey: chimpanzee tracking in Kibale, tree-climbing lions and the Kazinga Channel in Queen Elizabeth National Park, and a slow finish on Lake Bunyonyi. The packages below show ready-made ways to do it, and every one can be adjusted to your dates, pace and budget.",
        },
      ]}

      galleryImages={[
        { src: g_gorilla_silverback, alt: "Silverback gorilla in Bwindi" },
        { src: g_gorilla_lookup, alt: "Mountain gorilla pausing mid-forage" },
        { src: g_gorilla_baby, alt: "Infant gorilla feeding in the undergrowth" },
        { src: g_gorilla_backlit, alt: "Gorilla backlit in the forest canopy" },
        { src: g_gorilla_tracking_1, alt: "Moments from gorilla tracking" },
        { src: g_gorilla_tracking_2, alt: "Face to face on a gorilla trek" },
        { src: g_gorilla_tracking_3, alt: "Trackers on the gorilla trail" },
        { src: g_virunga_volcanoes, alt: "The Virunga volcanoes above the gorilla forests" },
        { src: g_golden_monkey_1, alt: "Golden monkey in the Virunga bamboo" },
      ]}
      highlights={[
        { title: "Face-to-face encounter", desc: "One hour, three metres, no barriers — the most personal wildlife moment on the planet." },
        { title: "Small, private groups", desc: "Only eight guests per gorilla family, guided by expert rangers from the community." },
        { title: "Community porters", desc: "Optional local porters carry your pack — meaningful support for surrounding villages." },
        { title: "Ancient rainforest", desc: "Trek through 25,000-year-old forest alive with birds, orchids and forest elephants." },
        { title: "Conservation impact", desc: "Every permit directly funds anti-poaching patrols and gorilla healthcare." },
        { title: "Boutique lodges", desc: "Sleep in intimate forest lodges built and staffed by neighbouring communities." },
      ]}
      itinerary={[
        { day: "Day 01", title: "Kampala → Bwindi", desc: "A scenic drive south through the equator, tea estates and terraced hills to your forest lodge on the edge of Bwindi." },
        { day: "Day 02", title: "Gorilla trek", desc: "An early briefing at the park headquarters, then a guided trek to a habituated gorilla family for your unforgettable hour." },
        { day: "Day 03", title: "Batwa & community day", desc: "Spend the morning with the Batwa forest people, or hike to a waterfall through banana plantations before a slow evening at the lodge." },
        { day: "Day 04", title: "Return via Lake Bunyonyi", desc: "Pause at Uganda's most beautiful lake for lunch on the water before continuing north or on to Rwanda." },
      ]}
      bestTime="June to September and December to February — the dry seasons — bring firmer trails and easier trekking. Gorilla trekking is possible year-round; the wet months of March–May and October–November mean fewer travellers and lush, cinematic light."
      gettingThere="Fly into Entebbe International Airport. Bwindi is a scenic 8–9 hour drive south, or a 1-hour scheduled flight to Kihihi or Kisoro airstrips followed by a 1–2 hour transfer to your lodge."
      showLeadMagnet
      packageSlugs={["gorilla-escape", "budget-gorilla-safari", "gorilla-and-bunyonyi", "primates-adventure"]}
      guides={[
        { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide", desc: "Permit prices, what they include, how booking works and how it compares to Rwanda." },
        { name: "Bwindi Sectors Compared", to: "/travel-journal/bwindi-sectors-compared", desc: "Buhoma, Ruhija, Rushaga and Nkuringo side by side, and how to choose." },
        { name: "Bwindi Impenetrable National Park", to: "/destinations/bwindi-impenetrable", desc: "The forest, its four trekking sectors and where to stay." },
        { name: "Mgahinga Gorilla National Park", to: "/destinations/mgahinga-gorilla", desc: "Volcanoes, golden monkeys and a quieter gorilla trek." },
        { name: "Uganda vs Rwanda Gorilla Trekking", to: "/travel-journal/uganda-vs-rwanda-gorilla-trekking", desc: "Permit prices, travel time and terrain compared, and how to choose." },
        { name: "Packing Guide", to: "/packing-guide", desc: "Boots, layers and the clothing rule that surprises first-time visitors." },
      ]}
      related={[
        { name: "Chimpanzee Trekking", to: "/destinations/chimpanzee-trekking", img: expChimp },
        { name: "Tree-Climbing Lions", to: "/destinations/tree-climbing-lions", img: sceneLion },
        { name: "Murchison Falls", to: "/destinations/murchison-falls", img: sceneFalls },
        { name: "Lake Bunyonyi", to: "/destinations/lake-bunyonyi", img: sceneBunyonyi },
      ]}
      faqs={FAQS}
    />
  ),
});
