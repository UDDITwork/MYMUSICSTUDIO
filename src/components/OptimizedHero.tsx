
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Music, Calendar } from 'lucide-react';

const OptimizedHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload critical image
  useEffect(() => {
    const img = new Image();
    img.src = 'https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-critical">
      {/* Optimized Background Image with WebP fallback */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            srcSet="https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg" 
            type="image/jpeg" 
          />
          <img 
            src="https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg"
            alt="Music studio background"
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-music-primary/80 to-music-secondary/60"></div>
      </div>

      {/* Floating Music Notes - Optimized */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-4xl note-animation"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              '--delay': i,
              transform: 'translateZ(0)', // Force GPU acceleration
            } as React.CSSProperties}
          >
            ♪
          </div>
        ))}
      </div>

      {/* Hero Content - Critical CSS Applied */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 reveal-from-bottom hero-text-gradient">
            Learn Music Online with{' '}
            <span className="text-music-accent">Expert Teachers</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 reveal-from-bottom delay-200 max-w-3xl mx-auto">
            Master Piano, Western Singing & Bollywood Vocals from home. 
            Trinity & ABRSM certified courses with 15+ years experienced instructors.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center reveal-from-bottom delay-400">
            <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-music-accent hover:bg-music-accent/90 text-white px-8 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
                aria-label="Book a free demo music lesson"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Demo Class
              </Button>
            </a>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold"
              aria-label="View our music courses"
            >
              <Music className="mr-2 h-5 w-5" />
              View Our Courses
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center reveal-from-bottom delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Students Worldwide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">Trinity</div>
              <div className="text-sm opacity-90">Certified Courses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHero;
