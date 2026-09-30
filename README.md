# Íntegra Odontologia — ClinicaIntegra

Landing page institucional da clínica odontológica **Íntegra Odontologia** (Bauru/SP).
One-page site com captação de pacientes 100% via **WhatsApp** — não há backend, banco de
dados ou envio de e-mail: o formulário monta a mensagem e abre o `wa.me` com ela pronta.

## Stack

| Camada    | Tecnologia                                        |
| --------- | ------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack)                |
| UI        | React 19 + TypeScript 5.9 (`strict`)              |
| Estilo    | Tailwind CSS v4 (`@import "tailwindcss"`)         |
| Ícones    | lucide-react                                      |
| Tooling   | ESLint 9 (`eslint-config-next`), Prettier, Vitest |

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

## Convenções

- **Dados de contato ficam só em `src/config/site.ts`** — nunca escrever o número de
  WhatsApp/endereço inline nos componentes.
- âncoras: `scroll-padding-top` no `html` compensa o header sticky.
- imagens: sempre `next/image` (local em `public/images/`), com `width`/`height`;
  `priority` apenas no LCP do hero. Fotos da equipe saem dos criativos 9:16 via
  `npm run team` (as fontes 9:16 ficam em `src/assets/img/`).
- cores: usar os tokens `@theme` de `globals.css` (`text-brand`, `bg-ink`…), não hex literal.
- links externos: `target="_blank"` sempre com `rel="noopener noreferrer"`.
- rodar `npm run format` antes de commitar (o CI valida a formatação).

## Qualidade

| Comando                | O que cobre                                 |
| ---------------------- | ------------------------------------------- |
| `npm run format:check` | formatação Prettier                         |
| `npm run lint`         | ESLint (`eslint-config-next`)               |
| `npm run typecheck`    | TypeScript strict                           |
| `npm test`             | 14 testes: `site.ts` + render de componente |
| `npm run build`        | build estático de produção                  |

O teste em `src/config/site.test.ts` é uma **regressão do bug do telefone**: falha se
qualquer arquivo `.ts/.tsx` voltar a conter o número antigo de 8 dígitos.

CI: `.github/workflows/ci.yml` roda os cinco passos em cada push/PR.

## Antes de publicar (pendências que o código não resolve sozinho)

- [ ] **Domínio** — hoje o site vive em `https://<nome>.onrender.com` e
      `NEXT_PUBLIC_SITE_URL` aponta para lá; ao comprar domínio, atualizar a
      variável no Render + **Clear build cache & deploy**
- [ ] **Logo/favicon reais** — o atual é um ✦ gerado por `npm run images`
- [ ] **CROs reais** — `CRO_PLACEHOLDER` em `src/config/site.ts` (obrigatório
      na publicidade odontológica)
- [ ] **Nomes da equipe** — fotos já são as reais; faltam sobrenome da
      Dra. Lilian e confirmação de "Dra. Marcela Almeida" (as legendas dos
      criativos dizem Almeida; o template dizia Souza)
- [ ] **Depoimentos reais** — os atuais são fictícios (vedado pelo CDC/CONAR)
- [ ] **Nota 4.9 do Google** — confirmar no Google Meu Negócio e usar o link
      permanente (hoje `GOOGLE_MAPS_SEARCH` faz uma busca)
- [ ] **Fotos reais** da clínica e antes/depois (as atuais vêm do Pexels)
- [ ] **Endereço exato** para o embed do mapa (hoje busca pelo endereço)

## Publicação no Render (Static Site)

O build usa `output: "export"` (`next.config.ts`) e gera a pasta `out/` — site 100%
estático, publicado como **Static Site** no Render: CDN global, HTTPS automático,
sem cold start e sem servidor para manter.

### 1. Criar o site

| Campo             | Valor                     |
| ----------------- | ------------------------- |
| Type              | **Static Site**           |
| Build Command     | `npm ci && npm run build` |
| Publish Directory | `out`                     |
| Branch            | `master`                  |

### 2. Variável de ambiente (antes do primeiro deploy)

| Name                   | Value                         |
| ---------------------- | ----------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://<nome>.onrender.com` |

A URL é **embutida na build**: alimenta canonical, Open Graph/Twitter, JSON-LD e
sitemap. Sem ela o site sai com `localhost`. Se mudar depois, clique em
**Clear build cache & deploy**.

### 3. Headers de segurança (Settings → HTTP Headers, path `/`)

Em export não existe servidor, então os headers saem do `next.config.ts` e ficam
no painel (foram removidos do arquivo junto com a migração):

| Header                      | Valor                                      |
| --------------------------- | ------------------------------------------ |
| `X-Frame-Options`           | `SAMEORIGIN`                               |
| `X-Content-Type-Options`    | `nosniff`                                  |
| `Referrer-Policy`           | `strict-origin-when-cross-origin`          |
| `Permissions-Policy`        | `camera=(), microphone=(), geolocation=()` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains`      |

### 4. Verificar

```bash
# headers + status
curl -I https://<nome>.onrender.com/
curl -I https://<nome>.onrender.com/privacidade/

# URL correta embutida (não pode aparecer localhost)
curl -s https://<nome>.onrender.com/sitemap.xml | grep '<loc>'
curl -s https://<nome>.onrender.com/ | grep -o '<link rel="canonical"[^>]*>'
```

Antes de subir, dá para conferir o build localmente: `npm run build && npx serve out`.

## Roadmap

- [x] Fase 0 — Git: build validado, artefatos fora do versionamento, README
- [x] Fase 1 — Bugs: número de WhatsApp corrigido e dados centralizados
- [x] Fase 2 — SEO local: metadata, favicon, sitemap, robots, JSON-LD `Dentist`
- [x] Fase 3 — Perf: imagens locais via `next/image`, tokens de tema, headers
- [x] Fase 4 — Acessibilidade: skip link, aria-*, alvos de toque, foco visível
- [x] Fase 5 — Legal: LGPD, consentimento, números não verificáveis removidos
- [x] Fase 6 — Qualidade: Prettier, Vitest, CI, upgrade do Next (0 CVEs)
- [x] Fase 7 — Deploy: `output: "export"` para o Render Static Site
- [ ] Publicação: domínio, conteúdo real e Google Meu Negócio (checklist acima)
