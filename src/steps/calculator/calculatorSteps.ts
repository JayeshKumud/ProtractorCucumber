import { Given, When, Then, TableDefinition } from 'cucumber';
import { browser, element, by } from 'protractor';
import { calculator } from '../../pages/calculator';
import { logger, Level } from '../../../config/logger';
import chai from 'chai';
import { objects } from '../../util/objects';


var calc = new calculator();
var expect = chai.expect;
var obj = new objects();


Given('I enter first number as {string}', async (value) => {
    await calc.txt_first.sendKeys(value);
    logger.Log("Set value for txt_first : " + value);
});


Given('I enter second number as {string}', async (value) => {
    await calc.txt_second.sendKeys(value);
    logger.Log("Set value for txt_second : " + value);
});

When('I click on {string} button', async (btnName) => {
    await calc.btn_Go.click();
    logger.Log("Click on Go button");
});

Then('I see {string} display as result', async (value) => {
    await calc.lbl_Header.getText().then((text) => {
        expect(text).to.equal(value);
        logger.Log("verified the display value : " + value);
    })
});

Then('I do math operation using below data and verify results', async function (table: TableDefinition) {
    await calc.mathOperation(table);
});