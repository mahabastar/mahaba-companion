function Newsletter() {
  const send = useServerFn(subscribeNewsletter);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const subscribed = useSubscribed();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const result = await send({
        data: {
          firstName,
          email,
          website,
          source: "newsletter_section",
          sourcePath: "/",
        },
      });

      // Only count a genuine new newsletter signup as a conversion.
      if (!result.alreadySubscribed && !website) {
        trackEvent("newsletter_signup", {
          placement: "homepage_newsletter",
          page_path:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/",
        });
      }

      markSubscribed();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16"
          style={{ background: "var(--gradient-gold)" }}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="eyebrow !text-charcoal/70">Newsletter</div>

              <h2 className="mt-4 font-display text-4xl text-charcoal text-balance md:text-5xl">
                Letters from the Pearl of Africa.
              </h2>

              <p className="mt-4 max-w-md text-charcoal/75">
                Join the Biikuya Trails Uganda travel newsletter and get your
                FREE Uganda Travel Guide — plus field notes from the trail,
                gorilla family news, honest advice on when to travel, and the
                occasional photograph we couldn't keep to ourselves. One
                thoughtful letter a month, and nothing else.
              </p>
            </div>

            {status === "sent" || subscribed ? (
              <div className="rounded-2xl bg-ivory/70 p-6">
                <p className="font-display text-lg text-charcoal">
                  Thank you! Your Uganda Travel Guide is ready.
                </p>

                <a
                  href={GUIDE_URL}
                  download={GUIDE_FILENAME}
                  onClick={() =>
                    trackEvent("lead_magnet_pdf_download", {
                      placement: "homepage_newsletter",
                      page_path:
                        typeof window !== "undefined"
                          ? window.location.pathname
                          : "/",
                    })
                  }
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-medium text-ivory transition-transform hover:scale-105"
                >
                  Download Your Free Guide{" "}
                  <span aria-hidden>&darr;</span>
                </a>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-3"
                noValidate
              >
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="nl-website">
                    Leave this field empty
                  </label>

                  <input
                    id="nl-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <label
                    htmlFor="nl-first-name"
                    className="sr-only"
                  >
                    First name
                  </label>

                  <input
                    id="nl-first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="flex-1 rounded-full border border-charcoal/20 bg-ivory px-6 py-4 text-sm text-charcoal outline-none focus:border-charcoal sm:max-w-[42%]"
                  />

                  <label
                    htmlFor="nl-email"
                    className="sr-only"
                  >
                    Email address
                  </label>

                  <input
                    id="nl-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-full border border-charcoal/20 bg-ivory px-6 py-4 text-sm text-charcoal outline-none focus:border-charcoal"
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-full bg-charcoal px-7 py-4 text-sm font-medium text-ivory transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "sending"
                      ? "Sending…"
                      : "Get the Free Guide"}
                  </button>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="text-sm text-red-700"
                  >
                    {error}
                  </p>
                )}

                <p className="text-xs leading-relaxed text-charcoal/60">
                  {CONSENT_TEXT}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
          
                
