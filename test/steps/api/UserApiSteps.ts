import { Given, When, Then } from "cucumber";
import axios, { AxiosResponse } from "axios";
import { userJsonToMap } from "../../helpers/Convert";
import { Api } from "../../helpers/Api";
import { apiResource } from "../../testdata/data/apiResource.json";

var chai = require("chai");
var userMap: Map<string, string>;
chai.should();

var apiResponse: Promise<AxiosResponse>;
var SINGLE_USER_URL: string;
var api = new Api();

Given("I loaded Get user request", async () => {
  SINGLE_USER_URL = apiResource.url + apiResource.endpoint.singleUser;
});

When("I perform GET user request for single user", async () => {
  apiResponse = axios.get(SINGLE_USER_URL);
  return apiResponse;
});

Then("The expected status code is {string}", async (statusCode: string) => {
  (await apiResponse).status.should.be.equal(parseInt(statusCode));
});

Then("The expected status text is {string}", async (statusText: string) => {
  (await apiResponse).statusText.should.be.equal(statusText);
});

Given("Set {string} as {string} in default user body", async (key, value) => {
  return (userMap = userJsonToMap.updateUser(key, value));
});

When("I submit the POST request", async () => {
  apiResponse = api.post(
    apiResource.url + apiResource.endpoint.users,
    JSON.stringify(userMap)
  );
});
