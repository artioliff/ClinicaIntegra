import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  DEFAULT_WA_MESSAGE,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_OPTIONS,
  SITE_URL,
  TREATMENT_LINKS,
  WHATSAPP_NUMBER,
  waLink,
} from "./site";

/** Número antigo, com 8 dígitos, que ficou gravado no site durante semanas. */
const WRONG_NUMBER = "551499697025";

describe("contato", () => {
  it("exibe o telefone com 9 dígitos + DDD", () => {
    // (14) 99697-7025 → 11 dígitos (DDD + nove)
    const digits = PHONE_DISPLAY.replace(/\D/g, "");
    expect(PHONE_DISPLAY).toMatch(/^\(\d{2}\) \d{4,5}-\d{4}$/);
    expect(digits).toHaveLength(11);
    expect(digits.startsWith("14")).toBe(true);
  });

  it("usa o formato E.164 no link tel:", () => {
    expect(PHONE_TEL).toMatch(/^\+55\d{11}$/);
  });

  it("mantém WhatsApp e telefone apontando para o mesmo número", () => {
    expect(WHATSAPP_NUMBER).toBe(PHONE_TEL.replace("+", ""));
    expect(WHATSAPP_NUMBER).toHaveLength(13);
    expect(WHATSAPP_NUMBER.endsWith(PHONE_DISPLAY.replace(/\D/g, ""))).toBe(
      true,
    );
  });
});

describe("waLink", () => {
  it("monta o link com o número correto e a mensagem codificada", () => {
    expect(waLink("Olá, tudo bem? & você?")).toBe(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Olá, tudo bem? & você?",
      )}`,
    );
  });

  it("usa a mensagem padrão quando nenhuma é passada", () => {
    const link = waLink();
    expect(link).toContain(WHATSAPP_NUMBER);
    expect(link).toContain(encodeURIComponent(DEFAULT_WA_MESSAGE));
    expect(link).not.toBe(waLink("outra mensagem"));
  });

  it("contém só dígitos e o código do país", () => {
    expect(WHATSAPP_NUMBER).toMatch(/^\d{13}$/);
    expect(PHONE_TEL.replace("+", "")).toBe(WHATSAPP_NUMBER);
  });
});

describe("listas de conteúdo", () => {
  it("navegação sem links duplicados e todos internos", () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(hrefs.every((h) => h.startsWith("#"))).toBe(true);
  });

  it("link de tratamento sempre aponta para âncora válida", () => {
    expect(TREATMENT_LINKS.length).toBeGreaterThan(0);
    expect(TREATMENT_LINKS.every((t) => t.href.startsWith("#"))).toBe(true);
  });

  it("select do formulário tem opções e não repete nenhuma", () => {
    expect(SERVICE_OPTIONS.length).toBeGreaterThan(0);
    expect(new Set(SERVICE_OPTIONS).size).toBe(SERVICE_OPTIONS.length);
  });

  it("SITE_URL não termina em barra (quebraria URLs montadas)", () => {
    expect(SITE_URL).not.toMatch(/\/$/);
  });
});

/**
 * Regressão do bug principal: o número com 8 dígitos estava escrito à mão em
 * 9 componentes. Enquanto o número errado não aparecer em lugar nenhum do
 * código-fonte, o bug não volta.
 */
describe("regressão do telefone", () => {
  it("nenhum arquivo .ts/.tsx contém o número antigo", () => {
    const offenders: string[] = [];

    (function walk(dir: string) {
      for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) walk(full);
        // os próprios testes citam o número errado de propósito
        else if (/\.tsx?$/.test(entry) && !/\.test\.tsx?$/.test(entry)) {
          const content = readFileSync(full, "utf8");
          if (content.includes(WRONG_NUMBER)) offenders.push(full);
        }
      }
    })(join(process.cwd(), "src"));

    expect(offenders).toEqual([]);
  });
});
