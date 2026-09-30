"use client";

import { useState, useEffect } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { NAV_LINKS } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu com Esc (teclado)
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <span className="text-brand text-2xl" aria-hidden="true">
            ✦
          </span>
          <span className="text-xl font-semibold text-ink-soft font-display">
            Íntegra Odontologia
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-body"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden lg:flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors"
        >
          <CalendarDays className="w-4 h-4" />
          Agendar Consulta
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-brand"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="menu-mobile"
          className="lg:hidden bg-white border-t border-rose-100 px-4 py-4 flex flex-col gap-3"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-body hover:text-brand transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
          >
            <CalendarDays className="w-4 h-4" />
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
