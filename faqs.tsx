import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/GuidePage";
import sceneCulture from "@/assets/scene-culture.jpg";
import { buildPageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Safari FAQs: Visas, Safety & Money | Biikuya Trails",
      description: "Answers to the questions travellers ask most before a Uganda safari — visas, safety, money, gorilla trekking, best time to visit, and more.",
      path: "/faqs",
    }),
  }),
  component: () => (
    <GuidePage
      eyebrow="Before You Go"
      title={<>Everything travellers <em className="italic text-gold">ask us first</em>.</>}
      intro="The questions that come up most before a Uganda trip — grouped here in one place. For a deeper dive on any topic, each links through to its own dedicated guide."
      heroImage={sceneCulture}
      heroAlt="Travellers and guides preparing for a Uganda safari"
      facts={[
        { label: "Is Uganda safe?", value: "See our safety guide" },
        { label: "Visa needed?", value: "Yes, for all nationalities" },
        { label: "Vaccination required", value: "Yellow fever" },
        { label: "Currency", value: "Ugandan Shilling" },
      ]}
      sections={[
        {
          title: "Safety, health & entry",
          body: "Uganda welcomes visitors, and gorilla and chimpanzee treks are led by armed Uganda Wildlife Authority rangers. Government advice on travel to Uganda varies in 2026, so read our safety guide and check your own government's advice before you book. Every visitor needs a visa and a yellow fever certificate — see the full Visa Guide for the application process.",
        },
        {
          title: "Money, tipping & connectivity",
          body: "US dollars (notes printed 2009 or later, in good condition) and the Ugandan Shilling are both widely used; card payments are common in Kampala and larger lodges but less reliable in remote parks, so carrying cash is essential. Mobile data coverage is decent in towns and around most lodges, though remote parks like Kidepo have patchy signal.",
        },
      ]}
      faqs={[
        { q: "Is Uganda safe to visit?", a: "It depends on where you go and how you travel. Some governments currently advise against travel to all or parts of Uganda, while many visitors travel without incident on organised itineraries. Read the advice from your own government, check your insurance, and see our safety guide. We will tell you directly if anything on your itinerary is affected." },
        { q: "Do I need a visa for Uganda?", a: "Yes, every visitor does. Apply online in advance — see our full Visa Guide for the single-entry versus East Africa Tourist Visa comparison." },
        { q: "Do I need any vaccinations?", a: "A yellow fever vaccination certificate is mandatory for entry. Malaria prophylaxis is strongly recommended and should be discussed with your doctor before travel." },
        { q: "What's the best time to visit Uganda?", a: "The dry seasons (June–September and December–February) offer the easiest trekking conditions, though Uganda is a year-round destination — see our Seasonal Safari Calendar for a month-by-month breakdown." },
        { q: "How much does a Uganda safari cost?", a: "It varies widely by trip length, number of gorilla permits, and accommodation style. Try our Safari Budget Calculator for a personalised estimate." },
        { q: "How much does a gorilla trekking permit cost?", a: "USD 800 per person for a standard one-hour trek, or USD 600 in April, May and November. See our Gorilla Permit Guide for exactly what's included and how booking works." },
        { q: "What currency should I bring?", a: "US dollars (notes printed 2009 or later, in good condition) for tips and larger payments, alongside some Ugandan Shillings for small everyday purchases." },
        { q: "Do I need to tip guides and rangers?", a: "Tipping is expected and forms a meaningful part of local income — we provide specific guidance on typical amounts as part of your itinerary." },
        { q: "Is the water safe to drink?", a: "Stick to bottled or filtered water throughout your trip; it's provided at all lodges and included in vehicle transfers." },
        { q: "Will I have phone and internet signal?", a: "Coverage is decent in towns and at most lodges, including many in national parks, but can be patchy or unavailable in remote areas like Kidepo Valley." },
        { q: "What should I pack?", a: "Neutral-coloured layers, sturdy hiking boots, and rain protection are the essentials — see our full Packing Guide, including one clothing rule that surprises most first-time visitors." },
        { q: "Can I combine Uganda with Rwanda or Kenya?", a: "Yes — the East Africa Tourist Visa (USD 100) covers multi-entry travel across Uganda, Kenya and Rwanda for 90 days, making a combined itinerary straightforward." },
        { q: "How do I get around Uganda?", a: "Most itineraries use a private vehicle and driver-guide throughout. Fly-in options connect major parks in under an hour where road transfers would otherwise take most of a day." },
        { q: "Is Uganda good for families?", a: "Yes, with some planning around gorilla trekking's 15+ age minimum — see our Family Safaris guide for what works well at different ages." },
      ]}
      related={[
        { name: "Visa Guide", to: "/visa-guide" },
        { name: "Packing Guide", to: "/packing-guide" },
        { name: "Gorilla Permit Guide", to: "/gorilla-permit-guide" },
        { name: "Weather Guide", to: "/weather" },
        { name: "Safari Budget Calculator", to: "/safari-budget-calculator" },
      ]}
    />
  ),
});
