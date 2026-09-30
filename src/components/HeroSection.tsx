import { CheckCircle2, CalendarDays, Star } from "lucide-react";
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
  { value: "+1.200", label: "Pacientes Satisfeitos" },
  { value: "100%", label: "Dedicação & Carinho" },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#f9f0f0] via-[#fdf5f0] to-[#f5e8e0] py-16 lg:py-24"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#e8c4b8]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#d4a0a0]/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-rose-200 text-[#9E6162] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 fill-[#c47c5a] text-[#c47c5a]" />
            Clínica Íntegra · Odontologia com Excelência em Bauru
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#2d1a1a] leading-tight mb-4">
            Sinta a liberdade e o orgulho de{" "}
            <span
              className="text-[#a05c5c]"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              sorrir com confiança
            </span>
          </h1>

          <p className="text-[#5a4040] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Na <strong className="text-[#9E6162]">Íntegra Odontologia</strong>,
            unimos tecnologia digital avançada, estética personalizada e um
            atendimento acolhedor para transformar sua saúde bucal em uma
            experiência leve e sem dor.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-[#5a4040]">
                <CheckCircle2 className="w-4 h-4 text-[#9E6162] shrink-0" />
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
              className="flex items-center gap-2 bg-[#9E6162] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5e2828] transition-colors shadow-lg shadow-[#9E6162]/30"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar via WhatsApp
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 bg-white border border-[#c4a0a0] text-[#9E6162] font-semibold px-6 py-3 rounded-full hover:bg-rose-50 transition-colors"
            >
              <CalendarDays className="w-4 h-4" />
              Agendar Online
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[#9E6162]">{s.value}</p>
                <p className="text-xs text-[#8a6060]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right – image card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-md">
            {/* Badge overlay */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-[#9E6162] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Tecnologia & Biossegurança
            </div>

            <img
              src="https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Dentista realizando tratamento"
              className="w-full h-80 sm:h-96 object-cover"
            />

            {/* Doctor card overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#e8c4b8] shrink-0 flex items-center justify-center">
                <span className="text-[#9E6162] font-bold text-sm">MS</span>
              </div>
              <div>
                <p className="font-bold text-[#2d1a1a] text-sm">Dra. Marcela Souza</p>
                <p className="text-xs text-[#9E6162]">Cirurgiã-Dentista · Íntegra Odontologia</p>
                <p className="text-xs text-[#8a6060] flex items-center gap-1 mt-0.5">
                  <span className="text-red-400">❤</span>
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
