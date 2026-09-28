import { createFileRoute, redirect } from "@tanstack/react-router";

// The Kibale page was merged into the chimpanzee trekking page so the two no
// longer compete for the same searches. This route keeps the old URL working
// and sends a permanent (301) redirect to the merged page.
export const Route = createFileRoute("/destinations/kibale-forest")({
  beforeLoad: () => {
    throw redirect({ to: "/destinations/chimpanzee-trekking", statusCode: 301 });
  },
});
