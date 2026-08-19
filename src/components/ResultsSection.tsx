const results = [
  {
    before: "https://images.pexels.com/photos/5355705/pexels-photo-5355705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    after: "https://images.pexels.com/photos/19879741/pexels-photo-19879741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    treatment: "Facetas de Porcelana",
    time: "2 sessões",
  },
  {
    before: "https://images.pexels.com/photos/19976560/pexels-photo-19976560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    after: "https://images.pexels.com/photos/5355705/pexels-photo-5355705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    treatment: "Alinhadores Invisíveis",
    time: "8 meses",
  },
  {
    before: "https://images.pexels.com/photos/19879740/pexels-photo-19879740.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    after: "https://images.pexels.com/photos/19976560/pexels-photo-19976560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    treatment: "Clareamento Dental",
    time: "1 sessão",
  },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-rose-50 text-[#9E6162] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1a1a] mb-4">
            Transformações reais, sorrisos reais
          </h2>
          <p className="text-[#5a4040] max-w-xl mx-auto">
            Cada sorriso é uma história. Veja como nossos tratamentos
            transformaram a vida dos nossos pacientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-[#fdf5f0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={r.before}
                    alt="Antes do tratamento"
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-white/90 text-[#9E6162] text-xs font-bold px-2 py-0.5 rounded-full">
                    Antes
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={r.after}
                    alt="Depois do tratamento"
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-[#9E6162] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Depois
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#2d1a1a] text-sm">{r.treatment}</h3>
                <p className="text-xs text-[#8a6060] mt-0.5">⏱ Tempo de tratamento: {r.time}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#8a6060] mt-6">
          * Resultados individuais podem variar. Imagens ilustrativas.
        </p>
      </div>
    </section>
  );
}
