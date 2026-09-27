> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Asset Manifest & Provenance Inventory — JAX_Info

**Version:** 1.0 · **Date:** 13 September 2026  
**Product:** https://info.jax.com.pl · **Owner:** Michał Mierzwa EmiChem P.P. / JAX Professional  
**Scope:** Reusable corporate and brand assets, provenance, technical specifications, alt text intent, and optimization plan.

---

## 1. Owner Standing Authorisation & Security Boundaries

- **Authorisation Basis (13 September 2026):** The product owner confirmed that `JAX_Pro_Auto` and `JAX_Info` represent the same manufacturing company (Michał Mierzwa EmiChem P.P.) and that the company owns full rights to all logos, product imagery, catalog layouts, and technical documentation. Standing permission is granted to inspect and reuse these assets without repeated requests.
- **Integrity Rule for Source Project:** The source repository `JAX_Pro_Auto` is strictly read-only for this task and must not be modified, overwritten, or referenced via runtime dependencies.
- **Privacy & Manifest Hygiene:** Shared documentation and manifests contain neutral repository-relative paths (`source: JAX_Pro_Auto/...` or public URLs), never absolute private machine paths.
- **Authenticity Mandate:** Only authentic company photographs, official logos, and inspected document files are used. No synthetic AI-generated imagery impersonating the factory, staff, or product labels is permitted.

---

## 2. Brand Identity & Logo Assets

| Asset ID | Neutral Source Path | Subject / Visual Description | Dimensions & Format | Transparency | Intended Target Path | Planned Usage in JAX_Info | Alt Text Intent (PL) |
|---|---|---|---|---|---|---|---|
| **AST-LOGO-01** | `JAX_Pro_Auto/public/jax-pro-logo.png` | Oficjalny znak marki JAX Professional (czerwony sygnet JAX + czarny napis Professional) na jasne tło | 230 × 73 px, PNG | RGBA (Transparent) | `public/assets/branding/jax-pro-logo.png` | Globalny nagłówek (`Navbar`), stopka jasna, dokumenty | *„Logo JAX Professional — polski producent chemii profesjonalnej”* |
| **AST-LOGO-02** | `JAX_Pro_Auto/public/jax-pro-logo-on-dark.png` | Wariant logotypu JAX Professional na ciemne tło (biały napis Professional, czerwony sygnet) | 230 × 73 px, PNG | RGBA (Transparent) | `public/assets/branding/jax-pro-logo-on-dark.png` | Ciemne sekcje (np. stopka, nagłówek w trybie dark, sekcja Hero) | *„Logo JAX Professional na ciemnym tle”* |
| **AST-LOGO-03** | `JAX_Pro_Auto/public/jax_pro_logo.webp` | Zoptymalizowany format WebP oficjalnego logo JAX Professional | 230 × 73 px, WebP | RGBA (Transparent) | `public/assets/branding/jax-pro-logo.webp` | Domyślne ładowanie w przeglądarkach wspierających WebP | *„Logo JAX Professional”* |
| **AST-ICON-01** | `JAX_Pro_Auto/public/favicon.svg` | Wektorowa ikona sygnetu JAX (litera J z charakterystycznym ścięciem i czerwoną kropką) | Skalowalny SVG (619 B) | Wektorowa | `public/favicon.svg` | Favicon serwisu, ikona paska adresu, touch-icon | *„Sygnet marki JAX”* |

---

## 3. Product & Packaging Photography (Selected Candidates)

Wszystkie produkty zostały zweryfikowane w katalogu `JAX_Pro_Auto/public/products/`. Stanowią autentyczne rendery/fotografie rzeczywistych produktów w opakowaniach handlowych.

