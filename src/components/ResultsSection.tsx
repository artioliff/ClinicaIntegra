import Image from "next/image";

const results = [
  {
    before: "/images/sorriso-a.webp",
    after: "/images/sorriso-b.webp",
    treatment: "Facetas de Porcelana",
    time: "2 sessões",
  },
  {
    before: "/images/sorriso-c.webp",
    after: "/images/sorriso-a.webp",
    treatment: "Alinhadores Invisíveis",
    time: "8 meses",
  },
  {
    before: "/images/sorriso-d.webp",
    after: "/images/sorriso-c.webp",
    treatment: "Clareamento Dental",
    time: "1 sessão",
  },
];

const PHOTO_SIZES =
  "(min-width: 1024px) 203px, (min-width: 640px) 45vw, 50vw";

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-rose-50 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Transformações reais, sorrisos reais
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Cada sorriso é uma história. Veja como nossos tratamentos
            transformaram a vida dos nossos pacientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((r) => (
            <div
              key={r.treatment}
              className="bg-surface-alt rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src={r.before}
                    alt={`Antes do tratamento de ${r.treatment}`}
                    width={400}
                    height={400}
                    sizes={PHOTO_SIZES}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-white/90 text-brand text-xs font-bold px-2 py-0.5 rounded-full">
                    Antes
                  </span>
                </div>
                <div className="relative">
                  <Image
                    src={r.after}
                    alt={`Depois do tratamento de ${r.treatment}`}
                    width={400}
                    height={400}
                    sizes={PHOTO_SIZES}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-brand text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Depois
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-ink text-sm">{r.treatment}</h3>
                <p className="text-xs text-muted mt-0.5">
                  <span aria-hidden="true">⏱ </span>Tempo de tratamento:{" "}
                  {r.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-6">
          * Resultados individuais podem variar. Imagens ilustrativas.
        </p>
      </div>
    </section>
  );
}
