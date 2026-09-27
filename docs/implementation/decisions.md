> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Architecture Decisions & Assumptions Register — JAX_Info

**Version:** 1.1 · **Date:** 13 September 2026  
**Status:** Architecture Locked (Phase A3)  
**Product:** https://info.jax.com.pl · **Owner:** Michał Mierzwa EmiChem P.P. / JAX Professional

---

## 1. Architecture & Technical Decisions

### ADR-01: Framework & Build Pipeline
- **Decision:** React 19 + TypeScript (strict mode) + Vite + Tailwind CSS v4.
- **Context:** Modern, lightweight frontend toolchain providing immediate dev-server feedback and static build optimization.
- **Rationale:** React 19 provides modern hooks and metadata handling; Vite ensures sub-second HMR and reliable Rollup-based tree-shaking; Tailwind CSS v4 offers zero-runtime CSS variables with modern design token integration.
- **Trade-offs:** Build-time prerendering requires dedicated static generation tooling (Vite SSR + React DOM server) rather than a pure client-side SPA.

### ADR-02: Rendering Strategy & Graceful Degradation
- **Decision:** Full build-time HTML prerendering of every published route (`/`, `/historia/`, `/produkcja/`, `/jakosc-i-certyfikaty/`, `/zgodnosc-i-dokumenty/`, `/private-label/`, `/kontakt/`, `/polityka-prywatnosci/`, `/deklaracja-dostepnosci/`, and `404.html`).
- **Context:** PRD v5 F-01 and F-17 require complete readable initial HTML, H1, body copy, navigation, and contact accessibility without JavaScript execution.
- **Rationale:** A client-side-only SPA returns empty `<div id="root"></div>` on initial load, failing accessibility audits, search engine indexability without JS, and resilient offline/slow-connection rendering. Prerendering ensures instant first contentful paint and immediate accessibility.
- **Verification:** Automated curl and DOM tests on build output verifying full landmark structures (`<header>`, `<main>`, `<nav>`, `<footer>`) and headings in raw HTTP response.

### ADR-03: Typography System — Pragati Narrow
- **Decision:** Pragati Narrow (Regular & Bold) as the primary brand and editorial typeface across both headings and body text throughout the site.
- **Context:** PRD v4/v5 explicit owner direction supersedes earlier exploratory stack notes proposing Inter or system fonts for body copy.
- **Rationale:** Pragati Narrow delivers the signature technical, industrial, and automotive manufacturing visual character established in the sibling benchmark (`jax-pro-auto`).
- **Safety / Readability Boundary:** Pragati Narrow is tested at generous font sizes (body 20–22px, line-height 1.45–1.6, ~55–75 characters per line). A system font (`system-ui`) is permitted solely as a documented, tested fallback exception for high-density legal or technical data tables if user testing demonstrates a legibility issue.

### ADR-04: Narrative Layout — Content-Led Section Heights (No Forced 100vh)
- **Decision:** Natural, content-driven heights for all 8 narrative chapters; no forced `min-height: 100vh`, no scroll hijacking, no horizontal page locking, no mandatory pinned snap points.
- **Context:** PRD v4 proposed full-viewport scenes which caused severe mobile usability problems, unnatural vertical whitespace, and fragmented reading rhythm.
- **Rationale:** Professional B2B buyers scan content efficiently. Natural layout allows dense, scannable editorial sections while preserving standard native browser scrolling and touch trackpad behaviors.

### ADR-05: Private Label MVP — Text-First Brief (Upload Deferred)
- **Decision:** The MVP enquiry form handles Private Label and contract manufacturing briefs via structured text fields and volume selectors (including "Nie wiem jeszcze" / "Do ustalenia"); file upload (F-18) is deferred to v1.1.
- **Context:** File upload of up to 20 MB requires server-side file quarantine, anti-malware scanning, MIME validation, expiring authenticated storage links, and data retention policies. Publishing an upload input without robust backend protection creates significant security and compliance risks.
- **Trade-off:** Buyers describe packaging and formulation requirements in text during MVP; deep spec documents are transferred after direct sales contact.

### ADR-06: Shop Integration — Clean Canonical Links by Default
- **Decision:** Links from `info.jax.com.pl` to the transactional shop at `jax.com.pl` use standard HTML anchor tags (`<a href="https://jax.com.pl/...">`) with clean URLs by default (no automatic UTM parameters or URL query pollution).
- **Context:** Unconditional UTM tagging between a corporate subdomain and the primary e-commerce store overrides original marketing campaign attribution in analytics and creates messy URLs.
- **Rationale:** Clean links preserve original organic/referral attribution. Click locations and CTA engagement are tracked via client-side analytics events (`click_to_shop`) with chapter and category metadata.

