> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Claims Ledger — JAX_Info

**Version:** 1.0 · **Date:** 13 September 2026  
**Product:** https://info.jax.com.pl · **Owner:** Michał Mierzwa EmiChem P.P. / JAX Professional  
**Scope:** Canonical claim inventory, factual verification states, permitted Polish wording, and usage locations.

---

## 1. Evidence Level Classification

Every factual claim in the application content, imagery, metadata, and JSON-LD is classified into one of four distinct verification tiers:

1. `website-stated`: Stated on first-party marketing pages (e.g. `jax.com.pl/o-nas`). Represents manufacturer intent, but lacks independent or formal documentary proof.
2. `document-inspected`: Direct visual and textual inspection of an official primary source document (e.g. TÜV SÜD PDF certificate).
3. `issuer/registry-confirmed`: Formal external verification against an authoritative public register (e.g. CEIDG, URPL register, TÜV SÜD certificate validation database).
4. `owner-approved`: Explicit factual confirmation provided in writing by the business, quality, regulatory, or commercial owner.

> **Publication Gate Rule:** Only claims in `owner-approved` or `document-inspected` (with approved scope limitations) may be published in public release text, images, or metadata. Any claim remaining in `unverified` or `website-stated` without documentary backing must use its safe public omission.

---

## 2. Canonical Claims Register (C-01 – C-11)

### C-01: Rok założenia i ciągłość produkcji (1984+)
- **Stated Fact:** Działalność produkcyjna rozpoczęta w 1984 roku; dynamiczny rozwój i rozbudowa oferty w 1990 roku; ponad 40 lat tradycji polskiego producenta chemii.
- **Evidence Status:** `website-stated` (potwierdzone na `jax.com.pl/o-nas`) / `owner-approved` (zaakceptowane w PRD v4/v5).
- **Primary Source / Reference:** S01 (`https://jax.com.pl/o-nas`).
- **Owner Role:** Content Owner / Michał Mierzwa.
- **Review Date:** 13 września 2026. Valid through: Bezterminowo (fakt historyczny).
- **Scope Limitations:** Dotyczy podmiotu gospodarczego EmiChem (producenta). Nie przypisywać daty 1984 poszczególnym markom (np. JAX Auto powstało później jako dedykowana linia). Unikać dynamicznego licznika wieku („dokładnie 42 lata”), który staje się nieaktualny.
- **Permitted Polish Copy:**
  - *„Polski producent profesjonalnej chemii gospodarczej, motoryzacyjnej i przemysłowej, obecny na rynku od 1984 roku.”*
  - *„Ponad 40 lat doświadczenia w opracowywaniu i produkcji formulacji chemicznych.”*
- **Usage Locations:** Hero (`#start`), Rozdział 02 (`#historia`), `/historia/`, stopka globalna, meta description strony głównej.

---

### C-02: Dane rejestrowe i podwójna rola adresowa (Wójtowska / Główna)
- **Stated Fact:** Michał Mierzwa EmiChem P.P., NIP: 7780022439, REGON: 639841804, BDO: 000109985. Adres rejestrowy: ul. Wójtowska 16, 61-654 Poznań. Biuro handlowe i magazyn centralny: ul. Główna 30A, 61-007 Poznań.
- **Evidence Status:** `website-stated` (`jax.com.pl/kontakt`) oraz `document-inspected` (certyfikat ISO wymienia ul. Główną 30A).
- **Primary Source / Reference:** S02 (`https://jax.com.pl/kontakt`), S03 (Certyfikat ISO).
- **Owner Role:** Business Owner.
- **Review Date:** 13 września 2026.
- **Scope Limitations:** Wyraźnie rozróżniać adres siedziby rejestrowej od adresu operacyjnego/magazynowego. W stopce i na podstronie kontaktowej podawać oba adresy z jasnymi etykietami ról.
- **Permitted Polish Copy:**
  - *„Michał Mierzwa EmiChem Przedsiębiorstwo Produkcyjne | NIP: 7780022439 | REGON: 639841804”*
  - *„Siedziba rejestrowa: ul. Wójtowska 16, 61-654 Poznań”*
  - *„Biuro handlowe i magazyn: ul. Główna 30A, 61-007 Poznań”*
