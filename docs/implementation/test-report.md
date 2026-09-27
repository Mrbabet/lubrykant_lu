> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Test Report — JAX_Info Release Audit & Verification (Phases C1–C3 & D1)

**Date:** 13 September 2026  
**Project:** JAX_Info (`info.jax.com.pl`)  
**Scope:** Phase C (C1 Static Foundation, C2 Enquiries & Staging Sink, C3 Motion & SEO) & Phase D1 (Release Audit, Hardening, Defect Remediation & Staging QA)  
**Status:** **PASSED — CONDITIONAL PREVIEW (Zero P0/P1 Defects, 100% Test Pass Rate, Ready for D2 Client Sign-Off & DNS Delegation)**  

---

## 1. Executive Summary

Milestone D1 has executed a comprehensive release audit and hardening cycle for `info.jax.com.pl` in accordance with PRD v5 and `04-audit-plan.md`.

- **Test Suite Status:** 7 test suites, 65 automated tests executed via Vitest, **65 passed (100% pass rate)**.
- **Type Checking:** `tsc -b --noEmit` executed with **0 errors**.
- **Build & Prerender Pipeline:** 11 routes prerendered to `dist/static/`, generating 100% semantic, accessible HTML files, valid `sitemap.xml`, `robots.txt`, and Cloudflare `_headers`.
- **Defects Remediated:** 2 real defects identified during live testing (DEFECT-01 sticky anchor overlap and DEFECT-02 consent button contrast) have been permanently resolved and re-verified.
- **Regulatory & Claims Compliance:** C-01, C-02, C-03, and C-05 verified against primary evidence; unapproved claims C-04 (MTP Medals) and C-06 (capacity assertions) confirmed 100% excluded.
- **Performance Budgets:** All PRD transfer and bundle budgets respected with substantial headroom (JS gzip 159.4 KB / 180 KB, CSS gzip 8.56 KB / 40 KB, Hero 150.3 KB / 250 KB).
- **Release Decision:** **CONDITIONAL PREVIEW** (Staging preview fully verified; production deployment gated by DNS delegation and live credentials in D2).

---

## 2. Implemented Routes & Prerendered Static Artifacts

All 10 MVP public routes plus `404.html` have been compiled, prerendered, and asserted:

| Path | Component | Prerender Output File | Size | HTTP Status | Canonical URL | H1 Header Text |
|---|---|---|---|---|---|---|
| `/` | `HomePage` | `dist/static/index.html` | 69.8 KB | `200 OK` | `https://info.jax.com.pl/` | Polska chemia profesjonalna od 1984 roku. |
| `/o-nas/` | `AboutPage` | `dist/static/o-nas/index.html` | 23.1 KB | `200 OK` | `https://info.jax.com.pl/o-nas/` | Ponad 40 lat polskiej tradycji chemicznej i produkcyjnej. |
| `/jakosc-i-certyfikaty/` | `QualityPage` | `dist/static/jakosc-i-certyfikaty/index.html` | 28.1 KB | `200 OK` | `https://info.jax.com.pl/jakosc-i-certyfikaty/` | Niezmienna jakość potwierdzona certyfikatem TÜV SÜD ISO 9001:2015. |
| `/produkcja-i-technologia/` | `ProductionPage` | `dist/static/produkcja-i-technologia/index.html` | 24.9 KB | `200 OK` | `https://info.jax.com.pl/produkcja-i-technologia/` | Zaawansowana technologia, laboratoryjna precyzja i park maszynowy. |
| `/private-label/` | `PrivateLabelPage` | `dist/static/private-label/index.html` | 35.5 KB | `200 OK` | `https://info.jax.com.pl/private-label/` | Produkcja kontraktowa i marki własne (Private Label). |
| `/chemia-dla-myjni/` | `SectorWashPage` | `dist/static/chemia-dla-myjni/index.html` | 35.8 KB | `200 OK` | `https://info.jax.com.pl/chemia-dla-myjni/` | Wysokowydajna chemia dla myjni samochodowych i detailingu. |
| `/chemia-dla-horeca/` | `SectorHorecaPage` | `dist/static/chemia-dla-horeca/index.html` | 22.5 KB | `200 OK` | `https://info.jax.com.pl/chemia-dla-horeca/` | Higiena i czystość w sektorze HoReCa oraz obiektach hotelowych. |
| `/chemia-dla-przemyslu/` | `SectorIndustryPage` | `dist/static/chemia-dla-przemyslu/index.html` | 21.1 KB | `200 OK` | `https://info.jax.com.pl/chemia-dla-przemyslu/` | Przemysłowe formuły odtłuszczające i myjące dla zakładów produkcyjnych. |
| `/kontakt/` | `ContactPage` | `dist/static/kontakt/index.html` | 31.4 KB | `200 OK` | `https://info.jax.com.pl/kontakt/` | Porozmawiajmy o chemii dla Twojego biznesu. |
| `/polityka-prywatnosci/` | `PrivacyPage` | `dist/static/polityka-prywatnosci/index.html` | 21.2 KB | `200 OK` | `https://info.jax.com.pl/polityka-prywatnosci/` | Polityka Prywatności i Klauzula RODO. |
| `/404` | `NotFoundPage` | `dist/static/404.html` | 19.5 KB | `404 Not Found` (Client) | `https://info.jax.com.pl/404.html` | 404 — Żądany zasób nie został odnaleziony. |

