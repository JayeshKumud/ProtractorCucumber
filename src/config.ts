import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter";

var featurePath = "../../src/features/";

export let config: Config = {
  // set to "custom" instead of cucumber.
  framework: "custom",
  directConnect: true,

  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  multiCapabilities: [
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        //args: ["--headless"],
        args: ["--safe-mode"],
      },

      //browserName: "chrome",
      // chromeOptions: {
      //   args: ["disable-infobars"],
      // },

      shardTestFiles: true,
      maxInstances: 3,
      metadata: {
        browser: {
          name: "chrome",
          version: "58",
        },
        device: "Windows",
        platform: {
          name: "Windows 10",
          version: "--",
        },
      },
    },
  ],

  suites: {
    calc: featurePath + "calculator/*.feature",
    cust: featurePath + "customer/*.feature",
    table: featurePath + "table/*.feature",
    Two: [
      featurePath + "calculator/*.feature",
      featurePath + "customer/*.feature",
    ],
    all: [featurePath + "**/*.feature"],
  },

  // require feature files | Debug feature file which is passed
  specs: [featurePath + "customer/*.feature"],

  cucumberOpts: {
    tags: "@smoke",
    format: "json:./logs/Cucumber.json",
    require: ["./steps/**/*.js"],
  },

  plugins: [
    {
      package: "protractor-multiple-cucumber-html-reporter-plugin",
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        removeOriginalJsonReportFile: true,
        displayDuration: true,
        //reportName: "/report.html",
      },
    },
  ],
};
