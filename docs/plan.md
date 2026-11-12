# Plan: Ufuks portfolio

En sida (startsidan) byggd i HTML och vanlig CSS utifrån Figma-filen
[Ufuks portfolio](https://www.figma.com/design/WeFx69h0S9S3l88BX8PgR7/Ufuks-portfolio?node-id=7-3),
sidan "☕️ Startsida" med ramarna **Desktop** (1440 px) och **Mobile** (375 px).

Vi jobbar ett steg i taget. Varje steg avslutas med en jämförelse mot Figma vid 375 och 1440 px
(och några bredder däremellan) och en commit.

## Beslut

| Fråga | Beslut |
| --- | --- |
| Teknik | Ren HTML och CSS. JavaScript används inte. |
| Mobilmenyn ("Meny") | Utan JavaScript: `<details>`/`<summary>` som fäller ut länkarna. Det öppna läget följer komponenten "Navigation / Breakpoint=Mobile, Open=True" på sidan Components. |
| Bilder | Desktop-bilderna (3 st) används i alla storlekar, i varje rams layout. Mobilramens vattenmärkta bild och lilla tumnagel tas inte med. |
| Mellanstorlekar | Typografi och avstånd skalar flytande med `clamp()` mellan mobilvärdet vid 375 px och desktopvärdet vid 1440 px. Layouten byter från mobil till desktop vid en brytpunkt. |
| Text | Exakt som i Figma, inklusive platshållartexter ("Section title", lorem ipsum). |
| Typsnitt | Anton 400 och Inter 400/500, laddade direkt från Google Fonts. |
| Länkar | Case, About, Contact och länkarna i foten pekar på ankare på sidan eller `#` tills det finns mål. |

## Designtokens från Figma

Variablerna har ett läge per ram. Desktopvärdet gäller vid 1440 px, mobilvärdet vid 375 px.

| Token | Mobil | Desktop |
| --- | --- | --- |
| `text/primary` | #141400 | #141400 |
| `text/secondary` | #949494 | #4E4E4E |
| `background/primary` | #F8F8F8 | #F8F8F8 |
| `border/primary` | #141400 | #141400 |
| `grid/columns` | 6 | 12 |
| `grid/margin` | 16 | 32 |
| `grid/gap` | 16 | 32 |
| `corner/radius` | 4 | 8 |
| `text/heading` (Anton 400, lh 1) | 64 | 128 |
| `text/subheading` (Inter 500) | 24 | 32 |
| `text/body` (Inter 500) | 20 | 24 |
| `text/link-sm` (Inter 400, lh 1) | 20 | 24 |
| `text/link-lg` (Inter 400, lh 1) | 32 | 48 |

## Steg

- [x] **0. Plan och repo** – frågor besvarade, plan skriven, git-repo skapat.
- [x] **1. Grund** – filstruktur (`index.html`, `css/`, `images/`), reset, typsnitt från Google
      Fonts, tokens som CSS-variabler med flytande `clamp()`, gridet (6/12 kolumner) och
      basstilar för typografin. Lokal förhandsvisning.
      - Brytpunkten är `48em` (768 px). Där byter färgen `text/secondary` och gridet går från 6
        till 12 kolumner.
      - Textstilarna heter som i Figma: `.heading`, `.subheading`, `.body`, `.link-sm`, `.link-lg`.
        Body och Subheading har radavståndet `normal`, som motsvarar Figmas "auto" (1,2 för Inter).
      - Kontrollerat vid 375, 768 och 1440 px: alla tokens får Figmas värden vid ändpunkterna.
- [x] **2. Navigation** – namn till vänster, Case/About/Contact till höger på desktop; "Meny" med
      `<details>` på mobil.
      - Öppen meny: knappen byter till "Stäng" och länkarna visas i `text/link-lg` med 8 px
        mellanrum, 64 px under raden. Menyn trycker ner sidan, som i Figma.
      - Länkarna blir `text/secondary` vid hover (komponenten "Link", State=Hover), bara på
        enheter med mus.
      - Kontrollerat: 88 px hög på desktop, 52 px stängd och 228 px öppen på mobil, som i Figma.
      - Utan JavaScript stängs menyn inte av sig själv när man klickar på en länk.
- [ ] **3. Rubriksektion** – "Digital designer based in Gothenburg" i Anton.
- [ ] **4. Textsektion** – "Section title" och brödtexten, i gridkolumner på desktop och staplat på
      mobil.
- [ ] **5. Galleri** – exportera och optimera de tre bilderna från Figma; en bred bild överst och två
      bredvid varandra under, med rundade hörn, rätt proportioner och `width`/`height` mot
      layoutskiften.
- [ ] **6. Kompetenser** – rubrik och fyra listor (Skills, Experience, Tools, Tools) med sekundär
      färg på underrubrikerna; två kolumner på mobil.
- [ ] **7. Om mig** – text och porträtt; bilden till höger på desktop och ovanför texten på mobil.
- [ ] **8. Länkfot** – tre breda länkar med pil och linjer emellan, i `text/link-lg`.
- [ ] **9. Finputs** – jämförelse mot Figma sektion för sektion vid 375, 768, 1024 och 1440 px,
      tillgänglighet (semantik, fokusmarkering, alt-texter, kontrast), validering av HTML och CSS,
      `<title>`, beskrivning och favicon.

## Arbetssätt

- Varje sektion hämtas ur Figma (mått, avstånd, typografi) innan den byggs.
- Mått tas från Figma, inte uppskattas från skärmbilden.
- Förhandsvisning med en enkel lokal server (`python3 -m http.server`).
- En commit per steg, och planen bockas av i samma commit.
