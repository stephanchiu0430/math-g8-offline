# Number Rink — Math Fact Fluency Trainer

A small, offline-capable web app that makes basic math automatic in about ten minutes a day, then builds up to the arithmetic an 8th grader needs. Same engine as the vocabulary apps: spaced repetition, daily sessions, XP and streaks, a parent report, and progress stored on the device.

## What it teaches (in this order)

1. **× and ÷ facts 2–9**, taught as fact families (7 × 8, 8 × 7, 56 ÷ 7, 56 ÷ 8), easiest factors first: 2, 5, 3, 4, 9, 6, 8, 7. Each family comes with a dot array and a strategy hint (×9 = ×10 minus one group, ×8 = double three times, and so on).
2. **+ and − facts that cross 10** (8 + 5, 13 − 8), mixed in between multiplication families, with the "make 10" strategy.
3. **11s and 12s.**
4. **Multi-digit mental math**: 2-digit + and −, 2-digit × 1-digit, dividing by one digit, × and ÷ by 10 and 100. Problems are generated fresh each time.
5. **Squares to 15² and square roots.**
6. **Negative numbers** with all four operations.
7. **Order of operations.**

## How it works

- **Warm-up check first.** About 3 minutes of × facts and hard + facts. Facts answered right and fast are marked known, so the learner only practices real gaps. It can be stopped at any time and re-run from Setup.
- **Right *and* fast.** A fact moves up a box only when answered correctly within about 4 seconds (longer for multi-step skills). Correct but slow keeps it in place and brings it back sooner. Wrong sends it back to tomorrow, shows the answer, and asks it again twice in the same session.
- **Spaced review**: 1 → 3 → 7 → 14 → 30 days. A fact counts as mastered from box 4.
- **Typed answers** on a large on-screen keypad (physical keyboards work too), not multiple choice, because fluency means producing the answer.
- **Word problems** appear in about 20% of reviews once a fact is familiar, themed hockey, basketball, video games, or mixed.
- **Motivation without punishment**: XP, levels, combos, badges, a 60-second Shootout, and a streak that forgives one missed day per week. Wrong answers never cost XP.
- **Stats** include a colour-coded times table (2–12), average answer time per day, and the trickiest facts so far.

## What counts as "done for today"

When both numbers on the Today screen — reviews due and new fact families — reach zero, the screen says the shift is complete and the streak goes up.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app in one file |
| `sw.js` | Service worker: offline support and automatic updates |
| `manifest.json`, `icon-192.png`, `icon-512.png` | Home-screen install metadata and icons |
| `apps-script.gs` | Optional Google Apps Script receiver for the parent report |

## Deploy to GitHub Pages

1. Put the files in the root of a repository.
2. **Settings → Pages → Source:** `main` branch, `/ (root)`.
3. The app is live at `https://<user>.github.io/<repo>/` a minute or two later.

Do not commit secrets. If you keep the report URL in a `.env` file, add `.env` to `.gitignore`.

## Install on a phone or tablet

- **iPhone / iPad:** open the URL in Safari → Share → *Add to Home Screen*.
- **Android:** open the URL in Chrome → menu → *Install app*.

## Where progress lives

Progress is stored in `localStorage` on the device and never uploaded to GitHub. On iOS, a home-screen web app has its own storage: **deleting the icon deletes its progress.** Back up with **Setup → Export progress** and restore with **Import progress**. If the parent report is on, every row also contains a backup code.

## Updating

Pages are fetched network-first, so a new upload appears the next time the app opens. **Change the `VERSION` string at the top of `sw.js` on every release.** The installed version is shown at the bottom of Setup.

## Parent report (optional)

1. Create a Google Sheet → **Extensions → Apps Script**, paste `apps-script.gs`, save.
2. **Deploy → New deployment → Web app.** Execute as *Me*, access *Anyone*.
3. Paste the `/exec` URL into **Setup → Parent report** on the learner's device and tap **Send a test report**.

The script stores any value starting with `=`, `+`, `-` or `@` as plain text, so posted data cannot run as a spreadsheet formula. Keep the URL private: anyone with it can append rows.

## Why this method

- **Automaticity frees working memory.** When 7 × 8 comes back instantly, attention is free for equations, fractions, and graphs.
- **Retrieval beats re-reading**, and **spacing beats cramming**: short daily practice at growing intervals is what moves facts into long-term memory.
- **Fact families and strategies** cut the number of separate things to memorize and give a way back when a fact is forgotten.
- **Small and forgiving** keeps a reluctant learner coming back: ten minutes, visible progress, no penalties.
