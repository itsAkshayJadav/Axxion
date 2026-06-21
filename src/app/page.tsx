import { HomePage } from "@/components/site/home/home-page";
import { COMPANY_EMAIL, pricingTiers, services } from "@/content/home";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");
const webpageId = absoluteUrl("/#webpage");

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/axxion-logo.png"),
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    email: COMPANY_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    areaServed: [
      { "@type": "Country", name: "Australia" },
      { "@type": "Place", name: "Remote clients" },
    ],
    knowsAbout: services.map((service) => service.title),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@id": organizationId,
        },
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": organizationId,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId,
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": organizationId,
    },
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Axxion engagement models",
      itemListElement: pricingTiers.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        description: tier.summary,
        category: tier.idealFor,
        itemOffered: {
          "@type": "Service",
          name: tier.name,
          provider: {
            "@id": organizationId,
          },
        },
      })),
    },
  },
];

export default function Page() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <HomePage />
    </>
  );
}
