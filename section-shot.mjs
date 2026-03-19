import puppeteer from 'puppeteer';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const dir = path.join(__dirname, 'temporary screenshots');
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

await page.evaluate(() => {
  const style = document.createElement('style');
  style.textContent = '* { transition: none !important; animation-duration: 0s !important; }';
  document.head.appendChild(style);
  document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
  document.querySelectorAll('.beams-fade-in').forEach(el => el.classList.add('beams-visible'));
});
await new Promise(r => setTimeout(r, 200));

const sections = ['#problem','#about','#process','#proof','#faq','#contact'];
for (const id of sections) {
  const el = await page.$(id);
  if (el) {
    const name = id.replace('#','');
    await el.screenshot({ path: path.join(dir, `mob-${name}.png`) });
    console.log(`mob-${name}.png`);
  }
}
await browser.close();
