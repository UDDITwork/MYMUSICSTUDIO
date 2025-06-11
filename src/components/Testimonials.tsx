
import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-music-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-music-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
            What Our <span className="text-music-accent">Students</span> Say
          </h2>
          <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
            Hear from our global students who have transformed their musical journeys with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute top-0 left-0 right-0 translate-x-20'
                }`}
              >
                <Card className="border-none shadow-lg p-8 reveal-from-bottom">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-music-primary">
                        <img 
                          src={`https://i.pravatar.cc/150?img=${testimonial.avatar}`} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          width="80"
                          height="80"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-4 text-music-accent">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-xl">★</span>
                        ))}
                      </div>
                      <blockquote className="text-lg italic text-music-dark/80 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <h3 className="font-bold text-music-dark">{testimonial.name}</h3>
                        <p className="text-sm text-music-dark/60">{testimonial.course}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 mx-1 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  index === currentIndex ? 'bg-music-primary scale-125' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Ananya Sharma",
    avatar: "28",
    course: "Bollywood Singing - Level 2",
    quote: "The 1:1 attention I received completely transformed my singing. My instructor helped me overcome my pitch problems and I can now confidently perform at family gatherings!"
  },
  {
    name: "Rohan Mehta",
    avatar: "65",
    course: "Piano - Level 3",
    quote: "I cleared my Trinity Grade 4 exam with distinction thanks to the structured curriculum and patient guidance from my teacher. The flexibility of online classes worked perfectly with my schedule."
  },
  {
    name: "Sarah Johnson",
    avatar: "5",
    course: "Western Vocals - Level 1",
    quote: "Even though I'm in Canada, the time zone was never an issue. My instructor is incredibly talented and has helped me learn proper breathing techniques that improved my singing dramatically."
  },
  {
    name: "Vikram Desai",
    avatar: "12",
    course: "Bollywood Singing - Level 3",
    quote: "After trying multiple local teachers, I found My Music Studio online. The professional setup and structured approach helped me prepare for my first recording session. Worth every penny!"
  }
];

export default Testimonials;
