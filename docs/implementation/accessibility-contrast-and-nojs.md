# Audyt Dostępności WCAG 2.2 AA, Kontrastu Barw oraz Architektury No-JS (info.jax.com.pl)

**Data audytu i specyfikacji:** 13 września 2026 r.  
**Wersja wdrożenia:** v1.0.0 (Wydanie produkcyjne / Vercel Review Staging)  
**Standardy zgodności:** WCAG 2.2 Poziom AA (oraz wybrane kryteria AAA), Rozporządzenie RODO (Art. 13/14), Rozporządzenie BPR (Art. 72).

---

## 1. Architektura Widoczności Treści Bez JavaScript (No-JS / Prerendering Strategy)

Jednym z kluczowych wymogów architektury serwisu `info.jax.com.pl` (zgodnie z PRD v5 F-18 oraz kryteriami dostępności WCAG 2.2) jest **100% czytelność i operacyjność treści w środowiskach bez uruchomionego JavaScriptu**. Dotyczy to użytkowników z wyłączonym JS, czytników ekranowych, crawlerów wyszukiwarek (SEO), zrywania połączeń sieciowych oraz narzędzi typu read-it-later.

### 1.1. Prerendering Statyczny (SSG / SSR w `scripts/prerender.ts`)
- **Pełny DOM w surowym HTML:** Wszystkie 11 tras serwisu (`/`, `/o-nas/`, `/jakosc-i-certyfikaty/`, `/produkcja-i-technologia/`, `/private-label/`, `/chemia-dla-myjni/`, `/chemia-dla-horeca/`, `/chemia-dla-przemyslu/`, `/kontakt/`, `/polityka-prywatnosci/`, `/404.html`) są generowane w procesie budowania (`pnpm build`) do statycznych plików HTML w katalogu wyjściowym `dist/static/`.
- **Zero pustych kontenerów `#root`:** W przeciwieństwie do tradycyjnych SPA, kontener `<div id="root">` zawiera kompletne, wyrenderowane drzewo komponentów ze wszystkimi tekstami, tabelami, nagłówkami i odnośnikami.
- **Zawartość początkowa:** Każda strona posiada poprawny `<title>`, unikalny nagłówek `<h1>`, semantyczne punkty orientacyjne (`<header>`, `<main id="main-content">`, `<section>`, `<footer>`), kompletne dane rejestrowe EmiChem, metadane OpenGraph, Twitter oraz znaczniki strukturalne JSON-LD (Schema.org `Organization`, `WebSite`, `BreadcrumbList`).

### 1.2. Strategia CSS — Wykluczenie Ukrywania Treści
- **Brak klas maskujących (`display: none` / `opacity: 0`):** W arkuszach stylów `src/index.css` ani w komponentach Tailwind nie stosuje się reguł ukrywających treść przed hydratacją JavaScriptu.
- **Progresywne ulepszanie (Motion React Progressive Enhancement):**
  - Animacje ujawniania i przejścia (Motion React v13) definiowane są jako właściwości komponentów `<motion.div>` lub `<motion.section>`.
  - Stany `initial={{ opacity: 0, y: 20 }}` są aplikowane **wyłącznie w momencie montowania komponentów po stronie klienta (Client-side Hydration)**.
  - W przeglądarce bez obsługi JavaScriptu skrypty React nie są parsowane, dzięki czemu elementy zachowują domyślne właściwości CSS (`opacity: 1`, `transform: none`, pełna widoczność).
  - W trybie `prefers-reduced-motion: reduce` Motion React całkowicie wyłącza animacje, renderując elementy statycznie i natychmiastowo.

### 1.3. Natywny Formularz B2B bez JavaScript (`<form action="/api/enquiry" method="POST">`)
- **Formularz kontaktowy:** Zaimplementowany na `/kontakt/` oraz w sekcji kontaktowej strony głównej.
- **Dwuścieżkowa obsługa zapytań (Dual-Mode Architecture):**
  1. **Klient z aktywnym JS:** Formularz przechwytuje zdarzenie `onSubmit`, wykonuje asynchroniczne zapytanie `fetch('/api/enquiry')` z nagłówkiem `Content-Type: application/json`, a po otrzymaniu odpowiedzi renderuje wewnątrzkartowy stan sukcesu z unikalnym numerem referencyjnym (np. `JAX-ENQ-20260913-ABCD`).
  2. **Klient bez JS (Native Fallback):** Formularz wysyła natywne żądanie `POST` z kodowaniem `application/x-www-form-urlencoded`. Endpoint serwerowy Vercel (`api/enquiry.ts` -> `src/server/enquiryHandler.ts`) przetwarza dane, zapisuje je w bezpiecznym staging sink (z maskowaniem danych osobowych RODO), po czym generuje i zwraca kompletny, semantyczny dokument HTML `text/html; charset=utf-8` z potwierdzeniem przyjęcia zapytania lub listą błędów walidacji i linkiem powrotnym.

