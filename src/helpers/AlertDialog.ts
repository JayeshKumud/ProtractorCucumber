import { protractor } from "protractor/built/ptor";
import { browser } from "protractor";
import { Logger } from "./Logger";
import { expect } from "chai";

export class AlertDialog {
  /**
   * TODO: comment verifyAndAcceptAlert
   * @description Verifys and accept alert
   * @author Jayesh Kumud
   * @param text
   */
  static async verifyAndAcceptAlert(text: string) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 4000, "Alert not found");

    let alert_Customer = await browser.switchTo().alert();
    await browser.driver.sleep(2 * 1000);
    alert_Customer.accept();
    await browser.driver.sleep(2 * 1000);

    // logger.Log(alert_Customer.getText());
    // alert_Customer.getText().then((text) => {
    //     expect(text).equal('Customer added successfully with customer id :6');
    // });
    //expect(alert_Customer.getText()).equal('Customer added successfully with customer id :6');
  }
}
