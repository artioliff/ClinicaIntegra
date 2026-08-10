import React from 'react';
import { BrandLogo } from './BrandLogo';
import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20%C3%8Dntegra%20Odontologia.";

  return (
    <footer id="contato" className="relative bg-[#2D2120] text-rose-100 font-sans-body">
      
      {/* Upper Footer: Full Contact & Location Details */}
      <div className="bg-[#FAF5F0] text-[#3A2E2B] py-16 px-4 border-t border-[#E8C5C5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs text-[#5A4A47] leading-relaxed mt-4 font-sans-body">
              A <strong>Íntegra Odontologia</strong> é dedicada a proporcionar um atendimento odontológico 
              humano, estético e preventivo de alto padrão no Centro de Bauru.
            </p>
            <div className="pt-2 text-xs text-[#8A5252] font-semibold space-y-1">
              <p>📍 Dra. Marcela Souza • Cirurgiã-Dentista</p>
              <p>🏥 RT: Dra. Marcela Souza - CRO-SP</p>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-serif-title text-base font-bold text-[#8A5252] uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-[#5A4A47]">
              <li>
                <a href="#inicio" className="hover:text-[#8A5252] transition-colors">Início</a>
              </li>
              <li>
                <a href="#clinica" className="hover:text-[#8A5252] transition-colors">A Clínica & Dra. Marcela</a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-[#8A5252] transition-colors">Tratamentos Estéticos</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-[#8A5252] transition-colors">Casos Antes e Depois</a>
              </li>
              <li>
                <a href="#atestado-digital" className="hover:text-[#8A5252] transition-colors">Atestado & Documentação</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#8A5252] transition-colors">Depoimentos dos Pacientes</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Card */}
          <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-[#E8C5C5] shadow-sm space-y-4">
            <h4 className="font-serif-title text-lg font-bold text-[#3A2E2B] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#8A5252]" />
              <span>Onde Estamos em Bauru</span>
            </h4>

            <div className="space-y-3 text-xs text-[#4A3A38]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C48B8B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#3A2E2B]">Rua Sete de Setembro 7-18</p>
                  <p className="text-[#6B5A57]">Centro - Bauru / SP</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C48B8B] shrink-0" />
                <span>WhatsApp / Telefone: <strong>(14) 99697-7025</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C48B8B] shrink-0" />
                <span>Horário: Segunda a Sexta, das 08h às 18h</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Rua+Sete+de+Setembro+7-18+Centro+Bauru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#8A5252] hover:bg-[#6B3B3B] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#E6CA65]" />
              <span>Abrir no Google Maps</span>
            </a>
          </div>

        </div>
      </div>

      {/* FOOTER BAR (EXACT DESIGN AND COLORS FROM THE DOCUMENT IMAGE) */}
      <div className="relative">
        {/* Metallic Gold Accent Top Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#B8860B] via-[#E6CA65] to-[#B8860B]" />

        {/* Dusty Rose Footer Box */}
        <div className="bg-[#B38080] text-white py-6 px-4 text-xs font-sans-body">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Contact Items reproducing original document badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
              
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-amber-200 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-black/35 flex items-center justify-center shrink-0 border border-white/20">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </div>
                <span>(14) 99697-7025</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dramarcelasouza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-amber-200 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-black/35 flex items-center justify-center shrink-0 border border-white/20">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
                <span>@dramarcelasouza</span>
              </a>

              {/* Address */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-black/35 flex items-center justify-center shrink-0 border border-white/20">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-7.6 3.402-7.6 7.6 0 4.812 7.1 15.7 7.6 16.4.5-.7 7.6-11.588 7.6-16.4 0-4.198-3.402-7.6-7.6-7.6zm0 11c-1.877 0-3.4-1.523-3.4-3.4s1.523-3.4 3.4-3.4 3.4 1.523 3.4 3.4-1.523 3.4-3.4 3.4z"/>
                  </svg>
                </div>
                <span>Rua Sete de Setembro 7-18- Centro - Bauru</span>
              </div>

            </div>

            {/* Scroll Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

          </div>

          <div className="mt-4 pt-4 border-t border-white/20 text-center text-[11px] text-rose-100/90 font-sans-body">
            © {new Date().getFullYear()} Íntegra Odontologia • Dra. Marcela Souza. Todos os direitos reservados.
          </div>
        </div>
      </div>

    </footer>
  );
};
