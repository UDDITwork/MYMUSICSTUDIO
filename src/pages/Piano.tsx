
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderImage from '../components/FounderImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Piano, CheckCircle, Star, Clock, Users, Music, Heart } from 'lucide-react';

const PianoPage = () => {
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
        <title>Piano & Keyboard Classes Online | Learn Piano from Home | My Music Studio</title>
        <meta name="description" content="Learn piano & keyboard online with Trinity/ABRSM certification prep. Professional piano lessons for beginners to advanced. Staff notation, chord progressions & performance skills." />
        <meta name="keywords" content="online piano classes India, keyboard lessons online, Trinity piano exam prep, ABRSM piano certification, learn piano from home, piano teacher online India, piano classes for beginners" />
        <link rel="canonical" href="https://mymusicstudio.in/courses/piano" />
        <meta property="og:title" content="Piano & Keyboard Classes Online | Learn Piano from Home | My Music Studio" />
        <meta property="og:description" content="Learn piano & keyboard online with Trinity/ABRSM certification prep. Professional piano lessons for beginners to advanced." />
        <meta property="og:url" content="https://mymusicstudio.in/courses/piano" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Piano & Keyboard Course",
            "description": "Comprehensive piano and keyboard course with Trinity/ABRSM certification preparation, covering staff notation, chord progressions, and performance skills.",
            "provider": {
              "@type": "Organization",
              "name": "My Music Studio",
              "url": "https://mymusicstudio.in",
              "logo": "https://mymusicstudio.in/logo.PNG",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8459326365",
                "contactType": "customer service",
                "email": "kamleshsagar1@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Beginner Piano Course",
                "description": "Learn piano basics, keyboard layout, and basic songs",
                "price": "399",
                "priceCurrency": "INR",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "url": "https://calendly.com/kamleshsagar1/music-lessons"
              },
              {
                "@type": "Offer",
                "name": "Intermediate Piano Course",
                "description": "Advanced techniques and Trinity/ABRSM exam preparation",
                "price": "450",
                "priceCurrency": "INR",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "url": "https://calendly.com/kamleshsagar1/music-lessons"
              },
              {
                "@type": "Offer",
                "name": "Advanced Piano Course",
                "description": "Professional performance and composition skills",
                "price": "500",
                "priceCurrency": "INR",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "url": "https://calendly.com/kamleshsagar1/music-lessons"
              }
            ],
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "online",
                "courseSchedule": {
                  "@type": "Schedule",
                  "scheduleTimezone": "Asia/Kolkata",
                  "repeatFrequency": "P1W",
                  "duration": "PT60M"
                },
                "instructor": {
                  "@type": "Person",
                  "name": "Kamlesh Sagar",
                  "jobTitle": "Professional Music Instructor",
                  "description": "15+ years of piano teaching experience with Trinity certification",
                  "url": "https://mymusicstudio.in/music-teacher-kamlesh-sagar"
                },
                "courseWorkload": "PT6M",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": "399-500",
                  "priceCurrency": "INR"
                }
              }
            ],
            "courseMode": "online",
            "educationalLevel": "Beginner to Advanced",
            "teaches": [
              "Piano keyboard layout and posture",
              "Reading music using staff notation",
              "Right & left-hand independence",
              "Chord progressions and harmony",
              "Trinity/ABRSM exam preparation",
              "Performance techniques"
            ],
            "timeRequired": "PT6M",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "200",
              "bestRating": "5",
              "worstRating": "1"
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
                <Piano className="w-8 h-8 text-music-accent" />
                <span className="text-lg font-semibold text-music-primary">Piano & Keyboard Course</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-music-dark reveal-from-bottom">
                🎹 <span className="text-music-accent">Piano & Keyboard</span> Classes
              </h1>
              <p className="text-xl text-music-dark/70 mb-4 reveal-from-bottom delay-200">
                Master Piano from Home – Classical to Contemporary
              </p>
              <p className="text-lg text-music-dark/60 max-w-3xl mx-auto mb-8 reveal-from-bottom delay-300">
                Learn piano and keyboard with professional guidance, Trinity/ABRSM certification preparation, 
                and comprehensive skill development from beginner to advanced levels.
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
                  <Piano className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Technique</h3>
                <p className="text-music-dark/70">Proper posture, finger positioning & hand independence</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Music Theory</h3>
                <p className="text-music-dark/70">Staff notation, chord progressions & harmony</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certification Ready</h3>
                <p className="text-music-dark/70">Trinity & ABRSM exam preparation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Levels */}
        <section className="py-20 bg-music-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
                Piano Course <span className="text-music-accent">Levels</span>
              </h2>
              <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
                Structured learning path from beginner to advanced pianist
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Beginner Level */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Piano Beginner Course" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Beginner
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    3-4 Months
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Foundation Building</h3>
                  <p className="text-music-dark/70 text-sm">Learn piano basics and fundamental techniques</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Keyboard layout and proper posture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Basic music reading and notation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Simple melodies and beginner songs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Basic scales and finger exercises</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹350-399/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Start Learning
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Intermediate Level */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-200">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Piano Intermediate Course" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Intermediate
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    4-5 Months
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Skill Development</h3>
                  <p className="text-music-dark/70 text-sm">Advanced techniques and Trinity exam preparation</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Advanced scales and arpeggios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Chord progressions and harmony</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Trinity Grade 3-5 repertoire</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Sight-reading and improvisation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹450/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Continue Journey
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Level */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-400">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Piano Advanced Course" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Advanced
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    6+ Months
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Performance Mastery</h3>
                  <p className="text-music-dark/70 text-sm">Professional performance and composition skills</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Advanced repertoire (Classical, Jazz, Pop)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Trinity Grade 6-8 exam preparation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Performance techniques and stage presence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Composition and arrangement skills</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹499-500/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Master Piano
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
                Why Choose Our <span className="text-music-accent">Piano Course</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Expert Instruction</h3>
                <p className="text-music-dark/70 text-sm">Trinity certified teachers with 15+ years experience</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Schedule</h3>
                <p className="text-music-dark/70 text-sm">Learn at your own pace, any time zone</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Performance Ready</h3>
                <p className="text-music-dark/70 text-sm">Recitals, competitions & certification exams</p>
              </div>
              <div className="text-center reveal-from-bottom delay-600">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Personalized Learning</h3>
                <p className="text-music-dark/70 text-sm">Customized lessons for your musical goals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-music-primary to-music-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom">
              Ready to Start Your Piano Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Join thousands of students who have mastered piano with our comprehensive online course.
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

export default PianoPage;
