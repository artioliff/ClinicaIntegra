import React, { useEffect, useState } from 'react';
import { Award, ShieldCheck, Heart, MapPin, Coffee, Cpu, ChevronLeft, ChevronRight, } from 'lucide-react';
import dr1 from '../assets/img/dr1.jpg';
import dr2 from '../assets/img/dr2.jpg';
import dr3 from '../assets/img/dr3.jpg';

export const AboutDoctorSection: React.FC = () => {
  const [activeTab, setActiveCategory] = useState<'doctor' | 'clinic'>('doctor');
  const [activeImage, setActiveImage] = useState(0);

  // Imagens do carrossel institucional
  const doctors = [
    {
      name: 'Dra. Marcela Souza',
      subtitle: 'Cirurgiã-Dentista',
      specialization: 'Especialista em Odontologia Estética & Reabilitação',
      image: {dr1},
    },
    {
      name: 'Dra. Karita Pomponi',
      subtitle: 'Implantodontista',
      specialization: 'cirurgião-dentista especialista em planejar e realizar cirurgias de implantes dentários',
      image: {dr2},
    },
    {
      name: 'Tecnologia e conforto',
      subtitle: 'Dra. T3',
      specialization: 'Especialista em Odontologia Estética & Reabilitação',
      image: {dr3},
    }
  ];

  // Troca automática da imagem
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) =>
        current === doctors.length - 1 ? 0 : current + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [doctors.length]);

  const nextImage = () => {
    setActiveImage((current) =>
      current === doctors.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? doctors.length - 1 : current - 1
    );
  };

  const galleryImages = [
    {
      title: 'Consultório Principal & Cadeira Ergonômica',
      desc: 'Equipamento de última geração projetado para o seu máximo conforto físico durante as consultas.',
      image:
        'https://images.pexels.com/photos/38055774/pexels-photo-38055774.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    },
    {
      title: 'Instrumental & Biossegurança Estéril',
      desc: 'Autoclaves hospitalares e protocolos rígidos de higienização individual para sua total segurança.',
      image:
        'https://images.pexels.com/photos/6627725/pexels-photo-6627725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    },
    {
      title: 'Recepção Acolhedora no Centro de Bauru',
      desc: 'Um ambiente pensado para você relaxar com café especial, aromas suaves e tranquilidade antes da consulta.',
      image:
        'https://images.pexels.com/photos/6809639/pexels-photo-6809639.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    },
  ];

  return (
    <section
      id="clinica"
      className="py-16 md:py-24 bg-[#FAF5F0] border-t border-[#E8C5C5]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12" id="dra-marcela">
          <div className="inline-flex p-1.5 rounded-full bg-[#F6EAE8] border border-[#E8C5C5]">
            <button
              onClick={() => setActiveCategory('doctor')}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'doctor'
                  ? 'bg-[#8A5252] text-white shadow-sm'
                  : 'text-[#5A4A47] hover:text-[#8A5252]'
              }`}
            >
              Conheça a Equipe
            </button>

            <button
              onClick={() => setActiveCategory('clinic')}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'clinic'
                  ? 'bg-[#8A5252] text-white shadow-sm'
                  : 'text-[#5A4A47] hover:text-[#8A5252]'
              }`}
            >
              A Clínica Íntegra Odontologia
            </button>
          </div>
        </div>

        {/* =========================================================
            TAB 1 — ÍNTEGRA / EQUIPE
        ========================================================= */}
        {activeTab === 'doctor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">

            {/* CARROSSEL */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Glow externo */}
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-t from-[#C48B8B] via-[#E6CA65]/50 to-[#9E6162] blur-sm transform -rotate-1" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#E8C5C5]">

                  {/* Imagem */}
                  <div className="relative h-[450px] sm:h-[520px]">

                    <img
                      key={doctors[activeImage].image}
                      src={doctors[activeImage].image}
                      alt={doctors[activeImage].name}
                      className="w-full h-[450px] sm:h-[520px] object-cover object-top"
                    />

                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                    {/* Texto sobre a imagem */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="font-serif-title text-2xl font-bold">{doctors[activeImage].name}</p>
                      <p className="text-xs text-rose-200 mt-0.5">{doctors[activeImage].subtitle}</p>
                      <p className="text-[11px] text-rose-100/80 mt-1">{doctors[activeImage].specialization}</p>

                    </div>

                    {/* Botão anterior */}
                    <button
                      onClick={previousImage}
                      aria-label="Imagem anterior"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#8A5252] flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Próximo */}
                    <button
                      onClick={nextImage}
                      aria-label="Próxima imagem"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#8A5252] flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-5 right-5 flex gap-1.5">
                      {doctors.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          aria-label={`Ir para imagem ${index + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            activeImage === index
                              ? 'w-7 bg-white'
                              : 'w-1.5 bg-white/50'
                          }`}
                        />
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* TEXTO INSTITUCIONAL */}
            <div className="lg:col-span-7 space-y-6 font-sans-body">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-xs font-semibold text-[#8A5252]">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Atendimento de Excelência & Empatia</span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2E2B]">
                Cuidado, tecnologia e{' '}
                <span className="rose-gold-gradient-text italic font-script font-normal">
                  acolhimento
                </span>{' '}
                em cada detalhe.
              </h2>

              <p className="text-sm md:text-base text-[#5A4A47] leading-relaxed">
                Na <strong className="text-[#8A5252]">Íntegra Odontologia</strong>,
                acreditamos que cuidar do sorriso vai muito além do tratamento.
                Cada pessoa é recebida de forma única, com atenção, respeito e
                um olhar individualizado para suas necessidades.
              </p>

              <p className="text-sm text-[#5A4A47] leading-relaxed">
                Reunimos profissionais preparados, tecnologia, segurança e um
                ambiente acolhedor para tornar sua experiência mais tranquila,
                confortável e personalizada — do primeiro contato ao
                acompanhamento de cada etapa do tratamento.
              </p>

              {/* Pilares */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-300" />
                    <span>Acolhimento Humanizado</span>
                  </div>

                  <p className="text-xs text-[#6B5A57]">
                    Atendimento próximo e personalizado, respeitando o tempo,
                    as necessidades e as expectativas de cada paciente.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <Cpu className="w-4 h-4 text-[#D4AF37]" />
                    <span>Tecnologia & Precisão</span>
                  </div>

                  <p className="text-xs text-[#6B5A57]">
                    Recursos modernos para oferecer diagnósticos e tratamentos
                    cada vez mais precisos e seguros.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <ShieldCheck className="w-4 h-4 text-[#C48B8B]" />
                    <span>Segurança & Ética</span>
                  </div>

                  <p className="text-xs text-[#6B5A57]">
                    Protocolos rigorosos e atenção a cada etapa para cuidar de
                    você com responsabilidade e confiança.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <MapPin className="w-4 h-4 text-[#8A5252]" />
                    <span>Experiência Íntegra</span>
                  </div>

                  <p className="text-xs text-[#6B5A57]">
                    Um espaço pensado para proporcionar conforto, tranquilidade
                    e uma experiência diferenciada em Bauru.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            TAB 2 — CLÍNICA
        ========================================================= */}
        {activeTab === 'clinic' && (
          <div className="space-y-10 animate-fadeIn">

            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-serif-title text-3xl font-bold text-[#3A2E2B]">
                Um ambiente planejado para o seu conforto absoluto
              </h3>

              <p className="text-xs sm:text-sm text-[#5A4A47] mt-2 font-sans-body">
                Localizada no coração do Centro de Bauru, nossa estrutura oferece
                aconchego, higiene e tecnologia de ponta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8C5C5] group"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 font-sans-body">
                    <h4 className="font-serif-title font-bold text-lg text-[#3A2E2B] group-hover:text-[#8A5252] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#6B5A57] mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-linear-to-t from-white via-rose-50 to-white rounded-2xl border border-[#E8C5C5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8A5252] text-white flex items-center justify-center shrink-0">
                  <Coffee className="w-6 h-6 text-[#E6CA65]" />
                </div>

                <div>
                  <h4 className="font-serif-title font-bold text-[#3A2E2B] text-lg">
                    Venha conhecer a Íntegra Odontologia
                  </h4>

                  <p className="text-xs text-[#5A4A47]">
                    Rua Sete de Setembro 7-18 - Centro - Bauru/SP
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20conhecer%20a%20cl%C3%ADnica%20e%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#8A5252] hover:bg-[#6B3B3B] transition-colors shadow-sm cursor-pointer shrink-0"
              >
                Agendar Visita / Consulta
              </a>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};