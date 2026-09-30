"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { MapPin, Clock, Phone, CheckCircle2, Navigation } from "lucide-react";
import {
  ADDRESS_CITY,
  ADDRESS_CEP,
  ADDRESS_LINE,
  DIRECTIONS_URL,
  HOURS_LONG,
  MAPS_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRIVACY_PATH,
  SERVICE_OPTIONS,
  waLink,
} from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    consent: false,
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.consent) return;

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

    window.open(waLink(messageParts.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-rose-50 text-brand text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Agende sua consulta
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Dê o primeiro passo para transformar o seu sorriso. Entre em
            contato e agende sua avaliação gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold text-ink mb-6">
              Informações da clínica
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">Endereço</p>
                  <p className="text-body text-sm">
                    {ADDRESS_LINE}
                    <br />
                    {ADDRESS_CITY}, {ADDRESS_CEP}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">
                    Horário de Atendimento
                  </p>
                  <p className="text-body text-sm">{HOURS_LONG}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-brand text-sm font-medium hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-whatsapp text-white font-semibold px-6 py-3 rounded-full hover:bg-whatsapp-dark transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-rose-200 text-brand font-semibold px-6 py-3 rounded-full hover:bg-rose-50 transition-colors"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Como chegar
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-md h-48">
              <iframe
                src={MAPS_EMBED_SRC}
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
              <div
                role="status"
                className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-brand" />
                <h3 className="text-2xl font-bold text-ink">
                  Abrindo WhatsApp...
                </h3>
                <p className="text-body max-w-sm">
                  Você será redirecionado para o WhatsApp com sua mensagem
                  preenchida. Se não abrir automaticamente, verifique o
                  bloqueador de pop-ups. <span aria-hidden="true">🦷</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      message: "",
                      consent: false,
                    });
                  }}
                  className="mt-2 text-sm text-brand underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-surface-alt to-rose-50 rounded-2xl p-6 sm:p-8 space-y-4 border border-rose-100"
              >
                <h3 className="text-lg font-bold text-ink mb-2">
                  Preencha seus dados
                </h3>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-body mb-1"
                  >
                    Nome completo *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-body mb-1"
                    >
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(14) 9 0000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-body mb-1"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold text-body mb-1"
                  >
                    Tratamento de interesse
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  >
                    <option value="">Selecione um tratamento</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-body mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Conte um pouco sobre o que você precisa..."
                    className="w-full px-4 py-2.5 rounded-xl border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand text-white font-semibold py-3 rounded-full hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20"
                >
                  Solicitar Agendamento
                </button>

                <label
                  htmlFor="contact-consent"
                  className="flex items-start gap-2 text-xs text-muted cursor-pointer leading-relaxed"
                >
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) =>
                      setForm({ ...form, consent: e.target.checked })
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
                  />
                  <span>
                    Li e concordo com a{" "}
                    <Link
                      href={PRIVACY_PATH}
                      className="underline hover:text-brand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de Privacidade
                    </Link>
                    . Seus dados não são armazenados por este site: a mensagem
                    é aberta no seu WhatsApp.
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
