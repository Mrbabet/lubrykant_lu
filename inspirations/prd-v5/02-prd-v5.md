# PRD v5 — EmiChem / JAX corporate scrollytelling website

**Version:** 5.0 · **Research date:** 13 September 2026  
**Product:** https://info.jax.com.pl · **Owner:** Michał Mierzwa EmiChem P.P. / JAX Professional  
**Status:** Implementation specification; production publication remains subject to the evidence and release gates below.  
**Baseline:** Complete PRD v4 supplied by the product owner on 13 September 2026. This document fully replaces its product requirements.  
**Documentation language:** English. **Website language:** Polish at MVP; reviewed English in v1.1.  
**Companions:** [Research and critique](01-research-and-critique.md), [audit plan](04-audit-plan.md). Source IDs below resolve in the research document; key authorities also have direct links here.

## 1. Executive summary

Build a corporate website whose primary experience is one coherent, scrollable story about EmiChem and JAX. It must help a professional buyer establish who manufactures the products, understand relevant capabilities, inspect evidence, and start a business conversation. Supporting pages provide detail without turning the landing page into a product catalogue.

The story is **manufacturer → heritage → applications → production → evidence → collaboration → contact**. Motion reinforces this sequence; it never controls access to content. Native scrolling, clear headings, direct links to documents and a visible contact route remain usable with reduced motion, failed hydration and JavaScript disabled.

The shop at `jax.com.pl` remains the place for product selection, pricing, accounts and checkout. This project does not implement or modify checkout, migrate the shop, or import its entire catalogue.

**MVP release conditions:** all published factual claims cleared; useful Polish routes with prerendered HTML; working B2B and private-label enquiries; accessible documents or equivalent accessible information; verified accessibility and lab performance; operational ownership; a reviewed deployment and rollback package. Missing optional evidence removes the affected content and navigation rather than producing invented awards, factory capabilities, testimonials or empty pages.

## 2. Context, evidence and assumptions

### 2.1 What research currently supports

The manufacturer's [About page](https://jax.com.pl/o-nas) states that activity began in 1984 and expanded in 1990. The [contact page](https://jax.com.pl/kontakt) identifies Michał Mierzwa EmiChem P.P., NIP 7780022439, Wójtowska 16 and a commercial office/warehouse at Główna 30A in Poznań. These are first-party statements, not a fresh business-register audit. Preserve the distinction between a registered address, operational address and certificate address.

The manufacturer's [published certificate](https://jax.com.pl/userdata/public/assets//Certyfikat%20ISO%209001%2014001%20pol%202024.pdf), inspected as text and image, states:

- Issuer: TÜV SÜD Management Service GmbH.
- Registration: **12 100/104 50928 TMS**; order: 73431727.
- Certified organisation/address: Michał Mierzwa EmiChem P.P., Główna 30A, 61-007 Poznań, Poland.
- Standards: **DIN EN ISO 9001:2015** and **DIN EN ISO 14001:2015**.
- Scope: production and sale of household chemical products for professional applications, cosmetics and biocidal preparations; quality and environmental management systems.
- Stated validity: **10 June 2024–9 June 2027**; issued 19 April 2024.

This verifies what the document says, not the absence of suspension or withdrawal. Before publishing a current-certification claim, the quality owner must confirm current issuer status and permitted mark use. Management-system certification must never become a claim that every product is ISO-certified or environmentally harmless.

The current JAX 34 PREMIUM product page states permit **4364/11**. Its present registry status, exact authorised formulation, uses and efficacy conditions were not verified in this research. Product marketing text is not the regulatory authority.

The figures “260–280 products,” 1000 L IBC capability, present private-label operating process, current export coverage, MTP award statuses and customer-logo permissions remain **unverified**. The specification reserves places for verified material; it does not authorise these claims.

### 2.2 Scope assumptions and decision rules

| Decision | v5 default | Evidence or trigger for changing it |
|---|---|---|
| Brand typography | Pragati Narrow Regular/Bold throughout the main editorial experience | Latest owner-supplied v4 takes precedence over the older stack note. A system font may be used for dense form/legal/document text only if readability testing justifies and records it; no extra font download by default. |
| Visual reference | Borrow the industrial composition of JAX PRO AUTO | Live reference currently uses Barlow Condensed/Source Sans 3/IBM Plex Mono and a blue accent; do not copy those tokens. |
| Rendering | React 19, strict TypeScript, Vite, Tailwind v4, build-time HTML prerendering of every published route | A client-only SPA cannot satisfy the no-JS requirement. Prove the chosen prerender approach in the first technical milestone. |
| Content | Versioned, validated structured content and Markdown; Markdown cannot execute arbitrary components | Adopt a headless CMS only when an actual editorial workflow requires it and an architecture decision explains migration/preview/access control. |
| Hosting | Cloudflare Pages static output plus a small server-side enquiry endpoint; confirm account fit first | Vercel is a documented fallback if existing ownership or runtime requirements make it preferable. No platform migration by default. |
| Enquiry integration | Server endpoint to a verified delivery adapter; optional existing n8n downstream | No public webhook credentials, browser-to-CRM secrets or simulated delivery. |
| Attachments | Secure optional upload, maximum 20 MB per enquiry in v1.1 | Explicit change from v4: defer until quarantine, scanning, retention and authenticated retrieval are operational. MVP asks for the brief as text. |
| Language | PL MVP; EN mirror in v1.1 | Early English content is private preview until reviewed; no untranslated pages with English hreflang. |
| Measurement | Consent-aware analytics; no marketing tags at MVP | Select actual account/property during discovery. Analytics may remain disabled until configured, with a stated measurement limitation. |

