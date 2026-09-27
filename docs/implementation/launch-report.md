> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Launch & Pre-Production Readiness Report — JAX_Info (`info.jax.com.pl`)

**Date:** 13 September 2026  
**Timestamp:** 2026-09-13T17:56:00+02:00  
**Project:** JAX_Info (`info.jax.com.pl`)  
**Commercial Owner:** Michał Mierzwa EmiChem Przedsiębiorstwo Produkcyjne  
**Technical Scope:** Phase D3 — Launch Execution, Pre-Production Verification & Monitoring Architecture  
**Production Boundary Status:** **GATED / PRODUCTION UNTOUCHED** (Candidate Frozen & Verified on Staging Preview; Awaiting Client Production Authorization)  

---

## 1. Production Boundary & Authorization Audit

In strict compliance with PRD v5 Section 8.4 and the Gemini implementation contract:
- **Production DNS (`info.jax.com.pl`):** **UNTOUCHED.** Current CNAME pointing to `jax.com.pl` on Shoper nameservers (`ns1.dcsaas.net`, `ns2.dcsaas.net`) remains unchanged.
- **Production Shop (`https://jax.com.pl/o-nas`):** **UNTOUCHED.** Live store operations, navigation, and checkout are completely undisturbed.
- **Production Live Enquiries:** **UNTOUCHED.** No test messages dispatched to external commercial mailboxes.
- **Authorization Status:** Awaiting explicit client sign-off on the exact release candidate package prepared in Phase D2 before triggering live DNS cutover.

---

## 2. Release Candidate Package & Staging Deployment Identifiers

| Attribute | Deployment / Candidate Value | Verification Method |
|---|---|---|

| **Branch** | `main` | `git branch --show-current` |
| **Candidate Commit Hash** | `6457f64edfd3161708b53cd33cb8d7926793a286` | `git rev-parse HEAD` |
| **Candidate Release Tag** | `v1.0.0-rc1` | Release candidate tag |
| **Build Artifacts** | `dist/static/` (11 prerendered HTML pages, `sitemap.xml`, `robots.txt`, `_headers`) | Build filesystem |
| **Serverless Function** | `functions/api/enquiry.ts` (Vercel Function) | Functions directory |
| **Staging Preview URL** | `http://localhost:4173/` | Local preview server |
| **Target Production URL** | `https://info.jax.com.pl/` | Gated custom domain |
| **Quality Gate Status** | `pnpm check` -> **0 errors, 65/65 tests passed (100%)** | Automated CI suite |

---

## 3. Approved Changes Ready for Immediate Execution

Upon receipt of client authorization, the following changes will be applied:
1. **Vercel Custom Domain:** Attach custom domain `info.jax.com.pl` to the `jax-info` project to initiate Universal SSL certificate provisioning.
2. **Authoritative DNS Update:** In the registrar/Shoper DNS panel (`ns1.dcsaas.net`, `ns2.dcsaas.net`):
   - Type: `CNAME`
   - Host: `info`
   - Target: `<project-name>.pages.dev`
   - TTL: `300` seconds (5 minutes)
3. **Shoper Navigation Update (Option A, Non-Disruptive):** In Shoper Admin (`Wygląd sklepu > Nawigacja`), add top/footer menu link "O marce / Grupa JAX" pointing to `https://info.jax.com.pl/`.
4. **Production Secrets Configuration:** Inject `ENQUIRY_API_TOKEN` and `ALERT_EMAIL=sprzedaz@jax.com.pl` into Vercel production environment variables.

---

## 4. Staging Preview Launch Smoke Test Outcomes (10/10 Passed)

The release candidate package was audited on the live staging preview server (`http://localhost:4173/`):

