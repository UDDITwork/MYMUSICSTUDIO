
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useBlogAuth } from '@/hooks/useBlogAuth';
import { generateSlug } from '@/utils/blogUtils';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

const NewBlog = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useBlogAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    metaDescription: '',
    content: '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/blog');
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim() || !formData.metaDescription.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const slug = generateSlug(formData.title);
      
      // Check if slug already exists
      const { data: existingBlog } = await supabase
        .from('blogs')
        .select('id')
        .eq('slug', slug)
        .single();

      if (existingBlog) {
        toast({
          title: "Error",
          description: "A blog with this title already exists. Please use a different title.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const { data, error } = await supabase
        .from('blogs')
        .insert([{
          title: formData.title.trim(),
          content: formData.content.trim(),
          meta_description: formData.metaDescription.trim(),
          slug: slug,
          author: 'Kamlesh Sagar'
        }])
        .select()
        .single();

      if (error) {
        console.error('Error creating blog:', error);
        toast({
          title: "Error",
          description: "Failed to publish blog post. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Blog post published successfully!",
        });
        navigate(`/blog/${data.slug}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <SEO 
        title="Create New Blog Post | My Music Studio"
        description="Create and publish a new blog post about music education."
        noindex={true}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
              <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Write Your Blog Post</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Blog Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Enter an engaging blog title"
                      required
                    />
                    {formData.title && (
                      <p className="text-sm text-gray-500">
                        URL will be: /blog/{generateSlug(formData.title)}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaDescription">Meta Description *</Label>
                    <Input
                      id="metaDescription"
                      value={formData.metaDescription}
                      onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                      placeholder="Brief description for search engines (150-160 characters)"
                      maxLength={160}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      {formData.metaDescription.length}/160 characters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Blog Content *</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                      placeholder="Write your blog content here..."
                      rows={15}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Author</Label>
                    <Input
                      value="Kamlesh Sagar"
                      disabled
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      {isSubmitting ? 'Publishing...' : 'Publish Blog Post'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => navigate('/blog')}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewBlog;
