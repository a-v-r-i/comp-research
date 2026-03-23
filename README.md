# Competitor Onboarding Viewer

A static site for browsing competitor onboarding screenshot flows. Hosted on Netlify with password protection and Giscus comments.

## One-time setup (15 min)

### 1. Enable GitHub Discussions
In this repo: **Settings → Features → Discussions** ✓

### 2. Install Giscus & get the script tag
1. Go to [giscus.app](https://giscus.app)
2. Enter this repo's name
3. Set *Discussion category* to **General**
4. Set *Mapping* to **pathname**
5. Copy the generated `<script>` tag
6. In `viewer.html`, replace the `<!-- GISCUS_PLACEHOLDER -->` comment block with the script tag

### 3. Connect Netlify
1. netlify.com → **Add new site → Import an existing project**
2. Choose **GitHub**, select this repo
3. Build command: *(leave blank)*
4. Publish directory: `.` (root)
5. Click **Deploy**

### 4. Set site password
Netlify dashboard → **Site configuration → Access control → Visitor access → Set password**

### 5. Share with team
Share the `*.netlify.app` URL and the password.

---

## Adding a new flow (me → Claude runs this)

```bash
cd /path/to/this/repo

node scripts/upload-flow.js \
  --dir /Users/avri/fab_proj/web-onboarding/competitor-research/liven-onboarding-2026-03-21 \
  --competitor "Liven" \
  --label "Liven Onboarding"
```

The script:
- Copies all PNGs + ANALYSIS.md into `screenshots/<flow-id>/`
- Writes `screenshots/<flow-id>/index.json` (ordered filename list)
- Updates `data/flows.json`
- Commits and pushes → Netlify auto-deploys in ~30s

---

## Repository structure

```
/
├── index.html          Landing page: gallery of all flows
├── viewer.html         Grid view + lightbox + comments for one flow
├── assets/
│   ├── style.css
│   └── app.js
├── data/
│   └── flows.json      Flow index
├── screenshots/
│   ├── liven-2026-03-20/
│   │   ├── index.json      ← ordered PNG list (required by viewer)
│   │   ├── ANALYSIS.md     ← optional
│   │   └── *.png
│   └── ...
└── scripts/
    └── upload-flow.js
```
