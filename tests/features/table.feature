Feature: Verify table feature
    As POC I want to display table feature so that I can use in project.

    @smoke
    Scenario: Verify table data
        Given I enter below number
            | firstNnumber |
            | 5            |
            | 10           |
        When I click button
        Then I see result