
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { WaveAnimation } from './Icons';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
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
    <section className="py-20 bg-music-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-8 border-white reveal-from-left">
              <img 
                src="https://cdn.prod.website-files.com/65a997ed5f68daf1805ed393/65a9ce3036d69de028e61d73_65a047f193e982d20ab5a4e8_image1.jpeg" 
                alt="Music teacher instructing students" 
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-music-primary/60 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white font-medium">Founded in 2007</p>
                  <h3 className="text-white text-xl font-bold">15+ years of teaching excellence</h3>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-music-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-music-primary/20 rounded-full blur-3xl"></div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 w-40 z-20 reveal-from-bottom">
              <p className="text-4xl font-bold text-music-primary">500+</p>
              <p className="text-sm text-music-dark/70">Global Students</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-right">
              Our Story – A Vision Born in the Pandemic <WaveAnimation />
            </h2>
            
            <p className="text-lg text-music-dark/80 reveal-from-right delay-200">
              My Music Studio was founded by Mr. Kamlesh Sagar, a Trinity-certified music teacher and seasoned performer with over 15 years of teaching experience since 2007.
            </p>
            
            <p className="text-lg text-music-dark/80 reveal-from-right delay-400">
              The journey began during the COVID-19 pandemic when many students shifted to online classes. But two key problems emerged:
            </p>
            
            <ul className="space-y-3 reveal-from-right delay-600">
              <li className="flex items-start gap-2">
                <span className="text-music-accent mt-1">✓</span>
                <span>Lack of quality in online sessions – Poor audio, video, and teaching setups discouraged students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-music-accent mt-1">✓</span>
                <span>Financial hardship – Many families couldn't afford traditional music classes due to job losses</span>
              </li>
            </ul>
            
            <p className="text-lg text-music-dark/80 italic border-l-4 border-music-accent pl-4 reveal-from-right delay-600">
              "We're not just teaching notes — we're nurturing confidence, creativity, and soul."
            </p>

            <div className="reveal-from-right delay-800">
              <Button className="bg-music-primary hover:bg-music-primary/90 text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
