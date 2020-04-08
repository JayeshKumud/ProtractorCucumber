import { by, ElementFinder, element } from 'protractor'
import { TableDefinition } from 'cucumber';
import { Logger } from '../helpers/Logger';
import { ElemtHelper } from '../helpers/ElemtHelper'
import chai from 'chai';

export class CalculatorPage extends ElemtHelper {

    expect = chai.expect;

    public txtFirst: ElementFinder;
    public txtSecond: ElementFinder;
    public btnGo: ElementFinder;
    public lblHeader: ElementFinder;
    private selectOperator: ElementFinder;

    /**
     * Creates an instance of calculator page.
     */
    constructor() {
        super();
        this.txtFirst = element(by.model("first"));
        this.txtSecond = element(by.model("second"));
        this.btnGo = element(by.id("gobutton"));
        this.lblHeader = element(by.css("h2"));
        this.selectOperator = element(by.model('operator'));
    }

    /**
     * TODO: comment mathOperation
     * @description Maths operation
     * @author Jayesh Kumud
     * @param table 
     */
    async mathOperation(table: TableDefinition) {
        var rows = table.hashes();

        for (var i = 0; i < rows.length; i++) {
            await this.selectOption(this.selectOperator, rows[i].Operator)
            await this.clearSendKeys(this.txtFirst, rows[i].first);
            await this.clearSendKeys(this.txtSecond, rows[i].second);
            await this.click(this.btnGo);

            await this.lblHeader.getText().then((text) => {
                this.expect(text).to.equal(rows[i].result);
                Logger.log("verified the display value : " + rows[i].result);
            });
        }
    }

    /**
     * Sets input values
     * @param first 
     * @param second 
     */
    setInputValues(first: string, second: string) {
        this.txtFirst.sendKeys(first);
        this.txtSecond.sendKeys(second);
    }
}