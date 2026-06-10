const ORG_NAME = "Lewis & De Kroon Inc";
const ORG_ALT = "LDK";
const ORG_URL = "/";
const PHONE = "+27 21 423 9090";
const EMAIL = "info@ldk.co.za";

const address = {
  "@type": "PostalAddress",
  streetAddress: "PO Box 15088",
  addressLocality: "Vlaeberg, Cape Town",
  postalCode: "8018",
  addressCountry: "ZA",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${ORG_URL}#organization`,
    name: ORG_NAME,
    alternateName: ORG_ALT,
    url: ORG_URL,
    logo: `${ORG_URL}#logo`,
    description:
      "Structural and civil engineering consultants delivering healthcare, government and commercial projects across South Africa since 1984.",
    telephone: PHONE,
    email: EMAIL,
    foundingDate: "1984",
    address,
    sameAs: [] as string[],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${ORG_URL}#localbusiness`,
    name: ORG_NAME,
    url: ORG_URL,
    telephone: PHONE,
    email: EMAIL,
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9249,
      longitude: 18.4241,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$$",
    areaServed: {
      "@type": "Place",
      name: "Western Cape, South Africa",
    },
  };
}

export function webpageSchema(
  path: string,
  title: string,
  description: string,
  type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" = "WebPage"
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${path}#webpage`,
    url: path,
    name: title,
    description,
    isPartOf: {
      "@id": `${ORG_URL}#website`,
    },
    about: {
      "@id": `${ORG_URL}#organization`,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${ORG_URL}#website`,
    url: ORG_URL,
    name: ORG_NAME,
    publisher: {
      "@id": `${ORG_URL}#organization`,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}
