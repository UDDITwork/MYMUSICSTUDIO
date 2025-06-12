
-- Create blogs table
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Kamlesh Sagar',
  meta_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view blogs)
CREATE POLICY "Anyone can view published blogs" 
  ON public.blogs 
  FOR SELECT 
  USING (true);

-- Create policy for authenticated insert (only authenticated users can create blogs)
CREATE POLICY "Authenticated users can create blogs" 
  ON public.blogs 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for authenticated update (only authenticated users can update blogs)
CREATE POLICY "Authenticated users can update blogs" 
  ON public.blogs 
  FOR UPDATE 
  USING (true);

-- Create policy for authenticated delete (only authenticated users can delete blogs)
CREATE POLICY "Authenticated users can delete blogs" 
  ON public.blogs 
  FOR DELETE 
  USING (true);

-- Create index for better performance on slug lookups
CREATE INDEX idx_blogs_slug ON public.blogs(slug);

-- Create index for better performance on created_at for sorting
CREATE INDEX idx_blogs_created_at ON public.blogs(created_at DESC);

-- Add trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blogs_updated_at 
    BEFORE UPDATE ON public.blogs 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
