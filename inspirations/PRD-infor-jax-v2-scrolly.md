# PRD — Scrolly landing page „O firmie” EmiChem / JAX: infor.jax.com.pl

**Wersja dokumentu:** 2.0
**Data:** 11 września 2026
**Właściciel produktu:** Michał Mierzwa EmiChem P.P. / marka JAX Professional
**Zakres:** scrolly landing page „O firmie” + podstrony wspierające na subdomenie `infor.jax.com.pl`

---

## 1. Streszczenie wykonawcze

Celem projektu jest uruchomienie **jednej, głównej, długo przewijanej strony „O firmie” (scrolly landing page)** pod adresem `infor.jax.com.pl`, która w formie sekwencyjnej opowieści przedstawi historię EmiChem/JAX od 1984 r., skalę działalności, segmenty klientów, certyfikaty, nagrody i możliwości private label, kończąc się mocnym wezwaniem do działania B2B.

Obecnie narracja „O nas” jest ściśnięta w jednej podstronie sklepu Shoper, co nie obsługuje dobrze kupców sieci handlowych, partnerów eksportowych, klientów HoReCa/przemysłu ani właścicieli marek szukających private label. Subdomena pozwala oddzielić logikę sprzedażową sklepu (kategorie, koszyk) od logiki narracyjnej strony korporacyjnej, zachowując jednocześnie spójność brandu i przekierowania SEO.

Scrollytelling (scroll + storytelling) oznacza, że użytkownik **przewijając stronę**, odsłania kolejne rozdziały historii w zaplanowanej kolejności: hero → historia → segmenty → dowody jakości → nagrody → referencje → private label → CTA. Ruch ma służyć opowieści, a nie efektom samym w sobie, przy zachowaniu pełnej dostępności (WCAG 2.1 AA) i wysokiej wydajności (Core Web Vitals).

Najważniejsze ryzyko pozostaje bez zmian: wszystkie twierdzenia dotyczące certyfikatów, nagród (Złote Medale MTP, Gazele Biznesu), zgodności biocydów oraz PPWR muszą zostać **potwierdzone dokumentami** przed publikacją, zgodnie z sekcją 9 (blokada wydania).

---

## 2. Kontekst firmy — baza treści (skrót)

### 2.1 Tożsamość i historia

Działalność pod firmą MICHAŁ MIERZWA EMICHEM P.P. rozpoczęła się w 1984 roku; firma jest producentem środków utrzymania czystości dla gospodarstw domowych, motoryzacji i przemysłu. Źródła handlowe i bazy firm potwierdzają cztery kluczowe kamienie milowe: start w 1984 r., pozycję jednego z największych producentów zmywacza do paznokci w latach 80., rozbudowę zakładu po 1990 r. oraz rozwój portfolio JAX Professional dla segmentu profesjonalnego.

Firma wykorzystuje surowce i technologie z Niemiec, Holandii, Szwecji i Wielkiej Brytanii, co wzmacnia przekaz jakościowy i eksportowy w sekcjach „Produkcja” i „Rynki i eksport”.

### 2.2 Dane rejestrowe i lokalizacje

Pełna nazwa: Michał Mierzwa EmiChem P.P., NIP: PL7780022439, główny adres produkcyjny przy ul. Wójtowskiej 16 w Poznaniu, biuro handlowe i magazyn przy ul. Głównej 30A. W sieci występują różne adresy historyczne (np. Hawelańska 9), co wymaga ujednolicenia danych NAP na nowej stronie i w zewnętrznych wizytówkach.

### 2.3 Portfolio i skala

Marka JAX Professional obejmuje ponad 260–280 produktów, pokrywając segmenty: dom, HoReCa, przemysł, agro, medycyna i laboratoria, edukacja, gabinety urody i sport, piekarnie/cukiernie, firmy sprzątające oraz motoryzacja. Wybrane produkty dostępne są w szerokim zakresie opakowań, aż do 200 l i 1000 l, co jest kluczowe dla komunikacji z klientami przemysłowymi i private label.

