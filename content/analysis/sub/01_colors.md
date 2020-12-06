---
Title: Färganalys
Description: Färganalys av 3 webbplatser
Date: 2020-11-30
Template: analys
---

## Färganalys av 3 webbplatser

Uppgiften går ut på att välja tre webbplatser som skall analyseras utifrån typsnitt och färgval. 
Urval kan bestå av aningen samma kategori av webbplatser, eller helt olika kategorier.

### Urval

Jag har valt följande kategori: __turistwebbplatser__ och inom den kategorin följande webbplatser:

1.  [Cypern](https://www.visitcyprus.com)
2.  [Basel - Schweiz](https://www.basel.com)
3.  [Chile](http://www.chile.travel)

För ett par-tre år sedan kollade några listor över de som då ansågs bästa turistwebbplatser.
Jag sparade undan ett antal som jag tyckte extra mycket om.  
Nu har jag gått igenom denna lista för att kolla vad som hänt sedan dess.
Dessutom lade jag till en ny webbplats som togs fram i år (Cypern).

#### Verktyg

- __Colorzilla__ för att få fram samtliga färger
- __Mozilla DevTools__ för att få specifika färger samt detaljerna om fonterna
    * delvis även __WhatFont?__ för att snabbkolla fonterna och markera dem på sidan
- __Internet__ för att få info om fonterna (olika källor)
- __BuiltWith__ för att kolla om det är någon särskild teknologi som används exempelvis Bootstrap ramverk för Chile

### Chile

![Chile](%assets_url%/img/Chile-screenshot.png "Chile"){.image}

#### Fonter:

- __Brushstrike__: __sans-serif__ - används för rubrik h2, som lowercase - för geografiska platser  
  "BRUSHSTRIKE is a brush typeface designed by Francesco Canovaro"
- __Montserrat__: __sans-serif__ - används för rubrik h3, resten av texterna förutom små undantag  
  "The old posters and signs in the traditional Montserrat neighborhood of Buenos Aires inspired Julieta Ulanovsky to design this typeface and rescue the beauty of urban typography that emerged in the first half of the twentieth century."
- __FontAwesome__: social media ikoner
- __Roboto__: __sans-serif__, Används för Covid info (rubrik h1)  
  "Roboto is a neo-grotesque sans-serif typeface family developed by Google as the system font for its mobile operating system Android, and released in 2011 for Android 4.0 Ice Cream Sandwich."

#### Ramverk:

- __Bootstrap__

#### Färger

__Samtliga färger upptäckta av CollorZilla__

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(0, 0, 238); color: white">01</td>
        <td style="height: 35px; width: 35px; background-color: rgb(44, 48, 64); color: white">02</td>
        <td style="height: 35px; width: 35px; background-color: rgb(82, 87, 107); color: white">03</td>
        <td style="height: 35px; width: 35px; background-color: rgb(239, 240, 243); color: black">04</td>
        <td style="height: 35px; width: 35px; background-color: rgb(223, 224, 227); color: black">05</td>
        <td style="height: 35px; width: 35px; background-color: rgb(59, 89, 152); color: white">06</td>
        <td style="height: 35px; width: 35px; background-color: rgb(1, 63, 115); color: white">07</td>
        <td style="height: 35px; width: 35px; background-color: rgb(81, 127, 164); color: black">08</td>
        <td style="height: 35px; width: 35px; background-color: rgb(101, 107, 111); color: white">09</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 172, 237); color: black">10</td>
    </tr>
</table>
<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(66, 138, 165); color: black">11</td>
        <td style="height: 35px; width: 35px; background-color: rgb(248, 161, 45); color: black">12</td>
        <td style="height: 35px; width: 35px; background-color: rgb(187, 0, 0); color: white">13</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 0, 0); color: white">14</td>
        <td style="height: 35px; width: 35px; background-color: rgb(2, 2, 2); color: white">15</td>
        <td style="height: 35px; width: 35px; background-color: rgb(12, 12, 12); color: white">16</td>
        <td style="height: 35px; width: 35px; background-color: rgb(85, 85, 85); color: white">17</td>
        <td style="height: 35px; width: 35px; background-color: rgb(255, 255, 255); color: black">18</td>
        <td style="height: 35px; width: 35px; background-color: #ff243e; color: black">19</td>
    </tr>
</table>

__Användning av färgerna för texter__

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(44, 48, 64); color: white">02</td>
        <td style="height: 35px; width: 35px; background-color: rgb(101, 107, 111); color: white">09</td>
        <td style="height: 35px; width: 35px; background-color: rgb(66, 138, 165); color: black">11</td>
        <td style="height: 35px; width: 35px; background-color: rgb(248, 161, 45); color: black">12</td>
        <td style="height: 35px; width: 35px; background-color: rgb(255, 255, 255); color: black">18</td>
    </tr>
</table>

- __(18)__ vit: menyerna, samtliga rubriker förutom brushstrike (h2) bakgrundsfärg för brödtext
- __(11)__: brushstrike h2 rubrikerna
- __(09)__: brödtext, allmän information
- __(12)__ orange: bakgrundsfärg för knapparna, förklarande texter för markerade (+) områden på bilderna samt kontaktinfo (länkarna i sidfoten)
- __(02)__: används som bakgrundsfärg för __18)__ (vit text)

