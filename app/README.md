# Netlight Secret Party — AI Sommelier

An iPad-optimised web app that matches guests with a wine based on a short personality quiz.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm (bundled with Node.js)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in a browser. The app is optimised for an iPad in landscape mode.

## Building for production

```bash
npm run build       # outputs to dist/
npm run preview     # serves the built output locally
```

## Before the event

Replace the placeholder wine data in `src/data/wines.ts` with the actual bottles that will be available at the bar. Each wine needs a `name`, `varietal`, `region`, `description`, and a set of `profileTags` drawn from the list in `src/data/tags.ts`.
