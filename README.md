# Competitor Onboarding Viewer

A static site for browsing competitor onboarding screenshot flows. Hosted on GitHub Pages with Staticrypt password protection and Giscus comments.

## Adding a new flow

```bash
cd /path/to/comp-research-repo

node scripts/upload-flow.js \
  --dir /Users/avri/fab_proj/web-onboarding/competitor-research/<run-dir> \
  --competitor "Noom" \
  --label "Noom Weight Onboarding"
```

The script:
- Copies all PNGs + `ANALYSIS.md` into `screenshots/<flow-id>/`
- Writes `screenshots/<flow-id>/index.json` (ordered filename list — required by viewer)
- Updates `data/flows.json`
- Commits and pushes → GitHub Actions encrypts + deploys in ~30s

Flow ID is derived automatically from the directory name: `<competitor-slug>-<date>` (e.g. `noom-2026-03-24-9`).

---

## How it works

On every push to `main`, GitHub Actions runs `.github/workflows/deploy.yml`:
1. Encrypts `index.html` and `viewer.html` with Staticrypt using the password stored in `secrets.STATICRYPT_PASSWORD`
2. Copies `assets/`, `data/`, `screenshots/`, `scripts/` unchanged into `dist/`
3. Deploys `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

The password prompt remembers the session for 7 days. Both pages share the same salt (`.staticrypt.json`) so you only need to enter the password once per session.

---

## One-time setup (new machine / new repo)

### 1. Set the site password secret
Repo → **Settings → Secrets and variables → Actions → New repository secret**
- Name: `STATICRYPT_PASSWORD`
- Value: the site password

### 2. Enable GitHub Pages
Repo → **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `gh-pages` / `/ (root)`

### 3. Enable GitHub Discussions (for Giscus comments)
Repo → **Settings → Features → Discussions** ✓

---

## Repository structure

```
/
├── index.html              Landing page: gallery of all flows
├── viewer.html             Grid view + lightbox + comments for one flow
├── .staticrypt.json        Stable salt — shared by both pages so remember-me works
├── assets/
│   ├── style.css
│   └── app.js
├── data/
│   └── flows.json          Flow index (updated by upload-flow.js)
├── screenshots/
│   ├── noom-2026-03-24-9/
│   │   ├── index.json      ← ordered PNG list (required by viewer)
│   │   ├── ANALYSIS.md     ← optional, shown below screenshots
│   │   └── *.png
│   └── ...
└── scripts/
    └── upload-flow.js      Upload helper (see above)
```
