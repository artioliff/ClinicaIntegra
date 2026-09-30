import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import img1 from "../assets/img/Dra Karite Pomponi.jpeg";
import { waLink } from "@/config/site";

const doctors = [
  {
    name: "Dra. Karita Pomponi",
    cro: "CRO-SP 654321",
    specialty: "Cirurgiã-Dentista · Especialista em Implantodontia",
    image: img1,
    description1: "Atua com implantes dentários e reabilitação oral, devolvendo função e estética aos pacientes.",
    description2: "Seu foco é oferecer tratamentos modernos, seguros e previsíveis.",
    credentials: [
      "Graduação em Odontologia",
      "Especialização em Implantodontia",
      "Atualização contínua em congressos",
    ],
  },
  {
    name: "Dra. Marcela Souza",
    cro: "CRO-SP 123456",
    specialty: "Cirurgiã-Dentista · Especialista em Odontologia Estética",
    image: "/images/atendimento-dentista.webp",
    description1: "Com mais de 10 anos de experiência, a Dra. Marcela construiu uma carreira pautada na excelência técnica e no atendimento humanizado.",
    description2: "Sua abordagem é sempre personalizada, combinando saúde bucal com estética natural.",
    credentials: [
      "Graduação em Odontologia – USC Bauru",
      "Especialização em Dentística & Estética",
      "Formação em Alinhadores Invisíveis",
    ],
  },  
  {
    name: "Dra. Ana Carolina",
    cro: "CRO-SP 987654",
    specialty: "Especialista em Ortodontia",
    image: "/images/equipe-ortodontia.webp",
    description1: "Especialista em alinhadores invisíveis e tratamentos ortodônticos personalizados.",
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
                width={500}
                height={600}
                sizes="(min-width: 1280px) 405px, (min-width: 768px) 50vw, 100vw"
                className="w-full h-80 object-cover"
              />

    <div className="p-6">
      <h3 className="text-2xl font-bold text-ink">
        {doctor.name}
      </h3>

      <p className="text-sm text-brand mb-2">
        {doctor.cro}
      </p>

      <p className="font-display text-brand-light mb-4">
        {doctor.specialty}
      </p>

      <p className="text-body mb-3">
        {doctor.description1}
      </p>

      <p className="text-body mb-5">
        {doctor.description2}
      </p>

      <div className="space-y-2 mb-6">
        {doctor.credentials.map((item) => (
          <div key={item} className="flex gap-2 items-start">
            <BadgeCheck className="w-4 h-4 text-brand mt-1" />
            <span className="text-sm text-body">
              {item}
            </span>
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
