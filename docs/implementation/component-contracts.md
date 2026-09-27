> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Component Contracts & State Architecture — JAX_Info

**Version:** 1.0 · **Date:** 13 September 2026  
**Status:** Component Architecture Locked (Milestone B2)  
**Product:** https://info.jax.com.pl · **Owner:** Michał Mierzwa EmiChem P.P. / JAX Professional  
**Methodology:** Static-First React 19 + Strict TypeScript + Progressive Enhancement

---

## 1. Global Component Tree & Hierarchy

```
AppShell (`src/components/layout/AppShell.tsx`)
├── SkipLink (`src/components/layout/SkipLink.tsx`)
├── Header (`src/components/layout/Header.tsx`)
│   ├── BrandLogo (`src/components/ui/BrandLogo.tsx`)
│   ├── Navigation (`src/components/layout/Navigation.tsx`)
│   │   ├── NavAnchorLink (`src/components/ui/NavAnchorLink.tsx`)
│   │   └── ExternalShopLink (`src/components/ui/ExternalShopLink.tsx`)
│   ├── MobileMenuToggle (`src/components/layout/MobileMenuToggle.tsx`)
│   └── MobileMenuDisclosure (`src/components/layout/MobileMenuDisclosure.tsx`)
├── MainContent (`<main id="main-content">`)
│   └── [ Route View Component / 8-Chapter Narrative Container ]
│       ├── ChapterSection (`src/components/chapters/ChapterSection.tsx`)
│       │   ├── Chapter01_Hero (`src/components/chapters/Chapter01_Hero.tsx`)
│       │   ├── Chapter02_Heritage (`src/components/chapters/Chapter02_Heritage.tsx`)
│       │   │   └── HeritageTimeline (`src/components/ui/HeritageTimeline.tsx`)
│       │   ├── Chapter03_Sectors (`src/components/chapters/Chapter03_Sectors.tsx`)
│       │   │   └── SectorCard (`src/components/ui/SectorCard.tsx`)
│       │   ├── Chapter04_Production (`src/components/chapters/Chapter04_Production.tsx`)
│       │   │   └── PackagingShowcase (`src/components/ui/PackagingShowcase.tsx`)
│       │   ├── Chapter05_Quality (`src/components/chapters/Chapter05_Quality.tsx`)
│       │   │   ├── DocumentCard (`src/components/ui/DocumentCard.tsx`)
│       │   │   └── ISOVerificationBadge (`src/components/ui/ISOVerificationBadge.tsx`)
│       │   ├── Chapter06_PrivateLabel (`src/components/chapters/Chapter06_PrivateLabel.tsx`)
│       │   │   └── ProcessPathway (`src/components/ui/ProcessPathway.tsx`)
│       │   ├── Chapter07_Evidence (`src/components/chapters/Chapter07_Evidence.tsx`)
│       │   │   └── TechnicalConsultationCard (`src/components/ui/TechnicalConsultationCard.tsx`)
│       │   └── Chapter08_Contact (`src/components/chapters/Chapter08_Contact.tsx`)
│       │       ├── VerifiedNAPBlock (`src/components/ui/VerifiedNAPBlock.tsx`)
│       │       └── EnquiryForm (`src/components/forms/EnquiryForm.tsx`)
│       │           ├── FormInput (`src/components/forms/FormInput.tsx`)
│       │           ├── TopicSelector (`src/components/forms/TopicSelector.tsx`)
│       │           ├── GDPRConsentCheckbox (`src/components/forms/GDPRConsentCheckbox.tsx`)
│       │           └── FormStatusAlert (`src/components/forms/FormStatusAlert.tsx`)
├── ConsentBanner (`src/components/layout/ConsentBanner.tsx`)
└── Footer (`src/components/layout/Footer.tsx`)
    ├── FooterLegalBlock (`src/components/ui/FooterLegalBlock.tsx`)
    └── FooterNavList (`src/components/ui/FooterNavList.tsx`)
```

---

## 2. Shell & Navigation Component Contracts