Firma deklaruje możliwość produkcji „pod obcymi markami” (private label), co jest jednym z najważniejszych argumentów biznesowych dla osobnej sekcji i CTA na landing page.

### 2.4 Certyfikaty, zgodności i wyróżnienia

Na stronie firmowej wskazano wdrożony system jakości wg EN-ISO 9001:2015 oraz certyfikaty DIN ISO 9001:2015 i DIN ISO 14001:2015, natomiast część materiałów zewnętrznych podaje starsze wersje tych norm (ISO 9001:2000, ISO 14001:2004), co wymaga weryfikacji.

Potwierdzone wyróżnienia obejmują Złoty Medal MTP 2017 dla produktu JAX PROFESSIONAL 44 oraz obecność JAX PROFESSIONAL 42 na liście wyróżnionych w konkursie Złoty Medal MTP 2019 (HoReCa). Złoty Medal Grupy MTP jest jedną z najbardziej rozpoznawalnych nagród za innowacyjność produktów w Polsce, co czyni te wyróżnienia kluczowym elementem sekcji „Nagrody”.

Produkt JAX 34 posiada pozwolenie Ministra Zdrowia na obrót produktem biobójczym (nr 4364/11) oraz wyniki badań zgodne z szeregiem norm PN-EN dotyczących dezynfekcji, co wymaga odrębnej sekcji „Zgodność i dokumenty” oraz powiązania z Wykazem Produktów Biobójczych URPL.

---

## 3. Cele produktu i metryki — z naciskiem na scrolly landing

### 3.1 Cele biznesowe

1. Pozyskiwanie zapytań B2B (sieci handlowe, dystrybutorzy, HoReCa, przemysł) oraz zapytań private label z rynku krajowego i eksportowego.
2. Uwiarygodnienie EmiChem/JAX jako producenta z ponad 40-letnim dorobkiem, zdolnego obsłużyć zarówno FMCG, jak i przemysłowe wolumeny oraz marki własne.
3. Odciążenie sklepu jax.com.pl od treści korporacyjnych, przeniesienie narracji „O firmie” na osobną, narracyjną subdomenę, przy jednoczesnym wzmocnieniu konwersji z powrotem do sklepu.

### 3.2 Metryki dla landing page

| Metryka                              | Definicja                                                   | Cel (12 mies. od startu) |
|--------------------------------------|--------------------------------------------------------------|---------------------------|
| Zapytania ofertowe B2B              | Formularze „Zapytanie B2B” z landing page                   | ≥ 15/mies.               |
| Zapytania private label             | Formularz „Brief private label”                             | ≥ 4/mies.                |
| Scroll depth                        | Średni procent długości strony przewinięty przez użytkownika| ≥ 65% (desktop), ≥ 45% (mobile) |
| Udział użytkowników docierających do sekcji CTA | Odsetek sesji z wyświetleniem końcowego CTA           | ≥ 60% (desktop), ≥ 40% (mobile) |
| CTR hero CTA vs. CTA końcowe        | Porównanie kliknięć w przyciski na początku i końcu strony   | analiza + optymalizacja  |
| Pobrania materiałów                 | Katalog PDF + certyfikaty                                   | ≥ 150/mies.              |
| Jakość techniczna                   | LCP < 2,5 s, INP < 200 ms, CLS < 0,1 (p75)                  | 100% kluczowych szablonów |

Dodatkowe metryki scrollytelling (scroll depth, udział użytkowników docierających do CTA) wynikają z najlepszych praktyk projektowania stron narracyjnych, w których każda sekcja jest „rozdziałem” prowadzącym do końcowego działania.

---

## 4. Grupy docelowe i scenariusze użycia

