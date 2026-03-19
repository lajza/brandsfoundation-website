# GUIDE: Strona WWW Brands Foundation w Lovable

**Cel:** Informacyjny landing page fundacji — budujący wiarygodność, wyjaśniający misję i zachęcający do kontaktu.
**Język strony:** polski
**Ton:** partnerski, konkretny, ciepły, bez żargonu agencyjnego

---

## 1. DESIGN SYSTEM — ustawienia w Lovable

### 1.1. Paleta kolorów

| Rola | Kolor | HEX | Zastosowanie |
|---|---|---|---|
| **Background primary** | Biały | `#FFFFFF` | Główne tło sekcji |
| **Background warm** | Jasny beż | `#EDE9E6` | Alternatywne tło sekcji (co druga sekcja) |
| **Background muted** | Ciepły szary | `#D2D0CB` | Tło kart, bloków cytatów |
| **Text primary** | Czarny/ciemny grafitowy | `#1A1A1A` | Nagłówki, tekst główny |
| **Text secondary** | Szary ciepły | `#A69C95` | Podpisy, tekst pomocniczy, meta |
| **Accent green** | Zieleń | `#45C44B` | Akcenty, przyciski CTA, ikony sukcesu |
| **Accent green dark** | Ciemna zieleń | `#2EAE34` | Hover na przyciskach, linki |
| **Accent blue** | Niebieski | `#4C64FF` | Drugorzędne akcenty, tagi, elementy dekoracyjne |
| **Accent blue dark** | Ciemny niebieski | `#2944F0` | Hover niebieski |
| **Surface dark** | Czarny | `#1A1A1A` | Sekcja hero (opcjonalnie), footer, ciemne bloki |
| **Surface muted** | Beż ciemniejszy | `#D7D3D0` | Hover na kartach, bordery |

### 1.2. Typografia

| Element | Font | Styl | Rozmiar (desktop) | Uwagi |
|---|---|---|---|---|
| **H1 (hero)** | **Playfair Display** | Bold Italic | 56–72px | Zamiennik Silesianum — serif z charakterem. Silesianum nie jest dostępny w Google Fonts, Playfair Display jest najbliższym substytutem: elegancki serif z wyrazistymi kontrastami kresek. |
| **H2 (sekcje)** | **Playfair Display** | Bold | 36–48px | — |
| **H3 (karty, podsekcje)** | **Playfair Display** | SemiBold | 24–30px | — |
| **Body text** | **Inter** | Regular (400) | 16–18px | Dostępny w Google Fonts — zgodny z brandbookiem |
| **Body bold** | **Inter** | SemiBold (600) | 16–18px | Wyróżnienia w tekście |
| **Captions / meta** | **Inter** | Regular (400) | 13–14px | Kolor: `#A69C95` |
| **Buttony** | **Inter** | Medium (500) | 15–16px | Uppercase z lekkim letter-spacing (0.5–1px) |
| **Nav links** | **Inter** | Medium (500) | 15px | — |
| **Logo text** | **Playfair Display** | Bold | — | "Brands" bold serif + "FOUNDATION" uppercase Inter |

> **WAŻNE:** Font Silesianum (zaprojektowany przez Machalskiego) jest niestandardowy i niedostępny publicznie. W Lovable użyj **Playfair Display** jako zamiennika dla nagłówków — ma podobny charakter (klasyczny serif z nowoczesnym twistem, wyraziste kontrasty). Jeśli uda się zdobyć plik .woff2 Silesianum, można go załadować przez custom CSS w Lovable.

### 1.3. Spacing & Layout

- **Max-width kontentu:** 1200px, wycentrowany
- **Padding sekcji:** 80–120px góra/dół (desktop), 48–64px (mobile)
- **Padding boczny:** 24px (mobile), 48px (tablet), 64–80px (desktop)
- **Gap między elementami:** 24–32px
- **Border radius:** 0px (karty i przyciski — czysty, współczesny styl) lub max 4px
- **Styl:** minimalistyczny, dużo białej przestrzeni, typografia jako główny element wizualny

### 1.4. Przyciski