#### Analys

Denna webbsida använder för det mesta monokromatiska färger men också blå textur (07) som bakgrund för resguide.
Överlag används ljusa färger, vit som bakgrund men för rubrikerna. Det kompletteras med blandning av vitaoch ljusblå nyanser i bilderna (snö/hav/himmel).
Även (11) är en nyans av blå mot grön som annars finns både i hav och is.

Så budskapet är ren natur, hav, fjäll, snö och is i orörd natur.
Orange används som kontrast för viktig info och indikation för händelse (gå vidare till en annan sida).
Större delen av sidan är på ett snyggt och visuellt tilltalande sätt uppdelad i nästa lika stora halvor som delas med en miniatyrkarta av landet.  
Sedan växlar det mellan att bilden blir på västra eller högra sidan av kartan och på andra sidan där man kan klicka på knappen för att gå dit.

Så färgvalet matchar vad man kan förvänta sig av turismwebbsidan om Chile.

### Basel

![Basel](%assets_url%/img/Basel-screenshot.png "Basel"){.image}

#### Fonter:

- __Nobel__: __sans-serif__ - används för rubriker  
  "Nobel is a __geometric sans-serif__ typeface designed by Sjoerd Henrik de Roos (1877-1962) and Dick Dooijes (1909-1998) in the period 1929-1935 for the Amsterdam Type foundry"
- __Arial__: __sans-serif__ - används till brödtext, menyer, länkar mm.  
  "Arial, sometimes marketed or displayed in software as Arial MT, is a __sans-serif__ typeface and set of computer fonts in the neo-grotesque style. The typeface was designed in 1982, by Robin Nicholas and Patricia Saunders, for Monotype Typography. It was created to be metrically identical to the popular typeface Helvetica, with all character widths identical, so that a document designed in Helvetica could be displayed and printed correctly without having to pay for a Helvetica license."
- __FontAwesome__: stora klickbara ikoner för "att göra" urval (bred horizontell spalt)

#### Färger

__Samtliga färger upptäckta av CollorZilla__

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(218, 26, 31); color: white">01</td>
        <td style="height: 35px; width: 35px; background-color: rgb(229, 41, 45); color: black">02</td>
        <td style="height: 35px; width: 35px; background-color: rgb(210, 0, 30); color: white">03</td>
        <td style="height: 35px; width: 35px; background-color: rgb(218, 225, 231); color: black">04</td>
        <td style="height: 35px; width: 35px; background-color: rgb(233, 65, 64); color: black">05</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 0, 0); color: white">06</td>
        <td style="height: 35px; width: 35px; background-color: rgb(27, 27, 27); color: white">07</td>
        <td style="height: 35px; width: 35px; background-color: rgb(48, 48, 48); color: white">08</td>
        <td style="height: 35px; width: 35px; background-color: rgb(51, 51, 51); color: white">09</td>
        <td style="height: 35px; width: 35px; background-color: rgb(72, 72, 72); color: white">10</td>
    </tr>
</table>

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(85, 85, 85); color: white">11</td>
        <td style="height: 35px; width: 35px; background-color: rgb(86, 86, 86); color: white">12</td>
        <td style="height: 35px; width: 35px; background-color: rgb(119, 119, 119); color: black">13</td>
        <td style="height: 35px; width: 35px; background-color: rgb(136, 136, 136); color: black">14</td>
        <td style="height: 35px; width: 35px; background-color: rgb(170, 170, 170); color: black">15</td>
        <td style="height: 35px; width: 35px; background-color: rgb(204, 204, 204); color: black">16</td>
        <td style="height: 35px; width: 35px; background-color: rgb(212, 212, 212); color: black">17</td>
        <td style="height: 35px; width: 35px; background-color: rgb(221, 221, 221); color: black">18</td>
        <td style="height: 35px; width: 35px; background-color: rgb(224, 224, 224); color: black">19</td>
        <td style="height: 35px; width: 35px; background-color: rgb(230, 230, 230); color: black">20</td>
    </tr>
</table>

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(231, 231, 231); color: black">21</td>
        <td style="height: 35px; width: 35px; background-color: rgb(238, 238, 238); color: black">22</td>
        <td style="height: 35px; width: 35px; background-color: rgb(240, 240, 240); color: black">23</td>
        <td style="height: 35px; width: 35px; background-color: rgb(255, 255, 255); color: black">24</td>
    </tr>
