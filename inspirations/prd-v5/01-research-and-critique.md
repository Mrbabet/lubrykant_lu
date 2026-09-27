# JAX_Info — PRD v4 critique and research dossier

**Checked:** 13 September 2026. **Scope:** product/UX research, specification and implementation-prompt design; no website implementation code written.

## Critique of PRD v4

The assessment below uses the **complete owner-supplied v4**, including sections 5–13. The earlier repository file was a shortened copy with omitted sections; those omissions are not attributed to the complete v4.

### What works well in PRD v4

- A clear corporate/B2B purpose separated from Shoper checkout, with the landing page as the primary narrative.
- Relevant professional buyer personas and explicit private-label/export journeys.
- Strong brand intent: technical manufacturer character, Pragati Narrow, real factory/product imagery and the JAX PRO AUTO reference.
- Useful content-risk categories: certificates, awards, biocides, packaging claims and logo permissions.
- Appropriate high-level commitments to WCAG, Core Web Vitals, reduced motion, document access and progressive enhancement.
- Motion.dev as a focused React animation choice, with 21st.dev used for inspiration rather than an exact clone.

### What must be changed or clarified before implementation

- **Legal scope:** v4 conflates the Polish public-sector digital accessibility act with the EAA implementation for covered products/services. A corporate site is not automatically covered based on a guessed workforce size. Keep WCAG as the product standard; assess actual services separately [S07–S09].
- **Rendering:** “static/JAMstack” plus React/Vite does not guarantee readable no-JS HTML. Require per-route prerendering and an early disabled-JS proof [v5 F-01/F-17].
- **Scroll rhythm:** one idea per section is useful; minimum 100vh for every section creates needless length, especially on mobile. Use content-led height, concise history and immediate contact access [S14].
- **Claims:** “confirmed awards” conflicts with the later evidence gate. Treat first-party marketing, a published certificate and registry/issuer confirmation as different evidence levels. Product count and packaging size need definitions, dates and scope.
- **Certificate research:** a current-dated public PDF is available; v5 can specify its exact number, dates and scope rather than leaving everything “scan missing” [S03]. Suspension/withdrawal remains a separate check.
- **Typography conflict:** complete v4 explicitly makes Pragati Narrow the primary body family too, while the earlier stack note proposes Inter/system-ui. V5 follows the latest supplied v4, allowing a documented system-font readability exception for dense utility text.
- **Reference drift:** browser inspection shows that JAX PRO AUTO currently uses Barlow Condensed, Source Sans 3, IBM Plex Mono and blue accents. Preserve the intended industrial composition, not those conflicting live tokens [S04].
- **Brand-red contrast:** white on #E63946 is approximately 4.17:1, insufficient for normal text. V5 adds a darker action variant and actual state testing.
- **Form scope:** a 20 MB upload is a backend/security feature, not merely an input. V5 explicitly defers upload to v1.1; text-based private-label enquiries remain MVP. It specifies acceptance, durable receipt, errors, retry/deduplication and downstream delivery.
- **Shop links and analytics:** a shop CTA need not point to an empty cart. Unconditional UTM tagging can corrupt acquisition attribution; subdomains do not automatically need a cross-domain linker. Observe actual measurement/consent configuration first.
- **PPWR date:** the regulation generally applies from 12 August 2026, with provision-specific dates and exceptions. “Getting ready for upcoming PPWR” is already too vague in September 2026 [S10–S11].
- **Agent instructions:** loading every skill with broad prefixes is expensive and contradictory. `taste-skill` resolves locally through a differently named active skill; exact names and applicability need checking. Motion+ and 21st account features are not guaranteed.
- **21st tooling:** current upstream documents a unified 21st MCP replacing legacy Magic. Source retrieval and hosted AI are distinct entitlements; free membership does not mean all MCP tools or unlimited code retrieval [S19].
- **Review boundary:** production DNS, old-shop redirects and real delivery changes need an exact release package first; implementation should not stop repeatedly for routine local choices.

### What is missing for a production-ready PRD

