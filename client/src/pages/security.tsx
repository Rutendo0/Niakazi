import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import SecuritySection from "@/components/security-section";

export default function SecurityPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <SecuritySection />
        <Footer />
      </div>
    </PageTransition>
  );
}