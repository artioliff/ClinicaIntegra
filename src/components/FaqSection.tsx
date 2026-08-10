import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como funciona o agendamento de consultas na Íntegra Odontologia?',
      a: 'É simples e rápido! Você pode agendar diretamente pelo nosso WhatsApp (14) 99697-7025, preencher o formulário online em nosso site ou solicitar uma ligação da nossa equipe. Escolhemos o melhor horário de acordo com sua rotina.',
    },
    {
      q: 'Quais as formas de pagamento e opções de parcelamento?',
      a: 'Oferecemos total flexibilidade. Aceitamos cartões de crédito, débito, PIX e parcelamento facilitado em até 12x para procedimentos de lentes de porcelana, alinhadores, harmonização e implantes.',
    },
    {
      q: 'A clínica atende convênios dentários ou apenas particular?',
      a: 'Trabalhamos no modelo particular para assegurar um tempo de consulta calmo, humanizado, e uso dos melhores materiais do mercado. No entanto, fornecemos recibos e documentação completa para reembolso do seu convênio!',
    },
    {
      q: 'Qual é o endereço exato e facilidade de estacionamento?',
      a: 'Nossa clínica fica na Rua Sete de Setembro 7-18, no Centro de Bauru/SP. O local possui fácil estacionamento na porta e entorno, em uma região tranquila e central.',
    },
    {
      q: 'Os procedimentos estéticos como lentes de porcelana ou clareamento causam dor?',
      a: 'De forma alguma! Utilizamos géis clareadores dessensibilizantes de última geração e anestesia local computadorizada. Todo o processo é acompanhado para garantir zero sofrimento.',
    },
    {
      q: 'A Dra. Marcela emite Atestado Odontológico oficial para o meu trabalho/faculdade?',
      a: 'Sim. Empregamos a documentação oficial da clínica (com timbre, watermark e registros CRO) para emissão de atestados, receitinhos de medicação e laudos pós-procedimento com validade nacional.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF5F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-xs font-semibold text-[#8A5252] mb-3">
            <HelpCircle className="w-4 h-4 text-[#C48B8B]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2E2B]">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm text-[#5A4A47] font-sans-body">
            Respostas para as principais dúvidas de nossos pacientes antes da primeira consulta.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8C5C5] overflow-hidden transition-all duration-300 shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left font-serif-title text-base sm:text-lg font-bold text-[#3A2E2B] flex items-center justify-between gap-4 hover:text-[#8A5252] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8A5252] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#5A4A47] font-sans-body leading-relaxed border-t border-rose-50 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
