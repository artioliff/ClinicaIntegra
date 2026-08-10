import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Calendar, Menu, X, MapPin, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A Clínica', href: '#clinica' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Dra. Marcela', href: '#dra-marcela' },
    { label: 'Documentação', href: '#atestado-digital' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20%C3%8Dntegra%20Odontologia.";

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#9E6162] text-white text-xs py-2 px-4 border-b border-[#D4AF37]/30 font-sans-body">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-rose-100 text-[11px] md:text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E6CA65]" />
              Rua Sete de Setembro 7-18 - Centro - Bauru/SP
            </span>
            <span className="hidden sm:inline-block text-rose-300">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E6CA65]" />
              Seg - Sex: 08h às 18h
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] md:text-xs">
            <a
              href="https://instagram.com/dramarcelasouza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#E6CA65] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@integraodontologia_bauru</span>
            </a>
            <span className="text-rose-300">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold hover:text-[#E6CA65] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6CA65]" />
              <span>(14) 99697-7025</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5F0]/95 backdrop-blur-md shadow-md py-2 border-b border-[#E8C5C5]/60'
            : 'bg-[#FAF5F0] py-4 border-b border-[#E8C5C5]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center group cursor-pointer"
          >
            <BrandLogo size={'sm'} /> {/* <BrandLogo size={isScrolled ? 'sm' : 'md'} /> */}
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#4A3A38]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#A26868] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C48B8B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#C48B8B] to-[#9E6162] hover:from-[#A26868] hover:to-[#8A5252] shadow-sm hover:shadow-md transition-all duration-300 border border-[#E6CA65]/30 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#8A5252] hover:bg-[#F8EFEF] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF5F0] animate-fadeIn">
          <div className="p-4 flex items-center justify-between border-b border-[#E8C5C5]">
            <BrandLogo size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#8A5252] hover:bg-[#F8EFEF] rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg font-medium text-[#4A3A38] hover:text-[#A26868] py-2 border-b border-rose-100/60"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-[#C48B8B] to-[#9E6162] shadow-md"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta Online</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-[#8A5252] bg-white border border-[#C48B8B] hover:bg-rose-50"
              >
                <Phone className="w-5 h-5" />
                <span>Falar via WhatsApp: (14) 99697-7025</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
