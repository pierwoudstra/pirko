# Systeem-eigenschappen

Zes eigenschappen in de signaalbewerking kunnen worden geanaliseerd. Sommige lijken op elkaar dus is het 't handigst om apart deze eigenschappen bij langs te gaan tijdens het testen van een systeem. De systemen zelf worden hier met behulp van differentie-vergelijkingen omschreven.

## Geheugen

Een systeem met geheugen is te herkennen aan de $[n-1]$ in een differentievergelijking. Met andere woorden, elk systeem dat informatie uit het verleden gebruikt om zijn huidige staat of gedrag te bepalen, wordt beschouwd als een systeem met geheugen.

Bijvoorbeeld:

$y[n] = 2x[n] \neq$ systeem met geheugen.

$y[n] = x[n] + x[n-1] =$ systeem met geheugen.

## Omkeerbaarheid

Omkeerbaarheid in de context van systemen verwijst naar de eigenschap waarbij het mogelijk is om de oorspronkelijke invoer of toestand van het systeem te herstellen vanuit de uitvoer of de resulterende toestand. Met andere woorden, als een systeem omkeerbaar is, kun je de uitvoer terugvoeren naar de invoer zonder enig verlies van informatie. Dit geldt *niet* voor operatoren zoals kwadraat aangezien je niet weet of de invoer positief of negatief is: $$ (-3)^2 = 3^2 = 9 $$

Voorbeeld van een omkeerbaar systeem:

$$y[n] = 100x[n]$$

Het systeem $z[n]$ is het omgekeerde systeem van $y[n]$:

$$z[n] =  \frac{1}{100} y[n]$$

## Causaliteit

Het concept van causaliteit verwijst naar de eigenschap waarbij de uitvoer van een systeem alleen afhankelijk is van de huidige en/of vroegere invoer, niet van toekomstige invoer. Een causaal systeem kan niet afhankelijk zijn van toekomstige invoer of gebeurtenissen. Bijvoorbeeld:

$y[n] = x[n+1] + x[n-1] \neq$ causaal systeem.

$y[n] = x[n] + x[n-1] =$ causaal systeem.

Let op de tijdsindexen in de differentievergelijkingen om causaliteit te beoordelen.

## BIBO-Stabiliteit

Een systeem wordt beschouwd als BIBO-stabiel als het reageert op een begrensde ingang (bounded input) met een begrensde uitgang (bounded output). Als het ingangssignaal begrensd is, dus ergens tussen $-\infty$ en $\infty$, zal het systeem niet onbegrensd versterken en zal het uitgangssignaal niet oneindig groot worden.

Een voorbeeld van een BIBO-**in**stabiel systeem:
$$y[n] = x[n] + 2y[n-1] $$
In dit geval zal de feedback blijven vermenigvuldigen, dus indien het coefficiënt van $y[n-1] < 1$ zullen we een BIBO-stabiel systeem hebben:
$$y[n] = x[n] + 0.5y[n-1]$$

Hierbij zou het coefficiënt van $x[n]$ zo groot kunnen zijn als we willen en nogsteeds zouden we een BIBO-stabiel systeem hebben, de uitgang blijft begrensd een heeft geen kans om zichzelf te blijven vermeningvuldigen.

## Tijd-invariantie

Een systeem is tijd-invariant als de tijd (vaak genoteerd met $n$) niet direct het systeem beïnvloed. Vaak komt dit neer op systemen zonder LFO's of andere functies die afhankelijk zijn van de tijd.

Een voorbeeld van een tijd-**variant** systeem:

$$y[n] = nx[n]$$

Hierbij zal de output $y[n]$ volledig afhangen van de waarde van $n$, ofterwel de tijd.

$$y[n] = \sin(n)x[n]$$

Voor de differentie-vergelijking hierboven geldt hetzelfde.

Een voorbeeld van een tijd-invariant systeem is één waarbij $n$ binnen de haakjes blijft:

$$y[n] = 1/x[n]$$

Of deze, om het subtiele verschil duidelijk te maken:

$$y[n] = \sin( x[n] )$$

## Lineariteit

Een lineair systeem bevan geen exponenten, ofterwel als de input 10 $\times$ harder is, is de output ook 10 $\times$ harder.

Bekijk de volgende systemen eens:

$y[n] = (x[n])^2 \neq$ lineair systeem.

$y[n] = \tanh(x[n]) \neq$ lineair systeem.

In het laatste voorbeeld is te zien dat veel functies ook niet lineair reageren op een verschil in de input. De $\tanh$ functie zal bijvoorbeeld geen ouput geven groter dan 1.

Een ander soort niet lineariteit kan ontstaan door een constante:

$$y[n] = x[n] + 5$$

Als we dit systeem gebruiken en als input 4 nemen ($x[n]_1 = 4$), dat geeft:

$$y[n]_1 = 4+5 = 9$$

En we verdubbellen de input:

$$x[n]_2 = 2 * 4 = 8 $$

Dan is de output:

$$y[n]_2 = 8 + 5 = 13$$

$$13 \neq 2 \times 9 \Rightarrow y[n]_2 \neq 2 \times y[n]_1$$

Ofterwel, als de input verdubbelt, zal de output niet verdubbellen. 

Als laatste nog een voorbeeld van een werkelijk lineair systeem:
$$y[n] = 2x[n] + 3x[n-1]$$

Hierbij zullen alle mogelijke inputs lineair gerelateerd zijn aan de outputs.
