import { by, ElementFinder, element } from 'protractor'
import { TableDefinition } from 'cucumber';
import { logger } from '../../config/logger';
import { objects } from '../util/objects'
import chai from 'chai';

export class calculator {

    expect = chai.expect;

    obj: objects;
    txt_first: ElementFinder;
    txt_second: ElementFinder;
    btn_Go: ElementFinder;
    lbl_Header: ElementFinder;
    select_Operator: ElementFinder;

    constructor() {
        this.txt_first = element(by.model("first"));
        this.txt_second = element(by.model("second"));
        this.btn_Go = element(by.id("gobutton"));
        this.lbl_Header = element(by.css("h2"));
        this.select_Operator = element(by.model('operator'));
        this.obj = new objects;
    }

    async mathOperation(table: TableDefinition) {
        var rows = table.hashes();

        for (var i = 0; i < rows.length; i++) {
            logger.Log(rows[i].Operator);
            await this.obj.selectOption(this.select_Operator, rows[i].Operator);
            await this.txt_first.sendKeys(rows[i].first);
            await this.txt_second.sendKeys(rows[i].second);
            await this.btn_Go.click();

            await this.lbl_Header.getText().then((text) => {
                this.expect(text).to.equal(rows[i].result);
                logger.Log("verified the display value : " + rows[i].result);
            });
        }
    }

    setInputValues(first: string, second: string) {
        this.txt_first.sendKeys(first);
        this.txt_second.sendKeys(second);
    }
}