
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderImage from '../components/FounderImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Mic, Piano, Music, Clock, Users, CheckCircle, Star, BookOpen } from 'lucide-react';

const Courses = () => {
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-music-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-music-dark reveal-from-bottom">
              Our <span className="text-music-accent">Music</span> Courses
            </h1>
            <p className="text-xl text-music-dark/70 max-w-3xl mx-auto reveal-from-bottom delay-200">
              Explore our comprehensive range of courses designed for all ages and skill levels - from beginners to advanced performers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center reveal-from-bottom">
              <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-music-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
              <p className="text-music-dark/70">15+ years of teaching experience</p>
            </div>
            <div className="text-center reveal-from-bottom delay-200">
              <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-music-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Programs</h3>
              <p className="text-music-dark/70">Trinity, ABRSM & Rockschool prep</p>
            </div>
            <div className="text-center reveal-from-bottom delay-400">
              <div className="bg-music-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-music-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Timing</h3>
              <p className="text-music-dark/70">Global students, any timezone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Western Singing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
              🎙 <span className="text-music-accent">Western Singing</span> Courses
            </h2>
            <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Master the art of Western vocals with our comprehensive three-level program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {westernSingingCourses.map((course, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden reveal-from-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {course.level}
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {course.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Western Singing</span>
                  </div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-music-dark/70 text-sm">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        {course.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-music-dark/70">1-on-1</span>
                      <span className="text-lg font-bold text-music-primary">₹{course.price1on1}/class</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-music-dark/70">Group</span>
                      <span className="text-lg font-bold text-music-primary">₹{course.priceGroup}/class</span>
                    </div>
                  </div>
                  <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="bg-music-primary hover:bg-music-primary/90 text-white w-full">
                      Book Demo Class
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Piano Section */}
      <section className="py-20 bg-music-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
              🎹 <span className="text-music-accent">Piano</span> Courses
            </h2>
            <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Learn classical and contemporary piano with professional guidance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pianoCourses.map((course, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden reveal-from-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {course.level}
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {course.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Piano className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Piano & Keyboard</span>
                  </div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-music-dark/70 text-sm">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        {course.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-music-dark/70">1-on-1</span>
                      <span className="text-lg font-bold text-music-primary">₹{course.price1on1}/class</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-music-dark/70">Group</span>
                      <span className="text-lg font-bold text-music-primary">₹{course.priceGroup}/class</span>
                    </div>
                  </div>
                  <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="bg-music-primary hover:bg-music-primary/90 text-white w-full">
                      Book Demo Class
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bollywood Singing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
              🎤 <span className="text-music-accent">Bollywood Singing</span> Courses
            </h2>
            <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
              Master the art of Bollywood vocals with traditional and contemporary techniques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {bollywoodSingingCourses.map((course, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden reveal-from-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {course.level}
                  </div>
                  <div className="absolute top-4 right-4 bg-music-primary text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {course.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="w-5 h-5 text-music-primary" />
                    <span className="text-sm font-medium text-music-primary">Bollywood Singing</span>
                  </div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-music-dark/70 text-sm">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-music-dark mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1 text-sm text-music-dark/70">
                        {course.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-music-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-music-dark/70">1-on-1</span>
                      <span className="text-lg font-bold text-music-primary">₹{course.price1on1}/class</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-music-dark/70">Group</span>
                      <span className="text-lg font-bold text-music-primary">₹{course.priceGroup}/class</span>
                    </div>
                  </div>
                  <a href="https://calendly.com/kamleshsagar1/music-lessons" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="bg-music-primary hover:bg-music-primary/90 text-white w-full">
                      Book Demo Class
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-music-primary to-music-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom">
            Ready to Begin Your Musical Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto reveal-from-bottom delay-200">
            Whether you're picking up music for the first time or returning to it after years, we're here to guide you with patience, professionalism, and passion.
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
  );
};

const westernSingingCourses = [
  {
    title: "Level 1 - Beginner's Vocal Discovery",
    level: "Beginner",
    duration: "3 Months",
    description: "Perfect for complete beginners exploring Western music including Pop, Indie, and Soft Rock.",
    image: "https://www.ed2go.com/common/images/1/17216/music-class.jpg",
    features: [
      "Vocal warm-ups and posture for healthy singing",
      "Diaphragmatic breathing for control and stability",
      "Introduction to staff notation (reading notes & rhythm)",
      "Simple English songs: 'Imagine', 'Let It Go', 'Count on Me'",
      "Singing scales and interval training",
      "Pitch accuracy using digital tuners",
      "Rhythm training through clapping and tapping exercises",
      "Confidence-building with mic and camera"
    ],
    price1on1: "399",
    priceGroup: "350"
  },
  {
    title: "Level 2 - Intermediate Harmony & Expression",
    level: "Intermediate",
    duration: "3-4 Months",
    description: "For students with basic experience, focusing on vocal tone, harmony, and Trinity/Rockschool Grade 2-3 prep.",
    image: "https://www.accesscreative.ac.uk/wp-content/uploads/2024/09/Guitarist-writing-a-song-1.jpg",
    features: [
      "Vocal range extension exercises",
      "Harmony singing – thirds, fifths, and basic chords",
      "Advanced breathing and phrasing techniques",
      "Song interpretation and dynamic control",
      "Staff reading: key signatures, rests, and note values",
      "Genres: Pop, Gospel, Acoustic Rock",
      "Duets and ensemble singing basics",
      "Mic technique for live vs studio setups"
    ],
    price1on1: "450",
    priceGroup: "450"
  },
  {
    title: "Level 3 - Advanced Performer & Certification",
    level: "Advanced",
    duration: "4-5 Months",
    description: "For serious learners preparing for advanced performance, music exams, or content creation.",
    image: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/Hero_Feature_Brain-Music_2880x1620.jpg",
    features: [
      "Tone shaping – vibrato, falsetto, mixed voice techniques",
      "Advanced interpretation & storytelling through song",
      "Complex rhythm reading and syncopation",
      "Exam-specific repertoire (Trinity/Rockschool)",
      "Creating your vocal demo reel or YouTube cover",
      "Studio singing technique: layering, pitch correction",
      "Building stamina for long performances",
      "Audition prep and performance anxiety handling"
    ],
    price1on1: "499",
    priceGroup: "500"
  }
];

const pianoCourses = [
  {
    title: "Level 1 - Beginner's Foundations",
    level: "Beginner",
    duration: "3 Months",
    description: "Perfect for absolute beginners and hobbyists starting their classical piano journey.",
    image: "https://www.sac.ac.in/media/music-production.jpg",
    features: [
      "Piano keyboard layout and posture",
      "Right-hand and left-hand independence",
      "C major scale and beginner finger exercises",
      "Reading music using staff notation (treble clef)",
      "Simple songs in C major (both English and Hindi tunes)",
      "Introduction to rhythm: quarter, half, whole notes",
      "Dynamics: playing loud and soft with control"
    ],
    price1on1: "399",
    priceGroup: "350"
  },
  {
    title: "Level 2 - Intermediate Skills & Repertoire",
    level: "Intermediate",
    duration: "3-4 Months",
    description: "Develop better coordination, play with both hands, and prepare for Trinity Grade 1-2 exams.",
    image: "https://www.whistlingwoods.net/wp-content/uploads/2023/06/2O5A2227.jpg",
    features: [
      "Scales: G major, F major (hands together)",
      "Sight-reading and note-reading drills",
      "Playing pieces from beginner classical repertoire",
      "Hindi/English melodies with left-hand chords",
      "Dynamics and articulation: staccato, legato, phrasing",
      "Understanding time signatures and bar lines",
      "Ear training and rhythmic clapping"
    ],
    price1on1: "450",
    priceGroup: "450"
  },
  {
    title: "Level 3 - Advanced Musicality & Certification",
    level: "Advanced",
    duration: "4-5 Months",
    description: "For serious learners who want to perform, compose, or appear for advanced grade exams.",
    image: "https://www.ed2go.com/common/images/1/17216/music-class.jpg",
    features: [
      "Playing in 3+ scales with sharps/flats",
      "Advanced technique: arpeggios, broken chords, finger crossing",
      "Staff reading: bass clef + complex rhythms",
      "Classical and contemporary pieces (Grade 3–5 level)",
      "Interpretation: rubato, dynamics, articulation styles",
      "Duets and ensemble-style piano arrangements",
      "Preparing for recitals, video recordings, and exams"
    ],
    price1on1: "499",
    priceGroup: "500"
  }
];

const bollywoodSingingCourses = [
  {
    title: "Level 1 - Beginner's Vocal Journey",
    level: "Beginner",
    duration: "3 Months",
    description: "Specially designed for students with no prior singing experience, focusing on pitch correction and sur-taal awareness.",
    image: "https://www.accesscreative.ac.uk/wp-content/uploads/2024/09/Guitarist-writing-a-song-1.jpg",
    features: [
      "Understanding the 7 basic notes (Sa Re Ga Ma Pa Dha Ni Sa)",
      "Voice tuning exercises – identify & sing correct pitch",
      "Breathing techniques for stable notes & better tone",
      "Voice warm-up routines – daily vocal fitness",
      "Basic Sur-Alankars (patterns of notes) to build accuracy",
      "Pitch Correction using Tanpura & Digital Tools",
      "Singing simple Bollywood songs on pitch",
      "Introduction to Rhythm (Taal) using Clap exercises"
    ],
    price1on1: "399",
    priceGroup: "350"
  },
  {
    title: "Level 2 - Intermediate Training & Performance",
    level: "Intermediate",
    duration: "3-4 Months",
    description: "Ideal for students with foundational knowledge, focusing on refining voice and building control.",
    image: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/Hero_Feature_Brain-Music_2880x1620.jpg",
    features: [
      "Vocal Projection & Expansion – fuller & stronger voice",
      "Voice Modulation Techniques – sing softly, loudly, emotionally",
      "Intermediate Alankars – with meend, khatka, murki",
      "Raag-based Bollywood Songs – Yaman, Bhairavi, Desh influence",
      "Singing with Karaoke/Backing Tracks – timing, energy & presence",
      "Layered Breathing Exercises – improve voice stamina",
      "Emotional Expression & Storytelling – feel the lyrics",
      "Understanding Mic Techniques – studio & live singing"
    ],
    price1on1: "450",
    priceGroup: "450"
  },
  {
    title: "Level 3 - Advanced Playback & Performance",
    level: "Advanced",
    duration: "4-5 Months",
    description: "Built for singers ready to elevate their voice to professional standard for studio recordings and live shows.",
    image: "https://www.sac.ac.in/media/music-production.jpg",
    features: [
      "Advanced Voice Modulation – falsetto, belting, vibrato control",
      "Raag-based Interpretations – deeper work with classical ragas",
      "Breath Management for Long Phrases – pranayama integration",
      "Improvisation Techniques – alaaps, taans, sargam variations",
      "Semi-Classical to Contemporary Transitions",
      "Mic Technique Mastery – dynamic vs condenser mic",
      "Camera Confidence & Body Language",
      "Studio Singing Practice – vocal layering, click track"
    ],
    price1on1: "499",
    priceGroup: "500"
  }
];

export default Courses;
