
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOOptimized = ({
  title = "My Music Studio | Online Music Classes - Piano, Singing, Trinity Certified",
  description = "Learn Piano, Western Singing & Bollywood Vocals online with Trinity certified instructors. 15+ years experience. Book free demo class. Global students welcome.",
  keywords = "online music classes India, piano lessons online, western singing course, bollywood vocal training, Trinity music certification, music teacher online, affordable music classes",
  image = "https://mymusicstudio.in/logo.png",
  url = "https://mymusicstudio.in",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Kamlesh Sagar" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="My Music Studio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "My Music Studio",
          "alternateName": "Online Music Classes",
          "description": description,
          "url": url,
          "logo": `${url}/logo.png`,
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "Kamlesh Sagar",
            "jobTitle": "Music Instructor",
            "worksFor": {
              "@type": "Organization",
              "name": "My Music Studio"
            }
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8459326365",
            "contactType": "customer service",
            "email": "kamleshsagar1@gmail.com",
            "availableLanguage": ["English", "Hindi"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "India"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "India"
            },
            {
              "@type": "Country", 
              "name": "Singapore"
            },
            {
              "@type": "Country",
              "name": "Canada"
            },
            {
              "@type": "Country",
              "name": "United States"
            }
          ],
          "offers": [
            {
              "@type": "Offer",
              "name": "Piano Classes Online",
              "description": "Learn piano with Trinity certified instructor",
              "price": "550",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `${url}/courses#piano`
            },
            {
              "@type": "Offer",
              "name": "Western Singing Classes",
              "description": "Professional western vocal training online",
              "price": "550", 
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `${url}/courses#western-singing`
            },
            {
              "@type": "Offer",
              "name": "Bollywood Singing Classes",
              "description": "Learn Bollywood vocals with classical techniques",
              "price": "550",
              "priceCurrency": "INR", 
              "availability": "https://schema.org/InStock",
              "url": `${url}/courses#bollywood-singing`
            }
          ],
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Student"
              },
              "reviewBody": "Excellent online music classes with professional instructors."
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "50",
            "bestRating": "5"
          }
        })}
      </script>

      {/* Course Specific Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Online Music Classes - Piano, Singing & Vocals",
          "description": "Comprehensive online music education including Piano, Western Singing, and Bollywood Vocals",
          "provider": {
            "@type": "Organization",
            "name": "My Music Studio",
            "sameAs": url
          },
          "courseMode": "online",
          "educationalLevel": "Beginner to Advanced",
          "teaches": [
            "Piano playing techniques",
            "Western vocal training", 
            "Bollywood singing methods",
            "Music theory and notation",
            "Trinity grade preparation"
          ],
          "hasCourseInstance": [
            {
              "@type": "CourseInstance",
              "courseMode": "online",
              "instructor": {
                "@type": "Person",
                "name": "Kamlesh Sagar",
                "description": "Trinity certified music instructor with 15+ years experience"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimized;
