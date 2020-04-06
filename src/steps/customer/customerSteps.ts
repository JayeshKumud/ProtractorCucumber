import { Given, When, Then, TableDefinition } from 'cucumber';
import chai from 'chai';
import { CustomerPage } from '../../pages/CustomerPage';

var customerPage = new CustomerPage();
var expect = chai.expect;

Given('I click Bank Manager login button on customer home page', async () => {
    await customerPage.btn_BankManagerLogin.click();
});

Given('I click Add Customer tab option on manager page', async () => {
    await customerPage.tab_AddCustomer.click();
});

Then('I created and verified customers with below test data', async (table: TableDefinition) => {
    await customerPage.addCustomers(table);
});
