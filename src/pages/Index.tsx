
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import OptimizedHero from '../components/OptimizedHero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import OptimizedFounderImage from '../components/OptimizedFounderImage';
import WhatsAppFloat from '../components/WhatsAppFloat';
import AdvancedPerformanceOptimizer from '../components/AdvancedPerformanceOptimizer';
import SEO from '../components/SEO';

const Index = () => {
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
      <SEO />
      <AdvancedPerformanceOptimizer />
      <main className="min-h-screen bg-white">
        <Navbar />
        <OptimizedHero />
        <Features />
        <About />
        <Courses />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Footer />
        <OptimizedFounderImage />
        <WhatsAppFloat />
      </main>
    </>
  );
};

export default Index;
