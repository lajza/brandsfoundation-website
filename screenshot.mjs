import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

const dir = path.join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).filter(f => f.endsWith('.png')).length;
const filename = `screenshot-${existing + 1}${label}.png`;
const outPath = path.join(dir, filename);

const isMobile = process.argv[3] === 'mobile';
const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
if (isMobile) {
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
} else {
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
}
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Wait for fonts + animations
await new Promise(r => setTimeout(r, 800));

// Force all scroll-reveal elements visible instantly (skip transitions)
await page.evaluate(() => {
  const style = document.createElement('style');
  style.textContent = '* { transition: none !important; animation-duration: 0s !important; }';
  document.head.appendChild(style);
  document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
  document.querySelectorAll('.beams-fade-in').forEach(el => el.classList.add('beams-visible'));
});

await new Promise(r => setTimeout(r, 200));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`\n  ✦ Saved: ${outPath}\n`);
