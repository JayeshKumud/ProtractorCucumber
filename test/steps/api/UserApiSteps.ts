import { Given, When, Then } from "cucumber";
import axios, { AxiosResponse } from "axios";
import { iUsers } from "../../testdata/resType/iUsers";
import { Logger } from "../../helpers/Logger";

var chai = require("chai");
chai.should();
//var expect = chai.expect;

var apiResponse: Promise<AxiosResponse>;
var BASE_URL: String;
var END_POINT: String;

Given("I loaded Get user request", async () => {
  BASE_URL = "https://reqres.in/";
  END_POINT = "api/users/2";
});

When("I perform GET user request for {string}", async (string) => {
  apiResponse = axios.get(BASE_URL + "" + END_POINT);
  return apiResponse;
});

Then("the expected respose code is {string}", async (statuscode: string) => {
  //return expect((await apiResponse).status).to.be.eq(200);
  return (await apiResponse).status.should.be.equal(200);
});

Then("the expected status is {string}", async (statustext) => {
  var users = (await apiResponse).data as iUsers;
  Logger.log(users);
});
