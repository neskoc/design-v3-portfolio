---
Title: Bilder
Description: Analys av bilder
Date: 2020-12-05
Template: analys
---

## Uppgift: Analys av laddningstider och användbarhet

Uppgiften går ut på att välja tre webbplatser för att mäta hur snabbt de laddas
och om de innehåller några saker som kan förbättras med tanke på laddningstid och användbarhet.

För varje webbplats (både Mobile och Desktop):
- tre sidor som skall väljas ut för mätning med Google Pagespeed
- för varje sida mätningen skall upprepas tre gånger och snittvärdet redovisas

### Urval

Jag har valt att fortsätta med samma webbplatser som jag använt i föregående kursmoment.
Med andra ord har jag valt webbplatser från kategori: __turistwebbplatser__ och inom den kategorin följande webbplatser:

1.  [Cypern](https://www.visitcyprus.com)
     ![Cypern](%assets_url%/img/Cyprus-screenshot.png "Cypern"){.image}
     Valda sidor:
       * [Startsida](https://www.visitcyprus.com)
       * [Stränder](https://www.visitcyprus.com/index.php/en/discovercyprus/sun-sea/beaches1)
       * [Events](https://www.visitcyprus.com/index.php/en/events-3/year.listevents/2020/12/06/-)
2.  [Basel - Schweiz](https://www.basel.com)
    ![Basel](%assets_url%/img/Basel-screenshot.png "Basel"){.image}
     Valda sidor:
       * [Startsida](https://www.basel.com)
       * [Atacama öken](https://chile.travel/donde-ir/norte-desierto-atacama)
       * [Events](https://chile.travel/eventos)
3.  [Chile](http://www.chile.travel)
    ![Chile](%assets_url%/img/Chile-screenshot.png "Chile"){.image}
     Valda sidor:
       * [Startsida](http://www.chile.travel)
       * [Street art](https://www.basel.com/en/Urban-Art)
       * [Events](https://www.basel.com/en/events)

Anledningen att välja från samma kategori är att kunna ha rättvisare jämförelse mellan olika parametrar.
Dessa sajter riktar sig för det mesta mot samma målgrupp och borde ha ganska lika förutsättningar när de gör olika teknik- och designvalen.

Även vid urvalet av undersidor tog jag hänsyn till att dessa skall tillhöra samma eller besläktad grupp (start, events,nischsida)  
för att försöka jämföra äpplen med äpplen och päron med päron.

### Verktyg

- __Google PageSpeed__ för att få fram ett generellt betyg på skalan 1 till 100
- __Mozilla DevTools: Network__ för att få ta fram antal förfrågningar, laddningstider i sekunder och nedladdningstraffiken i Megabyte
- __Libre Office__ för att sammanställa mätresultat i ett kalkylark


### Resultat

Samtliga [mätresultat](%assets_url%/Sitespeed-analysis.ods) delvis rådata
men också snittade värden grupperade efter site och undersidor finns som ett ods-document.

Resultat från både DevTools och Network är samstämmiga och över alla undersidor dvs. de indikerar samma rangordning:
- Den sida som fick bättre betyg i PageSpeed hade lägre snittvärden för antal förfrågningar, laddningstider och mängd av nedladdad data vilket egentligen var förväntat.

Utifrån mätdata kan man utläsa att mobilvariant brukar ligga på halva värdet av skrivbordsvarianten (lägre är sämre) vad det gäller PageSpeed.
Tittar man på Network-mätdata är resultaten skillnaderna inte lika stora mellan de olika varianterna och snarare pekar åt annat håll:
att mätvärdena brukar vara lite bättre för mobilvarianten.  
Förklaringen är att PageSpeed i sitt betyd väger samman exempelvis tiden då första innehållet visas, tiden då man kan göra något på/med sidan medan
Network ger enbart rådata.

En annan intressant sak är användning av mellanlagringen på klientsidan.
De värdena som redovisas under "Size [MiB]" är den sammanlagda mängden både hämtad från mellanlagringen och från källan
men om man skulle kolla bara den faktiska mängden som hämtas brukar man se en drastisk skillnad då man besöker sidan första gången och efterföljande gångerna.

För att eliminera påverkan av tidigare mellanlagringar i början av Network-mätningen för varje webbsida (site) tömde jag mellanlagringsminnet.  
Detta syns tydligt (ej redovisat) i mängden data som hämtas från källan/källor under första besöket.

Ett intressant observerat fenomen är att vissa (under)sidor med olika mellanrum hämtar dynamiskt mer data så om jag lämnar sidan med Network-analysen uppe
kommer värdena i synnerhet nedladdningstiden öka/hoppa med (o)jämna mellanrum vilket Basels första sida är tydlig exempel på.
Det är också indikation på att de har valt att snabba upp första visningen och att efterföljande data (bilder för det mesta i en "carousell") hämtas senare
då ny information skall presenteras.

## Vinnare

Så nu är det dags att utse en vinnare.

### Samtliga kategorier

1. En klar vinnare är __Basel__.  
    Den utmärker sig genom bästa betyget i PageSpeed men också lägsta snittvärden för de olika mätresultaten.  
    Basel har uppenbart lagt mycket arbete med att optimera startsidan där antal förfrågningar är extremt låg (9)
    och även den ovannämnda fördröjda hämtningen av bilder tyder på det.  
    Att Basel har valt bara två fonter gör inte saken sämre.
    Dessutom har de valt Arial som en av fonterna vilket betyder att den inte behöver laddas ner (den finns redan på datorn).
    Och vi pratar om en site som bl.a. nischat sig mot konst.
    Visserligen har jag inte gjort fontanalysen för undersidor så där kanske används fler fonttyper men detta är en extremt lyckad strategi för första sidan.  
    De har gjort ett bra jobb på alla fronter förutom en:
    - Nedladdningsmängden ligger förhållandevis högt i synnerhet för Street art.  
      I och med att de lyckats väldigt väl med mellanlagringsstrategin och antal förfrågningar märks det inte så mycket av.
2. På andra platsen kommer __Chile__.  
    Förutom första sidan för den mobila enheten vilken ger högre värden än skrivbordsvarianten och Cypern ligger dess värden mellan Basel och Cypern.  
    Det som sticker ut (negativt) hos Chile är den startsidan.
    Den är väldigt tung och antal förfrågningar där är i snitt dubbelt så många som för undersidor.
    Så där borde de kunna lägga krut på och använda tekniker med fördröjd laddning och minska antal saker som visas på en gång.
    Visserligen är Chile än vääälidgt långt (men smalt) land men det behöver inte innebära att startsidan skall visa allt.  
    En smartare strategi vore att fundera över om det är så viktigt att vissa så mycket där.
3. På tredje platsen hittar man __Cypern__.  
    Den har lyckats väl med att optimera första sidan för mobila-enheten i alla fall jämfört med Chile.  
    En annan intressant sak är att dess nedladdningsmängd är oftast lägre än konkurrenterna men det resulterar inte i bättre nedladdningstider.
    Det kan förklaras med mycket större antal förfrågningar (requests) vilka är ca. tre gånger större än hos konkurrenterna.
    Om man kopplar det tillbaka mot analys av fonter och färger i kmom04.
      - Cypern använder ovanligt och onödigt många fonter (vissa används bara sparsamt).  
        Här ligger ett klart potential för en snabb förbättring samt me låga resurser.

### Personlig reflektion

Jag har ganska hög tolerans för längre laddningstider och dessutom har haft väldigt hög bandbredd i Sverige sedan Bredbandsbolagets start.
Mitt område var bland de första som fick fiber från BBB (100MB/s) och det var om ja minns rätt redan 2000.
När jag inte är i Sverige brukar jag inte surfa särskilt mycket i synnerhet inte på mobilenheter så jag brukar inte "drabbas" av låg hastighet.
Därför är min analys färgad av detta.  
Sedan har jag vanan att öppna saker i nya flikar i förväg samt i bakgrund vilket också minskar vikten av eventuellt låg hastighet.  
Just det, jag har en hel dell tillägg som blockerar annonser mm. vilket för det mesta gör att upplevelse av hastigheten brukar bli annorlunda.

Så när jag ser på de analyserade siterna från min dator känns de ok där Basel sticker verkligen ut.
Cypern och Chile upplevs som trögare i början me inget jag inte kan leva med.
Den subjektiva upplevelsen är att jag inte brukar känna frustration om man får vänta några sekunder extra.  
Jag irriterar mig betydligt mer på kvalitet av innehållet, annonser och liknande så är detta på en bra nivå brukar det kompensera för lägre hastighet.

### Övrigt

__Författare__: Nenad Cuturic.
