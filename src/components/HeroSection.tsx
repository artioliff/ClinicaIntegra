import { CheckCircle2, CalendarDays, Star } from "lucide-react";

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
              href="https://wa.me/551499697025?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#9E6162] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5e2828] transition-colors shadow-lg shadow-[#9E6162]/30"
            >
              {/* WhatsApp icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