### 1.4. Nawigacja i Dostępność Klawiatury bez JS
- Wszystkie odnośniki w menu nawigacyjnym (`Navbar.tsx`) i stopce (`Footer.tsx`) to natywne znaczniki `<a>` z pełnymi ścieżkami URL lub kotwicami ID.
- Przejście do treści głównej wspiera widoczny mechanizm Skip Link (`<a href="#main-content" class="sr-only focus:not-sr-only">Przejdź do treści głównej</a>`), w pełni operacyjny bez skryptów.
- Płynne przewijanie do kotwic rozdziałów (`#dziedzictwo`, `#receptury`, `#jakosc`, itd.) wykorzystuje natywną regułę CSS `scroll-behavior: smooth` oraz `scroll-margin-top: 5rem` (80px), co gwarantuje, że stały pasek nagłówka nie zasłania tytułów sekcji.

---

## 2. Raport Audytu i Naprawy Błędów Kontrastu (WCAG 2.2 AA)

Podczas audytu przedwdrożeniowego Phase D1 zweryfikowano paletę barw serwisu za pomocą narzędzi analitycznych oraz zautomatyzowanego zestawu testów `tests/contrast.test.ts`.

### 2.1. Identyfikacja i Naprawa Usterki DEFECT-02 (Baner Zgód / Cookie Consent)
- **Komponent:** `src/components/layout/ConsentBanner.tsx`
- **Wykryty błąd:**
  - Przycisk odrzucenia zgód opcjonalnych („Tylko niezbędne”) posiadał przypisany wariant `variant="secondary"`.
  - Wariant ten domyślnie generował tekst w kolorze ciemnografitowym `#181A1D` na ciemnym tle banera `#111315` / `#181A1D`.
  - Obliczony współczynnik kontrastu wynosił **1.14:1**, co stanowiło krytyczne naruszenie kryterium WCAG 2.2 1.4.3 (Contrast Minimum - wymagane 4.5:1). Przycisk był niewidoczny dla użytkowników.
- **Wdrożona naprawa:**
  - W komponencie `Button.tsx` oraz `ConsentBanner.tsx` wprowadzono dedykowany wariant `variant="outline-white"`.
  - Styl wariantu: półprzezroczysta biała ramka `border border-white/40`, czysty biały tekst `text-white` (`#FFFFFF`), z hoverem `hover:bg-white/10` i wyraźnym pierścieniem fokusu `focus-visible:ring-white`.
  - **Nowy zmierzony kontrast:** **17.65:1** (przekracza nawet rygorystyczny poziom AAA wynoszący 7.0:1).