### ADR-07: Motion Architecture — Progressive Motion.dev Enhancement
- **Decision:** Motion.dev (`motion/react`) used exclusively as the progressive enhancement layer over static HTML.
- **Context:** PRD v5 N-A11Y-05 and N-MOT-01–N-MOT-04 require full operational usability when motion is reduced or JavaScript fails.
- **Implementation Rules:**
  - Hero H1, primary copy, and primary CTA are immediately visible at first paint (zero opacity delay, no entrance blocking LCP).
  - Section reveals use once-only entrance animations (12–20px travel, 250–400ms duration, stagger ≤60ms) and do not replay when reversing scroll.
  - Reduced motion (`prefers-reduced-motion: reduce`) instantly bypasses all transforms and reveals, rendering static final states.
  - No global React state re-renders tied to scroll frame events; native intersection observers and MotionValues only.

### ADR-08: Hosting & Serverless Architecture
- **Decision:** Static output hosted on Cloudflare Pages with a lightweight Cloudflare Pages Function for the `/api/enquiry` endpoint (`functions/api/enquiry.ts`).
- **Context:** High availability, global edge distribution, zero-maintenance static serving, and isolated serverless execution for form processing.
- **Fallback:** Vercel Static + Vercel Serverless Function if account or deployment ownership requires it.

### ADR-09: Standing Permission for Asset Reuse
- **Decision:** Authorised reuse of logos, graphics, product photography, and catalogue data from `JAX_Pro_Auto`, `jax-pro-auto.64bit.site`, and `jax.com.pl` without repeated permission requests.
- **Context:** Product owner confirmed on 13 September 2026 that JAX_Pro_Auto and JAX_Info represent the same operating company and that the company holds all required rights.
- **Safety Boundary:** The sibling repository `JAX_Pro_Auto` is strictly read-only and must never be modified. All copied assets must be placed locally in `JAX_Info/public/assets/` with clean relative paths and catalogued in `asset-manifest.md`.

### ADR-10: Full-Route Build-Time Prerendering & Static 404 Generation
- **Decision:** Implement a deterministic Node-based build-time prerendering script (`scripts/prerender.ts`) using `react-dom/server` (`renderToString` / `renderToPipeableStream`) combined with Vite's SSR build mode.
- **Realistic Alternatives Compared:**
  1. *Client-side SPA with fallback 200 rewrite:* Rejected. Fails F-01/F-17; renders blank screen on JS failure; violates accessibility and corporate transparency requirements.
  2. *Full Next.js 15/16 App Router Migration:* Rejected. Heavy runtime dependencies, vendor churn, excess overhead for a static 10-route corporate showcase, and unnecessary complex edge infrastructure.
  3. *Astro static site generation:* Considered. Excellent static output, but introduces dual syntax and duplicates effort given team's React 19/Vite expertise in `JAX_Pro_Auto`.
  4. *Vite SSR + react-dom/server prerender (Chosen):* Retains React 19 + TypeScript stack, outputs static `.html` files for all 10 routes into `dist/` (e.g. `dist/historia/index.html`), generates a dedicated `dist/404.html`, enables exact metadata tags (`<title>`, `<meta name="description">`, Open Graph, JSON-LD) directly in initial HTML, guarantees seamless direct route reloads without server rewrite traps, and allows semantic non-JS form submission targets.
- **404 Handling:** Cloudflare Pages natively serves `dist/404.html` with a genuine HTTP 404 status code when any unmapped path is requested.
- **Hydration Boundary:** Client hydration attaches to existing SSR markup cleanly; if JavaScript is disabled or fails to load, 100% of the text, navigation, tables, and contact details remain interactive.

### ADR-11: Server Enquiry Endpoint, Acceptance, Delivery & Idempotency Contract
- **Decision:** Deploy a lightweight Cloudflare Pages Function at `functions/api/enquiry.ts` acting as the secure gateway for B2B leads.
- **Acceptance & Content-Type Contract:**
  - Accepts both `application/json` (modern client-side fetch) and `application/x-www-form-urlencoded` (native HTML `<form method="POST">` when JS is disabled or blocked).
  - Required fields: `name` (min 2 chars), `company` (min 2 chars), `email` (valid email format), `topic` (enum: general, sales, private_label, technical), `message` (min 10 chars), `consent` (boolean true).
  - Honeypot antispam: Hidden field `_hp_check` must be empty; submissions with values return a synthetic `200 OK` without dispatching downstream.
  - Validation: Strict server-side Zod schema validation. If invalid: returns HTTP 400 with structured JSON errors (for fetch) or renders an accessible HTML error summary with form pre-fill (for native POST).
