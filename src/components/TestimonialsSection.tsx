import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Carolina B.',
      role: 'Paciente de Lentes de Contato',
      location: 'Bauru, SP',
      text: 'Sempre tive receio de dentista por causa de experiências ruins na infância, mas a Dra. Marcela mudou totalmente minha percepção! Fiz minhas lentes de porcelana na Íntegra e foi super tranquilo, indolor e o resultado ficou PERFEITO!',
      rating: 5,
      date: 'Há 2 semanas',
      avatar: 'https://images.pexels.com/photos/20596945/pexels-photo-20596945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    },
    {
      name: 'Marcos Vinícius T.',
      role: 'Paciente de Alinhadores & Clareamento',
      location: 'Bauru, SP',
      text: 'O atendimento da Dra. Marcela é impecável do começo ao fim. A clínica no Centro é linda, super limpa e o cafezinho na recepção é ótimo. Fiz alinhadores e clareamento, meu sorriso mudou 100%. Recomendo para todo mundo!',
      rating: 5,
      date: 'Há 1 mês',
      avatar: 'https://images.pexels.com/photos/4971499/pexels-photo-4971499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    },
    {
      name: 'Fernanda Oliveira',
      role: 'Paciente de Harmonização Labial',
      location: 'Bauru, SP',
      text: 'Procurei a Dra. Marcela para preenchimento labial com muito medo de ficar artificial. Ela me explicou tudo com paciência, fez com extrema delicadeza e ficou tão harmônico que todos elogiaram sem saber o que eu tinha feito!',
      rating: 5,
      date: 'Há 3 semanas',
      avatar: 'https://images.pexels.com/photos/31043312/pexels-photo-31043312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF5F0] via-rose-50/40 to-[#FAF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8C5C5] text-xs font-semibold text-[#8A5252] shadow-2xs mb-3">
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>Opinião de Quem Confia na Íntegra Odontologia</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2E2B]">
            Histórias de quem voltou a <span className="rose-gold-gradient-text italic font-script font-normal">sorrir sem medo</span>
          </h2>

          {/* Google Summary Badge */}
          <div className="mt-4 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-[#E8C5C5]">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#3A2E2B]">4.9 de 5.0 estrelas</span>
            <span className="text-xs text-[#8A5252] font-medium border-l border-rose-200 pl-3">
              Avaliações Verificadas
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8C5C5] flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-rose-200 absolute top-4 right-4 opacity-50 group-hover:text-[#C48B8B] transition-colors" />

              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-[#4A3E3B] leading-relaxed font-sans-body italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#C48B8B]"
                  />
                  <div>
                    <h4 className="font-serif-title font-bold text-[#3A2E2B] text-sm leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-[#8A5252] font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verificado</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
