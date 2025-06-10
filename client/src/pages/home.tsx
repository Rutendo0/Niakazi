import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import KeyFeaturesSection from "@/components/key-features-section";
import ServicesSection from "@/components/services-section";
import ConnectivitySection from "@/components/connectivity-section";
import CloudServicesSection from "@/components/cloud-services-section";
import SecuritySection from "@/components/security-section";
import HardwareSoftwareSection from "@/components/hardware-software-section";
import TrainingSection from "@/components/training-section";
import ValueAddedServicesSection from "@/components/value-added-services-section";
import IndustriesSection from "@/components/industries-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";

export default function Home() {
  return (
    <PageTransition className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AnimatedSection delay={0.2}>
        <KeyFeaturesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ConnectivitySection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <CloudServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <SecuritySection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <HardwareSoftwareSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <TrainingSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ValueAddedServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <IndustriesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </PageTransition>
  );
}
