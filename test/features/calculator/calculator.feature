Feature: Calculator Operation
    As math idiot I want to add two numbers so that I can have results.

    Background:
        Given I navigate to "calc" page url
        And I verify page title as "Super Calculator"

    @smoke
    Scenario: Addition of two low numbers
        And I enter first number as "6"
        And I enter second number as "5"
        When I click on "Go" button
        Then I see "11" display as result

    @smoke
    Scenario: Math operations for two different number
        When I verify page title as "Super Calculator"
        Then I do math operation using below data and verify results
            | Operator | first | second | result |
            | +        | 5     | 5      | 10     |
            | +        | 15    | 5      | 20     |
            | -        | 10    | 5      | 5      |
            | -        | 10    | 4      | 20     |