### 2.1 `SkipLink` (`src/components/layout/SkipLink.tsx`)
* **Responsibility:** Provides direct keyboard access bypassing the entire header directly to `#main-content`.
* **Rendered Semantics:** `<a href="#main-content" class="skip-link">Przejdź do treści głównej</a>`.
* **State Ownership:** None (stateless).
* **Keyboard & Focus Handling:**
  * Default state: Visually hidden off-screen (`top: -999px` or `translate-y-[-100%]`).
  * `:focus` state: Transitions smoothly into view at top-left (`top: 16px`, `left: 16px`, `z-index: 100`), background `#C62836`, text `#FFFFFF`, outline `3px solid #005FCC`, min-height 44px, padding `12px 20px`.
* **No-JS Fallback:** Native HTML anchor works 100% identically without JavaScript.

### 2.2 `Header` & `Navigation` (`src/components/layout/Header.tsx`)
* **Responsibility:** Global persistent branding, chapter navigation, store handoff, and B2B contact trigger.
* **Rendered Semantics:** `<header role="banner" class="sticky top-0 z-40 bg-[#111315]">` containing `<nav aria-label="Nawigacja główna">`.
* **Inputs & Props:**
  ```typescript
  export interface HeaderProps {
    currentRoute: string;
    activeChapter?: string; // e.g. "produkcja", "kontakt"
  }
  ```
* **State Ownership:**
  * `isMobileMenuOpen` (boolean, local state in `Header`).
  * Active chapter tracking managed via native `IntersectionObserver` observing chapter elements in the DOM. Zero global scroll coordinates in React state.
* **Keyboard & Focus Handling:**
  * Standard tab stop across all header anchor links.
  * Focus indicators: `3px solid #005FCC`, offset `2px`.
* **External Store Boundary:**
  * Anchor `<a href="https://jax.com.pl" target="_blank" rel="noopener noreferrer">`.
  * Visual external icon `<ExternalLink size={14} aria-hidden="true" />` and hidden accessibility text `<span class="sr-only"> (otwiera się w nowej karcie)</span>`.

### 2.3 `MobileMenuDisclosure` (`src/components/layout/MobileMenuDisclosure.tsx`)
* **Responsibility:** Mobile navigation panel (<1024px viewport width).
* **Rendered Semantics:** Non-modal disclosure panel `<div id="mobile-menu" aria-label="Menu mobilne">` toggled by `<button aria-controls="mobile-menu" aria-expanded={isOpen}>`.
* **Keyboard & Focus Handling:**
  * When `isOpen` transitions to `true`, focus is optionally shifted to the first menu item.
  * Pressing `Escape` key immediately closes the menu and returns focus to the hamburger toggle button.
  * Clicking any chapter anchor automatically closes the menu.
  * Body scroll locking: Native CSS `overflow: hidden` applied to `<body>` while mobile menu is open.

### 2.4 `ConsentBanner` (`src/components/layout/ConsentBanner.tsx`)
* **Responsibility:** Gating non-essential scripts per GDPR/ePrivacy Directive (F-19).
* **Rendered Semantics:** `<aside role="region" aria-label="Zarządzanie plikami cookie" class="fixed bottom-0 inset-x-0 z-50 ...">`.
* **State Ownership:** `consentState: "pending" | "necessary_only" | "all"` (synced to `localStorage` key `jax_cookie_consent`).
* **Initial Hydration:** Defaults to hidden on SSR; mounts cleanly after checking `localStorage`.
* **Controls:** Two equal buttons:
  1. `<button type="button" onClick={() => saveConsent("necessary_only")}>Tylko niezbędne</button>`
  2. `<button type="button" onClick={() => saveConsent("all")}>Zezwól na wszystkie</button>`
* **No-JS Fallback:** When JavaScript is disabled, the banner remains hidden or shows a static notice; zero non-essential scripts ever execute.

---

## 3. Chapter Layout & Content Component Contracts

### 3.1 `ChapterSection` (`src/components/chapters/ChapterSection.tsx`)
* **Responsibility:** Wrapper enforcing consistent container width, padding rhythm, semantic landmarks, and anchor offsets.
* **Rendered Semantics:** `<section id={chapterId} class="scroll-mt-[88px] py-16 md:py-24 ...">`.
* **Inputs & Props:**
  ```typescript
  export interface ChapterSectionProps {
    chapterId: string;
    chapterNumber: string; // e.g. "01", "02"
    chapterTag: string;    // e.g. "DZIEDZICTWO I ROZWÓJ"
    title: string;
    lead?: string;
    theme?: "white" | "subtle" | "dark";
    children: React.ReactNode;
  }
  ```
