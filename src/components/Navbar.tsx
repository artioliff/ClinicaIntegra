"use client";

import { useState, useEffect } from "react";
import { Menu, X, CalendarDays } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Colaboradores", href: "#colaboradores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <span className="text-[#9E6162] text-2xl">✦</span>
          <span
            className="text-xl font-semibold text-[#4a2020]"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Íntegra Odontologia
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5a4040]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#9E6162] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden lg:flex items-center gap-2 bg-[#9E6162] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5e2828] transition-colors"
        >
          <CalendarDays className="w-4 h-4" />
          Agendar Consulta
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#9E6162]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-rose-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#5a4040] hover:text-[#9E6162] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#9E6162] text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
          >
            <CalendarDays className="w-4 h-4" />
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
