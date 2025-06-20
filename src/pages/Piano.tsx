
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

        <Footer />
        <FounderImage />
      </main>
    </>
  );
};

export default PianoPage;