| Persona                         | Cel wizyty                                  | Czego potrzebuje na landing page                        | Główne CTA                   |
|----------------------------------|----------------------------------------------|-----------------------------------------------------------|-------------------------------|
| Kupiec sieci handlowej/dyskontu | Ocena producenta przed listingiem           | Historia, moce produkcyjne, ISO, referencje sieci, formaty opakowań | „Zapytanie handlowe B2B”    |
| Importer / partner eksportowy   | Weryfikacja producenta z UE                 | wersja EN, doświadczenie eksportowe, CLP/biocydy, dokumenty | „Contact export dept.”      |
| Menedżer HoReCa / przemysł      | Dobór dostawcy profesjonalnego              | segmenty zastosowań, normy PN-EN, SDS, case’y wdrożeń   | „Poproś o dobór produktów”  |
| Właściciel marki (private label)| Znalezienie kontraktowego producenta        | jasna deklaracja private label, proces w 5 krokach, opakowania | „Brief private label”       |
| Kandydat do pracy               | Ocena pracodawcy                            | wielkość firmy, lokalizacje, kultura, link do „Kariera” | „Zobacz oferty pracy”       |
| Dziennikarz / instytucja        | Fakty i materiały                          | krótkie bio, dane rejestrowe, nagrody, link do press kit | „Pobierz press kit”         |

Landing page powinien w warstwie narracyjnej przede wszystkim obsłużyć pierwsze cztery persony (B2B, eksport, profesjonalne zastosowania, private label), podczas gdy kandydaci i media dostaną skrót plus wyraźne przejście na dedykowane podstrony.

---

## 5. Narracja scrolly i architektura informacji

### 5.1 Założenie nadrzędne

Strona główna `/` jest **centralnym doświadczeniem użytkownika**: sekwencyjną opowieścią typu scrollytelling „O firmie”, w której każda sekcja pełni rolę osobnego rozdziału, a przewijanie jest głównym mechanizmem eksploracji. Podstrony pełnią rolę hubów szczegółowych: historii rozszerzonej, dokumentów, karier, materiałów dla mediów.

Zgodnie z wytycznymi dla one-page i scrolly stron, każda główna sekcja powinna komunikować **jedną główną ideę** na pełną wysokość viewportu (ok. 1 ekran), przy zachowaniu prostego, top-bottom przepływu treści.

### 5.2 Struktura landing page `/` — rozdziały

Proponowana sekwencja (kolejność jest częścią strategii):

1. **Hero — „Produkujemy chemię od 1984 roku”**
   - pełnoekranowy hero z claimem, krótkim opisem (1–2 zdania), głównym CTA („Porozmawiajmy o współpracy B2B”) oraz dodatkowymi linkami do sklepu i katalogu produktów.
   - wizual: zakład + produkty, lekkie parallax lub wideo tła (opcjonalnie, przy zachowaniu wydajności).

2. **Historia — timeline w skrócie**
   - oś czasu z 4–6 punktami (1984, lata 80., 1990, wejście JAX Professional, eksport), każdy w osobnej „step sekcji” przy scrollu.
   - CTA: „Zobacz pełną historię” → `/historia/`.

3. **Kim jesteśmy dziś — skala i segmenty**
   - sekcja z liczbami (lata na rynku, liczba produktów, liczba segmentów, formaty opakowań) + siatka segmentów (dom, HoReCa, przemysł, agro, medycyna, edukacja, auto itd.).
   - krótki tekst podsumowujący: „Od lidera zmywacza do paznokci do kompleksowej chemii gospodarczej i profesjonalnej”.

4. **Produkcja i moce — „Ludzie i technologia”**
   - naprzemienne bloki tekst/obraz: zakład, linie produkcyjne, magazyny, surowce z DE/NL/SE/UK, zakres pojemności do 200/1000 l.
   - CTA: „Zobacz szczegóły produkcji” → `/produkcja/`.

5. **Jakość i certyfikaty**
   - sekcja z logotypami ISO + krótkie „co to znaczy dla Ciebie”: stała jakość, audyty sieci, zgodność środowiskowa.
   - link do pobrania certyfikatów i polityki jakości; CTA: „Pobierz certyfikaty” → repo dokumentów.

