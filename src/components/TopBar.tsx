import { MapPin, Clock, Phone } from "lucide-react";
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  HOURS_SHORT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/config/site";
import { InstagramIcon } from "@/components/icons";

export default function TopBar() {
  return (
    <div className="bg-[#9E6162] text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
            {ADDRESS_LINE} · {ADDRESS_CITY}
          </span>
          <span className="hidden sm:block text-white/40" aria-hidden="true">
            |
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 shrink-0" aria-hidden="true" />
            {HOURS_SHORT}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-rose-200 transition-colors"
          >
            <InstagramIcon className="w-3 h-3" />
            {INSTAGRAM_HANDLE}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1.5 hover:text-rose-200 transition-colors"
          >
            <Phone className="w-3 h-3" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}