- **Usage Locations:** Stopka globalna, `/kontakt/`, sekcja `#kontakt`, dane strukturalne JSON-LD (`Organization`).

---

### C-03: Zintegrowany System Zarządzania DIN EN ISO 9001:2015 i ISO 14001:2015
- **Stated Fact:** Wdrożony i certyfikowany Zintegrowany System Zarządzania Jakością (DIN EN ISO 9001:2015) oraz Zarządzania Środowiskowego (DIN EN ISO 14001:2015) wydany przez TÜV SÜD Management Service GmbH.
- **Inspected Document Metadata:**
  - **Jednostka certyfikująca:** TÜV SÜD Management Service GmbH, Ridlerstraße 65, 80339 München, Niemcy.
  - **Numer rejestracyjny certyfikatu:** 12 100/104 50928 TMS.
  - **Numer zlecenia:** 73431727.
  - **Certyfikowana organizacja i lokalizacja:** Michał Mierzwa EmiChem P.P., ul. Główna 30A, 61-007 Poznań, Polska.
  - **Normy:** DIN EN ISO 9001:2015 oraz DIN EN ISO 14001:2015.
  - **Zakres certyfikacji (Scope):** *„Produkcja i sprzedaż chemicznych artykułów gospodarstwa domowego do zastosowań profesjonalnych, kosmetyków oraz preparatów biobójczych”*.
  - **Okres ważności:** 10 czerwca 2024 r. – 9 czerwca 2027 r. (data wydania certyfikatu: 19 kwietnia 2024 r.).
- **Evidence Status:** `document-inspected` (pełny dokument PDF zweryfikowany wizualnie i tekstowo). Status weryfikacji w jednostce: `pending issuer check` (nie sprawdzano bezpośrednio w bazie TÜV SÜD pod kątem ewentualnego zawieszenia).
- **Owner Role:** Quality Owner / Pełnomocnik ds. Jakości.
- **Review Date:** 13 września 2026. Valid through: 2027-06-09.
- **Scope Limitations:** **Kluczowa granica prawna:** Certyfikat dotyczy Systemu Zarządzania przedsiębiorstwa w zakładzie przy ul. Głównej 30A. **Zabrania się** twierdzenia, że *„poszczególne produkty posiadają certyfikat ISO”* lub że produkty są *„ekologiczne / neutralne dla środowiska”*. Wymagane podawanie pełnej nazwy normy z rokiem (DIN EN ISO 9001:2015) i numeru certyfikatu.
- **Permitted Polish Copy:**
  - *„Działamy w oparciu o Zintegrowany System Zarządzania Jakością DIN EN ISO 9001:2015 oraz Zarządzania Środowiskowego DIN EN ISO 14001:2015, certyfikowany przez TÜV SÜD Management Service GmbH (nr certyfikatu: 12 100/104 50928 TMS, ważny do 09.06.2027).”*
  - *„Zakres certyfikacji: produkcja i sprzedaż profesjonalnych środków czystości, kosmetyków oraz preparatów biobójczych.”*
- **Usage Locations:** Rozdział 05 (`#jakosc`), `/jakosc-i-certyfikaty/`, `/zgodnosc-i-dokumenty/`, karta pobierania certyfikatu.

---

### C-04: Nagrody Targów Poznańskich (Złoty Medal MTP 2017 & Wyróżnienie MTP 2019)
- **Stated Fact:** Złoty Medal MTP 2017 na Targach Poznańskich dla preparatu JAX 44; Wyróżnienie MTP 2019 dla preparatu JAX 42.
- **Evidence Status:** `unverified` / `website-stated` w starych notatkach PRD. Brak niezależnego dyplomu, skanu lub wpisu w oficjalnym archiwum MTP w obecnym dossier.
- **Primary Source / Reference:** Brak pierwotnego dokumentu.
- **Owner Role:** Marketing / Commercial Owner.
- **Review Date:** 13 września 2026.
- **Public-Safe Omission:** **Wstrzymane przed publikacją w MVP.** Do momentu dostarczenia skanu dyplomu lub oficjalnego potwierdzenia MTP:
  - Wycofać wzmianki o medalach MTP z tekstu landing page.
  - Wyłączyć podstronę `/nagrody-i-wyroznienia/` z nawigacji głównej i mapy sitemap.
