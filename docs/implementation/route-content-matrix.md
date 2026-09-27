> Historical implementation self-report. The independent Vercel review in `vercel-review.md` supersedes all release status, factual verification, delivery and performance claims below. Do not use this document alone as approval.

# Route & Content Matrix — JAX_Info

**Version:** 1.0 · **Date:** 13 September 2026  
**Product:** https://info.jax.com.pl · **Owner:** Michał Mierzwa EmiChem P.P. / JAX Professional  
**Scope:** Specification of all MVP published routes, content structures, metadata, assets, claims, and primary conversion actions.

---

## 1. Summary of Routes & Release Scope

| Route Path | Release Status | Primary Persona | Core Purpose / Decision | Primary Action (CTA) |
|---|---|---|---|---|
| `/` | **MVP** | Kupiec sieciowy, Dystrybutor, Właściciel marki | Poznaj producenta, zweryfikuj skalę i certyfikaty, rozpocznij współpracę | *„Porozmawiajmy o współpracy”* |
| `/historia/` | **MVP** | Dystrybutor, Partner B2B | Sprawdź tradycję, stabilność i polskie korzenie firmy (od 1984 r.) | *„Zobacz możliwości produkcyjne”* |
| `/produkcja/` | **MVP** | Kupiec B2B, Właściciel marki własnej | Oceń elastyczność linii rozlewniczych i formaty opakowań (butelki – IBC) | *„Zapytaj o parametry produkcji”* |
| `/jakosc-i-certyfikaty/` | **MVP** | Audytor jakościowy, Manager zakupów | Zweryfikuj normy DIN EN ISO 9001 i 14001 oraz pobierz oficjalny certyfikat | *„Pobierz certyfikat ISO (PDF)”* |
| `/zgodnosc-i-dokumenty/` | **MVP** | Specjalista BHP, Inspektor sanitarny | Pobierz Karty Charakterystyki (KCh), pozwolenia biobójcze i deklaracje | *„Złóż wniosek o dokumentację”* |
| `/private-label/` | **MVP** | Właściciel marki Private Label, OEM | Zrozum proces produkcji kontraktowej i złóż brief wstępny | *„Przekaż brief marki własnej”* |
| `/kontakt/` | **MVP** | Wszyscy interesariusze | Skontaktuj się bezpośrednio z działem handlowym lub biurem | *„Wyślij zapytanie handlowe”* |
| `/polityka-prywatnosci/` | **MVP** | Wszyscy odwiedzający | Zapoznaj się z zasadami RODO, administratorem danych i prawami | *„Przejdź do formularza kontaktu”* |
| `/deklaracja-dostepnosci/` | **MVP** | Użytkownicy ze szczególnymi potrzebami | Sprawdź zgodność z WCAG 2.1 AA i zgłoś uwagi dot. dostępności | *„Zgłoś błąd dostępności cyfrowej”* |
| `/nagrody-i-wyroznienia/` | **Evidence-gated** | Kupiec sieciowy, Branża | Weryfikacja medali targowych MTP (publikowane wyłącznie po dostarczeniu dyplomów) | Omit w MVP dopóki brak dowodu |
| `404` (Error Page) | **MVP** | Użytkownik z błędnego linku | Sprawny powrót do kluczowych sekcji serwisu informacyjnego | *„Wróć na stronę główną”* |

---

## 2. Detailed Route Specifications

