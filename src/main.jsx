import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Yafet Abebe - Full-stack Web & Mobile App Developer | Freelancer</title>
        <meta name="description" content="Yafet Abebe is an experienced Full-stack Web and Mobile App Developer offering freelance services. Specializing in React, Flutter, Spring Boot, and creating robust digital solutions for good business. Based in Ethiopia." />
        <meta name="keywords" content="Yafet Abebe, Web Developer, Mobile App Developer, Full-stack Developer, Freelancer, React Developer, Flutter Developer, Spring Boot, PHP, Java, JavaScript, Tailwind CSS, Material UI, UI/UX, Web App, Mobile App, Android Developer, iOS Developer, Ethiopia Developer, Addis Ababa Developer, Software Developer, Capsule App, Nike Landing Page" />
        <meta name="author" content="Yafet Abebe" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yafet.netlify.app/" />
        <meta property="og:title" content="Yafet Abebe - Full-stack Web & Mobile App Developer | Freelancer" />
        <meta property="og:description" content="Yafet Abebe is an experienced Full-stack Web and Mobile App Developer offering freelance services. Specializing in React, Flutter, Spring Boot, and creating robust digital solutions for good business. Based in Ethiopia." />
        <meta property="og:image" content="https://yafet.netlify.app/profile_bg.png" /> {/* Verify this image path */}
        <meta property="og:image:alt" content="Yafet Abebe Portfolio Profile Image" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yafet.netlify.app/" />
        <meta property="twitter:title" content="Yafet Abebe - Full-stack Web & Mobile App Developer | Freelancer" />
        <meta property="twitter:description" content="Yafet Abebe is an experienced Full-stack Web & Mobile App Developer offering freelance services. Specializing in React, Flutter, Spring Boot, & robust digital solutions." />
        <meta property="twitter:image" content="https://yafet.netlify.app/profile_bg.png" /> {/* Verify this image path */}
        <meta property="twitter:creator" content="@YourTwitterHandle" /> {/* Replace with Yafet's Twitter handle if he has one */}

        {/* Canonical Tag */}
        <link rel="canonical" href="https://yafet.netlify.app/" />

        {/* Schema Markup (JSON-LD) for Person and Professional Service */}
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Yafet Abebe",
                "jobTitle": "Full-stack Web & Mobile App Developer",
                "url": "https://yafet.netlify.app/",
                "email": "yafetema15@gmail.com",
                "telephone": "+251-929-34-42-95",
                "gender": "male",
                "description": "Yafet Abebe is an experienced Full-stack Web and Mobile App Developer offering freelance services. Specializing in React, Flutter, Spring Boot, and creating robust digital solutions.",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelancer"
                },
                "knowsLanguage": ["English", "Amharic"],
                "nationality": "Ethiopian",
                "alumniOf": [],
                "sameAs": [
                  // Add Yafet's actual social media and professional profiles here
                  // "https://www.linkedin.com/in/yafetabebe",
                  // "https://github.com/yafetabebe",
                  // "https://twitter.com/yafetabebe"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Yafet Abebe - Full-stack Development Services",
                "description": "Offering expert freelance services in web development, mobile app development, and full-stack solutions using technologies like React, Flutter, Spring Boot, and more.",
                "url": "https://yafet.netlify.app/",
                "image": "https://yafet.netlify.app/profile_bg.png", // Use a suitable image
                "telephone": "+251-929-34-42-95",
                "email": "yafetema15@gmail.com",
                "serviceType": ["Web Development", "Mobile App Development", "Full-stack Development", "Freelance Software Development"],
                "areaServed": {
                  "@type": "Place",
                  "name": "Global"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Development Services",
                  "itemListElement": [
                    {
                      "@type": "OfferCatalog",
                      "name": "Web Development",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Frontend Web Development (React)"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Backend Web Development (Spring Boot, PHP)"
                          }
                        }
                      ]
                    },
                    {
                      "@type": "OfferCatalog",
                      "name": "Mobile App Development",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Cross-platform Mobile App Development (Flutter)"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Android App Development"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          `}
        </script>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)