import { by, ElementFinder, element } from "protractor";
import { TableDefinition } from "cucumber";
import { Logger } from "../helpers/Logger";
import { ElemtHelper } from "../helpers/ElemtHelper";
import chai from "chai";

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
    this.selectOperator = element(by.model("operator"));
  }

  /**
   * TODO: comment mathOperation
   * @description Math operation of calculator page
   * @author Jayesh Kumud
   * @param is generic type but this can be only TableDefinition or ABC
   */
  mathOperation = async <T extends TableDefinition | string>(opsdata: T) => {
    // check opsdata type, if TableDefinition is passed then operate accordingly
    if ((<TableDefinition>(<unknown>opsdata)).hashes() !== undefined) {
      var tblopsdata = (opsdata as unknown) as TableDefinition;
      var rows = tblopsdata.hashes();

      for (var i = 0; i < rows.length; i++) {
        await this.selectOption(this.selectOperator, rows[i].Operator);
        await this.clearSendKeys(this.txtFirst, rows[i].first);
        await this.clearSendKeys(this.txtSecond, rows[i].second);
        await this.click(this.btnGo);

        await this.lblHeader.getText().then((text) => {
          this.expect(text).to.equal(rows[i].result);
          Logger.log("verified the display value : " + rows[i].result);
        });
      }
    }

    // invalid data type is passed
    else {
      Logger.log("Invalid data type is passed : " + opsdata);
    }
  };
  /**
   * TODO: comment setInputValues
   * @description Set input values of calculator page
   * @param
   */
  setInputValues = <T extends values>(data: T) => {
    this.txtFirst.sendKeys(data.first);
    if (data.last) {
      this.txtSecond.sendKeys(data.last);
    }
    if (data.operator) {
      this.txtSecond.sendKeys(data.operator);
    }
  };
}
