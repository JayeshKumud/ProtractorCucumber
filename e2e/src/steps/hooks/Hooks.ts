import { Before, After, BeforeAll, Status, AfterAll } from 'cucumber';
import { browser } from 'protractor';
import { Logger } from '../../helpers/Logger';

// Run before all the features
BeforeAll({ timeout: 60 * 1000 }, async () => {
  Logger.log('-Before All-');
});

// Run after all the features
AfterAll(async () => {
  Logger.log('-After All-');
  browser.quit();
});

// Run before each scenario
Before(() => {
  Logger.log('-Before Each Scenario-');
});

// Run after each scenario
After(async function (scenario) {
  Logger.log('-After Each Scenario-');
  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});

// This hook will be executed before scenarios tagged with @smoke
Before({ tags: '@smoke' }, () => {});

// This hook will be executed after scenarios tagged with @smoke
After({ tags: '@smoke' }, () => {});
