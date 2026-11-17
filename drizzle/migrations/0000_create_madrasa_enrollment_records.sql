CREATE TABLE public.student_registrations (
  id uuid PRIMARY KEY,
  registration_code text NOT NULL UNIQUE,
  full_name text NOT NULL CHECK (char_length(btrim(full_name)) BETWEEN 2 AND 120),
  mobile_phone text NOT NULL CHECK (char_length(btrim(mobile_phone)) BETWEEN 7 AND 24),
  whatsapp_phone text NOT NULL CHECK (char_length(btrim(whatsapp_phone)) BETWEEN 7 AND 24),
  age smallint NOT NULL CHECK (age BETWEEN 1 AND 120),
  address text NOT NULL CHECK (char_length(btrim(address)) BETWEEN 2 AND 300),
  district text NOT NULL CHECK (char_length(btrim(district)) BETWEEN 2 AND 100),
  preferred_class_time text NOT NULL CHECK (preferred_class_time IN ('night_9_10', 'afternoon_3_4')),
  quran_reading text NOT NULL CHECK (quran_reading IN ('yes', 'a_little', 'no')),
  discovery_source text NOT NULL CHECK (char_length(btrim(discovery_source)) BETWEEN 1 AND 200),
  motivation text NOT NULL CHECK (char_length(btrim(motivation)) BETWEEN 1 AND 800),
  course_fee integer NOT NULL DEFAULT 2500 CHECK (course_fee = 2500),
  payment_status text NOT NULL DEFAULT 'awaiting_payment' CHECK (payment_status IN ('awaiting_payment', 'under_review', 'paid')),
  enrollment_status text NOT NULL DEFAULT 'pending' CHECK (enrollment_status IN ('pending', 'confirmed')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.student_registrations TO anon, authenticated;
GRANT ALL ON public.student_registrations TO service_role;
ALTER TABLE public.student_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit student registrations"
  ON public.student_registrations FOR INSERT TO anon, authenticated
  WITH CHECK (
    course_fee = 2500
    AND payment_status = 'awaiting_payment'
    AND enrollment_status = 'pending'
  );

CREATE TABLE public.payment_submissions (
  id uuid PRIMARY KEY,
  registration_id uuid NOT NULL REFERENCES public.student_registrations(id) ON DELETE CASCADE,
  payment_method text NOT NULL CHECK (payment_method IN ('bkash', 'nagad')),
  sender_mobile text NOT NULL CHECK (char_length(btrim(sender_mobile)) BETWEEN 7 AND 24),
  transaction_id text NOT NULL CHECK (char_length(btrim(transaction_id)) BETWEEN 4 AND 64),
  amount integer NOT NULL DEFAULT 2500 CHECK (amount = 2500),
  payment_status text NOT NULL DEFAULT 'pending' CHECK (payment_status = 'pending'),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.payment_submissions TO anon, authenticated;
GRANT ALL ON public.payment_submissions TO service_role;
ALTER TABLE public.payment_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit payment references for review"
  ON public.payment_submissions FOR INSERT TO anon, authenticated
  WITH CHECK (amount = 2500 AND payment_status = 'pending');

CREATE FUNCTION public.mark_registration_payment_under_review()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.student_registrations
  SET payment_status = 'under_review'
  WHERE id = NEW.registration_id;
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.mark_registration_payment_under_review() FROM PUBLIC, anon, authenticated;
CREATE TRIGGER payment_submission_marks_registration_under_review
  AFTER INSERT ON public.payment_submissions
  FOR EACH ROW EXECUTE FUNCTION public.mark_registration_payment_under_review();