# Ufuks portfolio

Portfoliosajt i HTML och vanlig CSS, byggd efter Figma-designen
[Ufuks portfolio](https://www.figma.com/design/WeFx69h0S9S3l88BX8PgR7/Ufuks-portfolio?node-id=7-3).
Inget byggsteg: öppna `index.html` via en lokal server. Det enda skriptet är
`js/gallery-slider.js`, som styr bildsliderns pilar. Allt annat fungerar utan JavaScript.

Planen, besluten och vad som kontrollerats i varje steg finns i [docs/plan.md](docs/plan.md).

## Förhandsvisa lokalt

```bash
python3 -m http.server 8000
```

Öppna sedan <http://localhost:8000>.

## Struktur

| Fil | Innehåll |
| --- | --- |
| `index.html` | Hela sidan: navigation, rubrik, text, galleri, kompetenser, om mig, bildslider och länkfot. |
| `css/reset.css` | Jämnar ut webbläsarnas standardstilar. |
| `css/tokens.css` | Figmas variabler (färger, grid, textstorlekar) som CSS-variabler. |
| `css/base.css` | Basstilar, textstilarna med Figmas namn, gridet och hopplänken. |
| `css/components.css` | Komponenter och sektioner, i samma ordning som på sidan. |
| `js/gallery-slider.js` | Bildsliderns pilar: ett kort i taget, grå när de inte kan användas. |
| `images/` | Bilderna från Figma som WebP, och pilikonen. |
| `favicon.svg` | Tillfällig ikon i designens färger. |

## Så fungerar storlekarna

Figma har två ramar: Mobile (375 px) och Desktop (1440 px). Textstorlekar, marginaler, mellanrum
och hörnradie skalar jämnt mellan ramarnas värden, så sidan blir exakt som Figma vid 375 och
1440 px. Vid 48em (768 px) byter layouten från mobilens 6 kolumner till desktopens 12.
Formeln står överst i `css/tokens.css`.

## Byta innehåll

- **Text:** direkt i `index.html`.
- **Bilder:** lägg nya filer i `images/` och byt `src`, `srcset`, `width` och `height`. Bildkorten
  behåller sitt format (16:9, 4:5, 5:4) med `object-fit: cover`.
- **Bildslidern:** lägg till eller ta bort `<li>` i `.gallery-slider__track`. Pilarna räknar
  stegen själva, så skriptet behöver inte ändras.
- **Färger och storlekar:** i `css/tokens.css`.
