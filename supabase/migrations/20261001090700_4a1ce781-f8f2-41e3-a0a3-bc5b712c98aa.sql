CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  first_name text NOT NULL DEFAULT '',
  source text NOT NULL DEFAULT 'website',
  source_path text NOT NULL DEFAULT '',
  consent boolean NOT NULL DEFAULT false,
  consent_text text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, DELETE ON public.newsletter_subscribers TO authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Editors can view subscribers" ON public.newsletter_subscribers FOR SELECT TO authenticated
USING (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'staff'));
CREATE POLICY "Admins can delete subscribers" ON public.newsletter_subscribers FOR DELETE TO authenticated
USING (public.has_role(auth.uid(),'admin'));