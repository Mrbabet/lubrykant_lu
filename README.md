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

- `src/components/` — sekcje strony (Hero, Philosophy, Features, Lifestyle, Collection, Ingredients, Testimonials, Story, Footer)
- `public/images/` — zdjęcia i wideo używane na stronie (serwowane bez przetwarzania)
- `media-source/` — oryginały i materiały niewykorzystane na stronie (nie trafiają do builda)

Zdjęcia w `public/` są zoptymalizowane (max. 1600 px, JPEG q80). Nowe zdjęcia przed dodaniem warto zmniejszyć, np.:

```bash
sips -Z 1600 -s formatOptions 80 plik.jpg
```

## Wdrożenie

Strona jest hostowana na Cloudflare Pages — katalog wyjściowy builda: `dist`.