</table>

__Användning av färgerna för texter__

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(218, 26, 31); color: white">01</td>
        <td style="height: 35px; width: 35px; background-color: rgb(229, 41, 45); color: black">02</td>
        <td style="height: 35px; width: 35px; background-color: rgb(48, 48, 48); color: white">08</td>
        <td style="height: 35px; width: 35px; background-color: rgb(51, 51, 51); color: white">09</td>
        <td style="height: 35px; width: 35px; background-color: rgb(230, 230, 230); color: black">20</td>
        <td style="height: 35px; width: 35px; background-color: rgb(255, 255, 255); color: black">24</td>
    </tr>
</table>

- __(01)__ röd1: knapparna (action)
- __(02)__ röd2: drop-down meny (hamburbereny) i den över högra hörnan, rubriker i menyn, det aktuella valet
- __(09)__: brödtext
- __(20)__: bakgrundsfärg för brödtext
- __(24)__ vit: text i sidfoten - kontaktinfo, meny för övriga saker bl.a. väder
- __(08)__: bakgrundsfärg för vit text

#### Analys

Basels webbisad kör med monokromatiska (akromatiska) färger (nyanser av grå ihop med med vitt) samt rött för att lyfta upp viktiga delar.
De röda färgerna är ganska lika den röda färgen som finns i den nationella flaggan.

Många och stora snygga bilder tillsammans med bra ballans mellan de grå-vita och röda nyanserna gör att sidan känns fräsch och dynamisk.
Grå nyanser brukar associera till antikt vilket också lyfts fram genom bildvalet: gamla men flottiga hus, bildgalleri, konstmuseum, kyrkan och synagogan.

Helhetsintrycket är att det är en stad med anor.  
Turistnäringen är nog kulturturister dvs. de som är mer sofistficerade samt med högre inkomster.

Detta var också förväntat.

### Cypern

![Cypern](%assets_url%/img/Cyprus-screenshot.png "Cypern"){.image}

#### Fonter:

- __Tahoma__: __sans-serif__ - används för rubrikerna i huvudmenyn (Helvetica används för de olika valen)  
  "Tahoma is a humanist sans-serif typeface that Matthew Carter designed for Microsoft Corporation. Microsoft first distributed it, along with Carter's Verdana, as a standard font in the initial release of Windows 95. While similar to Verdana, Tahoma has a narrower body, smaller counters, much tighter letter spacing, and a more complete Unicode character set."
- __Note CF Bold__: "handskriven" __sans-serif__, används i h3 rubrikerna  
  Hittar inte ursprungsinformation för fonten.
- __Helvetica__: __sans-serif__ - används till brödtext, h4 rubriker, punkterna i huvudmenyn  
  "Helvetica font is one of the most used sans-serif typefaces that was created by the famous swiss font designer Max Miedinger in the year of 1957. This is also known as the Neue Haas Grotesk and the neo-grotesque design was inspired by the 19th-century typeface Akzidenz-Grotesk."  
  "Helvetica Font Family is a historical-kind serif font stays a trendy replacement for designers who need to inject warmness and romance into their work."
- __PF Highway Sans Pro__: __sans-serif__, Används för länkar till kallenderhändelserma  
  "Highway Sans Pro is based on the standard typefaces used for highway signs and other byways open to public travel in the United States. Designer: Panos Vassiliou"
- __PF Din Text Cond Pro__: __sans-serif__ - används för rubrikerna och knappen i sidfoten  
  "Designed by Panos Vassiliou"

#### Färger

__Samtliga färger upptäckta av CollorZilla__

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(202, 32, 39); color: white">01</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 0, 238); color: white">02</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 0, 128); color: white">03</td>
        <td style="height: 35px; width: 35px; background-color: rgb(54, 96, 159); color: white">04</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 82, 150); color: white">05</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 53, 97); color: white">06</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 52, 96); color: white">07</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 48, 89); color: white">08</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 31, 57); color: white">09</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 153, 255); color: black">10</td>
    </tr>
</table>

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(0, 102, 153); color: white">11</td>
        <td style="height: 35px; width: 35px; background-color: rgb(94, 169, 208); color: black">12</td>
        <td style="height: 35px; width: 35px; background-color: rgb(1, 78, 114); color: white">13</td>
        <td style="height: 35px; width: 35px; background-color: rgb(113, 182, 213); color: black">14</td>
        <td style="height: 35px; width: 35px; background-color: rgb(42, 169, 224); color: black">15</td>
        <td style="height: 35px; width: 35px; background-color: rgb(123, 202, 225); color: black">16</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 135, 170); color: black">17</td>
        <td style="height: 35px; width: 35px; background-color: rgb(245, 121, 33); color: black">18</td>
        <td style="height: 35px; width: 35px; background-color: rgb(212, 64, 50); color: black">19</td>
        <td style="height: 35px; width: 35px; background-color: rgb(255, 0, 0); color: black">20</td>
    </tr>
