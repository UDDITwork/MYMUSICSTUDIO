
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { formatDate, sanitizeHtml } from '@/utils/blogUtils';
import { ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  meta_description: string;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchBlog(slug);
    }
  }, [slug]);

  const fetchBlog = async (blogSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', blogSlug)
        .single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setBlog(data);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">Loading blog post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <>
        <SEO 
          title="Blog Post Not Found | My Music Studio"
          description="The requested blog post could not be found."
          noindex={true}
        />
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <Link to="/blog">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${blog.title} | My Music Studio Blog`}
        description={blog.meta_description}
        keywords="music education, piano lessons, singing techniques, music theory, online music learning"
        url={`/blog/${blog.slug}`}
        type="article"
        author={blog.author}
        publishedTime={blog.created_at}
      />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <article className="prose prose-lg max-w-none">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
                <div className="flex items-center text-gray-500 space-x-4">
                  <span>By {blog.author}</span>
                  <span>•</span>
                  <time dateTime={blog.created_at}>{formatDate(blog.created_at)}</time>
                </div>
              </header>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: sanitizeHtml(blog.content.replace(/\n/g, '<br>')) 
                }}
              />
            </article>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to start your music journey?
                </h3>
                <p className="text-gray-600 mb-4">
                  Join thousands of students learning piano, singing, and music theory online.
                </p>
                <Link to="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Book a Free Demo Class
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
