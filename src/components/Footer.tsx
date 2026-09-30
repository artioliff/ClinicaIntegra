import { MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  COPYRIGHT_YEAR,
  CRO_PLACEHOLDER,
  HOURS_SHORT,
  INSTAGRAM_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRIVACY_PATH,
  TREATMENT_LINKS,
  waLink,
} from "@/config/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-brand-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-soft text-2xl" aria-hidden="true">
                ✦
              </span>
              <span className="text-xl font-semibold text-white font-display">
                Íntegra Odontologia
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Odontologia de excelência com atendimento humanizado no coração de
              Bauru. Transformamos sorrisos e vidas.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-line-dark flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-line-dark flex items-center justify-center hover:bg-whatsapp hover:border-whatsapp hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tratamentos</h3>
            <ul className="space-y-2">
              {TREATMENT_LINKS.map((t) => (
                <li key={t.label}>
                  <a
                    href={t.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex gap-2.5 items-start">
                <MapPin
                  className="w-4 h-4 text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm">
                  {ADDRESS_LINE}
                  <br />
                  {ADDRESS_CITY}
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Clock
                  className="w-4 h-4 text-brand shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm">{HOURS_SHORT}</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone
                  className="w-4 h-4 text-brand shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-card-dark pt-6 flex flex-col sm:flex-row items-center justify-end gap-2">
          <p className="text-xs">
            © {COPYRIGHT_YEAR} Íntegra Odontologia – Todos os direitos
            reservados.
          </p>
          <p className="text-xs">
            {CRO_PLACEHOLDER} · Dra. Marcela Almeida – Cirurgiã-Dentista
          </p>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs">
          <Link
            href={PRIVACY_PATH}
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Política de Privacidade
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hover:text-white transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
