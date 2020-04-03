Feature: Customer creation
    As use I want to create customer so that they can access site

    Background:
        Given I navigate to "bank" page url
        And I verify page title as "Test"

    @smoke
    Scenario: Create a customer
        And I click Bank Manager login button
        And I click Add Customer tab option
        And I enter first Name as "ABC"
        And I enter last Name as "XYZ"
        And I enter post Code as "3232"
        When I click Add Customer button
        Then I see "Customer added successfully with customer id" alert message

    @smoke
    Scenario: Create and very customer
        And I am Add Customer tab option
        And I created customer with below test data
            | firstName | lastName | pstCode |
            | ABC       | XYZ      | 421205  |