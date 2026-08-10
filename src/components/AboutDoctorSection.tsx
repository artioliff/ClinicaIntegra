import React, { useState } from 'react';
import { Award, ShieldCheck, Heart, MapPin, Coffee, Cpu } from 'lucide-react';

export const AboutDoctorSection: React.FC = () => {
  const [activeTab, setActiveCategory] = useState<'doctor' | 'clinic'>('doctor');

  const galleryImages = [
    {
      title: 'Consultório Principal & Cadeira Ergonômica',
      desc: 'Equipamento de última geração projetado para o seu máximo conforto físico durante as consultas.',
      image: 'https://images.pexels.com/photos/38055774/pexels-photo-38055774.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    },
    {
      title: 'Instrumental & Biossegurança Estéril',
      desc: 'Autoclaves hospitalares e protocolos rígidos de higienização individual para sua total segurança.',
      image: 'https://images.pexels.com/photos/6627725/pexels-photo-6627725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    },
    {
      title: 'Recepção Acolhedora no Centro de Bauru',
      desc: 'Um ambiente pensado para você relaxar com café especial, aromas suaves e tranquilidade antes da consulta.',
      image: 'https://images.pexels.com/photos/6809639/pexels-photo-6809639.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    },
  ];

  return (
    <section id="clinica" className="py-16 md:py-24 bg-[#FAF5F0] border-t border-[#E8C5C5]/50">
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
              Conheça a Dra. Marcela Souza
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

        {/* Tab 1: Doctor Profile */}
        {activeTab === 'doctor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">
            
            {/* Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C48B8B] via-[#E6CA65]/50 to-[#9E6162] blur-sm transform -rotate-1" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#E8C5C5]">
                  <img
                    src="https://images.pexels.com/photos/31043312/pexels-photo-31043312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
                    alt="Dra. Marcela Souza na Íntegra Odontologia"
                    className="w-full h-[450px] sm:h-[520px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-serif-title text-2xl font-bold">Dra. Marcela Souza</p>
                    <p className="text-xs text-rose-200 mt-0.5">Cirurgiã-Dentista • Responsável Técnica</p>
                    <p className="text-[11px] text-rose-100/80 mt-1">Especialista em Odontologia Estética & Reabilitação</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio & Pillars Column */}
            <div className="lg:col-span-7 space-y-6 font-sans-body">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-xs font-semibold text-[#8A5252]">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Atendimento de Excelência & Empatia</span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2E2B]">
                "Acredito em um tratamento odontológico onde o{' '}
                <span className="rose-gold-gradient-text italic font-script font-normal">ser humano</span> vem sempre em primeiro lugar."
              </h2>

              <p className="text-sm md:text-base text-[#5A4A47] leading-relaxed">
                Formada com paixão e constante aperfeiçoamento nos mais conceituados centros de odontologia estética e reabilitadora do Brasil, 
                a <strong className="text-[#8A5252]">Dra. Marcela Souza</strong> fundou a <strong>Íntegra Odontologia</strong> com o propósito de transformar a experiência do paciente no dentista.
              </p>

              <p className="text-sm text-[#5A4A47] leading-relaxed">
                Esqueça o receio ou o trauma de tratamentos antigos. Cada consulta é planejada sem pressa, com escuta atenta dos seus desejos, 
                diagnóstico digital minucioso e anestesia computadorizada sem dor.
              </p>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-300" />
                    <span>Acolhimento Humanizado</span>
                  </div>
                  <p className="text-xs text-[#6B5A57]">Consultas personalizadas com foco no seu bem-estar emocional e físico.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <Cpu className="w-4 h-4 text-[#D4AF37]" />
                    <span>Tecnologia de Ponta</span>
                  </div>
                  <p className="text-xs text-[#6B5A57]">Scanners virtuais, planejamento 3D e procedimentos milimetricamente guiados.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <ShieldCheck className="w-4 h-4 text-[#C48B8B]" />
                    <span>Segurança & Ética</span>
                  </div>
                  <p className="text-xs text-[#6B5A57]">Uso exclusivo de materiais nobres importados e aprovação rigorosa da ANVISA.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8C5C5] shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-serif-title font-bold text-[#8A5252] text-base">
                    <MapPin className="w-4 h-4 text-[#8A5252]" />
                    <span>Localização Central</span>
                  </div>
                  <p className="text-xs text-[#6B5A57]">Fácil acesso na Rua Sete de Setembro, Centro de Bauru com estacionamento fácil.</p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Clinic Facilities */}
        {activeTab === 'clinic' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-serif-title text-3xl font-bold text-[#3A2E2B]">
                Um ambiente planejado para o seu conforto absoluto
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4A47] mt-2 font-sans-body">
                Localizada no coração do Centro de Bauru, nossa estrutura oferece aconchego, higiene e tecnologia de ponta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8C5C5] group">
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

            <div className="p-6 bg-gradient-to-r from-white via-rose-50 to-white rounded-2xl border border-[#E8C5C5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8A5252] text-white flex items-center justify-center shrink-0">
                  <Coffee className="w-6 h-6 text-[#E6CA65]" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-[#3A2E2B] text-lg">
                    Venha tomar um café conosco na Íntegra Odontologia
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
