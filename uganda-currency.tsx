import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { SITE_CONFIG, buildPageMeta } from "@/lib/site-config";

const SECTIONS: LegalSection[] = [
  {
    title: "Uganda's currency",
    paragraphs: ["Uganda's currency is the Ugandan shilling (UGX). During 2026 the US dollar has traded at roughly UGX 3,500 to 3,950. Rates move daily, so check the live rate before you travel and treat any figure here as a guide."],
  },
  {
    title: "Bring US dollars in good condition",
    paragraphs: ["US dollars are the most useful foreign currency to carry. Banks and forex bureaus will not exchange dollar notes printed before 2009, or notes that are torn, worn or marked, so bring crisp, recent notes."],
    bullets: ["Larger notes ($50 and $100) get better exchange rates than smaller ones.", "Bring a stack of small, clean notes ($1, $5 and $10) for tips.", "Some lodges and tours price in dollars, but everyday purchases are in shillings."],
  },
  {
    title: "Changing money",
    paragraphs: ["Banks and forex bureaus in Kampala and Entebbe give the best rates, and rates are usually worse in remote areas. Compare a couple of counters, count your money before you leave the window, and avoid changing money on the street."],
  },
  {
    title: "ATMs and cards",
    paragraphs: ["ATMs are available in Kampala, Entebbe and larger towns, but the US State Department notes that many only work for customers of a specific Ugandan bank, so a foreign card may fail. Card payments are common in Kampala and at larger lodges, and may carry a fee, but they are less reliable in remote parks. Carry enough cash as a backup.", "Use ATMs inside a bank during the day, and be extra careful when withdrawing cash."],
  },
  {
    title: "Mobile money",
    paragraphs: ["Many Ugandans pay for everyday things with mobile money. As a visitor you will mostly use cash, and your guide can help with small purchases."],
  },
  {
    title: "Tipping",
    paragraphs: ["Tipping guides, rangers and porters is expected and is a meaningful part of local income. US dollars in small, clean notes are widely accepted for tips. We give guidance on typical amounts with your itinerary."],
  },
  {
    title: "What you do not need to carry",
    paragraphs: ["Gorilla and chimpanzee permits are paid through us when you book, so you do not need cash for them. Keep your cash for tips, drinks, souvenirs and the occasional extra."],
  },
  {
    title: "Keeping your money safe",
    bullets: ["Do not carry more cash than you need for the day.", "Use your lodge's safe for spare cash and your passport.", "Split your cash between bags.", "Keep notes out of sight when paying."],
  },
];

const FAQS = [
  { q: "What currency is used in Uganda?", a: "The Ugandan shilling (UGX). US dollars are widely accepted for tips and some tourist services, but everyday purchases are in shillings." },
  { q: "Which US dollar notes are accepted?", a: "Notes printed in 2009 or later, in good condition. Older notes, and notes that are torn, worn or marked, are refused by banks and forex bureaus. Larger notes get better rates than small ones." },
  { q: "Can I use credit cards in Uganda?", a: "Cards are common in Kampala and at larger lodges, and may carry a fee. They are less reliable in remote parks, so carry cash as a backup." },
  { q: "Will foreign cards work in Ugandan ATMs?", a: "Sometimes. Many ATMs only work for customers of a specific bank, so do not rely on a single card or a single machine." },
  { q: "How much cash should I bring?", a: "Enough for tips, drinks, souvenirs and small extras. Permits and your package are arranged through us, so you do not need cash for them." },
];

const SOURCES = [
  { label: "US State Department: Uganda travel guidance", href: "https://travel.state.gov/en/international-travel/travel-advisories/uganda.html" },
];

export const Route = createFileRoute("/uganda-currency")({
  head: () => ({
    ...buildPageMeta({
      title: "Uganda Currency: Shillings, Dollars & ATMs | Biikuya Trails",
      description:
        "Uganda's currency explained: the Ugandan shilling, which US dollar notes to bring, changing money, ATMs, cards, mobile money and tipping.",
      path: "/uganda-currency",
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
            { "@type": "ListItem", position: 2, name: "Uganda Currency Guide", item: `${SITE_CONFIG.url}/uganda-currency` },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Money Guide"
      title="Uganda Currency Guide"
      updated="20 September 2026"
      updatedLabel="Last reviewed"
      intro="What money to bring to Uganda, how to change it, where cards and ATMs work, and how tipping works on safari."
      sections={SECTIONS}
      numbered={false}
      faqs={FAQS}
      sources={SOURCES}
      related={{ label: "Packing Guide", to: "/packing-guide" }}
    />
  ),
});