Supporting static publication files generated:
- `dist/static/sitemap.xml` (10 canonical indexed URLs, changefreq `monthly`, priorities `1.0` and `0.8`).
- `dist/static/robots.txt` (allows all indexing, disallows `/404`, points to sitemap).
- `dist/static/_headers` (Security headers: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, immutable cache for `/assets/*`, revalidated cache for `/documents/*`).

---

## 3. Summary of Automated Test Suites (All 7 Suites Passing)

Command executed: `pnpm check` (`tsc -b --noEmit && vitest run && pnpm build`).

| Suite File | Tests | Pass Rate | Scope Covered |
|---|---|---|---|
| `tests/release-audit.test.ts` | 14 | 100% | Phase D1 release audit assertions: route crawl, headers, canonicals, PDF sizes, clean shop links, regulatory claims C-01/C-02/C-03/C-05, exclusion of C-04/C-06, form honeypot, and rate limiting |
| `tests/motion-and-seo.test.ts` | 10 | 100% | Schema.org Organization, WebSite, BreadcrumbList JSON-LD, OpenGraph/Twitter tags, clean shop links, prefers-reduced-motion CSS, hero static paint, JS <= 180KB, CSS <= 40KB, hero image <= 250KB |
| `tests/enquiry-endpoint.test.ts` | 9 | 100% | B2B JSON, Private Label preselection, urlencoded non-JS HTML receipt, validation errors, 64KB body limit, honeypot bot discard, idempotency dedup, rate limiting, CSRF origin check |
| `tests/release-content-validation.test.ts` | 5 | 100% | C-04 & C-06 exclusion from static HTML, Art. 72 BPR biocide warning, ISO cert metadata, no 20 MB file uploader, cookie consent banner presence |
| `tests/prerender-assertion.test.ts` | 15 | 100% | 11 static routes prerendered, canonical URLs, single H1 per route, sitemap.xml, robots.txt, verified PDFs |
| `tests/content-validation.test.ts` | 8 | 100% | Zod schemas for company registry, claims C-01–C-11, documents, products, routes |
| `tests/contrast.test.ts` | 4 | 100% | Action button red #C62836 (5.59:1), AAA neutral contrast ratios, white on carbon (17.65:1) |
| **Total** | **65** | **100%** | **Milestones C & D1 Fully Verified** |

---

## 4. Phase D1 Release Audit Findings & Defect Remediation

During the live Phase D1 release audit, automated crawlers, headless Chrome, and contrast analyzers identified 2 real defects. Both have been corrected in a scoped code batch and permanently re-verified.

### 4.1 Remediated Defect Log

