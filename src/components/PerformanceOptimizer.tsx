
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical hero image (LCP element)
    const preloadHeroImage = () => {
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.as = 'image';
      heroImageLink.href = 'https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg';
      heroImageLink.fetchPriority = 'high';
      document.head.appendChild(heroImageLink);
    };

    // Add resource hints for performance
    const addResourceHints = () => {
      const domains = ['fonts.googleapis.com', 'fonts.gstatic.com', 'calendly.com', 'www.learningandthebrain.com'];
      
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const preconnectDomains = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFontLoading = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[src*="calendly"], script[src*="analytics"]');
      scripts.forEach(script => {
        if (!script.hasAttribute('defer')) {
          script.setAttribute('defer', 'true');
        }
      });
    };

    // Execute optimizations
    preloadHeroImage();
    addResourceHints();
    optimizeFontLoading();
    deferNonCriticalScripts();

    // Cleanup function
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        if (link.getAttribute('as') === 'image') {
          setTimeout(() => {
            if (link.parentNode) {
              link.remove();
            }
          }, 10000);
        }
      });
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
