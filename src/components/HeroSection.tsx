import React from 'react';
import hero from '../assets/img/hero.png';
import { Calendar, Sparkles, CheckCircle2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  onOpenQuizModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  onOpenQuizModal,
}) => {
  const whatsappUrl = 'https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20%C3%8Dntegra%20Odontologia.';

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#FAF5F0] via-[#F6EAE8]/50 to-[#FAF5F0] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E8C5C5]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C48B8B]/30 shadow-xs text-xs md:text-sm font-medium text-[#8A5252]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Clínica Íntegra • Odontologia com Excelência em Bauru</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A2E2B] leading-[1.15]">
              Sinta a liberdade e o orgulho de{' '}
              <span className="rose-gold-gradient-text italic font-script block sm:inline font-normal text-4xl sm:text-5xl lg:text-6xl">
                sorrir com confiança
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A4A47] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans-body">
              Na <strong className="text-[#8A5252]">Íntegra Odontologia</strong>, unimos tecnologia digital avançada, 
              estética personalizada e um atendimento acolhedor para transformar sua saúde bucal em uma experiência leve e sem dor.
            </p>

            {/* Features checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#4A3E3B]">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C48B8B] shrink-0" />
                <span>Atendimento humanizado & individual</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C48B8B] shrink-0" />
                <span>Facetas, Lentes & Alinhadores</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C48B8B] shrink-0" />
                <span>Ambiente aconchegante no Centro</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C48B8B] shrink-0" />
                <span>Consultas sem correria nem dor</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center text-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm md:text-base font-semibold text-white bg-linear-to-t from-[#C48B8B] via-[#A26868] to-[#8A5252] hover:from-[#A26868] hover:to-[#6B3B3B] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#E6CA65]/30 cursor-pointer"
              >
                <Calendar className="w-5 h-5 md:w-7 md:h-7" />
                <span>Agendar via WhatsApp</span>
              </a>

              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#8A5252] bg-white border-2 border-[#E8C5C5] hover:bg-[#F6EAE8] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Calendar className="w-5 h-5 md:w-7 md:h-7 text-[#C48B8B]" />
                <span>Agendar Online</span>
              </button>

              <button
                onClick={onOpenQuizModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-[#4A3A38] bg-transparent hover:bg-rose-100/50 transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-[#D4AF37]" />
                <span>Simular Meu Sorriso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro stats banner */}
            <div className="pt-6 border-t border-[#E8C5C5]/60 grid grid-cols-3 gap-2 text-center lg:text-left">
              <div>
                <p className="text-xl md:text-2xl font-serif-title font-bold text-[#8A5252]">4.9 / 5★</p>
                <p className="text-xs text-[#6B5A57]">Avaliação Google</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-serif-title font-bold text-[#8A5252]">+1.200</p>
                <p className="text-xs text-[#6B5A57]">Pacientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-serif-title font-bold text-[#8A5252]">100%</p>
                <p className="text-xs text-[#6B5A57]">Dedicação & Carinho</p>
              </div>
            </div>

          </div>

          {/* Right Column: Imagery & Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-t from-[#D4AF37]/30 via-[#E8C5C5] to-[#A26868]/40 blur-md transform rotate-1" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#E8C5C5]">
                <img
                  src={hero}
                  alt="Paciente com sorriso radiante na clínica Íntegra Odontologia"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlaid Badge Top Right */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#E8C5C5] flex items-center gap-2 text-xs font-medium text-[#3A2E2B]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Tecnologia & Biossegurança</span>
                </div>

                {/* Overlaid Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#E8C5C5]">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.pexels.com/photos/31043312/pexels-photo-31043312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=120&w=120"
                      alt="Dra. Marcela Souza"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C48B8B] shadow-xs"
                    />
                    <div>
                      <h4 className="font-serif-title font-bold text-[#3A2E2B] text-base leading-tight">
                        Dra. Marcela Souza
                      </h4>
                      <p className="text-xs text-[#8A5252] font-medium">
                        Cirurgiã-Dentista • Íntegra Odontologia
                      </p>
                      <p className="text-[11px] text-[#6B5A57] mt-0.5 flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-400 fill-rose-400 inline" />
                        Cuida do seu sorriso com todo o carinho
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge Left */}
              {/* <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-linear-to-t from-[#FAF5F0] to-white p-3.5 rounded-2xl shadow-xl border border-[#D4AF37]/40 items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F6EAE8] flex items-center justify-center text-[#8A5252] font-bold text-lg">
                  🌸
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#3A2E2B]">Atestado & Consultas</p>
                  <p className="text-[#8A5252]">Atendimento no Centro de Bauru</p>
                </div>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
