# Cut Line — Beta Landing Page

A single-page landing site for **Cut Line**, the putting-practice app from the
Tee Time Trainer team. Built to recruit beta testers from the existing TTT
email list + Discord. Lives at `teetimetrainer.app/cutline`.

Built on the **Tee Time Trainer design system** (Space Mono, felt green, gold,
pixel hard-shadows). Cut Line's brand palette maps almost exactly onto TTT
tokens; a few Cut Line-specific values (ink `#2A2622`, made-the-cut green
`#2D8E2A`, missed red `#E04E3A`) are defined in `cutline.css`.

---

## Two versions, one toggle

The page ships **both** Version A (beta) and Version B (go-live) in one file.
Open the **Tweaks** panel (toolbar) → **Page version** to flip between them:

| | Version A — Beta (ship now) | Version B — Go-live (ship later) |
|---|---|---|
| CTA | `▶ JOIN THE BETA` → TestFlight URL | App Store + Google Play badges |
| Sub-text | `Free · iOS only for now · We want your honest feedback` | `Free · iOS and Android · No ads, no upsells` |
| Hero tag | `NOW IN BETA` shown | hidden |
| Beta-ask copy | "Cut Line is in beta…" (recruitment) | "Why we built it…" (launch) |

Two other tweaks let you lock the look before handoff:
- **Hero scorecard motif** — Full (1–9 scorecard strip) vs Restrained.
- **Wordmark** — Stacked (gold cut-rule), Strike (rule through the type), Plate (scorecard nameplate).

Whatever you select in Tweaks is what gets written into the defaults — so set
your final choices there, then hand the file to Fellipe.

---

## 🔧 Swap points — replace before publishing

All in **`cutline-app.jsx`**, top of file (clearly commented):

| Constant | Replace with |
|---|---|
| `TESTFLIGHT_URL` | Real public TestFlight link `https://testflight.apple.com/join/XXXXXX` (Version A) |
| `APP_STORE_URL` | App Store link once approved (Version B) |
| `PLAY_URL` | Google Play link (Version B) |
| `INSTAGRAM_URL` | Cut Line / TTT Instagram |
| `DISCORD_URL` | TTT Discord invite |
| `CONTACT_EMAIL` | Contact address |
| `TTT_URL` | `https://teetimetrainer.app` |

Both CTAs (hero + bottom) read from these same constants — change once, applied everywhere.

### Screenshots
The three phone screens (Home → Putt → Result) are **pixel-art mockups** drawn
in `cutline-mockups.jsx` — they double as the brand reference for the real
designer. To use real app screenshots instead, replace the `<ScreenHome />`,
`<ScreenPutt />`, `<ScreenResult />` components in `Screens()` (cutline-app.jsx)
with `<img src="…" />` inside a `.phone` frame, or just drop the PNGs into the
existing frame markup.

---

## Files

```
Cut Line - Landing.html   ← entry point (open this)
cutline.css               ← all design tokens + page styles (portable)
cutline-app.jsx           ← sections, version logic, Tweaks  ← SWAP POINTS here
cutline-mockups.jsx       ← the 3 pixel-art phone screens
tweaks-panel.jsx          ← review-only Tweaks shell (not needed in production)
fonts/                    ← Space Mono (self-hosted .ttf)
assets/                   ← TTT horizontal logos (for reference)
```

---

## Production / drop-in notes

This review build uses React + in-browser Babel so the A/B/wordmark/motif
**Tweaks** work live. Two clean **static exports** are now generated with the
locked defaults (**Beta · Full · Plate** / **Go-Live · Full · Plate**):

```
Cut Line - Beta.html         ← Version A — ship now (TestFlight CTA)
Cut Line - Go Live.html      ← Version B — ship later (App Store + Play)
cutline.css                  ← shared landing stylesheet (both reference it)
cutline-screens.css          ← app-screen styles for the Screenshots section
Cut Line - App Screens.html  ← studio reference for the 3 app screens (not served)
cutline-mockups.jsx          ← React port of the 3 screens (if site goes React)
og-cutline.png               ← 1200×630 share image (beta) — the hero nameplate
og-cutline-golive.png        ← 1200×630 share image (go-live, no "beta" chip)
og.html / og-golive.html     ← source templates for the share images (regen below)
favicon-512.png / -32.png    ← "CL" plate favicon · apple-touch-icon.png (180)
favicon.html                 ← source template for the favicon
fonts/                       ← Space Mono
```

**Social / SEO share image (WhatsApp, iMessage, Facebook, X).** Each landing
page carries full Open Graph + Twitter Card tags with **absolute** image URLs, so
pasting the link shows the Cut Line hero nameplate. The cards are rendered from
the real design system — to regenerate after a copy change, edit `og.html` (or
`og-golive.html` / `favicon.html`) and run headless Chrome:

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --force-device-scale-factor=2 \
  --window-size=1200,630 --screenshot=og-raw.png "file://$PWD/og.html"
sips -z 630 1200 og-raw.png --out og-cutline.png   # downscale 2× → crisp 1200×630
```

Beta uses `og-cutline.png` (with the **Now in beta** chip); the go-live page
uses `og-cutline-golive.png` (chip removed). If you re-host under a different
URL, update the absolute `og:image` / `og:url` / `canonical` values in both HTML
heads — WhatsApp will not resolve relative image paths.

**Screenshots section.** The three phone mockups in the "Nine holes. One
question." section are the real app flows — **New Session · Log a Putt · Make
the Cut** — rendered live as HTML/CSS at native 390×844 and scaled crisply into
a `.cl-phone` slot (no raster images). They live in `cutline-screens.css`, which
both landing pages link **after** `cutline.css`. `Cut Line - App Screens.html`
is the standalone studio view of the same three screens for design reference.

These are **pure HTML + CSS — no React, no build step, no JavaScript.** Drop
the matching HTML file + `cutline.css` + `fonts/` into the TTT site at
`/cutline`. Swap points are marked with `<!-- SWAP: … -->` comments and the
`testflight.apple.com/join/XXXXXX` / `#REPLACE-…` placeholders.

Ship Version A now; when the app is approved, swap to Version B (same CSS,
same layout — only the CTA block and a few copy lines differ).

If you'd rather port to a React/Next component, the JSX in `cutline-app.jsx` is
already production-shaped.

- **Mobile-first** — single scrolling page, no nav, responsive down to ~360px.
- **Fast** — no images beyond inline SVG; only the self-hosted Space Mono fonts load.
- **Accessible** — semantic landmarks, AA contrast (cream on felt, ink on gold/cream), focusable CTAs.
- **No tracking / analytics** in this build (per brief).

---

## Wordmark recommendation (for the designer)

The real logo is in development; this page sets the precedent. My recommended
default is **Stacked**: `CUT` / gold cut-rule / `LINE`. The horizontal gold bar
*is* the cut line — the literal line you must beat on a leaderboard — so the
mark explains the product. Keep the gold rare (CTAs + the cut-rule only),
2–4px ink borders, hard offset shadows (no blur), Space Mono throughout,
wide letter-spacing on caps labels. The scorecard 1–9 grid is the recurring
motif to carry into store assets.

© 2026 Bossa Nova Solutions · Cut Line · A Tee Time Trainer app
