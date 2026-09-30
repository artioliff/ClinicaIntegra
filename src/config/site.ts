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
  ADDRESS_FULL,
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

/** Link "Como chegar" */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_FULL,
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

/* -------------------------------------------------------------- pendências */

/**
 * ⚠️ PLACEHOLDER — SUBSTITUIR pelos CROs reais.
 * O número de registro no CRO é obrigatório na publicidade odontológica;
 * "123456" está aqui apenas como marcador de posição e NÃO deve ir ao ar.
 * Cada profissional precisa do seu próprio registro.
 */
export const CRO_PLACEHOLDER = "CRO-SP 123456";

/* ------------------------------------------------------------------ site */

/** Política de privacidade (LGPD) — usada no rodapé e no formulário. */
export const PRIVACY_PATH = "/privacidade/";

/**
 * Datas explícitas em vez de `new Date()` no render.
 *
 * O site é estático: a data calculada em runtime seria congelada na build e,
 * no cliente, recalculada — gerando hydration mismatch e uma data visivelmente
 * antiga. Atualize as constantes quando o conteúdo mudar.
 */
export const LAST_UPDATED = "30/09/2026";
export const COPYRIGHT_YEAR = 2026;

export const SITE = {
  name: "Íntegra Odontologia",
  tagline: "Odontologia com Excelência em Bauru",
  city: "Bauru/SP",
} as const;

/**
 * URL base do site (canonical, Open Graph e sitemap).
 *
 * Ordem de resolução:
 * 1. NEXT_PUBLIC_SITE_URL      — definir no .env.local e no painel do Render
 * 2. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL — fallback em outras hospedagens
 * 3. localhost — apenas desenvolvimento (NÃO vale publicar sem o item 1)
 *
 * A URL é embutida na build: trocar depois exige "Clear build cache & deploy"
 * no Render.
 */
function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";
  const withProtocol = /^https?:\/\//.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
}

export const SITE_URL = resolveSiteUrl();
