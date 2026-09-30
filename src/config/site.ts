/**
 * Fonte única de verdade dos dados da clínica.
 *
 * Nunca escrever telefone, WhatsApp, endereço, horário, Instagram ou listas de
 * navegação/tratamentos inline em um componente — sempre importar daqui.
 */

/* ---------------------------------------------------------------- contato */

/** Formato para exibição: (14) 99697-7025 */
export const PHONE_DISPLAY = "(14) 99697-7025";

/** Formato E.164 para href="tel:": +55 + DDD + 9 dígitos */
export const PHONE_TEL = "+5514996977025";

/** Só dígitos (55 + DDD + número) para links wa.me */
export const WHATSAPP_NUMBER = "5514996977025";

/** Mensagem usada em todos os CTAs genéricos de agendamento */
export const DEFAULT_WA_MESSAGE =
  "Olá! Gostaria de agendar uma consulta na Íntegra Odontologia.";

/**
 * Monta um link wa.me com a mensagem pré-preenchida.
 * @example waLink("Olá, quero saber sobre facetas")
 */
export function waLink(text: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ------------------------------------------------------- endereço/horário */

export const ADDRESS_LINE = "Rua Sete de Setembro 7-18 – Centro";
export const ADDRESS_CITY = "Bauru/SP";
export const ADDRESS_CEP = "CEP 17015-070";
export const ADDRESS_FULL = `${ADDRESS_LINE}, ${ADDRESS_CITY}, ${ADDRESS_CEP}`;

export const HOURS_SHORT = "Seg – Sex: 08h às 18h";
export const HOURS_LONG = "Segunda a Sexta: 08h às 18h";

/* -------------------------------------------------------------- redes/social */

export const INSTAGRAM_URL = "https://instagram.com/integraodontologia_bauru";
export const INSTAGRAM_HANDLE = "@integraodontologia_bauru";

/**
 * Link de busca do Google (Meu Negócio / Maps).
 * Enquanto não recebermos o link permanente do perfil, esta busca resolve para
 * a clínica e sempre aponta para o lugar certo.
 */
export const GOOGLE_MAPS_SEARCH =
  "https://www.google.com/maps/search/?api=1&query=Integra+Odontologia+Bauru";

/** Embed do Google Maps do endereço da clínica */
export const MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS_FULL
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

/** Link "Como chegar" */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_FULL
)}`;

/* ------------------------------------------------------------- navegação */

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Colaboradores", href: "#colaboradores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

/* ------------------------------------------------------------ tratamentos */

/** Lista curta exibida no rodapé (âncora para a seção de tratamentos) */
export const TREATMENT_LINKS: NavLink[] = [
  { label: "Facetas & Lentes", href: "#tratamentos" },
  { label: "Alinhadores Invisíveis", href: "#tratamentos" },
  { label: "Clareamento Dental", href: "#tratamentos" },
  { label: "Implantes", href: "#tratamentos" },
  { label: "Tratamento de Canal", href: "#tratamentos" },
  { label: "Prevenção & Manutenção", href: "#tratamentos" },
];

/** Opções do select "Tratamento de interesse" do formulário */
export const SERVICE_OPTIONS = [
  "Facetas & Lentes",
  "Alinhadores",
  "Clareamento",
  "Implantes",
  "Tratamento de Canal",
  "Consulta de Avaliação",
] as const;

/* ------------------------------------------------------------------ site */

export const SITE = {
  name: "Íntegra Odontologia",
  tagline: "Odontologia com Excelência em Bauru",
  city: "Bauru/SP",
} as const;
