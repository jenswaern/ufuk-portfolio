# Plan: Ufuks portfolio

En sida (startsidan) byggd i HTML och vanlig CSS utifrån Figma-filen
[Ufuks portfolio](https://www.figma.com/design/WeFx69h0S9S3l88BX8PgR7/Ufuks-portfolio?node-id=7-3),
sidan "☕️ Startsida" med ramarna **Desktop** (1440 px) och **Mobile** (375 px).

Vi jobbar ett steg i taget. Varje steg avslutas med en jämförelse mot Figma vid 375 och 1440 px
(och några bredder däremellan) och en commit.

## Beslut

| Fråga | Beslut |
| --- | --- |
| Teknik | Ren HTML och CSS. Undantag: ett litet skript för bildsliderns pilar (steg 10). Slidern fungerar utan det, med svep, styrplatta och tangentbord. |
| Mobilmenyn ("Meny") | Utan JavaScript: `<details>`/`<summary>` som fäller ut länkarna. Det öppna läget följer komponenten "Navigation / Breakpoint=Mobile, Open=True" på sidan Components. |
| Bilder | Desktop-bilderna (3 st) används i alla storlekar, i varje rams layout. Mobilramens vattenmärkta bild tas inte med. Den "lilla tumnageln" visade sig vara galleriets tredje bildkort, så på mobil visas fasadbilden där, liten i kolumn 5–6. |
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
        Body och Subheading har Figmas radavstånd "auto": Inters 1,21 avrundat till hel pixel
        (`--leading-auto`), alltså 24, 29 och 39 px. Först användes `line-height: normal`, men
        den blev en halv pixel högre per rad på retinaskärmar (upptäckt efter publiceringen).
      - Kontrollerat vid 375, 768 och 1440 px: alla tokens får Figmas värden vid ändpunkterna.
- [x] **2. Navigation** – namn till vänster, Case/About/Contact till höger på desktop; "Meny" med
      `<details>` på mobil.
      - Öppen meny: knappen byter till "Stäng" och länkarna visas i `text/link-lg` med 8 px
        mellanrum, 64 px under raden. Menyn trycker ner sidan, som i Figma.
      - Länkarna blir `text/secondary` vid hover (komponenten "Link", State=Hover), bara på
        enheter med mus.
      - Kontrollerat: 88 px hög på desktop, 52 px stängd och 228 px öppen på mobil, som i Figma.
      - Utan JavaScript stängs menyn inte av sig själv när man klickar på en länk.
- [x] **3. Rubriksektion** – "Digital designer based in Gothenburg" i Anton.
      - `<h1>` i versaler, hela bredden på mobil och kolumn 1–10 på desktop.
      - Från 48em låses raderna till "Digital Designer" / "based in Gothenburg" som i Figma, så
        att skärmar bredare än 1440 px inte får en annan radbrytning. Mellan 768 och ca 1150 px
        bryts andra raden till två (tre rader totalt).
      - Under 375 px krymper rubriken med skärmen, så att "GOTHENBURG" aldrig bryts mitt i ordet
        (kontrollerat vid 320 px).
      - Tokens avrundade så att värdena blir exakta vid 375 och 1440 px: 320 px hög sektion på
        desktop och 288 px på mobil, som i Figma.
- [x] **4. Textsektion** – "Section title" och brödtexten, i gridkolumner på desktop och staplat på
      mobil.
      - `<h2>` i kolumn 1–4 och texten i kolumn 5–10 på desktop; staplat över hela bredden på
        mobil.
      - Desktop som i Figma: 209 px hög, texten på x 501,33 och 672 px bred, samma radbrytningar.
      - Mobil: samma placering och radbrytningar, men sektionen blir 293 px hög i stället för
        Figmas 288. Komponenten har en fast höjd i Figma som skär av 5 px av marginalen under
        texten. Här styr innehållet höjden, så galleriet hamnar 5 px längre ner på mobil.
- [x] **5. Galleri** – exportera och optimera de tre bilderna från Figma; en bred bild överst och två
      bredvid varandra under, med rundade hörn, rätt proportioner och `width`/`height` mot
      layoutskiften.
      - Källbilderna är 1834 × 2751 och centrumbeskärs i Figma. De är förbeskurna till 16:9, 4:5
        och 5:4 och sparade som WebP i tre bredder var (`srcset`), 4–230 kB per fil.
      - Bildkorten (`.media-card`) har `object-fit: cover`, hörnradien och Figmas grå
        platshållarfärg. Bilderna under den breda laddas lat.
      - Sektionen har `id="case"`, så att länken Case hoppar hit.
      - Desktop som i Figma: 1710 px hög, bilderna 1376 × 774, 672 × 840 och 672 × 538.
        Mobil: 520 px hög med samma mått som i Figma, men 5 px längre ner (se steg 4).
- [x] **6. Kompetenser** – rubrik och fyra listor (Skills, Experience, Tools, Tools) med sekundär
      färg på underrubrikerna; två kolumner på mobil.
      - `<h2>` "Kompetenser" och fyra grupper med `<h3>` och `<ul>`, 16 px mellan etikett och
        lista.
      - Desktop: rubriken i kolumn 1–4, grupperna i kolumn 5–8 och 9–12 i två rader. Mobil:
        rubriken överst, grupperna i kolumn 1–3 och 4–6.
      - Varje ruta stämmer med Figmas mått: 389 px hög på desktop och 341 px på mobil.
- [x] **7. Om mig** – text och porträtt; bilden till höger på desktop och ovanför texten på mobil.
      - Texten i kolumn 1–4 och porträttet (4:5) i kolumn 9–12 på desktop; porträttet överst och
        texten under på mobil. Texten står först i HTML så att rubriken kommer före bilden.
      - Sektionen har `id="about"`, så att länken About hoppar hit.
      - Desktop som i Figma: 610,67 px hög, porträttet 437 × 547. Mobil: 681,75 px hög, men 5 px
        längre ner (se steg 4).
      - Porträttet i Figma är bara 605 × 598 px, så den beskurna bilden blir 478 px bred. Det
        räcker för vanliga skärmar men blir lite oskarpt på retina. Byt till en större bild när
        den finns.
- [x] **8. Länkfot** – tre breda länkar med pil och linjer emellan, i `text/link-lg`.
      - Varje rad är en hel länk (komponenten "Link Wide"): 1 px linje överst, marginalen som
        utfyllnad, texten till vänster och pilen till höger, lika hög som texten.
      - Pilen från Figma används oförändrad som CSS-mask och fylls med textens färg, så att text och
        pil blir grå tillsammans vid hover. (Figmas hover-pil har #949494 inbränt, medan desktopens
        grå är #4E4E4E.)
      - Länkmål: All cases → `#case`, My experience → `#experience` (kompetenssektionen),
        Let’s work together → `#contact` (foten själv). Den sista behöver ett riktigt mål, t.ex.
        en mejladress.
      - Desktop som i Figma: 339 px hög med rader på 113 px, och hela sidan 3666 px. Mobil: 195 px
        med rader på 65 px, 5 px längre ner (se steg 4).
- [x] **9. Finputs** – jämförelse mot Figma sektion för sektion vid 375, 768, 1024 och 1440 px,
      tillgänglighet (semantik, fokusmarkering, alt-texter, kontrast), validering av HTML och CSS,
      `<title>`, beskrivning och favicon.
      - Sektionshöjderna stämmer med Figma: desktop 88, 320, 209, 1710, 389, 610,67 och 339 px
        (sidan 3666 px); mobil 52, 288, 293, 520, 341, 681,75 och 195 px, där bara textsektionen
        skiljer sig (293 mot 288, se steg 4). Ingen sidledsscroll vid 320–1920 px, och inga fel i
        konsolen.
      - Tillgänglighet: rubrikordning h1 → h2 → h3, alt-texter på alla bilder, synlig
        fokusmarkering, och en hopplänk ("Skip to content") som bara syns vid tangentbordsfokus.
        De två navigationerna har olika namn ("Main" och "Main menu").
      - Kontrast: primärtexten 17,5:1 och desktopens grå 7,84:1 klarar WCAG AA. Mobilens grå
        #949494 ger bara 2,86:1 (AA kräver 4,5:1) men behålls, enligt beslut, för att följa
        Figma.
      - `<meta name="description">`, `theme-color` och en tillfällig favicon (`favicon.svg`).
      - Validerat med html-validate och stylelint (standardregler). Kvar är bara stilval:
        BEM-klassnamn, `min-width` i stället för intervallsyntax, decimaler som behövs för exakta
        mått och prefix som äldre Safari behöver.
- [x] **10. Bildslider** – komponenten "Gallery Slider" mellan Om mig och länkfoten, med
      Client, Year och Service ovanför en rad bildkort som bläddras med pilar.
      - Annotationerna i Figma: korten skalar med gridet och behåller formatet (4:5), och
        pilarna bläddrar ett steg fram eller tillbaka när det går.
      - Korten är 8 kolumner breda på desktop och 5 på mobil, räknade med container-enheter
        (`cqw`) från gridets tokens. Raden går ut till skärmkanten som i Figma och rastar mot
        kolumn 1 med scroll-snap.
      - Utan JavaScript fungerar svep, styrplatta och piltangenter. `js/gallery-slider.js` visar
        pilarna och flyttar ett kort i taget. Sista steget stannar när sista kortet ligger mot
        högerkanten. Rörelsen är omedelbar vid "minska rörelse".
      - Pilarna: `<button>` med `aria-label`, pilen från länkfoten som mask (samma form som Figmas
        32 px-pil). Svart, `text/secondary` vid hover (bara med mus) och #D1D1D1
        (`--icon-disabled`) när de inte kan användas. `aria-disabled` i stället för `disabled`,
        så att fokus stannar på knappen. Bara på desktop, eftersom mobilramen inte har pilar.
      - Bilderna är centrumbeskurna till 4:5 och sparade som WebP i två bredder var, 10–114 kB.
      - Mobil som i Figma: 530 px hög, korten 283 × 354 och Service under bilderna. Desktop:
        korten blir exakt 8 kolumner, 906,67 × 1133,33, medan Figma har 908 × 1135. Därför blir
        sektionen 1295,33 px i stället för 1297, och sidan 4961 px.
      - Kontrollerat vid 320, 375, 768, 1024, 1440 och 1920 px: ingen sidledsscroll och inga fel
        i konsolen. Pilarna testade med mus och tangentbord.

## Kvar att göra

- Ett riktigt mål för "Let’s work together", t.ex. en mejladress.
- Ett större porträtt (minst 874 px brett) för skarp bild på retinaskärmar.
- Större bilder till bildslidern (minst 1814 px breda). Dagens är 780–1006 px, så de blir lite
  oskarpa på retinaskärmar på desktop och på skärmar bredare än 1440 px.
- En riktig favicon.
- Riktig text i stället för platshållarna ("Section title", lorem ipsum).

## Arbetssätt

- Varje sektion hämtas ur Figma (mått, avstånd, typografi) innan den byggs.
- Mått tas från Figma, inte uppskattas från skärmbilden.
- Förhandsvisning med en enkel lokal server (`python3 -m http.server`).
- En commit per steg, och planen bockas av i samma commit.
