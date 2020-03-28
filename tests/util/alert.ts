import { protractor } from "protractor/built/ptor";
import { browser } from "protractor";
import { log4jsconfig } from "../config/log4jsconfig";

export class alert {

    static verifyAndAcceptAlert(text: string) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert not found");

        let alert = browser.switchTo().alert();
        let alertText = alert.getText();

        alertText.then(function (txt) {
            log4jsconfig.Log().debug(txt);
        })

        browser.sleep(2000);
        expect(alertText).toContain(text);
        alert.accept();
    }
}