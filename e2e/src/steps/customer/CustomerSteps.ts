import { Given, Then, TableDefinition } from 'cucumber';
import { CustomerPage } from '../../page-objects/CustomerPage';
import { customers } from '../../testdata/data/customers.json';

var customerPage = new CustomerPage();

Given('I click Bank Manager login button on customer home page', async () => {
  await customerPage.btnBankManagerLogin.click();
});

Given('I click Add Customer tab option on manager page', async () => {
  await customerPage.tabAddCustomer.click();
});

Then(
  'I created and verified customers with below test data',
  async (customer: TableDefinition) => {
    var row = customer.rowsHash();
    await customerPage.addCustomer({
      firstName: row['firstName'],
      lastName: row['lastName'],
      postCode: row['postCode'],
      message: row['message'],
    });
  }
);

Then('I created customer with {string} from data sheet', async (Id: string) => {
  var customer = customers.filter((customer) => customer.Id === Id)[0];
  await customerPage.addCustomerUsingInterface({
    firstName: customer.firstname,
    lastName: customer.firstname,
    postCode: customer.postalcode,
    message: customer.message,
  });
});
