import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import expShoebill from "@/assets/exp-shoebill.jpg";
import { buildPageMeta } from "@/lib/site-config";

/**
 * Uganda birding authority hub for Biikuya Trails Uganda.
 *
 * This is a content-only upgrade. It preserves the existing /bird-guide URL,
 * GuidePage component, shared metadata helper, and existing image asset.
 * It does not introduce new routes, dependencies, schema systems, or components.
 */
export const Route = createFileRoute("/bird-guide")({
  head: () => ({
    ...buildPageMeta({
      title: "Birding in Uganda: Best Birdwatching Sites, Birds & Seasons | Biikuya Trails",
      description:
        "Plan birding in Uganda with a practical guide to the best birdwatching sites, shoebills, Albertine Rift birds, habitats, seasons and responsible guided birding tours.",
      path: "/bird-guide",
    }),
  }),
  component: () => (
    <GuidePage
      eyebrow="A Field Guide to Uganda"
      title={<>Uganda, seen <em className="italic text-gold">bird by bird</em>.</>}
      intro="Uganda brings together Lake Victoria wetlands, open savanna, lowland forest and the highland forests of the Albertine Rift. This field guide helps you understand those habitats, choose places to explore, prepare for time in the field and plan a birding journey around the birds that matter most to you."
      heroImage={expShoebill}
      heroAlt="Shoebill standing among papyrus vegetation in a Ugandan wetland"
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
            "Uganda's birding appeal comes from the variety of habitats that can be explored on one well-planned journey. Wetlands and lakeshores support waterbirds and specialised wetland species; savanna landscapes offer a different community of open-country birds and raptors; and lowland and montane forests reward patient observation and careful listening. The Albertine Rift is especially important to birders interested in species with restricted regional ranges. A successful trip is not simply a race between parks: time in each habitat matters.",
          checklist: [
            "Wetlands and lakeshores for waterbirds and papyrus-associated species",
            "Savanna and woodland for open-country birds, rollers, bee-eaters and raptors",
            "Lowland forest for species associated with Central African forest habitats",
            "Montane forest for highland species and Albertine Rift targets",
            "River edges, farmland and community landscapes for birds encountered between major sites",
          ],
        },
        {
          title: "Where to go birding in Uganda",
          body:
            "Choose destinations according to your target species, preferred habitats, travel dates and available time. Nearby wetlands can suit a short visit around Entebbe, while a longer route can combine forest, savanna and highland habitats in western or northern Uganda. Travel times between sites can be substantial, and access conditions may change with weather and local arrangements. Confirm current logistics before finalising a route.",
          checklist: [
            "Mabamba Bay wetland — a well-known place to search for shoebill by boat",
            "Bwindi Impenetrable National Park — montane forest and Albertine Rift birding",
            "Semuliki National Park — lowland forest with Central African affinities",
            "Queen Elizabeth National Park and the Kazinga Channel area — savanna, shoreline and waterbird habitats",
            "Murchison Falls National Park — a mix of riverine, wetland and savanna habitats",
            "Kidepo Valley National Park — open savanna and dry-country birding",
            "Mount Elgon and the Sipi area — highland habitats and forest edges",
            "Kibale Forest and nearby wetlands — forest birding that may fit a wider western Uganda itinerary",
          ],
        },
        {
          title: "Signature birds and specialist targets",
          body:
            "Some birds are especially memorable because of their appearance, habitat or the planning involved in finding them. Treat any target list as a guide rather than a promise: wild birds move, vegetation can obscure them, and conditions vary. Build time into the itinerary for observation and identification, and enjoy the wider bird community even when a particular species stays out of view.",
          checklist: [
            "Shoebill — a distinctive wetland bird often searched for in suitable papyrus habitat",
            "Grey Crowned Crane — Uganda's national bird, found in suitable open and wetland landscapes",
            "Great Blue Turaco — a large, colourful forest bird",
            "African Fish Eagle — a conspicuous raptor associated with lakes and rivers",
            "Papyrus Gonolek — a wetland specialist associated with papyrus habitat",
            "Shelley's Crimsonwing — a sought-after forest bird in the Albertine Rift region",
            "Ruwenzori Turaco — a highland forest target in the Rwenzori region",
            "African Green Broadbill — a specialised forest bird associated with montane forest habitat in the region",
          ],
        },
        {
          title: "Birding by habitat: how to choose a site",
          body:
            "Start with the habitat that supports the birds you hope to find. Wetland birding often involves scanning channels, reed edges and open water; forest birding may depend on recognising calls, watching the canopy and moving slowly along permitted trails; savanna birding can combine scanning from a vehicle with time on foot where allowed. Different habitats require different levels of patience, equipment and physical effort. A good route balances target species with realistic travel and observation time.",
          checklist: [
            "Wetlands: ask about boat arrangements, water conditions and local access",
            "Forest: allow time to listen for calls and check canopy, mid-storey and understory",
            "Savanna: carry binoculars for scanning distant birds and open habitats",
            "Highland sites: prepare for changing weather, uneven trails and cooler conditions",
            "All habitats: follow park rules and your guide's advice about safe, low-impact observation",
          ],
        },
        {
          title: "When is the best time for birding in Uganda?",
          body:
            "Birding is possible throughout the year, but the best dates depend on your goals. Drier periods often make road travel and walking easier, while wetter periods can bring lush vegetation, muddy trails and changing access conditions. Seasonal migrants may add to the birds present at some times of year, but timing varies and no month guarantees a particular species. If you have a priority list, plan around the target habitats and check current local conditions rather than relying on a single national peak season.",
          checklist: [
            "Choose dates around priority species and the habitats they use",
            "Allow flexibility for rain, trail conditions and road transfers",
            "Ask local guides about recent access and observation conditions",
            "For forest birding, allow enough time for slow walks and listening",
            "For wetland trips, confirm departure time and boat arrangements in advance",
          ],
        },
        {
          title: "How to plan a useful birding itinerary",
          body:
            "Begin with the number of days available, your priority species and the pace you enjoy. A short visit can focus on wetlands and lakeshore habitats around Entebbe. A longer journey can connect those areas with western Uganda's forests and savanna parks. Map distances do not tell the whole story: road conditions, early starts, breaks and time spent watching birds all affect the schedule. If you also want gorilla trekking or a general wildlife safari, make room for each activity instead of trying to fit birding into every gap.",
          checklist: [
            "Create a priority list and a secondary list of habitats or bird families",
            "Choose a realistic number of sites instead of trying to visit every park",
            "Allow unhurried field time at important wetlands and forest locations",
            "Check transport, park requirements, permits and local guide arrangements",
            "Keep daily notes of date, location, habitat and uncertain identifications",
            "Build in flexibility in case weather or wildlife movements change the plan",
          ],
        },
        {
          title: "What to bring for birdwatching",
          body:
            "You do not need expensive equipment to start birding, but a few practical items make time in the field more rewarding. Binoculars are usually the most useful first purchase. A camera is optional, and photography should never take priority over a bird's welfare. Pack for early starts, sun, rain, dust and muddy paths, and protect electronics from moisture. Choose equipment that you can carry comfortably throughout the day.",
          checklist: [
            "Binoculars suited to your budget and comfortable to carry",
            "A regional field guide or an offline bird-identification app",
            "A notebook or checklist, pencil and charged phone",
            "Comfortable clothing and sturdy footwear appropriate to the habitat",
            "Drinking water, sun protection, insect protection and a light rain layer",
            "A camera and telephoto lens if you use them, with suitable weather protection",
          ],
        },
        {
          title: "Identifying birds and keeping a reliable checklist",
          body:
            "Good identification relies on more than colour alone. Notice a bird's size, shape, bill, legs, plumage, behaviour, call and the habitat where it was found. Distance, poor light and brief views can make similar species difficult to separate. Record uncertain observations as tentative and check them later against a reliable field guide or an experienced birder. A careful checklist is more useful than a longer list containing guesses.",
          checklist: [
            "Note the location, date, habitat and conditions",
            "Record shape, size, field marks, behaviour and calls where possible",
            "Photograph only when it can be done without disturbing the bird",
            "Do not claim a species identification when the evidence is inconclusive",
            "Review difficult observations with a knowledgeable guide or trusted reference",
          ],
        },
        {
          title: "Birding responsibly and supporting conservation",
          body:
            "Responsible birding gives wildlife space to behave naturally. Keep noise low, follow permitted trails and your guide's instructions, and never pressure a guide or boat operator to approach too closely. Avoid flushing birds for photographs or disturbing nests. Follow local guidance on playback and sensitive locations, especially where sharing precise information could expose vulnerable species to disturbance. Respect communities and other visitors, leave no litter and follow the rules of protected areas.",
          checklist: [
            "Keep a respectful distance and never force a sighting",
            "Do not disturb nests, eggs or habitat for photographs",
            "Follow local rules on playback, access and photography",
            "Avoid publicising sensitive species locations when that could cause harm",
            "Work respectfully with local guides and communities",
          ],
        },
        {
          title: "Birding with gorilla trekking and wildlife safaris",
          body:
            "Birding can be combined with other Uganda experiences, but the route should be designed around the time each activity requires. Bwindi offers forest birding alongside gorilla trekking, while other destinations can add savanna wildlife, wetlands or primate experiences. Permit schedules, road transfers, trail conditions and the needs of your bird target list all matter. Decide which experiences are essential first, then build a balanced itinerary rather than treating birding as an activity that can always be squeezed in.",
          checklist: [
            "Prioritise your must-see birds and must-do activities before choosing the route",
            "Leave enough time for transfers and early field starts",
            "Check permit requirements and activity schedules before confirming travel",
            "Avoid promising a fixed number of bird species on a mixed-interest itinerary",
          ],
        },
        {
          title: "Plan a birding trip around your interests",
          body:
            "A useful birding itinerary reflects your experience, target species and preferred pace. Tell Biikuya Trails Uganda whether you are new to birdwatching, a keen general birder or travelling with a specialist list. Share your dates, available days, preferred habitats and any other experiences you want to include. These details help shape a realistic route around suitable sites, travel time and current local conditions. Wild sightings can never be guaranteed, but thoughtful planning can make the most of the time available.",
          checklist: [
            "A beginner-friendly trip with time to learn common calls and families",
            "A focused search for shoebills and other wetland birds",
            "Forest-focused days for Albertine Rift and other specialist targets",
            "A wider circuit combining wetland, forest and savanna habitats",
          ],
        },
      ]}
      faqs={[
        {
          q: "Why is Uganda a good destination for birdwatching?",
          a: "Uganda brings together wetlands, lakeshores, savanna, lowland forest and highland forest within one country. This habitat variety gives birders opportunities to look for different bird communities on the same journey. The best route depends on your target species, travel dates, available time and the habitats you most want to explore.",
        },
        {
          q: "Can beginners go birdwatching in Uganda?",
          a: "Yes. Beginners can start with accessible wetlands, lakeshores and other suitable birding sites, ideally with a guide who can help explain calls, field marks and behaviour. You do not need expensive photographic equipment to begin; binoculars, patience and a willingness to observe carefully are more important.",
        },
        {
          q: "How many bird species have been recorded in Uganda?",
          a: "Uganda is widely recognised for a national bird list of more than 1,000 recorded species. The number seen on an individual trip depends on the route, season, habitats visited, time in the field and identification experience. Check a current ornithological reference for the latest national total.",
        },
        {
          q: "When is the best time for birdwatching in Uganda?",
          a: "Birdwatching is possible year-round. Drier periods can make travel and walking easier, while wetter periods may affect trails and access. Seasonal migrants can add to the species present at some times of year, but timing varies. The best dates depend on your target birds and destinations.",
        },
        {
          q: "Where is the best place to look for a shoebill in Uganda?",
          a: "Mabamba Bay wetland near Lake Victoria is one of Uganda's best-known places to look for shoebills. Other suitable wetland areas may also support them. The most practical site depends on your route and current local conditions, and sightings are never guaranteed.",
        },
        {
          q: "Can I see a shoebill at Mabamba on every visit?",
          a: "No. Shoebills are wild birds and may be difficult to locate or outside the area searched during a visit. A knowledgeable local guide can help you search suitable habitat, but a responsible operator will not promise a sighting.",
        },
        {
          q: "Which places should I visit for birding in Uganda?",
          a: "Potential destinations include Mabamba Bay, Bwindi, Semuliki, Queen Elizabeth, Murchison Falls, Kidepo Valley, Mount Elgon and the Kibale area. The right combination depends on the species and habitats you want to explore, your available days and realistic travel times.",
        },
        {
          q: "Do I need a specialist birding guide?",
          a: "A specialist guide is particularly useful if you have a target list, want help identifying calls or plan to visit forest and wetland habitats where birds can be difficult to see. Beginners can also benefit from a guide who explains identification and observation patiently.",
        },
        {
          q: "Can I combine birding with gorilla trekking?",
          a: "Yes, with realistic planning. Bwindi offers opportunities for both forest birding and gorilla trekking, but permits, activity schedules, trail conditions and travel time affect how much birding fits into a trip. Decide which experience is the priority and allow enough time for each.",
        },
        {
          q: "How many days should I allow for a Uganda birding trip?",
          a: "A short trip can focus on nearby wetlands and a limited number of sites. A longer journey gives you more time to combine forest, savanna and wetland habitats. The right length depends on your target list, route and whether you are including other safari activities.",
        },
        {
          q: "What equipment should a beginner bring?",
          a: "Binoculars, a field guide or offline identification app, a notebook, water, sun protection, comfortable footwear and a light rain layer are a useful starting point. A camera is optional; you can enjoy birding without specialist photographic equipment.",
        },
        {
          q: "Are bird sightings guaranteed on a guided trip?",
          a: "No. Guides can use their knowledge of habitat, calls and recent conditions to improve the search, but wild birds move freely and conditions change. A good itinerary values the wider field experience as well as particular target species.",
        },
        {
          q: "How can I identify a bird I have not seen before?",
          a: "Record the habitat, location, date, size, shape, behaviour, call and visible field marks. Use a photograph only if it can be taken without disturbing the bird. If you are unsure, mark the identification as tentative and review it later with a reliable field guide or experienced birder.",
        },
        {
          q: "How can I birdwatch without disturbing wildlife?",
          a: "Keep your distance, minimise noise, follow access rules and avoid flushing birds for photographs. Do not disturb nests or pressure a guide to approach too closely. Follow local guidance on playback, photography and sensitive species locations.",
        },
        {
          q: "Can Biikuya Trails help plan a birding itinerary?",
          a: "Yes. Share your travel dates, birding experience, priority species, preferred pace and other activities you want to include. These details help shape a realistic route around suitable habitats and travel time. No wild sighting can be guaranteed.",
        },
      ]}
      related={[
        { name: "Birding Safaris in Uganda", to: "/experiences/birding" },
        { name: "Chasing the Shoebill", to: "/travel-journal/chasing-the-shoebill" },
        { name: "Best Time to Visit Uganda", to: "/travel-journal/best-time-to-visit-uganda-for-a-safari" },
        { name: "Uganda's Two Dry Seasons Explained", to: "/travel-journal/ugandas-two-dry-seasons-explained" },
        { name: "Travel Journal", to: "/travel-journal" },
        { name: "Western Uganda", to: "/regions/western-uganda" },
        { name: "Central Uganda", to: "/regions/central-uganda" },
        { name: "Wildlife Encyclopedia", to: "/wildlife-encyclopedia" },
      ]}
    />
  ),
});
