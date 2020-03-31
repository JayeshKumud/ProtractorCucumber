Feature: Calculator Operation
    As math idiot I want to add two numbers so that I can have results.

    Background:
        Given I navigate to "calc" page url
        And I verify page title "Super Calculator"

    @smoke
    Scenario: Addition of two low numbers
        And I enter first number as "5"
        And I enter second number as "5"
        When I click on "Go" button
        Then I see "10" display as result

    @smoke
    Scenario: Addition of two high numbers
        And I enter first number as "50"
        And I enter second number as "50"
        When I click on "Go" button
        Then I see "110" display as result