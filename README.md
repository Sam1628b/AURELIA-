# Aurelia Grand Hotel

A cinematic, editorial concept website for a fictional luxury hotel, built with React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What's inside

- **Cinematic intro** (`src/components/IntroExperience.jsx`) — full-screen entrance sequence, skippable, remembered for the session via `sessionStorage`.
- **Three routes**: `/` (Home), `/rooms` (Stay), `/experience` (Dine & Experience) — see `src/pages/`.
- **Custom cursor** (desktop only, respects `prefers-reduced-motion` and coarse pointers) that reveals a "View" label over room imagery and grows subtly over buttons.
- **Room detail modal** and a **slide-in booking panel** (frontend-only — no payment or backend).
- **Animated counters, scroll progress bar, page transitions, parallax hero, scroll reveals** via Framer Motion.
- Editorial palette: near-black, warm ivory, stone, champagne gold, deep olive — set as Tailwind theme tokens in `tailwind.config.js`.
- Typefaces: Cormorant Garamond (serif display) + Manrope (sans body/UI), loaded from Google Fonts in `index.html`.

## Notes

- Photography is sourced from Unsplash via hotlinked URLs for this concept build. Swap `src/data/*.js` and the image constants in `src/components` / `src/pages` for your own photography before shipping.
- This build was written and syntax-checked in an offline container (no network access for `npm install`), so dependencies have not been installed or run here — install locally to try it.
