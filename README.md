# Íntegra Odontologia — ClinicaIntegra

Landing page institucional da clínica odontológica **Íntegra Odontologia** (Bauru/SP).
One-page site com captação de pacientes 100% via **WhatsApp** — não há backend, banco de
dados ou envio de e-mail: o formulário monta a mensagem e abre o `wa.me` com ela pronta.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + TypeScript 5.9 (`strict`) |
| Estilo | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Ícones | lucide-react |
| Tooling | ESLint 9 (`eslint-config-next`), Prettier, Vitest |

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção (estático)
npm run start      # serve o build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run format     # Prettier
npm test           # Vitest (unidade/componentes)
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # metadata (SEO), fontes, JSON-LD
│   ├── page.tsx            # composição das seções
│   ├── globals.css         # Tailwind v4 + tokens @theme
│   ├── sitemap.ts          # sitemap.xml
│   ├── robots.ts           # robots.txt
│   └── privacidade/        # política de privacidade (LGPD)
├── components/             # uma peça por seção da landing
│   ├── TopBar.tsx          # barra superior (endereço, horário, contato)
│   ├── Navbar.tsx          # navegação sticky + menu mobile
│   ├── HeroSection.tsx     # #inicio
│   ├── ClinicSection.tsx   # #clinica
│   ├── TreatmentsSection.tsx # #tratamentos (filtro por categoria)
│   ├── ResultsSection.tsx  # #resultados (antes/depois)
│   ├── DoctorSection.tsx   # #colaboradores
│   ├── TestimonialsSection.tsx # #depoimentos (carrossel)
│   ├── ContactSection.tsx  # #contato (form -> WhatsApp + mapa)
│   ├── Footer.tsx
│   └── WhatsAppFab.tsx     # botão flutuante
├── config/
│   └── site.ts             # fonte única: telefone, WhatsApp, endereço, links
└── assets/                 # imagens locais
```

## Convencções

- **Dados de contato ficam só em `src/config/site.ts`** — nunca escrever o número de
  WhatsApp/endereço inline nos componentes.
- âncoras: `scroll-padding-top` no `html` compensa o header sticky.
- imagens: sempre `next/image` (local em `public/images/`), com `width`/`height`;
  `priority` apenas no LCP do hero.
- cores: usar os tokens `@theme` de `globals.css` (`text-brand`, `bg-ink`…), não hex literal.
- links externos: `target="_blank"` sempre com `rel="noopener noreferrer"`.

## Roadmap

- [ ] Fase 2 — SEO local (metadata, favicon, JSON-LD `Dentist`, Google Meu Negócio)
- [ ] Fase 3 — imagens/fontes otimizadas e tokens de tema
- [ ] Fase 4 — acessibilidade (labels, aria-*, skip link)
- [ ] Fase 5 — LGPD e revisão de conteúdo (CROs, depoimentos, antes/depois)
- [ ] Fase 6 — testes, CI e upgrade do Next para corrigir `npm audit`
