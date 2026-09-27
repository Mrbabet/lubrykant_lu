# JAX_Info — post-implementation audit plan and prompts

**Specification:** [PRD v5](02-prd-v5.md). **Sources:** [research dossier](01-research-and-critique.md).  
**Prepared:** 13 September 2026. **Execution:** one auditor agent; no subagents.  
**Status:** Workflow to execute against an implemented preview/live site. No implementation audit or field-performance pass is claimed by this document.

## 1. Audit scope and evidence rules

Audit the exact release candidate before launch, then repeat the relevant checks after the approved launch. Record base URL, commit/build/deployment ID, timestamp/timezone, route list, locale, browser/version, device/viewport, network/CPU settings, consent state and available service access.

Default audit is **read-only**. Browser navigation, screenshots, traces, link checks and local repository inspection are permitted. Sending enquiries, changing CRM records, uploading files, editing live content, changing DNS or triggering deployments requires existing authority for that specific action. Use an approved staging sink/test recipient for enquiry tests. A missing permission or integration leaves that check UNRUN and does not stop independent read-only checks.

Do not crawl authenticated customer areas, follow external checkout flows, crawl the whole shop or download every product PDF. Scope internal HTML routes from the sitemap and known route matrix; use a bounded crawl, maximum two concurrent requests and approximately one request per second per host. Deduplicate query variants, stop on rate limiting and test only mapped outbound shop/document destinations. A 200 response that redirects to a homepage is not a valid product, registry or document result.

Evidence must include observed and expected behaviour, reproduction and a stable artefact reference. Tool availability, a claimed successful command, a screenshot, an axe score or Lighthouse score alone is insufficient to establish all requirements. Never include credentials, personal enquiry data, private paths or internal memory in shared reports.

Use these statuses: **PASS**, **FAIL**, **UNRUN**, **NOT APPLICABLE with justification**. Keep legal applicability, technical conformance, publisher claims and operational delivery as distinct conclusions.

## 2. Route, state and device coverage

| Coverage group | Minimum sample |
|---|---|
| Narrative | `/` with top, every chapter anchor, final CTA, direct hash load and reverse navigation |
| Editorial | `/historia/`, `/produkcja/` |
| Evidence | `/jakosc-i-certyfikaty/`, `/zgodnosc-i-dokumenty/`; each linked certificate/catalogue class and accessible alternative |
| Conversion | `/private-label/`, `/kontakt/`, inline homepage form |
| Supporting/legal | Privacy, accessibility information, actual 404; every published award/career/media route |
| Localisation | Every released locale; representative route pairs and every language-switch destination |
| Browser/device | Current Chrome and Firefox desktop; Safari macOS/iOS and Chrome Android where available. Record physical-device versus emulation. Unavailable coverage is UNRUN, not pass. |
| Width/zoom | 320, 390, 768, 1440 CSS px; 200% text zoom; 400% browser zoom/reflow; mobile landscape/virtual keyboard |
| Motion | Normal; reduced before load; preference changed mid-session; enhancement blocked/JS disabled |
| Consent/network | Fresh state; accept; reject; withdraw; blocked analytics/fonts; offline/timeout on submit; slow mobile load |
| Forms | Idle, field error, submitting, accepted, downstream failure, duplicate/retry, rate limiting and non-JS response; attachments only if actually released |

Run automated accessibility checks on every template and meaningful interactive state, not just the homepage. Reuse complete-process manual tests where templates are genuinely shared, but inspect page-specific content and document differences.

## 3. Structured audit checklist

### 3.1 Content accuracy and rights

| Audit ID | Check | Evidence / pass condition |
|---|---|---|
| AU-C01 | Manufacturer identity/history | Name, NIP and address roles match owner-approved current records; “since 1984” is company history, not an unsupported age of every brand |
| AU-C02 | ISO management systems | Correct issuer, 12 100/104 50928 TMS, standards, certified address, exact scope and 10 June 2024–9 June 2027 document dates; current issuer status checked when claiming current certification |
| AU-C03 | Awards | Each medal/title has organiser/diploma evidence identifying product/event/year/status; unverified MTP/Gazele claims absent everywhere |
| AU-C04 | Biocides | Current product-authorisation match and approved efficacy conditions; permit/SDS/ISO not conflated; applicable Article 72 warning legible; no misleading “safe/natural/non-toxic” paraphrase |
| AU-C05 | Packaging | PPWR dates and provision-specific obligations accurate as of audit date; BDO not described as EU EPR certification; every environmental claim scoped and supported |
| AU-C06 | Counts/capabilities/private label | Dated counting definition, capacity evidence and operationally approved process; 1000 L container size never passed off as hourly production capacity |
| AU-C07 | Assets/cases | Authentic JAX material, preserved mark/labels and accurate captions. Owner's existing reuse permission for JAX_Pro_Auto/company-source assets accepted without asking again. Customer endorsements still factual and current. |
| AU-C08 | Hidden publishing surfaces | Claims consistent in body, mobile variants, alt/caption/image text, metadata, JSON-LD, translations and download descriptions; expired/withdrawn records absent from current claims |

