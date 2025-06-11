
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderImage from '../components/FounderImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Music, CheckCircle, Star, Clock, Users, Award } from 'lucide-react';

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
        <title>Bollywood Singing Classes Online | Hindi Vocal Training | My Music Studio</title>
        <meta name="description" content="Learn Bollywood singing online with expert instructors. Classical Raag-based Hindi vocal training from beginner to professional. Sur-taal mastery. Book free demo!" />
        <meta name="keywords" content="bollywood singing classes online, hindi vocal training, indian classical singing, sur taal practice, raag based bollywood songs, online hindi music classes" />
        <link rel="canonical" href="https://www.mymusicstudio.in/bollywood-singing" />
        
        <meta property="og:title" content="Bollywood Singing Classes Online | Hindi Vocal Training" />
        <meta property="og:description" content="Master Bollywood vocals with classical Raag foundation. 3-level program from pitch correction to professional playback singing." />
        <meta property="og:url" content="https://www.mymusicstudio.in/bollywood-singing" />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Bollywood Singing Classes Online",
            "description": "Comprehensive Bollywood vocal training with classical Raag foundation and modern techniques",
            "provider": {
              "@type": "Organization",
              "name": "My Music Studio",
              "url": "https://www.mymusicstudio.in"
            },
            "courseMode": "online",
            "educationalLevel": ["Beginner", "Intermediate", "Advanced"],
            "teaches": ["Bollywood vocals", "Hindi singing", "Classical raag", "Sur-taal training", "Pitch correction", "Voice modulation"],
            "offers": [
              {
                "@type": "Offer",
                "name": "Level 1 - Beginner Bollywood Singing",
                "price": "399",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer", 
                "name": "Level 2 - Intermediate Bollywood Singing",
                "price": "450",
                "priceCurrency": "INR"
              },
              {
                "@type": "Offer",
                "name": "Level 3 - Advanced Bollywood Singing", 
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
                🎤 <span className="text-music-accent">Bollywood Singing</span> Classes
              </h1>
              <p className="text-xl text-music-dark/70 max-w-3xl mx-auto reveal-from-bottom delay-200">
                Your Bollywood Singing Journey Begins Here - From Sur-Taal Basics to Professional Playback Performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Classical Foundation</h3>
                <p className="text-music-dark/70">Raag-based Bollywood training</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sur-Taal Mastery</h3>
                <p className="text-music-dark/70">Pitch perfection & rhythm</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
                <p className="text-music-dark/70">Expert instructor guidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-music-dark reveal-from-bottom">
                Your Bollywood Singing Journey Begins Here
              </h2>
              <p className="text-lg text-music-dark/70 mb-8 reveal-from-bottom delay-200">
                At My Music Studio, we've helped hundreds of students—from total beginners to advanced performers—fall in love with Bollywood music. All our teachers come with a minimum of 15 years' experience in stage and studio performance, and we focus on individual voice development, not just song singing.
              </p>
              <p className="text-lg text-music-dark/70 reveal-from-bottom delay-400">
                Whether you're preparing for a school performance, YouTube cover, or a Trinity exam, this course is crafted to bring out your inner star. Each level is designed with flexible learning, personalized feedback, and a beautiful blend of classical technique and modern Bollywood flair.
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

            <div className="space-y-12">
              {/* Level 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Level 1</span>
                  </div>
                  <h3 className="text-2xl font-bold">Beginner's Vocal Journey</h3>
                  <p className="text-music-dark/70">This beginner-level course is specially designed for students with no prior singing experience or formal training. It focuses on building a strong foundation in pitch correction, sur-taal awareness, and confidence in singing popular Bollywood melodies.</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-4">Who This Course Is For:</h4>
                      <ul className="space-y-2 text-sm text-music-dark/70">
                        <li>• Complete beginners with zero music training</li>
                        <li>• Kids (6–14 years) and Adults (25+ years)</li>
                        <li>• Anyone who feels like their singing is "off-pitch"</li>
                        <li>• Hobbyists who want to sing confidently at family functions, karaoke nights, or school shows</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-music-dark mb-4">What You'll Learn:</h4>
                      <ul className="space-y-2 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Understanding the 7 basic notes (Sa Re Ga Ma Pa Dha Ni Sa)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Voice tuning exercises – identify & sing correct pitch</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Breathing techniques for stable notes & better tone</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Basic Sur-Alankars (patterns of notes) to build accuracy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-music-dark mb-3">Bonus Perks for Level 1 Students:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-music-dark/70">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>Free access to daily practice audio (mp3s with notes & tanpura)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>Personalized teacher feedback after every class</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>PDF downloads for notes and weekly assignments</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>End-of-level mock test and performance evaluation</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-music-light p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-music-primary" />
                        <span className="font-semibold">3 Months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">45 minutes each</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">2 classes/week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="w-full">
                    <h4 className="font-semibold text-music-dark mb-3">Fee Structure:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-music-dark/70">1-on-1 Session</span>
                        <span className="text-lg font-bold text-music-primary">₹399/class</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-music-dark/70">Group Class</span>
                        <span className="text-lg font-bold text-music-primary">₹350/class</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-music-dark/70">Demo Class</span>
                        <span className="text-lg font-bold text-music-accent">Free</span>
                      </div>
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
                    <Music className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Level 2</span>
                  </div>
                  <h3 className="text-2xl font-bold">Intermediate Training & Performance Skills</h3>
                  <p className="text-music-dark/70">This course is ideal for students who have either completed Level 1, or have basic singing experience/training in Bollywood or Indian semi-classical music. This level focuses on refining your voice, building control, and enhancing your stage and studio presence.</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-4">Who This Course Is For:</h4>
                      <ul className="space-y-2 text-sm text-music-dark/70">
                        <li>• Students with foundational knowledge of notes and rhythm</li>
                        <li>• Aspiring singers aiming for local competitions, recordings, or content creation</li>
                        <li>• Students who feel their voice lacks power, clarity, or flexibility</li>
                        <li>• Hobbyists transitioning to a more professional practice</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-music-dark mb-4">Key Learning Areas:</h4>
                      <ul className="space-y-2 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Vocal Projection & Expansion – fuller & stronger voice</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Voice Modulation Techniques – sing softly, loudly, emotionally</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Raag-based Bollywood Songs – Yaman, Bhairavi, Desh influence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Emotional Expression & Storytelling – feel the lyrics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-music-light p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-music-primary" />
                        <span className="font-semibold">3-4 Months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">60 minutes each</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">2-3 classes/week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
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
                    <Music className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Level 3</span>
                  </div>
                  <h3 className="text-2xl font-bold">Advanced Playback & Performance Training</h3>
                  <p className="text-music-dark/70">This advanced-level course is built for singers who are ready to elevate their voice to a professional standard. Whether you're preparing for studio recordings, live shows, YouTube content, or vocal competitions, this course will help you master every aspect of a playback singer's journey.</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-4">Who This Course Is For:</h4>
                      <ul className="space-y-2 text-sm text-music-dark/70">
                        <li>• Students who have completed Level 2 or have 2+ years structured vocal training</li>
                        <li>• Aspiring playback singers, performers, or content creators</li>
                        <li>• Musicians preparing for Trinity, ABRSM or professional auditions</li>
                        <li>• Anyone serious about building a unique musical identity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-music-dark mb-4">Advanced Techniques:</h4>
                      <ul className="space-y-2 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Advanced Voice Modulation – falsetto, belting, vibrato control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Raag-based Interpretations – Yaman, Kafi, Bhairavi in film songs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Studio Singing Practice – vocal layering, click track</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Camera Confidence & Body Language</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-music-dark mb-3">Projects & Performances:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-music-dark/70">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>Submit 2 self-recorded songs for evaluation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>Build your vocal reel/demo for auditions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>Virtual Concerts or YouTube Showcases</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                        <span>Complete "Artist Identity Plan" with branding tips</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-music-light p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-music-primary" />
                        <span className="font-semibold">4-5 Months</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">60-75 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-music-primary" />
                        <span className="text-sm">2-3 sessions/week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-music-dark/70">1-on-1 (Strictly)</span>
                      <span className="text-lg font-bold text-music-primary">₹499/class</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-music-dark/70">Group (By invitation)</span>
                      <span className="text-lg font-bold text-music-primary">₹500/class</span>
                    </div>
                  </div>
                  <div className="bg-music-accent/10 p-3 rounded-lg">
                    <p className="text-sm text-music-accent font-semibold">🏆 Certificate of Completion + Bonus Showcase on our YouTube Channel for top performers!</p>
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
              Ready to Become the Voice of Tomorrow?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Let's take your singing to the next level. It's time to step into the limelight!
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

export default BollywoodSinging;
