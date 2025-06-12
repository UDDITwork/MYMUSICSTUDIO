
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BlogAuth from '@/components/BlogAuth';
import { useBlogAuth } from '@/hooks/useBlogAuth';
import { formatDate } from '@/utils/blogUtils';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  meta_description: string;
  created_at: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useBlogAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blogs:', error);
        toast({
          title: "Error",
          description: "Failed to load blog posts.",
          variant: "destructive",
        });
      } else {
        setBlogs(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddBlog = () => {
    console.log('Add blog clicked, isAuthenticated:', isAuthenticated);
    
    if (isAuthenticated) {
      console.log('User is authenticated, navigating to /blog/new');
      navigate('/blog/new');
    } else {
      console.log('User not authenticated, showing auth modal');
      setShowAuth(true);
    }
  };

  const handleAuthenticated = () => {
    console.log('Authentication successful, navigating to /blog/new');
    setIsAuthenticated(true);
    navigate('/blog/new');
  };

  return (
    <>
      <SEO 
        title="Blog | My Music Studio - Music Education Insights & Tips"
        description="Discover expert insights on music education, piano lessons, singing techniques, and online music learning. Read our latest blog posts on music theory, practice tips, and student success stories."
        keywords="music education blog, piano lessons tips, singing techniques, music theory, online music learning, music practice tips, music student success"
        url="/blog"
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Music Education Blog</h1>
                <p className="text-lg text-gray-600">
                  Insights, tips, and stories from the world of online music education
                </p>
              </div>
              <Button onClick={handleAddBlog} className="bg-purple-600 hover:bg-purple-700">
                Add Blog
              </Button>
            </div>

            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Loading blog posts...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No blog posts yet. Be the first to create one!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {blogs.map((blog) => (
                  <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        <Link 
                          to={`/blog/${blog.slug}`}
                          className="text-gray-900 hover:text-purple-600 transition-colors"
                        >
                          {blog.title}
                        </Link>
                      </CardTitle>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>By {blog.author}</span>
                        <span>•</span>
                        <span>{formatDate(blog.created_at)}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{blog.meta_description}</p>
                      <Link 
                        to={`/blog/${blog.slug}`}
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Read more →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>

      <BlogAuth 
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onAuthenticated={handleAuthenticated}
      />
    </>
  );
};

export default Blog;
