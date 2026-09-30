import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import WhatsAppFab from "./WhatsAppFab";
import { waLink } from "../config/site";

describe("WhatsAppFab", () => {
  const html = renderToStaticMarkup(<WhatsAppFab />);

  it("aponta para o WhatsApp com mensagem pronta", () => {
    expect(html).toContain(`href="${waLink()}"`);
  });

  it("abre em nova aba com rel de segurança", () => {
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it("tem rótulo acessível", () => {
    expect(html).toContain('aria-label="Falar no WhatsApp"');
  });
});
