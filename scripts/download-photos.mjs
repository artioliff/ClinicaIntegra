/**
 * Baixa as fotos do Pexels usadas no site e as converte para WebP local.
 *
 *   npm run photos
 *
 * Por que local: remove a dependência de terceiro no carregamento (LCP), permite
 * AVIF/WebP pelo próprio Next e mantém as imagens versionadas com o site.
 * Licença Pexels: uso comercial livre, sem atribuição obrigatória.
 *
 * Troque estas fotos pelas fotos reais da clínica assim que estiverem disponíveis.
 */
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const PEXELS = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${h}&w=${w}`;

const PHOTOS = [
  { id: "5355841", w: 1200, h: 627, out: "atendimento-dentista" }, // hero + card da Dra. Marcela
  { id: "5355920", w: 400, h: 400, out: "clinica-recepcao" },
  { id: "6629415", w: 400, h: 400, out: "clinica-equipamentos" },
  { id: "5355858", w: 400, h: 400, out: "clinica-sala" },
  { id: "6629416", w: 400, h: 400, out: "clinica-instrumentos" },
  { id: "5355705", w: 400, h: 400, out: "sorriso-a" }, // resultados (antes/depois)
  { id: "19879741", w: 400, h: 400, out: "sorriso-b" },
  { id: "19976560", w: 400, h: 400, out: "sorriso-c" },
  { id: "19879740", w: 400, h: 400, out: "sorriso-d" },
  { id: "6627407", w: 500, h: 600, out: "equipe-ortodontia" }, // card da Dra. Ana Carolina
];

mkdirSync("public/images", { recursive: true });

for (const { id, w, h, out } of PHOTOS) {
  const res = await fetch(PEXELS(id, w, h));
  if (!res.ok) throw new Error(`${id}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const info = await sharp(buf)
    .resize(w, h, { fit: "cover" })
    .webp({ quality: 80 })
    .toFile(`public/images/${out}.webp`);
  console.log(
    `✓ ${out}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(
      0,
    )}KB`,
  );
}
