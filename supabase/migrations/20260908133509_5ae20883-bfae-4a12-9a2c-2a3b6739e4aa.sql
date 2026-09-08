CREATE POLICY "Editors can upload site images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'site-images' AND (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'staff')));

CREATE POLICY "Editors can update site images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'site-images' AND (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'staff')))
WITH CHECK (bucket_id = 'site-images' AND (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'staff')));

CREATE POLICY "Editors can read site images"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'site-images' AND (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'staff')));

CREATE POLICY "Admins can delete site images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'site-images' AND public.has_role(auth.uid(),'admin'));