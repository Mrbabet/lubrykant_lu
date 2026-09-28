# LU — Lubrykant Premium

> Repozytorium dla strony produktowej `lubrykant-lu.pl` (luksusowy polski lubrykant intymny).

Strona została zbudowana jako długo przewijany landing page (scrollytelling) zachowujący elegancję, wyrafinowany smak i minimalizm na wzór marki Überlube.

## Stos Technologiczny

- **React 19 + TypeScript**
- **Vite 6** (szybki bundler i serwer deweloperski)
- **Tailwind CSS v4** (nowy silnik kompilacji)
- **Lucide React** (ikony wektorowe)
- **Intersection Observer API** (animacje on-scroll z obsługą `prefers-reduced-motion`)

## Uruchomienie lokalne (Dev)

Wymagany menedżer pakietów: `pnpm`

```bash
# Instalacja zależności
pnpm install

# Start serwera lokalnego na porcie 5173
pnpm run dev
```

## Budowanie i Weryfikacja

```bash
# Zbuduj aplikację dla środowiska produkcyjnego
pnpm run build

# Otwórz wersję produkcyjną na lokalnym serwerze
pnpm run preview
```

## Dokumentacja

Główne wytyczne dla programistów AI i deweloperów (w tym tone of voice, paleta barw, ograniczenia budżetu CI) znajdują się w pliku `AGENTS.md`.

Inne ważne dokumenty w repozytorium:
- `docs/implementation/design-spec.md` — specyfikacja Dark Luxury Theme
- `docs/implementation/decisions.md` — log decyzji architektonicznych
- `inspirations/prd-v5/02-prd-v5.md` — główna specyfikacja produktu
