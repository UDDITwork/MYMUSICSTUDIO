
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderImage from '../components/FounderImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mic, CheckCircle, Star, Clock, Users, Music, Heart } from 'lucide-react';

const WesternSinging = () => {
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
    <>
      <Helmet>
        <title>Western Singing Course | Pop Rock Vocal Training Online | My Music Studio</title>
        <meta name="description" content="Master Western singing with our 3-level course. Learn Pop, Rock, Gospel vocals online. Trinity Rock & Pop certification prep. Staff notation & harmony training included." />
        <meta name="keywords" content="western vocal training online, pop rock singing classes, Trinity Rock & Pop vocal prep, how to sing in English, harmony singing lessons, staff notation for singers, YouTube singing course" />
        <link rel="canonical" href="https://mymusicstudio.com/courses/western-singing" />
        <meta property="og:title" content="Western Singing Course | Pop Rock Vocal Training Online | My Music Studio" />
        <meta property="og:description" content="Master Western singing with our 3-level course. Learn Pop, Rock, Gospel vocals online. Trinity Rock & Pop certification prep. Staff notation & harmony training included." />
        <meta property="og:url" content="https://mymusicstudio.com/courses/western-singing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Western Singing Course",
            "description": "3-level Western singing course covering Pop, Rock, Gospel and Acoustic genres",
            "provider": {
              "@type": "Organization",
              "name": "My Music Studio"
            },
            "courseMode": "online",
            "educationalLevel": "Beginner to Advanced",
            "instructor": {
              "@type": "Person",
              "name": "Kamlesh Sagar"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-music-light to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6 reveal-from-bottom">
                <Mic className="w-8 h-8 text-music-accent" />
                <span className="text-lg font-semibold text-music-primary">Western Singing Course</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-music-dark reveal-from-bottom">
                🎙 <span className="text-music-accent">Western Singing</span> Course
              </h1>
              <p className="text-xl text-music-dark/70 mb-4 reveal-from-bottom delay-200">
                Pop, Rock & Beyond – Sing Like a Star from Bedroom to Stage
              </p>
              <p className="text-lg text-music-dark/60 max-w-3xl mx-auto mb-8 reveal-from-bottom delay-300">
                Step into the world of English vocal performance with our Western Singing Course, perfect for those 
                inspired by Pop, Rock, Gospel, or Acoustic genres. Structured across three dynamic levels to guide 
                you from warm-up routines to stage-ready vocal mastery.
              </p>
              <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                <Button className="bg-music-accent hover:bg-music-accent/90 text-white text-lg px-8 py-3 reveal-from-bottom delay-400">
                  Book Free Demo Class
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Genre Training</h3>
                <p className="text-music-dark/70">Pop, Rock, Gospel & Acoustic styles</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trinity Certification</h3>
                <p className="text-music-dark/70">Rock & Pop Grade 4+ preparation</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance Craft</h3>
                <p className="text-music-dark/70">Emotional storytelling through song</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Levels */}
        <section className="py-20 bg-music-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
                Course Structure - <span className="text-music-accent">3 Levels</span>
              </h2>
              <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
                From vocal discovery to professional performance mastery
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Level 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Western Singing Level 1 - Vocal Discovery" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Level 1
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    3 Months
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Beginner's Vocal Discovery</h3>
                  <p className="text-music-dark/70 text-sm">Perfect for complete beginners exploring Western music</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Vocal warm-ups and posture for healthy singing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Diaphragmatic breathing for control and stability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Introduction to staff notation (reading notes & rhythm)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Simple English songs: 'Imagine', 'Let It Go', 'Count on Me'</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹350-399/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Start Level 1
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 2 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-200">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Western Singing Level 2 - Harmony & Expression" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Level 2
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    3-4 Months
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Intermediate Harmony & Expression</h3>
                  <p className="text-music-dark/70 text-sm">Focus on vocal tone, harmony, and Trinity/Rockschool prep</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Vocal range extension exercises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Harmony singing – thirds, fifths, and basic chords</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Advanced breathing and phrasing techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Genres: Pop, Gospel, Acoustic Rock</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹450/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Start Level 2
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Level 3 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-400">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Western Singing Level 3 - Advanced Performer" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Level 3
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    4-5 Months
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Advanced Performer & Certification</h3>
                  <p className="text-music-dark/70 text-sm">Serious learners preparing for advanced performance</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Tone shaping – vibrato, falsetto, mixed voice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Advanced interpretation & storytelling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Creating your vocal demo reel or YouTube cover</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Audition prep and performance anxiety handling</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹499-500/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Start Level 3
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
                Why Choose Our <span className="text-music-accent">Western Singing</span> Course?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Vocal Science</h3>
                <p className="text-music-dark/70 text-sm">Blend of technique & performance craft</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Schedule</h3>
                <p className="text-music-dark/70 text-sm">Perfect for school/college students</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Performance Ready</h3>
                <p className="text-music-dark/70 text-sm">YouTube covers & live auditions</p>
              </div>
              <div className="text-center reveal-from-bottom delay-600">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Certification Prep</h3>
                <p className="text-music-dark/70 text-sm">Trinity Rock & Pop Grade preparation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-music-primary to-music-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom">
              Ready to Sing Like a Star?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Join our Western Singing Course and master the art of English vocal performance across multiple genres.
            </p>
            <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
              <Button className="bg-music-accent hover:bg-music-accent/90 text-white text-lg px-8 py-3 reveal-from-bottom delay-400">
                Book Your Free Demo Class Today
              </Button>
            </a>
          </div>
        </section>

        <Footer />
        <FounderImage />
      </main>
    </>
  );
};

export default WesternSinging;
