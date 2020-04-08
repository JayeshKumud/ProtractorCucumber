import { ElementFinder, element, by, browser } from "protractor";
import { TableDefinition } from "cucumber";
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

    constructor() {
        super();
        this.btnHome = element(by.css('.home'));
        this.btnCustomerLogin = element(by.css("button[ng-click='customer()']"));
        this.btnBankManagerLogin = element(by.css("button[ng-click='manager()']"));
        this.tabAddCustomer = element(by.css("button[ng-class='btnClass1']"));
        this.tabOpenAccount = element(by.css("button[ng-class='btnClass2']"));
        this.tabCustomers = element(by.css("button[ng-class='btnClass3']"));
        this.btnAddCustomer = element(by.css(".btn-default"));
        this.txtFirstName = element(by.model('fName'));
        this.txtLastName = element(by.model('lName'));
        this.txtPostCode = element(by.model('postCd'));
    }

    async addCustomer(firstName: string, lastName: string, pstCode: string, message: string) {
        await this.clearSendKeys(this.txtFirstName, firstName);
        await this.clearSendKeys(this.txtLastName, lastName);
        await this.clearSendKeys(this.txtPostCode, pstCode);
        await this.click(this.btnAddCustomer);
        await AlertDialog.verifyAndAcceptAlert(message);
    }

    async addCustomers(customers: TableDefinition) {

        // check customers type, if TableDefinition is passed then operate accordingly
        if ((<TableDefinition>customers).hashes() !== undefined) {

            var tbl_customers = customers as TableDefinition;
            var rows = tbl_customers.hashes();

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
            Logger.log('Invalid data type is passed : ' + customers);
        }
    }

}