### Route 01: Strona Główna (`/`)
- **Buyer Purpose:** Wielowątkowa, spójna opowieść scrollytellingowa łącząca wiarygodność producenta, 40 lat tradycji, certyfikaty jakości, skalę technologiczną i bezpośrednie wejście do lejka B2B.
- **Narrative Chapters (8 sekcji):**
  1. `#start` (Hero): Mocny nagłówek Pragati Narrow, relacja EmiChem & JAX Professional, zdjęcie produktu/zakładu, natychmiastowy CTA do rozmowy.
  2. `#historia` (Tradycja 1984+): Pionowa oś czasu z kluczowymi kamieniami milowymi (1984, 1990, rozwój technologiczny).
  3. `#zastosowania` (Segmenty rynku): 6–8 kafelków branżowych (Auto, HoReCa, Przemysł, Medycyna, Edukacja, Dom) z bezpośrednimi linkami do sklepu `jax.com.pl`.
  4. `#produkcja` (Skala i możliwości): Linie rozlewnicze, elastyczność pojemności (500 ml do 1000L IBC), rygor technologiczny.
  5. `#jakosc` (Certyfikaty i normy): Karta certyfikatu TÜV SÜD ISO 9001/14001 z metadanymi i opcją pobrania, standardy BHP i biocydy.
  6. `#wspolpraca` (Private Label & B2B): Zarys 5 etapów wdrożenia marki własnej, elastyczne modele kooperacji.
  7. `#doswiadczenie` (Wiarygodność w liczbach i faktach): Rzetelne podsumowanie kompetencji laboratoryjnych i doradztwa technicznego (bez zmyślonych cytatów).
  8. `#kontakt` (Formularz centralny): Wybór tematu zapytania (B2B, Private Label, Dobór, Eksport), dane teleadresowe, dane rejestrowe.
- **Tied Claims:** C-01, C-02, C-03, C-06, C-07, C-08, C-09, C-10, C-11.
- **Asset Candidates:** `jax-pro-logo.png`, `jax-045.webp`, `catalog-cover.webp`, autentyczne zdjęcia formulacji i laboratorium z zasobów JAX.
- **SEO & Metadata:**
  - `Title`: *JAX Professional & EmiChem — Polski Producent Chemii Profesjonalnej od 1984 r.*
  - `Description`: *Oficjalny serwis informacyjny producenta chemii profesjonalnej EmiChem / JAX Professional. Ponad 40 lat doświadczenia, certyfikaty ISO 9001 i ISO 14001, produkcja kontraktowa i Private Label.*
  - `Canonical`: `https://info.jax.com.pl/`
  - `OpenGraph`: `og:title`, `og:description`, `og:image: /assets/catalog-cover.webp`, `og:type: website`.
- **Primary CTA:** Przycisk *„Porozmawiajmy o współpracy”* (płynny scroll do `#kontakt`) oraz wtórny *„Zobacz możliwości”* (scroll do `#produkcja`). W nagłówku link zewnętrzny *„Sklep internetowy”* (`https://jax.com.pl`).

---

### Route 02: O Firmie i Historia (`/historia/`)
- **Buyer Purpose:** Głębokie sprawdzenie korzeni przedsiębiorstwa przez audytorów sieci handlowych i partnerów szukających stabilnego podmiotu z własnym kapitałem.
- **Exact Content Blocks:**
  - Hero podstrony: *„40 lat konsekwentnego rozwoju w produkcji chemii użytkowej i przemysłowej”*.
  - Rozdział 1984: Powstanie Przedsiębiorstwa Produkcyjnego EmiChem w Poznaniu przez Michała Mierzwę.
  - Rozdział 1990: Rozbudowa bazy wytwórczej i unowocześnienie parku maszynowego w odpowiedzi na potrzeby polskiej transformacji gospodarczej.
  - Rozdział 2000+: Powstanie specjalistycznych linii JAX Professional (HoReCa) oraz JAX Professional Auto (motoryzacja).
  - Wartości operacyjne: Własne zaplecze laboratoryjne, stabilność dostaw, stała kontrola parametrów fizykochemicznych każdej partii.
- **Tied Claims:** C-01, C-02, C-11.
- **Asset Candidates:** Historyczne i archiwalne materiały fotograficzne EmiChem, logo JAX Professional, schemat osi czasu.
- **SEO & Metadata:**
  - `Title`: *Historia i Dziedzictwo — EmiChem & JAX Professional (od 1984 roku)*
  - `Description`: *Poznaj ponad 40 lat historii polskiego producenta chemii EmiChem. Od małego zakładu produkcyjnego z 1984 roku po nowoczesny park maszynowy i certyfikowane linie JAX.*
  - `Canonical`: `https://info.jax.com.pl/historia/`