| Asset ID | Neutral Source Path | Product Code & Description | Dimensions & Format | Transparency | Intended Target Path | Planned Section in JAX_Info | Alt Text Intent (PL) |
|---|---|---|---|---|---|---|---|
| **AST-PROD-01** | `JAX_Pro_Auto/public/products/jax-045.webp` | JAX 045 Aktywna Piana (butelka 1L z atomizerem i etykietą) | 533 × 583 px, WebP | RGBA (Transparent) | `public/assets/products/jax-045.webp` | Hero (`#start`), Sekcja zastosowań (`#zastosowania`) | *„Butelka 1L preparatu JAX 045 Aktywna Piana z atomizerem”* |
| **AST-PROD-02** | `JAX_Pro_Auto/public/products/jax-100.webp` | JAX 100 Szampon samochodowy kombi (butelka 1L) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-100.webp` | Sekcja produkcji (`#produkcja`), Zastosowania | *„Preparat myjący JAX 100 w opakowaniu 1L”* |
| **AST-PROD-03** | `JAX_Pro_Auto/public/products/jax-103.webp` | JAX 103 Clean Wheel K (butelka 750 ml) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-103.webp` | Zastosowania branżowe | *„Preparat do mycia felg i aluminium JAX 103 (750 ml)”* |
| **AST-PROD-04** | `JAX_Pro_Auto/public/products/jax-108.webp` | JAX 108 Czernidło do opon (butelka 750 ml) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-108.webp` | Zastosowania branżowe | *„Preparat do pielęgnacji gumy JAX 108 w butelce ze spryskiwaczem”* |
| **AST-PROD-05** | `JAX_Pro_Auto/public/products/jax-113.webp` | JAX 113 Letni płyn do spryskiwaczy (kanister 5L z rączką) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-113.webp` | `#produkcja` (prezentacja formatu kanistra 5L) | *„Kanister 5L płynu do spryskiwaczy JAX 113 z ergonomiczną rączką”* |
| **AST-PROD-06** | `JAX_Pro_Auto/public/products/jax-114.webp` | JAX 114 Zimowy płyn do spryskiwaczy -20°C (kanister 5L) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-114.webp` | `#produkcja`, Zastosowania | *„Kanister 5L zimowego płynu JAX 114 odpornego do -20°C”* |
| **AST-PROD-07** | `JAX_Pro_Auto/public/products/jax-115.webp` | JAX 115 Odmrażacz do szyb (butelka 750 ml z triggerem) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-115.webp` | Zastosowania branżowe | *„Odmrażacz do szyb JAX 115 w poręcznej butelce z triggerem”* |
| **AST-PROD-08** | `JAX_Pro_Auto/public/products/jax-20.webp` | JAX 20 Płyn do prania dywanów i tapicerki (butelka 1L) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-20.webp` | Zastosowania HoReCa / Pralnictwo | *„Specjalistyczny płyn do prania ekstrakcyjnego JAX 20 (1L)”* |
| **AST-PROD-09** | `JAX_Pro_Auto/public/products/jax-27.webp` | JAX 27 AC-Cleaner płyn do klimatyzacji (pozwolenie MZ nr 7214/17) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-27.webp` | Zgodność i Dokumenty, Biocydy | *„Preparat dezynfekcyjny do klimatyzacji JAX 27 (pozwolenie MZ nr 7214/17)”* |
| **AST-PROD-10** | `JAX_Pro_Auto/public/products/jax-60.webp` | JAX 60 Alkaliczny środek czyszczący niepieniący (butelka 1L) | 500 × 500 px, WebP | RGBA (Transparent) | `public/assets/products/jax-60.webp` | Zastosowania przemysłowe / posadzki | *„Przemysłowy preparat do posadzek i hal JAX 60 (1L)”* |

---

## 4. Documentation & Catalog Assets

| Asset ID | Neutral Source Path | Subject / Description | Format & Size | Intended Target Path | Planned Usage in JAX_Info | Document Metadata & Compliance Notes |
|---|---|---|---|---|---|---|
| **AST-DOC-01** | `jax.com.pl/userdata/public/assets//Certyfikat ISO 9001 14001 pol 2024.pdf` | Oficjalny certyfikat Zintegrowanego Systemu Zarządzania TÜV SÜD | PDF (192 KB), 1 strona A4 | `public/documents/certyfikat-iso-9001-14001-emichem-jax.pdf` | `/jakosc-i-certyfikaty/`, `#jakosc`, `/zgodnosc-i-dokumenty/` | Nr: `12 100/104 50928 TMS`. Oryginał nienaruszony; na stronie udostępniona pełna transkrypcja HTML dla czytników |
| **AST-DOC-02** | `JAX_Pro_Auto/materials/catalog_pdf/Katalog_JAX_Professional_Auto.pdf` | Kompletny oficjalny katalog produktów JAX Professional Auto (16 stron) | PDF (1.77 MB), 16 stron A4 | `public/documents/katalog-jax-professional-auto.pdf` | `/zgodnosc-i-dokumenty/`, stopka, download | Pełny katalog techniczny z podziałem na 7 kategorii, odczynami pH i pojemnościami |
| **AST-MEDIA-01** | `JAX_Pro_Auto/public/catalog-cover.webp` | Estetyczna okładka katalogu JAX Professional Auto na ciemnym tle | 720 × 1018 px, WebP, RGB | `public/assets/media/catalog-cover.webp` | Karta pobierania katalogu w sekcji dokumentów i footerze | *„Okładka oficjalnego katalogu JAX Professional Auto”* |
| **AST-MEDIA-02** | `JAX_Pro_Auto/materials/catalog_pages/page-01.png` | Skan wysokiej rozdzielczości strony tytułowej katalogu | 2481 × 3508 px, PNG, RGB | Przetworzenie do zoptymalizowanego WebP (max 1200px) | Podgląd materiałów drukowanych w `/o-nas/` i `/zgodnosc-i-dokumenty/` | *„Strona tytułowa katalogu produktów EmiChem JAX”* |

---

## 5. Technical Optimization & Delivery Plan

1. **Format Conversion & Responsive Variants:**
   - Wszystkie obrazy rastrowe będą serwowane jako nowoczesne formaty **WebP** oraz **AVIF** z zachowaniem fallbacku PNG/JPEG.
   - W sekcjach wymagających elastyczności (Hero, Produkcja) wygenerowane zostaną warianty `srcset`:
     - Mobile: szerokość do 640 px (waga docelowa ≤ 80 KB).
     - Tablet: szerokość do 1024 px (waga docelowa ≤ 150 KB).
     - Desktop: szerokość do 1600 px (waga docelowa ≤ 250 KB).
2. **Prioritization & Lazy Loading:**
   - Obraz LCP w sekcji Hero (`#start`) oznaczony atrybutem `fetchpriority="high"` i wyłączonym `loading="lazy"`.
   - Wszystkie pozostałe grafiki w rozdziałach 02–08 oraz na podstronach posiadają natywne `loading="lazy"` oraz `decoding="async"`.
   - Wszystkie tagi `<img>` mają sztywno zadeklarowane atrybuty `width` i `height` (oraz CSS `aspect-ratio`), co gwarantuje eliminację przesunięć układu (CLS = 0).
3. **Storage & Path Conventions:**
   - W projekcie `JAX_Info` zasoby zostaną zorganizowane w logicznej strukturze:
     - `public/assets/branding/` (logotypy, sygnety, favicon)
     - `public/assets/products/` (przezroczyste rendery produktów)
     - `public/assets/media/` (zdjęcia zakładu, okładki, infografiki)
     - `public/documents/` (certyfikaty PDF, katalogi techniczne)
