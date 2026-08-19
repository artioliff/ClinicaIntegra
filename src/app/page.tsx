import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClinicSection from "@/components/ClinicSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ResultsSection from "@/components/ResultsSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSection />
      <ClinicSection />
      <TreatmentsSection />
      <ResultsSection />
      <DoctorSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
