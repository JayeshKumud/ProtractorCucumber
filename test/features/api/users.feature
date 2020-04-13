Feature: Validate user API
    As {} I want to {} so that I can {}

    @smoke
    Scenario Outline: <ScenarioID> - <ScenarioDescription>
        Given I loaded Get user request
        When I perform GET user request for single user
        Then The expected status code is "<StatusCode>"
        And The expected status text is "<StatusText>"

        Examples:
            | ScenarioID | ScenarioDescription | StatusCode | StatusText |
            | TS_GET_001 | Get single user     | 200        | OK         |

    @smoke
    Scenario Outline: <ScenarioID> - <ScenarioDescription>
        Given Set "name" as "<Name>" in default user body
        And Set "job" as "<Job>" in default user body
        When I submit the POST request
        Then The expected status code is "<StatusCode>"
        And The expected status text is "<StatusText>"

        Examples:
            | ScenarioID  | ScenarioDescription | Name | Job   | StatusCode | StatusText |
            | TS_POST_001 | Create valid user   | Bob  | weers | 201        | Created    |