- **Primary CTA:** *„Zobacz nasze możliwości produkcyjne”* (link do `/produkcja/`).

---

### Route 03: Produkcja i Technologia (`/produkcja/`)
- **Buyer Purpose:** Weryfikacja zdolności realizacyjnych dla dużych wolumenów handlowych oraz elastyczności pakowania.
- **Exact Content Blocks:**
  - Hero podstrony: *„Elastyczna produkcja chemiczna dopasowana do Twojej skali”*.
  - Linie konfekcjonowania i zakres formatów:
    - Formaty konsumenckie i detailingowe: butelki ze spryskiwaczem i nakrętką (500 ml, 750 ml, 1000 ml).
    - Formaty profesjonalne i warsztatowe: kanistry sztaplowane (5L, 10L, 20L).
    - Formaty przemysłowe: beczki polietylenowe 200L oraz paletopojemniki IBC 1000L.
  - Kontrola jakości w toku produkcji: kontrola gęstości, lepkości, pH, badania stabilności w komorach temperaturowych.
  - Bezpieczeństwo magazynowe: infrastruktura magazynowa przy ul. Głównej 30A w Poznaniu.
- **Tied Claims:** C-02, C-03, C-07.
- **Asset Candidates:** Zdjęcia palet, pojemników IBC, butelek JAX z atomizerem (np. `jax-045.webp`, `jax-108.webp`, `jax-115.webp`).
- **SEO & Metadata:**
  - `Title`: *Możliwości Produkcyjne i Konfekcjonowanie — EmiChem / JAX Professional*
  - `Description`: *Własne linie rozlewnicze, formulacje chemiczne, konfekcjonowanie od butelek 500 ml po kontenery IBC 1000L. Sprawdź możliwości zakładu produkcyjnego EmiChem w Poznaniu.*
  - `Canonical`: `https://info.jax.com.pl/produkcja/`
- **Primary CTA:** *„Skonsultuj wymagania technologiczne”* (przejście do `/kontakt/?temat=produkcja`).

---

### Route 04: Jakość i Certyfikaty (`/jakosc-i-certyfikaty/`)
- **Buyer Purpose:** Niezbędna formalna weryfikacja compliance dla działów controllingu jakości, bezpieczeństwa i audytu dostawców.
- **Exact Content Blocks:**
  - Hero podstrony: *„Zintegrowany System Zarządzania Jakością i Środowiskiem”*.
  - Blok Certyfikacji TÜV SÜD:
    - Prezentacja certyfikatu DIN EN ISO 9001:2015 i DIN EN ISO 14001:2015.
    - Jawne metadane: Nr rejestracyjny: `12 100/104 50928 TMS`, Zlecenie: `73431727`, Jednostka: TÜV SÜD Management Service GmbH.
    - Zakres certyfikacji: produkcja i sprzedaż chemii profesjonalnej, kosmetyków i preparatów biobójczych.
    - Okres ważności: do 9 czerwca 2027 r.
    - Bezpośredni przycisk pobrania oryginalnego pliku PDF certyfikatu.
  - Polityka Jakości i Ochrony Środowiska: redukcja odpadów, identyfikowalność partii surowcowych, zgodność z REACH/CLP.
  - Informacja o dostępności cyfrowej dokumentu (transkrypcja tekstowa treści certyfikatu dla czytników ekranu).
- **Tied Claims:** C-02, C-03, C-10.
- **Document Links:** Certyfikat ISO 9001 / 14001 (PDF, 192 KB).
- **SEO & Metadata:**
  - `Title`: *Certyfikaty DIN EN ISO 9001 i 14001 — Jakość EmiChem JAX*
  - `Description`: *Oficjalne certyfikaty TÜV SÜD Zintegrowanego Systemu Zarządzania Jakością (ISO 9001:2015) i Środowiskiem (ISO 14001:2015) firmy EmiChem. Sprawdź zakres i pobierz dokument.*
  - `Canonical`: `https://info.jax.com.pl/jakosc-i-certyfikaty/`
