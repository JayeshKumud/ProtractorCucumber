Feature: Validate user API
    As {} I want to {} so that I can {}

    @smoke
    Scenario Outline: Get single user details
        Given I loaded Get user request
        When I perform GET user request for "<SingleUser>"
        Then the expected respose code is "<ExpectedCode>"
        And the expected status is "<ExpectedStatus>"

        Examples:
            | ScenarioID | Scenario Description | ExpectedCode | ExpectedStatus |
            | TS_GET_001 | Get single user      | 200          | pending        |