import { Before, After, BeforeAll, Status, AfterAll, defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { Logger } from "../../helpers/Logger";

// Run before all the features
BeforeAll({ timeout: 60 * 1000 }, async () => {
    // turn off limits by default
    require('events').EventEmitter.defaultMaxListeners = 0
    browser.manage().timeouts().implicitlyWait(20 * 1000);
    browser.waitForAngularEnabled(true);
    browser.manage().deleteAllCookies();
});

// Run after all the features
AfterAll({ timeout: 60 * 1000 }, async () => {

});

// Run before each scenario
Before(() => {
    browser.manage().window().maximize();
});

// Run after each scenario
After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

// This hook will be executed before scenarios tagged with @smoke
Before({ tags: "@smoke" }, () => {

});

// This hook will be executed after scenarios tagged with @smoke
After({ tags: "@smoke" }, () => {
    Logger.log('Tag completed');
});