- **Idempotency & Replay Protection:**
  - Computes a deterministic SHA-256 hash of `company + email + topic + message_normalized`.
  - Maintains a sliding 10-minute deduplication window in memory / KV. Duplicate submissions receive HTTP 200 with `status: "already_received"` and the original `enquiry_id`, preventing repeated external webhook triggers or inbox flooding.
  - Each accepted enquiry receives a cryptographically random UUID v4 `enquiry_id` returned in the response receipt.
- **Delivery & Staging Test Sink:**
  - Cloudflare Function forwards valid payloads to a designated sink via HTTPS POST with HMAC-SHA256 signature in `X-Signature` header.
  - *Staging sink:* A dedicated mock webhook sink (console audit logger / local test server endpoint) that logs redacted headers and body payloads for verification.
  - *Production sink:* Direct SMTP dispatch or secure internal n8n webhook on `n8n.itcs.biz`.
  - *Failure/Retry Handling:* Function implements 3 retry attempts with exponential backoff (200ms, 800ms, 1600ms) for transient 5xx downstream errors. If downstream is unreachable, logs an error event (redacting message body PII) and returns HTTP 200 with fallback advisory to the client: "Zapytanie zarejestrowane lokalnie. W pilnych sprawach prosimy o kontakt telefoniczny pod numerem +48 61 877 22 22."
- **Secret Boundary:**
  - Environment variables (`ENQUIRY_WEBHOOK_URL`, `ENQUIRY_WEBHOOK_SECRET`, `SMTP_PASS`) are configured exclusively in the Cloudflare Pages deployment environment.
  - Zero server secrets are prefixed with `VITE_` or bundled into client assets.
- **v1.1 Deferred Attachments Specification (F-18):**
  - MVP form explicitly omits `<input type="file">`.
  - Documented backend obligations for v1.1: Client requests presigned upload URL from `/api/enquiry/upload-ticket`; direct client upload to Cloudflare R2 quarantine bucket (max 20 MB, PDF/JPEG/PNG); background worker validates magic bytes, triggers ClamAV scan, moves clean files to protected storage, and assigns temporary 7-day download tokens for sales reps.

### ADR-12: Authoritative DNS Delegation, Subdomain Boundary & Shop Relationship
- **Decision:** Maintain `info.jax.com.pl` strictly as a delegated subdomain CNAME pointing to Cloudflare Pages; never touch or migrate root nameservers of `jax.com.pl`.
- **Authoritative DNS Evidence:**
  - Probed DNS shows `jax.com.pl` authoritative nameservers are `ns1.dcsaas.net` and `ns2.dcsaas.net` (DreamCommerce / Shoper SaaS infrastructure).
  - Root domain `jax.com.pl` is an active e-commerce store with existing A records (`77.79.221.156`, `77.79.221.188`).
  - Shoper does not control the corporate domain registrar; migrating nameservers would break email, SSL, and transactional checkout for the existing store.
- **Subdomain Deployment Strategy:**
  - Create/update a single CNAME DNS record for `info.jax.com.pl` in the domain DNS management panel (or Shoper external DNS zone editor if hosted there) pointing to `<project>.pages.dev`.
  - Cloudflare Pages handles automatic SSL/TLS termination via universal edge certificates.
- **Shop Integration & Review Items:**
  - The later redirection of Shoper's `/o-nas` URL to `https://info.jax.com.pl` and header navigation updates are prepared as review items with exact instructions for the Shoper administrator, not executed unilaterally.
  - Links to `jax.com.pl` from `info.jax.com.pl` remain clean canonical URLs (e.g. `https://jax.com.pl/pl/c/Chemia-samochodowa/12`). No automatic UTM injection, no session sharing, no cross-domain linker cookies.
- **Consent & Measurement:**
  - Self-hosted / cookieless measurement by default. If external analytics (GA4/Piwik) is enabled, it is strictly gated behind a two-button consent banner (F-19).

### ADR-13: Dependency Strategy, Route Splitting & Bundle Budget
- **Decision:** Lean, minimal dependency tree with strict budget caps (initial landing JS ≤ 85 kB gzipped, CSS ≤ 25 kB gzipped).
- **Core Dependencies:**
  - `react` 19.x & `react-dom` 19.x (runtime UI)
  - `motion` (modern `motion/react`, tree-shaken, progressive enhancement)
  - `lucide-react` (icon set, imported as named components, tree-shaken)
  - `zod` (schema validation for content and form payloads)
  - `tailwindcss` v4 + `@tailwindcss/vite` (utility styling with zero runtime CSS)