| Typ | Styl | Przykład |
|---|---|---|
| **Primary CTA** | Tło `#45C44B`, tekst `#FFFFFF`, hover → `#2EAE34` | "Porozmawiajmy" |
| **Secondary CTA** | Tło transparent, border `#1A1A1A` 1px, tekst `#1A1A1A`, hover → tło `#1A1A1A` + tekst biały | "Dowiedz się więcej" |
| **Ghost / text link** | Tekst `#1A1A1A` z underline, hover → `#2EAE34` | "Zobacz program →" |

### 1.5. Ikonografia

- Styl: line icons, stroke 1.5–2px
- Biblioteka: Lucide Icons (domyślna w Lovable/shadcn)
- Kolor ikon: `#1A1A1A` lub `#A69C95`

---

## 2. STRUKTURA STRONY — sekcje od góry

### 2.1. NAWIGACJA (sticky top)

**Tło:** `#FFFFFF` z subtelnym cieniem na scroll (shadow-sm)
**Układ:** Logo (lewo) | Linki (środek/prawo) | CTA button (prawo)

Elementy nawigacji:
- **Logo:** "Brands FOUNDATION" — użyj pliku SVG (`logo_black.svg`)
- **Linki:** `O fundacji` · `Co robimy` · `Dla kogo` · `Kontakt`
- **CTA:** przycisk "Porozmawiajmy" (primary green)

Mobile: hamburger menu z pełnoekranowym overlay.

---

### 2.2. SEKCJA HERO

**Tło:** `#FFFFFF` lub `#EDE9E6`
**Układ:** Pełna szerokość, tekst wycentrowany lub lewo-wyrównany z dużym zdjęciem po prawej

**Treść:**

```
[H1, Playfair Display Bold Italic]
Silne marki na Śląsku
budują silną markę Śląska.

[Body, Inter Regular, max-width 600px]
Śląsk przez dekady był kojarzony z ciężką pracą.
Dziś chcemy, by był kojarzony również z silnymi,
nowoczesnymi markami, które mają znaczenie
w Polsce i Europie.

[CTA Primary]  Porozmawiajmy
[CTA Secondary]  Dowiedz się więcej ↓
```

**Zdjęcie:** Autentyczne zdjęcie z warsztatu/spotkania (jak w brandbooku — ludzie przy pracy, nie stock). Placeholder: zdjęcie z wydarzenia brandingowego.

---

### 2.3. SEKCJA "PROBLEM" (social proof / kontekst)

**Tło:** `#1A1A1A` (ciemna sekcja)
**Tekst:** biały
**Cel:** Nazwać problem — krótko i bezpośrednio

```
[H2, Playfair Display, biały]
Większość śląskich MŚP konkuruje ceną,
bo nie ma marki, która by je wyróżniała.

[Body, Inter, #A69C95]
Chaos w komunikacji kosztuje klientów. Brak strategii marki
oznacza utracone talenty i przegrane przetargi. A najgorsze?
Większość firm nie wie, ile ich to kosztuje.
```

Opcjonalnie: 3 małe statystyki w jednym wierszu:
```
[Liczba]  72%        [Liczba]  3x         [Liczba]  40%
[Label]   MŚP bez    [Label]   wyższy     [Label]   wzrost zapytań
          strategii             koszt                 po programie
          marki                 pozyskania            pilotażowym
                                klienta
```

---

### 2.4. SEKCJA "O FUNDACJI"

**Tło:** `#FFFFFF`
**Układ:** tekst lewo (60%) + zdjęcie prawo (40%)

```
[Overline, Inter Medium, #A69C95, uppercase, letter-spacing 2px]
O FUNDACJI

[H2, Playfair Display Bold]
Jesteśmy stąd.
Tu budujemy.

[Body, Inter Regular]
Brands Foundation to fundacja, która wzmacnia śląskie firmy
w budowaniu silnych, konkurencyjnych marek. Nie jesteśmy agencją.
Nie pracujemy dla firm — pracujemy z nimi. Razem.

Łączymy edukację, konsulting strategiczny i realne wsparcie
w transformacji marki. Działamy w partnerstwie z instytucjami
regionalnymi — RIG, KSSE, GZM — bo wierzymy, że silne marki
na Śląsku budują silną markę całego regionu.

[CTA Ghost]  Poznaj nasz zespół →
```

---

### 2.5. SEKCJA "CO ROBIMY" (Programy i usługi)

**Tło:** `#EDE9E6`
**Układ:** nagłówek + siatka 3 kart