6. **Zgodność i bezpieczeństwo**
   - blok o CLP, kartach charakterystyki, produktach biobójczych (np. JAX 34), gotowości PPWR; tekst zrozumiały dla menedżera jakości.
   - CTA: „Sprawdź dokumenty bezpieczeństwa” → `/zgodnosc-i-dokumenty/`.

7. **Nagrody i wyróżnienia**
   - siatka/slider kart prezentujących Złote Medale MTP (2017, 2019) i inne wyróżnienia, z krótką historią kontekstu; zdjęcia statuetek/dyplomów.
   - CTA: „Zobacz wszystkie nagrody” → `/nagrody-i-wyroznienia/`.

8. **Private label — „Budujemy też Twoje marki”**
   - opis procesu w 5 krokach (brief → R&D → dokumentacja/etykieta → pilot → produkcja), mocno podkreślony zakres opakowań i doświadczenie sieciowe.
   - formularz „Brief private label” jako wbudowany element landing page (sekcja z formularzem) + osobna podstrona `/private-label/`.

9. **Referencje i klienci B2B**
   - opis odbiorców (sieci handlowe, cash&carry, stacje paliw) z logotypami za zgodą lub opisem słownym; 2–3 krótkie cytaty/case’y.
   - CTA: „Sprawdź przykładowe wdrożenia” (opcjonalnie do future case studies).

10. **Kontakt i „Co dalej?”**
    - finalna sekcja z głównym CTA („Porozmawiajmy o współpracy”), dodatkowymi ścieżkami (pobierz katalog, przejdź do sklepu, kontakt dział handlowy/eksport) i prostym formularzem.

Zgodnie z dobrymi praktykami, każdy z powyższych rozdziałów powinien zajmować **co najmniej wysokość viewportu** (ok. 100vh) i koncentrować się na jednej idei, aby użytkownik widział „jedną scenę naraz”.

### 5.3 Podstrony wspierające

Struktura serwisu (uaktualniona):

```
infor.jax.com.pl/
├── /                       — scrolly landing „O firmie”
├── /historia/              — pełny timeline + zdjęcia
├── /produkcja/             — szczegóły zakładu, technologii, formatów opakowań
├── /jakosc-i-certyfikaty/  — polityka jakości, certyfikaty, repo plików
├── /zgodnosc-i-dokumenty/  — CLP, SDS, biocydy, PPWR, BDO/EPR
├── /nagrody-i-wyroznienia/ — pełna lista nagród + skany dyplomów
├── /marki/                 — JAX Professional, JAX Auto, Clarjax, Flame
├── /rynki-i-eksport/       — rynki, model współpracy, rola opakowań/PPWR
├── /private-label/         — rozwinięcie procesu, FAQ, brief
├── /dla-biznesu/           — segmenty zastosowań, ścieżki zakupowe
├── /kariera/
├── /dla-mediow/            — press kit, logotypy, materiały
├── /kontakt/
├── /en/                    — mirror EN (v1.1)
└── /deklaracja-dostepnosci/
```

Mapa jest zgodna z pierwotnym PRD, ale jasno akcentuje landing page jako **oś narracyjną**, a podstrony jako „przedłużenie” w głąb tematu.

---

## 6. Wymagania funkcjonalne

### 6.1 Funkcjonalności ogólne

| ID  | Wymaganie                                                                                   | Priorytet |
|-----|-----------------------------------------------------------------------------------------------|-----------|
| F-01 | Strona statyczna/JAMstack, 14–16 podstron, treści w CMS headless lub plikach Markdown     | Must      |
| F-02 | Formularz „Zapytanie handlowe B2B” (firma, NIP, kraj, segment, wolumen, opis, kontakt)    | Must      |
| F-03 | Formularz „Brief private label” z możliwością uploadu pliku (do 20 MB)                    | Must      |
| F-04 | Repozytorium dokumentów (certyfikaty, katalogi, press kit) z licznikiem pobrań            | Must      |
| F-05 | Wyszukiwarka dokumentów po nazwie produktu (indeks SDS)                                   | Should    |
| F-06 | Linkowanie do sklepu jax.com.pl (kategorie, produkty) z parametrami UTM                   | Must      |
| F-07 | Wersja EN (`/en/`) z hreflang i synchronizacją treści                                     | Should    |
| F-08 | Timeline historii z leniwym ładowaniem obrazów (lazy loading)                            | Should    |
| F-09 | Mapa lokalizacji (produkcja + biuro), jako statyczna grafika + link do mapy               | Should    |
| F-10 | Newsroom / aktualności (nagrody, targi, certyfikaty)                                      | Could     |
| F-11 | Integracja n8n: webhook z formularzy do CRM/arkusza + powiadomienia                       | Should    |
| F-12 | Baner „Sklep” prowadzący do koszyka jax.com.pl                                             | Must      |

