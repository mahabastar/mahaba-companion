import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { buildPageMeta } from "@/lib/site-config";

const SECTIONS: LegalSection[] = [
  {
    title: "About these terms",
    paragraphs: [
      "These terms apply to your use of www.biikuyatrailsuganda.com and to trips and services arranged by Biikuya Trails Uganda (\"we\", \"us\"), a registered trading name of Biikuya Afric Company Limited. By using the website or booking with us, you agree to them. If your written quote or booking confirmation says something different, that document takes priority for your trip.",
    ],
  },
  {
    title: "What we do",
    paragraphs: [
      "We design and arrange guided safaris and adventure trips in Uganda. Some parts of a trip are provided by third parties, such as lodges, transport providers and the Uganda Wildlife Authority (UWA), which issues gorilla and chimpanzee trekking permits.",
    ],
  },
  {
    title: "Enquiries, quotes and bookings",
    bullets: [
      "Information and prices on the website are a guide, not an offer.",
      "An enquiry or quote request does not create a booking, and neither does booking an appointment to talk to us: an appointment only reserves a time for a conversation.",
      "A booking is confirmed only when we confirm it in writing and receive any payment we have asked for.",
      "Quotes are valid for the period stated in them, and prices can change with supplier rates, permit fees and availability.",
    ],
  },
  {
    title: "Payments, changes and cancellations",
    paragraphs: [
      "Payment amounts, deadlines and cancellation terms are set out in your written quote or booking confirmation. Permits, lodges and other suppliers have their own rules on changes and refunds. We will explain the ones that apply to your trip before you pay.",
    ],
  },
  {
    title: "Permits and park rules",
    paragraphs: [
      "Gorilla trekking, chimpanzee tracking and other permitted activities are subject to UWA rules and availability, including age limits and health requirements. Rangers and guides may change, delay or refuse an activity where they judge it necessary for safety or for the welfare of the wildlife.",
    ],
  },
  {
    title: "Your responsibilities",
    bullets: [
      "Hold a valid passport, the visa you need for Uganda, and any required health certificates, such as proof of yellow fever vaccination.",
      "Arrange travel insurance that covers medical treatment and evacuation, and cancellation where you want it.",
      "Follow the instructions of your guides and rangers, especially around wildlife.",
      "Give us accurate information about your group, including ages and any needs we should plan for.",
    ],
  },
  {
    title: "Government travel advice and insurance",
    paragraphs: [
      "Governments publish travel advice for Uganda, and it can change at short notice. It is your responsibility to read the advice issued by your own government before you book and again before you travel, and to make sure your travel insurance is valid for your itinerary. Some insurers will not cover travel against official advice. We will tell you directly if anything on your itinerary is affected by current advice we know of, and our Safety Guide summarises the main points.",
    ],
  },
  {
    title: "Travel risks",
    paragraphs: [
      "Safaris take place in wild, remote and sometimes rugged places. Wildlife, terrain, weather and distance from medical care all carry risk. We brief you on safety and choose experienced guides, but we cannot remove every risk. To the extent the law allows, you take part in activities at your own risk.",
    ],
  },
  {
    title: "Changes to your itinerary",
    paragraphs: [
      "Weather, road or park closures, safety concerns and supplier availability can force changes. If that happens we will offer a comparable alternative wherever we reasonably can.",
    ],
  },
  {
    title: "Website content",
    paragraphs: [
      "We work to keep the website accurate, but permit prices, entry rules and travel requirements change. Please confirm the details with us before you rely on them. The text, photographs, logo and design on this site belong to us or our licensors and may not be copied or reused without our permission.",
    ],
  },
  {
    title: "Third-party links and services",
    paragraphs: [
      "The site links to and uses services run by others, such as WhatsApp and Google. We are not responsible for their content or practices, and their own terms apply when you use them.",
    ],
  },
  {
    title: "Our liability",
    paragraphs: [
      "To the extent the law allows, we are not responsible for loss or delay caused by events outside our reasonable control, or for the acts and omissions of independent suppliers. Nothing in these terms limits any liability that cannot legally be limited.",
    ],
  },
  {
    title: "Privacy",
    paragraphs: ["How we handle your personal information is explained in our Privacy Policy."],
  },
  {
    title: "Governing law",
    paragraphs: ["These terms are governed by the laws of Uganda, and the courts of Uganda have jurisdiction over any dispute."],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The date at the top shows the latest version. Trips already confirmed stay covered by the terms in your booking confirmation.",
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    ...buildPageMeta({
      title: "Terms & Conditions: Uganda Safari Bookings | Biikuya Trails",
      description:
        "The terms that apply to enquiries, quotes, bookings and trips arranged by Biikuya Trails Uganda, including permits, payments and travel responsibilities.",
      path: "/terms",
    }),
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="20 September 2026"
      intro="The ground rules for using our website and booking a trip with us, in plain language."
      sections={SECTIONS}
      related={{ label: "Privacy Policy", to: "/privacy" }}
    />
  ),
});