```
[H2, Playfair Display Bold]
Co robimy

[Podtytuł, Inter, #A69C95]
Konkretne programy z mierzalnymi efektami.
Żadnego "zobaczymy".
```

**3 karty** (tło `#FFFFFF`, padding 32px, bez border-radius lub max 4px):

**Karta 1: Program Transformacji Marki**
```
[Ikona: Lucide "Sparkles" lub "Target"]
[H3] Program Transformacji Marki
[Body] Flagowy program fundacji. Kompleksowe wsparcie
w budowaniu strategii marki — od audytu, przez warsztat
strategiczny, po wdrożenie. Subsydiowany dla śląskich MŚP.
[Meta] 3–6 miesięcy · dla firm 10–150 pracowników
```

**Karta 2: Warsztaty i edukacja**
```
[Ikona: Lucide "GraduationCap"]
[H3] Warsztaty i edukacja
[Body] Webinary eksperckie, śniadania brandingowe, szkolenia.
Praktyczna wiedza o marce — bez żargonu, z konkretnymi
narzędziami do wdrożenia następnego dnia.
[Meta] Webinary 1x/miesiąc · Śniadania 1x/kwartał
```

**Karta 3: Konsulting 1:1**
```
[Ikona: Lucide "Users"]
[H3] Konsulting 1:1
[Body] Brand manager na żądanie. Audyt marki, quick-start
w 30 dni, playbooki i frameworki. Dla firm, które potrzebują
szybkiego, konkretnego wsparcia.
[Meta] Pierwsze efekty w 30 dni
```

---

### 2.6. SEKCJA "DLA KOGO" (3 grupy odbiorców)

**Tło:** `#FFFFFF`
**Układ:** nagłówek + 3 bloki w kolumnie (lub tabs/accordion)

```
[H2, Playfair Display Bold]
Dla kogo działamy

[Podtytuł]
Jeden ekosystem. Trzy perspektywy.
```

**Blok 1: Dla śląskich firm (MŚP)**
```
[H3] Dla śląskich firm
[Body] Rozumiemy śląski kontekst. Działamy razem, nie dla Was.
Marka to nie koszt — to inwestycja, która się zwraca
w klientach i talentach.

• Strategia marki i uporządkowana komunikacja
• Wyróżnienie na tle konkurencji
• Employer branding — przyciąganie talentów
• Konkretne narzędzia i plan wdrożenia

[CTA] Sprawdź program dla firm →
```

**Blok 2: Dla sponsorów i inwestorów**
```
[H3] Dla sponsorów i inwestorów
[Body] Gotowy format CSR z gwarantowaną jakością
i konkretnymi liczbami do raportu ESG. Tytuł Mecenasa
Śląskiej Marki to wyróżnienie z realną wartością,
nie podziękowanie za przelew.

• Autentyczne CSR z mierzalnym wpływem
• Dostęp do wyselekcjonowanej sieci B2B
• Gotowe dane do raportów ESG
• Prestiż i rozpoznawalność w regionie

[CTA] Zostań mecenasem →
```

**Blok 3: Dla partnerów instytucjonalnych**
```
[H3] Dla partnerów instytucjonalnych
[Body] Fundacja to filtr jakości i maszyna do produkcji KPI.
Wy finansujecie efekty, nie proces. Przejmujemy rekrutację,
weryfikację i komunikację — oszczędność Waszych zasobów.

• Twarde KPI i gotowe success stories
• Bezpośredni dostęp do firm rodzinnych
• Odciążenie kadr instytucji
• Raport "Marki Śląska" jako wspólna publikacja

[CTA] Porozmawiajmy o współpracy →
```

---

### 2.7. SEKCJA "DLACZEGO MY" (wyróżniki)

**Tło:** `#EDE9E6`
**Układ:** 4 elementy w siatce 2x2