### 2.3 Non-goals

No cart, account portal, pricing engine, product efficacy recommendation engine, public AI chatbot, live inventory, invented sustainability badges, background 3D scene, custom scroll physics, or mandatory video. Reuse of company-owned JAX logos and imagery is already authorised by the owner as described in section 7.2; third-party endorsements still require factual support. No CMS, database, Remotion, GSAP or paid generation service solely because it is available.

## 3. Goals and measurable success

Business targets below are hypotheses inherited from v4, not traffic forecasts or release gates. Review after a 30-day baseline and at 90 days. Report traffic volume, consent coverage and spam exclusions with every conversion figure.

| ID | Metric and definition | Initial target / acceptance |
|---|---|---|
| G-01 | Unique accepted B2B enquiries, excluding private label, tests, spam and duplicates; reconcile with sales disposition | At least 15/month by month 12; baseline unknown |
| G-02 | Unique accepted private-label enquiries | At least 4/month by month 12; baseline unknown |
| G-03 | Qualified lead rate = sales-qualified enquiries / accepted non-spam enquiries | Establish baseline at day 30; sales defines qualification before reporting |
| G-04 | Final CTA reach = measured landing sessions with at least 50% of the CTA section visible for 1 second / eligible measured landing sessions | 60% desktop, 40% mobile; report consent bias |
| G-05 | Average of each session's maximum scroll depth; 100% means bottom reached, not average viewport position | 65% desktop, 45% mobile; diagnostic, never optimise by padding page height |
| G-06 | Hero/final CTA click-through = deduplicated clicks / corresponding CTA impressions; report placement | Baseline and optimisation, no invented uplift |
| G-07 | Document download-link activations, with optional server transfer evidence reported separately | 150/month by month 12; clicks do not prove completed downloads |
| G-08 | Field Core Web Vitals at p75, mobile and desktop separately, representative routes/templates | LCP <2.5 s; INP <200 ms; CLS <0.1. Insufficient data is “not yet measurable,” not pass. |
| G-09 | Usability: buyer can explain manufacturer role, find relevant documents and start the correct enquiry | Before release: 4 of 5 representative participants complete each task without moderator rescue; record sample limitations |

## 4. Personas and priority journeys

| Persona | Decision they need to make | Required journey / acceptance |
|---|---|---|
| Retail/network buyer | Is this a credible manufacturer and potential supplier? | Hero → production/evidence → B2B enquiry, without traversing the entire story |
| Export partner | Can I discuss supply to my market? | PL contact offers country/market enquiry without promising approved export coverage; v1.1 adds reviewed EN content |
| HoReCa / industrial operator | Which range fits my professional setting? | Segment card → verified shop category or product-selection enquiry; no unverified disinfection advice |
| Private-label owner | Can the manufacturer assess my brief? | Private-label section → scope/process if approved → enquiry; “I do not know yet” allowed for volume |
| Candidate | Are there real openings and where is the workplace? | v1.1 careers route with verified opportunities or honest “no current vacancies”; separate recruitment privacy process |
| Journalist / institution | Where are authoritative company facts and approved assets? | v1.1 media page with reviewed fact sheet, asset rights and media contact |

The first four personas determine the landing page. Careers and press belong in secondary navigation when ready.

## 5. Information architecture and scrollytelling

### 5.1 Narrative contract

Use 8 core chapters, with optional evidence modules inside them. Each chapter answers one buyer question and has a clear next action. Content determines height; do not enforce 100vh on every section, mandatory scroll stops, horizontal reading or ten pinned scenes.

Target 700–1,100 Polish words on the landing page, excluding navigation, legal copy and form labels. This is an editorial budget, not a reason to truncate essential instructions. Home history has 3–4 verified milestones, not one full viewport per date. Show contact and shop access before any scrolling.

| Chapter / anchor | Buyer question and content | Composition / motion | CTA and evidence fallback |
|---|---|---|---|
| 01 `#start` | Who makes this and for whom? H1, 1–2 sentence proposition, manufacturer/brand relationship | Strong Pragati headline; genuine factory/people/product photograph; visible content from first paint. Image transforms only as optional enhancement; never delay H1/CTA for entrance animation. | Primary “Porozmawiajmy o współpracy”; secondary “Zobacz możliwości”; shop as distinct header link. Use a reviewed neutral manufacturer description if historical claim awaits approval. |
| 02 `#historia` | What is the company's background? 1984, 1990 and evidenced later development | Editorial vertical timeline; optional subtle progress line, text remains fully readable | “Poznaj historię”; omit unsupported milestones and market-leader superlatives |
| 03 `#zastosowania` | Do they understand my industry? 6–8 concise application groupings, not a SKU grid | Structured list/grid with original industrial imagery; restrained single reveal if enabled | Verified shop category links and “Zapytaj o dobór”; preserve actual shop taxonomy in destination mapping |
| 04 `#produkcja` | Can they support my requirements? Discuss manufacturing and packaging supported by approved facts | Alternating image/text composition; genuine evidence captions; at most one optional desktop sticky visual, disabled on small screens | “Porozmawiajmy o wymaganiach”; no production-rate counters, machinery claims or 1000 L promise without evidence |
| 05 `#jakosc` | What can I verify? Quality systems, document access; concise separate compliance link | Document cards in a stable grid; optional approved awards module, no carousel required | “Sprawdź certyfikaty i dokumenty”; exact certificate metadata; do not turn compliance into decorative badges |
| 06 `#wspolpraca` | How would cooperation start? Private-label introduction and proposed enquiry workflow | Five ordered steps if operationally approved: brief, feasibility/development, documentation, pilot, agreed production | “Przekaż brief private label”; until scope confirmed, use a neutral enquiry invitation with no development, MOQ or lead-time promise |
| 07 `#doswiadczenie` | What makes cooperation credible? One or two authorised cases, with context/outcome/source | Editorial case format, genuine named quote only with approval; no moving logo strip | If no cases, use a short supported explanation of consultation and documents; merge with chapter 06 if repetitive |
| 08 `#kontakt` | What should I do now? One short enquiry form with topic selector, direct contact details | Calm high-contrast close; complete error/success states; stable keyboard/focus behaviour | “Wyślij zapytanie”; confirmed receipt only after server acceptance; reachable directly from hero |

