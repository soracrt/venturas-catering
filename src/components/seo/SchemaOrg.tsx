export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FoodEstablishment", "LocalBusiness", "CateringService"],
        "@id": "https://venturascatering.my/#business",
        name: "Venturas Catering",
        url: "https://venturascatering.my",
        telephone: "+60123456789",
        email: "hello@venturascatering.my",
        description:
          "Premium Halal-certified catering for corporate events, weddings, and private occasions in Shah Alam, Selangor and Kuala Lumpur.",
        priceRange: "RM22 – RM200+ per pax",
        servesCuisine: ["Malaysian", "Western", "Asian Fusion", "Halal"],
        hasMenu: "https://venturascatering.my/menu",
        acceptsReservations: "True",
        currenciesAccepted: "MYR",
        paymentAccepted: "Cash, Bank Transfer, Online Banking",
        image: "https://venturascatering.my/images/og-image.jpg",
        logo: {
          "@type": "ImageObject",
          url: "https://venturascatering.my/images/logo.png",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shah Alam",
          addressLocality: "Shah Alam",
          addressRegion: "Selangor",
          postalCode: "40000",
          addressCountry: "MY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 3.0733,
          longitude: 101.5185,
        },
        areaServed: [
          { "@type": "City", name: "Shah Alam" },
          { "@type": "City", name: "Kuala Lumpur" },
          { "@type": "State", name: "Selangor" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "247",
          bestRating: "5",
        },
        sameAs: [
          "https://instagram.com/venturascatering",
          "https://facebook.com/venturascatering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://venturascatering.my/#website",
        url: "https://venturascatering.my",
        name: "Venturas Catering",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://venturascatering.my/menu?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
