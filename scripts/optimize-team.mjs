/**
 * Recorta o retrato dos criativos de rede social da equipe e gera os WebP
 * usados nos cards de "Nossa Equipe".
 *
 *   npm run team
 *
 * Os arquivos em src/assets/img são pares 9:16 (posts/story) prontos, com
 * texto, logo e legenda — não servem direto no card. Este script extrai só
 * o retrato da profissional (coordenadas de crop, medidas no original) e
 * dimensiona para o box do card (800x656 ≈ 1.22:1).
 *
 * Se trocarem as fotos, ajuste as coordenadas (Paint/GIMP mostram a posição
 * do cursor em pixels) e rode de novo.
 */
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const TARGET_W = 800;
const TARGET_H = 656; // ≈ 1.22:1, o mesmo formato do card

const TEAM = [
  {
    name: "equipe-karita",
    src: "src/assets/img/karita.jpg",
    // corta à direita do texto "Precisamos falar sobre implantes"
    extract: { left: 540, top: 530, width: 401, height: 329 },
  },
  {
    name: "equipe-lilian",
    src: "src/assets/img/lilian.jpg",
    // corta à direita do texto "você não precisa ter medo de sorrir"
    extract: { left: 510, top: 500, width: 390, height: 320 },
  },
  {
    name: "equipe-marcela",
    src: "src/assets/img/marcela.jpg",
    // corta à direita do texto "Se você tem medo de dentista..."
    extract: { left: 500, top: 520, width: 400, height: 328 },
  },
];

mkdirSync("public/images", { recursive: true });

for (const { name, src, extract } of TEAM) {
  const info = await sharp(src)
    .extract(extract)
    .resize(TARGET_W, TARGET_H, { fit: "fill" })
    .webp({ quality: 80 })
    .toFile(`public/images/${name}.webp`);
  console.log(
    `✓ ${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`,
  );
}
