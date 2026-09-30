import { ShieldCheck, Sparkles, Heart, Award } from "lucide-react";
import Image from "next/image";

/** Colagem do espaço físico — deslocamentos verticais criam o efeito quebrado. */
const gallery = [
  { src: "/images/clinica-recepcao.webp", alt: "Interior da clínica", offset: "" },
  {
    src: "/images/clinica-equipamentos.webp",
    alt: "Equipamentos odontológicos",
    offset: "mt-6",
  },
  {
    src: "/images/clinica-sala.webp",
    alt: "Sala de tratamento",
    offset: "-mt-6",
  },
  {
    src: "/images/clinica-instrumentos.webp",
    alt: "Instrumentos odontológicos",
    offset: "",
  },
];

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
          <span className="inline-block bg-rose-50 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            A Clínica
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Uma clínica pensada em cada detalhe
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A Íntegra Odontologia nasceu do desejo de oferecer tratamento
            odontológico de alto nível aliado a uma experiência verdadeiramente
            acolhedora, no coração de Bauru.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            {gallery.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={400}
                sizes="(min-width: 1024px) 304px, (min-width: 640px) 45vw, 50vw"
                className={`rounded-2xl w-full h-48 object-cover ${photo.offset}`}
              />
            ))}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-ink mb-4">
              Onde estética encontra saúde bucal
            </h3>
            <p className="text-body mb-4">
              Localizada no centro de Bauru, a Clínica Íntegra foi projetada
              para ser um espaço acolhedor, moderno e funcional. Nossas salas de
              atendimento são equipadas com tecnologia de ponta para
              diagnósticos precisos e tratamentos eficientes.
            </p>
            <p className="text-body mb-6">
              Da recepção ao consultório, cada detalhe foi pensado para que
              você se sinta confortável e confiante desde o primeiro momento.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-dark transition-colors"
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
              className="bg-gradient-to-br from-surface-alt to-rose-50 border border-rose-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand" />
              </div>
              <h4 className="font-bold text-ink mb-2">{title}</h4>
              <p className="text-sm text-body leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