If issuer/registry access is unavailable, report **document wording verified / current status unverified**. Do not replace a hard claim with vague unsupported language such as “certified excellence.” Check for intentionally omitted awards before reporting their absence as a defect.

### 3.2 UX and usability

- The first screen communicates manufacturer role and provides contact/shop access; no animation hides the main proposition.
- Chapters advance a clear story without forced viewport height, scroll hijacking, trapped horizontal reading or repetitive empty space.
- Navigation, direct hashes, browser Back and anchor offsets work; the sticky header does not hide focused content.
- Primary and secondary actions have clear labels/destinations; shop links do not unexpectedly open an empty cart.
- Mobile copy, images, document metadata and form controls fit naturally; virtual keyboard and cookie controls do not cover actions.
- Private label remains discoverable even if its detailed operating process is awaiting evidence.
- No placeholder careers, awards, cases or English pages in published navigation/sitemap.
- Representative task study: five professional-buyer participants if feasible; locate manufacturer identity, find quality/SDS information and start the correct enquiry. Target 4/5 unaided completions per task; report sample limitations, errors and observations. Agent walkthroughs are not user research.

### 3.3 Accessibility

| Audit ID | Criteria / process | Pass condition |
|---|---|---|
| AU-A01 | Semantics, labels, headings and language | Native controls where possible, meaningful landmarks/headings/names, correct page/part language; no unnecessary ARIA |
| AU-A02 | Keyboard and focus | Logical Tab order, visible focus, working skip/menu/close/Escape, no unintended trap, focus restored appropriately |
| AU-A03 | Contrast | Computed normal text ≥4.5:1, large text ≥3:1, required nontext UI ≥3:1 across images/hover/focus/errors; white on #E63946 not accepted for small text |
| AU-A04 | Reflow and text spacing | No loss at 320 CSS px, 200% text zoom and 400% reflow; WCAG text-spacing overrides do not clip/hide content |
| AU-A05 | Reduced motion | All custom Motion/CSS/video behaviours respect preference; no parallax/counting/scrubbing in reduced mode; immediate complete baseline before JS |
| AU-A06 | Media | Meaningful alt/decorative distinction; captions/transcript/audio description as relevant if media is added; no generated evidence imagery |
| AU-A07 | Form process | Labels/instructions, accessible errors and error summary, stable values, programmatic status, correct focus; no compulsory marketing consent |
| AU-A08 | Documents | Relevant PDF text, language, tags/reading order/navigation and equivalent access examined; exact original preserved; no false “accessible PDF” claim from visual appearance alone |
| AU-A09 | Additional v5 standards | WCAG 2.2 focus-not-obscured/target-size requirements and project 44 px targets assessed with correct criterion levels |
| AU-A10 | Assistive technology | VoiceOver/Safari and NVDA/Firefox or equivalent target coverage where available; full menu → document/form → receipt journey recorded |

Map failures to actual WCAG criteria. Reduced-motion preference is an explicit v5 requirement; do not invent a WCAG 2.1 AA criterion name for it. A contractual motion failure remains actionable even where the relevant WCAG animation criterion is AAA. No known unresolved A/AA failure in released scope passes the release gate.

### 3.4 Performance

