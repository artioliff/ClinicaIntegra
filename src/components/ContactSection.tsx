"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Clock, Phone, CheckCircle2 } from "lucide-react";

const services = [
  "Facetas & Lentes",
  "Alinhadores",
  "Clareamento",
  "Implantes",
  "Tratamento de Canal",
  "Consulta de Avaliação",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;

    const messageParts = [
      "Olá! Gostaria de agendar uma consulta na Íntegra Odontologia.",
      "",
      `*Nome:* ${form.name.trim()}`,
      `*Telefone:* ${form.phone.trim()}`,
    ];
    if (form.email.trim()) messageParts.push(`*E-mail:* ${form.email.trim()}`);
    if (form.service) messageParts.push(`*Tratamento:* ${form.service}`);
    if (form.message.trim()) {
      const truncated = form.message.trim().slice(0, 300);
      messageParts.push(`*Mensagem:* ${truncated}`);
    }

    const text = encodeURIComponent(messageParts.join("\n"));
    const url = `https://wa.me/551499697025?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-rose-50 text-[#9E6162] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1a1a] mb-4">
            Agende sua consulta
          </h2>
          <p className="text-[#5a4040] max-w-xl mx-auto">
            Dê o primeiro passo para transformar o seu sorriso. Entre em
            contato e agende sua avaliação gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold text-[#2d1a1a] mb-6">
              Informações da clínica
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#9E6162]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2d1a1a] text-sm">Endereço</p>
                  <p className="text-[#5a4040] text-sm">
                    Rua Sete de Setembro 7-18, Centro
                    <br />
                    Bauru – SP, CEP 17015-070
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#9E6162]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2d1a1a] text-sm">
                    Horário de Atendimento
                  </p>
                  <p className="text-[#5a4040] text-sm">
                    Segunda a Sexta: 08h às 18h
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#9E6162]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2d1a1a] text-sm">Telefone / WhatsApp</p>
                  <a
                    href="tel:+551499697025"
                    className="text-[#9E6162] text-sm font-medium hover:underline"
                  >
                    (14) 99697-7025
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/551499697025?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1da851] transition-colors mb-8"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-md h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6!2d-49.060!3d-22.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzU0LjAiUyA0OcKwMDMnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Íntegra Odontologia"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#9E6162]" />
                <h3 className="text-2xl font-bold text-[#2d1a1a]">
                  Abrindo WhatsApp...
                </h3>
                <p className="text-[#5a4040] max-w-sm">
                  Você será redirecionado para o WhatsApp com sua mensagem preenchida. Se não abrir automaticamente, verifique o bloqueador de pop-ups. 🦷
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", email: "", service: "", message: "" });
                  }}
                  className="mt-2 text-sm text-[#9E6162] underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-[#fdf5f0] to-rose-50 rounded-2xl p-6 sm:p-8 space-y-4 border border-rose-100"
              >
                <h3 className="text-lg font-bold text-[#2d1a1a] mb-2">
                  Preencha seus dados
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-[#5a4040] mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E6162]/30 focus:border-[#9E6162]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5a4040] mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(14) 9 0000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E6162]/30 focus:border-[#9E6162]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5a4040] mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E6162]/30 focus:border-[#9E6162]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5a4040] mb-1">
                    Tratamento de interesse
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E6162]/30 focus:border-[#9E6162]"
                  >
                    <option value="">Selecione um tratamento</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5a4040] mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Conte um pouco sobre o que você precisa..."
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9E6162]/30 focus:border-[#9E6162] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9E6162] text-white font-semibold py-3 rounded-full hover:bg-[#5e2828] transition-colors shadow-lg shadow-[#9E6162]/20"
                >
                  Solicitar Agendamento
                </button>

                <p className="text-xs text-[#8a6060] text-center">
                  Seus dados estão seguros e não serão compartilhados com terceiros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
