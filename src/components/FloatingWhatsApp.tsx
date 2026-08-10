import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl =
    'https://wa.me/5514996977025?text=Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20%C3%8Dntegra%20Odontologia.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Pop-up Chat Tooltip */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white rounded-2xl p-4 shadow-2xl border border-[#E8C5C5] animate-bounce-short relative text-xs font-sans-body">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/31043312/pexels-photo-31043312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100"
                alt="Dra. Marcela Souza"
                className="w-8 h-8 rounded-full object-cover border border-[#C48B8B]"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white" />
            </div>
            <div>
              <p className="font-bold text-[#3A2E2B] text-xs leading-none">Dra. Marcela Souza</p>
              <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">Online agora no WhatsApp</p>
            </div>
          </div>

          <p className="text-[#5A4A47] text-[11px] leading-snug">
            Olá! Gostaria de tirar dúvidas ou agendar uma avaliação na Íntegra Odontologia em Bauru?
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-[11px]"
          >
            <Send className="w-3 h-3" />
            <span>Iniciar Conversa</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        className="relative group p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <svg className="w-7 h-7 fill-white relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>

    </div>
  );
};
