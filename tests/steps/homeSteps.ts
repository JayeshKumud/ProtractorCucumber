import { Given, When, Then } from 'cucumber';
import { browser, element, by } from 'protractor';
import { calculator } from '../pages/calculator';
import {log4jsconfig} from '../config/log4jsconfig';
import chai from 'chai';

let prop = require("../testdata/prop");
var calc = new calculator();
var expect = chai.expect;


Given('I navigate to calc app home page', async () => {
    await browser.get(prop.siteurlCalc);
    browser.getTitle().then((title) => {
        expect(title).to.equal('Super Calculator');
        //log4jsconfig.Log().debug("Browser Title is verified : " + title);
    })
 
    browser.ignoreSynchronization = false;
});


Given('I enter first number as {string}', async (value) => {
    await calc.txt_first.sendKeys(value);
    //log4jsconfig.Log().debug("Set value for txt_first : " + value);
});


Given('I enter second number as {string}', async (value) => {
    await calc.txt_second.sendKeys(value);
    //log4jsconfig.Log().debug("Set value for txt_second : " + value);
});

When('I click on {string} button', async (btnName) => {
    await calc.btn_Go.click();
    //log4jsconfig.Log().debug("Click on Go button");
});

Then('I see {string} display as result', async (value) => {
    await calc.lbl_Header.getText().then((text) => {
        expect(text).to.equal(value);
        //log4jsconfig.Log().debug("verified the display value : " + value);
    })
});