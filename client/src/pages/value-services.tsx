import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import ValueAddedServicesSection from "@/components/value-added-services-section";

export default function ValueServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <ValueAddedServicesSection />
        <Footer />
      </div>
    </PageTransition>
  );
}