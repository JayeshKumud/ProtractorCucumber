Feature: Customer creation
    As use I want to create customer so that they can access site

    Background:
        Given I navigate to "bank" page url
        And I verify page title as "Protractor practice website - Banking App"

    @smoke
    Scenario: Create and verify customer
        And I click Bank Manager login button on customer home page
        When I click Add Customer tab option on manager page
        Then I created and verified customers with below test data
            | firstName | ABC                         |
            | lastName  | XYZ                         |
            | pstCode   | 421205                      |
            | message   | customer added successfully |

    @smoke
    Scenario: Create and verify customer
        And I click Bank Manager login button on customer home page
        When I click Add Customer tab option on manager page
        Then I created customer with "CUST_001" from data sheet