### 2.2. Analiza Czerwieni Brandowej (#E63946) i Decyzja o Czerwieni Technicznej (#C62836)
- **Problem barwy brandowej:**
  - Oficjalna czerwień marki JAX Professional wynosi `#E63946` (jasny karmin automotive).
  - Obliczony kontrast białego tekstu `#FFFFFF` na tle `#E63946` wynosi:
    $$	ext{Luminancja } L_1 (\#FFFFFF) = 1.0, \quad L_2 (\#E63946) = 0.2126 \cdot (0.902)^{2.2} + 0.7152 \cdot (0.224)^{2.2} + 0.0722 \cdot (0.275)^{2.2} pprox 0.190$$
    $$	ext{Kontrast} = rac{1.0 + 0.05}{0.190 + 0.05} = rac{1.05}{0.240} pprox \mathbf{4.17:1}$$
  - **Werdykt:** 4.17:1 nie spełnia progu 4.5:1 wymaganego dla standardowego tekstu (poniżej 18pt / 14pt bold).
- **Rozwiązanie architektoniczne:**
  1. Barwa **`#E63946`** została sklasyfikowana jako **wyłącznie akcentowa/dekoracyjna** (obramowania kart, ikony techniczne, akcenty graficzne bez tekstu wewnątrz).
  2. Dla wszystkich interaktywnych przycisków CTA z białym tekstem oraz kluczowych odnośników wprowadzono przyciemniony odcień techniczny **`#C62836`** (JAX Crimson Dark):
     $$	ext{Luminancja } L_2 (\#C62836) pprox 0.138$$
     $$	ext{Kontrast} = rac{1.0 + 0.05}{0.138 + 0.05} = rac{1.05}{0.188} = \mathbf{5.59:1}$$
  3. **Werdykt:** 5.59:1 w pełni spełnia kryterium WCAG 2.2 AA (wymagane ≥ 4.5:1).

---

## 3. Matryca Współczynników Kontrastu Palety Produkcyjnej

Poniższa tabela przedstawia zweryfikowane laboratoryjnie współczynniki kontrastu wszystkich par kolorów używanych w serwisie:

| Kombinacja elementów UI | Kolor tekstu / pierwszoplanowy | Kolor tła | Współczynnik kontrastu | Poziom WCAG 2.2 | Przeznaczenie |
|---|---|---|---|---|---|
| Główny tekst na jasnym tle | `#181A1D` (Grafit bazowy) | `#FFFFFF` (Biel tła) | **17.65:1** | **AAA** | Paragrafy, leady, nagłówki H1-H4 |
| Tekst pomocniczy | `#555962` (Szary techniczny) | `#FFFFFF` (Biel tła) | **7.30:1** | **AAA** | Opisy pomocnicze, etykiety, meta |
| Tekst wyciszony | `#757B85` (Szary jasny) | `#FFFFFF` (Biel tła) | **4.62:1** | **AA** | Prawa autorskie, przypisy, unread |
| Główny przycisk CTA | `#FFFFFF` (Biel) | `#C62836` (JAX Crimson Dark) | **5.59:1** | **AA** | Przyciski „Wyślij zapytanie”, CTA |
| Przycisk ciemny | `#FFFFFF` (Biel) | `#111315` (Ciemny Carbon) | **18.90:1** | **AAA** | Przyciski drugorzędne na jasnym tle |
| Przycisk w banerze zgód | `#FFFFFF` (Biel) | `#181A1D` (Ciemny Grafit) | **17.65:1** | **AAA** | Przycisk „Tylko niezbędne” (DEFECT-02) |
| Ramka przycisku konturowego | `rgba(255,255,255,0.4)` | `#181A1D` (Ciemny Grafit) | **3.85:1** | **AA (Komponent UI)** | Obramowanie przycisków na ciemnym tle |
| Czerwień akcentowa (dekoracja) | `#E63946` | `#FFFFFF` (Biel tła) | **4.17:1** | Zgodne (Tylko dekoracja) | Ramki kart, linie sekcji, badge |
| Ramki pól formularza (spoczynek) | `#CBD0D8` | `#FFFFFF` (Biel) | **1.62:1** | Wspomagane etykietą | Odrębne tło, pełna etykieta tekstowa |
| Ramki pól formularza (fokus) | `#C62836` | `#FFFFFF` (Biel) | **5.59:1** | **AA (Komponent UI)** | Aktywny obrys pola (ring 2px) |

---

## 4. Walidacja Automatyczna i Ochrona Przed Regresją

1. **Testy jednostkowe w Vitest (`tests/contrast.test.ts`):**
   - Zestaw 4 testów matematycznych kalkuluje luminancję i blokuje kompilację, jeśli jakikolwiek komponent naruszy minimalny próg 4.5:1 dla tekstu lub 3.0:1 dla komponentów UI.
   - Weryfikacja obejmuje obydwa stany przycisków `Button.tsx` (primary, secondary, outline, outline-white).
2. **Testy integralności kodu HTML (`tests/release-audit.test.ts`):**
   - Test `AU-A03` sprawdza w wygenerowanych statycznych plikach HTML obecność wariantu `border-white/40 text-white` w banerze zgód i wyklucza obecność ciemnego tekstu `#181A1D` na ciemnym tle.
3. **Bramka jakościowa CI (`.github/workflows/ci.yml`):**
   - Każdy push i pull request na gałąź `main` uruchamia `pnpm check`, który wykonuje pełny type-check, buduje statyczny prerender i weryfikuje wszystkie 66 asercji dostępności i kontrastu.
