"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GOOGLE_MAPS_SEARCH } from "@/config/site";

/**
 * ⚠️ PLACEHOLDER — SUBSTITUIR por depoimentos REAIS (coletados no Google ou no
 * WhatsApp, com autorização do paciente). Publicar depoimentos fictícios é
 * vedado pelo Código de Defesa do Consumidor e pelo CONAR.
 * A nota "4.9 / 5.0" também precisa bater com o Google Meu Negócio real.
 */
const testimonials = [
  {
    name: "Ana Paula M.",
    rating: 5,
    treatment: "Facetas de Porcelana",
    text: "Fiz minha facetas com a Dra. Marcela e o resultado foi incrível! Meu sorriso mudou completamente. O atendimento foi super acolhedor, me senti à vontade do início ao fim.",
    avatar: "AP",
  },
  {
    name: "Carlos Eduardo S.",
    rating: 5,
    treatment: "Implante Dentário",
    text: "Tinha muito medo de dentista, mas na Íntegra me senti seguro. O tratamento foi sem dor e o resultado ficou perfeito. Indico para todos os meus amigos!",
    avatar: "CE",
  },
  {
    name: "Juliana R.",
    rating: 5,
    treatment: "Alinhadores Invisíveis",
    text: "Em 8 meses meus dentes ficaram alinhados sem ninguém nem perceber que eu estava usando aparelho. A Dra. Marcela é muito atenciosa e cuidadosa.",
    avatar: "JR",
  },
  {
    name: "Roberto F.",
    rating: 5,
    treatment: "Clareamento Dental",
    text: "Resultado do clareamento foi surpreendente logo na primeira sessão. Clínica muito organizada, limpa e com equipe super atenciosa. Já agendei a próxima consulta!",
    avatar: "RF",
  },
  {
    name: "Fernanda T.",
    rating: 5,
    treatment: "Tratamento Preventivo",
    text: "Levo toda a família na Íntegra há 3 anos. A Dra. Marcela tem paciência até com as crianças. É uma clínica diferente, onde você vai sem medo e sai sorrindo!",
    avatar: "FT",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="depoimentos" className="py-20 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand text-rose-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O que nossos pacientes falam
          </h2>
          <p className="text-brand-soft max-w-xl mx-auto">
            Veja o que os pacientes dizem sobre a
            experiência na Íntegra Odontologia.
          </p>
        </div>

        {/* Carousel */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="bg-card-dark rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="sr-only">{t.rating} de 5 estrelas</span>
              <p className="text-quote text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-line-dark">
                <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-brand-soft text-xs">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-line-dark text-brand-soft hover:bg-brand hover:text-white hover:border-brand transition-all flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ir para o depoimento ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className="w-6 h-6 flex items-center justify-center rounded-full"
              >
                <span
                  className={`block rounded-full transition-all ${
                    i === current
                      ? "w-6 h-2 bg-brand-soft"
                      : "w-2 h-2 bg-line-dark"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full border border-line-dark text-brand-soft hover:bg-brand hover:text-white hover:border-brand transition-all flex items-center justify-center"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Google rating */}
        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_MAPS_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card-dark rounded-2xl px-6 py-4 flex items-center gap-4 hover:bg-brand-dark transition-colors"
          >
            <div className="text-4xl" aria-hidden="true">
              ⭐
            </div>
            <div>
              <p className="text-white font-bold text-xl">4.9 / 5.0</p>
              <p className="text-brand-soft text-xs">
                No Google · ver avaliações
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