### 6.2 Funkcjonalności specyficzne dla scrollytelling

| ID   | Wymaganie                                                                                                              | Priorytet |
|------|--------------------------------------------------------------------------------------------------------------------------|-----------|
| F-13 | Każda główna sekcja landing page posiada unikalny **anchor ID** (np. `#historia`, `#private-label`) wykorzystywany w nawigacji i do smooth scroll | Must      |
| F-14 | Wdrożone są **scroll-triggered animacje** (fade-in, slide-in) dla kluczowych elementów, z zachowaniem wydajności i możliwości wyłączenia motion (prefers-reduced-motion) | Should    |
| F-15 | Opcjonalny **pasek postępu scrolla** lub wskaźnik „rozdziałów” na krawędzi ekranu sygnalizujący pozycję w historii      | Could     |
| F-16 | Dla sekcji „Liczby” zastosowany jest lekki, dostępny licznik animowany przy wejściu sekcji w viewport                   | Should    |
| F-17 | Wszystkie interakcje scrollytelling degradowane są do prostego, statycznego artykułu przy wyłączonych animacjach/JS   | Must      |

Wymagania F-13–F-17 wynikają z rekomendacji, aby budować scrollytelling jako **progresywne ulepszenie**: najpierw pełna, czytelna treść, potem animacje i pinning, przy zachowaniu wydajności i dostępności.

---

## 7. Wymagania niefunkcjonalne

### 7.1 Dostępność (WCAG 2.1 AA)

Ustawa o dostępności cyfrowej (implementująca European Accessibility Act) wymaga zgodności z WCAG 2.1 AA dla e-commerce i usług online, przy czym mikroprzedsiębiorstwa są częściowo zwolnione, ale EmiChem (11–50 pracowników) najprawdopodobniej nie kwalifikuje się jako mikro.

Wymagania szczegółowe:

- Kontrast tekstu min. 4,5:1 (tekst standardowy) i 3:1 (duży tekst).
- Pełna obsługa klawiaturą, logiczna struktura nagłówków (H1 → H2 → H3), czytelne etykiety i opisy pól formularzy.
- Alternatywne teksty dla obrazów, w tym opis treści certyfikatów i nagród.
- Deklaracja dostępności jako osobna podstrona `/deklaracja-dostepnosci/`.
- Animacje i efekty scrollytelling respektują `prefers-reduced-motion` (statyczna wersja strony).

### 7.2 Wydajność (Core Web Vitals)

Docelowe parametry:

- LCP < 2,5 s, INP < 200 ms, CLS < 0,1 (percentyl 75) dla mobilnych.
- Optymalizacja zasobów: obrazy WebP/AVIF, lazy loading sekcji poniżej fold-a, kompresja JS i CSS, fonty self-hosted z `font-display: swap`.
- Minimalizacja ciężkich bibliotek JS, preferencja dla CSS `position: sticky` i IntersectionObserver zamiast masywnych frameworków animacyjnych.

### 7.3 UI/UX — specyfika long-scroll

