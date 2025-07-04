
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

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
        <picture>
          <source 
            srcSet="https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg" 
            type="image/jpeg"
          />
          <img 
            src="https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg" 
            alt="Music students learning piano and singing - Join My Music Studio for online music classes" 
            className="w-full h-full object-cover"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
        </picture>
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
            <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-music-accent hover:bg-music-accent/90 text-white px-8 py-4 text-lg min-h-[48px] min-w-[180px]">
                Book Free Demo Class
              </Button>
            </a>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 hover:text-black px-8 py-4 text-lg min-h-[48px] min-w-[160px]">
                View Our Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
