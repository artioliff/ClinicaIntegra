/**
 * Recorta o retrato dos criativos de rede social da equipe e gera os WebP
 * usados nos cards de "Nossa Equipe".
 *
 *   npm run team
 *
 * Os arquivos em src/assets/img são pares 9:16 (posts/story) prontos, com
 * texto, logo e legenda — não servem direto no card. Este script extrai só
 * o retrato da profissional (coordenadas de crop, medidas no original) na
 * proporção 4:5 do card (`aspect-[4/5]`), exportando no tamanho nativo
 * (sem upscale: nitidez real e arquivo menor).
 *
 * Limite de largura: o texto dos criativos ocupa a metade esquerda na mesma
 * faixa vertical do rosto — passar do `left` abaixo deixa letra na foto.
 *
 * Se trocarem as fotos, ajuste as coordenadas (Paint/GIMP mostram a posição
 * do cursor em pixels), rode de novo e confira numa folha de contato.
 */
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const TEAM = [
  {
    name: "equipe-karita",
    src: "src/assets/img/karita.jpg",
    // "Precisamos falar sobre implantes" termina por volta de x505
    extract: { left: 515, top: 465, width: 426, height: 533 },
  },
  {
    name: "equipe-lilian",
    src: "src/assets/img/lilian.jpg",
    // "você não precisa ter medo de sorrir" termina por volta de x505
    extract: { left: 515, top: 470, width: 385, height: 481 },
  },
  {
    name: "equipe-marcela",
    src: "src/assets/img/marcela.jpg",
    // "Se você tem medo de dentista..." termina por volta de x480
    extract: { left: 495, top: 465, width: 405, height: 506 },
  },
];

mkdirSync("public/images", { recursive: true });

for (const { name, src, extract } of TEAM) {
  const info = await sharp(src)
    .extract(extract)
    .webp({ quality: 80 })
    .toFile(`public/images/${name}.webp`);
  console.log(
    `✓ ${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`,
  );
}
