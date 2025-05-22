
import { useEffect } from 'react';
import { Guitar, Piano, Mic, Users, Headphones, Music } from 'lucide-react';

const Features = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
            What Makes Us <span className="text-music-accent">Different</span>
          </h2>
          <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
            At My Music Studio, we combine experience + technology to deliver an exceptional online learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 reveal-from-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-music-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-music-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-music-dark">{feature.title}</h3>
              <p className="text-music-dark/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Guitar,
    title: 'Expert Instructors',
    description: 'Each tutor has 15+ years of music teaching & performing experience, ensuring quality education.',
  },
  {
    icon: Piano,
    title: 'Professional Setup',
    description: 'We use professional-grade audio interfaces, multi-angle HD cameras, and high-speed internet.',
  },
  {
    icon: Mic,
    title: 'Advanced Learning Tools',
    description: 'Dedicated tools like DAWs and music software for advanced learning and better progress tracking.',
  },
  {
    icon: Users,
    title: 'Personalized Attention',
    description: 'Live 1:1 or group classes with complete personal attention for faster improvement.',
  },
  {
    icon: Headphones,
    title: 'Flexible Scheduling',
    description: 'Flexible time slots for global students, so you can learn from anywhere in the world.',
  },
  {
    icon: Music,
    title: 'Certification Courses',
    description: 'Trinity, ABRSM & Rock School certification courses for professional qualifications.',
  },
];

export default Features;
