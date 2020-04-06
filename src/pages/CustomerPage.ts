import { ElementFinder, element, by, browser } from "protractor";
import { TableDefinition } from "cucumber";
import { Logger } from "../../config/Logger";
import { AlertDialog } from "../util/AlertDialog";
import { ElemtHelper } from "../util/ElemtHelper";


export class CustomerPage extends ElemtHelper {

    btn_Home: ElementFinder;
    btn_CustomerLogin: ElementFinder;
    btn_BankManagerLogin: ElementFinder;
    tab_AddCustomer: ElementFinder;
    tab_OpenAccount: ElementFinder;
    tab_Customers: ElementFinder;
    btn_AddCustomer: ElementFinder;
    input_FirstName: ElementFinder;
    input_LastName: ElementFinder;
    input_PostCode: ElementFinder;

    constructor() {
        super();
        this.btn_Home = element(by.css('.home'));
        this.btn_CustomerLogin = element(by.css("button[ng-click='customer()']"));
        this.btn_BankManagerLogin = element(by.css("button[ng-click='manager()']"));
        this.tab_AddCustomer = element(by.css("button[ng-class='btnClass1']"));
        this.tab_OpenAccount = element(by.css("button[ng-class='btnClass2']"));
        this.tab_Customers = element(by.css("button[ng-class='btnClass3']"));
        this.btn_AddCustomer = element(by.css(".btn-default"));
        this.input_FirstName = element(by.model('fName'));
        this.input_LastName = element(by.model('lName'));
        this.input_PostCode = element(by.model('postCd'));
    }

    async addCustomers(table: TableDefinition) {
        var rows = table.hashes();
        for (var i = 0; i < rows.length; i++) {
            Logger.Log(rows[i].Operator);
            await this.clearSendKeys(this.input_FirstName, rows[i].firstName);
            await this.clearSendKeys(this.input_LastName, rows[i].lastName);
            await this.clearSendKeys(this.input_PostCode, rows[i].pstCode);
            await this.click(this.btn_AddCustomer);
            await AlertDialog.verifyAndAcceptAlert(rows[i].message);
        }
    }
}