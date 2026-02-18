import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ExpertiseSection } from "@/components/landing/ExpertiseSection";
import { CTASection } from "@/components/landing/CTASection";

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertiseSection />
      <CTASection />
    </>
  );
}
