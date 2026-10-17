import { createFileRoute, redirect } from "@tanstack/react-router";

// Fixes the 404 on /is-uganda-safe (linked from the footer "Safety" link and
// the homepage planning hub). Sends visitors and search engines to /faqs,
// which is where the Ebola notice already points as the "safety guide".
// Replace this with a real Safety page later and delete the redirect.
export const Route = createFileRoute("/is-uganda-safe")({
  beforeLoad: () => {
    throw redirect({ to: "/faqs", statusCode: 301 });
  },
});
