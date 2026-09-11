import heroGorilla from "@/assets/hero-gorilla.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import pearlOfAfrica from "@/assets/gallery/pearl-of-africa.jpg";
import heroGorilla from "@/assets/hero-gorilla.jpg";
import expSipi from "@/assets/exp-sipi.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import expShoebill from "@/assets/exp-shoebill.jpg";
import sceneCulture from "@/assets/scene-culture.jpg";
import sceneRwenzori from "@/assets/scene-rwenzori.jpg";
import pearlOfAfrica from "@/assets/gallery/pearl-of-africa.jpg";
import bestTimeUganda from "@/assets/best-time-uganda.jpg";
import bestTimeUganda from "@/assets/best-time-uganda.jpg";

export type Category = "Destinations" | "Culture" | "Conservation" | "Travel Advice";

export type JournalPost = {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  img: string;
  readMins: number;
  destination?: { name: string; to: string };
  body: string[];
  pullQuote?: string;
};

export const JOURNAL_POSTS: JournalPost[] = [
    {
    slug: "best-time-to-visit-uganda-for-a-safari",
    title: "Best Time to Visit Uganda for a Safari: A Complete Month-by-Month Guide",
    category: "Travel Advice",
    excerpt:
      "Discover the best time to visit Uganda for a safari, gorilla trekking and chimpanzee trekking. Explore Uganda's seasons, weather and travel tips.",
    img: bestTimeUganda,
    readMins: 9,
    pullQuote:
      "There is no single perfect month to visit Uganda. The best time depends on the kind of experience you want.",
    body: [
      "Uganda is a year-round travel destination, but choosing when to visit can make a significant difference to your experience. Weather, wildlife movements, trekking conditions, road conditions, accommodation availability and even the atmosphere around popular destinations can change throughout the year.",

      "For travellers planning a Uganda safari, gorilla trekking or chimpanzee experience, understanding the country's seasons is therefore important. Uganda sits across the equator, which gives it a relatively moderate climate compared with many other parts of Africa. Instead of one simple wet season and one dry season, much of the country experiences two relatively dry periods and two rainy periods.",

      "The good news is that there is no completely wrong time to visit. Each season has its advantages, and travelling during the quieter months can sometimes give you a more intimate experience with fewer visitors and more flexibility.",

      "## January: Warm, green and excellent for travel",
      "January is generally one of the more popular months for visiting Uganda. Many areas experience relatively dry conditions, making it a good period for wildlife safaris, gorilla trekking and exploring the country's national parks.",

      "The vegetation can still be relatively green following the rains, while roads and trekking trails are often easier to navigate than during the wetter months. January is also a good month for travellers combining several regions of Uganda in one itinerary.",

      "## February: A strong month for safaris and trekking",
      "February continues the generally favourable conditions of the early-year dry season. Wildlife viewing can be rewarding, and trekking conditions in places such as Bwindi and Kibale are often manageable.",

      "For travellers interested in photography, February can offer a good balance between greenery and relatively predictable travel conditions.",

      "## March: The beginning of the wetter period",
      "March marks a transition toward Uganda's wetter period in many regions. Rain becomes more frequent, although this does not necessarily mean that it rains throughout the entire day.",

      "For adventurous travellers, March can be an interesting time to visit because landscapes become increasingly lush and some destinations become quieter. Travellers should simply be prepared for muddy trails and occasional changes to road conditions.",

      "## April: Green Uganda at its most dramatic",
      "April is one of the wetter months in many parts of Uganda. For travellers focused entirely on easy trekking and predictable road conditions, this may not be the first choice.",

      "However, April has another major advantage: Uganda can look spectacularly green. Forests, wetlands and savannah landscapes come alive, and there are generally fewer international visitors than during the busiest travel periods.",

      "If you do not mind rain and want a quieter Uganda experience, the wetter months can be worth considering.",

      "## May: A quieter season for exploring Uganda",
      "May continues the wetter period. Roads in some rural areas can become challenging, and trekking trails may be slippery, so travellers should plan their transport and activities carefully.",

      "The reward is a quieter travel experience. Photographers and travellers who prefer avoiding crowds may find this period particularly appealing.",

      "## June: The start of the main dry season",
      "June is one of the strongest months for travelling through Uganda. Conditions generally become drier, roads become easier to navigate and wildlife viewing can become more predictable.",

      "It is also a popular period for gorilla trekking and chimpanzee trekking. Because demand can increase during the dry season, travellers planning specific trekking dates should make arrangements well in advance.",

      "## July: Peak safari season",
      "July is traditionally one of the busiest months for safari travel in Uganda. Dry conditions make many roads and trails easier to navigate, while wildlife can become easier to spot in some savannah areas as vegetation becomes less dense.",

      "This is an excellent month for combining a wildlife safari with gorilla or chimpanzee trekking, although travellers should expect higher demand for accommodation and popular activities.",

      "## August: Excellent for a Uganda adventure",
      "August continues the main dry-season travel period. It is particularly attractive for travellers who want to combine several experiences in one trip, such as wildlife, primates, mountains, culture and community experiences.",

      "The Rwenzori region, western Uganda and the major national parks can all form part of a longer itinerary during this period.",

      "## September: A transition month",
      "September can offer an excellent balance between relatively favourable travel conditions and fewer visitors compared with the busiest parts of the dry season.",

      "Rainfall begins to increase in some areas, but conditions can remain very suitable for travel. This makes September an interesting option for travellers who want a mixture of adventure and flexibility.",

      "## October: Green landscapes and fewer crowds",
      "October is part of Uganda's shorter rainy period. The country becomes greener, and some travellers find this season particularly attractive for photography and landscapes.",

      "Rain can make forest trails and some roads more challenging, but safari and trekking activities continue. The key is to travel with appropriate clothing, footwear and a flexible itinerary.",

      "## November: A quieter time to discover Uganda",
      "November can be one of the more peaceful months for travellers who want to experience Uganda away from peak-season crowds.",

      "The rains can create lush scenery, while the lower number of visitors can make some destinations feel more personal. Travellers should allow additional flexibility for road travel and outdoor activities.",

      "## December: Festive season in the Pearl of Africa",
      "December brings another popular travel period. Conditions can vary across the country, but the month is attractive to travellers combining wildlife, culture and family holidays.",

      "The festive atmosphere can also make December an interesting time to experience Uganda beyond the national parks, with towns, markets and communities becoming particularly lively.",

      "## What is the best time for gorilla trekking in Uganda?",
      "Gorilla trekking is possible throughout the year. The drier months are often preferred because trails can be easier to navigate, but rain is part of the forest environment and can occur even during the dry season.",

      "Travellers should therefore choose their trekking dates based not only on weather but also on availability, budget and the overall itinerary they want to create.",

      "## What is the best time for chimpanzee trekking?",
      "Chimpanzee trekking can also be enjoyed throughout the year. Kibale Forest and other primate destinations remain rewarding across different seasons.",

      "During wetter periods, the forest can be especially lush. During drier periods, hiking conditions may be more comfortable. Both seasons offer their own character.",

      "## What is the best time for a Uganda wildlife safari?",
      "For traditional savannah wildlife safaris, the drier months are often considered the easiest because roads are generally more accessible and animals can become easier to locate around water sources.",

      "However, the wetter months can provide beautiful landscapes, fewer visitors and excellent photographic opportunities. Uganda's wildlife parks remain worth visiting throughout the year.",

      "## Is Uganda expensive during peak season?",
      "Peak travel periods can bring higher demand for accommodation, permits, transport and popular activities. Booking early is therefore important if you have fixed travel dates.",

      "Travelling during quieter periods can provide more flexibility and, depending on the service and destination, may offer opportunities for lower rates.",

      "## So, when should you visit Uganda?",
      "If you want the simplest answer, June to September is a strong period for travellers looking for generally favourable conditions across many parts of Uganda. December to February is another attractive travel window.",

      "But the best answer depends on what you want from your trip. A traveller interested in photography and lush landscapes may love the rainy season. Someone planning a demanding mountain trek may prioritise drier conditions. A budget-conscious traveller may prefer quieter periods.",

      "The most important thing is to plan around the experience rather than simply chasing a particular month.",

      "At Biikuya Trails Uganda, we help travellers build journeys around what they actually want to experience — whether that means gorilla trekking, chimpanzee tracking, wildlife safaris, mountain adventures, cultural experiences or discovering places beyond the usual tourist route.",

      "Uganda is a year-round destination. The right time to visit is ultimately the time that matches the kind of Uganda you want to discover."
    ],
  },
    slug: "the-silverbacks-silence",
    title: "The Silverback's Silence",
    category: "Destinations",
    excerpt:
      "An hour in Bwindi's undergrowth, at eye level with a family that has no reason to trust us, and every reason not to.",
    img: heroGorilla,
    readMins: 6,
    destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
    pullQuote: "He didn't look away. He simply decided we weren't worth the trouble.",
    body: [
      "The forest closes in about twenty minutes after the trailhead. By then the path has stopped being a path — it's a suggestion, cut fresh that morning by a tracker's machete through vines thick enough to hold a person's weight. Bwindi means 'impenetrable' in the local Rukiga dialect, and the name is not a marketing flourish. It is a warning, kindly given.",
      "Our guide raised a fist. Somewhere ahead, a branch cracked — not from wind, but from mass. Then the undergrowth simply parted, and there he was: a silverback, close enough that we could hear him breathing, close enough to see the grey dusting his shoulders like frost. He was enormous in the way that large animals are never quite enormous in photographs — the photographs lie by omission, leaving out the sound of him, the weight of him in the air.",
      "What surprised me wasn't his size. It was his indifference. He glanced at our group — eight strangers in muddy gaiters, cameras half-raised — and made a decision so quickly it barely registered as a decision at all. We were not a threat. We were barely a curiosity. He turned back to the stem of wild celery he'd been stripping with his fingers, and that was that.",
      "For the next hour we simply watched. A juvenile tumbled through the undergrowth in a game only it understood. A mother groomed an infant with the unhurried patience of someone who has nowhere else to be. Nobody spoke above a whisper; nobody needed to. There's a particular kind of silence that settles over a group of people who have all, simultaneously, realised they are the least important thing in the room.",
      "Then, as abruptly as it began, our hour was up. The trackers use GPS trip timers as strict as any airport gate. We backed away slowly, the way we'd been briefed to, and the forest swallowed the clearing behind us as though it had never been there. Nobody talked much on the walk back down. There wasn't much that needed saying.",
    ],
  },
  {
    slug: "a-morning-at-sipi-falls",
    title: "A Morning at Sipi Falls",
    category: "Destinations",
    excerpt:
      "Three waterfalls, one ridge, and the particular quiet of eastern Uganda before the heat of the day sets in.",
    img: expSipi,
    readMins: 4,
    destination: { name: "Sipi Falls", to: "/destinations/sipi-falls" },
    body: [
      "Sipi wakes up slowly. Mist sits in the coffee terraces below Mount Elgon until well past seven, and the three waterfalls that give the village its name are, for an hour or so, entirely private — no other hikers, no boda-bodas on the ridge road, just the low roar of falling water carrying up through the fog.",
      "The main falls drop 100 metres in a single unbroken column, and the trail to its base is steep enough to earn the coffee waiting at the top. Along the way, farmers are already out among the arabica bushes, picking the ripest red cherries by hand — Sipi's altitude and volcanic soil make it one of Uganda's most respected coffee-growing regions, though most of what's grown here leaves the country long before most drinkers ever hear the name.",
      "By mid-morning the ridge fills with a different kind of activity: local guides leading small groups between the three falls, a rope-assisted scramble behind the second cascade for anyone who doesn't mind getting wet, and the particular Ugandan hospitality of being invited, entirely unprompted, to sit and share a cup of coffee roasted an hour earlier over an open fire.",
      "There's no single 'main event' at Sipi the way there is with gorilla trekking or a Nile cruise — it's a slower kind of morning, built from small things done well. That, more than the waterfalls themselves, is usually what people remember.",
    ],
  },
  {
    slug: "coffee-from-bean-to-fire",
    title: "Coffee, from Bean to Fire",
    category: "Culture",
    excerpt:
      "Following a single handful of arabica cherries from a Sipi hillside to the cup — and the community that depends on it.",
    img: expCoffee,
    readMins: 5,
    destination: { name: "Sipi Falls", to: "/destinations/sipi-falls" },
    pullQuote: "Nothing here is automated. Every step still happens by hand, by eye, by taste.",
    body: [
      "Uganda has been growing coffee for longer than most drinkers assume — long enough that wild coffee forests still exist in parts of the west, predating the commercial plantations entirely. But it's the terraced slopes of Mount Elgon, around Sipi, where the arabica story is easiest to see start to finish, in a single morning, on foot.",
      "It starts with picking — only the ripest cherries, deep red, chosen by hand from bushes that a farming family may have tended for three generations. From there the cherries are pulped to remove the outer skin, fermented for a day or two to loosen the sticky mucilage beneath, washed, and laid out to dry on raised beds in the sun. Nothing here is automated. Every step still happens by hand, by eye, by taste.",
      "The last stage is the one visitors usually get to join: roasting over an open flame in a blackened pan, the beans stirred constantly to keep them from scorching, the smell turning from grassy to nutty to something close to chocolate in the space of about fifteen minutes. Ground with a wooden mortar, brewed in a battered kettle, it tastes noticeably different from anything that's travelled — brighter, a little wilder, closer to the fruit it started as.",
      "For the families who grow it, coffee is less a commodity than a savings account with roots — a crop that pays school fees and buys land, one harvest at a time. Buying a bag directly from a cooperative near Sipi, rather than a supermarket shelf back home, means a far larger share of that money actually stays on the mountain where it was grown.",
    ],
  },
  {
    slug: "chasing-the-shoebill",
    title: "Chasing the Shoebill",
    category: "Destinations",
    excerpt:
      "Why one of the world's strangest-looking birds is worth an early canoe launch into Murchison's papyrus swamps.",
    img: expShoebill,
    readMins: 4,
    destination: { name: "Murchison Falls", to: "/destinations/murchison-falls" },
    body: [
      "There is no elegant way to describe a shoebill. It stands over a metre tall, grey and prehistoric, with a bill shaped — genuinely — like a Dutch clog, hooked at the tip into something between a beak and a weapon. Birders travel across continents for it. Everyone else usually needs the photo explained twice.",
      "Finding one means an early start: a narrow canoe, paddled rather than motored, threading through the papyrus swamp fringing the Nile's delta before the day's heat sends the birds into deeper cover. Shoebills hunt by standing motionlessly for hours at a stretch, waiting for a lungfish or baby crocodile to surface within striking distance, and that same stillness makes them maddeningly easy to paddle straight past.",
      "When you do find one, it rarely startles. Shoebills seem entirely unbothered by an approaching canoe, tracking it with a slow, faintly unimpressed swivel of the head that has earned them a reputation as one of the most photogenic — and least expressive — birds on the continent.",
      "Fewer than 1,300 mature shoebills are thought to remain across their entire range, most of them across the wetlands of the Nile basin and central Africa, which makes Murchison's population a genuinely significant one rather than a roadside curiosity. It's a quiet morning that tends to stay with people — not for drama, but for the strangeness of something so still.",
    ],
  },
  {
    slug: "ugandas-two-dry-seasons-explained",
    title: "Uganda's Two Dry Seasons, Explained",
    category: "Travel Advice",
    excerpt:
      "Unlike much of East Africa, Uganda has two wet seasons and two dry seasons a year. Here's what that actually means for planning a trip.",
    img: sceneRwenzori,
    readMins: 5,
    body: [
      "First-time visitors researching 'best time to visit Uganda' often get confused by conflicting answers, and the reason is simple: Uganda's straddling of the equator gives it two distinct dry seasons and two distinct wet seasons every year, rather than the single dry/wet split more familiar from southern or eastern African itineraries.",
      "The long dry season runs roughly June through August, and the short dry season from December through February — both bring firmer trails, easier gorilla trekking, and better game-drive visibility, which is why they're also the busiest and most expensive months to book. The long rains fall March through May, and the short rains September through November, both of which soften trails and thin out other travellers, sometimes considerably.",
      "What surprises people most is how liveable the 'wet' seasons actually are. Uganda's rain rarely settles in for the day — it's typically an intense afternoon shower followed by clear skies, rather than the grey, all-day drizzle some visitors picture. Gorilla trekking and most game drives continue through the rains with a bit more mud and a lot more room to yourself.",
      "The practical upshot: if flexibility and lower rates matter more than dry trails, April, May and November are worth serious consideration — several parks and gorilla permits even carry a discounted low-season rate during these months. If comfort and easier hiking conditions matter more, book the dry months early; they sell out months in advance.",
    ],
  },
  {
    slug: "inside-ugandas-community-conservation-model",
    title: "Inside Uganda's Community Conservation Model",
    category: "Conservation",
    excerpt:
      "How permit revenue, ranger jobs and revenue-sharing agreements turned neighbouring communities into some of the parks' fiercest protectors.",
    img: sceneCulture,
    readMins: 6,
    body: [
      "It's easy to think of a national park boundary as a simple line on a map — wildlife inside, people outside. In Uganda, that line has always been more porous, and more contested, than the postcards suggest. Families farmed land that later became protected forest. Elephants still raid crops just beyond park edges. Conservation here has never been just a wildlife question; it has always also been a neighbours question.",
      "The model that's evolved in response is built on a fairly direct principle: if a family living beside a national park earns more from the wildlife inside it staying alive than they would from poaching it, conservation and community interest start pointing the same direction. A share of park entrance and permit revenue — including a meaningful percentage of every gorilla permit sold — is legally required to flow back into the communities bordering the parks, funding schools, clinics, and roads.",
      "That revenue-sharing sits alongside direct employment: many rangers, trackers and guides working in and around Bwindi, Murchison and Queen Elizabeth today grew up in villages on the park boundary, and know the terrain — and the wildlife's habits — from a lifetime spent nearby, not from a training manual alone.",
      "It isn't a finished project. Human-wildlife conflict, particularly crop-raiding by elephants and baboons near park edges, remains a genuine source of tension, and revenue-sharing agreements only work when they're honoured consistently. But the shift over the past three decades — from conservation done to communities, toward conservation done with them — is a large part of why mountain gorilla numbers have actually grown even as human population pressure around the parks has intensified. It's imperfect, but it's working.",
    ],
  },
  {
    slug: "why-uganda-should-be-your-next-african-adventure",
    title: "Why Uganda Should Be Your Next African Adventure",
    category: "Travel Advice",
    excerpt:
      "Discover why Uganda is one of Africa's most rewarding travel destinations, from gorilla trekking and safaris to mountains, forests, culture and hidden gems.",
    img: pearlOfAfrica,
    readMins: 7,
    destination: { name: "Gorilla Trekking, Bwindi", to: "/destinations/gorilla-trekking" },
    pullQuote: "A good Uganda trip is not necessarily the one with the most destinations. It is the one that gives you enough time to actually experience them.",
    body: [
      "There are places you visit for a holiday, and there are places that stay with you long after you leave. Uganda is one of them.",
      "Known as the Pearl of Africa, Uganda brings together extraordinary wildlife, dramatic landscapes, rich cultures and some of the most memorable adventure experiences in East Africa. From standing in the misty forests of Bwindi to watching elephants cross the savannah, travelling through Uganda is not simply about seeing attractions. It is about experiencing a country that feels alive at every turn.",
      "At Biikuya Trails Uganda, we believe the best way to understand Uganda is to travel through it.",
      "Uganda's geography is one of its greatest strengths. In the west, the landscape changes from crater lakes and rolling hills to tropical forests, mountains and vast national parks. The Rwenzori Mountains rise dramatically along the border with the Democratic Republic of Congo, while the forests of southwestern Uganda provide habitat for mountain gorillas and chimpanzees.",
      "Further north, Uganda's landscapes become broader and wilder, with destinations such as Murchison Falls National Park offering opportunities to experience elephants, giraffes, hippos, lions and other African wildlife. Then there is the savannah of Queen Elizabeth National Park, the forests of Kibale, the remote wilderness of Kidepo Valley and the adventure opportunities around the Nile. One country can offer remarkably different experiences within the same journey.",
      "For many international travellers, gorilla trekking in Uganda is a once-in-a-lifetime experience. Deep in the forests of Bwindi Impenetrable National Park, visitors have the opportunity to trek through ancient forest habitat in search of mountain gorillas. The experience is more than simply observing wildlife. You are entering an ecosystem where conservation, local communities and tourism are closely connected. The trek itself can be physically demanding, unpredictable and incredibly rewarding. It is precisely these experiences that make Uganda different from an ordinary sightseeing destination.",
      "Uganda is also an exceptional destination for travellers interested in primates. Kibale National Park is particularly well known for chimpanzee trekking and its remarkable diversity of primates. Walking through the forest while listening for movement in the canopy can be just as memorable as seeing the animals themselves. For travellers interested in wildlife photography, conservation and nature, Uganda offers an opportunity to experience these environments much more closely.",
      "One mistake visitors can make is thinking Uganda is only about safaris and gorillas. It isn't. Uganda is also about people, food, music, agriculture, history and everyday life. Travelling between destinations can reveal another side of the country: roadside markets, local restaurants, farms, fishing communities, craft makers, musicians and people whose stories are rarely found in conventional travel brochures.",
      "This is the Uganda we want to document through the Biikuya Trails Uganda Journal. Biikuya Trails Uganda is more than a tour operator. We are building a platform for discovering Uganda. Through our journal, videos and journeys, we want to show travellers what Uganda looks like beyond the standard itinerary. We will share destinations, travel advice, wildlife experiences, local stories, practical information and the realities of travelling across Uganda. Some stories will be polished. Others will simply be our experience on the road. Because discovering Uganda is a journey, and we want you to come along with us.",
      "Whether you are interested in gorilla trekking, chimpanzee trekking, Uganda safaris, hiking, cultural experiences or exploring Western Uganda, the right itinerary depends on what you want to experience. A good Uganda trip is not necessarily the one with the most destinations. It is the one that gives you enough time to actually experience them. That might mean combining a gorilla trek with a safari, exploring the crater lakes of Western Uganda, hiking in the Rwenzori region or spending more time discovering places that most visitors never see.",
      "At Biikuya Trails Uganda, our goal is to help travellers experience the country rather than simply pass through it. Uganda is waiting. The journey starts here.",
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}

export const CATEGORIES: Category[] = ["Destinations", "Culture", "Conservation", "Travel Advice"];
