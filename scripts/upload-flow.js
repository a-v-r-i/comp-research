#!/usr/bin/env node
/**
 * upload-flow.js — Add a new competitor onboarding run to the viewer site
 *
 * Usage:
 *   node scripts/upload-flow.js \
 *     --dir /path/to/liven-onboarding-2026-03-20-6 \
 *     --competitor "Liven" \
 *     --label "Liven Onboarding"
 *
 * The flow ID and date are parsed from the directory name automatically.
 * Run this from the root of the competitor-viewer repo.
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ── Parse CLI args ──────────────────────────────────────────────────────────
const args = process.argv.slice(2);
function arg(name) {
  const i = args.indexOf('--' + name);
  return i !== -1 ? args[i + 1] : null;
}

const sourceDir  = arg('dir');
const competitor = arg('competitor');
const label      = arg('label');

if (!sourceDir || !competitor || !label) {
  console.error('Usage: node scripts/upload-flow.js --dir <path> --competitor <name> --label <label>');
  process.exit(1);
}

if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

// ── Derive flow ID and date from directory name ─────────────────────────────
// Expected pattern: <anything>-YYYY-MM-DD or <anything>-YYYY-MM-DD-N
const dirName   = path.basename(sourceDir);
const dateMatch = dirName.match(/(\d{4}-\d{2}-\d{2}(?:-\d+)?)$/);
const datePart  = dateMatch ? dateMatch[1] : dirName;

// Flow ID = competitor slug + date part
const competitorSlug = competitor.toLowerCase().replace(/\s+/g, '-');
const flowId = `${competitorSlug}-${datePart}`;
const date   = datePart.replace(/-\d+$/, ''); // strip run suffix for the date field

console.log(`\n📦  Flow ID:     ${flowId}`);
console.log(`📅  Date:        ${date}`);
console.log(`📂  Source:      ${sourceDir}`);

// ── Collect PNGs ────────────────────────────────────────────────────────────
const allFiles  = fs.readdirSync(sourceDir).sort();
const pngFiles  = allFiles.filter(f => f.toLowerCase().endsWith('.png'));
const hasAnalysis = allFiles.includes('ANALYSIS.md');

if (pngFiles.length === 0) {
  console.error('No PNG files found in source directory.');
  process.exit(1);
}

console.log(`🖼   Screenshots: ${pngFiles.length}`);
if (hasAnalysis) console.log(`📋  ANALYSIS.md found — will include`);

// ── Copy files into repo ─────────────────────────────────────────────────────
const destDir = path.join('screenshots', flowId);
fs.mkdirSync(destDir, { recursive: true });

for (const file of pngFiles) {
  fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, file));
}
if (hasAnalysis) {
  fs.copyFileSync(path.join(sourceDir, 'ANALYSIS.md'), path.join(destDir, 'ANALYSIS.md'));
}

// Write index.json — ordered list of PNG filenames (used by viewer to load screenshots)
fs.writeFileSync(path.join(destDir, 'index.json'), JSON.stringify(pngFiles, null, 2));

console.log(`✅  Copied ${pngFiles.length} files to ${destDir}/`);

// ── Update flows.json ────────────────────────────────────────────────────────
const flowsPath = 'data/flows.json';
let flows = [];
try {
  flows = JSON.parse(fs.readFileSync(flowsPath, 'utf8'));
} catch (e) {
  console.warn('data/flows.json not found, creating new one.');
}

// Remove existing entry with same ID (allows re-upload)
flows = flows.filter(f => f.id !== flowId);

flows.push({
  id: flowId,
  competitor,
  label,
  date,
  count: pngFiles.length,
  dir: flowId,
  thumbnail: `screenshots/${flowId}/${pngFiles[0]}`,
  hasAnalysis,
});

fs.writeFileSync(flowsPath, JSON.stringify(flows, null, 2) + '\n');
console.log(`✅  Updated data/flows.json (${flows.length} flows total)`);

// ── Git commit & push ────────────────────────────────────────────────────────
console.log('\n🚀  Committing and pushing to GitHub…');
try {
  execSync('git add screenshots/ data/flows.json', { stdio: 'inherit' });
  execSync(`git commit -m "Add ${flowId} (${pngFiles.length} screenshots)"`, { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });
  console.log('\n✅  Pushed! Netlify will deploy in ~30 seconds.');
  console.log('    Check your Netlify dashboard for the live URL.\n');
} catch (e) {
  console.error('\n❌  Git push failed. Check the error above.');
  process.exit(1);
}
