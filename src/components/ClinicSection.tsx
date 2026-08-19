import { ShieldCheck, Sparkles, Heart, Award } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Biossegurança Total",
    description:
      "Protocolos rigorosos de esterilização e descarte, garantindo um ambiente 100% seguro para você e sua família.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia Digital",
    description:
      "Equipamentos de última geração, escaneamento 3D e planejamento digital para resultados previsíveis e perfeitos.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Cada paciente é único. Consultamos com atenção, explicamos cada etapa e respeitamos o seu tempo e conforto.",
  },
  {
    icon: Award,
    title: "Excelência Clínica",
    description:
      "Formação continuada, especialistas certificados e compromisso com as melhores práticas da odontologia moderna.",
  },
];

export default function ClinicSection() {
  return (
    <section id="clinica" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-rose-50 text-[#9E6162] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            A Clínica
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1a1a] mb-4">
            Uma clínica pensada em cada detalhe
          </h2>
          <p className="text-[#5a4040] max-w-2xl mx-auto">
            A Íntegra Odontologia nasceu do desejo de oferecer tratamento
            odontológico de alto nível aliado a uma experiência verdadeiramente
            acolhedora, no coração de Bauru.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
              alt="Interior da clínica"
              className="rounded-2xl w-full h-48 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/6629415/pexels-photo-6629415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
              alt="Equipamentos odontológicos"
              className="rounded-2xl w-full h-48 object-cover mt-6"
            />
            <img
              src="https://images.pexels.com/photos/5355858/pexels-photo-5355858.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
              alt="Sala de tratamento"
              className="rounded-2xl w-full h-48 object-cover -mt-6"
            />
            <img
              src="https://images.pexels.com/photos/6629416/pexels-photo-6629416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400"
              alt="Instrumentos"
              className="rounded-2xl w-full h-48 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-[#2d1a1a] mb-4">
              Onde estética encontra saúde bucal
            </h3>
            <p className="text-[#5a4040] mb-4">
              Localizada no centro de Bauru, a Clínica Íntegra foi projetada
              para ser um espaço acolhedor, moderno e funcional. Nossas salas de
              atendimento são equipadas com tecnologia de ponta para
              diagnósticos precisos e tratamentos eficientes.
            </p>
            <p className="text-[#5a4040] mb-6">
              Da recepção ao consultório, cada detalhe foi pensado para que
              você se sinta confortável e confiante desde o primeiro momento.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#9E6162] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5e2828] transition-colors"
            >
              Agende uma visita
            </a>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-[#fdf5f0] to-rose-50 border border-rose-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 bg-[#9E6162]/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#9E6162]" />
              </div>
              <h4 className="font-bold text-[#2d1a1a] mb-2">{title}</h4>
              <p className="text-sm text-[#5a4040] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
