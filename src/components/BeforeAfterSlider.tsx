import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  patient: string;
  procedure: string;
  sessions: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  testimonial: string;
}

export const BeforeAfterSlider: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Lentes de Contato em Porcelana',
      patient: 'Camila P. (Bauru/SP)',
      procedure: '10 Lentes Ultrafinas em Cerâmica Pura',
      sessions: '3 Consultas Planejadas',
      description: 'Correção de pequenos desalinhamentos, tonalidade amarelada e formato dos incisivos superiores com harmonização labial.',
      beforeImg: 'https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
      afterImg: 'https://images.pexels.com/photos/6627571/pexels-photo-6627571.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
      testimonial: 'A Dra. Marcela devolveu minha vontade de sorrir nas fotos! O resultado ficou inacreditavelmente natural.',
    },
    {
      id: 'case-2',
      title: 'Clareamento Dental Combinado',
      patient: 'Rodrigo M. (Bauru/SP)',
      procedure: 'Laser em Consultório + Gel Caseiro 16%',
      sessions: '2 Semanas de Tratamento',
      description: 'Remoção de pigmentações profundas decorrentes de café e fumo com clareamento homogêneo de 5 tons e zero sensibilidade.',
      beforeImg: 'https://images.pexels.com/photos/3845856/pexels-photo-3845856.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
      afterImg: 'https://images.pexels.com/photos/4971499/pexels-photo-4971499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
      testimonial: 'Meus dentes ficaram super brancos sem doer nada. O atendimento na clínica é fantástico!',
    },
    {
      id: 'case-3',
      title: 'Alinhadores Invisíveis & Ortodontia',
      patient: 'Juliana S. (Bauru/SP)',
      procedure: 'Ortodontia Transparente sem Braquetes',
      sessions: '8 Meses de Acompanhamento',
      description: 'Fechamento de diastema central e correção da mordida cruzada anterior sem que ninguém percebesse o uso do aparelho.',
      beforeImg: 'https://images.pexels.com/photos/4269683/pexels-photo-4269683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
      afterImg: 'https://images.pexels.com/photos/31043312/pexels-photo-31043312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
      testimonial: 'Pude trabalhar e fazer reuniões sem constrangimento. A Dra. Marcela é extremamente minuciosa!',
    },
  ];

  const [activeCase, setActiveCase] = useState<CaseStudy>(cases[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section id="resultados" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF5F0] via-white to-[#FAF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-xs font-semibold text-[#8A5252] mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Transformações Reais na Íntegra Odontologia</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2E2B]">
            Sorrisos renovados com <span className="rose-gold-gradient-text italic font-script font-normal">arte e precisão</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#5A4A47] font-sans-body leading-relaxed">
            Confira como a odontologia estética e integrativa da Dra. Marcela Souza devolve a autoestima e a alegria de sorrir livremente.
          </p>

          {/* Case selector buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCase(c);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCase.id === c.id
                    ? 'bg-[#8A5252] text-white shadow-md'
                    : 'bg-white text-[#4A3A38] border border-[#E8C5C5] hover:bg-rose-50'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before / After Comparison Showcase */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#E8C5C5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Image Split Slider */}
          <div className="lg:col-span-7">
            <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none shadow-md border border-neutral-200">
              
              {/* After Image (Full width background) */}
              <img
                src={activeCase.afterImg}
                alt={`Depois: ${activeCase.title}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <span className="absolute top-4 right-4 bg-emerald-700/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10">
                DEPOIS
              </span>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImg}
                  alt={`Antes: ${activeCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10">
                  ANTES
                </span>
              </div>

              {/* Vertical Divider handle line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#8A5252] text-white flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold">
                  ↔
                </div>
              </div>

              {/* Range Input Control overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Arrastre para comparar o antes e depois"
              />
            </div>
            <p className="text-center text-xs text-[#8A5252] mt-3 font-medium flex items-center justify-center gap-1">
              <span>👈 Arraste para o lado para comparar a transformação 👉</span>
            </p>
          </div>

          {/* Case Info & Metrics */}
          <div className="lg:col-span-5 space-y-5 font-sans-body">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[11px] font-bold text-[#8A5252]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Caso Clínico Acompanhado pela Dra. Marcela</span>
            </div>

            <h3 className="font-serif-title text-2xl md:text-3xl font-bold text-[#3A2E2B]">
              {activeCase.title}
            </h3>

            <div className="space-y-2 text-xs md:text-sm text-[#4A3E3B]">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C48B8B]" />
                <span><strong>Paciente:</strong> {activeCase.patient}</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C48B8B]" />
                <span><strong>Procedimento:</strong> {activeCase.procedure}</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C48B8B]" />
                <span><strong>Duração:</strong> {activeCase.sessions}</span>
              </p>
            </div>

            <p className="text-xs text-[#5A4A47] leading-relaxed bg-[#FAF5F0] p-4 rounded-xl border border-[#E8C5C5]">
              {activeCase.description}
            </p>

            {/* Testimonial Quote */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#F6EAE8] to-rose-50 border-l-4 border-[#C48B8B] italic text-xs text-[#3A2E2B] relative">
              <Heart className="w-4 h-4 text-rose-400 absolute top-3 right-3 fill-rose-300" />
              "{activeCase.testimonial}"
            </div>

            <a
              href={`https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Vi%20o%20caso%20de%20${encodeURIComponent(activeCase.title)}%20no%20site%20e%20gostaria%20de%20saber%20se%20%C3%A9%20indicado%20para%20o%20meu%20caso.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#C48B8B] to-[#8A5252] hover:from-[#A26868] hover:to-[#6B3B3B] shadow-md transition-all"
            >
              <span>Quero um Sorriso Como Este</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