- Requirement IDs tied to route, component, test and evidence; named ownership of content and delivery.
- An explicit publication-state model covering metadata, images, translations and JSON-LD as well as visible prose.
- Complete form state/error/receipt contracts, processor/retention decisions and anti-abuse controls.
- A route-by-release matrix with evidence gates, genuine 404s, privacy content and no thin placeholder pages.
- A real asset inventory and a rule that authentic company materials take precedence over generated visuals.
- Per-effect motion tables, initial HTML visibility, mid-session reduced-motion changes and no-JS form handling.
- Concrete image/font/JS budgets, a repeatable lab method and honest separation from field p75 CWV.
- An accessible-document workflow beyond “add alt text to a scan.”
- Consent-aware event definitions, deduplication, attributable conversion counting and no-PII instrumentation.
- A real launch/rollback plan, monitoring ownership and a final evidence-based audit format.

## Research findings and implementation consequences

### 1. Company, product structure and provenance

The manufacturer's About page states the 1984 start, 1990 expansion, historical exports and several customer names. It also contains quality-policy wording. These support an owner-reviewed history draft; they do not prove present export coverage or current customer endorsements [S01].

The current shop exposes, among others, HoReCa `/pl/c/HoReCa/160`, Przemysł / Agro `/pl/c/Przemysl-Agro/334`, Medycyna i Laboratoria `/pl/c/Medycyna-i-Laboratoria/404`, Placówki edukacyjne `/pl/c/Placowki-edukacyjne/593` and Auto `/pl/c/Auto/714` [S02]. Use these as inspected destination candidates and retest before release. Do not fabricate separate industry/agriculture URLs because the narrative uses separate labels. Clarjax appears on the shop; this alone does not settle its full brand relationship.

The certificate PDF is unusually useful direct evidence: one document covers both management systems, gives the registration and validity window, and names Główna 30A [S03]. Its address is not proof that every facility at every other address is covered. Read the certificate scope exactly, verify current status with the issuer and preserve the original PDF. A separately labelled accessible transcription is preferable to editing the signed original.

The JAX 34 PREMIUM page displays permit 4364/11 and detailed efficacy claims [S05]. This confirms the page's wording, not authorisation status or the conditions for each claim. Its strong safety language is a reason to apply a regulatory review, not to copy the text wholesale. The current consolidated Biocidal Products Regulation contains Article 72's advertising warning and prohibited misleading indications [S12].

MTP 2017/JAX 44, MTP 2019/JAX 42, Gazele Biznesu, 260–280 products, 1000 L capability and the full private-label process were **not independently established** in this research. Google searches encountered a consent interstitial; the attempted old URPL registry URL redirected to the agency homepage rather than a product record. Do not treat HTTP 200 or a search snippet as evidence. V5 specifies the required primary proof and safe omission for each claim.

**Owner update:** on 13 September 2026 the owner explicitly authorised Gemini to reuse all relevant files, logos, graphics and company materials from JAX_Pro_Auto and the designated company source sites, confirming common company ownership and rights. Record this standing permission instead of asking again. It does not authorise invented factual claims, leakage of private data or third-party UI licence violations.

### 2. Motion and scrollytelling

Official Motion guidance distinguishes scroll-triggered from scroll-linked animation, recommends reduced-motion handling and provides APIs for changing/disabling parallax and autoplay. Reduced-motion configuration is not a substitute for checking custom effects [S15–S17]. Use once-only reveals, a restrained timeline and native CSS sticky only when useful; critical text is present and visible before enhancement.

The Motion bundle guide supports selective feature loading. Actual bundle output matters more than a library's smallest marketing example. Do not promise 120 fps or zero CLS merely because a skill says so; measure the implemented route [S17].

NN/g's attention research supports an early proposition and action because attention is concentrated near the top, even though users scroll. It does not justify applying a universal percentage to this particular manufacturer audience. V5 keeps v4's scroll targets as hypotheses, removes forced viewport-height chapters and adds task testing [S14].

Modern corporate storytelling should use a coherent mixture of editorial history, authentic production visuals, supported facts, document access and a compact cooperation process. A testimonial or case study is an evidence object, not filler required to complete a template. Never invent savings, quotes or partner logos to achieve visual density.

### 3. 21st.dev shortlist and rejection decisions

The public catalogue and pages below were opened. Component descriptions are author claims; accessibility, responsiveness and dependencies still require testing.

