-- Admin access is controlled by Supabase Auth app_metadata.role = 'admin'.
-- Set this claim only from a trusted server / Supabase dashboard, never from the browser.
GRANT SELECT, UPDATE ON public.student_registrations TO authenticated;
GRANT SELECT, UPDATE ON public.payment_submissions TO authenticated;

CREATE POLICY "Admins can read student registrations"
  ON public.student_registrations FOR SELECT TO authenticated
  USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

CREATE POLICY "Admins can update student registrations"
  ON public.student_registrations FOR UPDATE TO authenticated
  USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  WITH CHECK ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

CREATE POLICY "Admins can read payment submissions"
  ON public.payment_submissions FOR SELECT TO authenticated
  USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

CREATE POLICY "Admins can update payment submissions"
  ON public.payment_submissions FOR UPDATE TO authenticated
  USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  WITH CHECK ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
