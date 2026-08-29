import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { OffersSlider } from "@/components/sections/OffersSlider";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { Destinations } from "@/components/sections/Destinations";
import { VisaServices } from "@/components/sections/VisaServices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SchengenCoverage } from "@/components/sections/SchengenCoverage";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaSection } from "@/components/sections/CtaSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <OffersSlider />
        <WhyChooseUs />
        <Services />
        <Destinations />
        <VisaServices />
        <HowItWorks />
        <SchengenCoverage />
        <ComparisonTable />
        <Testimonials />
        <Faq />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