1. Use the production build, not the dev server. Record route/template, hardware/browser, screen size, throttling, cold/warm cache, consent state and tool version.
2. Run three cold controlled loads per representative template; retain each result and the median. Investigate material outliers instead of selecting the best run.
3. Report **lab** LCP/CLS and diagnostic TBT, asset/bundle transfer, request waterfall and scroll/menu/form interaction traces. Target lab LCP <2.5 s, CLS <0.1, TBT ≤200 ms under the agreed profile.
4. Verify v5 budgets: compressed initial JS ≤180 KB, CSS ≤40 KB, initial fonts ≤120 KB, selected mobile hero ≤250 KB, initial pre-scroll/optional-analytics transfer ≤750 KB and mobile full-scroll images ≤3 MB. Report both pre-consent and post-consent third-party cost when analytics exists.
5. Check actual LCP element/preload, image formats/sizes/dimensions, font swaps, route splitting, hydration, excessive listeners and large noncomposited effects. Hero media must not be lazily delayed.
6. For **field** CWV, query available PSI/CrUX/GSC or privacy-reviewed RUM. Report 28-day window, URL versus origin aggregation, device type, sample sufficiency and p75 LCP/INP/CLS. Targets: <2.5 s, <200 ms and <0.1 respectively. Origin data does not establish every page/template passed.
7. If there is no field data, say **insufficient field data**; release can rely on the documented lab gate while field monitoring stays open. Lighthouse/TBT is not a field INP substitute. A custom interaction trace is a diagnostic, not a p75 user population.

### 3.5 SEO, analytics and integration

- Crawl published routes, document links and mapped outbound destinations. Record real HTTP status and final URL, not just whether a link exists.
- Verify useful initial HTML with JS off, unique metadata/H1, correct slash/redirect behaviour and real 404s.
- Check self-canonicals, reciprocal hreflang for actually translated pages, sitemap/indexability and absence of preview noindex on production.
- Structured data describes only approved visible facts; no invented `award`, ratings, office locations or product medical claims.
- Verify the reviewed old `/o-nas` migration if authorised; document redirect loops/chains and preserve store/category routes.
- Verify GSC property/sitemap status only with real access; list absent access as UNRUN.
- Inspect consent behaviour before any optional request, rejection and withdrawal. A banner's existence is insufficient.
- Check accepted-enquiry event timing, conversion deduplication, document click semantics and CTA placement. No personal information in event parameters, URLs or telemetry.
- Test shop transition under the actual property/cookie model: no unwanted self-referral or acquisition reset, no unnecessary UTM campaign overwrite, no presumed cross-domain linker or consent sharing.
- Reconcile accepted enquiries with authorised staging delivery records and later approved operational reports; no analytics-event count passed off as sales-qualified leads.

### 3.6 Reliability, release and agent workflow integrity

- Exact candidate matches the audited build and approved production scope.
- Enquiry frontend/server validations, idempotency, request limits, timeouts, failure copy and retries work; no optimistic fake receipt.
- Secret checks cover tracked files, built assets, source maps and diagnostics; developer-only 21st credentials never enter frontend/runtime bundles. Do not print discovered secret values in a report.
- Upload security is tested only when F-18 is published; an MVP without attachments is the explicit v5 decision, not a missing Must feature.
- Assets are copied/optimised locally; no deployed absolute workspace path or reliance on the sibling project filesystem.
- Requirement → component/route → test/evidence traceability complete; skill/MCP use actually evidenced and limited to relevant work. No subagents or paid generation contrary to owner instructions.
- CI includes the documented budget estimate and required filters/concurrency/timeouts if changed; no unauthorised schedules.
- Rollback has real previous deployment identifiers and steps, with DNS/shop/endpoint scope covered and accepted enquiries preserved.
- Private operating instructions/memory are absent from shared project files; access to a large context window was not used to justify loading unrelated data.

## 4. Severity, release decisions and follow-through

| Severity | Examples | Decision |
|---|---|---|
| P0 critical | Exposed secret, destructive production change, serious data exposure | Stop affected action, contain within authority, escalate exact evidence; no release |
| P1 high | Lost/fake enquiry receipt, keyboard-blocked core journey, materially false certification/biocide claim, blank initial content, store-breaking DNS/redirect | Release blocker; fix and retest |
| P2 medium | Supporting-route defect, reproducible performance regression, content inconsistency, inadequate state clarity | Fix before release where it violates a Must or A/AA; otherwise named owner/date and explicit disposition |
| P3 low | Nonblocking polish, optional improvement without a Must violation | Backlog with evidence; do not redesign working sections speculatively |

Severity does not override the contractual release gates: a known WCAG A/AA or Must failure cannot be waived automatically by labelling it P2.

**GO:** release checks passed for the exact candidate; optional content absent safely; production scope approved separately. **NO-GO:** unresolved release blocker. **CONDITIONAL PREVIEW:** useful implementation exists but evidence/integration/access prevents production clearance. **POST-LAUNCH FOLLOW-UP:** operationally live with explicitly pending field-data accumulation, not an invented full CWV pass.

