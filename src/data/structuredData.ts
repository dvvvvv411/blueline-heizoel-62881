
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hackmann-Heizöl",
  "alternateName": "Hackmann & Comp. GmbH",
  "url": "https://hackmann-heizoel.de",
  "logo": "/lovable-uploads/treffer-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@hackmann-heizoel.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kampstr. 88 b",
    "addressLocality": "Hannover",
    "postalCode": "30629",
    "addressCountry": "DE"
  },
  "foundingDate": "1975",
  "numberOfEmployees": "10-50",
  "description": "Premium Heizöl ab 70 Cent pro Liter mit kostenloser Lieferung ab 2.000L deutschlandweit.",
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Heizöl",
      "description": "Premium Heizöl für Privat- und Geschäftskunden"
    },
    "price": "0.70",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hackmann-Heizöl",
  "image": "/lovable-uploads/treffer-logo.png",
  "@id": "https://hackmann-heizoel.de",
  "url": "https://hackmann-heizoel.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kampstr. 88 b",
    "addressLocality": "Hannover",
    "postalCode": "30629",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.4047,
    "longitude": 9.7681
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};
