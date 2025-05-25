
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Globe, Users, Award } from 'lucide-react';

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
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 bg-image-overlay">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.icmp.ac.uk/sites/default/files/styles/page_background/public/slider-image/short-music-courses-at-icmp.jpg?itok=zKCQcJ8A" 
            alt="Music courses background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal-from-bottom">
              About My Music Studio – Online Music Classes That Inspire
            </h1>
            <p className="text-xl md:text-2xl opacity-90 reveal-from-bottom delay-200">
              Discover the story behind our passion for music education
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-music-dark reveal-from-bottom">Introduction</h2>
              <p className="text-lg text-music-dark/80 leading-relaxed reveal-from-bottom delay-200">
                My Music Studio is a professional online music learning platform offering piano, keyboard, Bollywood singing, and Western vocal training — for both beginners and advanced learners. Our mission is to deliver world-class online music classes at highly affordable fees, without compromising on quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="reveal-from-left">
                <h3 className="text-2xl font-bold mb-6 text-music-dark">We Specialize In Teaching:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-music-accent mt-0.5" />
                    <span>Trinity, ABRSM & Rock School certification courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-music-accent mt-0.5" />
                    <span>Hobby-based learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-music-accent mt-0.5" />
                    <span>Professional mentoring for performers, recording artists, and event musicians</span>
                  </li>
                </ul>
              </div>

              <div className="reveal-from-right">
                <h3 className="text-2xl font-bold mb-6 text-music-dark">Our Classes Cater To:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-music-accent mt-0.5" />
                    <span>Kids aged 6 to 14 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-music-accent mt-0.5" />
                    <span>Adults aged 25 years and above</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-music-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-music-dark reveal-from-bottom">
              What Makes Us Different
            </h2>
            <p className="text-lg text-center text-music-dark/80 mb-12 reveal-from-bottom delay-200">
              At My Music Studio, we combine experience + technology to deliver an exceptional online learning experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md reveal-from-left">
                <CheckCircle className="h-8 w-8 text-music-accent mb-4" />
                <p>Each tutor has 15+ years of music teaching & performing experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal-from-right">
                <CheckCircle className="h-8 w-8 text-music-accent mb-4" />
                <p>We use professional-grade audio interfaces, multi-angle HD cameras, and high-speed internet for crystal-clear online classes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal-from-left delay-200">
                <CheckCircle className="h-8 w-8 text-music-accent mb-4" />
                <p>Dedicated tools like DAWs and music software for advanced learning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal-from-right delay-200">
                <CheckCircle className="h-8 w-8 text-music-accent mb-4" />
                <p>Live 1:1 or group classes with complete personal attention</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal-from-left delay-400 md:col-span-2">
                <CheckCircle className="h-8 w-8 text-music-accent mb-4" />
                <p>Flexible time slots for global students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-music-dark reveal-from-bottom">
              Our Story – A Vision Born in the Pandemic
            </h2>

            <div className="space-y-8">
              <div className="reveal-from-bottom">
                <p className="text-lg text-music-dark/80 leading-relaxed mb-6">
                  My Music Studio was founded by Mr. Kamlesh Sagar, a Trinity-certified music teacher and a seasoned live performer for corporate and social events, with over 15 years of teaching experience since 2007.
                </p>
                <p className="text-lg text-music-dark/80 leading-relaxed mb-6">
                  The journey began during the COVID-19 pandemic, when many students shifted to online classes. But two key problems emerged:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 p-6 rounded-lg reveal-from-left">
                  <h4 className="font-bold text-music-dark mb-3">Problem 1:</h4>
                  <p className="text-music-dark/80">Lack of quality in online sessions – Poor audio, video, and teaching setups discouraged students</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg reveal-from-right">
                  <h4 className="font-bold text-music-dark mb-3">Problem 2:</h4>
                  <p className="text-music-dark/80">Financial hardship – Many families couldn't afford traditional music classes due to job losses</p>
                </div>
              </div>

              <div className="reveal-from-bottom delay-400">
                <p className="text-lg text-music-dark/80 leading-relaxed mb-6">
                  This inspired Kamlesh to take action. He believed that every student deserves access to high-quality music education, regardless of budget or location. So he:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-music-primary mt-0.5" />
                    <span>Researched the best online teaching tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-music-primary mt-0.5" />
                    <span>Built a studio setup with premium audio-video gear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-music-primary mt-0.5" />
                    <span>Created a low-cost, high-value course model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-music-primary mt-0.5" />
                    <span>Decided to focus on quality and reach, not just profit</span>
                  </li>
                </ul>

                <p className="text-lg text-music-dark/80 leading-relaxed font-medium">
                  And that's how My Music Studio was born — not just as a business, but as a mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today We Teach Globally */}
      <section className="py-20 bg-music-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-music-dark reveal-from-bottom">
              Today, We Teach Globally
            </h2>
            
            <div className="flex justify-center mb-8 reveal-from-bottom delay-200">
              <Globe className="h-16 w-16 text-music-primary" />
            </div>

            <p className="text-lg text-music-dark/80 leading-relaxed mb-8 reveal-from-bottom delay-400">
              We proudly teach students across India, Singapore, Canada, the USA, and beyond — helping them prepare for music exams, live performances, and a lifelong love of music.
            </p>

            <blockquote className="text-2xl font-bold text-music-primary italic border-l-4 border-music-accent pl-6 mb-12 reveal-from-bottom delay-600">
              "We're not just teaching notes — we're nurturing confidence, creativity, and soul."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-music-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal-from-bottom">Ready to Begin?</h2>
            
            <p className="text-xl mb-8 opacity-90 reveal-from-bottom delay-200">
              Whether you're picking up music for the first time or returning to it after years, we're here to guide you — with patience, professionalism, and passion.
            </p>

            <div className="reveal-from-bottom delay-400">
              <p className="text-2xl font-bold mb-8">👉 Join My Music Studio and feel the difference in every note.</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-music-accent hover:bg-music-accent/90 text-white px-8 py-6 text-lg">
                  Book Free Demo Class
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  View Our Courses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
