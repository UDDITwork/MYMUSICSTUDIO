import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RichTextEditor from '@/components/RichTextEditor';
import { useBlogAuth } from '@/hooks/useBlogAuth';
import { generateSlug } from '@/utils/blogUtils';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save, Eye } from 'lucide-react';

const NewBlog = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useBlogAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    metaDescription: '',
    content: '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please login to create blog posts.",
        variant: "destructive",
      });
      navigate('/blog');
    }
  }, [isAuthenticated, navigate, toast]);

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

  const saveDraft = () => {
    // Save to localStorage as draft
    const draft = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('blog_draft', JSON.stringify(draft));
    toast({
      title: "Draft Saved",
      description: "Your blog post has been saved as a draft.",
    });
  };

  const loadDraft = () => {
    const saved = localStorage.getItem('blog_draft');
    if (saved) {
      try {
        const draft = JSON.parse(saved);
        setFormData({
          title: draft.title || '',
          metaDescription: draft.metaDescription || '',
          content: draft.content || ''
        });
        toast({
          title: "Draft Loaded",
          description: "Your saved draft has been loaded.",
        });
      } catch (error) {
        console.error('Error loading draft:', error);
      }
    }
  };

  useEffect(() => {
    // Check if there's a saved draft
    const saved = localStorage.getItem('blog_draft');
    if (saved) {
      const confirmLoad = window.confirm('Found a saved draft. Would you like to load it?');
      if (confirmLoad) {
        loadDraft();
      }
    }
  }, []);

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
        <main className="container mx-auto px-4 py-8 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
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
              
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  {showPreview ? 'Edit' : 'Preview'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={saveDraft}
                  className="flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Draft
                </Button>
              </div>
            </div>

            {showPreview ? (
              // Preview Mode
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {formData.title || 'Blog Title'}
                      </h1>
                      <p className="text-gray-600 text-lg">
                        {formData.metaDescription || 'Meta description will appear here'}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mt-4">
                        <span>By Kamlesh Sagar</span>
                        <span className="mx-2">•</span>
                        <span>{new Date().toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ 
                          __html: formData.content || '<p>Blog content will appear here...</p>' 
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Edit Mode
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
                        className="text-lg"
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
                      <RichTextEditor
                        value={formData.content}
                        onChange={(value) => handleInputChange('content', value)}
                        placeholder="Write your blog content here..."
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

                    <div className="flex gap-4 pt-4 border-t">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
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
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewBlog;
