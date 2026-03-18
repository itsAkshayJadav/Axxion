import { AnnouncementBar } from "./announcement-bar";
import { CaseStudiesSection } from "./case-studies-section";
import { ComparisonSection } from "./comparison-section";
import { ContactSection } from "./contact-section";
import { HeroSection } from "./hero-section";
import { PricingSection } from "./pricing-section";
import { ProcessSection } from "./process-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { TestimonialsSection } from "./testimonials-section";
import { WhyUsSection } from "./why-us-section";

export function HomePage() {
  return (
    <div className="relative overflow-x-clip text-white">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <ProcessSection />
        <ComparisonSection />
        <CaseStudiesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
