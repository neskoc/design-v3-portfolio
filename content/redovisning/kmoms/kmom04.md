---
Title: Kmom04
Description: Redovisning av kursmoment 4
Date: 2020-11-29
Template: kmoms
---

## Kursmoment 4

Först och främst tycker jag att detta kursmoment hade ett dåligt upplägg.
Föreläsningarna nästan enbart skrapar på ytan och ligger på en nivå under den förväntade prestationen.
Själv har jag väldigt tunn bakgrund inom design och i synnerhet inom färg.  
Dessutom är det inget som jag har talang för.

Därför hade jag förväntat mig en djupare dykning i färgteorin samt praktiska exempel om hur man jobbar med olika verktyg och tekniker.
Även med min tunna bakgrund inom färg kunde jag det mesta som togs upp på föreläsningarna
men efteråt var endå dåligt förberedd för det praktiska arbetet.

### Fix av anmärkning på kmom03

> Fixa (till nästa kmom):
> Det var tanken att side-baren döljs när sidan visas på en mindre enhet. Fixa det till nästa kmom

Jag har gjort om hur meny hanteras på smalare skärmar så att det blir en "hamburgermeny" som expanderas till en meny
på samma sätt som huvudmeny hanteras (jag har anpassat det javaskript som fanns sedan tidigare).

### Skrivuppgiften

Det har för min del varit väldigt tidskrävande med att samla in, omvandla, sammanställa och till slut analysera uppgifterna om de 3 webbplatserna.
Jag spenderade uppskattningsvis minst 15 timmar bara på det.
Utan några riktlinjer, exempel, genomgång av verktygen och avgränsningar är det svårt att bedöma var man kunde spara tid på.

### Färgschemat

- Jag använde mig av min ursprungliga bakgrundsbild som grunden för att extrahera färgschemat (jag använde Adobe Color -> Extract Theme).
  Nu i efterhand inser jag att troligtvis borde ha struntat i det och koncentrerat mig på att ta fram färgerna först utifrån någon av teknikerna.
- I nästa steg valde jag tillämpa en analog färgsammansättnignsregel. Till det använde jag Adobe Color-verktyge.  
  Nu i efterhand inser jag att det bättre alternativet skulle nog ha varit Paletton-verktyget.  
  Adobe Color har den dåliga vanan att "förstöra" arbetet så fort man drar i en av färgerna.
  Det blev en hel del frustration under arbetet. Visserligen varnades det för i en av artiklarna men har man inte läst denna text först kommer denna information för sent.

  Så det var inget medvetet val utan jag testat flera verktyg (Paletton stötte jag på först senare), tyckte att Adobe var mest intuitivt att använda,
  testade olika regel samt experimenterade i portfolion tills jag fick ett resultat som kändes någorlunda bra.
  I och med att jag var nöjd med mitt ursprungliga "ljusa" temat (det baserades på en monokromtisk bakgrundsbild)
  arbetade jag enbart med att få till det mörka temat samt arbetade här med färghjulet.
- På frågan om jag valt att använda mer eller mindre alternativt lika mycket av färgerna förstår jag inte ens vad frågan syftar på.
  Jag gissar att det syftar på att vi skulle ha gjort en avancerad design för vårt tema och sedan försöka arbeta/balansera med färgerna.  
  Även med den relativt enkla designen hade det gått åt mycket mer än den avsatta tiden (20 timmar)
  Därför hade jag absolut ingen tid över att lägga på detta. Tydligen har ni tappat bort kontakten med den kunskapsnivå vi studenterna finner sig på.

### Accentfärger

Även här kan jag säga att jag knappast vet vad accentfärger är för något. Jag har sökt i samtliga angivna källor
och ordet accent förekommer på några få ställen men jag upplever inte att det förklaras på ett bra sätt ens vad det är
och ännu mindre hur man arbetar med dessa.

Nu i efterhand när jag arbetat mer med analys av webbplatser samt läst på nytt de ställen där ordet förekommer gissar jag att det syftar på en komplementfärg. Jag förstår fortfarande inte om det förekommer bara
om man väljer ett komplementärt färgschema eller om man kan (får?) ha den i andra sammanhang.
Hur är det med "udda" färger (exempelvis orange)? Räknas dessa som accentfärger?
Och så finns några frågor till jag hade kunnat ställa innan jag kan svara på frågan.

### Det mörka temat

Jag har brutit ut två scss-filer som är specifika för det mörka temat: varliables-dark och style-dark.
Det är dessa filer jag har arbetat med plus jag har tagit fram mörkare varianter av:

- bakgrundsbilden
- bilden i foten
- ersatt den svarta färgen i logon så att samma logo kan fungera både i den mörka och det ljusa schemat  
  Även här brister pico för det det går inte på ett enkelt sätt att välja olika bilder, visserligen kan man arbeta med twig-filer
  men den här uppgiften har redan krävt en hel del extra tid som det är.
- till slut har jag lagt lite mörkare bakgrundsfärg för flera element för att få en bättre kontrast mot den mörkare bakgrundsbilden
  som ändå har visats sig vara för ljus på vissa ställen.

__TIL__: Jag känner inte att jag har lärt mig så mycket om något inom detta kmom. Mest var det en liten grej här och där.
Förhoppningsvis kommer jag i efterhand kunna tänka tillbaka och känna någon "aha-upplevelse" men just nu känns det mest väldigt kaotiskt i mitt huvud.  
Det enda som jag kan komma på som är kunskapen om skillnaden mellan den additiva och den substraktiva färgmodellen
och hur dessa används inom sina respektive områden (skärmar och skrivarteknik).

### Avslutande tankar

Jag hade önskat att:

1.  någon av lärarna gick igenom hela processen att välja färger från ett färghjul.
2. någon förklarat med praktiska exempel hur man arbetar med färghjulet
3. att de färgexempel som finns på dbwebb fanns åtminstone med en en skärmdump markerade på färghjulet i ställe för en platt illustration med spalter  
   Som jag redan nämnt känns det som att lärarna förväntar sig att vi redan har arbetat och kan färgschemat hyfsat bra och nu är det bara små tillägg.  
   För min del är det långt ifrån detta.
4. att man förklarade hur stora marginaler brukar finns vid de olika valen för färgmodeller.
5. att det fanns ett exempel på en analys av en webbplats så att man får en känsla hur mycket och hur brett man bör gå och vad vi skall koncentrera oss på.

Min uppskattning är att jag lagt ca. 35-40 timmar på detta kom och jag har ändå inte hunnit gå igenom allt material samt är inte riktigt nöjd med resultatet.
Dessutom skulle jag ha behövt ytterligare 20-30 timmar för att vara helt nöjd med utfallet.
