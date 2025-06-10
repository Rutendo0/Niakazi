import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import HardwareSoftwareSection from "@/components/hardware-software-section";

export default function HardwarePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <HardwareSoftwareSection />
        <Footer />
      </div>
    </PageTransition>
  );
}