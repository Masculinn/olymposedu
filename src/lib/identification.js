const json_default = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  sameAs: [
    "https://www.instagram.com/olymposedu",
    "https://www.linkedin.com/company/olympos-edu/about/",
  ],
  logo: "https://example.com/edu-logo.png",
  provider: {
    "@type": "EducationalOrganization",
    name: "Olymposedu Eğitim Danışmanlık",
    url: "https://olymposedu.com",
    logo: "https://olymposedu.com/edu-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48 690 148 044",
      contactType: "Customer Service",
      areaServed: "PL",
      availableLanguage: "Turkish",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marszałkowska 83",
      addressLocality: "Warsaw",
      postalCode: "00-683",
      addressCountry: "PL",
    },
  },
};

const seo_default = {
  facebook: {
    handle: "@olymposedu",
    site: "@olymposedu",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "author",
      content: "Olympos Edu",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "geo.country",
      content: "PL",
    },
    {
      name: "geo.placename",
      content: "Poland",
    },
  ],
};

export { json_default, seo_default };
