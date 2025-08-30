import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';

const OUT = 'public/images/features';
const BASE = process.env.CAPTURE_BASE_URL || 'http://127.0.0.1:3000';
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 };

const targets = [
  { url: '/product/features', selector: '[data-capture="features-hero-frame"]', file: 'hero-dashboard.png' },
  { url: '/product/features', selector: '[data-capture="feature-temp-board"]', file: 'temp-board.png' },
  { url: '/product/features', selector: '[data-capture="feature-temp-split"]', file: 'temp-split.png' },
  { url: '/product/features', selector: '[data-capture="feature-haccp"]', file: 'haccp-audit.png' },
];

(async () => {
  await fs.mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: VIEWPORT.width, height: VIEWPORT.height },
    deviceScaleFactor: VIEWPORT.deviceScaleFactor,
    colorScheme: 'light',
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();

  // simple retry helper to wait for dev server
  async function gotoWithRetry(url, tries = 10) {
    for (let i = 0; i < tries; i++) {
      try {
        await page.goto(url, { waitUntil: 'load', timeout: 10000 });
        return;
      } catch (e) {
        if (i === tries - 1) throw e;
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  }

  for (const t of targets) {
    await gotoWithRetry(`${BASE}${t.url}`);
    const el = await page.waitForSelector(t.selector, { state: 'visible', timeout: 15000 });
    await el.screenshot({ path: `${OUT}/${t.file}` });
    console.log(`Saved ${t.file}`);
  }

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
