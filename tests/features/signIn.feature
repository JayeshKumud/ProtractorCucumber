Feature: Sign In Feature
    As math idiot I want to add two numbers so that I can have results.

    Background: 
    Given I navigate to calc app home page

    @smoke
    Scenario: Addition of two numbers
        And I enter first number as "5"
        And I enter second number as "5"
        When I click on "Go" button
        Then I see "11" display as result

    @smoke
    Scenario: Addition of two numbers
        And I enter first number as "5"
        And I enter second number as "5"
        When I click on "Go" button
        Then I see "12" display as result