
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Music, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <Music className="h-6 w-6 text-music-primary animate-pulse-subtle" />
            <span className="font-playfair">
              <span className="text-music-primary">My</span>
              <span className="text-music-dark">Music</span>
              <span className="text-music-accent">Studio</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-music-dark focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium text-music-dark hover:text-music-accent underline-animation">Home</Link>
            <Link to="/about" className="font-medium text-music-dark hover:text-music-accent underline-animation">About</Link>
            <Link to="/courses" className="font-medium text-music-dark hover:text-music-accent underline-animation">Courses</Link>
            <Link to="/contact" className="font-medium text-music-dark hover:text-music-accent underline-animation">Contact</Link>
            <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
              <Button className="bg-music-primary hover:bg-music-primary/90 text-white">Book Demo Class</Button>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-music-dark hover:text-music-accent px-2 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-music-dark hover:text-music-accent px-2 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/courses" 
              className="font-medium text-music-dark hover:text-music-accent px-2 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-music-dark hover:text-music-accent px-2 py-3 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://calendly.com/kamleshsagar1/music-lessons" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-music-primary hover:bg-music-primary/90 text-white w-full mt-2">
                Book Demo Class
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
