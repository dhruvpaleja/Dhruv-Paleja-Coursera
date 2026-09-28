const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file));
const manifest = JSON.parse(read('manifest.json'));
const recorded = JSON.parse(read('verification.json'));
assert.equal(manifest.manifest_version, 3);
assert.equal(manifest.version, recorded.version);
const referenced = new Set([
  manifest.background.service_worker, manifest.action.default_popup,
  manifest.options_ui.page, ...Object.values(manifest.icons),
  ...Object.values(manifest.action.default_icon),
  ...manifest.content_scripts.flatMap(s => s.js),
  ...manifest.web_accessible_resources.flatMap(s => s.resources),
]);
for (const html of [manifest.action.default_popup, manifest.options_ui.page]) {
  for (const match of read(html).toString().matchAll(/<(?:script|img)\b[^>]*\bsrc\s*=\s*["']?([^\s"'>]+)/gi)) {
    if (!/^(?:https?:|data:)/.test(match[1])) referenced.add(match[1]);
  }
}
for (const file of referenced) assert.ok(fs.statSync(path.join(root, file)).isFile(), file);
for (const entry of recorded.files) {
  const hash = crypto.createHash('sha256').update(read(entry.file)).digest('hex');
  assert.equal(hash, entry.sha256, 'Runtime differs: ' + entry.file);
  if (entry.file.endsWith('.js')) execFileSync(process.execPath, ['--check', path.join(root, entry.file)]);
}
console.log('PASS: V' + manifest.version + ', ' + referenced.size + ' manifest paths, ' + recorded.files.length + ' runtime hashes, JavaScript syntax.');
