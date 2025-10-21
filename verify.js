const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the local HTML file
  await page.goto('file://' + __dirname + '/Adidas Home Page/index.html');

  // Wait for the hero section to be visible
  await page.waitForSelector('.hero-section');

  // Take a screenshot of the hero section
  await page.locator('.hero-section').screenshot({ path: 'hero-section-screenshot.png' });

  await browser.close();
})();
