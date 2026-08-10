import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('Avaliação Geral & Check-up');
  const [date, setDate] = useState('');
  const [shift, setShift] = useState('Manhã (08h às 12h)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const msgText = `Ol%C3%A1%2C%20Dra.%20Marcela!%20Gostaria%20de%20solicitar%20um%20agendamento%20de%20consulta%20na%20%C3%8Dntegra%20Odontologia.%0A%0A- Nome: ${encodeURIComponent(name)}%0A- Telefone: ${encodeURIComponent(phone)}%0A- Tratamento: ${encodeURIComponent(treatment)}%0A- Data Preferencial: ${encodeURIComponent(date || 'A definir')}%0A- Período: ${encodeURIComponent(shift)}%0A- Observações: ${encodeURIComponent(message || 'Sem observações')}`;
    
    const waUrl = `https://wa.me/5514996977025?text=${msgText}`;
    
    setSubmitted(true);
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF5F0] rounded-2xl shadow-2xl border border-[#E8C5C5] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#9E6162] to-[#8A5252] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#E6CA65]" />
            <div>
              <h3 className="font-serif-title font-bold text-lg leading-none">Agendamento de Consulta</h3>
              <p className="text-xs text-rose-200 mt-0.5">Íntegra Odontologia • Dra. Marcela Souza</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#3A2E2B]">
                Solicitação Enviada!
              </h3>
              <p className="text-xs text-[#5A4A47] max-w-sm mx-auto font-sans-body">
                Redirecionando você para o WhatsApp da Dra. Marcela Souza para confirmar os detalhes do seu horário.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#8A5252] hover:bg-[#6B3B3B] transition-colors"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans-body text-xs sm:text-sm">
              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#C48B8B]" />
                  <span>Nome Completo *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Juliana Santos"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8C5C5] bg-white text-[#3A2E2B] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]"
                />
              </div>

              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#C48B8B]" />
                  <span>Telefone com DDD (WhatsApp) *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(14) 99999-9999"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8C5C5] bg-white text-[#3A2E2B] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]"
                />
              </div>

              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Tratamento de Interesse</span>
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8C5C5] bg-white text-[#3A2E2B] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]"
                >
                  <option value="Avaliação Geral & Check-up">Avaliação Geral & Check-up</option>
                  <option value="Lentes de Contato de Porcelana">Lentes de Contato de Porcelana</option>
                  <option value="Clareamento Dental Premium">Clareamento Dental Premium</option>
                  <option value="Alinhadores Invisíveis">Alinhadores Invisíveis</option>
                  <option value="Harmonização Orofacial (HOF)">Harmonização Orofacial (HOF)</option>
                  <option value="Implantes & Próteses">Implantes & Próteses</option>
                  <option value="Limpeza & Profilaxia">Limpeza & Profilaxia</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#4A3A38] font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#C48B8B]" />
                    <span>Data Preferencial</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8C5C5] bg-white text-[#3A2E2B] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A3A38] font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C48B8B]" />
                    <span>Período</span>
                  </label>
                  <select
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8C5C5] bg-white text-[#3A2E2B] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]"
                  >
                    <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                    <option value="Tarde (13h30 às 18h)">Tarde (13h30 às 18h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#4A3A38] font-semibold mb-1">
                  Mensagem ou Dúvida (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva qualquer observação ou detalhe sobre sua saúde bucal..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8C5C5] bg-white text-[#3A2E2B] focus:outline-none focus:ring-2 focus:ring-[#C48B8B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#C48B8B] to-[#8A5252] hover:from-[#A26868] hover:to-[#6B3B3B] shadow-md transition-all cursor-pointer mt-2"
              >
                Confirmar Agendamento no WhatsApp
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