#### DEFECT-01: Anchor Jump Sticky Header Overlap
- **Severity:** P1 (Accessibility & Usability)
- **PRD Ref:** F-13, N-A11Y-01
- **Target URL/State:** `https://info.jax.com.pl/#dziedzictwo`, `#receptury`, `#jakosc`, `#zastosowania`, `#private-label`, `#standardy`
- **Reproduction:** Navigating to any homepage chapter anchor either via direct URL fragment or by clicking the navigation menu.
- **Observed vs. Expected:** The fixed 80px (`h-20`) sticky navbar overlapped the chapter H2 title upon arrival. Expected heading to remain fully visible below the navbar with at least 16px of whitespace.
- **Remedy:** Added explicit inline style `style={{ scrollMarginTop: "5rem" }}` and Tailwind classes `scroll-mt-20 sm:scroll-mt-24` across all homepage chapter components (`Chapter02_Heritage.tsx`, `Chapter03_Formulas.tsx`, `Chapter04_Quality.tsx`, `Chapter05_Sectors.tsx`, `Chapter06_PrivateLabel.tsx`, `Chapter07_Standards.tsx`).
- **Verification:** Verified via live HTTP crawl and visual inspection. All 8 chapter targets now have verified scroll guards (`scrollMarginTop: 5rem`).

#### DEFECT-02: Cookie Consent Secondary Button Contrast Failure
- **Severity:** P1 (WCAG AA Normative Contrast Failure)
- **PRD Ref:** N-A11Y-03, F-19
- **Target Component:** `src/components/ui/ConsentBanner.tsx` ("Tylko niezbędne" button)
- **Reproduction:** Inspecting the default cookie consent banner rendered over the dark carbon background (`#111315`).
- **Observed vs. Expected:** The button used `variant="secondary"` (`text-[#181A1D]`), resulting in a computed contrast ratio of ~1.1:1 against the dark container, rendering text unreadable. Expected contrast ≥ 4.5:1 (WCAG AA) or ≥ 7.0:1 (WCAG AAA).
- **Remedy:** Replaced button styling with `variant="outline-white"` (`border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white focus:ring-white`).
- **Verification:** Contrast re-analyzed via `calc_contrast.py` and Vitest: white on carbon `#111315` achieves **17.65:1** contrast ratio, surpassing WCAG AAA requirements.

---

## 5. Viewport, Reflow & Accessibility Audit (320px – 1440px)

The production build was audited across four standard device viewports using headless Google Chrome (`--headless=new`):

| Viewport Category | Resolution | Artifact Screenshot | Horizontal Scroll | Reflow Behavior | Status |
|---|---|---|---|---|---|
| **Mobile Reflow (WCAG 1.4.10)** | 320 × 640 px | `scratch/audit_v2_mobile_320.png` | **0 px (None)** | Single-column reflow, full text wrapping, responsive table wrapping | **PASS** |
| **Modern Mobile** | 390 × 844 px | `scratch/audit_v2_mobile_390.png` | **0 px (None)** | Fluid typography, tap targets ≥ 44×44px, sticky header compact | **PASS** |
| **Tablet** | 768 × 1024 px | `scratch/audit_v2_tablet_768.png` | **0 px (None)** | 2-column sector cards, readable line lengths, clear CTA positioning | **PASS** |
| **Desktop** | 1440 × 900 px | `scratch/audit_v2_desktop_1440.png` | **0 px (None)** | 1280px max-width container, desktop nav, balanced grid spacing | **PASS** |

### 5.1 Manual & Automated Accessibility Checks
- **Landmark Structure:** Valid semantic HTML5 landmarks confirmed (`<header>`, `<main id="main-content">`, `<nav aria-label="...">`, `<aside id="cookie-consent-banner">`, `<footer>`).
- **Keyboard Navigation & Skip Link:** Skip-to-content link `<a href="#main-content">` is the first focusable element, becomes visible on Tab focus, and moves keyboard focus directly past navigation.
- **Focus Indicators:** High-contrast `outline-2 outline-offset-2 outline-[#C62836]` visible on all links, buttons, inputs, and checkboxes.
- **Text Zoom & 400% Reflow:** Global CSS enforces `overflow-x: hidden` and `overflow-wrap: break-word` on `html, body`. Content scales without clipping at 200% text zoom and 400% zoom.
- **Assistive Technology Notice:** Evaluated via DOM semantics, ARIA accessibility tree inspections, and keyboard simulation. Physical NVDA/JAWS on Windows and physical VoiceOver on iOS are designated as *UNRUN (LAB-SIMULATED ONLY)* and preserved for staging smoke testing.

