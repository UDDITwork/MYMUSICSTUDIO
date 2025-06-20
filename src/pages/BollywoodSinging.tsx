
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderImage from '../components/FounderImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Music, CheckCircle, Star, Clock, Users, Mic, Heart } from 'lucide-react';

const BollywoodSinging = () => {
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
        <title>Bollywood Singing Course | Learn Indian Vocals Online | My Music Studio</title>
        <meta name="description" content="Master Bollywood singing with our 3-level course. From beginner pitch correction to playback professional training. Learn sur-taal, raag-based songs & performance skills online." />
        <meta name="keywords" content="Bollywood singing classes online, beginner to playback singer, pitch correction, sur taal, raag-based Bollywood songs, vocal coaching India, Zoom music lessons, performance training" />
        <link rel="canonical" href="https://mymusicstudio.com/courses/bollywood-singing" />
        <meta property="og:title" content="Bollywood Singing Course | Learn Indian Vocals Online | My Music Studio" />
        <meta property="og:description" content="Master Bollywood singing with our 3-level course. From beginner pitch correction to playback professional training. Learn sur-taal, raag-based songs & performance skills online." />
        <meta property="og:url" content="https://mymusicstudio.com/courses/bollywood-singing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Bollywood Singing Course",
            "description": "3-level Bollywood singing course from beginner to playback professional. Learn sur-taal, raag-based songs, and performance skills with personalized vocal training.",
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
                "name": "Level 1 - Foundation Building",
                "description": "Perfect for complete beginners exploring Bollywood music",
                "price": "399",
                "priceCurrency": "INR",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "url": "https://calendly.com/kamleshsagar1/music-lessons"
              },
              {
                "@type": "Offer", 
                "name": "Level 2 - Performance Training",
                "description": "Develop vocal power and raag-based melodies",
                "price": "450",
                "priceCurrency": "INR",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "url": "https://calendly.com/kamleshsagar1/music-lessons"
              },
              {
                "@type": "Offer",
                "name": "Level 3 - Professional Mastery", 
                "description": "Stage-ready vocalist with studio recording skills",
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
                  "description": "15+ years of vocal coaching experience with Trinity certification",
                  "url": "https://mymusicstudio.in/music-teacher-kamlesh-sagar"
                },
                "courseWorkload": "PT3M",
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
              "Voice tuning and pitch correction",
              "Breathing techniques for stable notes", 
              "Sur-Alankars and rhythm training",
              "Raag-based Bollywood songs",
              "Performance and mic techniques",
              "Studio singing practice"
            ],
            "timeRequired": "PT3M",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
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
                <Music className="w-8 h-8 text-music-accent" />
                <span className="text-lg font-semibold text-music-primary">Bollywood Singing Course</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-music-dark reveal-from-bottom">
                🎤 <span className="text-music-accent">Bollywood Singing</span> Course
              </h1>
              <p className="text-xl text-music-dark/70 mb-4 reveal-from-bottom delay-200">
                Beginner to Playback Pro – Explore Your Voice Through Bollywood Music
              </p>
              <p className="text-lg text-music-dark/60 max-w-3xl mx-auto mb-8 reveal-from-bottom delay-300">
                Unlock your inner singer with this beautifully structured 3-level Bollywood Singing Course. 
                Designed for beginners to aspiring playback professionals, offering personalized vocal training 
                rooted in the heart of Indian cinema music.
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
                  <Heart className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Training</h3>
                <p className="text-music-dark/70">1:1 feedback and real-time demos</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance Ready</h3>
                <p className="text-music-dark/70">YouTube, open mics & studio recordings</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                <p className="text-music-dark/70">15+ years of vocal coaching experience</p>
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
                From foundation building to professional performance skills
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Level 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Bollywood Singing Level 1 - Foundation" 
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
                  <h3 className="text-xl font-bold">Foundation Building</h3>
                  <p className="text-music-dark/70 text-sm">Perfect for complete beginners exploring Bollywood music</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Understanding 7 basic notes (Sa Re Ga Ma Pa Dha Ni Sa)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Voice tuning exercises & pitch correction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Breathing techniques for stable notes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Basic Sur-Alankars and rhythm training</span>
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
                    alt="Bollywood Singing Level 2 - Performance" 
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
                  <h3 className="text-xl font-bold">Performance Training</h3>
                  <p className="text-music-dark/70 text-sm">Develop vocal power and raag-based melodies</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Vocal projection & voice modulation techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Intermediate Alankars with meend, khatka, murki</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Raag-based Bollywood songs (Yaman, Bhairavi, Desh)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Karaoke performance & mic techniques</span>
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
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Bollywood Singing Level 3 - Professional" 
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
                  <h3 className="text-xl font-bold">Professional Mastery</h3>
                  <p className="text-music-dark/70 text-sm">Stage-ready vocalist with studio recording skills</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Advanced voice modulation (falsetto, belting, vibrato)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Raag-based interpretations & improvisation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Studio singing practice & vocal layering</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Semi-classical to contemporary transitions</span>
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
                Why Choose Our <span className="text-music-accent">Bollywood Singing</span> Course?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Personalized Sessions</h3>
                <p className="text-music-dark/70 text-sm">1:1 feedback with real-time demos</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Timing</h3>
                <p className="text-music-dark/70 text-sm">Global students, any timezone</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Performance Ready</h3>
                <p className="text-music-dark/70 text-sm">YouTube, competitions & studio prep</p>
              </div>
              <div className="text-center reveal-from-bottom delay-600">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Bonus Resources</h3>
                <p className="text-music-dark/70 text-sm">Audio materials & practice tracks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-music-primary to-music-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom">
              Ready to Discover Your Bollywood Voice?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Join thousands of students who have transformed their singing with our structured Bollywood vocal training program.
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

export default BollywoodSinging;