Each finding contains: ID, severity, category, PRD ID, URL/template, state/device, reproducible steps, expected/actual, evidence, user/business impact, recommended scoped fix, owner and retest result. Avoid duplicate findings for one root cause; note all affected routes.

## 5. Audit schedule and ownership

| When | Scope | Owner / notification |
|---|---|---|
| Pre-release | Full candidate audit and rollback review | Engineering + content/regulatory owner; production review gate |
| Immediately after approved launch | HTTP/TLS/route/asset/form/consent smoke tests | Deployment owner; notify on meaningful failure or completion |
| 24 hours | Delivery failures, console/server errors, bad redirects, privacy instrumentation | Engineering + sales operations |
| 7 days | Journey friction, click/receipt reconciliation, consent coverage, first performance signals | Product/analytics owner |
| 28 days | Field CWV where sample suffices; acquisition and lead-quality baseline | Analytics + engineering; explicitly retain “insufficient data” if necessary |
| Monthly and before relevant expiry | Claim/document/permit/packaging review; certificate renewal follow-up before 9 June 2027 | Quality/regulatory/content owner |
| After material change | Only impacted routes/processes plus regression-sensitive checks | Implementer/auditor |

This schedule is a plan. It does not authorise recurring GitHub Actions, paid monitoring or new notifications. Configure an existing authorised monitor only within its scope and keep it quiet on unchanged/nonactionable states.

## 6. Copy-paste audit prompts

Set the actual target URL and make PRD v5, the research dossier and implementation evidence available before use. In a local agent, derive the workspace from project instructions. In a hosted chat, attach documents; do not pretend local paths can be opened. These prompts can be used with Gemini 3.8 Flash/high or an Astra auditor. No subagents.

### Audit 1 — Bounded crawl, claims and narrative

```text
Act as the sole JAX_Info auditor. Read PRD v5, the research dossier, the route/content matrix and claim ledger supplied for this task. Determine the exact target URL and build identity from the release artefact; if absent, report the missing target and continue document consistency checks without guessing a live site. Use only available read-only tools and do not change production or send enquiries.

Crawl published internal HTML routes and fragments within the documented bounded rate/scope; verify mapped shop/document links without crawling the whole shop. Record initial HTML, real HTTP/final URL, metadata/canonical/hreflang, published navigation and accessible document alternatives. Inspect the desktop/mobile narrative, anchors and immediate contact/shop routes. Do not mistake an intentionally omitted award page for an implementation defect.

Compare all visible and metadata/image/JSON-LD/translated claims against C-01–C-11. Separate first-party assertions, inspected documents, issuer/registry status and owner approval. Verify exact ISO scope/dates, award status, product permit identity, biocidal advertising constraints and PPWR/BDO wording as of the audit date. Missing registry access means UNRUN, not valid authorisation. The owner has already authorised JAX_Pro_Auto/company-source asset reuse; do not ask again, but verify factual captions and endorsements.

Return a route inventory, claim-by-claim disposition and evidence-backed findings with PRD IDs, URL/state, expected versus observed and concrete remedies. Label legal interpretation requiring owner review separately from observed technical/content defects. Do not invent facts or test results and do not alter the implementation in this audit pass.
```

### Audit 2 — Accessibility, UX and enquiry states

```text
Audit JAX_Info alone against PRD v5 and this audit plan. Identify the exact preview/live candidate and available browsers/assistive technology. Default to read-only behaviour. Use an already approved staging sink/test recipient for form submissions; if none is authorised, inspect form behaviour without sending and mark end-to-end receipt/delivery UNRUN.

Test every representative route/template and meaningful state at 320/390/768/1440 CSS px, keyboard-only, 200% text zoom, 400% reflow, text-spacing overrides, reduced motion before load and changed mid-session, disabled JS and blocked third-party requests. Run automated accessibility checks and manual semantics/focus/contrast/menu/anchor/document checks. Use a real screen reader when available and record the exact pairing; browser accessibility snapshots are not a substitute for all assistive-technology tests.

For authorised staging forms test valid B2B/private-label, invalid fields, server timeout/failure, duplicate/retry, rate limits, preserved values, error-summary focus, accepted receipt and actual downstream record. Check no mandatory marketing consent, no fake timer success and no conversion before acceptance. If attachments are absent in MVP, recognise v5's deliberate deferral; if released, test the full file safety/accessibility contract using harmless test fixtures only.

Produce reproducible findings mapped to WCAG criteria and PRD requirements with evidence, not a broad score. Distinguish the WCAG 2.1 AA baseline, selected WCAG 2.2 criteria and extra product requirements such as reduced motion/44 px targets. Provide a candidate release decision and list unrun checks with their effect. Do not claim WCAG conformance from axe alone or claim a user study from your own walkthrough.
```

