import { BadgeCheck } from "lucide-react";
import img1 from "../assets/img/Dra Karite Pomponi.jpeg";

const doctors = [
  {
    name: "Dra. Karita Pomponi",
    cro: "CRO-SP 654321",
    specialty: "Cirurgiã-Dentista · Especialista em Implantodontia",
    image: {img1},
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
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-80 object-cover"
              />

    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#2d1a1a]">
        {doctor.name}
      </h3>

      <p className="text-sm -[#9E6162] mb-2">
        {doctor.cro}
      </p>

      <p className="italic 05c5c] mb-4">
        {doctor.specialty}
      </p>

      <p className="text-[#mb-3">
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
        href="https://wa.me/551499697025"
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


// BKP
// import { GraduationCap, BadgeCheck } from "lucide-react";

// const credentials = [
//   "Graduação em Odontologia – USC Bauru",
//   "Especialização em Dentística & Estética",
//   "Formação em Alinhadores Invisíveis",
//   "Membro da Associação Brasileira de Odontologia",
//   "Atualização contínua em congressos nacionais",
// ];

// export default function DoctorSection() {
//   return (
//     <section id="colaboradores" className="py-20 bg-gradient-to-br from-[#f9f0f0] to-[#fdf5f0]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           {/* Image */}
//           <div className="relative flex justify-center">
//             <div className="relative">
//               {/* Decorative ring */}
//               <div className="absolute inset-0 rounded-3xl bg-[#c4a0a0]/20 transform rotate-3" />
//               <img
//                 src="https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500"
//                 alt="Dra. Marcela Souza"
//                 className="relative rounded-3xl w-full max-w-sm h-96 object-cover shadow-2xl"
//               />
//               {/* Floating badge */}
//               <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
//                 <div className="text-3xl">🦷</div>
//                 <div>
//                   <p className="font-bold text-[#2d1a1a] text-sm">Dra. Marcela Souza</p>
//                   <p className="text-xs text-[#9E6162]">CRO-SP 123456</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div>
//             <span className="inline-block bg-white text-[#9E6162] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-rose-200">
//               Dra. Marcela
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1a1a] mb-2">
//               Dra. Marcela Souza
//             </h2>
//             <p className="text-[#a05c5c] font-medium mb-6 italic" style={{ fontFamily: "Georgia, serif" }}>
//               Cirurgiã-Dentista · Especialista em Odontologia Estética
//             </p>
//             <p className="text-[#5a4040] mb-4 leading-relaxed">
//               Com mais de 10 anos de experiência, a Dra. Marcela construiu
//               uma carreira pautada na excelência técnica e no atendimento
//               humanizado. Ela acredita que um sorriso saudável transforma
//               a autoestima e a qualidade de vida de cada paciente.
//             </p>
//             <p className="text-[#5a4040] mb-8 leading-relaxed">
//               Sua abordagem é sempre personalizada: cada plano de tratamento
//               é criado exclusivamente para as necessidades e desejos do
//               paciente, combinando saúde bucal com estética natural.
//             </p>

//             <div className="space-y-3 mb-8">
//               {credentials.map((c) => (
//                 <div key={c} className="flex items-start gap-2.5">
//                   <div className="w-5 h-5 rounded-full bg-[#9E6162]/10 flex items-center justify-center shrink-0 mt-0.5">
//                     <BadgeCheck className="w-3 h-3 text-[#9E6162]" />
//                   </div>
//                   <span className="text-sm text-[#5a4040]">{c}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href="https://wa.me/551499697025?text=Ol%C3%A1%20Dra.%20Marcela%2C%20gostaria%20de%20agendar%20uma%20consulta!"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 bg-[#9E6162] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5e2828] transition-colors"
//               >
//                 Falar com a Dra. Marcela
//               </a>
//               <a
//                 href="https://instagram.com/integraodontologia_bauru"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 border border-[#c4a0a0] text-[#9E6162] font-semibold px-6 py-3 rounded-full hover:bg-rose-50 transition-colors"
//               >
//                 Ver no Instagram
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
