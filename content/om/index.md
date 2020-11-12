---
Title: Om
Description: Beskrivning av lösningar i kmom02
icon: fas fa-cogs
---

Om tekniker/lösningarna i kmom02
===================

## 1. Tekniska lösningar

### 1.1 Sass/.scss
* variabler i variabler.scss
* matematiska operatorer __*__ och __/__ för att anpassa header storlekar samt på ett par ställen till där storleken anpassar sig till **$h1-font-size**-variabeln.
* hierarkisk (nested) css mestadels i __dbwebb.scss__

## 2. Design

Generellt känns pico lite "trångt" för att lätt kunna sväga ut med annorlunda designlösningar vad det gäller olika sidor.
I alla fall så känns det med den nuvarande kompetensnivån.
Så jag har inte experimenterat så mycket med design.

###  2.1 Normalisering
Löses i base.scss

###  2.2. Responsivitet
Grundstorleken är wide (72em), det styrs också via variablen __$widescreen-max-width__
Site anpassar sig på ett bra sätt till olika skärmstorlekar så det finns väldigt lite under  __@media__.
Jag har lagt extra __@media för enheter upp till 26em__ för att förhindra x-scroll.

###  2.3 Fonter
* google: **Dekka** och **Permanent marker**
* Båda fonterna är nedladdade länkade till den nedladdade versionen
* __Fontawesome__ för iconer i menyn och sidfoten

###  2.4 Iconer
* Tyvärr finns inga iconer för social media som standariconer utan dessa finns i det privata området så jag har valt att ha __fontawesome__ kvar i foten
* Av samma anledning används dessa även i menyn
* På förstasidan har jag lagt __unicode iconer__ för luren &#128222; och "hem" &#8962;