| Source / observed pattern | Use in JAX_Info | Adaptation / rejection rule |
|---|---|---|
| [Hero catalogue](https://21st.dev/community/components/s/hero) [S18a] | Explore strong heading/image relationships and a clear primary action | Build an original industrial composition with actual JAX assets; avoid rotating copy, delayed headings and shader backgrounds |
| [Modern Timeline — Caio Bonato](https://21st.dev/@chowlol202/components/modern-timeline) [S18b] | Reference a semantic vertical history structure and legible dates | Strip SaaS roadmap/status vocabulary; avoid horizontal-only reading; verify actual semantics/licence before any source reuse |
| [Chapter Scrubber — Ruixen](https://21st.dev/@ruixen.ui/components/chapter-scrubber) [S18c] | Reference optional chapter awareness on long pages | Listed with MIT licence and legacy framer-motion dependency; adapt behaviour into native anchor navigation and the existing Motion package. Reject hover-only access, pointer-required scrubbing and duplicate animation dependency |
| [Timeline catalogue](https://21st.dev/community/components/s/timeline) [S18d] | Compare editorial rails and small progress affordances | Search results also include dashboards/activity feeds; choose by buyer purpose, not “timeline” keyword alone |
| Stable document/case grid | Use for evidence and approved case summaries | A bespoke grid is simpler than importing a generic bento/slider package. No need for a paid template. |

The number-ticker search page exposed navigation but no sufficiently useful inspected candidate. Do not invent a selected component. Counters remain optional and should probably be omitted when there are no trustworthy current numbers.

The upstream 21st README now documents `search`, `get_component` and `get_usage`; hosted `generate`/`iterate_generation` are exposed only with AI access. It also notes that legacy Magic keys were reset and describes the unified endpoint [S19]. A key being present is insufficient: tool discovery and entitlement checks determine the workflow. No code-generation service was used for this research.

### 4. Accessibility and legal accuracy

WCAG 2.1 defines the technical baseline, including contrast, keyboard access, reflow and pause/stop/hide where applicable [S06]. WCAG 2.2 adds useful requirements such as focus not obscured and target size [S06b]; a 44 px product target is a design choice, not the 2.2 AA minimum.

The EAA covers specified consumer products and services, including e-commerce, and applies through a different Polish act from the 2019 public-sector website law [S07–S09]. Corporate/B2B positioning, consumer pathways and the integration with the shop need an applicability assessment; no conclusion is derived from unverified headcount. V5 deliberately retains an accessibility release standard regardless of legal scope.

A scanned certificate needs accessible information about the complete relevant content, not just an alt string such as “ISO certificate.” Validate the original document's selectable text, tags/reading order, language and navigation; remediation or a complete equivalent must be identified. An automated axe score does not certify all WCAG criteria or PDFs.

### 5. PPWR, BDO and EPR communication

The Commission and regulation agree on entry into force, 11 February 2025, and general application, 12 August 2026 [S10–S11]. Different obligations, exceptions and later milestones require packaging/product/market-level assessment. The Commission page also distinguishes adopted rules from proposed changes. Do not report a proposal as current law.

BDO is the Polish database and operational reporting system [S13]. An entry is not an EU-wide “EPR certificate.” For manufacturer communications, disclose specific documented activities, covered packaging and review date; avoid generic green badges and “PPWR compliant” without scope. An informational document-request link is preferable to an unsupported compliance promise.

### 6. Gemini and agent-driven delivery

Google's model documentation currently lists stable `gemini-3.8-flash`, a 1,048,576-token input window, 65,536-token output limit, and `low`, `medium`, `high` thinking. `minimal` is explicitly unsupported [S20–S21]. Capability and speed/cost positioning justify testing it as the implementation agent; they do not replace acceptance criteria.

High thinking must be selected in the runtime. AI Studio, Antigravity and API clients do not automatically share filesystem/MCP/browser capabilities. Phased prompts must declare inputs, permitted actions, required artefacts, test commands/evidence and stopping conditions. They should request concise reasoning summaries and concrete proof, not hidden chain-of-thought or an entire million-token vault dump.

A single agent is sufficient here and is the owner's explicit requirement. Optional independent review is a later audit task, not permission to spawn subagents. Local skill and MCP paths, the existing environment-key label and tool preflight results belong in a private operator runbook rather than this shared product document.

## Source register

All accessed 13 September 2026. “Read” means the relevant text was retrieved; it does not imply an independent legal, security or conformance audit. No fabricated citation identifiers from v4 were retained as evidence.

| ID | Source | Evidence / limitation |
|---|---|---|
| S01 | [JAX About](https://jax.com.pl/o-nas) | First-party history, quality policy and certificate link; current customer relationships not independently verified |
| S02 | [JAX shop](https://jax.com.pl) and [Contact](https://jax.com.pl/kontakt) | Current category navigation and first-party NAP; register ownership not independently checked |
| S03 | [JAX published ISO certificate PDF](https://jax.com.pl/userdata/public/assets//Certyfikat%20ISO%209001%2014001%20pol%202024.pdf) | Text extracted and full page visually inspected; issuer validity/withdrawal service not checked |
| S04 | [JAX Professional Auto reference](https://jax-pro-auto.64bit.site/) | Rendered browser text and computed font/colour inspection; style reference, not authority for current company facts |
| S05 | [JAX 34 PREMIUM product page](https://jax.com.pl/pl/p/JAX-PROFESSIONAL-34-PREMIUM-WIRUSOBOJCZY%2C-BAKTERIOBOJCZY-I-GRZYBOBOJCZY-PREPARAT-DEZYNFEKCYJNY%2C-DO-RAK-I-POWIERZCHNI/183) | Permit 4364/11 stated; product registry status not verified |
| S06 | [WCAG 2.1](https://www.w3.org/TR/WCAG21/) | Normative technical baseline, retrieved |
| S06b | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Normative text retrieved; reference for explicitly added 2.2 criteria and correct criterion levels |
| S07 | [Directive (EU) 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng) | Read Article 2 scope and consumer-service context |
| S08 | [Polish Act of 26 April 2024, Dz.U. 2024 poz. 731](https://eli.gov.pl/eli/DU/2024/731/ogl) | Official title, status and effective date retrieved; apply consolidated legal text during legal review |
| S09 | [Polish Act of 4 April 2019, Dz.U. 2019 poz. 848](https://eli.gov.pl/eli/DU/2019/848/ogl) | Official title confirms public-entity scope; consolidation exists |
| S10 | [European Commission — Packaging waste](https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en) | PPWR dates, scope and staged measures; proposals distinguished from adopted law |
| S11 | [Regulation (EU) 2025/40](https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng) | Article 71 general application; detailed duties require scoped assessment |
| S12 | [Biocidal Products Regulation, consolidated 19 August 2026](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012R0528-20260819) | Article 72 advertising rules; not a product-authorisation lookup |
| S13 | [Official BDO portal](https://bdo.mos.gov.pl/) | System purpose and operational information; company entry not checked |
| S14 | [NN/g — Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/) | Empirical attention guidance; older research, not a current JAX benchmark |
| S15 | [Motion React accessibility](https://motion.dev/docs/react-accessibility) | Official reduced-motion guidance; corroborated through Context7 |
| S16 | [Motion React scroll animations](https://motion.dev/docs/react-scroll-animations) | Official triggered/linked animation patterns |
| S17 | [Motion React bundle size](https://motion.dev/docs/react-reduce-bundle-size) | Official feature-loading guidance; app output must still be measured |
| S18 | [21st.dev](https://21st.dev/) | Public catalogue and account-feature descriptions; entitlements vary |
| S18a–d | Hero catalogue, Modern Timeline, Chapter Scrubber and Timeline catalogue linked in shortlist above | Pages opened; author descriptions are not independent tests |
| S19 | [21st official migration/setup README](https://github.com/21st-dev/magic-mcp/blob/main/README.md) and [MCP setup](https://21st.dev/mcp) | README retrieved from official repository; documents unified MCP, supported credential paths and AI access |
| S20 | [Gemini model overview](https://ai.google.dev/gemini-api/docs/models) | Stable 3.8 Flash model identifier verified |
| S21 | [Gemini 3.8 Flash model card](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) and [latest model guide](https://ai.google.dev/gemini-api/docs/generate-content/latest-model) | Token limits/thinking/tool support retrieved and corroborated via Context7 |
| S22 | [web.dev — Web Vitals](https://web.dev/articles/vitals) | Field p75, mobile/desktop segmentation, current LCP/INP/CLS thresholds |

## Unresolved evidence, explicitly preserved

No primary proof was obtained for the MTP/Gazele claims, current permit status, full private-label operation, present SKU count, IBC capacity, current customer endorsements or active export markets. No user analytics, production DNS, hosting account, delivery account or 21st source-retrieval quota was assumed. Legal scope and issuer status require owner review. These gaps are recorded in v5 and do not justify fabricated content.

This dossier's recommendation is ready for implementation planning; it does not declare the eventual website legally compliant, fully accessible or fast in the field before it exists.
