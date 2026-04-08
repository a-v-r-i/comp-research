/* ── Shared utilities ── */

// Parse ?flow=id from URL
function getFlowId() {
  return new URLSearchParams(window.location.search).get('flow');
}

/* ════════════════════════════════════════════════════
   INDEX PAGE
   ════════════════════════════════════════════════════ */
async function initIndex() {
  const grid = document.getElementById('flow-grid');
  const countEl = document.getElementById('flow-count');
  if (!grid) return;

  let flows;
  try {
    const res = await fetch('data/flows.json');
    flows = await res.json();
  } catch (e) {
    grid.innerHTML = '<p class="state-msg">Could not load flows.json</p>';
    return;
  }

  if (countEl) countEl.textContent = flows.length + ' flow' + (flows.length !== 1 ? 's' : '');

  // Sort newest first
  flows.sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id));

  grid.innerHTML = flows.map(f => `
    <a class="flow-card" href="viewer.html?flow=${encodeURIComponent(f.id)}">
      <img class="thumb" src="${f.thumbnail}" alt="${f.label}" loading="lazy" onerror="this.style.display='none'">
      <div class="card-body">
        <div class="card-competitor">${f.competitor}</div>
        <div class="card-label">${f.label}</div>
        <div class="card-meta">
          <span>${formatDate(f.date)}</span>
          <span>${f.count} screens</span>
          ${f.hasAnalysis ? '<span>📋 Analysis</span>' : ''}
        </div>
      </div>
    </a>
  `).join('');
}

function formatDate(d) {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m,10)-1]} ${parseInt(day,10)}, ${y}`;
}

/* ════════════════════════════════════════════════════
   VIEWER PAGE
   ════════════════════════════════════════════════════ */
let screenshots = []; // { src, label, num }
let current = 0;

async function initViewer() {
  const flowId = getFlowId();
  if (!flowId) {
    document.getElementById('screenshot-grid').innerHTML = '<p class="state-msg">No flow specified. <a href="index.html">Go back</a></p>';
    return;
  }

  // Load flows.json to find this flow's metadata
  let flow;
  try {
    const res = await fetch('data/flows.json');
    const flows = await res.json();
    flow = flows.find(f => f.id === flowId);
  } catch (e) {}

  if (!flow) {
    document.getElementById('screenshot-grid').innerHTML = '<p class="state-msg">Flow not found.</p>';
    return;
  }

  // Update page title + header
  document.title = `${flow.label} — Competitor Viewer`;
  const titleEl = document.getElementById('viewer-title');
  const metaEl = document.getElementById('viewer-meta');
  if (titleEl) titleEl.textContent = flow.label;
  if (metaEl) metaEl.textContent = `${formatDate(flow.date)} · ${flow.count} screens`;

  // Build screenshot list by probing the directory
  // We rely on flow.count and the naming convention: zero-padded numbers + descriptive suffix
  // Since we can't list a directory from a static site, we use the prebuilt index in flows.json
  // The upload script writes a `screenshots/<id>/index.json` with the ordered filename list
  let filenames;
  try {
    const res = await fetch(`screenshots/${flow.dir}/index.json`);
    filenames = await res.json();
  } catch (e) {
    document.getElementById('screenshot-grid').innerHTML =
      '<p class="state-msg">Could not load screenshot index. Re-run upload-flow.js.</p>';
    return;
  }

  screenshots = filenames.map((name, i) => ({
    src: `screenshots/${flow.dir}/${name}`,
    label: name.replace(/^\d+-/, '').replace(/\.png$/, '').replace(/-/g, ' '),
    num: i + 1,
  }));

  renderGrid();
  loadAnalysis(flow);
  initLightbox();
}

function renderGrid() {
  const grid = document.getElementById('screenshot-grid');
  grid.innerHTML = screenshots.map((s, i) => `
    <div class="thumb-item" data-index="${i}" onclick="openLightbox(${i})">
      <img src="${s.src}" alt="${s.label}" loading="lazy">
      <div class="thumb-label">
        <span class="thumb-num">${s.num}</span> ${s.label}
      </div>
    </div>
  `).join('');
}

async function loadAnalysis(flow) {
  const section = document.getElementById('analysis-section');
  if (!section || !flow.hasAnalysis) { if (section) section.style.display = 'none'; return; }

  try {
    const res = await fetch(`screenshots/${flow.dir}/ANALYSIS.md`);
    if (!res.ok) throw new Error();
    const md = await res.text();
    document.getElementById('analysis-content').textContent = md;
    section.style.display = 'block';
  } catch (e) {
    section.style.display = 'none';
  }
}

/* ── Lightbox ── */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'Escape')     closeLightbox();
  });
}

function openLightbox(index) {
  current = index;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  const next = current + dir;
  if (next < 0 || next >= screenshots.length) return;
  current = next;
  renderLightbox();
}

function renderLightbox() {
  const s = screenshots[current];
  document.getElementById('lb-img').src = s.src;
  document.getElementById('lb-img').alt = s.label;
  document.getElementById('lb-label').textContent = `${s.num} / ${screenshots.length} — ${s.label}`;
  document.getElementById('lb-prev').disabled = current === 0;
  document.getElementById('lb-next').disabled = current === screenshots.length - 1;

  // Scroll the grid thumbnail into view
  const item = document.querySelector(`.thumb-item[data-index="${current}"]`);
  if (item) item.scrollIntoView({ block: 'nearest' });
}

// Initialise whichever page we're on
if (document.getElementById('flow-grid')) initIndex();
if (document.getElementById('screenshot-grid')) initViewer();
