const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/../../Adidas Home Page/index.html');
  await page.screenshot({ path: 'jules-scratch/verification/hero-section-screenshot.png' });
  await browser.close();
})();
