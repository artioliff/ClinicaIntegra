import { waLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-xl hover:bg-[#1da851] hover:scale-110 transition-all duration-200"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}