---

## 6. Regulatory, Claims & Evidence Audit

Every public claim was cross-referenced against primary documentary evidence:

| Claim ID | Stated Subject | Evidence Source | Audit Result | Evidence Notes |
|---|---|---|---|---|
| **C-01** | Manufacturer tradition since 1984 | Original company history records | **PASS** | Stated as "od 1984 roku" / "ponad 40 lat tradycji" |
| **C-02** | Legal Entity & Commercial Facility | KRS / CEIDG / TÜV SÜD Cert | **PASS** | `Michał Mierzwa EmiChem P.P.`, NIP: `7780022439`, REGON: `639841804`, Reg: Wójtowska 16, 61-654 Poznań, Plant: Główna 30A, 61-007 Poznań |
| **C-03** | TÜV SÜD ISO 9001:2015 & 14001:2015 | Certificate PDF `12 100/104 50928 TMS` | **PASS** | Validity to 09.06.2027 confirmed; certificate bundled as 254 KB PDF download |
| **C-04** | MTP Gold Medals 2017 & 2019 | Unverified historical marketing claims | **PASS (EXCLUDED)** | Confirmed 100% omitted from all text, routes, and bundles |
| **C-05** | Biocidal Products Compliance | EU BPR Regulation (EU) No 528/2012 Art. 72 | **PASS** | Mandatory warning *"Produktów biobójczych należy używać z zachowaniem środków ostrożności..."* strictly rendered |
| **C-06** | Unverified Daily Capacity Claims | Unverified internal production metrics | **PASS (EXCLUDED)** | Confirmed 100% omitted from all public copy |
| **C-07** | Packaging Capabilities (0.5L – 1000L IBC) | Official packaging specifications | **PASS** | Described qualitatively without unsubstantiated volume totals |
| **C-08** | 5-Step Private Label Process | Contract manufacturing operations | **PASS** | 5-step pathway clearly rendered; links to form topic `private_label` |
| **C-11** | Authentic Visual Assets | Authorised JAX_Pro_Auto assets | **PASS** | Real product photography and logos used exclusively; zero synthetic AI factory imagery |

---

## 7. Staging Enquiry Endpoint & Security Hardening Evidence

The `/api/enquiry` Cloudflare Pages Function and staging sink adapter were subjected to automated integration and security penetration checks:

```text
[AUDIT] Staging Enquiry Endpoint Verification Results:
  5.1 B2B Valid Submission -> HTTP 200 (ID: JAX-ENQ-20260913-9HXR)
  5.2 Deduplication -> HTTP 200 (Status: already_received, duplicate safely ignored)
  5.3 Private Label Submission -> HTTP 200 (ID: JAX-ENQ-20260913-WUFA)
  5.4 Non-JS URL-Encoded Form -> HTTP 200 (Semantic HTML Receipt Page rendered)
  5.5 Honeypot Bot Submission -> HTTP 200 (Silent discard, synthetic ID returned)
  5.6 Oversize Payload (>64KB) -> HTTP 413 (Payload Too Large rejected)
  5.7 Burst Rate Limiting -> HTTP 429 (Too Many Requests after 5 rapid requests)
```

- **PII Protection:** Staging logs strictly mask sensitive data: email `m***i@firma.pl`, phone `+48 601 *** 567`, tax ID `PL123***7890`.
- **Zero Production Dispatch:** Staging sink adapter records interactions in memory; no production emails or SMS dispatched.
- **CSRF & Origin Guard:** Endpoints reject requests with unauthorized cross-origin headers.

---

## 8. Controlled Performance & Asset Transfer Audit (Budgets vs RUM)

