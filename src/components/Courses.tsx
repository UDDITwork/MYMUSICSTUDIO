import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Mic, Piano, Guitar, Music } from './Icons';

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
    <section className="py-20 bg-music-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-dark reveal-from-bottom">
            Our <span className="text-music-accent">Music</span> Courses
          </h2>
          <p className="text-lg text-music-dark/70 max-w-2xl mx-auto reveal-from-bottom delay-200">
            Explore our range of courses designed for all ages and skill levels - from beginners to advanced performers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden reveal-from-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-music-accent text-white text-sm font-semibold py-1 px-3 rounded-full">
                  {course.level}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <course.icon className="w-5 h-5 text-music-primary" />
                  <span className="text-sm font-medium text-music-primary">{course.category}</span>
                </div>
                <h3 className="text-xl font-bold">{course.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-music-dark/70">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-music-accent mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                <div>
                  <span className="text-sm text-music-dark/70">Starting from</span>
                  <p className="text-xl font-bold text-music-primary">₹{course.price}/class</p>
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

        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="outline" className="border-music-primary text-music-primary hover:bg-music-primary/10 reveal-from-bottom">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const courses = [
  {
    icon: Mic,
    title: "Bollywood Singing",
    category: "Vocal Training",
    level: "All Levels",
    price: "350",
    image: "https://cdn.prod.website-files.com/65a997ed5f68daf1805ed393/65a9ce3036d69de028e61d73_65a047f193e982d20ab5a4e8_image1.jpeg",
    features: [
      "Learn 7 basic notes (Sa Re Ga Ma Pa Dha Ni)",
      "Voice tuning & pitch correction",
      "Breathing techniques for stable notes",
      "1:1 Voice Analysis session"
    ]
  },
  {
    icon: Piano,
    title: "Piano & Keyboard",
    category: "Instrumental",
    level: "Beginner to Advanced",
    price: "550",
    image: "https://braindevs.net/blog//wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg",
    features: [
      "Piano keyboard layout and posture",
      "Reading music using staff notation",
      "Right & left-hand independence",
      "Trinity/ABRSM exam preparation"
    ]
  },
  {
    icon: Music,
    title: "Western Singing",
    category: "Vocal Training",
    level: "Foundation to Professional",
    price: "550",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    features: [
      "Vocal warm-ups and posture",
      "Diaphragmatic breathing techniques",
      "Staff notation and rhythm training",
      "Rockschool certification courses"
    ]
  },
];

export default Courses;
