import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const baseURL = process.env.TEST_BASE_URL || 'http://localhost:3000';
const browser = await chromium.launch();
const checks = [];
await fs.mkdir('test-results', { recursive: true });
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  await context.addInitScript(() => {
    window.__sequenceStarts = [];
    document.addEventListener('animationstart', event => {
      const sequence = event.target.closest?.('[data-sequence]');
      if (sequence) window.__sequenceStarts.push({
        index: [...document.querySelectorAll('[data-sequence]')].indexOf(sequence),
        name: event.animationName,
      });
    });
  });
  const page = await context.newPage();
  for (const slug of ['nova', 'neurofly']) {
    await page.goto(`${baseURL}/work/${slug}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const sequence = page.locator('[data-sequence]').first();
    await sequence.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector('[data-sequence]')?.dataset.motionState === 'entered');
    await page.waitForFunction(() => window.__sequenceStarts.some(event => event.index === 0));
    const timing = await sequence.evaluate(element => element.getAnimations({ subtree: true }).map(animation => animation.effect.getComputedTiming()));
    assert.ok(timing.length > 0, `${slug}: visible signal animation runs`);
    assert.ok(timing.every(value => Number.isFinite(value.endTime) && value.endTime <= 6000), `${slug}: sequences are finite and bounded`);
    await page.waitForFunction(() => !document.querySelector('[data-sequence]').getAnimations({ subtree: true }).some(animation => animation.playState === 'running'), null, { timeout: 7000 });
    const starts = await page.evaluate(() => window.__sequenceStarts.filter(event => event.index === 0).length);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await sequence.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    assert.equal(await page.evaluate(() => window.__sequenceStarts.filter(event => event.index === 0).length), starts, `${slug}: scroll-back does not replay a sequence`);
    const flow = page.locator('.system-flow');
    await flow.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector('.system-flow')?.dataset.motionState === 'entered');
    assert.ok(await flow.locator('li').count() >= 5, `${slug}: semantic architecture remains readable`);
    checks.push(`${slug}: finite signal sequence, once per view, semantic flow`);
  }

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(`${baseURL}/work/nova`, { waitUntil: 'networkidle' });
  await page.locator('.system-flow').scrollIntoViewIfNeeded();
  await page.waitForTimeout(100);
  assert.equal(await page.evaluate(() => document.querySelector('main').getAnimations({ subtree: true }).some(animation => animation.playState === 'running')), false, 'reduced motion has no running effects');
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  checks.push('reduced-motion first load is static');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(`${baseURL}/work/neurofly`, { waitUntil: 'networkidle' });
  await page.locator('[data-sequence]').first().scrollIntoViewIfNeeded();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(100);
  assert.equal(await page.evaluate(() => document.querySelector('main').getAnimations({ subtree: true }).some(animation => animation.playState === 'running')), false, 'live reduced-motion change stops effects');
  checks.push('live reduced-motion change settles all effects');

  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noJS.newPage();
  await staticPage.goto(baseURL, { waitUntil: 'networkidle' });
  assert.equal(await staticPage.locator('h1').isVisible(), true);
  assert.equal(await staticPage.getByRole('link', { name: 'Explore Nova', exact: true }).isVisible(), true);
  assert.equal(await staticPage.locator('[data-reveal]').evaluateAll(elements => elements.every(element => Number(getComputedStyle(element).opacity) >= 0.99)), true, 'no-JS content remains fully visible');
  await staticPage.goto(`${baseURL}/work/nova`);
  assert.ok(await staticPage.locator('.system-flow li').count() >= 5);
  checks.push('no-JavaScript mobile content and architecture remain visible');
  console.log(`${checks.length} motion/accessibility checks passed.`);
  await fs.writeFile('test-results/motion-results.json', JSON.stringify({ baseURL, checks, status: 'pass' }, null, 2));
} catch (error) {
  await fs.writeFile('test-results/motion-results.json', JSON.stringify({ baseURL, checks, status: 'fail', error: error.message }, null, 2));
  throw error;
} finally {
  await browser.close();
}
