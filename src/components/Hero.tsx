
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Music, Headphones, MusicNotes, Users } from './Icons';

const Hero = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-from-bottom, .reveal-from-left, .reveal-from-right');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-music-light via-white to-music-light overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg')] bg-cover bg-center opacity-20"></div>
      
      {/* Floating Music Notes Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MusicNotes />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold reveal-from-bottom hero-text-gradient">
              Online Music Classes That Inspire
            </h1>
            <p className="text-lg md:text-xl text-music-dark/80 max-w-xl reveal-from-bottom delay-200">
              Discover your musical potential with professional online classes in piano, keyboard, Bollywood singing, and Western vocals — for beginners and advanced learners alike.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal-from-bottom delay-400">
              <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                <Button className="bg-music-primary hover:bg-music-primary/90 text-white px-8 py-4 text-lg min-h-[48px] min-w-[160px]">
                  Book Free Demo Class
                </Button>
              </a>
              <Link to="/courses">
                <Button variant="outline" className="border-music-primary text-music-primary hover:bg-music-primary/10 px-8 py-4 text-lg min-h-[48px] min-w-[140px]">
                  Explore Courses
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 reveal-from-bottom delay-600">
              <div className="flex items-center gap-2">
                <div className="bg-music-primary/10 p-2 rounded-full">
                  <Headphones className="h-5 w-5 text-music-primary" />
                </div>
                <span className="font-medium">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-music-primary/10 p-2 rounded-full">
                  <Music className="h-5 w-5 text-music-primary" />
                </div>
                <span className="font-medium">1:1 Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-music-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-music-primary" />
                </div>
                <span className="font-medium">Global Students</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-10 reveal-from-right">
            <div className="relative rounded-lg overflow-hidden shadow-xl border-8 border-white">
              <div className="aspect-w-16 aspect-h-9">
                <picture>
                  <source 
                    srcSet="https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg" 
                    type="image/jpeg"
                  />
                  <img 
                    src="https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg" 
                    alt="Students playing instruments in professional music class - Learn piano, keyboard and singing online" 
                    className="w-full h-full object-cover"
                    width="800"
                    height="600"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-xl font-bold">Professional Training</h2>
                  <p className="text-sm opacity-80">Trinity, ABRSM & Rock School certification courses</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-music-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-music-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
