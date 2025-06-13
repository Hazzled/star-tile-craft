
-- Drop the existing contact submissions table and all related policies
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;
DROP TABLE IF EXISTS public.contact_submissions;
