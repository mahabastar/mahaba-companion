import { useEffect, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { supabase } from "@/integrations/supabase/client";

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-ivory text-charcoal">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}

function Notice({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[560px] px-6 py-24 text-center md:px-10">
        <h1 className="font-display text-3xl text-charcoal">{title}</h1>
        <p className="mt-3 text-sm text-charcoal/60">{body}</p>
      </div>
    </section>
  );
}

export function AdminGate({
  children,
}: {
  children: (ctx: { email: string; signOut: () => Promise<void> }) => ReactNode;
}) {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setAllowed(session === null ? false : null);
      return;
    }
    let cancelled = false;
    (async () => {
      const check = async () => {
        const [admin, staff] = await Promise.all([
          supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" }),
          supabase.rpc("has_role", { _user_id: session.user.id, _role: "staff" }),
        ]);
        return Boolean(admin.data) || Boolean(staff.data);
      };
      let ok = await check();
      if (!ok) {
        const { data: claimed } = await supabase.rpc("claim_admin_role");
        if (claimed) ok = await check();
      }
      if (!cancelled) setAllowed(ok);
    })();
    return () => {
      cancelled = true;
    };
  }, [session]);

  if (session === undefined || (session && allowed === null)) {
    return (
      <Shell>
        <Notice title="Loading…" body="Checking your access to the admin panel." />
      </Shell>
    );
  }

  if (session === null) {
    return (
      <Shell>
        <Notice
          title="Staff sign-in required"
          body="Sign in from the traveler dashboard with your staff email, then return to this page."
        />
      </Shell>
    );
  }

  if (!allowed) {
    return (
      <Shell>
        <Notice
          title="No access"
          body="This panel is limited to Biikuya Trails Uganda staff. Ask an admin to grant your account access."
        />
      </Shell>
    );
  }

  return (
    <Shell>
      {children({
        email: session.user.email ?? "",
        signOut: async () => {
          await supabase.auth.signOut();
          setSession(null);
        },
      })}
    </Shell>
  );
}
