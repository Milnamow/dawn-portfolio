export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dawn Milnamow",
          jobTitle: "Software Engineer",
          url: "https://www.dawnmilnamow.com", // your domain
          sameAs: [
            "https://www.linkedin.com/in/dawnmilnamow",
            "https://github.com/dawnmil"
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hockessin",
            addressRegion: "DE",
            postalCode: "19707",
            addressCountry: "US"
          },
          homeLocation: {
            "@type": "PostalAddress",
            addressLocality: "Saint Petersburg",
            addressRegion: "FL",
            postalCode: "33710",
            addressCountry: "US"
          },
          description: "Full-stack software engineer.",
          image: "https://www.dawnmilnamow.com/images/dawnmilnamow.jpg"
        }),
      }}
    />
  );
}