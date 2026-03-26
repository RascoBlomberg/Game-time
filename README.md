# Game Calculator

Detta projekt är en webbaserad applikation byggd med React och TypeScript där användaren kan välja mellan olika spel och använda specifika kalkylatorer kopplade till varje spel.

Applikationen är uppbyggd så att varje spel har egna funktioner och verktyg anpassade efter dess mekanik.

## Funktionalitet
### Clash of Clans

För Clash of Clans finns en "Builder Potion Calculator". Användaren anger hur lång tid som återstår på en uppgradering samt hur många builder potions som används. Kalkylatorn räknar sedan ut den faktiska återstående tiden baserat på att en builder potion ökar hastigheten 10 gånger under 1 timme per potion.

### Valheim

För Valheim finns en "Smelter Calculator". Användaren anger hur mycket ore och coal som läggs in i en smelter. Baserat på spelets begränsningar (t.ex. maxkapacitet och resursförbrukning) beräknar applikationen hur många bars som produceras, hur lång tid processen tar samt när det är optimalt att fylla på resurser.

## Syfte

Syftet med applikationen är att förenkla planering och resursoptimering i olika spel genom att ge spelaren tydliga och snabba beräkningar baserade på spelets mekanik.

## Routing
* /     ->      HomePage
* /coc  ->      CoCPage
* /valheim ->   ValheimPage

## Data
```typescript
// Clash of Clans - Builder Potion Calculator
type CoCData = {
  timeLeftHours: number;   // Tid kvar på uppgradering
  potions: number;         // Antal builder potions
};

// Valheim - Smelter Calculator
type ValheimData = {
  ore: number;    // Mängd ore
  coal: number;   // Mängd coal
};

// Beräknad data (exempel)
type Result = {
  timeLeft: number;     // Ny tid efter beräkning
  barsProduced?: number;
};

```