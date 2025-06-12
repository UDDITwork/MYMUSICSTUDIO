import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import BlogAuth from './BlogAuth';
import { useBlogAuth } from '@/hooks/useBlogAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBlogAuth, setShowBlogAuth] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useBlogAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleBlogAuthSuccess = () => {
    // This will be handled by the Blog page component
    setShowBlogAuth(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Courses', 
      path: '/courses',
      children: [
        { name: 'All Courses', path: '/courses' },
        { name: 'Western Singing', path: '/courses/western-singing' },
        { name: 'Bollywood Singing', path: '/courses/bollywood-singing' },
        { name: 'Trinity Certification', path: '/courses/trinity-certification' }
      ]
    },
    { 
      name: 'Blog', 
      path: '/blog',
      children: [
        { name: 'All Posts', path: '/blog' },
        { name: 'Add New Blog', action: 'add-blog' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  const handleAddBlog = () => {
    if (isAuthenticated) {
      // Navigate to new blog page
      window.location.href = '/blog/new';
    } else {
      // Show authentication modal
      setShowBlogAuth(true);
    }
  };

  const handleMenuItemClick = (item: any) => {
    if (item.action === 'add-blog') {
      handleAddBlog();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <picture>
                <source 
                  srcSet="/logo.PNG"
                  type="image/png"
                />
                <img 
                  src="/logo.PNG" 
                  alt="My Music Studio - Online Music Classes Logo" 
                  className="h-10 w-10 rounded-full object-cover"
                  width="40"
                  height="40"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </picture>
              <span className="text-xl font-playfair font-bold">
                <span className="text-music-dark">My</span>
                <span className="text-gray-600">Music</span>
                <span className="text-music-accent">Studio</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="flex items-center gap-1 text-music-dark hover:text-music-primary"
                        >
                          {item.name}
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-48">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.name} asChild>
                            {child.action ? (
                              <button
                                onClick={() => handleMenuItemClick(child)}
                                className="w-full text-left cursor-pointer"
                              >
                                {child.name}
                                {child.action === 'add-blog' && !isAuthenticated && (
                                  <span className="text-xs text-gray-500 ml-2">(Login Required)</span>
                                )}
                              </button>
                            ) : (
                              <Link to={child.path} className="cursor-pointer">
                                {child.name}
                              </Link>
                            )}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-music-dark hover:text-music-primary transition-colors ${
                        location.pathname === item.path ? 'text-music-primary font-semibold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <a 
                href="https://calendly.com/kamleshsagar1/music-lessons" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-music-accent hover:bg-music-accent/90 text-white">
                  Book Demo Class
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="font-medium text-music-dark">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.children.map((child) => (
                            <div key={child.name}>
                              {child.action ? (
                                <button
                                  onClick={() => handleMenuItemClick(child)}
                                  className="block text-music-dark/70 hover:text-music-primary transition-colors text-left"
                                >
                                  {child.name}
                                  {child.action === 'add-blog' && !isAuthenticated && (
                                    <span className="text-xs text-gray-500 ml-2">(Login Required)</span>
                                  )}
                                </button>
                              ) : (
                                <Link
                                  to={child.path}
                                  className="block text-music-dark/70 hover:text-music-primary transition-colors"
                                >
                                  {child.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block text-music-dark hover:text-music-primary transition-colors ${
                          location.pathname === item.path ? 'text-music-primary font-semibold' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <a 
                  href="https://calendly.com/kamleshsagar1/music-lessons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button className="w-full bg-music-accent hover:bg-music-accent/90 text-white">
                    Book Demo Class
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Blog Authentication Modal */}
      <BlogAuth 
        isOpen={showBlogAuth}
        onClose={() => setShowBlogAuth(false)}
        onAuthenticated={handleBlogAuthSuccess}
      />
    </>
  );
};

export default Navbar;
