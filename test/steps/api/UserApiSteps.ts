import { Given, When, Then } from "cucumber";
import axios, { AxiosResponse } from "axios";
import { userJsonToMap } from "../../helpers/Convert";
import { Api } from "../../helpers/Api";
import { apiResource } from "../../testdata/data/apiResource.json";
import { Logger } from "../../helpers/Logger";

var chai = require("chai");
var userMap: Map<string, string>;
chai.should();

var apiResponse: Promise<AxiosResponse>;
var SINGLE_USER_URL: string;
var LIST_USERS: string;
var api = new Api();

Given("I loaded Get request for single user", async () => {
  SINGLE_USER_URL = apiResource.url + apiResource.endpoint.singleUser;
});

When("I perform GET request for single user", async () => {
  Logger.log("SINGLE_USER_URL is : " + api.getUri({ url: SINGLE_USER_URL }));
  apiResponse = axios.get(SINGLE_USER_URL);
  return apiResponse;
});

Given("I loaded Get request for list users", async () => {
  LIST_USERS = apiResource.url + apiResource.endpoint.listUsers;
});

When(
  "I perform GET request for list users with params {string}",
  async (pageNo: string) => {
    Logger.log(
      "LIST_USERS : " +
        api.getUri({ url: LIST_USERS, params: { page: pageNo } })
    );
    apiResponse = axios.get(LIST_USERS, { params: { page: pageNo } });
    return apiResponse;
  }
);

Then("The expected status code is {string}", async (statusCode: string) => {
  (await apiResponse).status.should.be.equal(parseInt(statusCode));
});

Then("The expected status text is {string}", async (statusText: string) => {
  (await apiResponse).statusText.should.be.equal(statusText);
});

Given("Set {string} as {string} in default user body", async (key, value) => {
  return (userMap = userJsonToMap.updateUser(key, value));
});

When("I perform POST request for create user", async () => {
  Logger.log(
    "create user URL is : " +
      api.getUri({ url: apiResource.url + apiResource.endpoint.users })
  );
  apiResponse = api.post(
    apiResource.url + apiResource.endpoint.users,
    JSON.stringify(userMap)
  );
  await apiResponse;
});
