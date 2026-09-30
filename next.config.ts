import type { NextConfig } from "next";

/**
 * Site 100% estático — publicado como Render Static Site.
 *
 * - `output: "export"` gera a pasta `out/` (Publish Directory do Render).
 * - `images.unoptimized` é obrigatório em export: o otimizador do Next não
 *   existe sem servidor. As imagens já saem otimizadas dos scripts
 *   `npm run images` e `npm run photos` (WebP dimensionados para o layout).
 * - Os headers de segurança NÃO podem ficar aqui (não há servidor): eles são
 *   configurados no painel do Render → Site → HTTP Headers, caminho `/`.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