- **Mobile-first**: layout sekcji projektowany najpierw dla małych ekranów, potem skalowany na desktop, co jest standardem przy stronach narracyjnych.
- Jedna kolumna tekstu (600–720 px szerokości na desktop) z pełnoekranowymi wizualami przełamującymi narrację, aby utrzymać komfort czytania.
- Maksymalnie dwa fonty (nagłówkowy + tekstowy), spójne rozmiary i odstępy między sekcjami; kolor CTA wyraźnie odróżniony od tła.
- Animacje wykorzystywane wyłącznie tam, gdzie podkreślają kluczowe punkty narracji (timeline, liczby, nagrody), a nie jako dekoracja.

### 7.4 Bezpieczeństwo i prywatność

- HTTPS, HSTS, podstawowe nagłówki bezpieczeństwa (CSP, X-Frame-Options, X-Content-Type-Options).
- Formularze zabezpieczone przed spamem (honeypot, ograniczenia liczby zapytań), bez rozwiązań utrudniających dostępność (np. agresywne CAPTCHA).
- Spójna polityka prywatności i cookies z modelem stosowanym na jax.com.pl, rozdzielenie zgód analitycznych/marketingowych.

---

## 8. Wymagania techniczne

### 8.1 Konfiguracja domeny

Subdomena `infor.jax.com.pl` tworzona w panelu Shoper lub na DNS (np. Cloudflare) poprzez rekord A/CNAME wskazujący na serwer hostujący stronę statyczną; Shoper wspiera scenariusz, w którym subdomena kieruje do niezależnej strony firmowej lub bloga.

Rekomendacja: DNS prowadzony w Cloudflare, `infor` jako A/CNAME na serwer aplikacji, wymuszony HTTPS, przekierowanie 301 z `www.infor` na `infor`.

### 8.2 SEO i relacja z jax.com.pl

- Osobna własność w Google Search Console, własny sitemap i robots.
- Kanoniczne przekierowanie 301 ze starego `jax.com.pl/o-nas` na `infor.jax.com.pl/` po migracji treści, aby uniknąć duplikacji narracji.
- System linkowania wewnętrznego: z landing page do kluczowych kategorii sklepu oraz odwrotnie z sklepu do `infor.jax.com.pl`, szczególnie z sekcji „O firmie” i „Dla biznesu”.
- Dane strukturalne `Organization` (foundingDate 1984, taxID, adresy, contactPoint), `award` (Złote Medale MTP), breadcrumbs dla podstron.

### 8.3 Analityka i integracje

- Google Tag Manager dla subdomeny z cross-domain tracking pomiędzy `infor.jax.com.pl` i `jax.com.pl`.
- Zdarzenia: `form_submit_b2b`, `form_submit_private_label`, `download_certificate`, `download_catalog`, `click_to_shop`, `scroll_depth`, `reach_final_cta`.
- Webhooki n8n z formularzy do CRM/arkuszy + powiadomienia dla działu handlowego/eksportu.

---

## 9. Weryfikacja treści przed publikacją (blokada wydania)

Tabela elementów wymagających twardych dowodów (niepublikowanie bez dokumentu):

| Twierdzenie                        | Stan źródeł                                             | Wymagany dowód                                         |
|--------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|
| ISO 9001:2015                      | deklarowane na stronie, starsza wersja w materiałach    | skan aktualnego certyfikatu z numerem, zakresem, datą |
| ISO 14001:2015                     | jak wyżej                                              | jak wyżej                                             |
| Gazele Biznesu                     | wzmianka w materiałach partnerów, brak na stronie      | dyplom + rok edycji / oficjalny wpis                  |
| Złoty Medal MTP 2019 (JAX 42)      | lista wyróżnionych, brak skanu na stronie               | dyplom, rozstrzygnięcie statusu (medal/nominacja)     |
| Złoty Medal MTP 2017 (JAX 44)      | informacja u dystrybutora                               | dyplom                                                |
| Pozwolenie biobójcze 4364/11 (JAX 34) | dane w opisach produktów                               | aktualny status w Wykazie Produktów Biobójczych URPL  |
| Lista odbiorców (Carrefour, Rossmann, BP itd.) | strona firmowa, katalog Selgros potwierdza EmiChem jako producenta | zgody na użycie znaków towarowych                     |
| Zgodność PPWR                      | brak publicznych deklaracji                             | dokumentacja techniczna opakowań, deklaracje zgodności |

