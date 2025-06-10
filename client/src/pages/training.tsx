import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import TrainingSection from "@/components/training-section";

export default function TrainingPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <TrainingSection />
        <Footer />
      </div>
    </PageTransition>
  );
}