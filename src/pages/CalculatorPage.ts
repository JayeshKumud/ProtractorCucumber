import { by, ElementFinder, element } from 'protractor'
import { TableDefinition } from 'cucumber';
import { Logger } from '../../config/Logger';
import { ElemtHelper } from '../util/ElemtHelper'
import chai from 'chai';

export class CalculatorPage extends ElemtHelper {

    expect = chai.expect;

    input_First: ElementFinder;
    input_Second: ElementFinder;
    btn_Go: ElementFinder;
    lbl_Header: ElementFinder;
    select_Operator: ElementFinder;

    constructor() {
        super();
        this.input_First = element(by.model("first"));
        this.input_Second = element(by.model("second"));
        this.btn_Go = element(by.id("gobutton"));
        this.lbl_Header = element(by.css("h2"));
        this.select_Operator = element(by.model('operator'));
    }

    async mathOperation(table: TableDefinition) {
        var rows = table.hashes();

        for (var i = 0; i < rows.length; i++) {
            await this.selectOption(this.select_Operator, rows[i].Operator)
            await this.clearSendKeys(this.input_First, rows[i].first);
            await this.clearSendKeys(this.input_Second, rows[i].second);
            await this.click(this.btn_Go);
            
            await this.lbl_Header.getText().then((text) => {
                this.expect(text).to.equal(rows[i].result);
                Logger.Log("verified the display value : " + rows[i].result);
            });
        }
    }

    setInputValues(first: string, second: string) {
        this.input_First.sendKeys(first);
        this.input_Second.sendKeys(second);
    }
}