- **Code & Route Splitting:**
  - Each route (`/historia/`, `/private-label/`, etc.) is prerendered to static HTML and dynamically imported during client hydration.
  - Heavy client interactive widgets (e.g. detailed interactive Private Label calculator or modal views) are loaded via `React.lazy()` only when triggered.
- **Document Hosting:**
  - PDF catalogue, ISO certificate extracts, and terms are hosted as static immutable assets in `/public/documents/`.
  - Served with long cache headers (`Cache-Control: public, max-age=31536000, immutable`), verified with SHA-256 checksums in `asset-manifest.md`.
- **Font & Asset Delivery:**
  - Pragati Narrow Regular and Bold self-hosted in `public/fonts/` as subsetted WOFF2 files (Latin + Latin Extended covering Polish diacritics).
  - Font files preloaded in `<head>` via `<link rel="preload" as="font" type="font/woff2" crossorigin>`.
  - Product packshots served in WebP format with explicit `width`, `height`, and `decoding="async"`, plus `loading="lazy"` on below-the-fold assets to guarantee zero Cumulative Layout Shift (CLS = 0).

### ADR-14: CI Budget & GitHub Actions Guardrails

- **Enforced Guardrails:**
  - Runner environment: Strictly `ubuntu-latest` (1x minute consumption). Zero macOS/Windows runners.
  - Job execution timeout: Capped at `timeout-minutes: 10`.
  - Concurrency control: `concurrency: { group: ${{ github.workflow }}-${{ github.ref }}, cancel-in-progress: true }`.
  - Trigger filters: Run only on pull requests and pushes to `main` touching relevant project paths (`src/**`, `public/**`, `functions/**`, `scripts/**`, `package.json`, `pnpm-lock.yaml`, `vite.config.ts`).
  - No automated cron/schedule triggers.
  - No billing or spending limit modifications.
- **Monthly Usage Estimation:**
  - Estimated qualifying runs: ~25–35 runs per month during active development.
  - Estimated run duration: ~2.5–3.5 minutes per run (typecheck, lint, unit tests, static build, HTML assertion).
  - Monthly minute consumption: ~65–125 minutes/month (well within the 240-minute project allocation cap, representing <7% of the account-wide allowance).

---

## 2. Assumptions & Uncertainty Register

| ID | Domain | Assumption Description | Confidence | Safe Fallback if Invalidated | Owner Evidence Required |
|---|---|---|---|---|---|
| **ASM-01** | Legal / NAP | Entity is Michał Mierzwa EmiChem P.P., registered at Wójtowska 16, Poznań, with commercial/warehouse facility at Główna 30A. | High | Clearly distinguish registered office from warehouse facility | Business owner CEIDG extract confirmation |
| **ASM-02** | Certification | ISO 9001:2015 and ISO 14001:2015 TÜV SÜD certificate 12 100/104 50928 TMS is active and in good standing through 2027-06-09. | High (cert inspected) | State exact certificate metadata and dates; omit if suspended | Quality owner confirmation of active issuer status |
| **ASM-03** | Awards | MTP Gold Medal 2017 (JAX 44) and MTP 2019 (JAX 42) were formally awarded to EmiChem. | Low (unverified) | Omit specific medal claims, badges, and `/nagrody-i-wyroznienia/` route from MVP | Diploma scan or official MTP award registry entry |
| **ASM-04** | Biocides | JAX 34 PREMIUM holds active authorization permit 4364/11 under URPL. | Medium (product page stated) | Display permit number only with mandatory statutory warning (Art. 72 BPR); do not claim product is "100% safe" | Regulatory owner URPL register verification |
| **ASM-05** | Production Scale | EmiChem packages chemical products from retail containers up to 1000L IBC. | High (catalog verified) | Describe packaging scope qualitatively without quoting exact unverified throughput numbers | Operations owner confirmation of IBC packaging line |
| **ASM-06** | Private Label | EmiChem operates a 5-step contract manufacturing workflow for external brands. | High (PRD validated) | Offer general invitation to submit brief; omit guaranteed turnaround or R&D promises | Commercial manager approval of 5-step process |
| **ASM-07** | E-commerce Split | `jax.com.pl` remains active on Shoper; `info.jax.com.pl` is purely informational/B2B lead generation. | High (DNS verified) | Strict separation maintained; no cart or pricing logic in JAX_Info | Confirmation of DNS delegation for `info.jax.com.pl` |
| **ASM-08** | Target Audience | Primary traffic consists of B2B procurement managers, facility managers, distributors, and Private Label buyers. | High (PRD validated) | Focus landing page on manufacturer credibility, certificates, and direct enquiry | Post-launch 30-day analytics and sales review |
| **ASM-09** | Language MVP | Polish is sufficient for initial launch; English export audience served in v1.1. | High (owner scope) | All MVP copy written in natural, high-standard Polish; no half-translated `/en/` routes | Content owner English translation sign-off for v1.1 |
| **ASM-10** | Accessibility Law | EAA (Dz.U. 2024 poz. 731) applies to covered commercial services; corporate website adheres to WCAG 2.1 AA voluntarily as product quality standard. | High (legal verified) | Implement WCAG 2.1 AA regardless of legal exemption status | Legal review of service categorization |
| **ASM-11** | Enquiry Sink | Production enquiry notifications will be received via dedicated email/SMTP or internal n8n webhook. | Medium (unresolved credential) | Staging mock sink verifies acceptance; production credentials configured at Gate D | IT owner delivery of SMTP or n8n webhook URL |
| **ASM-12** | Shoper CNAME | Shoper administration panel or external domain registrar allows configuring subdomain CNAME `info.jax.com.pl`. | High (DNS standard) | Standard CNAME configuration to Cloudflare Pages | Registrar access / DNS record entry confirmation |

