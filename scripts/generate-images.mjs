/**
 * Gera os PNGs estáticos do projeto (favicon Apple e imagem de compartilhamento).
 *
 *   npm run images
 *
 * Motivo: o projeto não tem designer/assets — o✦ da marca e a paleta vêm de
 * src/config/site.ts. Rode de novo se a cor, o nome ou o telefone mudarem.
 */
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const BRAND = "#9E6162";
const BRAND_DARK = "#5e2828";
const WHITE = "#FFFFFF";

/** Estrela de 4 pontas (o ✦ da marca) desenhada como path para não depender de fonte. */
function sparkle(cx, cy, r, fill) {
  const w = r * 0.12; // cintura da estrela
  const c = r * 0.3;
  const d = [
    `M${cx} ${cy - r}`,
    `C${cx + w} ${cy - c} ${cx + c} ${cy - w} ${cx + r} ${cy}`,
    `C${cx + c} ${cy + w} ${cx + w} ${cy + c} ${cx} ${cy + r}`,
    `C${cx - w} ${cy + c} ${cx - c} ${cy + w} ${cx - r} ${cy}`,
    `C${cx - c} ${cy - w} ${cx - w} ${cy - c} ${cx} ${cy - r}`,
    "Z",
  ].join(" ");
  return `<path d="${d}" fill="${fill}"/>`;
}

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="40" fill="${BRAND}"/>
  ${sparkle(90, 90, 56, WHITE)}
</svg>`;

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BRAND}"/>
  <circle cx="1050" cy="-40" r="320" fill="${BRAND_DARK}" opacity="0.35"/>
  <circle cx="120" cy="640" r="260" fill="${BRAND_DARK}" opacity="0.25"/>
  <g transform="translate(96 150)">
    ${sparkle(60, 60, 58, WHITE)}
  </g>
  <text x="96" y="330" fill="${WHITE}" font-family="Georgia, 'Times New Roman', serif"
        font-size="76" font-style="italic" font-weight="700">Íntegra Odontologia</text>
  <text x="96" y="404" fill="${WHITE}" opacity="0.92"
        font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="44">Odontologia com Excelência em Bauru</text>
  <rect x="96" y="470" width="700" height="2" fill="${WHITE}" opacity="0.35"/>
  <text x="96" y="530" fill="${WHITE}" opacity="0.9"
        font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="32">(14) 99697-7025 · Centro · Bauru/SP</text>
</svg>`;

mkdirSync("public", { recursive: true });

await sharp(Buffer.from(iconSvg)).png().toFile("src/app/apple-icon.png");
await sharp(Buffer.from(ogSvg)).png({ quality: 90 }).toFile("public/og.png");

console.log("✓ src/app/apple-icon.png (180x180)");
console.log("✓ public/og.png (1200x630)");
