import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AboutDoctorSection } from './components/AboutDoctorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentQuiz } from './components/TreatmentQuiz';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#3A2E2B] selection:bg-[#E8C5C5] selection:text-[#8A5252]">
      {/* Sticky Header Navigation */}
      <Header onOpenBookingModal={() => setIsBookingOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* Hero Banner with CTA */}
        <HeroSection
          onOpenBookingModal={() => setIsBookingOpen(true)}
          onOpenQuizModal={() => setIsQuizOpen(true)}
        />

        {/* Specialties & Treatment Cards */}
        <SpecialtiesSection />

        {/* Real Smile Transformations (Before & After Slider) */}
        <BeforeAfterSlider />

        {/* Doctor Bio & Clinic Infrastructure */}
        <AboutDoctorSection />

        {/* Verified Patient Reviews */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer & Exact Document Footer Replica */}
      <FooterSection />

      {/* Modals & Floating Buttons */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <TreatmentQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
