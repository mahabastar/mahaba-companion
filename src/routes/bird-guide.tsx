import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import expShoebill from "@/assets/exp-shoebill.jpg";
import { buildPageMeta } from "@/lib/site-config";

/**
 * Birding authority hub for Biikuya Trails Uganda.
 *
 * Implementation notes:
 * - Keeps the existing /bird-guide route and GuidePage component contract.
 * - Uses existing assets and site-wide components only.
 * - Does not change routing, schema infrastructure, or shared components.
 * - Links readers to existing commercial, destination, encyclopedia, and journal pages.
 */
export const Route = createFileRoute("/bird-guide")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Birding Guide: Bird Species, Best Sites & Seasons | Biikuya Trails",
      description:
        "Plan birdwatching in Uganda with a practical guide to the shoebill, Albertine Rift endemics, top birding sites, seasons, equipment and responsible birding trips.",
      path: "/bird-guide",
    }),
  }),
  component: () => (
    <GuidePage
      eyebrow="A Field Guide to Uganda"
      title={<>Uganda, seen <em className="italic text-gold">bird by bird</em>.</>}
      intro="From papyrus wetlands on Lake Victoria to the ancient forests of the Albertine Rift, Uganda brings an extraordinary range of birds and habitats into one journey. This guide helps you choose where to go, when to travel, what to look for and how to make time in the field count."
      heroImage={expShoebill}
      heroAlt="Shoebill stork standing among papyrus in a Ugandan wetland"
      facts={[
        { label: "Recorded birdlife", value: "1,000+ species" },
        { label: "Signature bird", value: "Shoebill" },
        { label: "Birding season", value: "Year-round" },
        { label: "National bird", value: "Grey Crowned Crane" },
      ]}
      sections={[
        {
          title: "Why birders choose Uganda",
          body:
            "Uganda sits where East African savanna, Central African forest and the highlands of the Albertine Rift meet. That meeting of habitats is the real strength of a birding trip here: a wetland morning, a forest walk and a savanna drive can produce very different bird communities. The country is compact enough for a multi-region itinerary, although road journeys between sites still take planning and some forest birding requires patience and time on foot.",
          checklist: [
            "Papyrus wetlands and lakeshores for wetland specialists and waterbirds",
            "Montane and lowland forests for forest-dependent species",
            "Savanna parks for raptors, rollers, bee-eaters and open-country birds",
            "The Albertine Rift for regionally restricted species and highland forest birding",
            "Congo-basin-influenced forest at Semuliki for a different set of species",
            "Community and farmland edges for everyday birdlife between major sites",
          ],
        },
        {
          title: "Where to go birding in Uganda",
          body:
            "Choose sites around the birds and habitats that interest you, your travel dates and the time you can spend in the field. A short trip can focus on one or two areas; a longer itinerary can connect wetlands, forest and savanna. Local access, trail conditions and the best places to search can change, so confirm the plan with a guide who knows the area.",
          checklist: [
            "Mabamba Bay wetland — a well-known place to search for shoebill by boat",
            "Bwindi Impenetrable National Park — montane forest and Albertine Rift birding",
            "Semuliki National Park — lowland forest birding with Central African affinities",
            "Queen Elizabeth National Park and Kazinga Channel — savanna, shoreline and waterbirds",
            "Murchison Falls National Park — riverine, wetland and savanna habitats",
            "Kidepo Valley National Park — dry-country and open-savanna birding",
            "Mount Elgon and the Sipi area — highland habitats and forest edges",
            "Kibale Forest and nearby wetlands — forest birding that can fit a primate-focused trip",
          ],
        },
        {
          title: "Signature birds to look for",
          body:
            "These birds are memorable targets, but they are not a complete checklist and none should be treated as guaranteed. A bird's presence depends on habitat, season, weather, time of day and its own movements. Enjoy the wider bird community as well as the headline species, and let your guide adapt the search to conditions on the day.",
          checklist: [
            "Shoebill — a distinctive wetland species often searched for in papyrus habitat",
            "Grey Crowned Crane — Uganda's national bird, seen in suitable open and wetland habitats",
            "Great Blue Turaco — a striking forest bird with a large silhouette and vivid colours",
            "African Fish Eagle — a familiar raptor around lakes and rivers",
            "Papyrus Gonolek — a specialist associated with papyrus swamps",
            "Shelley's Crimsonwing — a sought-after Albertine Rift forest species",
            "Ruwenzori Turaco — a highland forest target for birders exploring the Rwenzori region",
            "African Green Broadbill — a specialised forest bird associated with the region's montane forests",
          ],
        },
        {
          title: "When is the best time for birding in Uganda?",
          body:
            "Birding is possible throughout the year, but the best dates depend on your priorities. The broad drier periods often make travel and walking easier, while the wetter months can bring lush vegetation, muddy trails and changing access conditions. The period roughly from November to April can add Palearctic migrants to resident species, but migration timing varies and no month guarantees a particular bird. If your main goal is a specific species or habitat, plan around that target rather than relying on a single national ‘peak season’.",
          checklist: [
            "For a broad checklist, consider the mix of resident birds and seasonal migrants",
            "For forest birding, allow enough time for slow walks and listening for calls",
            "For wetlands, confirm water levels, access and departure time locally",
            "For multi-park trips, leave flexibility for road conditions and weather",
          ],
        },
        {
          title: "How to plan a useful birding itinerary",
          body:
            "Start with your target species, the number of days available and your preferred pace. A short stay around Entebbe can focus on nearby wetlands and lakeshore habitats. A longer trip can combine those areas with western Uganda's forests and savanna parks. Distances on a map can be misleading: allow time for road transfers, early starts, breaks and the possibility of spending longer at a productive site. If you also want gorilla trekking or a general wildlife safari, build the birding time into the itinerary instead of assuming it will fit around every other activity.",
          checklist: [
            "List priority birds, but keep a secondary list of habitat and family targets",
            "Choose sites that fit the route instead of adding every park",
            "Schedule important birding sessions around suitable local conditions",
            "Allow extra time at forest sites where calls and patient searching matter",
            "Confirm guide arrangements, park requirements and transport before departure",
            "Keep a simple daily checklist with location, date and notes on uncertain identifications",
          ],
        },
        {
          title: "What to bring for birdwatching",
          body:
            "You do not need an expensive kit to begin birding, but a few practical items make the experience more comfortable. Binoculars are the most useful first purchase. A camera is optional; it should not become a reason to approach or disturb a bird. Pack for early starts, sun, rain and muddy paths, and protect electronics from moisture and dust.",
          checklist: [
            "Binoculars suited to your budget and comfortable to carry",
            "A regional bird field guide or an offline bird-identification app",
            "Notebook or checklist, pencil and a charged phone",
            "Neutral, comfortable clothing and sturdy footwear for the planned habitat",
            "Water, sun protection, insect protection and a light rain layer",
            "Camera and telephoto lens if you already use them, plus weather protection",
          ],
        },
        {
          title: "Birding responsibly: give the birds space",
          body:
            "Good birding is about observation, not forcing a sighting. Keep noise low, follow your guide's instructions, stay on permitted trails and avoid flushing birds for photographs. Do not use playback or bait unless it is explicitly allowed and appropriate under local guidance. Respect nesting areas and other visitors, and avoid sharing precise locations of vulnerable species when that information could increase disturbance. Choosing knowledgeable local guides also helps connect visitors with people who understand the habitat and the practical realities of conservation.",
          checklist: [
            "Never promise or demand a guaranteed sighting of a wild bird",
            "Do not pressure guides or boat operators to approach too closely",
            "Follow park rules and local guidance on access and photography",
            "Leave nests, eggs, vegetation and other habitat undisturbed",
            "Support local guides and respect communities living beside bird habitats",
          ],
        },
        {
          title: "Build a birding trip around your interests",
          body:
            "A good birding itinerary is not simply a race to visit the most sites. It gives you time to watch, listen, learn calls and understand the places that support the birds. Tell us whether you are a beginner, a keen general birder or travelling with a priority list. Biikuya Trails Uganda can help shape a route around your dates, preferred pace and other interests, including wildlife viewing, forest walks and gorilla trekking where the logistics make sense.",
          checklist: [
            "Beginner-friendly birding with time to learn common calls and families",
            "A focused shoebill search around suitable wetland habitat",
            "Forest-focused days for Albertine Rift and other specialist targets",
            "A broader Uganda circuit combining forest, wetland and savanna habitats",
          ],
        },
      ]}
      faqs={[
        {
          q: "How many bird species have been recorded in Uganda?",
          a: "Uganda has a national bird list of more than 1,000 recorded species. The number you see on a particular trip will depend on your route, season, time in the field, habitat coverage and experience with identification.",
        },
        {
          q: "When is the best time for birdwatching in Uganda?",
          a: "Birdwatching is possible year-round. Drier periods can make travel and walking easier, while roughly November to April may add Palearctic migrants to resident birds. The best dates depend on your target species and chosen sites, and seasonal patterns do not guarantee sightings.",
        },
        {
          q: "Where is the best place to look for a shoebill?",
          a: "Mabamba Bay wetland near Lake Victoria is one of Uganda's best-known shoebill destinations. Suitable wetland areas elsewhere may also hold shoebills. Confirm the current plan with a local guide, and remember that no wild sighting is guaranteed.",
        },
        {
          q: "Can I see a shoebill at Mabamba on every visit?",
          a: "No. Shoebills are wild birds and can move out of view or be difficult to locate. An experienced local guide can help you search appropriate habitat, but a responsible operator will not promise a sighting.",
        },
        {
          q: "Do I need a specialist birding guide?",
          a: "A specialist guide is particularly valuable if you have a target list, want help identifying calls, or plan to visit forest and wetland habitats where birds can be hard to see. Beginners can also benefit from a guide who explains identification and observation patiently.",
        },
        {
          q: "Can I combine birding with gorilla trekking?",
          a: "Yes, with realistic planning. Bwindi is important for both gorilla trekking and forest birding, but trekking permits, activity schedules, trail conditions and travel time affect how much birding you can fit in. Decide which experience is the priority and leave enough time for each.",
        },
        {
          q: "How many days should I allow for a Uganda birding trip?",
          a: "A short trip can focus on nearby wetlands and a limited number of sites. A longer trip gives you more time to combine forest, savanna and wetland habitats. The right length depends on your target list and whether you are also including other safari activities; avoid choosing a schedule solely by the number of parks you can reach.",
        },
        {
          q: "What equipment should a beginner bring?",
          a: "Binoculars, a simple field guide or offline identification app, a notebook, water, sun protection, comfortable footwear and a light rain layer are a useful starting point. A camera is optional. You can still enjoy birding without specialist photographic equipment.",
        },
        {
          q: "Are bird sightings guaranteed on a guided trip?",
          a: "No. Guides can use their knowledge of habitat, calls and recent conditions to improve the search, but wild birds move freely and conditions change. A good itinerary values the overall field experience as well as particular target species.",
        },
        {
          q: "What should I do if I cannot identify a bird?",
          a: "Record the habitat, location, date, size, shape, behaviour, call and visible field marks. Take a photograph only if you can do so without disturbing the bird. If you are unsure, mark the identification as tentative rather than adding an unconfirmed species to your list.",
        },
        {
          q: "How can I birdwatch without disturbing wildlife?",
          a: "Keep your distance, minimise noise, follow access rules and avoid flushing birds for photographs. Do not disturb nests or pressure a guide to approach too closely. Follow local guidance on playback, photography and sensitive species locations.",
        },
        {
          q: "Can Biikuya Trails help plan a birding itinerary?",
          a: "Yes. Share your dates, birding experience, priority species, preferred pace and any other activities you want to include. Those details help shape a realistic route around suitable habitats and travel time.",
        },
      ]}
      related={[
        { name: "Birding Safaris in Uganda", to: "/experiences/birding" },
        { name: "Chasing the Shoebill", to: "/travel-journal/chasing-the-shoebill" },
        { name: "Travel Journal", to: "/travel-journal" },
        { name: "Western Uganda", to: "/regions/western-uganda" },
        { name: "Central Uganda", to: "/regions/central-uganda" },
        { name: "Wildlife Encyclopedia", to: "/wildlife-encyclopedia" },
      ]}
    />
  ),
});
