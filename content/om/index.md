---
Title: Om
Description: Beskrivning av lösningar i kmom02
icon: fas fa-cogs
---

Om tekniker/lösningarna i kmom02
===================

## 1. Tekniska lösningar

### 1.1 Sass/.scss
Jag har valt att enbart använda mig av variabler den här gången plus att använda __*__ och __/__ matematiska operatorer
för att anpassa header storlekar samt på ett par ställen till där storleken anpassar sig till **$h1-font-size**-variabeln.

## 2. Design

Generellt känns pico lite "trångt" för att lätt kunna sväga ut med annorlunda designlösningar vad det gäller olika sidor.
I alla fall så känns det med den nuvarande kompetensnivån.
Så jag har inte experimenterat så mycket med design.

### 2.1 Normalisering
Löses i base.scss

### 2.2. Responsivitet
Grundstorleken är wide (72em), det styrs också via variablen $widescreen-max-width
Site anpassar sig på ett bra sätt till olika skärmstorlekar så det finns väldigt lite under  @media.
Jag har lagt extra @media för enheter upp till 26em för att föhindra x-scroll.

### 2.3 Fonter
* google: **Dekka** och **Permanent marker**
* Båda fonterna är nedladdade länkade till den nedladdade versionen

### 2.4 Iconer
* Tyvärr finns inga iconer för social media som standariconer utan dessa finns i det privata området så jag har valt att ha fontawesome kvar i foten
* Av samma anledning används dessa även i menyn
* På förstasidan har jag lagt unicode iconer för luren och "hem"