A neutral invitation such as “Opisz wymagania swojej marki. Skontaktuj się z zespołem JAX.” is permitted as draft copy. It is not evidence of a full-service private-label offer.

### 5.2 Published routes and release scope

Every route needs a unique title, description, H1, useful HTML body, canonical, language, breadcrumbs where relevant, valid status and working direct reload. Do not create empty pages to hit a page count.

| Route | Release | Required content / publication condition |
|---|---|---|
| `/` | MVP | Full story and primary enquiry |
| `/historia/` | MVP | Reviewed history and dated original imagery where available; no fabricated milestones |
| `/produkcja/` | MVP | Approved capability narrative, real images and a requirements enquiry; no unverified capacities |
| `/jakosc-i-certyfikaty/` | MVP | Quality explanation, verified certificate metadata, accessible document information |
| `/zgodnosc-i-dokumenty/` | MVP | Document access/request route; clear separation of SDS, biocides and packaging obligations |
| `/private-label/` | MVP | Honest brief invitation; richer process only when approved; topic preselected in form |
| `/kontakt/` | MVP | Verified NAP, separate address roles, phone/email, enquiry; static map/link if accurate |
| `/polityka-prywatnosci/` | MVP | Actual controller, processing purposes/bases, recipients, retention and rights |
| `/deklaracja-dostepnosci/` | MVP | Honest accessibility information, review date, known limitations and contact; no unsupported conformance claim |
| `/nagrody-i-wyroznienia/` | Evidence-gated MVP | Publish only once at least one award's exact status and usage rights are cleared; otherwise absent from navigation/sitemap |
| `/marki/` | v1.1 | Owner-approved relationships for JAX Professional, Auto, Clarjax, Flame; distinguish a range from a separate legal/consumer brand |
| `/rynki-i-eksport/`, `/dla-biznesu/` | v1.1 | Reviewed markets/cooperation and segment detail; no invented map pins or global reach |
| `/kariera/`, `/dla-mediow/` | v1.1 | Real vacancies or honest empty state; approved media assets and usage guidance |
| `/en/` and translated equivalents | v1.1 | Fully reviewed equivalents of published core routes; explicit source-version mapping |
| Newsroom and case-detail pages | v1.2 | Only with an assigned editorial owner and real material |
| Unknown route | MVP | Genuine 404 response, useful navigation; do not rewrite every URL into a 200 homepage |

The former spelling `infor.jax.com.pl` is not the canonical domain. Do not create DNS aliases for it without evidence that a migration requires them.

### 5.3 Navigation and responsiveness

Header: logo/home, “O firmie” with chapter links, “Produkcja”, “Dokumenty”, “Private label”, primary contact action and clearly external shop destination. Adapt to space; avoid a crowded desktop menu. At mobile widths, use a labelled menu button with expanded state, logical focus and Escape/close behaviour. Do not introduce dialog semantics unless the menu actually behaves modally.

All chapters have stable anchors. Anchor navigation must reveal headings below the sticky header; browser back, direct hashes and keyboard navigation must work. Optional chapter progress is supplemental, has a text equivalent and never captures wheel/touch events. No persistent mobile bar may obscure content, consent controls or the keyboard.

## 6. Functional requirements

### 6.1 Core feature acceptance

| ID | Priority | Requirement and acceptance |
|---|---|---|
| F-01 | Must | All published routes have useful initial HTML without JS. Verify by HTTP body and a browser with JS disabled; title/H1, primary text, links and contact remain available. |
| F-02 | Must | B2B enquiry works through the real server endpoint and shows accessible validation/receipt/error states; server acceptance and downstream delivery are tested separately. |
| F-03 | Must | Private-label enquiry is the same tested form model with topic preselection and optional additional brief fields; no duplicated validation logic. Upload deferred as F-18. |
| F-04 | Must | Document records carry type, title, language, revision, size, date, owner, accessible alternative and approved download target; no broken/download-placeholder links. |
| F-05 | Should v1.1 | Document search filters approved records by product name/number/type, supports keyboard and announces results/zero results; not a replacement for regulatory SDS delivery duties. |
| F-06 | Must | Shop destination map uses verified URLs. Links remain conventional anchors. Tracking cannot prevent navigation; no guessed product slugs. |
| F-07 | Should v1.1 | EN routes contain reviewed English, language switch preserves equivalent route when available, reciprocal hreflang only for published equivalents. |
| F-08 | Must | Home history summary and full timeline are in DOM reading order; lazy-load noncritical images, never the LCP image. |
| F-09 | Should | Accessible location information works without an interactive map or third-party embed. Map link label explains destination. |
| F-10 | Could v1.2 | Newsroom only with a real content workflow; no fabricated launch articles. |
| F-11 | Conditional | Existing n8n/CRM integration remains server-side; authentication, retries, idempotency and failure monitoring are proven in staging. No speculative new automation stack. |
| F-12 | Must | Header shop link leads to store/category, not directly to an empty cart; no cart badge implying shared state. |
| F-13 | Must | Unique anchors, skip link, predictable history and visible destination headings. |
| F-14 | Must | Purposeful Motion enhancement is implemented after the static baseline passes; normal/reduced/off behaviour matches the motion table below. |
| F-15 | Could | Chapter progress only if it improves navigation in observed testing and has no layout/performance regression. |
| F-16 | Could | Statistic animation uses only approved values; one stable accessible value, no repeated live-region counting, full value visible when reduced/off. |
| F-17 | Must | JS failure, reduced motion and blocked third-party services do not hide narrative, contact or document alternatives. Native server form submission has an accessible non-JS response page. |
| F-18 | Should v1.1 | Optional attachment flow, total ≤20 MB, with the security and retention contract below. No upload input published before backend protections work. |
| F-19 | Must if analytics enabled | Consent choices apply before nonessential requests; rejection and withdrawal work and are as easy to find as acceptance. |
| F-20 | Must | Build rejects invalid content references, missing required route metadata and unapproved claim-bearing records in release content. Stale-review dates and expired documents prevent current-certification labels. |

