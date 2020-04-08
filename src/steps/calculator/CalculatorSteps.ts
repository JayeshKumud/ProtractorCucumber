import { Given, When, Then, TableDefinition } from 'cucumber';
import { CalculatorPage } from '../../page-objects/CalculatorPage';
import { Logger, Level } from '../../helpers/Logger';
import chai from 'chai';
import { ElemtHelper } from '../../helpers/ElemtHelper';


const calculatorPage: CalculatorPage = new CalculatorPage();
const expect = chai.expect;
const elemtHelper = new ElemtHelper();


Given('I enter first number as {string}', async (value) => {
    await calculatorPage.txtFirst.sendKeys(value).then(() => {
        Logger.log("Set value for txt_first : " + value);
    });
});


Given('I enter second number as {string}', async (value) => {
    await calculatorPage.txtSecond.sendKeys(value).then(() => {
        Logger.log("Set value for txt_second : " + value);
    });
});

When('I click on {string} button', async (btnName) => {
    await calculatorPage.btnGo.click().then(() => {
        Logger.log("Click on Go button");
    });
});

Then('I see {string} display as result', async (value) => {
    await calculatorPage.lblHeader.getText().then((text) => {
        expect(text).to.equal(value);
        Logger.log("verified the display value : " + value);
    });
});

Then('I do math operation using below data and verify results', async (table: TableDefinition) => {
    await calculatorPage.mathOperation(table).then(() => {
        Logger.log('Math Operation success')
    });
});