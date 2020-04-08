import { browser, ElementFinder, protractor, by } from 'protractor'
import { Logger } from './Logger';

/**
 * Elemt helper
 */
export class ElemtHelper {
    private EC = protractor.ExpectedConditions;

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
    async clearSendKeys(element: ElementFinder, txtValue: string) {
        await element.clear().then(() => element.sendKeys(txtValue)).then(() => {
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
        })
    }

    /**
     * Selects option
     * @param select 
     * @param optionValue 
     */
    async selectOption(select: ElementFinder, optionValue: string) {
        await select.element(by.cssContainingText('option', optionValue)).click().then(() => {
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
            Logger.log('element : ' + + ' is clickable');
        });
        return element;
    }

}