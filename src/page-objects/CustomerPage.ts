import { ElementFinder, element, by, browser } from "protractor";
import { TableDefinition, Then } from "cucumber";
import { Logger } from "../helpers/Logger";
import { AlertDialog } from "../helpers/AlertDialog";
import { ElemtHelper } from "../helpers/ElemtHelper";

export class CustomerPage extends ElemtHelper {
  private btnHome: ElementFinder;
  private btnCustomerLogin: ElementFinder;
  public btnBankManagerLogin: ElementFinder;
  public tabAddCustomer: ElementFinder;
  private tabOpenAccount: ElementFinder;
  private tabCustomers: ElementFinder;
  private btnAddCustomer: ElementFinder;
  private txtFirstName: ElementFinder;
  private txtLastName: ElementFinder;
  private txtPostCode: ElementFinder;

  /**
   * Creates an instance of customer page.
   */
  constructor() {
    super();
    this.btnHome = element(by.css(".home"));
    this.btnCustomerLogin = element(by.css("button[ng-click='customer()']"));
    this.btnBankManagerLogin = element(by.css("button[ng-click='manager()']"));
    this.tabAddCustomer = element(by.css("button[ng-class='btnClass1']"));
    this.tabOpenAccount = element(by.css("button[ng-class='btnClass2']"));
    this.tabCustomers = element(by.css("button[ng-class='btnClass3']"));
    this.btnAddCustomer = element(by.css(".btn-default"));
    this.txtFirstName = element(by.model("fName"));
    this.txtLastName = element(by.model("lName"));
    this.txtPostCode = element(by.model("postCd"));
  }

  /**
   * TODO: comment addCustomer
   * @description Adds customer
   * @author Jayesh Kumud
   * @param firstName
   * @param lastName
   * @param pstCode
   * @param message
   */
  addCustomer = async <
    T extends {
      firstName: string;
      lastName: string;
      postCode: string;
      message: string;
    }
  >(
    custRec: T
  ) => {
    await this.clearSendKeys(this.txtFirstName, custRec.firstName);
    await this.clearSendKeys(this.txtLastName, custRec.lastName);
    await this.clearSendKeys(this.txtPostCode, custRec.postCode);
    await this.click(this.btnAddCustomer);
    await AlertDialog.verifyAndAcceptAlert(custRec.message);
  };

  /**
   * TODO: comment addCustomersGen
   * @description Add customers gen of customer page
   * @author Jayesh Kumud
   * @param customers is generic type, but it can only be TableDefinition or ABC
   */
  addCustomers = async <T extends TableDefinition | string>(customers: T) => {
    // check customers type, if TableDefinition is passed then operate accordingly
    if ((<TableDefinition>(<unknown>customers)).hashes() !== undefined) {
      var tblcustomers = (customers as unknown) as TableDefinition;
      var rows = tblcustomers.hashes();

      for (var i = 0; i < rows.length; i++) {
        await this.clearSendKeys(this.txtFirstName, rows[i].firstName);
        await this.clearSendKeys(this.txtLastName, rows[i].lastName);
        await this.clearSendKeys(this.txtPostCode, rows[i].pstCode);
        await this.click(this.btnAddCustomer);
        await AlertDialog.verifyAndAcceptAlert(rows[i].message);
      }
    }

    // check customers type, if TableDefinition is passed then operate accordingly
    else if (true) {
    }

    // invalid data type is passed
    else {
      Logger.log("Invalid data type is passed : " + customers);
    }
  };
}
