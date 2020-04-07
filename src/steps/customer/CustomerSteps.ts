import { Given, Then, TableDefinition } from 'cucumber';
import { CustomerPage } from '../../page-objects/CustomerPage';
import { customers } from '../../testdata/customers.json'


var customerPage = new CustomerPage();

Given('I click Bank Manager login button on customer home page', async () => {
    await customerPage.btnBankManagerLogin.click();
});

Given('I click Add Customer tab option on manager page', async () => {
    await customerPage.tabAddCustomer.click();
});

Then('I created and verified customers with below test data', async (customer: TableDefinition) => {
    var row = customer.rowsHash();
    await customerPage.addCustomer(row['firstName'], row['lastName'], row['pstCode'], row['message']);
});

Then('I created customer with {string} from data sheet', async (Id: string) => {

    var map = new Map();
    customers.filter(async (customer) => {
        if (customer.Id === Id) {
            map.set('firstName', customer.firstname);
            map.set('lastName', customer.lastname);
            map.set('pstCode', customer.postalcode);
            map.set('message', customer.message);
        }
        return map;
    });
    
    await customerPage.addCustomer(map.get('firstName'), map.get('lastName'), map.get('pstCode'), map.get('message'));
});