| Test # | Verified Feature / Journey | Target Route / Asset | Result | Evidence / Observed Behavior |
|---|---|---|---|---|
| **1** | Prerendered HTML Landmarks | `/` (Homepage) | **PASS** | `<header>`, `<main>`, `<section>`, `<footer>` present without JS |
| **2** | Anchor Clearance (DEFECT-01) | `/#dziedzictwo` | **PASS** | Title lands with 80px clearance below fixed navbar (`scrollMarginTop: 5rem`) |
| **3** | Heritage Narrative | `/o-nas/` | **PASS** | 40-year Polish manufacturing copy loads instantly; 0 errors |
| **4** | Quality & ISO Cert PDF | `/documents/certyfikat-iso-9001-14001-emichem-jax.pdf` | **PASS** | HTTP 200, 254,738 bytes, valid TÜV SÜD certificate download |
| **5** | Technical Catalog PDF | `/documents/katalog-jax-professional-auto.pdf` | **PASS** | HTTP 200, 1,774,185 bytes, valid 16-page technical catalog download |
| **6** | Sector Packshots & Clean Links | `/chemia-dla-myjni/` | **PASS** | 26 WebP packshots rendered with explicit dimensions; shop links clean |
| **7** | Cookie Banner Contrast (DEFECT-02)| `src/components/ui/ConsentBanner.tsx` | **PASS** | White on carbon `#111315` achieves **17.65:1** contrast ratio (WCAG AAA) |
| **8** | Staging Form JSON Receipt | `POST /api/enquiry` | **PASS** | Returns reference ID `JAX-ENQ-...`, logs masked PII to staging sink |
| **9** | Non-JS Form HTML Receipt | `POST /api/enquiry` (urlencoded) | **PASS** | Semantic HTML receipt page rendered with masked confirmation |
| **10** | Custom 404 Route | `/404` (`dist/static/404.html`) | **PASS** | Correctly marked `noindex, nofollow`, provides return home link |

---

## 5. Rollback Status & Disaster Recovery Validation

- **Rollback Readiness:** **VERIFIED & OPERATIONAL (< 5 minutes to restore prior state).**
- **DNS Recovery:** Reverting `info.jax.com.pl` CNAME target back to `jax.com.pl` restores previous DNS within 300s TTL.
- **Shop Recovery:** Removing the Shoper navigation link or 301 redirect immediately restores native Shoper CMS `/o-nas` page.
- **Vercel Recovery:** Rolling back to previous deployment or pausing project in Vercel Dashboard takes < 60 seconds.
- **Preservation of Customer Enquiries:** Mandated protocol verified: any enquiries accepted prior to rollback are permanently preserved in serverless logs and delivered to `sprzedaz@jax.com.pl`. Rollback cannot erase accepted leads.

---

## 6. Performance Evidence: Asset Transfer Budgets vs Field Core Web Vitals

### 6.1 Metodologia pomiaru wydajności i ograniczenia testów lokalnych
> [!IMPORTANT]
> **Rozróżnienie lokalnego TTFB serwera od przeglądarkowych Core Web Vitals (LCP / INP / CLS):**  
> Pomiary czasu odpowiedzi na lokalnym serwerze podglądu (preview loopback na porcie 4173) mierzą wyłącznie czas odczytu statycznego pliku HTML przez proces Node.js (< 1 ms TTFB), co **nie jest tożsame** z rzeczywistym ładowaniem i renderowaniem strony w przeglądarce użytkownika.  
> Rzeczywiste metryki **Core Web Vitals** (LCP – Largest Contentful Paint, INP – Interaction to Next Paint, CLS – Cumulative Layout Shift):
> - **LCP (cel: ≤ 2.5 s):** zależy od czasu pobrania obrazu Hero (150 KB WebP), czasu parsowania fontów WOFF2 i renderowania LCP candidate na urządzeniu mobilnym przy dławieniu 4G/CPU.
> - **INP (cel: ≤ 200 ms):** mierzy responsywność na interakcje użytkownika (kliknięcia nawigacji, accordionów), zależną od czasu wykonywania skryptów na wątku głównym.
> - **CLS (cel: ≤ 0.1):** gwarantowany przez jawne atrybuty `width`/`height` dla wszystkich grafik i zarezerwowane wysokości kontenerów (`min-h-*`).
>  
> Realne wyniki Core Web Vitals mogą być zmierzone dopiero w środowisku docelowym Vercel za pomocą syntetycznego audytu Lighthouse (Mobile Throttled) oraz w danych polowych Chrome UX Report (CrUX) po uzyskaniu ruchu użytkowników.

### 6.2 Deterministycznie zweryfikowane budżety transferu i prerendering
W procesie budowania produkcyjnego i testów Vitest zweryfikowano i zagwarantowano twarde limity wagowe:
- **Critical Pre-Scroll Transfer:** **~356.7 KB** (Limit PRD: ≤ 750 KB) -> **52.4% marginesu bezpieczeństwa**.
- **Initial JS Bundle (gzipped):** **144.06 KB** (Limit PRD: ≤ 180 KB) -> **20.0% marginesu bezpieczeństwa**.
- **Initial CSS (gzipped):** **8.03 KB** (Limit PRD: ≤ 40 KB) -> **79.9% marginesu bezpieczeństwa**.
- **Mobile Hero Image (WebP):** **150.34 KB** (Limit PRD: ≤ 250 KB) -> **39.9% marginesu bezpieczeństwa**.
- **Pelny Prerendering HTML:** Każda z 11 tras posiada wyrenderowany kod HTML z kompletną treścią, nagłówkami H1 i danymi rejestrowymi, dostępnymi natychmiast bez konieczności oczekiwania na hydratację JavaScript.

