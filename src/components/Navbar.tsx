
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo.PNG" 
                alt="My Music Studio Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold text-purple-600">My Music Studio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                to="/courses" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <a 
                href="https://calendly.com/kamleshsagar1/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Book Demo Class
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                to="/courses" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors"
              >
                Courses
              </Link>
              <Link 
                to="/blog" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors"
              >
                Contact
              </Link>
              <a 
                href="https://calendly.com/kamleshsagar1/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-purple-600 text-white block px-3 py-2 text-base font-medium hover:bg-purple-700 transition-colors rounded-md mx-3 mt-2"
              >
                Book Demo Class
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