* **No-JS Fallback:** 100% static HTML container.

### 3.2 `HeritageTimeline` (`src/components/ui/HeritageTimeline.tsx`)
* **Responsibility:** Displays verified milestones in chronological sequence (Chapter 02).
* **Rendered Semantics:** Ordered list `<ol class="relative border-l-2 border-[#E2E4E8] ...">` containing `<li>` milestone items.
* **Inputs & Props:**
  ```typescript
  export interface MilestoneItem {
    year: string;          // e.g. "1984", "1990", "2000s", "Dziś"
    headline: string;      // e.g. "Początek działalności EmiChem"
    description: string;
    verifiedFactId: string;// e.g. "C-01", "C-02"
  }
  ```
* **State Ownership:** Stateless. Pure presentation component.
* **Accessibility:** Each milestone uses an `<article>` with `<time>` or structured heading `<h3>`.
* **Empty / Fallback State:** Renders only verified milestones (C-01/C-02). Unverified claims (e.g. awards, revenue growth) are omitted.

### 3.3 `SectorCard` (`src/components/ui/SectorCard.tsx`)
* **Responsibility:** Displays one of the 4 professional application groupings with packshot image and clean shop link (Chapter 03).
* **Rendered Semantics:** `<article class="bg-white border border-[#E2E4E8] p-6 flex flex-col ...">`.
* **Inputs & Props:**
  ```typescript
  export interface SectorCardProps {
    sectorNumber: string; // "01", "02", "03", "04"
    title: string;
    description: string;
    bulletPoints: string[];
    imageSrc: string;     // WebP path
    imageAlt: string;
    shopCategoryUrl: string; // Clean URL to jax.com.pl
  }
  ```
* **No-JS Fallback:** Standard static image with `<a href="...">` link.

### 3.4 `PackagingShowcase` (`src/components/ui/PackagingShowcase.tsx`)
* **Responsibility:** Demonstrates manufacturing packaging scalability from 0.5L bottles to 1000L IBC (Chapter 04).
* **Rendered Semantics:** `<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 ...">`.
* **Evidence Rule (C-05):** Strictly describes qualitative packaging range; no unverified daily tonnage numbers.
* **Sticky Visual Frame:**
  * Desktop (≥1024px): CSS `position: sticky; top: 104px;`.
  * Mobile (<1024px): Standard block flow (`position: static;`).

### 3.5 `DocumentCard` (`src/components/ui/DocumentCard.tsx`)
* **Responsibility:** Verification card for official certificates and technical documents (Chapter 05 / Route `/zgodnosc-i-dokumenty/`).
* **Rendered Semantics:** `<article class="bg-white border border-[#E2E4E8] p-6 md:p-8 rounded-md ...">`.
* **Inputs & Props:**
  ```typescript
  export interface DocumentCardProps {
    id: string;
    title: string;
    issuer: string;          // e.g. "TÜV SÜD Management Service GmbH"
    referenceNumber: string; // e.g. "12 100/104 50928 TMS"
    scope: string;
    validity: string;        // e.g. "2024-06-10 – 2027-06-09"
    fileUrl: string;         // Static path in /public/documents/
    fileSize: string;        // e.g. "1.7 MB"
    sha256Checksum: string;
    status: "active" | "expired" | "withdrawn";
  }
  ```
* **Status Handling:**
  * If `status === "active"`: Renders primary download button `<a href={fileUrl} download>Pobierz PDF</a>`.
  * If `status === "withdrawn"` or `"expired"`: Omitted from public listing; if accessed directly, displays prominent amber warning with explanation and replacement document link.

### 3.6 `ProcessPathway` (`src/components/ui/ProcessPathway.tsx`)
* **Responsibility:** 5-step contract manufacturing workflow for Private Label clients (Chapter 06).
* **Rendered Semantics:** Ordered list `<ol class="grid grid-cols-1 md:grid-cols-5 gap-4 ...">`.
* **Inputs & Props:**
  ```typescript
  export interface ProcessStep {
    stepNumber: number; // 1 to 5
    title: string;
    description: string;
  }
  ```