- **Permitted Polish Copy (warunkowo po dostarczeniu dyplomu):**
  - *„Wyróżnienia branżowe na Międzynarodowych Targach Poznańskich: Złoty Medal MTP 2017 (JAX 44) oraz Wyróżnienie MTP 2019 (JAX 42).”*
- **Usage Locations:** Wyłącznie opcjonalny moduł nagród w `#jakosc` lub `/nagrody-i-wyroznienia/` (jeśli udowodnione przed Gate D).

---

### C-05: Gazele Biznesu
- **Stated Fact:** Tytuł Gazeli Biznesu przyznany firmie EmiChem.
- **Evidence Status:** `unverified`. Brak wskazania roku edycji, numeru rankingu oraz podmiotu zgłoszonego.
- **Owner Role:** Business Owner.
- **Public-Safe Omission:** **Całkowicie pominięte w MVP.** Brak odniesień w treści serwisu.

---

### C-06: Pozwolenia na obrót produktami biobójczymi (JAX 34 & JAX 27)
- **Stated Fact:** Preparat dezynfekcyjny JAX 34 PREMIUM posiada pozwolenie Ministra Zdrowia / URPL nr 4364/11; preparat do klimatyzacji JAX 27 AC-Cleaner posiada pozwolenie nr 7214/17.
- **Evidence Status:** `website-stated` (widnieje na etykietach i kartach produktów w sklepie `jax.com.pl`). Status w rejestrze URPL: `pending regulatory verification` (brak bezpośredniego wyciągu z aktualnego Wykazu Produktów Biobójczych URPL).
- **Primary Source / Reference:** S05 (`jax.com.pl/pl/p/.../183`), `products.ts` w JAX_Pro_Auto.
- **Owner Role:** Regulatory Affairs Owner.
- **Review Date:** 13 września 2026.
- **Scope Limitations (Art. 72 Rozporządzenia BPR 528/2012):**
  - **Rygor prawny:** Każde odniesienie o charakterze reklamowym do produktu biobójczego musi zawierać czytelne ostrzeżenie ustawowe: *„Produktów biobójczych należy używać z zachowaniem środków ostrożności. Przed każdym użyciem należy przeczytać etykietę i informacje dotyczące produktu.”*
  - **Zakazane sformułowania:** Bezwzględny zakaz używania określeń typu: *„produkt biobójczy niskiego ryzyka”*, *„nietoksyczny”*, *„nieszkodliwy”*, *„naturalny”*, *„przyjazny dla środowiska”*, *„w 100% bezpieczny”*.
- **Permitted Polish Copy:**
  - *„Wytwarzamy specjalistyczne preparaty dezynfekcyjne dopuszczone do obrotu na podstawie pozwoleń Urzędu Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych (m.in. JAX 34 PREMIUM, pozwolenie nr 4364/11).”*
  - *(W stopce/przy karcie produktu obowiązkowa klauzula z Art. 72 BPR).*
- **Usage Locations:** `/zgodnosc-i-dokumenty/`, `#jakosc`, karty dokumentów biobójczych.

---

