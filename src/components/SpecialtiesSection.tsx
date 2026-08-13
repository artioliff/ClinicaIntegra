import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  MessageCircle,
  Clock,
  ShieldCheck,
  Heart,
  Star,
} from "lucide-react";

interface Specialty {
  id: string;
  category: "estetica" | "ortodontia" | "reabilitacao" | "prevencao";
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string;
  image: string;
  duration: string;
  benefits: string[];
  recommendedFor: string[];
}

export const SpecialtiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null,
  );

  const specialties: Specialty[] = [
    {
      id: "lentes-de-contato-dental",
      category: "estetica",
      title: "Lentes de Contato Dental",
      subtitle: "Transforme o formato, cor e harmonia do seu sorriso",
      description: "Lâminas ultrafinas de porcelana desenvolvidas sob medida para corrigir imperfeições estéticas.",
      fullDetails: "As lentes de contato dental permitem corrigir manchas, espaços entre dentes, pequenas fraturas e desalinhamentos com mínima intervenção na estrutura natural do dente. O resultado é um sorriso natural, elegante e duradouro.",
      image: "https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "2 a 3 consultas",
      benefits: [
        "Resultado imediato e altamente estético",
        "Porcelana resistente a manchas",
        "Aspecto natural e personalizado",
      ],
      recommendedFor: [
        "Dentes manchados",
        "Pequenos desalinhamentos",
        "Fechamento de espaços entre dentes",
      ],
    },
    {
      id: "lentes-porcelana",
      category: "estetica",
      title: "Lentes de Contato & Facetas em Porcelana",
      subtitle: "A transformação estética suprema do seu sorriso",
      description: "Lâminas ultrafinas de cerâmica que alinham cor, formato e proporções dos dentes com naturalidade absoluta.",
      fullDetails: "As lentes de contato de porcelana são a solução mais nobre da odontologia estética. Feitas sob medida com scanners 3D de altíssima precisão, elas corrigem manchas permanentes, fechamento de diastemas (espaços), dentes levemente tortos ou desgastados. O procedimento é rápido, preserva a estrutura natural do dente e garante um brilho e transparência idênticos ao esmalte dentário.",
      image: "https://images.pexels.com/photos/6627571/pexels-photo-6627571.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "2 a 3 consultas planejadas",
      benefits: [
        "Resistência extrema a manchas de café e vinho",
        "Durabilidade superior a 15-20 anos",
        "Harmonização personalizada com seu rosto",
      ],
      recommendedFor: [
        "Dentes amarelados ou com manchas resistentes",
        "Diastemas (espaços entre dentes)",
        "Fraturas ou desgastes dentários",
      ],
    },
    {
      id: "clareamento-dental",
      category: "estetica",
      title: "Clareamento Dental Combinado Premium",
      subtitle:
        "Sorriso visivelmente mais branco e iluminado sem sensibilidade",
      description:
        "Protocolo exclusivo que combina a velocidade do laser em consultório ao toque contínuo do clareamento caseiro.",
      fullDetails:
        "Nosso protocolo de clareamento é desenvolvido individualmente para cada paciente, utilizando géis clareadores neutros com agentes dessensibilizantes. Garantimos um clareamento profundo, seguro para o esmalte, atingindo tonalidades claras e homogêneas.",
      image:
        "https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "1 sessão clínica + 2 semanas caseiras",
      benefits: [
        "Zero dor ou desconforto pós-sessão",
        "Garantia de tom natural e luminoso",
        "Produtos com registro de máxima qualidade",
      ],
      recommendedFor: [
        "Dentes escurecidos pelo tempo ou alimentação",
        "Preparação para eventos especiais e casamentos",
        "Quem busca rejuvenescimento do sorriso",
      ],
    },
    {
      id: "alinhadores-invisiveis",
      category: "ortodontia",
      title: "Alinhadores Invisíveis & Ortodontia Estética",
      subtitle: "Dentes perfeitamente alinhados sem fios nem braquetes",
      description:
        "Placas transparentes removíveis feitas sob medida que movimentam seus dentes com conforto e extrema discrição.",
      fullDetails:
        "Os alinhadores transparentes revolucionaram a ortodontia. Através de simulação digital 3D, você descobre o resultado final do seu sorriso antes mesmo de iniciar o tratamento. As placas são confortáveis, não machucam as bochechas e permitem higienização total dos dentes sem restrições alimentares.",
      image:
        "https://images.pexels.com/photos/3845856/pexels-photo-3845856.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "6 a 14 meses (média)",
      benefits: [
        "Removível para comer e escovar dentes",
        "100% transparente no dia a dia profissional",
        "Manutenções mais espaçadas e rápidas",
      ],
      recommendedFor: [
        "Apinhamento (dentes amontoados)",
        "Espaçamentos e mordidas cruzadas",
        "Adultos e jovens que buscam discrição",
      ],
    },
    {
      id: "harmonizacao-orofacial",
      category: "estetica",
      title: "Harmonização Orofacial (HOF)",
      subtitle: "Simetria, hidratação labial e rejuvenescimento harmônico",
      description:
        "Preenchimento com ácido hialurônico e BOTOX® para valorizar seus traços faciais em sintonia com seu sorriso.",
      fullDetails:
        "A Dra. Marcela Souza aplica conceitos avançados de anatomia facial para criar resultados extremamente elegantes e sutis. Trabalhamos com preenchimento labial refinado (contorno e volume), amenização de rugas de expressão e sorriso gengival com toxina botulínica de primeira linha.",
      image:
        "https://images.pexels.com/photos/20596945/pexels-photo-20596945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "1 consulta de 40 a 60 min",
      benefits: [
        "Resultados imediatos e muito naturais",
        "Procedimento rápido e sem necessidade de repouso",
        "Anestesia computadorizada para conforto total",
      ],
      recommendedFor: [
        "Lábios finos ou sem contorno definido",
        "Sorriso gengival (exposição excessiva de gengiva)",
        "Rugas ao redor da boca e linhas de expressão",
      ],
    },
    {
      id: "implantes-dentarios",
      category: "reabilitacao",
      title: "Implantes Dentários & Reabilitação Oral",
      subtitle: "A segurança e a força de dentes naturais fixos novamente",
      description:
        "Substituição de raízes ausentes por pinos de titânio de grau médico com próteses em cerâmica de alta resistência.",
      fullDetails:
        "Volte a mastigar seus alimentos favoritos e a sorrir com total firmeza. Com cirurgia guiada por computador de corte mínimo, o implante dental é instalado de maneira rápida, indolor e com recuperação tranquila, oferecendo a estabilidade e o formato idênticos ao dente original.",
      image:
        "https://images.pexels.com/photos/6812453/pexels-photo-6812453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "Planejamento + Cirurgia rápida guiada",
      benefits: [
        "Estabilidade absoluta para comer e falar",
        "Preservação do osso maxilar e traços faciais",
        "Aparência e toque 100% dente natural",
      ],
      recommendedFor: [
        "Perda de um ou múltiplos dentes",
        "Usuários de pontes ou dentaduras soltas",
        "Recuperação do conforto mastigatório",
      ],
    },
    {
      id: "odontologia-preventiva",
      category: "prevencao",
      title: "Check-Up Preventivo & Profilaxia Ultrassônica",
      subtitle: "Proteção continuada, gengivas saudáveis e hálito fresco",
      description:
        "Limpeza profissional com remoção de tártaro por ultrassom, polimento coronário e aplicação de flúor protetor.",
      fullDetails:
        "A prevenção é o pilar fundamental da Íntegra Odontologia. Em cada check-up preventivo, realizamos uma varredura completa da cavidade oral, exame gengival, profilaxia ultrassônica indolor e orientações de hábitos para manter seus dentes perfeitos a vida toda.",
      image:
        "https://images.pexels.com/photos/4269683/pexels-photo-4269683.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "1 sessão de 45 minutos",
      benefits: [
        "Eliminação do tártaro e manchas de superfície",
        "Prevenção de cáries e sangramentos gengivais",
        "Sensaçāo inigualável de limpeza e frescor",
      ],
      recommendedFor: [
        "Todos os pacientes (a cada 6 meses)",
        "Pessoas com tendência a acúmulo de tártaro",
        "Quem deseja manter a saúde bucal em dia",
      ],
    },
    {
      id: "lentes-de-contato-dental",
      category: "estetica",
      title: "Lentes de Contato Dental",
      subtitle: "Transforme o formato, cor e harmonia do seu sorriso",
      description:
        "Lâminas ultrafinas de porcelana desenvolvidas sob medida para corrigir imperfeições estéticas.",
      fullDetails:
        "As lentes de contato dental permitem corrigir manchas, espaços entre dentes, pequenas fraturas e desalinhamentos com mínima intervenção na estrutura natural do dente. O resultado é um sorriso natural, elegante e duradouro.",
      image:
        "https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "2 a 3 consultas",
      benefits: [
        "Resultado imediato e altamente estético",
        "Porcelana resistente a manchas",
        "Aspecto natural e personalizado",
      ],
      recommendedFor: [
        "Dentes manchados",
        "Pequenos desalinhamentos",
        "Fechamento de espaços entre dentes",
      ],
    },
    {
      id: "odontopediatria",
      category: "prevencao",
      title: "Odontopediatria",
      subtitle: "Cuidado especializado para o sorriso das crianças",
      description: "Atendimento humanizado para promover saúde bucal desde a infância.",
      fullDetails: "Criamos experiências positivas para que as crianças desenvolvam hábitos saudáveis e confiança nas consultas odontológicas.",
      image: "https://images.pexels.com/photos/8376234/pexels-photo-8376234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
      duration: "30 a 60 minutos",
      benefits: [
        "Prevenção precoce de cáries",
        "Acompanhamento do crescimento dental",
        "Educação para higiene bucal",
      ],
      recommendedFor: [
        "Crianças de todas as idades",
        "Primeira consulta odontológica",
        "Aplicação de flúor e selantes",
      ],
    },
  ];

  const categories = [
    { id: "todos", label: "Todos os Tratamentos" },
    { id: "estetica", label: "Estética & Lentes" },
    { id: "ortodontia", label: "Alinhadores" },
    { id: "reabilitacao", label: "Implantes & Prótese" },
    { id: "prevencao", label: "Prevenção & Saúde" },
  ];

  const filteredSpecialties =
    activeCategory === "todos"
      ? specialties
      : specialties.filter((s) => s.category === activeCategory);

  return (
    <section id="tratamentos" className="py-16 md:py-24 bg-[#FAF5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6EAE8] text-xs font-semibold text-[#8A5252] mb-3 border border-[#E8C5C5]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Especialidades Íntegra Odontologia</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2E2B]">
            Cuidados integrais para a{" "}
            <span className="rose-gold-gradient-text italic font-script font-normal">
              beleza e saúde
            </span>{" "}
            do seu sorriso
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#5A4A47] font-sans-body leading-relaxed">
            Cada tratamento é planejado minuciosamente pela Dra. Marcela Souza
            com as melhores técnicas e materiais de nível internacional.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#8A5252] text-white shadow-md"
                    : "bg-white text-[#4A3A38] hover:bg-[#F6EAE8] border border-[#E8C5C5]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpecialties.map((spec) => (
            <div
              key={spec.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8C5C5] flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Card Media */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-100">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] uppercase tracking-wider font-bold text-[#8A5252]">
                      {spec.duration}
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6">
                  <h3 className="font-serif-title font-bold text-xl text-[#3A2E2B] group-hover:text-[#8A5252] transition-colors leading-snug">
                    {spec.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8A5252] mt-1">
                    {spec.subtitle}
                  </p>
                  <p className="text-xs text-[#6B5A57] mt-3 leading-relaxed font-sans-body">
                    {spec.description}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-rose-100 pt-3">
                    {spec.benefits.slice(0, 2).map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#4A3E3B]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C48B8B] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedSpecialty(spec)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#8A5252] bg-[#FAF5F0] hover:bg-[#8A5252] hover:text-white transition-all duration-300 border border-[#E8C5C5] cursor-pointer"
                >
                  <span>Saiba Mais & Agendar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E8C5C5] overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative h-48 sm:h-56">
              <img
                src={selectedSpecialty.image}
                alt={selectedSpecialty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider mb-1">
                  Íntegra Odontologia
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold">
                  {selectedSpecialty.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5 font-sans-body text-xs sm:text-sm text-[#3A2E2B]">
              <p className="text-[#5A4A47] leading-relaxed text-sm">
                {selectedSpecialty.fullDetails}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF5F0] p-4 rounded-xl border border-[#E8C5C5]">
                <div>
                  <h4 className="font-semibold text-[#8A5252] flex items-center gap-1.5 mb-2 text-xs uppercase tracking-wider">
                    <Star className="w-4 h-4 text-[#D4AF37]" />
                    Principais Benefícios
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedSpecialty.benefits.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-[#4A3E3B]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C48B8B] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#8A5252] flex items-center gap-1.5 mb-2 text-xs uppercase tracking-wider">
                    <Heart className="w-4 h-4 text-[#C48B8B]" />
                    Indicado Para
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedSpecialty.recommendedFor.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-[#4A3E3B]"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#8A5252] bg-rose-50 p-3 rounded-lg border border-rose-200">
                <Clock className="w-4 h-4 text-[#C48B8B] shrink-0" />
                <span>
                  <strong>Tempo estimado:</strong> {selectedSpecialty.duration}
                </span>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-[#FAF5F0] border-t border-[#E8C5C5] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#6B5A57] font-medium text-center sm:text-left">
                Dúvidas sobre este tratamento? Fale com a Dra. Marcela.
              </span>

              <a
                href={`https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(selectedSpecialty.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C48B8B] to-[#8A5252] hover:from-[#A26868] hover:to-[#6B3B3B] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Agendar Avaliação</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