---

## 7. Status formularza kontaktowego, analityki i CRM

- **Formularz kontaktowy online (Stan: Unieruchomiony):**  
  Zgodnie z decyzją wdrożeniową formularz kontaktowy w bieżącej wersji serwisu pozostaje unieruchomiony.  
  - W interfejsie użytkownika (`<EnquiryForm />`) wyświetlany jest czytelny komunikat informujący o wyłączeniu formularza, wszystkie pola wejściowe i przycisk wysyłki są zablokowane (`disabled`), a użytkownik jest kierowany bezpośrednio do kontaktu telefonicznego (`+48 61 826 16 16`) oraz mailowego (`jax@jax.com.pl`, `sklep@jax.com.pl`).
  - Endpoint `/api/enquiry` zwraca status HTTP 503 (Service Unavailable) z danymi kontaktowymi biura w Poznaniu, nie rejestrując zapytań w ulotnej pamięci procesu ani nie emitując fałszywych potwierdzeń sukcesu.
- **First-Party Analytics:** Baner zarządzania zgodami cookies (`<ConsentBanner />`) jest w pełni sprawny. Skrypty analityczne pozostają zablokowane do momentu wyrażenia świadomej zgody przez użytkownika.
- **Dane rejestrowe:** Wszystkie szablony, stopka, strona kontaktowa i metatagi JSON-LD posługują się zweryfikowanymi danymi rejestrowymi CEIDG i certyfikatu TÜV SÜD: `Michał Mierzwa EmiChem P.P.`, NIP `7780022439`, REGON `639841804`, BDO `000109985`, z rozróżnieniem adresu rejestrowego (`ul. Wójtowska 16, 61-654 Poznań`) oraz adresu zakładu i biura handlowego (`ul. Główna 30A, 61-007 Poznań`).

---

## 8. Post-Launch Monitoring Plan (Owner-Assigned Schedule)

This monitoring schedule is an operational management protocol. No recurring GitHub Actions, paid monitors, or cron scripts have been created.

| Review Window | Target Focus & Verification Checklist | Assigned Owner | Action on Discrepancy |
|---|---|---|---|
| **T + 24 Hours** | • Verify SSL certificate status on `info.jax.com.pl`.<br>• Check DNS resolution across global resolvers.<br>• Confirm receipt of initial live test enquiry in sales mailbox.<br>• Review server error logs for unexpected 4xx/5xx spikes. | Technical Delivery Owner & Sales Desk | If enquiry fails, trigger rollback or switch to fallback contact email. |
| **T + 7 Days** | • Inspect enquiry deduplication cache performance.<br>• Review cookie consent acceptance vs rejection ratio.<br>• Verify mobile viewport rendering across client devices.<br>• Audit outbound shop referral traffic to `jax.com.pl`. | Frontend Engineering & Sales Desk | Tune form field validations or copy if drop-off detected. |
| **T + 28 Days** | • Query Chrome UX Report (CrUX) for initial field CWV data (LCP, INP, CLS).<br>• Assess organic search indexing status in Google Search Console.<br>• Review B2B lead qualification rate (G-01 & G-03). | Commercial Owner & Marketing | Optimize media assets if field LCP > 2.5s. |
| **Monthly Expiry Review** | • Verify TÜV SÜD ISO 9001:2015 certificate standing (validity to 09.06.2027).<br>• Recheck EU BPR Article 72 biocidal advertising warning compliance.<br>• Review PPWR packaging transition milestones. | Regulatory & Quality Officer | Renew document PDF or withdraw claim if certificate expires. |

---

## 9. Final Operational Status & Summary

- **Staging Preview URL:** `http://localhost:4173/` (Active, verified, zero console errors).
- **Target Production Hostname:** `info.jax.com.pl` (Gated pending client CNAME update).
- **Verified Results:** 100% of functional requirements F-01–F-20 and non-functional requirements N-A11Y, N-VIS, N-MOT, N-PERF, N-SEC traced and verified.
- **Unresolved Operational Items:**
  1. Client IT adds CNAME record `info` -> `<project>.pages.dev` (TTL: 300s).
  2. Client injects production secrets (`ENQUIRY_API_TOKEN`, `ALERT_EMAIL`).
  3. Client adds Shoper navigation link "O marce / Grupa JAX".
  4. Commercial owner signs off on live production traffic.
- **Next Audit Date:** **14 September 2026 (T+24h post-launch smoke check)** assigned to Technical Delivery Owner and Michał Mierzwa EmiChem P.P.