### 6.2 Enquiry data and state contract

**Required:** enquiry topic (B2B/private label/product selection/export), company name (2–160 characters), contact name (2–120), email (valid format, ≤254), country, message (20–4,000). **Optional:** telephone (≤40), NIP/VAT identifier (≤32, never restricted to Polish NIP for international users), segment, estimated volume with “not known yet,” preferred language. Private label additionally offers intended application and packaging preference as optional inputs. Accept legitimate Unicode; validation and error copy are Polish.

Do not require marketing consent to send an enquiry. Present a privacy notice by the action and use the lawful basis reviewed for the actual workflow. Do not invent GDPR consent wording or a response-time SLA. No confidential formulations requested in the initial brief.

States: idle → validation error or submitting → accepted receipt or recoverable failure. Field errors have labels and programmatic association; an error summary links to fields. Preserve entered values after failure, move focus appropriately, announce status once, and prevent duplicate submissions. A success message cannot appear from a timer, optimistic UI or analytics event.

The server validates independently; limits request size and abusive rates; validates allowed origins and implements appropriate CSRF protection; never trusts browser validation or CORS alone. Use a server-generated request reference and an idempotency mechanism suitable for retries. Define delivery semantics: “received” means the server durably queued the enquiry or the approved downstream service acknowledged it; “delivered to sales” requires separate delivery evidence. Do not claim either without the corresponding event.

Timeouts and rejected requests return actionable errors, with direct phone/email fallback. Staging uses a test recipient/sink, never uncontrolled messages to sales. Logs exclude message bodies and contact data where not needed; diagnostics use request references. Define retry ceiling, ownership and retention in an operational decision before production. Default retention proposal: 90 days for abandoned/unqualified enquiries and 30 days for diagnostic metadata, subject to controller approval and actual statutory needs.

**F-18 attachment contract:** only approved PDF/JPEG/PNG types; total 20 MB maximum, count ≤3; inspect real file signatures and enforce limits server-side; random storage IDs, private access, quarantine and malware scanning, no archives/executables/macros, no public bucket, least-privilege expiring download links, deletion after agreed retention, cleanup of abandoned uploads. Screen-reader upload progress and clear invalid-type/oversize/scan-failure states required. No arbitrary remote URL fetch as an attachment workaround.

### 6.3 Documents and factual content model

Maintain distinct records for claims, source evidence, assets and documents. A claim records: stable ID, exact approved wording, locale, evidence references, status, owner, review date, validity dates, scope limitations and all usage locations. States: draft, needs evidence, needs owner approval, approved, expired, withdrawn. Only approved claims appear in release-visible text, image text, metadata, JSON-LD, alt text, translated content and download descriptions.

A certificate record includes issuer, registration number, standards, scope, certified entity/site, valid-from/to, status-check date, download target and accessible summary. Never alter a signed original PDF; offer a separately labelled accessible transcription/equivalent. A summary alone may be insufficient where omitted PDF information matters: review complete reading order, selectable text, language, headings and tables, and provide complete equivalent access when remediation is needed.

### 6.4 SEO, shop integration and analytics

- Set self-referencing canonicals for distinct pages; do not canonicalise every supporting page to home or to the shop. Use one slash policy and avoid redirect chains.
- Prerender page title, meta description, H1 and appropriate structured data. `Organization` uses approved facts only; breadcrumbs describe actual hierarchy. Do not invent ratings, reviews, awards, local offices or medical claims for rich results.
- Sitemap contains only published indexable 200 routes. Preview is access-protected where necessary and noindexed; robots alone does not provide confidentiality or reliably remove an already indexed URL.
- Inventory the existing `/o-nas` and inbound links before migration. Prepare its exact 301 mapping and shop navigation edit for owner review. No automatic deletion, redirect or DNS write by an implementation phase. Document rollback of both site and shop change.
- Default to clean links between the subdomain and shop to preserve acquisition attribution. Track click placement via events. UTM tags are opt-in only where the analytics owner explicitly accepts campaign reassignment and demonstrates the desired attribution. Never append PII.
- Same parent domain does not automatically require a cross-domain linker. Verify property/tag IDs, cookie-domain behaviour, referral exclusions and consent across both sites. Configure a linker only when observed architecture requires it. No consent sharing by assumption.
- Canonical analytics events: `form_submit_b2b`, `form_submit_private_label` only after acceptance; `download_certificate`, `download_catalog` for link activations; `click_to_shop`; `scroll_depth` once per 25/50/75/90/100 threshold per measured page visit; `reach_final_cta` once per measured visit. Allowed parameters: route, locale, chapter/CTA placement, nonpersonal document ID, destination category and device class. Never email, NIP, phone, company name, free text or attachment names.
- Count primary conversions once. A server reconciliation event must not create a second client conversion. Separate denied-consent operational totals from observed analytics conversions.