```
[H2, Playfair Display Bold]
Dlaczego Brands Foundation

[Grid 2x2, każdy element: ikona + H3 + krótki opis]

1. [Ikona: MapPin]
   Stąd jesteśmy
   Znamy Śląsk, bo tu się urodziliśmy, wychowaliśmy
   i pracujemy. To nie jest projekt z zewnątrz.

2. [Ikona: Handshake]
   Partnerstwo, nie usługa
   Nie jesteśmy agencją. Nie pracujemy dla firm —
   pracujemy z nimi. Razem.

3. [Ikona: BarChart3]
   Konkret, nie obietnice
   Każde działanie ma jasny cel, mierzalny efekt
   i plan wdrożenia.

4. [Ikona: Network]
   Ekosystem, nie jednorazowa akcja
   Budujemy coś trwałego — społeczność, w której firmy
   uczą się od siebie, wspierają i razem rosną.
```

---

### 2.8. SEKCJA "PARTNERZY" (logos / social proof)

**Tło:** `#FFFFFF`
**Układ:** Nagłówek + rząd logotypów partnerów

```
[Overline] PARTNERZY I WSPÓŁPRACA
[Logotypy:] RIG · KSSE · GZM · Miasto Katowice
```

Logotypy w grayscale, hover → kolor. Jeśli nie ma jeszcze logotypów — użyj placeholderów z nazwami instytucji w stylizowanym tekście.

---

### 2.9. SEKCJA CTA / KONTAKT

**Tło:** `#1A1A1A`
**Tekst:** biały
**Układ:** wycentrowany

```
[H2, Playfair Display Bold Italic, biały]
Porozmawiajmy.
30 minut, zero zobowiązań.

[Body, Inter, #A69C95]
Opowiedz nam o swojej firmie. Powiemy Ci szczerze,
czy i jak możemy pomóc.

[CTA Primary, duży]  Umów rozmowę
[CTA Ghost, biały]   kontakt@brandsfoundation.com
```

---

### 2.10. FOOTER

**Tło:** `#1A1A1A`
**Tekst:** `#A69C95`, linki biały na hover

```
[Logo biały]  Brands FOUNDATION

[Kolumna 1: Nawigacja]     [Kolumna 2: Kontakt]        [Kolumna 3: Social]
O fundacji                  kontakt@brandsfoundation.com LinkedIn
Co robimy                   Katowice, Śląsk             YouTube
Dla kogo
Kontakt

[Separator linia]

[Copyright] © 2026 Brands Foundation — Fundacja Marki Śląskie
[Small] Budujemy marki. Wzmacniamy Śląsk.
```

---

## 3. WYTYCZNE COPYWRITINGOWE DLA LOVABLE

### 3.1. Zasady ogólne

| Reguła | Tak | Nie |
|---|---|---|
| Prosty język | "Pomagamy śląskim firmom budować marki" | "Realizujemy kompleksowe programy transformacji" |
| Konkret | "3 firmy z pilotażu zwiększyły zapytania o 40%" | "Pomagamy firmom rosnąć" |
| "My" i "razem" | "Zróbmy to razem" | "Oferujemy Państwu program" |
| Śląski kontekst | "Śląskie firmy potrafią dostarczyć produkt najwyższej klasy" | generyczne sformułowania |
| Efekt, nie proces | "Po warsztatach masz jasny plan gotowy do wdrożenia" | "Przeprowadzamy warsztaty strategiczne" |

### 3.2. Czego NIE pisać na stronie

- Żargon: "brand equity", "touchpointy", "customer journey"
- Ton agencji marketingowej — fundacja to partner, nie dostawca
- Puste obietnice bez danych
- Język filantropii — "pomagamy biednym firmom"
- Korporacyjny dystans — "Szanowni Państwo"
- Przesadny entuzjazm — "NIESAMOWITE wyniki!!!"

### 3.3. 7 kluczowych komunikatów do przewijania na stronie

1. **Silne marki budują silny region** — Gdy śląskie firmy budują silne marki, wygrywa cały region.
2. **Jesteśmy stąd** — Znamy Śląsk, bo tu się urodziliśmy i pracujemy.
3. **Partnerstwo, nie usługa** — Nie pracujemy dla firm — pracujemy z nimi.
4. **Marka to inwestycja, nie koszt** — Uporządkowana marka to nowi klienci i talenty.
5. **Konkret, nie obietnice** — Każde działanie ma jasny cel i mierzalny efekt.
6. **Ekosystem, nie jednorazowa akcja** — Społeczność, w której firmy rosną razem.
7. **Śląsk zasługuje na markę na miarę potencjału** — Czas na silne, nowoczesne marki.

---

