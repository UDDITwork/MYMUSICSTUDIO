
import { useEffect } from 'react';

const AdvancedPerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical hero image (LCP element)
    const preloadCriticalImages = () => {
      const criticalImages = [
        'https://www.learningandthebrain.com/blog/wp-content/uploads/2017/05/AdobeStock_66165135_Credit.jpg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });
    };

    // Add comprehensive resource hints
    const addResourceHints = () => {
      const dnsPrefetchDomains = [
        'fonts.googleapis.com', 
        'fonts.gstatic.com', 
        'calendly.com', 
        'www.learningandthebrain.com',
        'images.unsplash.com',
        'pbs.twimg.com'
      ];
      
      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const preconnectDomains = [
        { href: 'https://fonts.googleapis.com', crossOrigin: false },
        { href: 'https://fonts.gstatic.com', crossOrigin: true }
      ];
      
      preconnectDomains.forEach(({ href, crossOrigin }) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossOrigin) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize font loading with font-display: swap
    const optimizeFontLoading = () => {
      const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      fontLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('display=swap')) {
          const separator = href.includes('?') ? '&' : '?';
          link.setAttribute('href', `${href}${separator}display=swap`);
        }
      });
    };

    // Defer non-critical third-party scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[src*="gtag"], script[src*="analytics"], script[src*="gtm"]');
      scripts.forEach(script => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          script.setAttribute('defer', 'true');
        }
      });
    };

    // Implement lazy loading for images below the fold
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      // Intersection Observer for lazy images
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      }, { rootMargin: '50px' });

      images.forEach(img => imageObserver.observe(img));
    };

    // Add canonical URL dynamically
    const addCanonicalUrl = () => {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (!existingCanonical) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = `https://www.mymusicstudio.in${window.location.pathname}`;
        document.head.appendChild(canonical);
      }
    };

    // Execute optimizations
    preloadCriticalImages();
    addResourceHints();
    optimizeFontLoading();
    deferNonCriticalScripts();
    optimizeImageLoading();
    addCanonicalUrl();

    // Add structured data for course pages
    const addStructuredData = () => {
      if (window.location.pathname.includes('/courses/')) {
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "EducationalCourse",
          "name": "Online Music Classes",
          "description": "Professional online music classes in piano, singing, and certification courses",
          "provider": {
            "@type": "Organization",
            "name": "My Music Studio",
            "sameAs": "https://www.mymusicstudio.in",
            "url": "https://www.mymusicstudio.in"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "startDate": "2025-01-01",
            "endDate": "2025-12-31",
            "location": {
              "@type": "VirtualLocation",
              "url": "https://www.mymusicstudio.in"
            }
          },
          "offers": {
            "@type": "Offer",
            "price": "99.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://calendly.com/kamleshsagar1/music-lessons"
          }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    };

    addStructuredData();

    // Cleanup function
    return () => {
      // Clean up any observers or event listeners if needed
    };
  }, []);

  return null;
};

export default AdvancedPerformanceOptimizer;