### C-07: Skala asortymentu (260–280 produktów) i pojemności (do 1000L IBC)
- **Stated Fact:** Portfolio obejmujące od 260 do 280 aktywnych receptur; linie konfekcjonowania obsługujące pojemności od butelek 500 ml / 750 ml / 1L, przez kanistry 5L / 10L / 20L, beczki 200L, aż po paletopojemniki 1000L IBC.
- **Evidence Status:** `website-stated` / unverified (brak formalnego zestawienia magazynowego SKU).
- **Owner Role:** Operations & Production Owner.
- **Review Date:** 13 września 2026.
- **Scope Limitations & Safe Fallback:** Nie podawać w nagłówkach sztywnej liczby SKU (np. „dokładnie 280 produktów”), dopóki lista nie zostanie przeliczona. Zamiast tego opisywać skalę w ujęciu jakościowym i formatowym.
- **Permitted Polish Copy:**
  - *„Elastyczne linie rozlewnicze: od butelek ze spryskiwaczem (500–1000 ml), przez kanistry 5L i beczki, po przemysłowe paletopojemniki IBC 1000L.”*
  - *„Rozbudowane portfolio formulacji dla motoryzacji, gastronomii, przemysłu i instytucji publicznych.”*
- **Usage Locations:** `#produkcja`, `/produkcja/`, `#start`.

---

### C-08: Model współpracy Private Label (5 etapów)
- **Stated Fact:** Realizacja zleceń marek własnych (kontraktowa produkcja chemii) w 5 uporządkowanych krokach: 1. Analiza briefu → 2. Dobór/opracowanie formulacji i testy stabilności → 3. Dokumentacja (KCh, zgłoszenia, etykiety) → 4. Partia próbna / wdrożenie → 5. Produkcja seryjna i konfekcjonowanie.
- **Evidence Status:** `PRD hypothesis` / `owner-approved direction`. Szczegółowe czasy SLA, minima produkcyjne (MOQ) i deklaracje R&D pozostają do potwierdzenia.
- **Owner Role:** Commercial & Operations Owner.
- **Review Date:** 13 września 2026.
- **Scope Limitations:** W MVP nie deklarować wiążących terminów realizacji (np. „gotowy produkt w 14 dni”), gwarantowanych minimów (MOQ) ani bezpłatnych badań laboratoryjnych bez potwierdzenia handlowego. Skupić się na zaproszeniu do złożenia zapytania ofertowego.
- **Permitted Polish Copy:**
  - *„Produkcja kontraktowa i marki własne (Private Label): przenosimy Twoją wizję w gotowy produkt chemiczny – od doboru formulacji i opakowania, przez przygotowanie Kart Charakterystyki, po seryjny rozlew.”*
  - *„Przejrzysty proces współpracy: Brief technologiczny → Weryfikacja receptury → Zgodność regulacyjna → Produkcja pilotażowa → Dostawa seryjna.”*
- **Usage Locations:** `#wspolpraca`, `/private-label/`, formularz zapytania o markę własną.

---

### C-09: Zasięg eksportowy, dystrybucja zagraniczna i logotypy klientów
- **Stated Fact:** Eksport produktów do krajów Unii Europejskiej i rynków wschodnich; historyczne referencje w sieciach handlowych i obiektach przemysłowych.
- **Evidence Status:** `website-stated` (starsze wpisy na stronie). Brak aktualnych umów dystrybucyjnych i pisemnych zgód na użycie logotypów klientów w nowym serwisie.
- **Owner Role:** Export & Legal Owner.
- **Review Date:** 13 września 2026.
- **Public-Safe Omission:** **Wycofano z MVP karuzelę logotypów klientów oraz mapę z pinezkami państw eksportowych.** Do czasu pozyskania zgód referencyjnych komunikować ogólny europejski standard wytwórczy.
- **Permitted Polish Copy:**
  - *„Polski producent wytwarzający zgodnie ze standardami Unii Europejskiej, otwarty na partnerstwa dystrybucyjne na rynkach międzynarodowych.”*
  - *„Obsługujemy klientów instytucjonalnych, sieci handlowe i hurtownie w Polsce i Europie.”*
- **Usage Locations:** `/`, `/kontakt/`, sekcja `#wspolpraca`.

---

