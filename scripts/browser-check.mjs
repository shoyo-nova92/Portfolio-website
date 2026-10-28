import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const baseURL = process.env.TEST_BASE_URL || 'http://localhost:3000';
const browser = await chromium.launch();
const results = [];
const failures = [];
const errors = [];
await fs.mkdir('test-results', {recursive:true});
try {
  const context = await browser.newContext();
  const page = await context.newPage();
  const internalLinks = new Set();
  page.on('pageerror', error => errors.push(error.message));
  const notePaths = await fs.readdir('content/explorations');
  const routes = ['/', '/work/nova', '/work/neurofly', '/explorations', ...notePaths.filter(file=>file.endsWith('.md')).map(file=>`/explorations/${file.replace(/\.md$/,'')}`), '/resume'];
  for (const width of [1440,1280,768,390]) {
    await page.setViewportSize({width,height:1000});
    for (const route of routes) {
      try {
        const response = await page.goto(`${baseURL}${route}`, {waitUntil:'networkidle'});
        assert.equal(response.status(),200,`${route} response`);
        assert.equal(await page.locator('main').count(),1,`${route} main landmark`);
        assert.equal(await page.locator('h1').count(),1,`${route} h1`);
        assert.ok(await page.title(),`${route} title`);
        assert.equal(await page.locator('meta[property="og:image"]').count(),1,`${route} social preview image`);
        const shareTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
        assert.equal(shareTitle,await page.title(),`${route} route-specific share title`);
        const routeLinks = await page.locator('a[href]').evaluateAll(anchors=>anchors.map(a=>a.getAttribute('href')).filter(href=>href?.startsWith('/')));
        routeLinks.forEach(href=>internalLinks.add(href));
        const overflow = await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth + 1);
        assert.equal(overflow,false,`${route} horizontal overflow at ${width}`);
        const broken = await page.locator('img').evaluateAll(images=>images.filter(image=>image.complete && image.naturalWidth===0).map(image=>image.src));
        assert.deepEqual(broken,[],`${route} broken images`);
        const unsafe = await page.locator('a[target="_blank"]').evaluateAll(links=>links.filter(link=>!link.rel.includes('noopener') || !link.rel.includes('noreferrer')).map(link=>link.href));
        assert.deepEqual(unsafe,[],`${route} unsafe external links`);
        const a11y = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
        assert.deepEqual(a11y.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})),[],`${route} accessibility`);
        results.push({route,width,status:'pass'});
        if (width===1440 || width===390) await page.screenshot({path:`test-results/${route.replace(/\//g,'-')||'home'}-${width}.png`,fullPage:true});
      } catch(error) { failures.push({route,width,error:error.message}); }
    }
  }
  await page.goto(baseURL);
  await page.keyboard.press('Tab');
  assert.match(await page.locator(':focus').innerText(),/skip/i,'first keyboard target must be skip link');
  await page.keyboard.press('Enter');
  await page.emulateMedia({reducedMotion:'reduce'});
  assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
  for (const href of internalLinks) {
    const response=await context.request.get(`${baseURL}${href}`);
    assert.ok(response.ok(),`Internal link failed: ${href}`);
  }
  await page.goto(`${baseURL}/work/nova`);
  const disclosure = page.locator('details').first();
  const initialState = await disclosure.getAttribute('open');
  await disclosure.locator('summary').focus();
  await page.keyboard.press('Enter');
  assert.notEqual(await disclosure.getAttribute('open'),initialState,'keyboard toggles technical details');
  await page.goto(`${baseURL}/resume`);
  await page.getByRole('button',{name:'AI systems',exact:true}).click();
  assert.equal(await page.locator('#resume-nova').isVisible(),true);
  assert.equal(await page.locator('#resume-neurofly').isVisible(),false);
  await page.emulateMedia({media:'print'});
  assert.equal(await page.locator('#resume-neurofly').isVisible(),true,'print includes filtered project');
  assert.equal(await page.locator('#resume-creative').isVisible(),true,'print includes creative experience');
  assert.equal(await page.locator('.resume-toolbar').isVisible(),false,'print hides controls');
  await page.emulateMedia({media:'screen'});
  for (const route of ['/this-page-does-not-exist','/work/unknown','/explorations/unknown']) {
    const response=await page.goto(`${baseURL}${route}`);
    assert.equal(response.status(),404,`${route} must return 404`);
  }
  assert.deepEqual(errors,[],'browser runtime errors');
} catch(error) {failures.push({error:error.message});}
finally {await browser.close();}
await fs.writeFile('test-results/browser-results.json',JSON.stringify({baseURL,results,failures,errors},null,2));
console.log(`${results.length} route/viewport checks passed. ${failures.length} failures.`);
if (failures.length) {console.error(JSON.stringify(failures,null,2));process.exitCode=1;}
