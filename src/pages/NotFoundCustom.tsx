
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Music, Home, BookOpen, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundCustom = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - My Music Studio</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our online music courses including piano, singing, and Trinity certification preparation." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://mymusicstudio.in/404" />
      </Helmet>

      <main className="min-h-screen bg-white">
        <Navbar />
        
        <section className="pt-32 pb-20 bg-gradient-to-br from-music-light to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Music className="w-24 h-24 text-music-accent mx-auto mb-6" />
                <h1 className="text-6xl font-bold mb-4 text-music-dark">404</h1>
                <h2 className="text-3xl font-bold mb-4 text-music-dark">Page Not Found</h2>
                <p className="text-xl text-music-dark/70 mb-8 max-w-2xl mx-auto">
                  The page you're looking for doesn't exist. But don't worry, we have plenty of amazing music courses waiting for you!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Link to="/courses">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-music-light">
                    <BookOpen className="w-12 h-12 text-music-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Explore Courses</h3>
                    <p className="text-music-dark/70 text-sm">Discover our piano, singing, and certification courses</p>
                  </div>
                </Link>

                <Link to="/">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-music-light">
                    <Home className="w-12 h-12 text-music-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Go Home</h3>
                    <p className="text-music-dark/70 text-sm">Return to our homepage and start your musical journey</p>
                  </div>
                </Link>

                <Link to="/contact">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-music-light">
                    <Phone className="w-12 h-12 text-music-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p className="text-music-dark/70 text-sm">Get in touch if you need help finding something</p>
                  </div>
                </Link>
              </div>

              <div className="space-y-4">
                <Link to="/">
                  <Button className="bg-music-accent hover:bg-music-accent/90 text-white text-lg px-8 py-3 mr-4">
                    Back to Home
                  </Button>
                </Link>
                <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="text-lg px-8 py-3">
                    Book Free Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default NotFoundCustom;
