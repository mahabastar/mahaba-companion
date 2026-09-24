import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import gorillaSilverback from "@/assets/gorilla-silverback-insects.jpg";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/gorilla-permit-guide")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Gorilla Permits 2026: Cost & Booking | Biikuya Trails",
      description: "Uganda gorilla permit prices for 2026: USD 800 standard, USD 600 in April, May and November, what's included, how to book, and the Habituation Experience.",
      path: "/gorilla-permit-guide",
    }),
  }),
  component: () => (
    <GuidePage
      eyebrow="The Permit, Explained"
      title={<>What your <em className="italic text-gold">gorilla permit</em> actually buys you.</>}
      intro="A Uganda gorilla permit costs USD 800, or USD 600 in April, May and November. It is the single biggest line item on most itineraries, and also the most commonly misunderstood. Here's what it includes, how booking works, and how to pay less."
      heroImage={gorillaSilverback}
      heroAlt="Silverback gorilla in Bwindi, the encounter a gorilla permit buys"
      facts={[
        { label: "Standard permit", value: "USD 800 per person" },
        { label: "Low season (Apr, May, Nov)", value: "USD 600 per person" },
        { label: "Time with gorillas", value: "1 hour, max 8 per family" },
        { label: "Habituation Experience", value: "USD 1,500 (USD 1,800 from 2027)" },
      ]}
      sections={[
        {
          title: "Gorilla permit prices at a glance",
          body: "These prices are for foreign non-resident visitors and are set by the Uganda Wildlife Authority (UWA), which reviews its tariff from time to time. The figures below reflect the tariff announced in February 2026. Rates differ for foreign residents, other African nationals and East African citizens, so ask us for yours. We confirm the current figure again when we book.",
          checklist: [
            "Standard permit, every month except April, May and November: USD 800",
            "Low-season permit, April, May and November: USD 600",
            "Gorilla Habituation Experience: USD 1,500 until 31 December 2026, then USD 1,800",
            "The same rates apply in Bwindi and Mgahinga",
          ],
        },
        {
          title: "What's included, and what isn't",
          body: "The permit covers park entry for the day, an armed ranger guide, trackers who locate the gorilla family that morning, and your one hour with them once found. It does not cover porters, accommodation, transport, or meals. Hiring a porter — usually USD 15–20 — is optional but genuinely worth it: it directly supports community income and takes the physical load off you on what can be a long, steep trek.",
        },
        {
          title: "How to book a gorilla permit, step by step",
          body: "Foreign non-resident visitors book through a licensed Ugandan tour operator rather than directly with UWA, and every permit is issued for a specific date and sector. Here is how it works with us. For peak months, June through September and December through February, book as far ahead as you can: popular sectors like Rushaga can sell out four to six months in advance.",
          checklist: [
            "Tell us your dates and preferred sector, or ask us to suggest one",
            "We check live availability with UWA for those dates",
            "You send passport details exactly as printed, because permits are issued in the passport name",
            "Payment is made in full at booking, since UWA no longer allows unpaid reservation holds",
            "We send your permit confirmation. Carry your passport on trek day so rangers can check it against the permit",
          ],
        },
        {
          title: "Low-season permits: how to save USD 200",
          body: "In April, May and November the standard permit drops from USD 800 to USD 600. Those months are wetter, so trails are muddier, but the forest is lush, there are fewer visitors and permits are easier to find. The catch is that discounted permits cannot be rescheduled, so your dates are final once you pay. Our Budget Gorilla Safari is built around exactly this trade-off.",
        },
        {
          title: "Uganda vs Rwanda: the cost difference",
          body: "A Rwanda gorilla permit costs USD 1,500 — nearly double Uganda's standard permit. The gorillas and the experience are broadly comparable; the difference mainly reflects Rwanda's positioning as a more premium, more accessible (shorter drive from Kigali) destination. Uganda's four trekking sectors also mean considerably more permit availability overall.",
        },
        {
          title: "Payment, cancellation and rescheduling",
          body: "Permits must be paid in full when you book. Gorilla permits are largely non-refundable close to your trek date, and rescheduling depends on availability rather than being guaranteed. Discounted low-season permits cannot be rescheduled at all. Comprehensive travel insurance that specifically covers pre-paid permit costs is strongly recommended, given the size of this single expense.",
        },
        {
          title: "The Gorilla Habituation Experience",
          body: "For a longer, less crowded alternative, Rushaga sector in Bwindi offers the Habituation Experience, currently USD 1,500 per person and rising to USD 1,800 from 1 January 2027. You get up to four hours with a gorilla family still being acclimated to human presence, in a group of no more than four rather than eight. It starts earlier than a standard trek, at 6:30 am, and the minimum age is 15. It's a genuinely different experience, not just a longer version of the same one.",
        },
      ]}
      faqs={[
        { q: "How much is a gorilla permit in Uganda?", a: "USD 800 per person for a standard one-hour trek, or USD 600 in April, May and November. These are foreign non-resident rates set by the Uganda Wildlife Authority, and we confirm the current figure when we book." },
        { q: "Are there discounted permits at certain times of year?", a: "Yes. Under UWA's 2026 tariff, the standard permit costs USD 600 instead of USD 800 in April, May and November. Discounted permits cannot be rescheduled once paid for." },
        { q: "Can I buy a permit at the park gate?", a: "No. Permits must be secured in advance through a licensed Ugandan tour operator, and there is no reliable standby option at the gate." },
        { q: "How far ahead should I book?", a: "For June to September and December to February, four to six months ahead is sensible, and longer for popular sectors like Rushaga. Low-season months are easier, but booking early still lets you choose your sector." },
        { q: "Is the permit the same price in Bwindi and Mgahinga?", a: "Yes, the tariff is the same in both parks. The difference is the experience: Bwindi has many gorilla families across four sectors, while Mgahinga has one." },
        { q: "Is there a minimum age for gorilla trekking?", a: "Yes — 15 years old, strictly enforced, for the gorillas' health as much as visitor safety. There is no exception process in Uganda for younger trekkers." },
        { q: "What happens if we don't find the gorillas?", a: "Sighting rates in Uganda are very high because trackers locate the habituated families each morning, but it's genuinely wildlife, not guaranteed. Permits are not refunded for an unsuccessful trek." },
        { q: "How fit do I need to be for gorilla trekking?", a: "Treks range from 1 to 8 hours round trip depending on where the family has moved that morning, over steep and often muddy terrain. A reasonable fitness level helps; porters are available for anyone who wants extra support." },
        { q: "Can I photograph the gorillas?", a: "Yes, but flash photography is prohibited to protect their eyes — low-light technique matters more than equipment given the dense forest canopy." },
      ]}
      related={[
        { name: "Gorilla Trekking Guide", to: "/destinations/gorilla-trekking" },
        { name: "Budget Gorilla Safari", to: "/journeys/budget-gorilla-safari" },
        { name: "Uganda vs Rwanda", to: "/travel-journal/uganda-vs-rwanda-gorilla-trekking" },
        { name: "Packing Guide", to: "/packing-guide" },
      ]}
    />
  ),
});
