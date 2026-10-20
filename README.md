# Kwesi Arthur — Unofficial Fan Website

> **Unofficial fan-made project. Not affiliated with, endorsed by, or operated by Kwesi Arthur or his management. Artist names, music, and trademarks belong to their respective owners.**
>
> Part of **"10 Days, 10 Artistes — Ghana"** — an independent software engineering and creative portfolio challenge.

A production-ready, cinematic single-page music website celebrating Ghanaian rapper, singer, and songwriter Kwesi Arthur. Built as a software engineering portfolio project.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Development](#development)
6. [Production Build](#production-build)
7. [Project Structure](#project-structure)
8. [Content Management](#content-management)
   - [Add a New Release](#add-a-new-release)
   - [Update an Existing Release](#update-an-existing-release)
   - [Add a Music Video](#add-a-music-video)
   - [Add a Tour Date / Event](#add-a-tour-date--event)
   - [Add a Gallery Image](#add-a-gallery-image)
   - [Update the Biography](#update-the-biography)
   - [Update Social / Streaming Links](#update-social--streaming-links)
9. [Image Assets](#image-assets)
10. [Environment Variables](#environment-variables)
11. [Deployment](#deployment)
    - [Netlify (recommended)](#netlify-recommended)
    - [Vercel](#vercel)
    - [Manual / Static Host](#manual--static-host)
12. [Known Limitations](#known-limitations)
13. [External Services](#external-services)
14. [Disclaimer & Licensing](#disclaimer--licensing)

---

## Project Overview

The site is a single-page application (SPA) with six anchor-linked sections:

| Section | Anchor | Description |
|---------|--------|-------------|
| Hero | `#home` | Cinematic intro with CTAs and parallax decoration |
| Artist Story | `#story` | Biography, career milestones, awards |
| Discography | `#music` | 3-D album carousel with tracklists and streaming links |
| Music Videos | `#videos` | Video grid with YouTube embed modal |
| Shows & Tours | `#shows` | Upcoming and past live events |
| Gallery | `#gallery` | Photo grid with accessible lightbox |

No backend or database is required. All content lives in structured TypeScript data files under `src/data/`.

---

## Technology Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 |
| Language | TypeScript 5 (strict mode) |
| Build tool | Vite 5 |
| Styling | Tailwind CSS v4 (Vite plugin) |
| Animation | Motion (Framer Motion fork) v11 |
| Icons | Lucide React |
| Fonts | Bebas Neue (display), Inter (body) — Google Fonts |
| Deployment | Netlify (configured) / Vercel (compatible) |

---

## Prerequisites

- **Node.js** 20 or later (`node -v` to check)
- **npm** 9 or later (bundled with Node)

No other global tools are required.

---

## Installation

```bash
# Clone or download the project
cd kwesi

# Install dependencies (uses package-lock.json for reproducible installs)
npm install
```

---

## Development

```bash
npm run dev
```

Opens the dev server at **http://localhost:5173** with hot module replacement. Changes to components and data files reload instantly.

---

## Production Build

```bash
# Type-check + build
npm run build

# Preview the production build locally
npm run preview
```

The build output lands in `dist/`. Chunks:

| File | Size (gzip) | Purpose |
|------|-------------|---------|
| `react-*.js` | ~45 KB | React + ReactDOM |
| `index-*.js` | ~39 KB | Application code |
| `motion-*.js` | ~21 KB | Animation library |
| `index-*.css` | ~8 KB | Tailwind CSS |

---

## Project Structure

```
kwesi/
├── public/
│   ├── favicon.svg          # SVG favicon (KA monogram)
│   ├── robots.txt           # Search engine instructions
│   ├── _redirects           # Netlify SPA fallback
│   └── gallery/             # (empty) Place authorized gallery images here
│
├── src/
│   ├── data/                # ← All content lives here
│   │   ├── biography.ts     # Artist biography, milestones, awards
│   │   ├── events.ts        # Live events (upcoming + past)
│   │   ├── gallery.ts       # Gallery image manifest
│   │   ├── releases.ts      # Discography (albums, EPs, projects)
│   │   ├── social.ts        # Social media + streaming links
│   │   └── videos.ts        # Music video entries
│   │
│   ├── components/
│   │   ├── AlbumCarousel.tsx  # 3-D carousel + release detail modal
│   │   ├── Biography.tsx      # Artist story section
│   │   ├── Gallery.tsx        # Photo grid + lightbox
│   │   ├── Hero.tsx           # Landing section
│   │   ├── Shell.tsx          # Navbar + Footer + SkipLink
│   │   ├── Tours.tsx          # Shows & events section
│   │   └── Videos.tsx         # Music video grid + player modal
│   │
│   ├── App.tsx              # Root — assembles all sections
│   ├── index.css            # Global styles + Tailwind import
│   └── main.tsx             # React entry point
│
├── index.html               # HTML shell with SEO / OG meta
├── vite.config.ts           # Vite + Tailwind plugin config
├── netlify.toml             # Netlify build + headers config
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## Content Management

All content is stored in `src/data/`. Edit these files and re-run `npm run build` to publish changes. No CMS or admin dashboard is needed for the first production version.

### Add a New Release

Open `src/data/releases.ts` and append a new entry to the `releases` array:

```ts
{
  id: "unique-slug",          // short, lowercase, hyphenated
  slug: "unique-slug",        // same as id — used in URLs if routing is added later
  title: "Release Title",
  type: "Album",              // "Album" | "EP" | "Mixtape" | "Project"
  year: "2025",
  date: "2025-06-15",         // ISO 8601 — omit if exact date unverified
  label: "Label Name",        // optional
  notes: "One-paragraph description.",
  tracks: [
    { title: "Track Name", verified: true },
    { title: "Collab Track", featuring: "Artist Name", verified: true },
  ],
  hue: 210,                   // 0–360 hue for placeholder artwork background
  cover: "/covers/release.jpg", // omit until authorized art is sourced
  streaming: {
    spotify:    "https://open.spotify.com/album/...",
    appleMusic: "https://music.apple.com/...",
    youtube:    "https://www.youtube.com/...",
  },
  contentSource: "Source name and date checked",
},
```

**Ordering:** The array order controls the carousel. Most recent releases should appear last (or wherever is most logical for the 3-D fan layout).

### Update an Existing Release

Find the entry by `id` in `src/data/releases.ts` and edit any field. Set `date` once the exact release date is confirmed. Add tracks with `verified: true` when sourced from a primary platform.

### Add a Music Video

Open `src/data/videos.ts` and add an entry to the `videos` array:

```ts
{
  id: "unique-id",
  title: "Video Title",
  featuring: "Artist Name",   // optional
  year: "2025",
  releaseId: "release-id",    // links to releases.ts — optional
  youtubeId: "xxxxxxxxxxx",   // 11-character YouTube video ID
  verified: true,             // set false until the ID is confirmed official
  description: "Short description of the video.",
  contentSource: "YouTube / press release / etc.",
},
```

To find a YouTube ID: open the video, copy the `v=XXXXXXXXXXX` value from the URL.

### Add a Tour Date / Event

Open `src/data/events.ts` and add to the `events` array:

```ts
{
  id: "event-unique-id",
  name: "Event or Tour Name",
  date: "2025-09-20",         // ISO 8601
  venue: "Venue Name",
  city: "City",
  country: "Country",
  status: "upcoming",         // "upcoming" | "past" | "cancelled" | "postponed"
  ticketUrl: "https://...",   // only include if URL is verified and live
  eventUrl: "https://...",    // official event page — optional
  lastVerified: "2025-08-01", // ISO date you last checked this entry
  notes: "Optional context.", // optional
},
```

**Important:** Never add a `ticketUrl` unless you have confirmed it is a live, official link. Stale ticket links mislead visitors.

The `getUpcomingEvents()` helper in `events.ts` automatically filters to events with `status: "upcoming"` and a future date. The "No Upcoming Shows" empty state will show automatically when none qualify.

### Add a Gallery Image

**Step 1** — Obtain written permission from the photographer or confirm the image is an authorized press asset.

**Step 2** — Place the image in `public/gallery/`. Use web-optimized formats (WebP preferred, JPEG acceptable). Aim for ≤300 KB per image.

**Step 3** — Open `src/data/gallery.ts` and update or add an entry:

```ts
{
  id: "g9",
  src: "/gallery/filename.webp",  // path from public/
  alt: "Descriptive alt text for screen readers",
  caption: "Optional visible caption",
  credit: "Photographer Name",
  license: "Press image, used with permission",
  year: "2025",
  placeholder: false,             // set to false once a real image is added
  hue: 220,                       // only used when placeholder: true
},
```

**Do not** set `placeholder: false` until `src` points to a real authorized image.

### Update the Biography

Open `src/data/biography.ts`:

- Edit `story` paragraphs to add or refine narrative.
- Add entries to `milestones` with `verified: true` only when sourced from a primary reference.
- Add to `awards` for confirmed new accolades.
- Update `contentSource` whenever you add new references.

### Update Social / Streaming Links

Open `src/data/social.ts` and edit the `url` field for the relevant platform. Set `verified: false` if you are unsure the handle is correct until confirmed.

---

## Image Assets

| Asset | Location | Status |
|-------|----------|--------|
| Favicon (SVG) | `public/favicon.svg` | ✅ Included (KA monogram) |
| OG / social share image | `public/og-image.png` | ⚠️ Not yet created — needed for social previews |
| Apple touch icon | `public/apple-touch-icon.png` | ⚠️ Not yet created |
| Favicon PNG (32×32) | `public/favicon.png` | ⚠️ Not yet created |
| Album covers | `public/covers/` | ⚠️ Pending authorized art |
| Gallery photos | `public/gallery/` | ⚠️ Pending authorized photography |

**To create the OG image:** Design a 1200×630 PNG using the site's visual identity (dark background `#0b0a0a`, Bebas Neue display type, crimson `#9b1c2e` accent). Place it at `public/og-image.png`. Include the fan-project disclaimer visually if possible.

**Album cover art:** Official promotional artwork may be available through the artist's press kit or distributor. Verify rights before publishing. Add authorized covers to `public/covers/` and reference them in `src/data/releases.ts` via the `cover` field.

---

## Environment Variables

This project currently requires **no environment variables**. It is a fully static frontend.

If you add third-party services in future (analytics, a CMS, a contact form backend), follow these rules:

- Store secrets in a `.env` file at the project root (never commit it).
- Prefix public variables with `VITE_` to expose them to the browser: `VITE_ANALYTICS_ID=...`
- Never place API secrets that must remain private in `VITE_` variables — they will be visible in the compiled bundle.
- Add `.env` and `.env.local` to `.gitignore` before your first commit.

Example `.env`:
```
# Safe to expose — analytics write-only key
VITE_ANALYTICS_ID=UA-XXXXXXX
```

---

## Deployment

### Netlify (recommended)

The repository includes a complete `netlify.toml`. Deployment is three steps:

1. Push the project to a GitHub / GitLab / Bitbucket repository.
2. In the Netlify dashboard, click **Add new site → Import an existing project**.
3. Select your repository. Netlify reads `netlify.toml` automatically — no manual configuration needed.

Build settings (already in `netlify.toml`):
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

Every push to your main branch triggers a new deploy. Pull-request branches get deploy previews automatically.

**Custom domain:** In Netlify → Domain management, add your domain and follow the DNS instructions. HTTPS is provisioned automatically via Let's Encrypt.

### Vercel

```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Vite. The SPA redirect is handled automatically. No additional configuration file is required.

### Manual / Static Host

```bash
npm run build
# Upload the contents of dist/ to any static host (S3, GitHub Pages, Cloudflare Pages, etc.)
```

For hosts that do not handle SPA routing natively, configure a catch-all redirect: all 404s should serve `index.html` with a 200 status.

---

## Known Limitations

| Area | Limitation |
|------|-----------|
| **YouTube video IDs** | Video IDs in `src/data/videos.ts` are marked `verified: false`. They were sourced via search results and have not been confirmed against official uploads. Verify each ID before publishing. |
| **Gallery images** | All gallery entries are placeholders. No authorized photography has been sourced. See [Image Assets](#image-assets) for the process. |
| **Album covers** | No cover art is currently displayed. The carousel uses generated gradient placeholders until authorized artwork is added. |
| **OG image** | `public/og-image.png` does not yet exist. Social sharing previews will fall back to a blank image until it is created. |
| **Events** | No upcoming events are verified as of October 2026. The empty state links to the artist's official social channels. |
| **TINT I tracklist** | Full tracklist for "This Is Not The Tape, Sorry 4 The Wait" (2019) is not verified from a primary source. Only "Know Me" is listed. |
| **LFNK Vol. II tracklist** | Full tracklist unavailable from verified sources at time of build. |
| **Pain Interlude tracklist** | Full tracklist unavailable from verified sources at time of build. |
| **No analytics** | No analytics are implemented. Add a privacy-respecting option (e.g. Plausible, Fathom) if desired. |
| **No contact form** | Not implemented. No user data is collected. |
| **Accessibility** | Focus management in modals has been implemented. Full WCAG 2.1 AA compliance requires manual testing with assistive technologies (NVDA, VoiceOver, JAWS). |

---

## External Services

| Service | Purpose | Notes |
|---------|---------|-------|
| Google Fonts | Bebas Neue + Inter typefaces | Loaded via `<link>` in `index.html`. Requires network access on first load; fonts are cached by the browser. |
| YouTube | Music video embeds | Videos are embedded via `iframe`. Requires user to have YouTube accessible. Embeds lazy-load. |
| Spotify / Apple Music / YouTube | Streaming deep-links | External links only — no API calls, no data sent. |

No API keys, no server, no database.

---

## Disclaimer & Licensing

This is an **unofficial fan-made project**. It is non-commercial and was created as part of a software engineering portfolio challenge: *"10 Days, 10 Artistes — Ghana"*.

- Not affiliated with, endorsed by, or operated by Kwesi Arthur or his management team.
- Artist names, music, trademarks, and promotional materials belong to their respective owners.
- All content has been selected in good faith from publicly available sources. A disclaimer alone does not grant permission to use protected material. If you are a rights holder and have concerns, please open an issue or contact the repository owner.
- YouTube video embeds are provided under YouTube's standard embedding terms.
- Biographical information is sourced from Wikipedia, Wonderland Magazine, Genius, and other public sources, and is attributed throughout the codebase.

---

*Last updated: October 2026*
