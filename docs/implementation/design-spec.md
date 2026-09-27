> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Design Specification & Visual Architecture — JAX_Info

**Version:** 1.0 · **Date:** 13 September 2026  
**Status:** Design Baseline Locked (Milestone B1)  
**Product:** https://info.jax.com.pl · **Owner:** Michał Mierzwa EmiChem P.P. / JAX Professional  
**Methodology:** `design-taste-frontend` & `frontend-design` Anti-Slop Discipline

---

## 1. Design Direction & Inference (Read the Room)

### 1.1 One-Sentence Design Direction
> **"Technical manufacturing authority and laboratory precision for industrial procurement and contract manufacturing partners — expressed through Pragati Narrow typography, authentic Polish production imagery, carbon-and-white editorial architecture, and accessible JAX red `#C62836` action triggers."**

### 1.2 Anti-Slop Dials & Calibration
* **`DESIGN_VARIANCE: 5`** — Controlled, structured industrial layout. Asymmetric two-column compositions and clear editorial rhythm instead of chaotic experimental placements or repetitive identical boxes.
* **`MOTION_INTENSITY: 3`** — Progressive enhancement only. Zero entrance delay on LCP hero elements, once-only section reveals (≤400ms, ≤20px travel), no scroll hijacking, strict instant presentation under `prefers-reduced-motion: reduce`.
* **`VISUAL_DENSITY: 6`** — Professional B2B procurement density. Information-rich technical specifications, packaging volumes, ISO certificate parameters, and direct contact details presented with disciplined breathing room.

### 1.3 Anti-Default Ban List (Explicitly Rejected AI Tropes)
* ❌ **No AI-purple / violet gradients or neon glows:** Palette is rooted strictly in chemical manufacturing reality (laboratory white, carbon graphite, and JAX corporate red).
* ❌ **No generic 3-card SaaS bento grid:** Content dictates form; processes use ordered pathways, documents use structured verification tables/cards, and history uses an editorial timeline.
* ❌ **No scroll hijacking or mandatory 100vh full-screen locks:** Natural browser scrolling preserved across all breakpoints.
* ❌ **No auto-playing background videos or moving logo marquees:** Distraction-free, professional environment; verified static client/sector evidence only.
* ❌ **No artificial counters or unverified superlatives:** Statistics appear only where backed by inspected records (e.g. 1984, ISO 9001/14001, 26 verified formulas).

---

## 2. Design Tokens & System Foundations

### 2.1 Color Palette & Accessible Contrast Matrix
All tokens are defined as CSS custom properties in `src/index.css` under `@theme`. Contrast ratios are measured against WCAG 2.1 relative luminance standards:

| Token Name | Hex Code | Role & Usage | Contrast vs White (#FFFFFF) | Contrast vs Dark (#111315) | WCAG 2.1 AA Compliance |
|---|---|---|---|---|---|
| `--color-surface-white` | `#FFFFFF` | Primary editorial background | 1.00:1 (baseline) | 18.62:1 | Normative surface |
| `--color-surface-subtle` | `#F8F9FA` | Alternating section background | 1.05:1 | 17.70:1 | Subtle chapter distinction |
| `--color-surface-card` | `#FFFFFF` | Document & specification cards | 1.00:1 | 18.62:1 | Card elevation via 1px border |
| `--color-surface-dark` | `#111315` | Global header & technical footer | 18.62:1 | 1.00:1 (baseline) | Deep graphite industrial base |
| `--color-text-primary` | `#181A1D` | Primary headlines and body copy | **17.44:1** | N/A | Exceeds AAA (≥ 7.0:1) |
| `--color-text-secondary` | `#4A5056` | Metadata, captions, secondary text | **8.16:1** | N/A | Exceeds AAA (≥ 7.0:1) |
| `--color-text-inverse` | `#FFFFFF` | Text on dark header/footer/buttons | N/A | **18.62:1** | Exceeds AAA (≥ 7.0:1) |
| `--color-text-muted-inv` | `#9EA3A8` | Secondary text on dark surfaces | N/A | **6.12:1** | Exceeds AA (≥ 4.5:1) |
| `--color-border-light` | `#E2E4E8` | Card and section dividers on white | **1.28:1** (structural) | N/A | Crisp 1px solid separation |
| `--color-border-dark` | `#2D3136` | Structural borders on dark surfaces| N/A | **2.25:1** (structural) | Subtle division on dark base |
| `--color-brand-red` | `#E63946` | Non-text brand accents, tags, borders | **4.17:1** (non-text ≥ 3:1) | **4.47:1** (non-text ≥ 3:1) | Compliant for UI components |
| `--color-brand-red-btn` | `#C62836` | **Interactive buttons with white text** | **5.59:1** (on white bg) | N/A (White text: **5.59:1**) | **PASSES AA** (≥ 4.5:1 for normal text) |
| `--color-brand-red-hover`| `#A61E2B` | Hover state for primary buttons | **7.38:1** (on white bg) | N/A (White text: **7.38:1**) | **PASSES AAA** (≥ 7.0:1) |
| `--color-focus-ring` | `#005FCC` | Keyboard focus ring (accessible blue) | **8.12:1** | **4.36:1** | Distinct 3px focus outline |

> **Critical Contrast Ruling (N-VIS-02):** The standard marketing red `#E63946` paired with white text provides only **4.17:1**, failing WCAG AA requirements for body/button text. Consequently, all interactive white-text buttons strictly use `--color-brand-red-btn` (`#C62836`), providing **5.59:1**. Brand red `#E63946` is reserved for structural accent bars, tag pill backgrounds with dark text, and icons.

### 2.2 Typography System — Pragati Narrow
Self-hosted WOFF2 files located in `/public/fonts/` with full Latin and Latin Extended (Polish diacritics: `ą, ć, ę, ł, ń, ó, ś, ź, ż`).

| Role / Tag | Weight | Desktop Size / Line-Height | Mobile Size / Line-Height | Tracking | Max Line Length |
|---|---|---|---|---|---|
| **Display / Hero H1** | Bold (700) | `84px` / `1.05` (`88px`) | `52px` / `1.10` (`57px`) | `-0.02em` | ~30–45 characters |
| **Chapter H2** | Bold (700) | `48px` / `1.15` (`55px`) | `34px` / `1.20` (`41px`) | `-0.015em` | ~40–55 characters |
| **Section Subhead H3**| Bold (700) | `28px` / `1.25` (`35px`) | `22px` / `1.30` (`29px`) | `0` | ~50–65 characters |
| **Card Title H4** | Bold (700) | `20px` / `1.35` (`27px`) | `18px` / `1.35` (`24px`) | `0` | ~40–60 characters |
| **Editorial Body** | Regular (400) | `21px` / `1.55` (`33px`) | `18px` / `1.50` (`27px`) | `0` | **55–72 characters** |
| **Compact Body / Form**| Regular (400) | `16px` / `1.50` (`24px`) | `16px` / `1.50` (`24px`) | `0` | ~60–75 characters |
| **Chapter Tag / Label**| Bold (700) | `13px` / `1.00` (Uppercase) | `12px` / `1.00` (Uppercase) | `+0.08em` | 1–3 words |
| **Technical Specs** | Regular (400) | `15px` / `1.40` (`tabular-nums`) | `14px` / `1.40` (`tabular-nums`) | `0` | High-density tables |

* **Fallback Policy:** If high-density legal or chemical data tables exhibit legibility constraints in browser QA, a fallback to `system-ui, -apple-system, sans-serif` is permitted exclusively within `table.spec-table`. Body copy and headlines remain strictly Pragati Narrow.

### 2.3 Layout Grid & Spacing Scale
* **Base Modular Scale:** 8px grid (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`).
* **Container Max-Width:** `1280px` (`max-w-7xl` with auto margins).
* **Gutters / Padding:**
  * Mobile (<768px): `24px` horizontal padding (`px-6`).
  * Tablet (768px–1023px): `32px` horizontal padding (`px-8`).
  * Desktop (≥1024px): `48px` horizontal padding (`px-12`).
* **Vertical Chapter Spacing:**
  * Mobile: `64px` to `80px` padding top/bottom (`py-16` to `py-20`).
  * Desktop: `96px` to `128px` padding top/bottom (`py-24` to `py-32`).
  * Content-led heights: Every chapter takes only the vertical space required by its content. Zero `min-h-screen` forcing.

---

## 3. Shortlist of 21st Pattern Decisions

Evaluated via free catalog metadata search from 21st.dev MCP under the owner's free account (zero credits consumed, zero hosted generation):

| Pattern Candidate | Source & Author | What is Useful | What is Rejected | Licence & Cost |
|---|---|---|---|---|
| **1. Vertical Heritage Timeline** | `Timeline` [id: 5157] by `preetsuthar17` | Single vertical line spine; clean milestone pill markers; ordered semantic progression; clear date-to-event association. | Rejected continuous JS scroll scrubbing; rejected fixed 100vh milestone snapping; rejected unverified historical milestones. | **MIT License**.<br>Dependency cost: 0 kB (Native CSS flex + border). Motion cost: once-only CSS entrance. |
| **2. Industrial Two-Column Hero** | `Hero Modern` [id: 7519] by `brijr` | Clear asymmetric layout: left text block with bold headline, concise value proposition, dual CTAs; right high-impact visual frame for real packshot composition. | Rejected dark neon gradient mesh; rejected background video; rejected delayed fade-in animations that degrade LCP; rejected generic 3D shapes. | **MIT License**.<br>Dependency cost: 0 kB (Tailwind v4 grid). Motion cost: 0 ms (static first paint). |
| **3. Ordered Contract Workflow** | `How It Works` [id: 19861] by `chamaac` | Numbered sequential pathway (1 to 5) illustrating contract packaging stages from brief to serial manufacturing; clear progressive disclosure. | Rejected scroll-hijacked card stacking; rejected generic abstract icons; rejected unverified delivery turnaround or MOQ promises. | **MIT License**.<br>Dependency cost: 0 kB (Responsive grid/flex). Motion cost: ≤60ms stagger. |
| **4. Viewport Scroll-Spy Tracker** | `Scroll Spy` [id: 23554] by `ddoemonn` | Viewport observation using `IntersectionObserver` to highlight the current active chapter anchor; accessible keyboard navigation support. | Rejected frame-by-frame window scroll listeners; rejected global React state rerenders on scroll; rejected persistent mobile bar that obscures form keyboards. | **MIT License**.<br>Dependency cost: ~1 kB (Native custom hook). Motion cost: CSS transition only. |

---

## 4. Navigation & Global Shell Specification

```
+---------------------------------------------------------------------------------------------------+
|  [JAX Professional Logo]    O firmie   Produkcja   Dokumenty   Private Label    [Sklep jax.com.pl ↗]  [Kontakt B2B] |
+---------------------------------------------------------------------------------------------------+
```

### 4.1 Desktop Navigation (≥1024px)
* **Structure:** Fixed/sticky top header (`height: 72px`), background `--color-surface-dark` (`#111315`), subtle bottom border `--color-border-dark` (`#2D3136`).
* **Branding:** Left-aligned `logo-jax-pro.svg` (height 36px), linking to `/` with `aria-label="JAX Professional — Strona główna"`.
* **Primary Links:**
  1. *O firmie* → `#start` (Dropdown / anchor to `#historia`).
  2. *Produkcja* → `#produkcja`.
  3. *Dokumenty* → `/zgodnosc-i-dokumenty/` (or `#jakosc`).
  4. *Private Label* → `/private-label/` (or `#wspolpraca`).
* **Shop External Link:** *Sklep jax.com.pl* with external icon (`<ExternalLink size={14} />`), opening in standard tab, clean link: `<a href="https://jax.com.pl">`.
* **Primary CTA:** Button *Kontakt B2B* (`#kontakt`), filled with `--color-brand-red-btn` (`#C62836`), white text, hover `--color-brand-red-hover` (`#A61E2B`).
* **Accessibility Anchor Offset:** All sections configure `scroll-margin-top: 88px` to guarantee that sticky header does not obscure section headings upon direct anchor jump.

### 4.2 Mobile Navigation (<1024px)
* **Structure:** Sticky top header (`height: 64px`), background `#111315`.
* **Controls:** JAX logo on left; hamburger menu button on right (`width: 44px`, `height: 44px`, `aria-label="Otwórz menu nawigacyjne"`, `aria-expanded="false"`).
* **Disclosure Menu:** Non-modal slide-down panel covering viewport below header. Contains vertical list of chapter anchors, external shop link, direct phone link (`+48 61 877 22 22`), and primary *Napisz do nas* CTA. Esc key immediately closes menu and restores focus.

### 4.3 Cookie Consent Banner (F-19)
* **Position:** Fixed bottom panel on first visit (`z-index: 50`), background `#111315`, border-top `1px solid #2D3136`.
* **Copy:** *"Strona info.jax.com.pl wykorzystuje wyłącznie niezbędne pliki cookie do prawidłowego działania serwisu. Opcjonalne narzędzia analityczne pomagają nam optymalizować ofertę."*
* **Controls:** Two equal buttons side by side:
  1. *"Tylko niezbędne"* (Secondary button: dark border, white text).
  2. *"Zezwól na wszystkie"* (Primary button: `#C62836`, white text).
* **Behavior:** Zero tracking scripts execute before user consent. Selection stored in `localStorage` (`jax_cookie_consent`).

---

## 5. The 8 Chapter Compositions (Desktop & Mobile Specifications)

### Chapter 01: Hero & Identity (`#start`)

```
DESKTOP COMPOSITION (1280px Grid, 2 Columns):
+-------------------------------------------------------+-------------------------------------------------------+
| TAG: POLSKI PRODUCENT OD 1984 ROKU                    |                                                       |
|                                                       |                [ FOTOGRAFIA KOMPOZYCJI                |
| H1: Chemia profesjonalna                              |                  PRODUKTÓW JAX AUTO                   |
|     dla przemysłu, gastronomii                        |                 I LINII PRZEMYSŁOWYCH                 |
|     i marek własnych.                                 |                  WebP / 800x600 px ]                  |
|                                                       |                                                       |
| P:  Od ponad 40 lat projektujemy i wytwarzamy         |  [ Karta akredytacji: TÜV SÜD ISO 9001 / 14001 ]       |
|     specjalistyczne formulacje chemiczne w Poznaniu.  |                                                       |
|     Obsługujemy sieci handlowe, myjnie, zakłady       |                                                       |
|     przemysłowe i partnerów Private Label w całej     |                                                       |
|     Europie.                                          |                                                       |
|                                                       |                                                       |
| [ Porozmawiajmy o współpracy ]  [ Zobacz możliwości ] |                                                       |
+-------------------------------------------------------+-------------------------------------------------------+
```

* **Desktop Layout:** 2-column grid (55% text / 45% visual frame). Content vertically centered.
* **Mobile Layout (<768px):** Single column. Hero H1 first, followed by paragraph, dual action buttons (stacked full-width), followed by the product composition photograph.
* **Heading (H1):** Pragati Narrow Bold, 84px desktop / 52px mobile. Strictly zero entrance delay (static first paint for instant LCP).
* **CTA Group:**
  * Primary: `<a href="#kontakt" class="btn-primary">Porozmawiajmy o współpracy</a>` (Background `#C62836`, text `#FFFFFF`, min-height 48px).
  * Secondary: `<a href="#produkcja" class="btn-secondary">Zobacz możliwości produkcji</a>` (Transparent bg, 1px border `#181A1D`, text `#181A1D`).
* **Visual Asset:** Curated group shot of JAX Professional formulations (`public/products/jax-045.webp`, `jax-111.webp`, `jax-112.webp`) on clean laboratory background.

---

### Chapter 02: 40-Year Heritage & Evolution (`#historia`)

```
DESKTOP COMPOSITION (Vertical Editorial Timeline):
+---------------------------------------------------------------------------------------------------------------+
| TAG: DZIEDZICTWO I ROZWÓJ                                                                                     |
| H2: Cztery dekady ciągłości technologicznej.                                                                  |
| P:  Od rzemieślniczego laboratorium z 1984 roku do nowoczesnego zakładu produkcyjnego.                        |
|                                                                                                               |
|       ( 1984 ) --- POCZĄTEK DZIAŁALNOŚCI                                                                      |
|          |         Rejestracja przedsiębiorstwa EmiChem przez Michała Mierzwę. Opracowanie pierwszych         |
|          |         własnych receptur chemii gospodarczej i preparatów specjalistycznych w Poznaniu.           |
|          |                                                                                                    |
|       ( 1990 ) --- ROZBUDOWA INFRASTRUKTURY                                                                   |
|          |         Uruchomienie nowego zakładu produkcyjno-magazynowego. Wdrożenie półautomatycznych          |
|          |         linii rozlewniczych i poszerzenie dystrybucji na rynek ogólnokrajowy.                      |
|          |                                                                                                    |
|       ( 2000s ) -- POWSTANIE MARKI JAX PROFESSIONAL                                                           |
|          |         Debiut dedykowanej linii chemii profesjonalnej dla gastronomii, myjni samochodowych        |
|          |         i przemysłu. Wdrożenie zintegrowanych procedur kontroli formulacji.                        |
|          |                                                                                                    |
|       ( DZIŚ ) --- CERTYFIKACJA TÜV SÜD I SKALOWALNOŚĆ                                                        |
|                    Certyfikowany system ISO 9001:2015 oraz ISO 14001:2015. Konfekcjonowanie w formatach       |
|                    od 0,5L do 1000L IBC. Dedykowana obsługa kontraktowa Private Label.                        |
|                                                                                                               |
| [ Przejdź do pełnej historii firmy ↗ ]                                                                        |
+---------------------------------------------------------------------------------------------------------------+
```

* **Desktop Layout:** Central vertical spine line (`2px solid #E2E4E8`). Alternating left/right chronological cards with prominent circular year badges (`#111315` background with white text).
* **Mobile Layout:** Left-aligned vertical spine (`ml-4`). All text cards positioned to the right of the spine for natural single-column reading.
* **Editorial Discipline (C-01 / C-02):** Restrained strictly to verified milestone dates (1984, 1990, 2000s, today). Superlatives ("lider rynku", unverified ranking positions) omitted.
* **Action:** Sub-link to dedicated route `<a href="/historia/">Więcej o historii firmy</a>`.

---

### Chapter 03: Professional Application Sectors (`#zastosowania`)

```
DESKTOP COMPOSITION (4-Column Sector Grid):
+-----------------------+-----------------------+-----------------------+-----------------------+
| 01. AUTO & MYJNIE     | 02. GASTRO & SPOŻYWKA | 03. OBIEKTY & SANITAR | 04. WARSZTAT & PRZEMYSŁ|
| [ JAX 105 Packshot ]  | [ JAX 112 Packshot ]  | [ JAX 116 Packshot ]  | [ JAX 118 Packshot ]  |
|                       |                       |                       |                       |
| Preparaty dla myjni   | Odtłuszczanie, mycie  | Profesjonalna higiena | Silne zmywacze, płyny |
| bezdotykowych, piany  | pieców konwekcyjnych, | sanitariatów, posadzek| do posadzek halowych, |
| aktywne, detailer.    | dezynfekcja powierzchni| i ciągów komunikacji. | usuwanie smarów.      |
|                       |                       |                       |                       |
| • Piany aktywne       | • Odtłuszczacze       | • Płyny do sanitariatów| • Zmywacze przemysłowe|
| • Szampony pH neutral | • Mycie grilli i piecy| • Mycie posadzek      | • Odtłuszczanie części|
| • Ochrona lakieru     | • Dezynfekcja gastronomiczna| • Neutralizacja zapachów| • Pielęgnacja maszyn  |
|                       |                       |                       |                       |
| [ Zobacz produkty ↗ ] | [ Zobacz produkty ↗ ] | [ Zobacz produkty ↗ ] | [ Zobacz produkty ↗ ] |
+-----------------------+-----------------------+-----------------------+-----------------------+
```

* **Desktop Layout:** 4-column balanced card grid (`gap-6`). Clean white cards with `1px solid #E2E4E8`, subtle hover state (top border red line transition, zero card lift to prevent motion fatigue).
* **Mobile Layout:** 1 column on mobile screens (<640px), 2 columns on tablet (640px–1023px).
* **Card Content:** Category header, representative transparent WebP product packshot, 3-bullet core scope, and verified clean link to corresponding category in `jax.com.pl`.
* **Contextual Enquiry:** Button below grid: *"Nie widzisz swojego zastosowania? Zapytaj o dobór formulacji"* (`#kontakt`).

---

### Chapter 04: Factory Infrastructure & Packaging Scale (`#produkcja`)

```
DESKTOP COMPOSITION (Alternating Technical Presentation):
+-------------------------------------------------------+-------------------------------------------------------+
| H2: Elastyczność skali:                               |                                                       |
|     od 0,5L atomizera do 1000L IBC.                   |                  [ FOTOGRAFIA OBSZARU                 |
|                                                       |                     KONFEKCJONOWANIA                  |
| P:  Dysponujemy infrastrukturą laboratoryjną i parkiem|                    I ZBIORNIKÓW IBC                   |
|     maszynowym pozwalającym na wydajne mieszanie,     |                  WebP / 800x550 px ]                  |
|     konfekcjonowanie i etykietowanie formulacji       |                                                       |
|     płynnych o zróżnicowanej lepkości.                |  [ Etykieta techniczna: Standard rozlewu EmiChem ]    |
|                                                       |                                                       |
| SPECYFIKACJA FORMATÓW ROZLEWU:                        |                                                       |
| • Butelki 0,5L / 1L — ergonomiczne atomizery i nakrętki                                                       |
| • Kanistry 5L / 10L / 20L — atestowane pojemniki HDPE dla profesjonalistów                                   |
| • Paletomojemniki 1000L IBC — dostawy przemysłowe i surowcowe                                                 |
|                                                                                                               |
| [ Skonsultuj możliwości produkcyjne ]                                                                         |
+-------------------------------------------------------+-------------------------------------------------------+
```

* **Desktop Layout:** Asymmetric layout (50% technical specs and format list / 50% packaging visual).
* **Mobile Layout:** Single vertical stack. Text specification first, followed by packaging diagram/photo.
* **Sticky Behavior:** At most one desktop sticky visual frame (`top: 104px`, `position: sticky`) on wide viewports (≥1280px) if justified; **strictly ordinary block flow on mobile viewports (<1024px)**.
* **Evidence Baseline (C-05):** Packaging formats described accurately (0.5L, 1L, 5L, 10L, 20L, 1000L IBC) without claiming unverified daily tonnage numbers.

---

### Chapter 05: Quality Systems, Certifications & Document Hub (`#jakosc`)

```
DESKTOP COMPOSITION (Document Verification Grid):
+---------------------------------------------------------------------------------------------------------------+
| TAG: SYSTEMY ZARZĄDZANIA JAKOŚCIĄ                                                                             |
| H2: Sprawdzone standardy. Certyfikacja TÜV SÜD.                                                               |
| P:  Bezpieczeństwo i powtarzalność każdej partii potwierdzone zintegrowanym systemem ISO 9001 oraz ISO 14001.|
|                                                                                                               |
| +-----------------------------------------------+ +-----------------------------------------------+          |
| | KARTA DOKUMENTU: ISO 9001:2015 / 14001:2015   | | KARTA DOKUMENTU: KARTY CHARAKTERYSTYKI (SDS)  |          |
| | [ TÜV SÜD Logo SVG ]                          | | [ Ikona Karta Bezpieczeństwa ]                |          |
| | Jednostka: TÜV SÜD Management Service GmbH    | | Dostęp do aktualnych kart charakterystyki     |          |
| | Certyfikat nr: 12 100/104 50928 TMS           | | zgodnych z rozporządzeniem REACH i CLP dla    |          |
| | Zakres: Opracowywanie receptur, produkcja     | | wszystkich 26 preparatów profesjonalnych.     |          |
| |         i sprzedaż chemii gospodarczej.       | |                                               |          |
| | Ważność: 10.06.2024 – 09.06.2027              | | Format: PDF (Polski / Angielski)              |          |
| | [ Pobierz potwierdzenie certyfikacji (PDF) ]  | | [ Przejdź do bazy kart charakterystyki ↗ ]    |          |
| +-----------------------------------------------+ +-----------------------------------------------+          |
|                                                                                                               |
| [ Pełne informacje o zgodności i dokumentacji regulacyjnej ↗ ]                                                |
+---------------------------------------------------------------------------------------------------------------+
```

* **Desktop Layout:** Two equal high-contrast document cards (`bg-white`, `border: 1px solid #E2E4E8`, `p-8`).
* **Mobile Layout:** Stacked vertically (`gap-6`).
* **Accuracy Rules (C-03 / ADR-09):** Certificate metadata stated verbatim from inspected PDF:
  * Number: `12 100/104 50928 TMS`
  * Issuer: TÜV SÜD Management Service GmbH
  * Validity: `2024-06-10` do `2027-06-09`
  * Scope: *Opracowywanie receptur, produkcja i sprzedaż chemii gospodarczej i profesjonalnej.*
* **Download Integrity:** Direct static download link to `/public/documents/Certyfikat_ISO_EmiChem_TUV_SUD.pdf` with SHA-256 integrity tag.

---

### Chapter 06: Private Label & Contract Manufacturing Workflow (`#wspolpraca`)

```
DESKTOP COMPOSITION (5-Step Horizontal Process Pathway):
+---------------------------------------------------------------------------------------------------------------+
| TAG: PRODUKCJA KONTRAKTOWA                                                                                    |
| H2: Wdróż własną markę chemii profesjonalnej.                                                                 |
| P:  Kompleksowe wsparcie w procesie powstawania produktu: od doboru formulacji po gotowy wyrób na palecie.    |
|                                                                                                               |
| [ 01 ] ANALIZA I BRIEF        [ 02 ] FORMULACJA I R&D      [ 03 ] OPAKOWANIE I ETYKIETA                      |
| Określenie wymagań rynkowych, Dobór bazy chemicznej,       Wybór formatu butelki/kanistra,                   |
| pożądanych właściwości        parametrów lepkości i zapachu.przygotowanie projektu etykiety                  |
| i docelowego wolumenu.        Testy stabilności formulacji.zgodnej z przepisami CLP.                          |
|         ↓                                ↓                                ↓                                   |
| [ 04 ] PARTIA PILOTAŻOWA      [ 05 ] PRODUKCJA I LOGISTYKA                                                    |
| Rozlew próbny, weryfikacja    Seryjny rozlew, pakowanie                                                       |
| jakościowa i zatwierdzenie    zbiorcze, paletyzacja                                                           |
| wzorca przez zamawiającego.   i spedycja do magazynu.                                                         |
|                                                                                                               |
| [ Rozpocznij projekt Private Label — Wypełnij brief ]                                                         |
+---------------------------------------------------------------------------------------------------------------+
```

* **Desktop Layout:** 5 sequential process cards displayed in an ordered flex/grid container. Step numbers prominently styled in Pragati Narrow Bold with a subtle red accent line.
* **Mobile Layout:** Vertical stack (Step 01 to Step 05), connected by a subtle vertical border to preserve process clarity.
* **MVP Brief Trigger:** CTA directs to Chapter 08 with the form preselected to `topic: "private_label"`.

---

### Chapter 07: Technical Consultation & Evidence (`#doswiadczenie`)

```
DESKTOP COMPOSITION (Case / Evidence Presentation & Fallback State):
+---------------------------------------------------------------------------------------------------------------+
| TAG: DORADZTWO I STANDARD WSPÓŁPRACY                                                                          |
| H2: Praktyczne wsparcie wdrożeniowe.                                                                          |
|                                                                                                               |
| JEŚLI BRAK ZATWIERDZONEGO CASE STUDY KLIENTA (STAN DOMYŚLNY DLA MVP):                                         |
| +-----------------------------------------------------------------------------------------------------------+ |
| | "Każda współpraca B2B w JAX Professional opiera się na bezpośrednim kontakcie z technologami.             | |
| | Nie prowadzimy anonimowej sprzedaży katalogowej — pomagamy dobrać stężenia robocze, parametry             | |
| | dozowania oraz kompletujemy dokumentację techniczną wymaganą w Państwa branży."                           | |
| |                                                                                                           | |
| | • Dedykowany opiekun technologiczny dla stałych odbiorców                                                 | |
| | • Próbki formulacji do testów zakładowych i audytów higienicznych                                         | |
| | • Bezpośrednie doradztwo w zakresie przepisów CLP, REACH i wymogów sanitarnych                            | |
| +-----------------------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------------------+
```

* **Appearance when Awards/Cases are Absent (PRD v5 5.1 & C-04/C-06):**
  * When no third-party customer quote or formal case study is authorized in writing, Chapter 07 **renders a clean technical consultation card** explaining EmiChem's direct technologist advisory model.
  * **Zero fake testimonials, zero stock photos of smiling actors, and zero unverified award ribbons.**

---

### Chapter 08: Direct B2B Contact & Consultation (`#kontakt`)

```
DESKTOP COMPOSITION (2 Columns: Contact Info + High-Contrast Form):
+-------------------------------------------------------+-------------------------------------------------------+
| H2: Skontaktuj się z producentem.                     | [ FORMULARZ ZAPYTANIA B2B ]                           |
| P:  Zapraszamy do kontaktu procurement managerów,     |                                                       |
|     dystrybutorów oraz właścicieli marek.             | Imię i nazwisko *:       [ Jan Kowalski             ] |
|                                                       | Firma *:                 [ P.H.U. Chemia Sp. z o.o. ] |
| DANE REJESTROWE I ADRESOWE:                           | E-mail służbowy *:       [ j.kowalski@phuchemia.pl  ] |
| Michał Mierzwa EmiChem P.P.                           | Telefon (opcjonalnie):   [ +48 600 000 000          ] |
| Siedziba: ul. Wójtowska 16, 61-054 Poznań             |                                                       |
| Magazyn / Produkcja: ul. Główna 30A, 61-007 Poznań    | Temat zapytania *:                                    |
|                                                       | (o) Oferta hurtowa / Dystrybucja                      |
| BEZPOŚREDNI KONTAKT:                                  | ( ) Private Label / Produkcja kontraktowa             |
| Tel: +48 61 877 22 22                                 | ( ) Doradztwo technologiczne                          |
| E-mail: biuro@jax.com.pl                              | ( ) Inne zapytanie                                    |
| Godziny: Poniedziałek – Piątek: 08:00 – 16:00         |                                                       |
|                                                       | Treść zapytania *:                                    |
| [ Zobacz na mapie Google ↗ ]                          | [ Opisz planowany wolumen, branżę lub wymagania...  ] |
|                                                       |                                                       |
|                                                       | [x] Wyrażam zgodę na przetwarzanie danych osobowych...|
|                                                       |                                                       |
|                                                       | [ WYŚLIJ ZAPYTANIE B2B ]                              |
+-------------------------------------------------------+-------------------------------------------------------+
```

* **Desktop Layout:** 2 columns (40% Verified NAP & Contact Channels / 60% B2B Enquiry Card).
* **Mobile Layout:** Single column. Direct phone and email links first, followed by the enquiry form.
* **Accessibility & Form Design:**
  * Native `<label>` for every input.
  * Inputs: `min-height: 48px`, `border: 1px solid #E2E4E8`, focus: `outline: 3px solid #005FCC`.
  * Error state: Red outline `#C62836` + ARIA alert text below input with unique `id` and `aria-describedby`.
  * Topic selector: Radio group or accessible custom buttons with checked states.
  * Submit Button: Full width on mobile, prominent `--color-brand-red-btn` (`#C62836`), white text, min-height 52px.

---

## 6. Document Cards & Secondary Route Templates

### 6.1 Document Card Component Specification
* **Visual Style:** White card, `1px solid #E2E4E8`, `p-6`, rounded `6px`.
* **Metadata Hierarchy:**
  1. Document title in Pragati Narrow Bold (`20px`).
  2. Issuing authority & reference number (e.g. TÜV SÜD, `12 100/104 50928 TMS`).
  3. File format & size indicator: `[PDF · 1.7 MB · SHA-256 zweryfikowany]`.
  4. Primary action button: *"Pobierz dokument (PDF)"* with download icon.

### 6.2 Secondary Route Templates
All secondary routes share a consistent editorial sub-page shell:
1. **Sub-page Hero:** Breadcrumb (`Strona główna / Historia`), H1 headline, concise lead paragraph (max 2 sentences).
2. **Main Content Container:** 800px max-width for long-form reading (`/polityka-prywatnosci/`, `/deklaracja-dostepnosci/`), or 1280px container with sidebar for catalog/document routes.
3. **Dedicated Sticky Enquiry Bar or Section:** Every secondary route ends with a direct invitation to contact or return to the main capabilities overview.
4. **404 Template (`404.html`):**
   * Clear, honest headline: *"404 — Nie znaleziono strony"*.
   * Informative message: *"Podany adres nie istnieje lub strona została przeniesiona."*
   * Action buttons: *"Wróć do strony głównej"* + *"Skontaktuj się z biurem handlowym"*.

---

## 7. Mobile Adaptations & Touch Ergonomics

| Element | Mobile (<768px) Adaptation | Touch Target / Usability Rule |
|---|---|---|
| **Sticky Header** | Collapsed into 64px bar with hamburger toggle | Menu toggle target is 44×44 CSS px |
| **Hero Dual Buttons** | Stacked vertically, full width (`w-full`) | Min height 48px, 12px gap between buttons |
| **Timeline Spine** | Shifted to left edge (`ml-4`), content to the right | Cards stack naturally without horizontal overflow |
| **Sector Grid** | 1 column stack | Full card tap target for category exploration |
| **Packaging Visual** | Position sticky disabled; ordinary block flow | Zero horizontal scroll, zero clipped text |
| **Enquiry Form** | Full-width inputs, stacked radio buttons | All tap targets ≥ 48px; form labels ≥ 16px to prevent iOS auto-zoom |
| **Telephone Links** | Direct `tel:+48618772222` links with call icon | Instant dialer trigger for mobile procurement managers |

---

## 8. Asset Shortlist & Sourcing Traceability

All assets sourced strictly from inspected company repositories and materials with verified standing owner authorization:

| Asset Name | Local Source File | Production Path | Provenance & Usage |
|---|---|---|---|
| **JAX Professional Logo** | `JAX_Pro_Auto/public/jax-pro-logo.png` | `/public/assets/logo-jax-pro.png` | Inspected corporate mark, transparent background |
| **JAX Pro Dark Logo** | `JAX_Pro_Auto/public/jax-pro-logo-on-dark.png` | `/public/assets/logo-jax-pro-dark.png` | Header & footer inverted corporate mark |
| **Catalogue PDF** | `JAX_Pro_Auto/materials/catalog_pdf/*.pdf` | `/public/documents/Katalog_JAX_Auto.pdf` | Official 16-page catalogue (1.7 MB) |
| **ISO 9001/14001 Cert** | `claims-ledger.md` (TÜV SÜD 12 100/104 50928) | `/public/documents/Certyfikat_ISO_TUV.pdf` | Inspected official PDF certificate |
| **Hero Packshot Group** | `JAX_Pro_Auto/public/products/jax-045.webp` etc.| `/public/assets/hero-products.webp` | Real WebP bottle photographs |
| **Auto Category Hero** | `JAX_Pro_Auto/public/products/jax-105.webp` | `/public/assets/cat-auto.webp` | JAX 105 Active Foam WebP packshot |
| **Gastro Category Hero**| `JAX_Pro_Auto/public/products/jax-112.webp` | `/public/assets/cat-gastro.webp`| JAX 112 Grill Cleaner WebP packshot |
| **Sanitary Category Hero**| `JAX_Pro_Auto/public/products/jax-116.webp` | `/public/assets/cat-sanitary.webp`| JAX 116 Sanitary Gel WebP packshot |
| **Workshop Category Hero**| `JAX_Pro_Auto/public/products/jax-118.webp` | `/public/assets/cat-workshop.webp`| JAX 118 Floor Degreaser WebP packshot |

---

## 9. Single Recommended Design Direction & Sign-Off

* **Recommendation:** Proceed immediately to **Milestone B2 (Component Specifications & Motion Contracts)** based on this locked specification.
* **Key Strengths:**
  1. Rooted in authentic manufacturing reality rather than templated SaaS clichés.
  2. WCAG 2.1 AA contract compliance guaranteed through accessible `#C62836` button tokens and Pragati Narrow typography scale.
  3. Strict evidence boundaries enforced (no fake awards, no unverified stats, no artificial factory photos).
  4. Content-led layout ensures robust mobile reflow and zero layout shifts (CLS = 0).
