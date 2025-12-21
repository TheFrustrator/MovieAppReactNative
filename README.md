# MovieAppReactNative

[![Expo SDK](https://img.shields.io/badge/Expo-~54.0.27-000?logo=expo)](https://expo.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Platform](https://img.shields.io/badge/Platforms-iOS%20|%20Android%20|%20Web-lightgrey)](#)

A cross-platform movie browsing app scaffolded with Expo and React Native. The app uses Expo Router's file-based routing and a small Services layer to fetch movie data (placeholder for TMDB or another movie API). This README has been tailored to match this repository's structure (notably the `app/` routes and `Services` directory) and includes badges, a sample environment config, and screenshot placeholders.

If you want me to update this file in the repo with a commit, tell me and I can prepare that change.

Table of contents
- Features
- Quick start
- Project layout (what's in this repo)
- Environment / API configuration
- Running on devices
- Development tips
- Screenshots
- Contributing
- License

## Features
- Browse movies (routes under `app/movies`)
- File-based routing with Expo Router (`app/_layout.tsx`)
- Reusable components under `component/`
- Centralized API clients in `Services/`
- Tailwind-like styling enabled (see `tailwind.config.js` and `nativewind-env.d.ts`)

## Quick start

Prerequisites
- Node.js (LTS recommended)
- npm or yarn
- Git
- Expo dev tools (you can use `npx expo` without a global install)

Install and run:
```bash
# install deps
npm install
# start dev server
npx expo start
```

Useful npm scripts (from package.json)
- `start` — start Expo dev tools
- `android`, `ios`, `web` — platform-specific starts (via Expo)
- `reset-project` — move starter code to `app-example` and create a blank `app/` (included by create-expo-app starter)

(Exact script names are in the repository's package.json.)

## Project layout (relevant files & folders)
- app/
  - _layout.tsx — root layout used by Expo Router
  - global.css — global styles for web
  - (tabs)/ — tabbed navigation group (if used)
  - movies/ — movie listing/detail routes
- component/ — UI components used across routes
- Services/ — API client(s) and data fetching functions (e.g., TMDB client)
- constants/ — app constants (image base URLs, colors, etc.)
- assets/ — static images/fonts
- tailwind.config.js & nativewind-env.d.ts — nativewind / Tailwind setup
- package.json — scripts and dependencies (Expo, React, nativewind, navigation, etc.)

This README assumes the core movie screens live under `app/movies` and that API calls are performed through files inside `Services/`. If your API clients live in another folder, tell me and I'll update paths.

## Environment & API (example)

This project expects an API key for a movie provider (commonly TMDB). Do NOT commit real API keys.

Create a `.env` (or use your preferred secrets system). Example `.env.example`:

```env
# .env.example
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
```

Sample usage in a service file (pseudo-code):
```ts
// Services/tmdb.ts (example)
const API_KEY = process.env.TMDB_API_KEY;
const BASE = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';

export async function fetchPopularMovies(page = 1) {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}&page=${page}`);
  return res.json();
}
```

If you use `react-native-dotenv` or `expo-constants`, adjust to your method for reading env variables on each platform.

## Running on device / emulator
- Expo Dev Tools (open from `npx expo start`) provides options:
  - Open in Expo Go (limited native APIs)
  - Run in an Android emulator (Android Studio)
  - Run in an iOS Simulator (Xcode)
  - Open as a development build (for testing custom native modules)

## Development tips
- Use Expo Go for fast iteration, or create a development build if you need native modules.
- If you use images from TMDB, cache them and use proper width variants (backdrop/poster sizes) for performance.
- Test on both iOS and Android early for layout differences.
- Add error / offline handling for API requests.
- If using nativewind/tailwind, restart Metro after modifying tailwind config.

## Screenshots
Add screenshots to improve the repo README. Example location:
- assets/screenshots/home.png
- assets/screenshots/detail.png

Markdown example to include images:
```md
![Home screen](assets/screenshots/home.png)
![Movie detail](assets/screenshots/detail.png)
```
<?xml version="1.0" encoding="UTF-8"?>
<!--
  High-quality placeholder screenshot SVG (1440x900).
  - Scalable vector graphic suitable for export to PNG at any resolution.
  - Edit colors/text directly in the SVG or open in Figma/Illustrator/Inkscape.
-->
<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="900" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="bgGrad" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#f4f7fb"/>
      <stop offset="1" stop-color="#e9eef6"/>
    </linearGradient>
    <linearGradient id="heroGrad" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#6C8EFF"/>
      <stop offset="1" stop-color="#8EE4C7"/>
    </linearGradient>
    <filter id="cardShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="0" dy="10"/>
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="20"/>
      <feColorMatrix result="matrixOut" in="blurOut" type="matrix"
        values="0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0.12"/>
      <feBlend in="SourceGraphic" in2="matrixOut" mode="normal"/>
    </filter>
    <style>
      <![CDATA[
        .frame { fill: white; stroke: #e0e6ef; stroke-width:1; rx:18; ry:18; }
        .topbar { fill: rgba(255,255,255,0.6); }
        .logo { font: 700 20px "Helvetica Neue", Arial, sans-serif; fill: #364156; }
        .muted { fill: #a1b0c4; }
        .line { fill: #e6eef8; rx:6; ry:6; }
        .chip { fill: rgba(255,255,255,0.18); stroke: rgba(255,255,255,0.18); rx:8; ry:8; }
        .btn { fill: white; stroke: none; rx:8; ry:8; }
        .small { font: 600 13px "Helvetica Neue", Arial, sans-serif; fill: #475569; }
      ]]>
    </style>
  </defs>

  <!-- page background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>

  <!-- Device / window frame -->
  <g transform="translate(80,70)">
    <rect width="1280" height="760" class="frame" filter="url(#cardShadow)"/>
    <!-- top bar -->
    <rect x="0" y="0" width="1280" height="64" class="topbar" style="rx:14; ry:14;"/>
    <text x="28" y="40" class="logo">Acme Dashboard</text>
    <!-- status chips -->
    <g transform="translate(1080,14)">
      <rect width="160" height="36" class="chip"/>
      <text x="12" y="24" class="small">Connected • 2s ago</text>
    </g>

    <!-- hero area -->
    <g transform="translate(32,96)">
      <rect width="1216" height="220" fill="url(#heroGrad)" style="rx:12; ry:12"/>
      <text x="36" y="70" font="700 34px 'Helvetica Neue', Arial" fill="white">High quality placeholder screenshot</text>
      <text x="36" y="110" font="400 16px 'Helvetica Neue', Arial" fill="rgba(255,255,255,0.92)">
        Use this SVG as a scalable placeholder for product pages, docs, or mocks.
      </text>
      <g transform="translate(36,140)">
        <rect x="0" y="0" width="140" height="40" class="btn"/>
        <text x="20" y="26" font="700 14px 'Helvetica Neue', Arial" fill="#364156">Get started</text>
        <rect x="160" y="0" width="140" height="40" rx="8" ry="8" fill="rgba(255,255,255,0.12)"/>
        <text x="180" y="26" font="700 14px 'Helvetica Neue', Arial" fill="white">Learn more</text>
      </g>
    </g>

    <!-- content area -->
    <g transform="translate(32,340)">
      <!-- left column -->
      <rect x="0" y="0" width="760" height="376" fill="#ffffff" style="rx:10; ry:10; stroke:#eef3fb;"/>
      <!-- header -->
      <text x="24" y="36" class="small" style="font-weight:700; font-size:20px; fill:#0f1724;">Overview</text>
      <!-- metric row -->
      <g transform="translate(24,56)">
        <rect x="0" y="0" width="220" height="88" style="rx:10; ry:10; fill:#fbfdff; stroke:#eef3fb"/>
        <text x="18" y="34" font="700 28px 'Helvetica Neue', Arial" fill="#0b1320">1,254</text>
        <text x="18" y="66" font="400 13px 'Helvetica Neue', Arial" class="muted">Active users</text>

        <rect x="248" y="0" width="220" height="88" style="rx:10; ry:10; fill:#fbfdff; stroke:#eef3fb"/>
        <text x="266" y="34" font="700 28px 'Helvetica Neue', Arial" fill="#0b1320">82%</text>
        <text x="266" y="66" font="400 13px 'Helvetica Neue', Arial" class="muted">Satisfaction</text>

        <rect x="496" y="0" width="220" height="88" style="rx:10; ry:10; fill:#fbfdff; stroke:#eef3fb"/>
        <text x="514" y="34" font="700 28px 'Helvetica Neue', Arial" fill="#0b1320">+12</text>
        <text x="514" y="66" font="400 13px 'Helvetica Neue', Arial" class="muted">New signups</text>
      </g>

      <!-- placeholder content rows -->
      <g transform="translate(24,162)">
        <rect x="0" y="0" width="700" height="8" class="line"/>
        <rect x="0" y="22" width="620" height="8" class="line"/>
        <rect x="0" y="44" width="480" height="8" class="line"/>
        <rect x="0" y="74" width="700" height="6" fill="#f1f7ff" rx="6" ry="6"/>
        <rect x="0" y="92" width="520" height="6" fill="#f1f7ff" rx="6" ry="6"/>
      </g>

      <!-- right column -->
      <rect x="792" y="0" width="376" height="376" fill="#ffffff" style="rx:10; ry:10; stroke:#eef3fb"/>
      <text x="816" y="36" class="small" style="font-weight:700; font-size:20px; fill:#0f1724;">Activity</text>
      <g transform="translate(816,56)">
        <!-- list items -->
        <g transform="translate(0,0)">
          <circle cx="14" cy="14" r="14" fill="#6C8EFF"/>
          <rect x="36" y="0" width="280" height="12" fill="#eef6ff" rx="6"/>
          <rect x="36" y="20" width="220" height="10" fill="#f5f9ff" rx="6"/>
        </g>
        <g transform="translate(0,50)">
          <circle cx="14" cy="14" r="14" fill="#8EE4C7"/>
          <rect x="36" y="0" width="240" height="12" fill="#eefaf7" rx="6"/>
          <rect x="36" y="20" width="200" height="10" fill="#f6fbf9" rx="6"/>
        </g>
        <g transform="translate(0,100)">
          <circle cx="14" cy="14" r="14" fill="#FFB36C"/>
          <rect x="36" y="0" width="220" height="12" fill="#fff6ee" rx="6"/>
          <rect x="36" y="20" width="180" height="10" fill="#fff8f0" rx="6"/>
        </g>
      </g>

      <!-- footer small controls -->
      <g transform="translate(24,330)">
        <rect x="0" y="0" width="120" height="36" rx="8" ry="8" fill="#ffffff" stroke="#eef3fb"/>
        <text x="16" y="24" font="700 13px 'Helvetica Neue', Arial" fill="#2b3a4a">Export</text>
        <rect x="144" y="0" width="120" height="36" rx="8" ry="8" fill="#f2f8ff" stroke="#e6effb"/>
        <text x="160" y="24" font="700 13px 'Helvetica Neue', Arial" fill="#3251d6">Share</text>
      </g>
    </g>

    <!-- bottom small watermark -->
    <text x="28" y="742" font="400 12px 'Helvetica Neue', Arial" class="muted">Placeholder • export at any resolution — edit colors & text in the SVG</text>
  </g>
</svg>

## Badges & CI
Consider adding:
- CI badge (GitHub Actions) for build/test status
- Expo badge (Expo project / build)
- License badge (already included above)

Example GitHub Actions workflow names:
- .github/workflows/ci.yml — run `npm install` and `npx expo prebuild` / build checks

## Contributing
1. Fork the repo
2. Create a branch: `git checkout -b feat/some-feature`
3. Commit and open a PR with a description and screenshots if the UI changed

Please follow the existing coding style and run lint/format before opening a PR.

## What I updated / matched this README to
- It references actual folders and files present in this repository: `app/_layout.tsx`, `app/global.css`, `app/movies`, `component/`, `Services/`, and `tailwind.config.js`.
- Provides an environment example (`.env.example`) and a placeholder for screenshot assets.
- Suggests badges and CI integration.

---