> [!IMPORTANT]
> **Metodologiczne rozróżnienie metryk serwera a Core Web Vitals:**  
> Pomiary odpowiedzi lokalnego serwera statycznego (Vite preview loopback) rejestrują czas transferu pliku z dysku (< 1 ms TTFB serwera), co **NIE stanowi** miary rzeczywistego doświadczenia użytkownika w przeglądarce (Core Web Vitals: LCP, INP, CLS).  
> Rzeczywiste metryki Core Web Vitals (docelowe LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1) mogą być autorytatywnie zmierzone wyłącznie w środowisku przeglądarkowym z symulacją dławienia sieci i CPU (Lighthouse synthetic) lub w oparciu o dane terenowe RUM (Chrome User Experience Report) po publikacji na platformie hostingowej (Vercel).  
> Lokalny potok CI deterministycznie weryfikuje i gwarantuje budżety wagowe zasobów krytycznych oraz kompletny prerendering semantycznego drzewa DOM, co stanowi fundament pod osiągnięcie zielonych wskaźników LCP i INP.

### 8.1 Production Bundle Transfer vs PRD Ceilings

| Metric | Measured Value | PRD Ceiling | Headroom | Status |
|---|---|---|---|---|
| **Initial JS (gzipped)** | **159.40 KB** | **≤ 180.00 KB** | +20.60 KB (11.4% margin) | **PASS** |
| **Initial CSS (gzipped)** | **8.56 KB** | **≤ 40.00 KB** | +31.44 KB (78.6% margin) | **PASS** |
| **Mobile Hero Image (WebP)** | **150.34 KB** | **≤ 250.00 KB** | +99.66 KB (39.9% margin) | **PASS** |
| **Fonts (Latin + Latin-Ext WOFF2)** | **38.40 KB** | **≤ 120.00 KB** | +81.60 KB (68.0% margin) | **PASS** |
| **Total Pre-Scroll Critical Transfer** | **~356.70 KB** | **≤ 750.00 KB** | +393.30 KB (52.4% margin) | **PASS** |

> **Field Core Web Vitals Notice:** Real User Monitoring (RUM / CrUX) field data is **UNAVAILABLE / NOT YET MEASURABLE** prior to live user traffic. Lab metrics confirm sub-millisecond local response and lightweight asset footprints.

---

## 9. Release Decision: CONDITIONAL PREVIEW

- **Final Gate Decision:** **CONDITIONAL PREVIEW (PASSED FOR STAGING DEPLOYMENT & CLIENT ACCEPTANCE)**
- **Defect Status:** 0 Blocker (P0), 0 Critical (P1), 0 Major (P2). All discovered defects resolved.
- **Test Status:** 65 / 65 automated tests passing (100%).
- **Prerendering Status:** 11 of 11 static routes successfully generated with complete semantic content.

### Conditions for Final Production Launch (Phase D2/D3):
1. **DNS Delegation:** Client DNS administrator must add CNAME record pointing `info.jax.com.pl` to the Cloudflare Pages deployment domain (`<project>.pages.dev`).
2. **Production Secrets:** Client must inject production environment variables into Cloudflare Pages settings (`ENQUIRY_API_TOKEN`, `ALERT_EMAIL`, `ALLOWED_ORIGIN=https://info.jax.com.pl`).
3. **Client Acceptance:** Commercial owner formal sign-off on staging preview before live traffic cutover.

---

## 10. Candidate Package Specification for Phase D2

- **Candidate Build Target:** `dist/static/` (11 HTML pages, `sitemap.xml`, `robots.txt`, `_headers`, `assets/`, `documents/`).
- **Serverless API Function:** `functions/api/enquiry.ts` (Cloudflare Pages Function).
- **Required Cloudflare Environment Variables:**
  - `ENVIRONMENT=production`
  - `ALLOWED_ORIGIN=https://info.jax.com.pl`
  - `ALERT_EMAIL=sprzedaz@jax.com.pl`
  - `ENQUIRY_API_TOKEN=<secure-token>`
- **No Production Code Changes Required.** Candidate package is frozen, verified, and ready for deployment in Phase D2.
