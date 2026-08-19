"use client";

import { useState } from "react";

const treatments = [
  {
    emoji: "🦷",
    title: "Facetas & Lentes de Contato",
    category: "Estética",
    description:
      "Transforme seu sorriso com facetas de porcelana ultrafinas. Corrija cor, forma e alinhamento sem desgaste excessivo dos dentes naturais.",
    benefits: ["Resultado imediato", "Altamente durável", "Sem dor"],
  },
  {
    emoji: "⚡",
    title: "Clareamento Dental",
    category: "Estética",
    description:
      "Protocolo de clareamento profissional seguro, com resultados visíveis já na primeira sessão. Disponível em consultório ou caseiro supervisionado.",
    benefits: ["Resultado imediato", "Seguro", "Duradouro"],
  },
  {
    emoji: "🔬",
    title: "Implantes Dentários",
    category: "Implantodontia",
    description:
      "Reponha dentes perdidos com implantes de titânio de alta qualidade. Função, estética e estabilidade para toda a vida.",
    benefits: ["Permanente", "Estético", "Alta durabilidade"],
  },
  {
    emoji: "😊",
    title: "Tratamento de Canal",
    category: "Endodontia",
    description:
      "Salve seu dente natural com tratamento endodôntico moderno, rápido e sem dor. Utilizamos rotação mecanizada e materiais biocompatíveis.",
    benefits: ["Sem dor", "Preserva o dente", "Alta precisão"],
  },
  {
    emoji: "🛡️",
    title: "Prevenção & Manutenção",
    category: "Preventiva",
    description:
      "Limpeza profissional, aplicação de flúor, orientação de higiene e acompanhamento periódico para manter sua saúde bucal em dia.",
    benefits: ["Periódico", "Educativo", "Preventivo"],
  },
];

const categories = ["Todos", "Estética", "Ortodontia", "Implantodontia", "Endodontia", "Preventiva"];

export default function TreatmentsSection() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? treatments : treatments.filter((t) => t.category === active);

  return (
    <section id="tratamentos" className="py-20 bg-[#f9f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white text-[#9E6162] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-rose-200">
            Tratamentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1a1a] mb-4">
            Cuidados completos para o seu sorriso
          </h2>
          <p className="text-[#5a4040] max-w-xl mx-auto">
            Do preventivo ao estético, oferecemos uma gama completa de
            tratamentos com tecnologia de ponta e atendimento personalizado.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-[#9E6162] text-white shadow-md"
                  : "bg-white text-[#9E6162] border border-rose-200 hover:bg-rose-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-rose-50 group"
            >
              <div className="text-3xl mb-4">{t.emoji}</div>
              <span className="inline-block text-xs font-semibold text-[#9E6162] bg-rose-50 px-2.5 py-0.5 rounded-full mb-2">
                {t.category}
              </span>
              <h3 className="text-lg font-bold text-[#2d1a1a] mb-2">{t.title}</h3>
              <p className="text-sm text-[#5a4040] mb-4 leading-relaxed">{t.description}</p>
              <div className="flex flex-wrap gap-2">
                {t.benefits.map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-[#9E6162]/8 text-[#9E6162] px-2.5 py-0.5 rounded-full font-medium"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-[#9E6162] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#5e2828] transition-colors shadow-lg shadow-[#9E6162]/20"
          >
            Quero saber qual tratamento é ideal para mim
          </a>
        </div>
      </div>
    </section>
  );
}
