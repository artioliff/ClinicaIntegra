import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { CRO_PLACEHOLDER, waLink } from "@/config/site";

/**
 * ⚠️ PLACEHOLDER — confirmar com a cliente antes de publicar: sobrenomes,
 * CROs (obrigatório na publicidade odontológica), especialidades e biografias.
 * As fotos são as reais da equipe: recorte do retrato dos criativos 9:16,
 * gerado por `npm run team` (scripts/optimize-team.mjs) em public/images/.
 */
const doctors = [
  {
    name: "Dra. Karita Pomponi",
    cro: CRO_PLACEHOLDER, // ⚠️ trocar pelo CRO real
    specialty: "Cirurgiã-Dentista · Especialista em Implantodontia",
    image: "/images/equipe-karita.webp",
    description1:
      "Atua com implantes dentários e reabilitação oral, devolvendo função e estética aos pacientes.",
    description2:
      "Seu foco é oferecer tratamentos modernos, seguros e previsíveis.",
    credentials: [
      "Graduação em Odontologia",
      "Especialização em Implantodontia",
      "Atualização contínua em congressos",
    ],
  },
  {
    name: "Dra. Marcela Almeida", // ⚠️ confirmar: legenda dos criativos dela diz "Almeida"; o template dizia "Souza"
    cro: CRO_PLACEHOLDER, // ⚠️ trocar pelo CRO real
    specialty: "Cirurgiã-Dentista · Especialista em Odontologia Estética",
    image: "/images/equipe-marcela.webp",
    description1:
      "Com mais de 10 anos de experiência, a Dra. Marcela construiu uma carreira pautada na excelência técnica e no atendimento humanizado.",
    description2:
      "Sua abordagem é sempre personalizada, combinando saúde bucal com estética natural.",
    credentials: [
      "Graduação em Odontologia – USC Bauru",
      "Especialização em Dentística & Estética",
      "Formação em Alinhadores Invisíveis",
    ],
  },
  {
    name: "Dra. Lilian", // ⚠️ sobrenome a confirmar
    cro: CRO_PLACEHOLDER, // ⚠️ trocar pelo CRO real
    specialty: "Especialista em Ortodontia",
    image: "/images/equipe-lilian.webp",
    description1:
      "Especialista em alinhadores invisíveis e tratamentos ortodônticos personalizados.",
    description2: "Busca sempre proporcionar conforto e excelência clínica.",
    credentials: [
      "Especialização em Ortodontia",
      "Certificação em Invisalign",
      "Membro da Associação Brasileira de Ortodontia",
    ],
  },
];

export default function DoctorSection() {
  return (
    <section
      id="colaboradores"
      className="py-20 bg-gradient-to-br from-surface to-surface-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-rose-200">
            Nossa Equipe
          </span>

          <h2 className="text-4xl font-bold text-ink">
            Conheça nossos profissionais
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <Image
                src={doctor.image}
                alt={`Foto de ${doctor.name}`}
                width={800}
                height={656}
                className="w-full h-80 object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-ink">{doctor.name}</h3>

                <p className="text-sm text-brand mb-2">{doctor.cro}</p>

                <p className="font-display text-brand-light mb-4">
                  {doctor.specialty}
                </p>

                <p className="text-body mb-3">{doctor.description1}</p>

                <p className="text-body mb-5">{doctor.description2}</p>

                <div className="space-y-2 mb-6">
                  {doctor.credentials.map((item) => (
                    <div key={item} className="flex gap-2 items-start">
                      <BadgeCheck className="w-4 h-4 text-brand mt-1" />
                      <span className="text-sm text-body">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-brand text-white font-semibold py-3 rounded-full hover:bg-brand-dark transition-colors"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
