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
* `/`     ->      **HomePage**
* `/coc`  ->      **CoCPage**
* `/valheim` ->   **ValheimPage**

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


Krav för godkänt:
1. Projektet innehåller och använder minst 6 stycken komponenter varav minst 2 stycken
är “statefulla"-komponenter. [X]
2. React Router har använts för att dynamiskt uppdatera URL’en. [X]
3. Git & GitHub har använts [X]
4. Projektmappen innehåller en README.md fil - (läs ovan för mer info) [X]
5. Uppgiften lämnas in i tid! [X]
6. Muntlig presentation är genomförd []


## Installation och uppstart - terminal

```bash
cd C:/
git clone <gitrepo-url>
cd <gitrepo-namn>
npm install
npm run dev


```

För att använda dig av **git** och **npm** behöver man installera de på datorn först

Git - https://git-scm.com/

npm (Node.jS) - https://nodejs.org/en

## Vercel länk
https://game-time-beryl.vercel.app/