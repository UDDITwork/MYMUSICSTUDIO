
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "My Music Studio | Best Online Music Classes - Piano, Singing, Keyboard",
  description = "Learn Piano, Keyboard, Bollywood Singing & Western Vocals online with certified instructors. Trinity, ABRSM & Rockschool prep. Affordable fees, flexible timing, global students. Book free demo class!",
  keywords = "online music classes, piano lessons, keyboard classes, bollywood singing, western vocals, trinity music, ABRSM, rockschool, online music teacher, affordable music classes, learn piano online, singing lessons",
  image = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80",
  url = "https://mymusicstudio.com",
  type = "website",
  author = "Kamlesh Sagar",
  noindex = false,
  canonicalUrl,
  structuredData
}) => {
  const siteUrl = "https://mymusicstudio.com";
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const canonical = canonicalUrl || fullUrl;

  // Default structured data for the organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    "name": "My Music Studio",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "founder": {
      "@type": "Person",
      "name": "Kamlesh Sagar",
      "email": "kamleshsagar1@gmail.com",
      "telephone": "+91-8459326365"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8459326365",
      "contactType": "customer service",
      "email": "kamleshsagar1@gmail.com"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Piano Lessons",
        "description": "Online piano and keyboard classes for all levels",
        "price": "350",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Western Singing Classes",
        "description": "Professional western vocal training online",
        "price": "350",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Bollywood Singing Classes", 
        "description": "Learn Bollywood vocals with certified instructors",
        "price": "350",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    ],
    "areaServed": [
      "India", "Singapore", "Canada", "United States", "Global"
    ],
    "serviceType": "Online Music Education",
    "priceRange": "₹350-₹750"
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots Meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="My Music Studio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="hi_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@mymusicstudio" />
      <meta name="twitter:site" content="@mymusicstudio" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="My Music Studio" />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="ICBM" content="28.6139,77.2090" />

      {/* Business Information */}
      <meta name="contact" content="kamleshsagar1@gmail.com" />
      <meta name="reply-to" content="kamleshsagar1@gmail.com" />
      <meta name="owner" content="Kamlesh Sagar" />
      <meta name="url" content={siteUrl} />
      <meta name="identifier-URL" content={siteUrl} />
      <meta name="category" content="Education, Music, Online Learning" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Language and Regional */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />

      {/* Cache Control */}
      <meta httpEquiv="cache-control" content="public, max-age=31536000" />
      <meta httpEquiv="expires" content="Wed, 26 Feb 2025 08:21:57 GMT" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://calendly.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//google-analytics.com" />
      <link rel="dns-prefetch" href="//googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Helmet>
  );
};

export default SEO;
