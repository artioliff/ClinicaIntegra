import React, { useState } from 'react';
import { FileText, Printer, CheckCircle, Sparkles, Send } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const AtestadoDocGenerator: React.FC = () => {
  // Form State matching the document fields
  const [patientName, setPatientName] = useState('Maria Eduarda Silva');
  const [cpf, setCpf] = useState('123.456.789-00');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [days, setDays] = useState('02');
  const [cid, setCid] = useState('K02.1 (Cárie de dentina / Procedimento Reabilitador)');
  const [cityDate, setCityDate] = useState('Bauru, ' + new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }));

  const handlePrint = () => {
    window.print();
  };

  const whatsappShareUrl = `https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20meu%20atestado%20ou%20receitinha%20digital%20para%20${encodeURIComponent(patientName)}.`;

  return (
    <section id="atestado-digital" className="py-16 md:py-24 bg-[#FAF5F0] border-t border-[#E8C5C5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-xs font-semibold text-[#8A5252] mb-3">
            <FileText className="w-4 h-4 text-[#C48B8B]" />
            <span>Documentação Oficial & Atendimento Clínico</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2E2B]">
            Transparência, Ética & <span className="rose-gold-gradient-text italic font-script font-normal">Atestados Digitais</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#5A4A47] font-sans-body leading-relaxed">
            Emitimos todos os atestados odontológicos, laudos e orientações de pós-operatório com padrão oficial da clínica, 
            respeitando rigorosamente todas as normas do Conselho de Odontologia e legislação vigente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-[#E8C5C5] space-y-5">
            <div className="border-b border-rose-100 pb-3">
              <h3 className="font-serif-title font-bold text-lg text-[#3A2E2B] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                Simulador do Documento Oficial
              </h3>
              <p className="text-xs text-[#6B5A57] mt-1">
                Preencha os dados abaixo para visualizar a cópia do Atestado Oficial emitido pela Dra. Marcela Souza.
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans-body">
              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1">
                  Nome Completo do Paciente
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#E8C5C5] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]/50 text-sm text-[#3A2E2B]"
                  placeholder="Ex: Maria Eduarda Silva"
                />
              </div>

              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1">
                  CPF do Paciente
                </label>
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#E8C5C5] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]/50 text-sm text-[#3A2E2B]"
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#4A3A38] font-semibold mb-1">
                    Data do Atendimento
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C5C5] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]/50 text-xs text-[#3A2E2B]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A3A38] font-semibold mb-1">
                    Dias de Repouso
                  </label>
                  <input
                    type="text"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C5C5] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]/50 text-sm text-[#3A2E2B]"
                    placeholder="01, 02..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1">
                  Código CID / Diagnóstico
                </label>
                <input
                  type="text"
                  value={cid}
                  onChange={(e) => setCid(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#E8C5C5] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]/50 text-xs text-[#3A2E2B]"
                />
              </div>

              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1">
                  Local e Data
                </label>
                <input
                  type="text"
                  value={cityDate}
                  onChange={(e) => setCityDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#E8C5C5] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]/50 text-xs text-[#3A2E2B]"
                />
              </div>
            </div>

            <div className="pt-3 space-y-2.5">
              <button
                onClick={handlePrint}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#8A5252] hover:bg-[#6B3B3B] transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir / Baixar Cópia em PDF</span>
              </button>

              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#8A5252] bg-rose-50 border border-[#C48B8B] hover:bg-rose-100 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Solicitar Segunda Via pelo WhatsApp</span>
              </a>
            </div>

            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-[11px] text-amber-900 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Documento verificado digitalmente. Disponível impresso e via WhatsApp após a consulta presencial.
              </span>
            </div>
          </div>

          {/* Document Replica Column */}
          <div className="lg:col-span-8 flex justify-center">
            <div className="w-full max-w-[650px] bg-white shadow-2xl rounded-sm border border-neutral-200 overflow-hidden text-neutral-800 font-sans relative print:shadow-none print:border-none print:w-full">
              
              {/* DOCUMENT CONTENT WRAPPER */}
              <div className="p-8 sm:p-12 relative min-h-[720px] flex flex-col justify-between select-none">
                
                {/* WATERMARK BACKGROUND LAYER */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-[0.06]">
                  {/* Large floral watermark */}
                  <div className="w-72 h-72">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                      <g stroke="#C48B8B" strokeWidth="1" fill="#E8C5C5">
                        <path d="M 50 15 C 38 18, 36 38, 50 48 C 64 38, 62 18, 50 15 Z" />
                        <path d="M 50 48 C 63 38, 83 45, 80 59 C 75 73, 56 60, 50 48 Z" />
                        <path d="M 50 48 C 56 60, 68 80, 54 86 C 39 90, 42 68, 50 48 Z" />
                        <path d="M 50 48 C 42 68, 46 90, 31 86 C 17 80, 29 60, 50 48 Z" />
                        <path d="M 50 48 C 29 60, 10 73, 5 59 C 2 45, 22 38, 50 48 Z" />
                      </g>
                    </svg>
                  </div>
                  <span className="font-script text-6xl text-[#A26868] mt-2">Íntegra</span>
                  <span className="text-xl uppercase tracking-widest text-[#8A5252]">Odontologia</span>
                </div>

                {/* HEADER (EXACT REPLICA FROM IMAGE) */}
                <div className="text-center space-y-1 relative z-10 pt-2">
                  <BrandLogo size="md" />
                </div>

                {/* DOCUMENT TITLE */}
                <div className="text-center my-6 relative z-10">
                  <h2 className="text-2xl sm:text-3xl tracking-widest font-serif italic text-neutral-800 font-normal">
                    ATESTADO
                  </h2>
                </div>

                {/* ATESTADO BODY TEXT */}
                <div className="space-y-6 text-sm sm:text-base text-neutral-700 italic leading-loose my-auto relative z-10 font-serif">
                  
                  <p className="leading-8 sm:leading-10">
                    Atesto para devidos fins que{' '}
                    <span className="not-italic font-medium border-b border-neutral-700 px-2 min-w-[200px] inline-block text-neutral-900">
                      {patientName || '________________________________________'}
                    </span>
                    , portador (a) do CPF{' '}
                    <span className="not-italic font-medium border-b border-neutral-700 px-2 min-w-[160px] inline-block text-neutral-900">
                      {cpf || '_____________________'}
                    </span>
                    esteve sob meus cuidados profissionais no dia{' '}
                    <span className="not-italic font-medium border-b border-neutral-700 px-2 inline-block text-neutral-900">
                      {date ? new Date(date).toLocaleDateString('pt-BR') : '___/___/______'}
                    </span>{' '}
                    devendo permanecer em repouso por{' '}
                    <span className="not-italic font-medium border-b border-neutral-700 px-2 inline-block text-neutral-900">
                      {days || '___'}
                    </span>{' '}
                    dias.
                  </p>

                  <p className="pt-2">
                    CID:{' '}
                    <span className="not-italic font-medium border-b border-neutral-700 px-2 min-w-[220px] inline-block text-neutral-900 text-sm">
                      {cid || '________________________________'}
                    </span>
                  </p>

                  {/* City and Date fill line */}
                  <div className="pt-6 text-center">
                    <span className="not-italic font-medium border-b border-neutral-700 px-4 min-w-[280px] inline-block text-neutral-900 text-sm sm:text-base">
                      {cityDate || 'Bauru, ______ de _________________ de 2026'}
                    </span>
                  </div>

                  {/* Stamp and Signature Box */}
                  <div className="pt-12 text-center max-w-xs mx-auto">
                    <div className="border-t border-neutral-800 pt-1 text-xs not-italic text-neutral-600 tracking-wider">
                      Carimbo e Assinatura
                    </div>
                    <div className="text-[11px] not-italic text-[#8A5252] font-sans font-medium mt-1">
                      Dra. Marcela Souza • Cirurgiã-Dentista
                    </div>
                  </div>

                </div>

                {/* FOOTER BAR (EXACT DESIGN FROM IMAGE) */}
                <div className="relative z-10 mt-8 pt-4">
                  {/* Metallic gold gradient top divider line */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#B8860B] via-[#E6CA65] to-[#B8860B] rounded-t-sm" />
                  
                  {/* Dusty Rose Footer Box */}
                  <div className="bg-[#B38080] text-white p-3.5 sm:p-4 text-xs font-sans">
                    <div className="flex flex-col sm:flex-row items-center justify-around gap-2 text-center">
                      
                      {/* WhatsApp / Phone */}
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                          </svg>
                        </div>
                        <span className="font-semibold text-white">(14) 99697-7025</span>
                      </div>

                      {/* Instagram */}
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                          </svg>
                        </div>
                        <span className="font-semibold text-white">@dramarcelasouza</span>
                      </div>

                    </div>

                    {/* Address line */}
                    <div className="mt-2 text-center flex items-center justify-center gap-1.5 text-[11px]">
                      <div className="w-4 h-4 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                          <path d="M12 0c-4.198 0-7.6 3.402-7.6 7.6 0 4.812 7.1 15.7 7.6 16.4.5-.7 7.6-11.588 7.6-16.4 0-4.198-3.402-7.6-7.6-7.6zm0 11c-1.877 0-3.4-1.523-3.4-3.4s1.523-3.4 3.4-3.4 3.4 1.523 3.4 3.4-1.523 3.4-3.4 3.4z"/>
                        </svg>
                      </div>
                      <span>Rua Sete de Setembro 7-18- Centro - Bauru</span>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
