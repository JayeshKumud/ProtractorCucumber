import { Before, After, BeforeAll, Status, AfterAll, defineSupportCode } from "cucumber";
import { browser } from "protractor";
import { logger } from "../../config/logger";

// Run before all the feature
BeforeAll({ timeout: 60 * 1000 }, async () => {
    browser.waitForAngularEnabled(true);
    browser.manage().deleteAllCookies();
})

// Run before all the feature
AfterAll({ timeout: 60 * 1000 }, async () => {

})

Before(() => {
    browser.manage().window().maximize();
});

Before({ tags: "@smoke" }, () => {
    // This hook will be executed before scenarios tagged with @foo
});

After({ tags: "@smoke" }, () => {
    logger.Log('Tag completed');
})


After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});