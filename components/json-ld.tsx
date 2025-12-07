export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abduvokhid.dev";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abduvokhid Akhmedov",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: "Software Engineering Leader",
    description:
      "Software Engineering Leader specializing in FinTech, BNPL, Payments, and Cybersecurity.",
    knowsAbout: [
      "Software Engineering",
      "FinTech",
      "BNPL",
      "Payment Systems",
      "Cybersecurity",
      "Core Banking Systems",
      "System Architecture",
      "Technical Leadership",
    ],
    sameAs: [
      "https://github.com/abduvokhid",
      "https://linkedin.com/in/abduvokhid",
      "https://twitter.com/abduvokhid",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abduvokhid Akhmedov",
    url: siteUrl,
    description:
      "Personal portfolio of Abduvokhid Akhmedov - Software Engineering Leader",
    author: {
      "@type": "Person",
      name: "Abduvokhid Akhmedov",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
