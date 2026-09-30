import { BadgeCheck } from "lucide-react";
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
    image: "https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
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
    image: "https://images.pexels.com/photos/6627407/pexels-photo-6627407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
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
      className="py-20 bg-gradient-to-br from-[#f9f0f0] to-[#fdf5f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-[#9E6162] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-rose-200">
            Nossa Equipe
          </span>

          <h2 className="text-4xl font-bold text-[#2d1a1a]">
            Conheça nossos profissionais
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                  src={typeof doctor.image === "string" ? doctor.image : (doctor.image as { src: string }).src}
                  alt={doctor.name}
                  className="w-full h-80 object-cover"
              />

    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#2d1a1a]">
        {doctor.name}
      </h3>

      <p className="text-sm text-[#9E6162] mb-2">
        {doctor.cro}
      </p>

      <p className="italic text-[#a05c5c] mb-4" style={{ fontFamily: "Georgia, serif" }}>
        {doctor.specialty}
      </p>

      <p className="text-[#5a4040] mb-3">
        {doctor.description1}
      </p>

      <p className="text-[#5a4040] mb-5">
        {doctor.description2}
      </p>

      <div className="space-y-2 mb-6">
        {doctor.credentials.map((item) => (
          <div key={item} className="flex gap-2 items-start">
            <BadgeCheck className="w-4 h-4 text-[#9E6162] mt-1" />
            <span className="text-sm text-[#5a4040]">
              {item}
            </span>
          </div>
        ))}
      </div>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-[#9E6162] text-white font-semibold py-3 rounded-full hover:bg-[#5e2828] transition-colors"
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