## 4. INSTRUKCJE TECHNICZNE DLA LOVABLE

### 4.1. Prompt startowy do Lovable

Wklej ten prompt jako inicjalny opis projektu:

```
Stwórz informacyjny landing page w języku polskim dla fundacji "Brands Foundation"
(Fundacja Marki Śląskie). Strona ma być minimalistyczna, z dużą ilością białej
przestrzeni i typografią jako głównym elementem wizualnym.

DESIGN:
- Font nagłówków: Playfair Display (Bold, Bold Italic)
- Font body: Inter (Regular, Medium, SemiBold)
- Kolory: tło białe #FFFFFF i ciepły beż #EDE9E6 naprzemiennie,
  tekst #1A1A1A, akcent zielony #45C44B, ciemne sekcje #1A1A1A
- Styl: czysty, współczesny, bez border-radius lub max 4px,
  duży padding między sekcjami (80-120px)
- Buttony: primary zielony (#45C44B), secondary z borderem

STRUKTURA (od góry):
1. Sticky nawigacja: logo "Brands FOUNDATION" (lewo) + linki + CTA zielony
2. Hero: "Silne marki na Śląsku budują silną markę Śląska." (H1 italic)
   + opis misji + 2 CTA
3. Ciemna sekcja z problemem i 3 statystykami
4. O fundacji — tekst + zdjęcie
5. Co robimy — 3 karty programów
6. Dla kogo — 3 bloki (firmy, sponsorzy, instytucje)
7. Dlaczego my — siatka 2x2 z wyróżnikami
8. Partnerzy — logotypy
9. CTA kontaktowe — ciemne tło
10. Footer

TON: partnerski, konkretny, bez żargonu agencyjnego.
Język polski. Nie używaj "Szanowni Państwo" ani korporacyjnego dystansu.
```

### 4.2. Fonty do załadowania

W Lovable → Settings → Custom Head lub w pliku index.html:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
```

### 4.3. Tailwind config (jeśli Lovable pozwala na edycję)

```javascript
// tailwind.config extend
colors: {
  brand: {
    white: '#FFFFFF',
    beige: '#EDE9E6',
    'beige-dark': '#D7D3D0',
    sand: '#D2D0CB',
    'sand-dark': '#A69C95',
    black: '#1A1A1A',
    green: '#45C44B',
    'green-dark': '#2EAE34',
    blue: '#4C64FF',
    'blue-dark': '#2944F0',
  }
},
fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### 4.4. Logo

Użyj plików SVG z repozytorium:
- `logo_black.svg` → nawigacja i jasne tła
- `logo_white.svg` → footer i ciemne sekcje

Logo: "Brands" (Playfair Display Bold, duże) + "FOUNDATION" (Inter, uppercase, mniejsze, pod spodem).

### 4.5. Zdjęcia

- Styl: autentyczne, ludzie w kontekście pracy i regionu
- NIE stockowe, sterylne zdjęcia
- Placeholder: użyj Unsplash z query "business workshop" lub "team meeting industrial"
- Filtr: lekko desaturowane, ciepłe tony
- Aspect ratio zdjęć: 16:9 lub 3:2

---

## 5. MOBILE / RESPONSYWNOŚĆ

| Element | Desktop | Mobile |
|---|---|---|
| Nawigacja | Pełne linki + CTA | Hamburger |
| Hero H1 | 56–72px | 32–40px |
| Grid kart | 3 kolumny | 1 kolumna |
| Grid 2x2 | 2 kolumny | 1 kolumna |
| Padding sekcji | 80–120px | 48–64px |
| Padding boczny | 64–80px | 20–24px |

---

## 6. SEO & META

```html
<title>Brands Foundation — Fundacja Marki Śląskie</title>
<meta name="description" content="Wzmacniamy śląskie firmy w budowaniu silnych, konkurencyjnych marek. Edukacja, konsulting strategiczny i wsparcie transformacji marki dla MŚP.">
<meta property="og:title" content="Brands Foundation — Silne marki budują silny region">
<meta property="og:description" content="Fundacja Marki Śląskie. Pomagamy śląskim firmom budować marki, które przyciągają klientów i talenty.">
<meta property="og:type" content="website">
```

---

*Dokument: Lovable Website Guide v1.0 | Brands Foundation | Marzec 2026*