* **CTA Handshake:** Button *"Wypełnij brief Private Label"* triggers smooth scroll to `#kontakt` and pre-populates form topic to `"private_label"`.

### 3.7 `TechnicalConsultationCard` (`src/components/ui/TechnicalConsultationCard.tsx`)
* **Responsibility:** Chapter 07 evidence block.
* **Appearance when Awards/Cases are Absent:**
  * Renders authentic technical consultation statement: direct contact with formulary technologists, sample testing, REACH/CLP advisory.
  * Zero fake testimonials, zero stock photos of actors, zero unverified medal ribbons.

---

## 4. Enquiry Form State Machine & Contracts (`EnquiryForm.tsx`)

### 4.1 Form States Definition
The form operates under a strict finite state machine:

```
[ IDLE ] ──(Submit)──> [ SUBMITTING ]
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
       (Validation Fail)              (Server Request)
              │                               │
              ▼                       ┌───────┴───────┐
      [ FIELD_ERROR ]                 ▼               ▼
                                 (HTTP 2xx)      (HTTP 4xx/5xx)
                                      │               │
                                      ▼               ▼
                                 [ ACCEPTED ]   [ SERVER_ERROR ]
```

1. **`IDLE`:** Initial state. Form fields editable. Values restored from session or pre-selected topic props.
2. **`SUBMITTING`:** User initiated submission. All inputs and buttons disabled. Submit button shows loading spinner with `aria-busy="true"` and label *"Wysyłanie zapytania..."*.
3. **`FIELD_ERROR`:** Client-side Zod or server 400 validation error. Focus shifted to first invalid field or error summary. Inputs marked with `aria-invalid="true"` and linked to error message via `aria-describedby`.
4. **`SERVER_ERROR`:** Network failure or 5xx downstream error. User-entered values are **strictly preserved in state** (never cleared). Displays accessible alert with direct phone and email contact fallback.
5. **`ACCEPTED`:** Server accepted the submission (HTTP 200/201). Form replaced by accessible success view displaying unique `enquiry_id` receipt and follow-up timeline.

> **Critical Operational Distinction:**  
> **"Accepted by Server" (HTTP 200 receipt with UUID)** means the Cloudflare Pages Function has verified the schema, passed honeypot checks, and committed the lead into the local audit ledger.  
> **"Delivered to Sales"** represents downstream forwarding via SMTP or internal n8n webhook. If downstream forwarding fails, the client still receives an "Accepted" receipt with an advisory note, avoiding buyer panic while notifying engineering.

### 4.2 Form TypeScript Interface
```typescript
export interface EnquiryFormState {
  status: "idle" | "submitting" | "field_error" | "server_error" | "accepted";
  values: {
    name: string;
    company: string;
    email: string;
    phone: string;
    topic: "general" | "sales" | "private_label" | "technical";
    message: string;
    consent: boolean;
    _hp_check: string; // Honeypot
  };
  errors: Partial<Record<keyof EnquiryFormState["values"], string>>;
  serverReceipt?: {
    enquiry_id: string;
    status: string;
    timestamp: string;
  };
  serverErrorMessage?: string;
}
```

### 4.3 Semantic Non-JS Fallback Form
When JavaScript is disabled or fails to load, the form operates via standard browser submission:
```html
<form action="/api/enquiry" method="POST" class="enquiry-form">
  <input type="text" name="_hp_check" value="" class="hidden" tabindex="-1" autocomplete="off" />
  
  <label for="field-name">Imię i nazwisko *</label>
  <input id="field-name" name="name" type="text" required minlength="2" maxlength="100" />

  <label for="field-company">Firma *</label>
  <input id="field-company" name="company" type="text" required minlength="2" maxlength="150" />

  <label for="field-email">Adres e-mail *</label>
  <input id="field-email" name="email" type="email" required maxlength="150" />

  <label for="field-phone">Telefon (opcjonalnie)</label>
  <input id="field-phone" name="phone" type="tel" maxlength="30" />

  <fieldset>
    <legend>Temat zapytania *</legend>
    <label><input type="radio" name="topic" value="sales" checked /> Oferta hurtowa / Dystrybucja</label>
    <label><input type="radio" name="topic" value="private_label" /> Private Label / Produkcja kontraktowa</label>
    <label><input type="radio" name="topic" value="technical" /> Doradztwo technologiczne</label>
    <label><input type="radio" name="topic" value="general" /> Inne zapytanie</label>
  </fieldset>

  <label for="field-message">Treść zapytania *</label>
  <textarea id="field-message" name="message" required minlength="10" maxlength="3000"></textarea>

  <label>
    <input type="checkbox" name="consent" value="true" required />
    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania.
  </label>

  <button type="submit" class="btn-primary">Wyślij zapytanie B2B</button>
</form>
```
* **Server HTML Response:** Upon native POST, the server returns an accessible HTML page containing:
  * On Success: Confirmation with `enquiry_id`, date, and link back to `https://info.jax.com.pl`.
  * On Error: Semantic summary of missing/invalid fields and a pre-filled form with preserved values.