Zasada: brak dokumentu = komunikacja opisowa bez twardych liczb/tytułów (np. „wieloletnie doświadczenie eksportowe” zamiast procentów udziału eksportu).

---

## 10. Harmonogram i zakres wersji

| Faza | Zakres                                                                                                       | Czas    |
|------|------------------------------------------------------------------------------------------------------------------|---------|
| 0    | Zebranie certyfikatów, dyplomów, zgód na logotypy, zdjęć zakładu, weryfikacja tabeli z sekcji 9              | 2 tyg.  |
| 1.0  | **Landing page `/` jako kompletna scrolly historia + podstrony: historia, produkcja, jakość, zgodność, nagrody, kontakt, deklaracja dostępności; formularze B2B/private label; DNS + SSL** | 4 tyg.  |
| 1.1  | Wersja EN, podstrony: rynki i eksport, dla biznesu (segmenty), kariera, dla mediów, wyszukiwarka dokumentów | 3 tyg.  |
| 1.2  | Newsroom, sesja zdjęciowa produkcji, audyt WCAG przez podmiot zewnętrzny, optymalizacja CWV                  | 3 tyg.  |

Kryteria wyjścia z fazy 1.0:

- Wszystkie newralgiczne twierdzenia z sekcji 9 potwierdzone lub skorygowane.
- Landing page `/` z pełną narracją scrolly, działającą w trybie motion-on oraz motion-off (prefers-reduced-motion).
- Audyt dostępności wewnętrzny bez błędów krytycznych, docelowo audyt zewnętrzny w fazie 1.2.
- CWV w „zieleni” (LCP, INP, CLS) na szablonach: landing, podstrona treści, podstrona dokumentów.

---

## 11. Ryzyka

Najważniejsze ryzyka pozostają zgodne z wersją 1.0 PRD, ale z dodatkowymi akcentami dla scrolly:

- **Ryzyko publikacji nieaktualnych danych certyfikatów/nagród** — wysokie; mitigacja: blokada wydania do czasu zebrania skanów i weryfikacji.
- **Przeciążenie strony animacjami** — ryzyko wydajnościowe i dostępności; mitigacja: ograniczenie animacji do kilku kluczowych sekcji, testy `prefers-reduced-motion`, profilowanie CWV.
- **Rozmycie SEO między subdomeną a sklepem** — średnie; mitigacja: jedna kanoniczna narracja „O firmie”, 301 ze starego URL, konsekwentne linkowanie.
- **Nieprzygotowanie komunikacji PPWR przed audytami klientów** — średnie; mitigacja: ostrożna, rzetelna sekcja „Zgodność opakowaniowa” bez nadmiernych deklaracji.
- **Nadmierna długość landing page bez wyraźnego CTA** — średnie; mitigacja: maks. 8–10 głównych „rozdziałów”, każdy kończy się mini-CTA, a strona zamyka się jednym, mocnym wezwaniem do działania.

---

## 12. Wnioski

Wersja 2.0 PRD formalizuje, że **produktem UX jest przede wszystkim scrolly landing page „O firmie”** na `infor.jax.com.pl`, wspierany przez zestaw podstron dokumentacyjnych i tematycznych. Wszystkie dotychczasowe atuty EmiChem/JAX — rok 1984, szerokość segmentowa, formaty opakowań, systemy jakości, nagrody MTP, biocydy, doświadczenie eksportowe i private label — mają zostać przepisane na język jednej, płynnej opowieści z jasno zaprojektowaną ścieżką do kontaktu B2B.

Scrollytelling wymusza dyscyplinę narracyjną (jedna idea na sekcję, jasna kolejność, mocny finał), co przy dobrze zebranym materiale faktograficznym EmiChem może dać stronie „O firmie” efekt realnego wyróżnika w branży chemii gospodarczej i profesjonalnej.
