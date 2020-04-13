import { Given } from "cucumber";
import { browser } from "protractor";
import { Logger } from "../../helpers/Logger";
import chai from "chai";
import { urls } from "../../testdata/data/environment.json";
import { ElementHelper } from "../../helpers/ElementHelper";
import { config } from "../../config";

var expect = chai.expect;
const elementHelper = new ElementHelper();

Given("I navigate to {string} page url", async (url: string) => {
  switch (url) {
    case "bank": {
      await browser
        .get(urls.bank)
        .then(() => Logger.log("browser navigate : " + urls.bank));
      break;
    }
    case "calc": {
      await browser
        .get(urls.calc)
        .then(() => Logger.log("browser navigate : " + urls.calc));
      break;
    }
    default: {
      Logger.log("Fail to navigate, Invalid browser " + url);
      break;
    }
  }
  // maximize window, wait For Angular Enabled, delete cookie, and implicit Wait
  elementHelper.setBrowser(true, 10);
});

Given("I verify page title as {string}", async (title) => {
  await browser.getTitle().then((ttl) => {
    expect(ttl).to.equal(title);
    Logger.log("Browser Title is verified : " + title);
  });
});