### C-10: Odpowiedzialność środowiskowa, PPWR i rejestr BDO
- **Stated Fact:** Firma zarejestrowana w Bazie Danych o Odpadach (BDO); system zarządzania środowiskowego DIN EN ISO 14001:2015; adaptacja procesów do wymogów Rozporządzenia Opakowaniowego (PPWR – Rozporządzenie UE 2025/40 obowiązujące od 12.08.2026 r.).
- **Evidence Status:** ISO 14001 jest `document-inspected`; BDO jest faktem ustawowym; PPWR jest prawem powszechnie obowiązującym.
- **Owner Role:** Environmental & Regulatory Affairs Owner.
- **Review Date:** 13 września 2026.
- **Scope Limitations:** **Zakaz greenwashingu:** Nie używać ogólnych haseł *„100% eko”*, *„produkty neutralne dla klimatu”* ani nieprawdziwych pieczęci „PPWR Ready”. Wskazywać konkretne działania: optymalizacja masy tworzyw, segregacja surowców, zgodność z normą ISO 14001:2015. Numer BDO podać po weryfikacji w rejestrze.
- **Permitted Polish Copy:**
  - *„Świadoma produkcja chemiczna: certyfikowany System Zarządzania Środowiskowego DIN EN ISO 14001:2015, stała optymalizacja opakowań pod kątem recyklingu oraz pełna ewidencja w rejestrze BDO.”*
- **Usage Locations:** `/jakosc-i-certyfikaty/`, `/zgodnosc-i-dokumenty/`, `#jakosc`.

---

### C-11: Portfolio marek (JAX Professional, JAX Auto, Clarjax, Flame) i autentyczność zdjęć
- **Stated Fact:** EmiChem jest właścicielem i wytwórcą marek: JAX Professional (chemia obiektowa i HoReCa), JAX Professional Auto (chemia motoryzacyjna i detailing), Clarjax (chemia gospodarcza), Flame (biopaliwa i podpałki). Wszystkie prezentowane fotografie produktów i zakładu pochodzą z autentycznych zasobów firmy.
- **Evidence Status:** `owner-approved` (właściciel udzielił stałej zgody 13.09.2026 na wykorzystanie materiałów z `JAX_Pro_Auto`, `jax.com.pl`, `jax-pro-auto.64bit.site`).
- **Owner Role:** Brand & Product Owner.
- **Review Date:** 13 września 2026.
- **Scope Limitations:** Nie przypisywać chemii gospodarczej Clarjax właściwości produktów profesjonalnych JAX Professional. Zdjęcia produktów w serwisie muszą być autentycznymi renderami/fotografiami rzeczywistych opakowań.
- **Permitted Polish Copy:**
  - *„Portfolio marek Grupy EmiChem: od specjalistycznych linii JAX Professional i JAX Auto, po sprawdzone preparaty Clarjax i Flame.”*
- **Usage Locations:** `#start`, `#zastosowania`, stopka, `/` (dedykowana podstrona `/marki/` zaplanowana na v1.1).

---

## 5. Automated Release Content Audit (Gate C2 Enforcement)

Automated tests in `tests/release-content-validation.test.ts` run against all prerendered HTML in `dist/static/` on every build:
1. **Unapproved Claims Exclusion:** Confirms that unverified awards and claims C-04 (Złoty Medal MTP) and C-06 (niezweryfikowane deklaracje wydajności) are 100% absent across all 11 HTML files.
2. **Statutory Biocide Warning (Art. 72 BPR):** Confirms that mandatory biocide notice (`Produktów biobójczych należy używać z zachowaniem środków ostrożności...`) is present on `/jakosc-i-certyfikaty/`.
3. **ISO 9001:2015 Certificate Details:** Asserts certificate registration number `12 100/104 50928 TMS`, validity `09.06.2027`, issuer `TÜV SÜD Management Service GmbH`, and verified download link `/documents/certyfikat-iso-9001-14001-emichem-jax.pdf`.
4. **No Superficial File Upload:** Asserts that no `<input type="file">` exists in MVP DOM (PRD F-20).
5. **Cookie Privacy Banner:** Asserts that the privacy consent banner is present in AppShell HTML with links to RODO policy `/polityka-prywatnosci/`.
