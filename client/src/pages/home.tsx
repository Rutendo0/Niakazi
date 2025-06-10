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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <KeyFeaturesSection />
      <ServicesSection />
      <ConnectivitySection />
      <CloudServicesSection />
      <SecuritySection />
      <HardwareSoftwareSection />
      <TrainingSection />
      <ValueAddedServicesSection />
      <IndustriesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