- **Primary CTA:** *„Pobierz certyfikat ISO (PDF)”* oraz wtórny *„Zapytaj o dokumentację techniczną”*.

---

### Route 05: Zgodność i Dokumentacja (`/zgodnosc-i-dokumenty/`)
- **Buyer Purpose:** Pozyskanie dokumentacji technicznej, kart charakterystyki (KCh/SDS) i atestów niezbędnych do legalnego stosowania chemii w obiektach użyteczności publicznej i zakładach pracy.
- **Exact Content Blocks:**
  - Hero podstrony: *„Dokumentacja Techniczna, Rejestry i Bezpieczeństwo Produktowe”*.
  - Sekcja Kart Charakterystyki (SDS / KCh): informacje o zgodności z rozporządzeniem REACH i CLP; procedura udostępniania aktualnych KCh dla odbiorców profesjonalnych.
  - Sekcja Preparatów Biobójczych:
    - Informacje o rejestracji w Wykazie Produktów Biobójczych URPL.
    - Wzmianka o JAX 34 PREMIUM (pozwolenie nr 4364/11).
    - Obowiązkowy komunikat prawny z Art. 72 BPR: *„Produktów biobójczych należy używać z zachowaniem środków ostrożności. Przed każdym użyciem należy przeczytać etykietę i informacje dotyczące produktu.”*
  - Katalogi Produktowe: oficjalny katalog JAX Professional Auto (PDF) oraz wykaz asortymentu chemii obiektowej.
  - Formularz wniosku o dokumenty archiwalne lub specjalistyczne atesty.
- **Tied Claims:** C-03, C-06, C-10.
- **Document Links:** Katalog JAX Auto (PDF, 1.77 MB), Certyfikat ISO (PDF, 192 KB).
- **SEO & Metadata:**
  - `Title`: *Dokumentacja, Karty Charakterystyki i Rejestry — JAX Professional*
  - `Description`: *Dostęp do kart charakterystyki (KCh/SDS), pozwoleń biobójczych URPL i katalogów technicznych produktów JAX Professional. Zgodność z REACH, CLP i normami BHP.*
  - `Canonical`: `https://info.jax.com.pl/zgodnosc-i-dokumenty/`
- **Primary CTA:** *„Pobierz oficjalny katalog JAX (PDF)”* oraz *„Złóż wniosek o KCh”*.

---

### Route 06: Marki Własne & Private Label (`/private-label/`)
- **Buyer Purpose:** Zrozumienie przez właścicieli marek i sieci handlowe, w jaki sposób EmiChem może wyprodukować chemię pod ich własną marką, oraz przekazanie założeń projektu.
- **Exact Content Blocks:**
  - Hero podstrony: *„Produkcja Kontraktowa Chemii pod Twoją Marką (Private Label)”*.
  - 5 kroków wdrożenia marki własnej:
    1. *Brief i analiza założeń:* określenie przeznaczenia, parametrów użytkowych, cech zapachowych i docelowej grupy cenowej.
    2. *Formulacja i badania:* dobór receptury bazowej lub opracowanie nowej, testy kompatybilności z butelką i atomizerem.
    3. *Regulacje i etykiety:* przygotowanie Karty Charakterystyki, zgłoszenie do portalu PCN/C津P, weryfikacja oznakowania CLP/GHS.
    4. *Partia pilotażowa:* rozlew partii wdrożeniowej, sprawdzenie szczelności zgrzewów i aplikacji etykiet.
    5. *Produkcja seryjna i logistyka:* powtarzalne dostawy, bufor surowcowy, elastyczne harmonogramy zamówień.
  - Zakres możliwości formatowych: małe serie testowe, pełny wybór zamknięć (trigger, flip-top, bezpieczna nakrętka), palety i kontenery IBC.
  - Dedykowany formularz przekazania założeń Private Label (z polami: branża, typ formulacji, preferowane opakowanie, szacowany wolumen).
