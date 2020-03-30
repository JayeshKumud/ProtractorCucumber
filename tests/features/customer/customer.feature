Feature: Customer creation 
    As use I want to create customer so that they can access site

    Background: 
    Given I navigate to "calc" page url

    @smoke
    Scenario: Create a customer A
        And I enter first number as "5"
        And I enter second number as "5"
        When I click on "Go" button
        Then I see "11" display as result

    @smoke
    Scenario: Create a customer B
        And I enter first number as "5"
        And I enter second number as "5"
        When I click on "Go" button
        Then I see "12" display as result