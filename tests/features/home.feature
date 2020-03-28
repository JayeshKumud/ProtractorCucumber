Feature: Math Operation
    As math idiot I want to add two numbers so that I can have results.

    @smoke
    Scenario: Addition of two numbers
        Given I navigate to calc app home page
        And I enter first number as "5"
        And I enter second number as "5"
        When I click on "" button
        Then I see "10" display as result