
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
      const domains = [
        'fonts.googleapis.com', 
        'fonts.gstatic.com', 
        'calendly.com', 
        'www.learningandthebrain.com',
        'images.unsplash.com',
        'cdn.prod.website-files.com',
        'braindevs.net',
        'www.ed2go.com',
        'www.accesscreative.ac.uk',
        'wpvip.edutopia.org',
        'www.sac.ac.in',
        'www.whistlingwoods.net'
      ];
      
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const preconnectDomains = [
        'https://fonts.googleapis.com', 
        'https://fonts.gstatic.com',
        'https://calendly.com'
      ];
      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize font loading with font-display: swap
    const optimizeFontLoading = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Add font-display: swap to existing font links
      const existingFontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      existingFontLinks.forEach(link => {
        if (!link.href.includes('display=swap')) {
          const url = new URL(link.href);
          url.searchParams.set('display', 'swap');
          link.href = url.toString();
        }
      });
    };

    // Mobile-specific optimizations
    const mobileOptimizations = () => {
      // Reduce animation complexity on mobile
      if (window.innerWidth <= 768) {
        const style = document.createElement('style');
        style.textContent = `
          .note-animation {
            animation-duration: 8s !important;
            animation-timing-function: ease-out !important;
          }
          .reveal-from-bottom, .reveal-from-left, .reveal-from-right {
            transition-duration: 0.4s !important;
          }
        `;
        document.head.appendChild(style);
      }

      // Add viewport meta tag if missing
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
        document.head.appendChild(viewport);
      }
    };

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      const scripts = document.querySelectorAll('script[src*="calendly"], script[src*="analytics"], script[src*="gtag"]');
      scripts.forEach(script => {
        if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
          script.setAttribute('defer', 'true');
        }
      });
    };

    // Lazy load images below the fold
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('image-placeholder');
                imageObserver.unobserve(img);
              }
            }
          });
        }, { rootMargin: '50px' });

        // Observe images that should be lazy loaded
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
      }
    };

    // Critical rendering path optimizations
    const optimizeCriticalPath = () => {
      // Inline critical CSS for above-the-fold content
      const criticalCSS = `
        .hero-critical { min-height: 100vh; background: linear-gradient(135deg, #f7fafc 0%, white 100%); }
        .btn-primary { background: #1a365d; color: white; padding: 1rem 2rem; border-radius: 0.5rem; font-weight: 600; min-height: 48px; }
        .hero-text-gradient { background: linear-gradient(135deg, #2d3748 0%, #1a365d 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    };

    // Execute optimizations based on priority
    optimizeCriticalPath(); // Highest priority
    preloadHeroImage();
    addResourceHints();
    optimizeFontLoading();
    mobileOptimizations();
    
    // Lower priority optimizations - defer slightly
    setTimeout(() => {
      deferNonCriticalScripts();
      setupLazyLoading();
    }, 100);

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
