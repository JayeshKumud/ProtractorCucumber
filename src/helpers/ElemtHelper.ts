import { urls } from '../testdata/environment.json'
import { browser, ElementFinder, element, ExpectedConditions, protractor, by, ElementHelper } from 'protractor'
import { Logger } from './Logger';

export class ElemtHelper {
    private EC = protractor.ExpectedConditions;

    async sendKeys(element: ElementFinder, txtValue: string) {
        await element.sendKeys(txtValue).then(() => {
            Logger.log('Clear and Set value : ' + txtValue + ' to element');
        });
    }

    async clearSendKeys(element: ElementFinder, txtValue: string) {
        await element.clear().then(() => element.sendKeys(txtValue)).then(() => {
            Logger.log('Set value : ' + txtValue + ' to element');
        });
    }

    async click(element: ElementFinder) {
        await element.click().then(() => {
            Logger.log('clicked element option');
        })
    }

    async selectOption(select: ElementFinder, optionValue: string) {
        await select.element(by.cssContainingText('option', optionValue)).click().then(() => {
            Logger.log('Select option value : ' + optionValue + ' from element');
        });
    }

    async waitForPresent(element: ElementFinder) {
        return await browser.wait(this.EC.presenceOf(element));
    }

    async waitForDisplay(element: ElementFinder) {
        return await browser.wait(element.isDisplayed);
    }

    async waitForElement(element: ElementFinder) {
        await this.waitForPresent(element);
        await this.waitForDisplay(element);
    }

    async elementClickable(element: ElementFinder): Promise<ElementFinder> {
        await browser.wait(() => element.isElementPresent);
        await browser.wait(this.EC.elementToBeClickable(element)).then(() => {
            Logger.log('element : ' + + ' is clickable');
        });
        return element;
    }

}