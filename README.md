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

## Struktura

- `src/routes.tsx` — lista podstron (adres, tytuł, opis meta)
- `src/pages/` — podstrony: strona główna, strony produktów, poradnik, 404
- `src/components/` — sekcje strony głównej, nawigacja i stopka
- `src/data/` — dane produktów (ceny, skład, linki do sklepu) i poradników
- `scripts/prerender.mjs` — po buildzie generuje gotowy HTML każdej podstrony (SEO)
- `public/images/` — zdjęcia i wideo używane na stronie (serwowane bez przetwarzania)
- `media-source/` — oryginały i materiały niewykorzystane na stronie (nie trafiają do builda)

Zdjęcia w `public/` są zoptymalizowane (max. 1600 px, JPEG q80). Nowe zdjęcia przed dodaniem warto zmniejszyć, np.:

```bash
sips -Z 1600 -s formatOptions 80 plik.jpg
```

## Dodawanie podstrony

1. Utwórz komponent w `src/pages/`.
2. Dodaj wpis do `routes` w `src/routes.tsx` (adres, tytuł, opis).
3. `pnpm run build` wygeneruje `dist/<adres>/index.html`.

## Wdrożenie

Strona jest hostowana jako Cloudflare Worker ze statycznymi plikami (`wrangler.jsonc`). Build command: `pnpm run build`, deploy command: `npx wrangler deploy`.
