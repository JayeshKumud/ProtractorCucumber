import { protractor } from "protractor/built/ptor";
import { browser } from "protractor";
import { logger } from '../../config/logger';
import { expect } from "chai";

export class alert {

    static verifyAndAcceptAlert(text: string) {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert not found");

        let alert = browser.switchTo().alert();
        let alertText = alert.getText();

        alertText.then(function (txt) {
            logger.Log(txt);
        })

        browser.sleep(2000);
        expect(alertText).contain(text);
        alert.accept();
    }
}