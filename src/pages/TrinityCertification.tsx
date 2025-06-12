
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderImage from '../components/FounderImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, CheckCircle, Star, Clock, Users, BookOpen, Trophy } from 'lucide-react';

const TrinityCertification = () => {
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
        <title>Trinity College Certification Prep | Piano & Vocal Grades Online | My Music Studio</title>
        <meta name="description" content="Get Trinity College London certified with our specialized preparation courses. Piano, Western & Bollywood singing grades. Expert guidance for international music certification." />
        <meta name="keywords" content="Trinity College London certification, Trinity piano grades, Trinity vocal grades, Trinity Rock Pop exam prep, international music certification, Trinity exam preparation online" />
        <link rel="canonical" href="https://mymusicstudio.com/courses/trinity-certification" />
        <meta property="og:title" content="Trinity College Certification Prep | Piano & Vocal Grades Online | My Music Studio" />
        <meta property="og:description" content="Get Trinity College London certified with our specialized preparation courses. Piano, Western & Bollywood singing grades. Expert guidance for international music certification." />
        <meta property="og:url" content="https://mymusicstudio.com/courses/trinity-certification" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Trinity College Certification Preparation",
            "description": "Professional preparation for Trinity College London music certifications",
            "provider": {
              "@type": "Organization",
              "name": "My Music Studio"
            },
            "courseMode": "online",
            "educationalLevel": "All Levels",
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
                <Award className="w-8 h-8 text-music-accent" />
                <span className="text-lg font-semibold text-music-primary">Trinity College London</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-music-dark reveal-from-bottom">
                🏆 <span className="text-music-accent">Trinity</span> Certification
              </h1>
              <p className="text-xl text-music-dark/70 mb-4 reveal-from-bottom delay-200">
                Get Internationally Recognized Music Certification from Trinity College London
              </p>
              <p className="text-lg text-music-dark/60 max-w-3xl mx-auto mb-8 reveal-from-bottom delay-300">
                Achieve globally recognized music qualifications with our specialized Trinity College London 
                preparation courses. Expert guidance for Piano, Classical, and Rock & Pop vocal certifications 
                from Initial to Grade 8 and beyond.
              </p>
              <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                <Button className="bg-music-accent hover:bg-music-accent/90 text-white text-lg px-8 py-3 reveal-from-bottom delay-400">
                  Book Free Demo Class
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Why Trinity Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
                Why Choose <span className="text-music-accent">Trinity College London</span> Certification?
              </h2>
              <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
                Trinity College London is one of the world's leading music examination boards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
                <p className="text-music-dark/70">Internationally recognized qualifications accepted worldwide</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Structured Learning</h3>
                <p className="text-music-dark/70">Progressive curriculum from Initial to Grade 8 & diplomas</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-music-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Portfolio Assessment</h3>
                <p className="text-music-dark/70">Flexible assessment options including digital submissions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Programs */}
        <section className="py-20 bg-music-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
                Trinity <span className="text-music-accent">Certification</span> Programs
              </h2>
              <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
                Choose from our specialized preparation courses for different Trinity pathways
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Piano Certification */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Trinity Piano Certification" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Piano
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    All Grades
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Trinity Piano Certification</h3>
                  <p className="text-music-dark/70 text-sm">Classical piano grades Initial to Grade 8 & beyond</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">Exam Components:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Three contrasting pieces from Trinity syllabus</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Technical work: scales, arpeggios, studies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Sight-reading and musical knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Aural skills and improvisation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹450-550/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Start Prep
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rock & Pop Vocals */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-200">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Trinity Rock Pop Vocals" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Rock & Pop
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Grade 1-8
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Trinity Rock & Pop Vocals</h3>
                  <p className="text-music-dark/70 text-sm">Contemporary vocal performance certification</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">Exam Components:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Three songs from Trinity Rock & Pop syllabus</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Technical exercises and vocal techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Improvisation and interpretation skills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Session skills and performance craft</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹450-550/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Start Prep
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Classical Vocals */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom delay-400">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Trinity Classical Vocals" 
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Classical
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    Grade 1-8
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">Trinity Classical Vocals</h3>
                  <p className="text-music-dark/70 text-sm">Traditional classical vocal performance certification</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">Exam Components:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Classical songs and arias from Trinity syllabus</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Vocal exercises and technical studies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Sight-singing and musical knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                          <span>Language pronunciation and diction</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-music-primary">₹450-550/class</span>
                      <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-music-primary hover:bg-music-primary/90">
                          Start Prep
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Grade Levels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
                Trinity <span className="text-music-accent">Grade Levels</span>
              </h2>
              <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
                Progressive pathway from beginner to professional level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { level: "Initial", description: "Complete beginner level", duration: "3-6 months" },
                { level: "Grade 1-2", description: "Foundation skills", duration: "6-12 months" },
                { level: "Grade 3-5", description: "Intermediate development", duration: "1-2 years" },
                { level: "Grade 6-8", description: "Advanced performance", duration: "2-3 years" }
              ].map((grade, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 reveal-from-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-music-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-music-dark">{grade.level}</h3>
                    <p className="text-music-dark/70 text-sm">{grade.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-music-light p-3 rounded-lg">
                      <p className="text-sm font-medium text-music-primary">Typical Duration</p>
                      <p className="text-music-dark/70 text-sm">{grade.duration}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-music-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
                Our <span className="text-music-accent">Trinity Prep</span> Advantages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center reveal-from-bottom">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Expert Guidance</h3>
                <p className="text-music-dark/70 text-sm">Trinity-experienced instructors</p>
              </div>
              <div className="text-center reveal-from-bottom delay-200">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-music-dark/70 text-sm">Exam-focused timetables</p>
              </div>
              <div className="text-center reveal-from-bottom delay-400">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Comprehensive Materials</h3>
                <p className="text-music-dark/70 text-sm">Official Trinity syllabi & resources</p>
              </div>
              <div className="text-center reveal-from-bottom delay-600">
                <div className="bg-music-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-music-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">High Success Rate</h3>
                <p className="text-music-dark/70 text-sm">95%+ student pass rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-music-primary to-music-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom">
              Ready to Earn Your Trinity Certification?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Join our specialized Trinity preparation program and achieve internationally recognized music qualifications.
            </p>
            <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer">
              <Button className="bg-music-accent hover:bg-music-accent/90 text-white text-lg px-8 py-3 reveal-from-bottom delay-400">
                Start Your Trinity Journey Today
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

export default TrinityCertification;