---

## 3. Tool & Capability Status

| Tool / Service | Probed Method | Status | Evidence & Capability Notes | Fallback Strategy |
|---|---|---|---|---|
| **Filesystem & Shell** | Native `run_command`, `view_file`, `write_to_file`, `list_dir` | **Callable** | Verified: directory creation, file inspection, git status checks all succeeded. | Native execution tools within workspace. |
| **Context7 Documentation** | MCP `context7` (`resolve-library-id`, `query-docs`) | **Callable** | Tested: library ID `/websites/motion_dev` resolved; documentation snippets retrieved. | Official online documentation. |
| **Motion Documentation** | MCP `Motion` (`search-motion-docs`) | **Callable** | Tested: query `scroll` returned official Motion React documentation and 8 Motion+ reference patterns. | Context7 `/websites/motion_dev` and official Motion.dev docs. |
| **Browser (Playwright)** | MCP `playwright` (`browser_navigate`, `browser_snapshot`, `browser_close`) | **Callable** | Tested: navigated to `about:blank`, captured snapshot, closed cleanly. | Local Playwright CLI / headless runner. |
| **Chrome DevTools** | MCP `chrome-devtools` (`list_pages`) | **Unavailable** | Server not running in current IDE session (`server name not found`). | Playwright browser snapshots + local Chrome DevTools / Lighthouse CLI. |
| **21st.dev MCP** | HTTP JSON-RPC at `https://21st.dev/api/mcp` with `x-api-key` | **Callable (HTTP)** | Tested: `tools/list` returned 34 tools; `get_usage` confirmed Free Tier (2/2 daily retrievals remaining). Zero credits consumed. | Public web catalogue search and original local implementation. |


### Decision D-12: Primary Deployment via Vercel 
- **Decision:**
  - `vercel.json` configures output directory `dist/static`, trailing slash preservation, and preview header protection (`X-Robots-Tag: noindex, nofollow`).
  - Serverless function `api/enquiry.ts` handles B2B contact form submissions with dual JSON and URL-encoded fallback.
  - CI workflow `.github/workflows/ci.yml` strictly maintains a single Ubuntu job with an 8-minute timeout (240 min monthly ceiling for 30 changes) with zero cron schedules.
  - Test suites include automated build fallbacks ensuring clean checkouts never fail due to unbuilt `dist` artifacts.

### Decision D-13: Hero Bestseller Carousel, Dual 2026 Catalogs, and AIO / GEO Grounding
- **Context:** To enhance corporate trust, commercial conversion, and modern AI search indexing, the portal required immediate visibility of flagship products, verified downloadable catalogs, and structured knowledge for AI retrieval engines.
- **Decision:**
  - Implemented `HeroBestsellerCarousel.tsx` featuring 6 verified high-runner products (JAX 44, JAX 42, JAX 34, JAX 01, JAX 27, JAX 16) with direct links to `jax.com.pl`.
  - Added access to dual official 2026 PDF catalogs (Main JAX Professional 2026 Catalog + Specialized Auto Catalog).
  - Implemented `ProductCatalogExplorer.tsx` and `ProductDetailModal.tsx` for fast client-side searching, sector filtering, and detailed technical specifications (pH, dilution ratios, packaging sizes from retail up to 1000L IBC).
  - Implemented AI Search Optimization (AIO) via `public/llms.txt` and `public/llms-full.txt` alongside precise GEO metadata for Poznań (PL-WP, Wójtowska 16) and Schema.org JSON-LD structured data.

