import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('canonical production origin is configurable, never a guessed domain', () => {
  const config = fs.readFileSync('src/lib/site-url.ts','utf8');
  assert.match(config, /process\.env\.NEXT_PUBLIC_SITE_URL/);
  assert.match(config, /http:\/\/localhost:3000/);
});

test('explorations have complete local metadata and stable safe slugs', () => {
  const directory = 'content/explorations';
  if (!fs.existsSync(directory)) return;
  for (const file of fs.readdirSync(directory).filter(file => file.endsWith('.md'))) {
    assert.match(file,/^[a-z0-9-]+\.md$/);
    const raw = fs.readFileSync(path.join(directory,file),'utf8').replace(/\r\n/g,'\n');
    assert.match(raw, /^---\n[\s\S]*?title: .+/);
    assert.match(raw, /\ndescription: .+/);
    assert.match(raw, /\ntopic: .+/);
    assert.doesNotMatch(raw, /\[TODO\]|lorem ipsum/i);
  }
});

test('continuation handoff and original brief survive beyond the chat', () => {
  assert.ok(fs.existsSync('docs/BRIEF.md'));
  assert.match(fs.readFileSync('AGENTS.md','utf8'), /docs\/PROGRESS.md/);
  assert.match(fs.readFileSync('docs/PROGRESS.md','utf8'), /continue/);
});
