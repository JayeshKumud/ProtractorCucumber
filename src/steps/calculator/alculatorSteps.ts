import { Given, When, Then, TableDefinition } from 'cucumber';
import { CalculatorPage } from '../../pages/alculatorPage';
import { Logger, Level } from '../../../config/ogger';
import chai from 'chai';
import { ElemtHelper } from '../../util/ElemtHelper';


const calculatorPage: CalculatorPage = new CalculatorPage();
const expect = chai.expect;
const elemtHelper = new ElemtHelper();


Given('I enter first number as {string}', async (value) => {
    await calculatorPage.input_First.sendKeys(value).then(() => {
        Logger.Log("Set value for txt_first : " + value);
    });
});


Given('I enter second number as {string}', async (value) => {
    await calculatorPage.input_Second.sendKeys(value).then(() => {
        Logger.Log("Set value for txt_second : " + value);
    });
});

When('I click on {string} button', async (btnName) => {
    await calculatorPage.btn_Go.click().then(() => {
        Logger.Log("Click on Go button");
    });
});

Then('I see {string} display as result', async (value) => {
    await calculatorPage.lbl_Header.getText().then((text) => {
        expect(text).to.equal(value);
        Logger.Log("verified the display value : " + value);
    });
});

Then('I do math operation using below data and verify results', async (table: TableDefinition) => {
    await calculatorPage.mathOperation(table).then(() => {
        Logger.Log('Math Operation success')
    });
});