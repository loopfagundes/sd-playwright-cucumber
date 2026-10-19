const { After, Before, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { isHeadless } = require('./config');

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: isHeadless() });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }

  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});
