import { Given } from "cucumber";
import { browser } from "protractor";
import { Logger } from "../../helpers/Logger";
import chai from "chai";
import { urls } from "../../testdata/environment.json";

var expect = chai.expect;

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
});

Given("I verify page title as {string}", async (title) => {
  await browser.getTitle().then((ttl) => {
    expect(ttl).to.equal(title);
    Logger.log("Browser Title is verified : " + title);
  });
});