</table>

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(56, 55, 55); color: white">21</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 0, 0); color: white">22</td>
        <td style="height: 35px; width: 35px; background-color: rgb(14, 14, 14); color: white">23</td>
        <td style="height: 35px; width: 35px; background-color: rgb(17, 17, 17); color: white">24</td>
        <td style="height: 35px; width: 35px; background-color: rgb(27, 27, 27); color: white">25</td>
        <td style="height: 35px; width: 35px; background-color: rgb(34, 34, 34); color: white">26</td>
        <td style="height: 35px; width: 35px; background-color: rgb(37, 37, 37); color: white">27</td>
        <td style="height: 35px; width: 35px; background-color: rgb(85, 85, 85); color: white">28</td>
        <td style="height: 35px; width: 35px; background-color: rgb(102, 102, 102); color: white">29</td>
        <td style="height: 35px; width: 35px; background-color: rgb(128, 128, 128); color: black">30</td>
    </tr>
</table>

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(196, 196, 196); color: black">31</td>
        <td style="height: 35px; width: 35px; background-color: rgb(204, 204, 204); color: black">32</td>
        <td style="height: 35px; width: 35px; background-color: rgb(221, 221, 221); color: black">33</td>
        <td style="height: 35px; width: 35px; background-color: rgb(238, 238, 238); color: black">34</td>
        <td style="height: 35px; width: 35px; background-color: rgb(245, 245, 245); color: black">35</td>
        <td style="height: 35px; width: 35px; background-color: rgb(255, 255, 255); color: black">36</td>
    </tr>
</table>

__Användning av färgerna för texter__

<table style="border-spacing: 4px; border-collapse: separate">
    <tr style="text-align: center">
        <td style="height: 35px; width: 35px; background-color: rgb(0, 0, 128); color: white">03</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 82, 150); color: white">05</td>
        <td style="height: 35px; width: 35px; background-color: rgb(0, 53, 97); color: white">06</td>
        <td style="height: 35px; width: 35px; background-color: rgb(113, 182, 213); color: black">14</td>
        <td style="height: 35px; width: 35px; background-color: rgb(245, 121, 33); color: black">18</td>
        <td style="height: 35px; width: 35px; background-color: rgb(56, 55, 55); color: white">21</td>
        <td style="height: 35px; width: 35px; background-color: rgb(85, 85, 85); color: white">28</td>
        <td style="height: 35px; width: 35px; background-color: rgb(255, 255, 255); color: black">36</td>
    </tr>
</table>

- __(36)__ vit: brödtext, kontaktinformation, rubrikerna i sidfoten,  första menyraden i sidhovudet
- __(14)__: länkarna under lokala rubriker i sidfoten
- __(05)__: länkarna i huvudmenyn - sidhuvud, hover ger __(18)__
- __(21)__: text som förklarar länken till fler vidoeklipp __(03)__, färgen för länkarna (ikon och text) till media och kartan
- __(03)__: länken till fler videoklipp
- __(05)__: länkar till kallenderhändelserna
- __(14)__ ljusblå: datum för evenemang
- __(28)__ grå: texten + ikonen inom sökrutan i sidhuvudet
- __(18)__ orange: hoverfärg för länkarna, stora klickbara fa-ikoner (att göra spalt), sat bakgrundsfärg för navigering till olika bilder i slidern, ändring av språk i sidhuvudet

#### Analys

Cyprus designfolket har valt att använda både många typsnitt och många färger.
Som i Chiles fall är det väldigt mycket blå nyanser samt vitt.  I bildern finns en hel del turkösa och gröna färger också.
Båda riktar sig mest mot naturturister och har stor havskust. Cypern har i synnerhet många badturister.
Man vill lyfta fram (ren) natur och unik natur trots många turister.  
Det är tydligt att man försöker förlänga tursitsäsongen genom att lyfta fram andra aspekter.

Cypern försöker profilera sig mot mat och kulturturister samt men förutom bilderna lyckas man inte riktigt förmedla det genom färgvalet tycker jag.
Det är en hel del väldigt professionellt gjorda videklipp vilka ger en kvalitetskänsla.

Detta är den nyaste av de analyserade turistsiter och det hade egentligen inte funnit någon officiell dedikerad turistwebbsida.  
Innan dess hade det funnits en facebook-sida vilken faktiskt varit väldigt bra och konstatnt uppdaterat med mycket vackra bilder.  

Jag tycker att de har lyckat väldigt bra och det är tydligt att man lagt stora resurser för detta.

### Övrigt

__Författare__: Nenad Cuturic.