### Audit 3 — Performance, SEO and measurement integrity

```text
Audit the exact JAX_Info production build alone using PRD v5 and this audit plan. Use available browser/DevTools/Lighthouse/PSI/CrUX/GSC/RUM tools; state which accounts and data you actually have. Do not assume access or change production configuration.

For home, editorial and document/form templates, run three cold loads under one recorded mobile profile and retain all values plus median. Inspect actual LCP element, font/image waterfall, transfer/JS/CSS budgets, CLS sources, long tasks and scroll/menu/form interaction traces. Report lab LCP/CLS and TBT as lab diagnostics; TBT is not INP. State whether physical hardware or emulation was used.

If field data exists, report p75 LCP/INP/CLS with date window, device, sample sufficiency and URL-versus-origin scope. If absent, explicitly report insufficient field data; do not manufacture a green CWV status. Distinguish pre-consent and post-consent third-party cost.

Verify indexable HTML, real 404, sitemap, canonical/hreflang and the actually approved shop redirect. Check consent before requests, reject/withdraw flows, no PII in telemetry, conversion timing/deduplication and document-link event semantics. Inspect the real subdomain/shop measurement model without automatically requiring a linker or UTM tags. Use authorised debug/test environments; absent GSC/analytics access stays UNRUN.

Return measurement tables with reproducible environment/evidence, scoped bottlenecks, SEO/analytics findings and ranked corrective actions. Do not alter budgets or configuration to turn a failing audit green.
```

### Audit 4 — Reconcile evidence and produce the final report

```text
Act as the sole final auditor for JAX_Info. Read PRD v5, the implementation requirement matrix, exact release identity and the preceding crawl/content, accessibility/UX and performance/analytics reports. Do not assume their claims are true: spot-check high-impact evidence and reconcile discrepancies. No subagents and no new production changes.

Build a requirement-by-requirement status matrix: PASS, FAIL, UNRUN or NOT APPLICABLE with reasons. Deduplicate findings by root cause while listing affected routes/states. For each remaining issue include severity, PRD/WCAG reference, reproduction, evidence, impact, scoped fix, owner and retest criteria. Existing owner permission covers JAX company asset reuse; do not reopen it. Keep factual/regulatory approvals and third-party component licences distinct.

Verify that the audited build matches the release candidate, no private paths/keys/memory leaked, no unauthorised paid tools/subagents/scheduled workflows were used, enquiry acceptance/delivery is real, and rollback instructions have actual identifiers and authority. Check the production review record separately: a technical GO is not permission to deploy.

Write the final audit report with a concise outcome first, scope/evidence limitations, category findings, requirement matrix, release blockers, recommended fix order, ownership and follow-up dates. Choose GO, NO-GO or CONDITIONAL PREVIEW based on contractual gates; after launch separately report pending field-data follow-up. No P0/P1, known unresolved WCAG A/AA or Must failure can be hidden by a good aggregate score. Do not claim formal legal certification, unobserved performance or tests not executed.

If corrective work is already authorised, perform scoped fixes only in the approved local/staging environment and rerun affected tests; otherwise provide the concrete reviewable repair list. Keep the final report self-contained and redact personal/secret information from evidence.
```

## 7. Final report outline

1. Outcome and exact candidate: GO / NO-GO / CONDITIONAL PREVIEW; distinct deployment authority.
2. Scope, environment, accounts/tools and material limitations.
3. Requirements coverage and current factual-claim dispositions.
4. Evidence-backed findings by severity, with impacted routes/states.
5. Accessibility results including manual/document/assistive-technology coverage.
6. Performance tables separating lab from field and URL from origin data.
7. Conversion delivery, privacy, SEO and analytics integrity.
8. Fix order, owners, retest conditions and rollback readiness.
9. Post-launch follow-up with actual dates/owners and pending field sample.

No implementation code is included in this plan; implementation and authorised fixes belong to the executing agent.
