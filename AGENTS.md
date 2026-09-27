# jax-info — Agent Instructions


### CI Budget Contract:
- **Pojedynczy job Ubuntu**: Workflow `.github/workflows/ci.yml` zawiera wyłącznie jeden job uruchamiany na `ubuntu-latest`.
- **Limit czasu 8 minut**: `timeout-minutes: 8`.
- **Brak harmonogramów (0 cron)**: Wyzwalanie wyłącznie przez `push` i `pull_request` dla gałęzi `main`.
- **Concurrency**: `cancel-in-progress: true` przerywa nadmiarowe przebiegi przy częstych commitach.
- **Kalkulacja budżetu**: Przy 30 publikowanych zmianach miesięcznie maksymalne zużycie wynosi 30 × 8 min = **240 minut/miesiąc**, co stanowi zaledwie 12% dostępnego limitu (2 000 min). Rzeczywisty czas wykonania to ok. 45-60 sekund (~30 min/miesiąc).
- Publikacja odbywa się przez Vercel (automatyczny build z repozytorium GitHub po przejściu bramki jakościowej `pnpm check`).

## About

`JAX_Info` (`info.jax.com.pl`) to oficjalna strona korporacyjno-informacyjna (scrolly landing page „O firmie”) dla **Michał Mierzwa EmiChem P.P. / marka JAX Professional** — polskiego producenta profesjonalnej chemii gospodarczej, motoryzacyjnej i przemysłowej z ponad 40-letnią tradycją (rok założenia 1984).

Serwis przenosi całą narrację korporacyjną, certyfikacje (DIN ISO 9001:2015, DIN ISO 14001:2015), skalę produkcji (linie konfekcjonowania od detalu do 1000L IBC), portfolio marek (JAX Professional, JAX Auto, Clarjax, Flame), Private Label i dedykowaną ścieżkę zapytań B2B / eksport / HoReCa poza sklep transakcyjny e-commerce (`jax.com.pl`).

Szczegółowe specyfikacje PRD, badania i dokumentacja techniczna:
- `inspirations/prd-v5/02-prd-v5.md` (wersja 5.0, wrzesień 2026 — główna specyfikacja kanoniczna)
- `docs/implementation/` (13 dokumentów wdrożeniowych: design-spec, route-content-matrix, claims-ledger, test-report, decisions, etc.)
- `inspirations/PRD-info-jax-v4-scrolly-agent.md.md` (wersja 4.0 archiwalna)

## Źródła referencyjne i benchmarki

1. **jax-pro-auto.64bit.site**:
   - Referencja zaakceptowanego klimatu wizualnego i stylu typografii (`Pragati Narrow`) dla części motoryzacyjnej oraz ogólnego charakteru marki.
   - Wzorce layoutu (hero, sekcje produktowe, CTA) jako inspiracja dla kompozycji scrolly landing page.
2. **Sklep jax.com.pl**:
   - Źródło podziału na segmenty (Auto, HoReCa, Przemysł, Dom, Agro, Medycyna, Edukacja), baza produktów oraz kanał przekierowań sprzedażowych.
3. **Materiały korporacyjne EmiChem**:
   - Certyfikaty DIN ISO 9001:2015, DIN ISO 14001:2015 (TÜV SÜD 12 100/104 50928 TMS), pozwolenie biobójcze MZ nr 4364/11 (JAX 34), Złote Medale MTP (2017 dla JAX 44, 2019 wyróżnienie dla JAX 42).

## Tech Stack (Production Implemented)

- **Framework**: React 19 + TypeScript (strict mode)
- **Bundler & SSG**: Vite 6 + TSX (`scripts/prerender.ts` — pełny prerender 11 tras statycznych do `dist/static/`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Typography**: Pragati Narrow (self-hosted WOFF/WOFF2 dla nagłówków przemysłowych) + system-ui (body)
- **Icons**: Lucide React
- **Animations**: Motion.dev / Motion v13 (scrollytelling z pełną obsługą `prefers-reduced-motion`)
- **Validation**: Zod (obsługa formularza B2B i parametrów zapytań)
- **AIO / GEO**: `public/llms.txt`, `public/llms-full.txt`, geolokalizacja (Poznań / PL-WP), Schema.org JSON-LD


## How to run / test

```bash
# Uruchomienie serwera deweloperskiego:
pnpm run dev

# Kompilacja produkcyjna i prerender SSG 11 tras:
pnpm run build

# Uruchomienie zestawu 68 testów automatycznych:
pnpm run test

# Podgląd zbudowanego serwisu statycznego:
pnpm run preview

# Pełna bramka jakościowa (lint + build + testy):
pnpm run check
```

## Conventions

- Keep changes scoped to the request; verify with the narrowest reliable command (`pnpm check` lub `pnpm test`).
- Never commit secrets, tokens, or .env files.
- Preserve existing patterns; don't rewrite working code unless asked.
- **Visual identity**: Spójność z JAX Professional i JAX PRO AUTO (biel, carbon/dark graphite, czerwień akcentowa JAX `#E63946`, mocna typografia Pragati Narrow).
- **Rygor faktograficzny (blokada wydania)**: Wszystkie twierdzenia dotyczące certyfikatów, nagród (MTP, Gazele Biznesu), biocydów i PPWR muszą być poparte dokumentacją (patrz `docs/implementation/claims-ledger.md`).
- **Dostępność i wydajność**: Zgodność z WCAG 2.1 AA (kontrast tekstu > 4.5:1, baner ciasteczek > 7:1), obsługa No-JS dla wszystkich 11 tras, Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1).
- **Budżet wydajnościowy**: JS gzipped < 180 KB, CSS < 40 KB, Hero Image < 250 KB.


<!-- If an AGENTS.local.md file exists next to this one, read it as well
     (personal overlay, intentionally not part of this repository). -->