## 7. Non-functional requirements and design system

### 7.1 Accessibility and legal framing

**N-A11Y-01:** WCAG 2.1 AA is the contractual minimum for every published route and complete process, including forms and documents. Add WCAG 2.2 AA focus-not-obscured and target-size requirements as explicit product improvements; do not mislabel AAA focus appearance as AA. Aim for 44×44 CSS px interactive targets as a project usability standard, distinct from WCAG 2.2's 24×24 minimum and exceptions.

The [Polish Act of 26 April 2024](https://eli.gov.pl/eli/DU/2024/731/ogl) implements EAA requirements for covered products/services and generally took effect 28 June 2025. The [2019 digital accessibility act](https://eli.gov.pl/eli/DU/2019/848/ogl) concerns public entities and is a different instrument. [Directive 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng) includes consumer e-commerce; a corporate/B2B site is not automatically in scope merely because it is online or links to a shop. Record an owner-reviewed applicability assessment for actual services and consumer journeys; do not infer liability or exemption from unverified headcount. Technical WCAG checks alone do not settle all legal/EN 301 549 obligations.

**N-A11Y-02:** Semantic landmarks, one descriptive page H1, coherent subordinate headings, skip link, visible keyboard focus, accessible names and correct native controls. No keyboard traps except a correctly implemented temporary modal trap. Restore focus on close and manage route-change focus/title announcements without fighting browser navigation.

**N-A11Y-03:** Normal text contrast ≥4.5:1; large text ≥3:1; required nontext UI contrast ≥3:1. Verify actual computed states, images and opacity, not just token swatches. Links are identifiable without colour alone. No essential hover-only content.

**N-A11Y-04:** Reflow at 320 CSS px and at 400% zoom, 200% text zoom, WCAG text-spacing overrides, portrait/landscape and touch keyboard. No horizontal page overflow or clipped controls. Screen-reader tests include menu, anchors, documents, form errors and receipt.

**N-A11Y-05:** Reduced motion removes parallax, counting, scroll scrubbing and decorative autoplay; optional “Limit motion” preference may only reduce further. Test preference changes while page is open. No flashing effects; any future automatically moving content lasting over five seconds needs pause/stop/hide under the applicable criterion. Static content is default before hydration.

### 7.2 Brand, layout and asset direction

**N-VIS-01:** Pragati Narrow Regular/Bold, self-hosted WOFF2 with Polish glyph coverage and licence retained. No automatic substitution with the reference site's font stack. Starting scale: mobile H1 48–64 px, desktop 80–112 px, H2 36–56 px, body 20–22 px with 1.45–1.6 line height, form text ≥16 px. Tune against actual Polish content, not placeholder English. Use sentence case in paragraphs, short uppercase labels selectively, approximately 55–75 characters per body line.

**N-VIS-02:** White/off-white editorial surfaces, carbon/graphite structural contrast, JAX accent **#E63946**. White normal-sized text on #E63946 measures about **4.17:1**, below 4.5:1. Use a tested accessible action variant such as **#C62836** with white text (about **5.59:1**) or another compliant pairing; preserve brand red in nontext accents. Validate focus, disabled, hover and error combinations separately.

**N-VIS-03:** A deliberate editorial grid, restrained radii, clear separators, high-impact photography and varied but coherent section composition. Start with a 1,280 px content maximum, 20–24 px mobile gutters, larger responsive desktop gutters and a consistent 8 px spacing scale with optical adjustments. Avoid a sequence of identical rounded SaaS cards, glass effects, decorative gradient blobs, generic globes and scroll-bound carousels.

**N-VIS-04:** Asset manifest records file, source, rights, subject, date, crop/focal point, alt decision and usage. Factory/people/process/product images must be authentic and approved. Generated imagery must not impersonate actual premises, staff, certificates, production lines, packaging labels or customers. If assets are missing, use an honest typography-led layout or clearly nonfactual illustration. No stock photograph captioned as EmiChem's factory.

**Owner-authorised reuse (13 September 2026):** Gemini may read and reuse all relevant files, logos, graphics, photographs, product images, documents and other company materials from the sibling **JAX_Pro_Auto** project and the designated company source sites **jax.com.pl** and **jax-pro-auto.64bit.site**. The owner confirms these belong to the same company and that it has the necessary rights. This is standing permission: do not request asset permission again, commission replacement imagery or regenerate an existing logo merely because it is in the sibling project. Inspect and catalogue existing assets first, preserve brand marks/product labels, copy required assets into JAX_Info with durable local URLs, and optimise delivery copies without changing factual content. Do not modify the sibling project. This permission covers relevant project files, not disclosure of secrets, private customer data or unrelated infrastructure; third-party UI components remain subject to their own licences. Asset rights do not establish the current accuracy of dates, claims, customer relationships or regulatory status depicted in an asset.

### 7.3 Motion specification

Use the `motion` package's React API; do not add both modern Motion and legacy Framer Motion. Read current official Motion docs before implementation. Use CSS for ordinary hover/focus colour changes and CSS sticky for optional structural pinning. No scroll position in global React state updated each frame; use Motion values or native observation as appropriate. Clean up listeners on navigation.

| Element | Normal mode | Reduced / failed JS | Budget and acceptance |
|---|---|---|---|
| Hero | Static H1, copy and CTA immediately; optional image motion after enhancement | Static complete composition | No opacity-zero LCP, blocking animation or video download |
| Chapter headings / supporting media | Once-only reveal, 12–20 px maximum travel, 250–400 ms; small local stagger ≤60 ms, entire sequence ≤600 ms | Immediately visible, no travel | No replay every time the user reverses scroll; no CSS hiding before JS |
| Timeline | Optional progress line; already-visible ordered text | Complete static timeline | Native reading order; no scroll lock or required scrub interaction |
| Production visual | At most one desktop sticky visual and subtle transform if profiling justifies it | Ordinary flow; no parallax | No stacked sticky sections or mobile pinning |
| Statistics | Optional once-only count, ≤700 ms, reserved width | Final approved value | Stable accessible value; no aria-live count sequence |
| Cards / CTAs | Brief 120–180 ms feedback; stationary hit target | Immediate state or minimal opacity change | Focus affordance equal to hover; no magnetic pointer-following button |
| Menu / disclosure | 150–220 ms state transition where useful | Immediate change | Keyboard and focus functionality independent of animation completion |

Do not assume Motion's reduced-motion configuration disables every custom MotionValue, CSS animation or video. Test each independently. Do not promise 120 fps from a skill; profile on target devices. Long scroll itself must not trigger continual downloads, React rerenders or expanding DOM content.

### 7.4 Performance and reliability budgets

**N-PERF-01:** Field budgets are G-08. Pre-release tests use production builds and report lab metrics separately. Never substitute a Lighthouse score or TBT for field INP.

**N-PERF-02 — initial budgets:** first-route compressed JS ≤180 KB; CSS ≤40 KB; initially fetched fonts ≤120 KB; mobile hero image ≤250 KB; initial transfer before scrolling/optional analytics ≤750 KB. Full-page image transfer after scrolling ≤3 MB on the mobile image selection. Treat these as engineering ceilings for MVP; record any necessary exception with measured impact rather than silently raising them.

**N-PERF-03:** Responsive modern images with dimensions/aspect ratios, right-size mobile variants, eager/prioritised LCP image, lazy noncritical images, limited critical font preload, stable font fallback metrics and no blocking third-party scripts. Avoid autoplay hero video at MVP. Document media caching and cache-busting.

**N-PERF-04:** Three cold runs per representative template under the same documented mobile network/CPU profile; retain individual runs and median. Lab LCP <2.5 s and CLS <0.1 on that profile are release targets, with TBT ≤200 ms as a diagnostic guardrail. Profile interactions separately: menu, anchors, form typing/validation and scrolling. Reproduce outliers; a fast desktop score is not mobile evidence.

**N-REL-01:** Site content stays readable when analytics, fonts, enquiry delivery or document host fails. HTTPS and valid certificate, proper 404 and safe redirects. Form failure never destroys user text. No service worker caching personal enquiry payloads.

### 7.5 Security and privacy

No secrets in client bundles, public environment variables, source maps, logs, URLs, screenshots or committed files. A 21st.dev key is a development credential and never belongs in deployed application code. Use server-only runtime credentials for delivery.

Apply tested CSP, frame restrictions, MIME sniffing protection, referrer policy and HTTPS. Start CSP with the actual required sources; validate in preview. HSTS changes are scoped to this host; do not add parent-domain includeSubDomains/preload assumptions affecting the shop. Avoid live third-party maps/video until requested and privacy-reviewed.

Document actual processor, retention/deletion owner, access controls and incident contact for enquiries. Consent-free analytics is not assumed merely because a vendor advertises privacy features. At MVP, optional analytics are off before opt-in; ensure all enquiry functionality works after rejection.

## 8. Technology and agent workflow guidelines

### 8.1 Architecture deliverables

Before application coding, record: route/rendering approach, content schema, evidence publishing model, shared component tree, deployment target, endpoint/delivery contract, analytics/consent design, asset strategy and the first milestone's acceptance tests. Keep decisions concise and revisable. Do not introduce global state management for a static narrative: local menu/form/filter state and a small consent/motion boundary are sufficient by default.

Component responsibilities should distinguish site shell/navigation, chapter layout, editorial timeline, segment links, production story, document records, optional awards/cases, enquiry flow, consent preference and route metadata. Reuse document/form logic; do not create a generic page builder that obscures the story. Route splitting and prerendering must preserve no-JS HTML and stable hydration.

### 8.2 Tool and skill selection contract

Use one implementation agent; **no subagents or delegated model work**. Load the project instructions and session context first, then the smallest relevant skills for the current phase. Never load every `react*`, `motion*`, `design*` or `critique*` skill. Verify exact names and read their instructions before using them. Record which advice applies and which conflicts with this PRD.

Use a design-direction skill before layout; React/TypeScript and Motion guidance during implementation; accessibility throughout; performance and browser QA for release; targeted typography/hierarchy critique for review. Remotion, GSAP, 3D and paid Motion+ tooling are unnecessary at MVP. A local operator runbook supplies exact private paths and harness-specific tool availability separately from shared product documentation.

MCP is a tool interface, not proof a service is connected or a licence is available. Probe actual tool discovery. Prefer official Motion documentation MCP and Context7 for version-correct APIs; Playwright for browser interaction and evidence; Chrome DevTools for traces; 21st.dev for a small inspiration shortlist. Read-only public browsing is a valid fallback. Do not install or enable all servers.

For 21st.dev, browse verified hero/timeline/chapter-navigation patterns, document author/source/licence, identify adaptations and reject unnecessary dependencies. A source-page accessibility claim is not a test result. The current 21st MCP replaces legacy Magic; check current discovery and account usage before requests. Free account status does not imply hosted AI generation or unlimited component source retrieval. Prefer search/inspiration and code the original JAX implementation locally; never upgrade a plan or use paid generation automatically.

### 8.3 Gemini 3.8 Flash execution context

Google's [model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash), checked 13 September 2026, lists stable model `gemini-3.8-flash`, 1,048,576 input tokens, 65,536 output tokens, function calling and thinking levels `low`, `medium`, `high`; `minimal` is unsupported. It is a reasonable implementation choice for sequential coding/tool use with a broad specification. This is a capability-based choice, not a guarantee of design quality or correctness.

Set **high thinking in the actual harness/API configuration**; prose alone does not change runtime settings. Verify account/model availability and SDK-specific parameter placement. AI Studio, Antigravity and a raw API client have different file, browser and shell access. AI Studio attachment access does not provide access to this Mac; API function calling requires an execution loop and tool implementations. If execution tools are absent, produce a precise handoff to the local environment and mark tests unrun.

Consume the PRD through requirement IDs and bounded milestones, with persistent decision/evidence/test records. The context window is capacity, not a recommendation to load the entire workspace. Prompts should request brief rationale and observable artefacts, not hidden chain-of-thought. In implementation phases Gemini is expected to write and run code, inspect browser results, fix demonstrated defects and stop only at the phase's concrete exit gate.

### 8.4 CI and production boundary

Local build and focused tests are default. Before any Actions change, estimate runs/month × duration × runner cost and account for the shared 2,000-minute private-repository allowance. Example ceiling: 30 qualifying PR updates/month × one Ubuntu job capped at 8 minutes = ≤240 runner-minutes before cancellations; this is a planning example, not measured usage. Use branch/path filters, concurrency cancellation and a timeout on every job. No new schedules, platform-specific paid runners or billing changes without explicit approval.

Application work and preview preparation may proceed without repeated permission requests. **Production DNS, shop redirects, production deployment and live delivery/analytics configuration are gated by a review of the exact release candidate and change plan.** A prior explicit approval covering that exact scope remains valid; otherwise prepare everything, then request the final decision. Avoid a premature “may I proceed?” before there is a reviewable result.

## 9. Content verification and publication gates

| Claim ID | Claim / evidence now | Required release decision / owner |
|---|---|---|
| C-01 | Manufacturer history from 1984; first-party About page | Content owner approves precise wording. Prefer “since 1984” over a stale 40-year counter; do not infer age of a specific brand. |
| C-02 | NIP, name and two addresses from first-party contact; certificate uses Główna 30A | Business owner confirms current legal/operational roles against current register data. Keep certificate address verbatim in its record. |
| C-03 | ISO 9001/14001: document with exact dates/scope inspected | Quality owner verifies current issuer status and mark rules. Publish scope-limited management-system claim, never product-wide guarantee. |
| C-04 | MTP 2017 JAX 44 and 2019 JAX 42 claimed in v4, not independently established here | Obtain organiser record/diploma naming product, event, year and award status. Omit badge/title/page until cleared. |
| C-05 | Gazele Biznesu: unverified | Exact edition, winning legal entity and evidence; otherwise omit. |
| C-06 | JAX 34 PREMIUM permit 4364/11 stated on product page | Regulatory owner verifies current URPL authorisation, trade name/formulation, uses and conditions; product marketing is insufficient. |
| C-07 | 260–280 products and packaging up to 1000 L: unverified | Dated SKU/formulation counting definition and capability/product evidence. Container size is not production throughput. No count or IBC image implying capability before approval. |
| C-08 | Private-label availability/process: baseline assumption | Commercial/operations owner approves actual service scope, responsibilities, packaging limits and five steps; no promised MOQ, R&D, turnaround or certifications by invention. |
| C-09 | Export countries, customer names/logos/testimonials | Current relationship evidence, quote permission, logo licence and date. Historical customers are not automatically current endorsers. |
| C-10 | Packaging/PPWR, BDO/EPR | Regulatory owner identifies economic role, packaging types, markets, article-by-article obligations, relevant dates and supporting documentation; no universal compliance seal. |
| C-11 | Brand relationships and authenticity of photography | Owner has authorised reuse of company assets from JAX_Pro_Auto and designated company sites; record that existing approval. Verify brand naming and depicted factual claims separately. Generated imagery is not evidence. |

**Packaging communication:** [Regulation (EU) 2025/40](https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng) entered into force on 11 February 2025 and generally applies from 12 August 2026. Individual requirements have different dates, exceptions and implementing measures. In September 2026 it is inaccurate to describe the whole regulation as merely forthcoming. BDO is the Polish product/packaging/waste database, not an EU-wide EPR certificate; national duties and role definitions require separate assessment. A documented programme may describe its actual activities with a review date; “PPWR-ready,” “100% compliant,” “fully recyclable” and green badges need precise substantiation or omission. Do not transfer food-contact packaging restrictions automatically to every chemical container.

**Biocidal communication:** [Regulation (EU) 528/2012, Article 72](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012R0528-20260819) governs advertising warnings and prohibits misleading safety/efficacy implications, including “harmless,” “non-toxic,” “natural,” “environmentally friendly” and similar indications. Where content is advertising a biocidal product, include the applicable clearly legible language-specific warning and have the regulatory owner approve it. A corporate domain does not neutralise this requirement. Do not copy “fully safe” wording from the shop. SDS presence, ISO certification and a permit number are separate things.

**Gate rule:** missing evidence blocks that claim and dependent feature, not unrelated engineering work. Before release, either obtain approval or remove the affected claim everywhere and rerun the content/UX checks. If removal destroys a mandatory core journey, hold release rather than publishing a deceptive fallback. Automated expiry rules require owner review and a way to withdraw a claim without waiting for a redesign.

## 10. Implementation plan and acceptance gates

Durations are indicative working-time estimates for planning, not promises; evidence availability, integration credentials and human review determine elapsed time.

| Gate | Deliverables | Exit condition |
|---|---|---|
| A: discovery, 1–2 days plus evidence work | Repository/tool capability inventory, architecture decisions, route/content/asset matrix, claim ledger, milestones and estimated CI impact | No unresolved structural ambiguity; missing facts have safe fallbacks; no production mutation |
| B: design, 2–4 days | Original desktop/mobile compositions, tokens, component/state map, motion table and 21st shortlist | Every chapter has a buyer purpose; constraints and colour contrast checked; decisions documented before code |
| C1: static implementation, 3–5 days | Framework, prerendered routes, shell, approved content, no-JS baseline | Production build succeeds; direct routes/404/no-JS/anchors verified |
| C2: enquiry and enhancement, 3–5 days | Real staging delivery, documents, Motion, privacy and metadata | Positive/negative enquiry tests; reduced/off mode; no unsupported claims or broken routes |
| D: release QA, 2–3 days | Browser/a11y/lab reports, claim audit, release candidate, deployment and rollback package | No unresolved release blockers; explicit production review decision recorded |
| v1.1, after measured MVP | EN, additional routes, approved upload/search and fuller cases | Same functional/accessibility/content gates; no automatic publication of drafts |
| v1.2, evidence-led | Newsroom, genuine new media and measured improvements | Actual owner, need and verification; independent accessibility assessment should inform v1.0 when feasible, not excuse v1.0 defects |

A missing delivery integration may permit a clearly labelled internal preview with a test adapter. It cannot be marked as a production-ready enquiry flow. Similarly a preview with draft assets is a design artefact, not an approved release.

**Release candidate package:** commit/build identifier, preview URL, published route list, claims/rights approvals, reproducible test commands/results, browser/device matrix, actual runtime settings, DNS and redirect diff, delivery ownership, privacy/analytics configuration, launch smoke tests, previous deployment identifier and rollback instructions. Record evidence unavailable as unavailable, never pass.

**Monitoring after approved launch:** immediate smoke check; 24-hour delivery/error check; 7-day UX/analytics review; 28-day field-performance review if data suffices; monthly content/document expiry review. These are operational tasks, not permission to create scheduled GitHub Actions or paid monitoring. Assign owner and access in the launch package.

## 11. Risks and mitigations

| Risk | Consequence | Mitigation / owner |
|---|---|---|
| Unverified or expired claims | Misrepresentation and regulatory exposure | Claim-ledger publication gate; quality/regulatory owner |
| Client-only rendering or hidden motion baseline | Blank no-JS experience, weaker crawlability and access | Prerender proof and JS-off tests before adding motion; engineering |
| Generic template aesthetic | Weak manufacturer identity and diluted narrative | Real materials, Pragati/JAX tokens, original editorial hierarchy; design |
| Form “success” without receipt | Lost leads and false analytics | Durable acceptance contract, downstream tests, deduplication and failure owner; engineering/sales |
| Large media / motion overhead | Poor LCP/INP and mobile abandonment | Image/bundle budgets, measured traces, remove low-value effects; engineering |
| Free 21st account or MCP limitation | Blocked inspiration retrieval or accidental costs | Discovery/usage check, public browsing fallback, no paid generation; implementation agent |
| Wrong DNS/shop assumptions | Store or email disruption, SEO loss | Read authoritative DNS, prepare only scoped subdomain changes, review and rollback; deployment owner |
| Late English or evidence | Export journey incomplete | Honest PL MVP, reviewed EN milestone, no false language selector; content owner |
| Narrow font readability | Form/document comprehension problems | Real Polish copy, spacing/zoom tests, recorded system-font exception where justified; design/a11y |
| Insufficient field traffic | False CWV confidence | Lab release evidence + honest field “insufficient data,” privacy-reviewed RUM if needed; analytics owner |
| Unbounded agent context and skill conflicts | Contradictory implementation and wasted work | Sequential phase contracts, selective skills, IDs, evidence, bounded review passes; implementation agent |

## 12. Conclusions and definition of done

The finished product is a credible, distinctive manufacturer story with immediate routes to evidence and contact, supported by useful detail pages. It is complete only when its content is approved, the site works across motion and failure states, enquiries reach the intended workflow, and release evidence supports the claims made about accessibility and performance.

**Done means:** all applicable Must requirements traced to implementation and tests; no P0/P1 blockers; no known unresolved WCAG A/AA failure in release scope; documented status of each factual claim; real accessible journeys; approved deployment scope; a tested rollback path and named operational owners. A build, screenshot, template installation or high Lighthouse score alone does not satisfy this definition.
