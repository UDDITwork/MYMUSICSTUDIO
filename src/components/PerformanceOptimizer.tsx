
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.as = 'image';
      heroImageLink.href = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80&fm=webp';
      document.head.appendChild(heroImageLink);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Implement lazy loading for images below the fold
    const implementLazyLoading = () => {
      const images = document.querySelectorAll('img[data-lazy]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.lazy!;
            img.removeAttribute('data-lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        script.setAttribute('defer', 'true');
      });
    };

    // Add resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = ['fonts.googleapis.com', 'fonts.gstatic.com', 'calendly.com', 'images.unsplash.com'];
      
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    // Execute optimizations
    preloadCriticalResources();
    implementLazyLoading();
    optimizeThirdPartyScripts();
    addResourceHints();

    // Cleanup function
    return () => {
      // Remove preload links after they're no longer needed
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        if (link.getAttribute('as') === 'image') {
          setTimeout(() => {
            link.remove();
          }, 10000); // Remove after 10 seconds
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
