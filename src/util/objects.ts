import { urls } from '../testdata/environment.json'
import { browser, ElementFinder, element, ExpectedConditions, protractor } from 'protractor'
import { logger } from '../../config/logger';

export class objects {
    private EC = protractor.ExpectedConditions;

    elementClickable(element: ElementFinder) {
        browser.wait(() => element.isElementPresent);
        browser.wait(this.EC.elementToBeClickable(element)).then(() => {
            element.click();
        });
    }
}