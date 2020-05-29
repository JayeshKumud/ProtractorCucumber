import { browser, ElementFinder, protractor, by } from 'protractor';
import { Logger } from './Logger';

/**
 * Elemt helper
 */
export class ElementHelper {
  private EC = protractor.ExpectedConditions;

  /**
   * TODO: comment description
   * @description Sets browser
   * @author Jayesh Kumud
   * @param wait For Angular Enabled
   * @param implicitly Wait : wait for any control
   * @param delete All Cookies
   * @param [winMaximize]
   */
  async setBrowser(
    waitForAngularEnabled: boolean,
    implicitlyWait: number,
    deleteAllCookies: boolean = true,
    winMaximize: boolean = true
  ) {
    browser.manage().deleteAllCookies();
    browser.manage().window().maximize();
    browser
      .manage()
      .timeouts()
      .implicitlyWait(implicitlyWait * 1000);
    browser.waitForAngularEnabled(waitForAngularEnabled);
  }

  /**
   * Sends keys
   * @param element
   * @param txtValue
   */
  async sendKeys(element: ElementFinder, txtValue: string) {
    await element.sendKeys(txtValue).then(() => {
      Logger.log('Clear and Set value : ' + txtValue + ' to element');
    });
  }

  /**
   * Clears send keys
   * @param element
   * @param txtValue
   */
  async clearSendKeys(element: ElementFinder, txtValue: string | number) {
    await element
      .clear()
      .then(() => element.sendKeys(txtValue))
      .then(() => {
        Logger.log('Set value : ' + txtValue + ' to element');
      });
  }

  /**
   * Clicks elemt helper
   * @param element
   */
  async click(element: ElementFinder) {
    await element.click().then(() => {
      Logger.log('clicked element option');
    });
  }

  /**
   * Selects option
   * @param select
   * @param optionValue
   */
  async selectOption(select: ElementFinder, optionValue: string) {
    await select
      .element(by.cssContainingText('option', optionValue))
      .click()
      .then(() => {
        Logger.log('Select option value : ' + optionValue + ' from element');
      });
  }

  /**
   * Waits for present
   * @param element
   * @returns
   */
  async waitForPresent(element: ElementFinder) {
    return await browser.wait(this.EC.presenceOf(element));
  }

  /**
   * Waits for display
   * @param element
   * @returns
   */
  async waitForDisplay(element: ElementFinder) {
    return await browser.wait(element.isDisplayed);
  }

  /**
   * Waits for element
   * @param element
   */
  async waitForElement(element: ElementFinder) {
    await this.waitForPresent(element);
    await this.waitForDisplay(element);
  }

  /**
   * Elements clickable
   * @param element
   * @returns clickable
   */
  async elementClickable(element: ElementFinder): Promise<ElementFinder> {
    await browser.wait(() => element.isElementPresent);
    await browser.wait(this.EC.elementToBeClickable(element)).then(() => {
      Logger.log('element : ' + +' is clickable');
    });
    return element;
  }
  
  // Code to reach parent from child node
  
   // private async verifyAttachmentErrorMessage(oelement: ElementFinder, error: string) {
  //   var errorElement = oelement.element(by.xpath('ancestor::kvk-upload-view[1]')).$('.k-form__error-message');
  //   await errorElement.isPresent().then(async () => {
  //     await errorElement.getText().then((text) => {
  //       expect(text).to.equal(error, 'Fail to find error message : ' + error + ' for ' + oelement.locator());
  //     });
  //   });
  // }

  // private async verifyErrorMessage(oelement: ElementFinder, error: string) {
  //   var errorElement = oelement
  //     .element(by.xpath('ancestor::div[1]'))
  //     .element(by.xpath('ancestor::div[1]'))
  //     .$('.k-form__error-message');
  //   await errorElement.isPresent().then(async () => {
  //     await errorElement.getText().then((text) => {
  //       expect(text).to.equal(error, 'Fail to find error message : ' + error + ' for ' + oelement.locator());
  //     });
  //   });
  // }

  // private async verifyChallengeDescriptionErrorMessage(error: string) {
  //   var errorElement = element(
  //     by.css('div.k-form__control.ng-invalid.k-form__control.k-form__control--error.k-form__control')
  //   ).$('.k-form__error-message');
  //   await errorElement.isPresent().then(async () => {
  //     await errorElement.getText().then((text) => {
  //       expect(text).to.equal(error, 'Fail to find error message : ' + error + ' for ' + errorElement.locator());
  //     });
  //   });
  // }
  
}
