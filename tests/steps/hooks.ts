import { Before, After, BeforeAll, Status } from "cucumber";
import { browser } from "protractor";
import { logger } from "../../config/logger";

BeforeAll(() => {

})

Before(() => {
    browser.manage().window().maximize();
});

Before({ tags: "@smoke" }, () => {
    // This hook will be executed before scenarios tagged with @foo
});

After({ tags: "@smoke" }, () => {
    logger.Log().debug("Tag completed");
})

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});