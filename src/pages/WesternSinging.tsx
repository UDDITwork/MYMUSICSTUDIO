
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderImage from '../components/FounderImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Mic, CheckCircle, Star, Clock, Users, Award } from 'lucide-react';

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
        <title>Western Singing Classes Online | Trinity & Rockschool Certified | My Music Studio</title>
        <meta name="description" content="Learn Western Singing online with Trinity & Rockschool certified instructors. Pop, Indie, Soft Rock vocals. 3-level program for beginners to advanced. Book free demo!" />
        <meta name="keywords" content="western singing classes online, pop vocal training, trinity rock pop certification, rockschool singing course, online voice lessons, english song singing classes" />
        <link rel="canonical" href="https://www.mymusicstudio.in/western-singing" />
        
        <meta property="og:title" content="Western Singing Classes Online | Trinity & Rockschool Certified" />
        <meta property="og:description" content="Master Pop, Indie & Soft Rock vocals with certified instructors. 3-level program from beginner to advanced. Trinity & Rockschool exam preparation." />
        <meta property="og:url" content="https://www.mymusicstudio.in/western-singing" />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Western Singing Classes Online",
            "description": "Comprehensive Western vocal training program with Trinity & Rockschool certification preparation",
            "provider": {
              "@type": "Organization",
              "name": "My Music Studio",
              "url": "https://www.mymusicstudio.in"
            },
            "courseMode": "online",
            "educationalLevel": ["Beginner", "Intermediate", "Advanced"],
            "teaches": ["Pop vocals", "Indie singing", "Soft rock vocals", "Staff notation", "Harmony singing", "Trinity certification", "Rockschool preparation"],
            "offers": [
              {
                "@type": "Offer",
                "name": "Level 1 - Beginner Western Singing",
                "price": "399",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer", 
                "name": "Level 2 - Intermediate Western Singing",
                "price": "450",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "name": "Level 3 - Advanced Western Singing", 
                "price": "499",
                "priceCurrency": "INR"
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-music-light to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-music-dark reveal-from-bottom">
                🎙 <span className="text-music-accent">Western Singing</span> Classes
              </h1>
              <p className="text-xl text-music-dark/70 max-w-3xl mx-auto reveal-from-bottom delay-200">
                Master Your Voice with Western Singing - From Pop to Indie to Soft Rock with Trinity & Rockschool Certification
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trinity & Rockschool Prep</h3>
                <p className="text-music-dark/70">International certification ready</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3-Level Program</h3>
                <p className="text-music-dark/70">Beginner to Professional</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pop, Indie & Rock</h3>
                <p className="text-music-dark/70">Multiple genre mastery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-music-dark reveal-from-bottom">
                Master Your Voice with Western Singing
              </h2>
              <p className="text-lg text-music-dark/70 mb-8 reveal-from-bottom delay-200">
                If you've always dreamed of singing your favorite English songs like a pro—this course is for you! Our Western Singing Program at My Music Studio is ideal for hobby singers, school/college performers, and serious learners aiming for Trinity Rock & Pop or Rockschool certifications.
              </p>
              <p className="text-lg text-music-dark/70 reveal-from-bottom delay-400">
                We'll guide you from warm-ups and breath control to full-song performances, while also helping you understand staff notation, harmony, and live singing techniques. Each level is carefully structured for real growth—and of course, we have tons of fun along the way!
              </p>
            </div>
          </div>
        </section>

        {/* Course Levels */}
        <section className="py-20 bg-music-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-music-dark reveal-from-bottom">
              Our <span className="text-music-accent">Course Levels</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Level 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Level 1</span>
                  </div>
                  <h3 className="text-xl font-bold">Beginner's Vocal Discovery</h3>
                  <p className="text-music-dark/70">Perfect for complete beginners exploring Western music including Pop, Indie, and Soft Rock.</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">Who This Course Is For:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li>• Absolute beginners (kids & adults)</li>
                        <li>• Hobby learners who enjoy singing English songs</li>
                        <li>• Students interested in Trinity or Rockschool Foundation levels</li>
                        <li>• Anyone who wants to learn staff notation and basic music theory</li>
                      </ul>
                    </div>
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
                          <span>Simple English songs: "Imagine", "Let It Go", "Count on Me"</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-music-light p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-music-primary" />
                        <span className="font-semibold">Duration: 3 Months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">45 minutes • 2 classes/week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-music-dark/70">1-on-1</span>
                      <span className="text-lg font-bold text-music-primary">₹399/class</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-music-dark/70">Group</span>
                      <span className="text-lg font-bold text-music-primary">₹350/class</span>
                    </div>
                  </div>
                  <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="bg-music-primary hover:bg-music-primary/90 text-white w-full">
                      Book Demo Class
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              {/* Level 2 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Level 2</span>
                  </div>
                  <h3 className="text-xl font-bold">Intermediate Harmony & Expression</h3>
                  <p className="text-music-dark/70">For students with basic experience, focusing on vocal tone, harmony, and Trinity/Rockschool Grade 2-3 prep.</p>
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
                          <span>Song interpretation and dynamic control</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-music-light p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-music-primary" />
                        <span className="font-semibold">Duration: 3-4 Months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">60 minutes • 2-3 classes/week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-music-dark/70">1-on-1</span>
                      <span className="text-lg font-bold text-music-primary">₹450/class</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-music-dark/70">Group</span>
                      <span className="text-lg font-bold text-music-primary">₹450/class</span>
                    </div>
                  </div>
                  <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="bg-music-primary hover:bg-music-primary/90 text-white w-full">
                      Book Demo Class
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              {/* Level 3 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-400">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Level 3</span>
                  </div>
                  <h3 className="text-xl font-bold">Advanced Performer & Certification</h3>
                  <p className="text-music-dark/70">For serious learners preparing for advanced performance, music exams, or content creation.</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Tone shaping – vibrato, falsetto, mixed voice techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Advanced interpretation & storytelling through song</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Complex rhythm reading and syncopation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Exam-specific repertoire (Trinity/Rockschool)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-music-light p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-music-primary" />
                        <span className="font-semibold">Duration: 4-5 Months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">60-75 minutes • 2-3 sessions/week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-music-dark/70">1-on-1</span>
                      <span className="text-lg font-bold text-music-primary">₹499/class</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-music-dark/70">Group</span>
                      <span className="text-lg font-bold text-music-primary">₹500/class</span>
                    </div>
                  </div>
                  <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="bg-music-primary hover:bg-music-primary/90 text-white w-full">
                      Book Demo Class
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-music-primary to-music-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom">
              Ready to Master Western Singing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Join hundreds of students who have transformed their singing with our Trinity & Rockschool certified program.
            </p>
            <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
              <Button className="bg-music-accent hover:bg-music-accent/90 text-white text-lg px-8 py-3 reveal-from-bottom delay-400">
                Book Your Free Demo Class
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
