
-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;

-- Create a new policy that truly allows anyone to submit contact forms
CREATE POLICY "Allow anonymous contact form submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);
