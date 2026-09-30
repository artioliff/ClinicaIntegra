import { CheckCircle2, CalendarDays, Star } from "lucide-react";
import Image from "next/image";
import { waLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

const features = [
  "Atendimento humanizado & individual",
  "Ambiente aconchegante no Centro",
  "Facetas, Lentes & Alinhadores",
  "Consultas sem correria nem dor",
];

const stats = [
  { value: "4.9 / 5★", label: "Avaliação Google" },
  { value: "08h–18h", label: "Segunda a sexta" },
  { value: "100%", label: "Dedicação & Carinho" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-alt to-surface-warm py-16 lg:py-24"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-peach/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-rose-200 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            Clínica Íntegra · Odontologia com Excelência em Bauru
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Sinta a liberdade e o orgulho de{" "}
            <span className="text-brand-light font-display">
              sorrir com confiança
            </span>
          </h1>

          <p className="text-body text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Na <strong className="text-brand">Íntegra Odontologia</strong>,
            unimos tecnologia digital avançada, estética personalizada e um
            atendimento acolhedor para transformar sua saúde bucal em uma
            experiência leve e sem dor.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 text-sm text-body"
              >
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                {f}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-dark transition-colors shadow-lg shadow-brand/30"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar via WhatsApp
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 bg-white border border-brand-soft text-brand font-semibold px-6 py-3 rounded-full hover:bg-rose-50 transition-colors"
            >
              <CalendarDays className="w-4 h-4" />
              Agendar Online
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-brand">{s.value}</p>
                <p className="text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right – image card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-md">
            {/* Badge overlay */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-brand text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Tecnologia & Biossegurança
            </div>

            <Image
              src="/images/atendimento-dentista.webp"
              alt="Dentista realizando tratamento odontológico"
              width={1200}
              height={627}
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 448px, (min-width: 640px) 672px, calc(100vw - 2rem)"
              className="w-full h-80 sm:h-96 object-cover"
            />

            {/* Doctor card overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-peach shrink-0 flex items-center justify-center">
                <span className="text-brand font-bold text-sm">MS</span>
              </div>
              <div>
                <p className="font-bold text-ink text-sm">Dra. Marcela Souza</p>
                <p className="text-xs text-brand">
                  Cirurgiã-Dentista · Íntegra Odontologia
                </p>
                <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                  <span className="text-red-400" aria-hidden="true">
                    ❤
                  </span>
                  Cuida do seu sorriso com todo o carinho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
