import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { buildPageMeta } from "@/lib/site-config";

const SECTIONS: LegalSection[] = [
  {
    title: "Who we are",
    paragraphs: [
      "Biikuya Trails Uganda (\"we\", \"us\") is a registered trading name of Biikuya Afric Company Limited, a Uganda-based safari and adventure tourism company. We operate www.biikuyatrailsuganda.com and are responsible for the personal information described in this policy.",
    ],
  },
  {
    title: "What we collect",
    paragraphs: ["We only collect what we need to answer you and plan your trip. Depending on how you use the site, that can include:"],
    bullets: [
      "Enquiry and quote details: your name, email address, phone or WhatsApp number (optional), number of travellers, travel dates, your message, and the page you sent the enquiry from.",
      "Messages you send us by email, phone or WhatsApp, and anything you choose to include in them.",
      "Trip-planning input: the preferences you type into tools such as the AI Trip Planner, Build My Safari and the Safari Budget Calculator.",
      "Appointment bookings: if you book a time to talk through our online scheduler, your name, contact details and chosen time are collected by the scheduling service, Picktime.",
      "Sign-in details, if you create or use a traveller account.",
      "Usage information: pages viewed, approximate location, device and browser type, collected through Google Analytics.",
    ],
  },
  {
    title: "How we use your information",
    bullets: [
      "To reply to your enquiry and prepare quotes and itineraries.",
      "To arrange your trip with lodges, transport providers and the Uganda Wildlife Authority, including gorilla and chimpanzee permits.",
      "To keep in touch about your booking and travel arrangements.",
      "To understand how people use the website and to improve it.",
      "To keep the website secure and to meet our legal obligations.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    paragraphs: [
      "We use Google Analytics, which sets cookies and collects usage information so we can see which pages are helpful. If you use the language switcher, Google Translate sets a language cookie in your browser. Trips you save are stored in your own browser (local storage) and are not sent to us.",
      "You can block or delete cookies in your browser settings, and you can opt out of Google Analytics using Google's browser add-on. The site will still work, though some features such as saved trips and language choice may not be remembered.",
    ],
  },
  {
    title: "The AI Trip Planner",
    paragraphs: [
      "When you use the AI Trip Planner, the text you type is sent to an AI service to generate suggestions. Please do not enter passport numbers, payment card details, health information or other sensitive data into it.",
    ],
  },
  {
    title: "Who we share information with",
    paragraphs: ["We do not sell your personal information. We share it only where needed to run the website or deliver your trip:"],
    bullets: [
      "Travel suppliers: lodges, drivers, guides and the Uganda Wildlife Authority, so they can host you and issue permits.",
      "Service providers: website hosting and database services, Google Analytics, the AI service used by the trip planner, and Picktime, which runs our appointment scheduler under its own privacy terms.",
      "Messaging platforms: if you contact us on WhatsApp, your messages are also handled under WhatsApp's own privacy terms.",
      "Authorities, where the law requires it.",
    ],
  },
  {
    title: "Transfers outside Uganda",
    paragraphs: [
      "Some of our service providers process data in other countries. Where that happens we take reasonable steps to protect your information, consistent with Uganda's Data Protection and Privacy Act, 2019.",
    ],
  },
  {
    title: "How long we keep it",
    paragraphs: [
      "We keep enquiry and booking information for as long as we need it to serve you, to keep business and legal records, and to handle any follow-up questions. When it is no longer needed, we delete it or anonymise it.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "Depending on where you live, and including under Uganda's Data Protection and Privacy Act, 2019, you can ask to see the personal information we hold about you, have it corrected or deleted, object to how we use it, or withdraw consent you have given. Email us and we will respond as soon as we reasonably can.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect your information, and we limit access to the people who need it. No online service can be completely secure, so please share only what is necessary.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "This website is not aimed at children. Family trips are arranged with the adults travelling, and we ask that enquiries come from a parent or guardian.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. The date at the top shows when it last changed. Continuing to use the site after an update means you accept the revised policy.",
    ],
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    ...buildPageMeta({
      title: "Privacy Policy: How We Handle Your Data | Biikuya Trails",
      description:
        "How Biikuya Trails Uganda collects, uses and protects your personal information when you enquire, plan a trip or browse our website.",
      path: "/privacy",
    }),
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="20 September 2026"
      intro="What we collect when you enquire or browse, why we collect it, who sees it, and the choices you have."
      sections={SECTIONS}
      related={{ label: "Terms & Conditions", to: "/terms" }}
    />
  ),
});
