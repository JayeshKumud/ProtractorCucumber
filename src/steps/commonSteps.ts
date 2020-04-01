import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { calculator } from '../pages/calculator';
import { logger } from '../../config/logger';
import chai from 'chai';

import { urls } from '../testdata/environment.json'

var calc = new calculator();
var expect = chai.expect;

Given('I navigate to {string} page url', async (url) => {

    switch (url) {

        case 'bank': {
            await browser.get(urls.bank).then(() => {
                logger.Log('browser navigate : ' + urls.bank)
            }).catch(() => { logger.Log('browser fail to navigate : ' + urls.bank) });
        }

        case 'calc': {
            await browser.get(urls.calc).then(() => {
                logger.Log('browser navigate : ' + urls.calc)
            }).catch(() => { logger.Log('browser fail to navigate : ' + urls.calc) });
        }
    }
});

Given('I verify page title {string}', async (title) => {
    await browser.getTitle().then((ttl) => {
        expect(ttl).to.equal(title);
        logger.Log("Browser Title is verified : " + title);
    })
});