- **Tied Claims:** C-01, C-03, C-07, C-08, C-10.
- **SEO & Metadata:**
  - `Title`: *Private Label & Produkcja Kontraktowa Chemii — EmiChem*
  - `Description`: *Kompleksowa produkcja marek własnych chemii gospodarczej i motoryzacyjnej. Od opracowania receptury i dokumentacji CLP, po seryjny rozlew i konfekcjonowanie.*
  - `Canonical`: `https://info.jax.com.pl/private-label/`
- **Primary CTA:** *„Wypełnij brief marki własnej”* (focus na formularz z predefiniowanym tematem `Private Label`).

---

### Route 07: Kontakt i Siedziba (`/kontakt/`)
- **Buyer Purpose:** Natychmiastowe nawiązanie kontaktu telefonicznego, mailowego lub przesłanie sformalizowanego zapytania ofertowego do właściwej osoby.
- **Exact Content Blocks:**
  - Hero podstrony: *„Skontaktuj się z producentem JAX Professional”*.
  - Rozróżnienie ról adresowych:
    - *Biuro handlowe, zamówienia i magazyn centralny:* ul. Główna 30A, 61-007 Poznań.
    - *Siedziba rejestrowa:* ul. Wójtowska 16, 61-609 Poznań.
  - Bezpośrednie kanały kontaktu: telefon do działu sprzedaży, dedykowany adres e-mail dla zapytań ofertowych i B2B.
  - Formularz kontaktowy B2B z polami: Temat zapytania, Imię i nazwisko, Firma, NIP/VAT, E-mail, Telefon, Treść zapytania, zgoda RODO.
  - Dostępność dojazdu: wskazówki logistyczne dla kierowców i dostawców (magazyn Główna 30A).
- **Tied Claims:** C-01, C-02.
- **SEO & Metadata:**
  - `Title`: *Kontakt i Dane Rejestrowe — EmiChem Michał Mierzwa / JAX*
  - `Description`: *Skontaktuj się z producentem chemii EmiChem JAX Professional. Dział handlowy, biuro obsługi klienta B2B, magazyn w Poznaniu. Dane rejestrowe i formularz zapytań.*
  - `Canonical`: `https://info.jax.com.pl/kontakt/`
- **Primary CTA:** *„Wyślij zapytanie handlowe”* (wysyłka formularza).

---

### Route 08: Polityka Prywatności i RODO (`/polityka-prywatnosci/`)
- **Buyer Purpose:** Prawna przejrzystość w zakresie przetwarzania danych osobowych zbieranych przez formularze kontaktowe i ewentualne pliki cookies.
- **Exact Content Blocks:**
  - Identyfikacja Administratora Danych: Michał Mierzwa EmiChem P.P., ul. Wójtowska 16, 61-609 Poznań.
  - Cele i podstawy prawne przetwarzania: obsługa zapytań handlowych i ofertowania (art. 6 ust. 1 lit. b oraz f RODO), realizacja obowiązków prawnych i archiwizacja (art. 6 ust. 1 lit. c RODO).
  - Odbiorcy danych: dostawcy infrastruktury serwerowej, podmioty obsługujące pocztę elektroniczną i systemy informatyczne.
  - Okres przechowywania: zapytania ofertowe przechowywane przez okres niezbędny do obsługi kontaktu (domyślnie 90 dni dla zapytań niezrealizowanych lub do przedawnienia roszczeń).
  - Prawa osoby, której dane dotyczą: prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania oraz wniesienia skargi do Prezesa UODO.
  - Informacja o plikach cookies i logach serwerowych (wyłącznie techniczne niezbędne do działania strony).
- **SEO & Metadata:**
  - `Title`: *Polityka Prywatności i Klauzula RODO — info.jax.com.pl*
  - `Description`: *Zasady przetwarzania danych osobowych i ochrony prywatności w serwisie info.jax.com.pl. Informacje o administratorze danych EmiChem i przysługujących prawach.*
  - `Canonical`: `https://info.jax.com.pl/polityka-prywatnosci/`