---

## 5. Supporting Route Templates

Every published route is prerendered to real static HTML and follows strict metadata and landmark guidelines:

| Route Path | Template Component | Page H1 | Core Content & Landmarked Structure |
|---|---|---|---|
| `/` | `LandingPage.tsx` | *Chemia profesjonalna dla przemysłu, gastronomii i marek własnych.* | 8-chapter scrollytelling narrative, trust badges, full B2B enquiry form. |
| `/historia/` | `HistoryPage.tsx` | *Cztery dekady rozwoju EmiChem i marki JAX Professional.* | Extended chronological archive, founder context, facility evolution. |
| `/produkcja/` | `ProductionPage.tsx` | *Możliwości technologiczne i infrastruktura produkcyjna.* | Blending tanks, packaging format matrix (0.5L–1000L), quality control. |
| `/jakosc-i-certyfikaty/`| `QualityPage.tsx` | *Systemy zarządzania jakością ISO 9001 oraz ISO 14001.* | TÜV SÜD certificate metadata, laboratory procedures, hygiene standards. |
| `/zgodnosc-i-dokumenty/`| `CompliancePage.tsx` | *Dokumentacja regulacyjna, karty charakterystyki i REACH.* | SDS index, CLP labelling standards, biocidal permit notes (C-04). |
| `/private-label/` | `PrivateLabelPage.tsx` | *Produkcja kontraktowa i formulacje pod marką klienta.* | 5-step process details, formulation testing, packaging options, text brief form. |
| `/kontakt/` | `ContactPage.tsx` | *Dane kontaktowe producenta i biura obsługi klienta.* | Verified registered (Wójtowska 16) and commercial (Główna 30A) NAP, phone, email, direct enquiry form. |
| `/polityka-prywatnosci/`| `PrivacyPage.tsx` | *Polityka prywatności i informacje o przetwarzaniu danych.* | GDPR controller identity, retention periods, user rights, cookie policies. |
| `/deklaracja-dostepnosci/`| `AccessibilityPage.tsx`| *Deklaracja dostępności serwisu info.jax.com.pl.* | WCAG 2.1 AA conformance declaration, review date, contact for digital accessibility issues. |
| `404.html` | `NotFoundPage.tsx` | *404 — Nie znaleziono strony.* | Informative error notice, search suggestion, link to homepage, genuine 404 HTTP status. |

---

## 6. Edge Cases & Component Resilience Contract

1. **JavaScript Blocked / Failed CDN:**
   * 100% of body copy, H1s, tables, and document links render immediately from raw static HTML.
   * Form submits via native browser POST to `/api/enquiry`.
2. **Slow 3G / High Latency Mobile Connection:**
   * Critical Pragati Narrow WOFF2 fonts and hero WebP image are preloaded in `<head>`.
   * Layout does not shift while fonts/images load (zero CLS).
3. **Mid-Session Motion Preference Change:**
   * Native CSS media query `@media (prefers-reduced-motion: reduce)` immediately strips all transitions and transforms in real time without requiring page reload.
4. **Window Resizing / Orientation Change:**
   * Asymmetric 2-column grids reflow cleanly to 1 column at 1024px and 768px.
   * Sticky frames cleanly decouple to standard block flow on mobile viewports.
5. **Keyboard Navigation & Screen Readers:**
   * Zero keyboard traps.
   * Skip-to-content bypasses navigation cleanly.
   * ARIA live regions announce form submission states politely.
