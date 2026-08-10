import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

interface TreatmentQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TreatmentQuiz: React.FC<TreatmentQuizProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [priority, setPriority] = useState('');
  const [timeframe, setTimeframe] = useState('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setGoal('');
    setPriority('');
    setTimeframe('');
  };

  const getRecommendation = () => {
    if (goal.includes('Clarear')) {
      return {
        title: 'Clareamento Dental Combinado Premium',
        description: 'Combinação da tecnologia a laser de alta precisão em consultório com o kit caseiro supervisionado para um branco radiante e duradouro, sem sensibilidade.',
        duration: '1 a 3 semanas',
        benefits: ['Livre de sensibilidade', 'Resultado visível na 1ª sessão', 'Efeito natural e uniforme'],
      };
    } else if (goal.includes('Corrigir')) {
      return {
        title: 'Alinhadores Invisíveis & Ortodontia Estética',
        description: 'Placas transparentes sob medida, removíveis para comer e escovar os dentes, corrigindo o alinhamento de forma rápida e quase imperceptível.',
        duration: '6 a 12 meses',
        benefits: ['100% transparente e confortável', 'Sem fios nem brquetes metálicos', 'Acompanhamento digital'],
      };
    } else if (goal.includes('Substituir')) {
      return {
        title: 'Implante Dentário Guia Digital & Reabilitação',
        description: 'Recupere a mastigação firme e a estético do dente natural com implantes de titânio de alta qualidade e coroas em cerâmica pura.',
        duration: 'Planejamento computadorizado',
        benefits: ['Resultado natural e fixo', 'Conforto total para mastigar', 'Procedimento altamente seguro'],
      };
    } else if (goal.includes('Harmonizar')) {
      return {
        title: 'Lentes de Contato em Porcelana / Harmonização',
        description: 'Lâminas ultrafinas de porcelana que corrigem formato, tamanho, cor e pequenos espaços do sorriso em harmonia com as proporções do seu rosto.',
        duration: '2 a 3 consultas',
        benefits: ['Sorriso de capa de revista', 'Alta durabilidade superior a 15 anos', 'Desgaste mínimo ou nulo'],
      };
    } else {
      return {
        title: 'Check-Up Preventivo & Odontologia Integrativa',
        description: 'Profilaxia ultrassônica com remoção de tártaro, avaliação radiográfica digital e protocolo preventivo personalizado para gengivas saudáveis.',
        duration: '1 consulta de 45 min',
        benefits: ['Dentes limpos e hálito fresco', 'Prevenção de cáries e dores', 'Atendimento leve e sem dor'],
      };
    }
  };

  const rec = getRecommendation();

  const getWhatsappMsg = () => {
    const text = `Ol%C3%A1%2C%20Dra.%20Marcela!%20Fiz%20o%20Simulador%20no%20site%20da%20%C3%8Dntegra%20Odontologia.%0A%0A- Objetivo: ${encodeURIComponent(goal || 'Estética Geral')}%0A- Prioridade: ${encodeURIComponent(priority || 'Conforto')}%0A- Prazo de interesse: ${encodeURIComponent(timeframe || 'Em breve')}%0A- Recomendado: ${encodeURIComponent(rec.title)}%0A%0AGostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20presencial!`;
    return `https://wa.me/5514996977025?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FAF5F0] rounded-2xl shadow-2xl border border-[#E8C5C5] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#9E6162] to-[#8A5252] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#E6CA65]" />
            <div>
              <h3 className="font-serif-title font-bold text-lg leading-none">Simulador de Sorriso</h3>
              <p className="text-xs text-rose-200 mt-0.5">Íntegra Odontologia • Dra. Marcela Souza</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {step <= 3 && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-[#8A5252] font-semibold mb-2">
                <span>Etapa {step} de 3</span>
                <span>{step === 1 ? '33%' : step === 2 ? '66%' : '100%'} Concluído</span>
              </div>
              <div className="w-full h-2 bg-rose-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C48B8B] to-[#9E6162] transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-serif-title text-xl font-bold text-[#3A2E2B]">
                Qual é o seu objetivo principal com seu sorriso?
              </h4>
              <div className="space-y-2.5">
                {[
                  '✨ Clarear dentes amarelados ou manchados',
                  '💎 Lentes de contato em porcelana / Harmonização',
                  '🦷 Corrigir dentes desalinhados sem aparelho metálico',
                  '🛠️ Substituir dente perdido ou restaurar prótese',
                  '🌿 Limpeza, prevenção de tártaro e Check-up geral',
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setGoal(opt);
                      setStep(2);
                    }}
                    className="w-full text-left p-3.5 rounded-xl bg-white border border-[#E8C5C5] hover:border-[#C48B8B] hover:bg-rose-50/50 transition-all font-sans-body text-sm text-[#3A2E2B] font-medium flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-[#C48B8B] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-serif-title text-xl font-bold text-[#3A2E2B]">
                Qual aspecto é mais valioso para você?
              </h4>
              <div className="space-y-2.5">
                {[
                  '🚀 Tratamento rápido e resultado imediato',
                  '🕊️ Atendimento 100% sem dor e hiper-acolhedor',
                  '👻 Máxima discrição (invisível no dia a dia)',
                  '💳 Facilidade de pagamento e parcelamento flexível',
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setPriority(opt);
                      setStep(3);
                    }}
                    className="w-full text-left p-3.5 rounded-xl bg-white border border-[#E8C5C5] hover:border-[#C48B8B] hover:bg-rose-50/50 transition-all font-sans-body text-sm text-[#3A2E2B] font-medium flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-[#C48B8B] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="font-serif-title text-xl font-bold text-[#3A2E2B]">
                Quando gostaria de realizar sua consulta inicial em Bauru?
              </h4>
              <div className="space-y-2.5">
                {[
                  '🗓️ O quanto antes (esta semana)',
                  '🗓️ Próximas duas semanas',
                  '🗓️ Apenas pesquisando para os próximos meses',
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setTimeframe(opt);
                      setStep(4);
                    }}
                    className="w-full text-left p-3.5 rounded-xl bg-white border border-[#E8C5C5] hover:border-[#C48B8B] hover:bg-rose-50/50 transition-all font-sans-body text-sm text-[#3A2E2B] font-medium flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-[#C48B8B] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Recommendation Result */}
          {step === 4 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-xl bg-white border-2 border-[#C48B8B] shadow-sm">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[11px] font-bold text-[#8A5252] mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Tratamento Recomendado pela Dra. Marcela</span>
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#3A2E2B]">
                  {rec.title}
                </h3>
                <p className="text-xs text-[#5A4A47] mt-1.5 leading-relaxed font-sans-body">
                  {rec.description}
                </p>

                <div className="mt-3 pt-3 border-t border-rose-100 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#8A5252]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Tempo: {rec.duration}</span>
                  </div>
                </div>

                <div className="mt-3 space-y-1 text-xs text-[#3A2E2B]">
                  {rec.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C48B8B]" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={getWhatsappMsg()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#C48B8B] to-[#8A5252] hover:from-[#A26868] hover:to-[#6B3B3B] shadow-md transition-all text-sm cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" />
                  <span>Agendar Diagnóstico via WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full py-2 text-xs font-medium text-[#8A5252] hover:underline cursor-pointer"
                >
                  Refazer teste com outro objetivo
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
