
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
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
    <section className="py-20 bg-image-overlay relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://braindevs.net/blog//wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg" 
          alt="Students playing music" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom">
            Ready to Begin Your Musical Journey?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 reveal-from-bottom delay-200">
            Whether you're picking up music for the first time or returning to it after years, we're here to guide you — with patience, professionalism, and passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal-from-bottom delay-400">
            <Button size="lg" className="bg-music-accent hover:bg-music-accent/90 text-white px-8 py-6 text-lg">
              Book Free Demo Class
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
