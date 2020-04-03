import { urls } from '../testdata/environment.json'
import { browser, ElementFinder, element, ExpectedConditions, protractor, by, ElementHelper } from 'protractor'
import { logger } from '../../config/logger';

export class objects {
    private EC = protractor.ExpectedConditions;

    elementClickable(element: ElementFinder) {
        browser.wait(() => element.isElementPresent);
        browser.wait(this.EC.elementToBeClickable(element)).then(() => {
            element.click();
        });
    }

    async selectOption(select : ElementFinder, optionValue : string){
        await select.element(by.cssContainingText('option', optionValue)).click();
    }
}