import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import expShoebill from "@/assets/exp-shoebill.jpg";
import { buildPageMeta } from "@/lib/site-config";

/**
 * Birding authority hub for Biikuya Trails Uganda.
 *
 * Keeps the existing /bird-guide route and GuidePage component contract.
 * Uses existing assets and existing internal routes only.
 */
export const Route = createFileRoute("/bird-guide")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Birding Guide: Best Sites, Birds & Seasons | Biikuya Trails",
      description:
        "Plan a Uganda birding safari with advice on shoebills, top birding sites, Albertine Rift endemics, seasons, habitats, equipment and responsible birdwatching with local guides.",
      path: "/bird-guide",
    }),
  }),
  component: () => (
    <GuidePage
      eyebrow="A Field Guide to Uganda"
      title={
        <>
          Uganda, seen <em className="italic text-gold">bird by bird</em>.
        </>
      }
      intro="Uganda is a rewarding birding destination where Lake Victoria wetlands, the Albertine Rift, lowland forests and open savannas support remarkably different bird communities. Use this guide to plan a realistic Uganda birding safari, choose habitats for your target list, understand seasonal trade-offs and observe birds responsibly with local knowledge."
      heroImage={expShoebill}
      heroAlt="Shoebill standing among papyrus in a Ugandan wetland"
      facts={[
        { label: "Recorded birdlife", value: "1,000+ species" },
        { label: "Signature bird", value: "Shoebill" },
        { label: "Birding season", value: "Year-round" },
        { label: "National bird", value: "Grey Crowned Crane" },
      ]}
      sections={[
        {
          title: "Why choose Uganda for a birding safari?",
          body:
            "Uganda lies at the meeting point of East African savanna, Central African forest and the highlands of the Albertine Rift. This habitat diversity is a major strength for birdwatching: one itinerary can include Lake Victoria wetlands, montane forest, lowland forest, woodland and open savanna. Each habitat supports a different bird community, so choose a route around your target species, available days and preferred pace. Road journeys between regions can take longer than map distances suggest, and productive forest birding often rewards patient listening as much as walking. For the strongest trip, spend enough time in each habitat rather than trying to collect destinations.",
          checklist: [
            "Papyrus wetlands and lakeshores for wetland specialists and waterbirds",
            "Montane forests for highland species and Albertine Rift targets",
            "Lowland forest for species associated with Central African habitats",
            "Savanna parks for raptors, rollers, bee-eaters and open-country birds",
            "River edges and woodland for additional habitat diversity",
            "Farmland and community areas for common birds often missed on fast itineraries",
          ],
        },
        {
          title: "Top places to go birdwatching in Uganda",
          body:
            "Choose birding sites around your priority species, habitats and route. A short stay can focus on wetlands near Entebbe, including a guided search for shoebills at Mabamba Bay. A longer Uganda birding safari can connect central wetlands with western forests and savanna parks. These sites are not interchangeable: a wetland specialist, an Albertine Rift forest target and an open-country species may require very different locations and time in the field. Check current access, permits, road conditions and local arrangements before travelling, and leave room to spend longer at productive locations.",
          checklist: [
            "Mabamba Bay wetland — a well-known place to search for shoebill by boat",
            "Bwindi Impenetrable National Park — montane forest and Albertine Rift birding",
            "Semuliki National Park — lowland forest with Central African affinities",
            "Queen Elizabeth National Park and Kazinga Channel — savanna, shoreline and waterbirds",
            "Murchison Falls National Park — riverine, wetland and savanna habitats",
            "Kidepo Valley National Park — dry-country and open-savanna birding",
            "Mount Elgon and the Sipi area — highland habitats and forest edges",
            "Kibale Forest and nearby wetlands — forest birding that can complement a primate-focused trip",
          ],
        },
        {
          title: "Signature birds and species to look for",
          body:
            "Uganda is known for sought-after birds, but a good birding trip is about more than a handful of headline sightings. Your results will depend on habitat, season, weather, time in the field and the movements of wild birds. Treat a target list as a guide rather than a promise, and enjoy the wider bird community along the way.",
          checklist: [
            "Shoebill — a distinctive wetland species searched for in suitable papyrus habitat",
            "Grey Crowned Crane — Uganda's national bird, found in suitable open and wetland habitats",
            "Great Blue Turaco — a striking forest bird with a large silhouette and vivid colours",
            "African Fish Eagle — a familiar raptor around lakes and rivers",
            "Papyrus Gonolek — a specialist associated with papyrus swamps",
            "Shelley's Crimsonwing — a sought-after Albertine Rift forest target",
            "Ruwenzori Turaco — a highland forest species sought in the Rwenzori region",
            "African Green Broadbill — a specialised forest bird associated with montane forest",
          ],
        },
        {
          title: "Mabamba Bay: planning a Shoebill birding trip",
          body:
            "Mabamba Bay, on the northern shore of Lake Victoria west of Entebbe, is one of Uganda's best-known places to search for the Shoebill (Balaeniceps rex). The bird is associated with suitable wetland habitat, including papyrus channels, and sightings depend on conditions and where birds are feeding or resting. Arrange the trip with a knowledgeable local guide or boat operator, confirm departure details in advance, and allow time to observe without rushing. Keep a respectful distance, follow the guide's instructions and treat a Shoebill sighting as a possibility rather than a guarantee.",
          checklist: [
            "Arrange a guided boat excursion and confirm the meeting point and departure time",
            "Ask about current wetland conditions and how long the trip is expected to take",
            "Bring binoculars, sun protection, water and protection for your camera or phone",
            "Keep voices low and never pressure the boat operator to approach a bird too closely",
            "Allow time to watch other wetland birds instead of focusing only on the Shoebill",
          ],
        },
        {
          title: "When is the best time for birding in Uganda?",
          body:
            "Birdwatching is possible throughout the year, but the best dates depend on your goals and route. Broadly drier periods can make travel and walking easier; wetter months may bring lush vegetation, muddy trails and changing access conditions. Palearctic migrants are present during part of the northern winter, with timing and numbers varying by species and year. Breeding activity, food availability, weather and habitat conditions also affect what you may see. There is no single national peak season that guarantees every target bird. If a particular species or habitat is the priority, plan around it and check current local conditions close to departure.",
          checklist: [
            "For a broad species list, consider both resident birds and seasonal migrants",
            "For forest birding, allow time for slow walks and listening for calls",
            "For wetland trips, confirm water levels, access and boat departure arrangements",
            "For multi-region trips, leave flexibility for weather and road conditions",
          ],
        },
        {
          title: "How to plan a productive Uganda birding itinerary",
          body:
            "Start with your priority birds, the number of days available and your preferred pace. A short stay around Entebbe can focus on nearby wetlands and lakeshore habitats. A longer trip can combine these with western Uganda's forests and savanna parks, but allow realistic travel time between regions. Avoid trying to visit every major site in a short period: excessive driving reduces valuable time in the field. If you also want gorilla trekking or a general wildlife safari, build dedicated birding sessions into the itinerary rather than assuming they will fit around every other activity. Share a target list with your guide before travel so the route can be designed around habitat and realistic search opportunities.",
          checklist: [
            "Prepare a priority list and a secondary list of habitats or bird families",
            "Choose sites that fit your route instead of adding every park",
            "Plan early starts where they suit the habitat and local arrangements",
            "Allow extra time at forest sites where calls and patient searching matter",
            "Confirm guide arrangements, park requirements and transport before departure",
            "Keep a daily checklist with date, location and notes for uncertain identifications",
          ],
        },
        {
          title: "Field skills: how to identify birds more confidently",
          body:
            "When identifying a bird, look at the whole picture rather than relying on colour alone. Notice its size and shape, bill, legs, posture, flight pattern, behaviour, habitat and call. Light, distance and viewing angle can make colours misleading. If you cannot confirm an identification, record the details and mark it as uncertain instead of adding a guess to your final list. A local guide can help explain calls, likely species and habitat clues while leaving time for you to observe for yourself.",
          checklist: [
            "Observe the bird's size, silhouette, bill shape and posture",
            "Listen to calls and note repeated patterns where possible",
            "Record the habitat, location, date and behaviour",
            "Use photographs only as supporting evidence, not as a reason to approach",
            "Compare field marks carefully and keep uncertain records clearly labelled",
          ],
        },
        {
          title: "What to bring for birdwatching",
          body:
            "You do not need expensive equipment to begin birding. Comfortable binoculars are usually the most useful first purchase. A camera is optional and should never become a reason to approach or disturb a bird. Prepare for early starts, sun, rain and muddy paths, and protect electronics from moisture and dust.",
          checklist: [
            "Binoculars that suit your budget and are comfortable to carry",
            "A regional bird field guide or offline bird-identification app",
            "Notebook or checklist, pencil and a charged phone",
            "Neutral, comfortable clothing and sturdy footwear for the planned habitat",
            "Water, sun protection, insect protection and a light rain layer",
            "Camera and telephoto lens if you already use them, with weather protection",
          ],
        },
        {
          title: "Responsible birding and wildlife photography",
          body:
            "Good birding is about observation, not forcing a sighting. Keep noise low, follow your guide's instructions, stay on permitted trails and avoid flushing birds for photographs. Do not use playback or bait unless it is explicitly permitted and appropriate under local guidance. Respect nesting areas and other visitors, and avoid sharing precise locations of vulnerable species if that could increase disturbance. Choosing knowledgeable local guides also supports people who understand the habitat and the practical realities of conservation.",
          checklist: [
            "Remember that no wild bird sighting can be guaranteed",
            "Never pressure guides or boat operators to approach too closely",
            "Follow park rules and local guidance on access and photography",
            "Leave nests, eggs, vegetation and other habitat undisturbed",
            "Support local guides and respect communities living beside bird habitats",
          ],
        },
        {
          title: "Plan a birding trip around your interests",
          body:
            "A useful birding itinerary is not a race to visit the most sites. It gives you time to watch, listen, learn calls and understand the habitats that support the birds. Tell Biikuya Trails Uganda whether you are a beginner, a keen general birder, a photographer or travelling with a priority list. Your dates, target species, preferred pace and other interests help shape a realistic route. Birding can be combined with wildlife viewing, forest walks and gorilla trekking where the logistics and available time make sense. Build in flexibility: weather, road conditions and the behaviour of wild birds can change the plan.",
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
          a: "More than 1,000 bird species have been recorded in Uganda. The number you see on a particular trip depends on your route, season, time in the field, habitat coverage and identification experience; a high species count is never guaranteed.",
        },
        {
          q: "When is the best time for birdwatching in Uganda?",
          a: "Birdwatching is possible year-round. Drier periods can make travel and walking easier, while Palearctic migrants are present during part of the northern winter. The best dates depend on your target species, chosen sites and current conditions; seasonal patterns do not guarantee sightings.",
        },
        {
          q: "Where is the best place to look for a shoebill?",
          a: "Mabamba Bay wetland near Lake Victoria is one of Uganda's best-known shoebill destinations. Suitable wetland areas elsewhere may also hold shoebills. Confirm current arrangements with a local guide, and remember that no wild sighting is guaranteed.",
        },
        {
          q: "Can I see a shoebill at Mabamba on every visit?",
          a: "No. Shoebills are wild birds and can move out of view or be difficult to locate. An experienced local guide can help you search suitable habitat, but a responsible operator will not promise a sighting.",
        },
        {
          q: "Do I need a specialist birding guide?",
          a: "A specialist guide is particularly valuable if you have a target list, want help identifying calls, or plan to visit forests and wetlands where birds can be hard to see. Beginners can also benefit from a guide who explains identification and observation patiently.",
        },
        {
          q: "Can I combine birding with gorilla trekking?",
          a: "Yes, with realistic planning. Bwindi is important for both gorilla trekking and forest birding, but permits, activity schedules, trail conditions and travel time affect how much birding you can fit in. Decide which experience is the priority and leave enough time for each.",
        },
        {
          q: "How many days should I allow for a Uganda birding trip?",
          a: "A short trip can focus on nearby wetlands and a limited number of sites. A longer trip gives you more time to combine forest, savanna and wetland habitats. The right length depends on your target list and whether you are including other safari activities.",
        },
        {
          q: "What equipment should a beginner bring?",
          a: "Binoculars, a simple field guide or offline identification app, a notebook, water, sun protection, comfortable footwear and a light rain layer are a useful starting point. A camera is optional.",
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
          q: "Can Biikuya Trails Uganda help plan a birding itinerary?",
          a: "Yes. Share your dates, birding experience, priority species, preferred pace and any other activities you want to include. Those details help shape a realistic route around suitable habitats and travel time.",
        },
      ]}
      related={[
        { name: "Birding Safaris in Uganda", to: "/experiences/birding" },
        { name: "Chasing the Shoebill", to: "/travel-journal/chasing-the-shoebill" },
        { name: "Mabamba Wetland Birding Guide", to: "/travel-journal/birding-mabamba-wetland-guide" },
        { name: "Travel Journal", to: "/travel-journal" },
        { name: "Western Uganda", to: "/regions/western-uganda" },
        { name: "Central Uganda", to: "/regions/central-uganda" },
        { name: "Wildlife Encyclopedia", to: "/wildlife-encyclopedia" },
      ]}
    />
  ),
});