- **Primary Action:** Informacyjna; link powrotny do formularza kontaktu.

---

### Route 09: Deklaracja Dostępności (`/deklaracja-dostepnosci/`)
- **Buyer Purpose:** Informacja o standardzie dostępności cyfrowej strony dla osób z niepełnosprawnościami oraz kanał zgłaszania barier.
- **Exact Content Blocks:**
  - Status zgodności: Oświadczenie o dążeniu do pełnej zgodności ze standardem WCAG 2.1 na poziomie AA oraz wybranymi kryteriami WCAG 2.2 (rozmiar celów dotykowych, widoczność fokusu).
  - Data sporządzenia deklaracji: wrzesień 2026 r. (na podstawie samooceny technicznej i audytów zautomatyzowanych axe-core).
  - Udogodnienia techniczne: pełna obsługa za pomocą klawiatury, widoczne wskaźniki fokusu o wysokim kontraście, natywna struktura nagłówków i punktów orientacyjnych (landmarks), tryb redukcji ruchu (`prefers-reduced-motion`), czytelne etykiety formularzy.
  - Znane ograniczenia i alternatywy: skany niektórych starszych dokumentów mogą posiadać ograniczoną dostępność warstwy tekstowej – w takich przypadkach udostępniana jest transkrypcja lub bezpośredni kontakt telefoniczny/mailowy.
  - Dane kontaktowe do osoby odpowiedzialnej za dostępność cyfrową i procedury odwoławcze.
- **SEO & Metadata:**
  - `Title`: *Deklaracja Dostępności Cyfrowej (WCAG 2.1 AA) — info.jax.com.pl*
  - `Description`: *Deklaracja dostępności cyfrowej serwisu info.jax.com.pl zgodnie ze standardem WCAG 2.1 AA. Dowiedz się o wdrożonych udogodnieniach i zgłoś ewentualne uwagi.*
  - `Canonical`: `https://info.jax.com.pl/deklaracja-dostepnosci/`
- **Primary Action:** *„Skontaktuj się w sprawie dostępności”* (link mailowy / telefoniczny).

---

### Route 10: Nagrody i Wyróżnienia (`/nagrody-i-wyroznienia/`) — *Evidence-Gated*
- **Publication Status:** **Wstrzymana w MVP (Evidence-Gated).**
- **Condition for Publishing:** Opublikowanie tej podstrony nastąpi wyłącznie po przedstawieniu przez właściciela skanu oficjalnego dyplomu MTP 2017 dla JAX 44 lub potwierdzenia z archiwum MTP.
- **Fall-back in MVP:** Brak podstrony w nawigacji menu, brak linków wewnętrznych, brak wpisu w sitemap. Treść przygotowana w dokumentacji na wypadek dostarczenia dowodu.
- **Planned Blocks if Cleared:** Złoty Medal MTP 2017 (kategoria Innowacja dla preparatu JAX 44), Wyróżnienie MTP 2019 (dla JAX 42), skany dyplomów z opisem parametrów nagrodzonych produktów.

---

### Route 11: Strona Błędu 404 (`404.html`)
- **Buyer Purpose:** Eleganckie poinformowanie o braku zasobu i natychmiastowe przekierowanie uwagi na kluczowe sekcje biznesowe.
- **Exact Content Blocks:**
  - Duży nagłówek 404 w stylistyce Pragati Narrow.
  - Komunikat: *„Nie odnaleziono szukanej strony. Wybrany adres URL nie istnieje lub został przeniesiony.”*
  - Skrócona lista przydatnych ścieżek: Strona Główna, O Firmie, Możliwości Produkcyjne, Certyfikaty ISO, Kontakt B2B.
  - Bezpośredni link do sklepu internetowego `jax.com.pl`.
- **Response Code:** HTTP 404 (rzeczywisty kod błędu serwera na hostingu Cloudflare Pages / Vercel, brak przekierowania 302 na stronę główną).
- **Primary CTA:** *„Wróć do strony głównej”*.
