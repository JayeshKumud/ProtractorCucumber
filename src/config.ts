import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

var featurePath = '../../src/features/';

export let config: Config = {

  // set to "custom" instead of cucumber.
  framework: 'custom',
  directConnect: true,

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  suites: {
    'calc': featurePath + 'calculator/*.feature',
    'cust': featurePath + 'customer/*.feature',
    'table': featurePath + 'table/*.feature',
    'Two': [featurePath + 'calculator/*.feature', featurePath + 'customer/*.feature'],
    'all': [featurePath + '**/*.feature']
  },

  // require feature files | Debug feature file which is passed
  specs: [
    featurePath + 'customer/*.feature'
  ],

  cucumberOpts: {
    tags: "@smoke",
    format: 'json:./Cucumber.json',

    // require step definitions -> ./steps/**/*.js and ./hooks/*.js
    require: [
      './steps/**/*.js',
      // './hooks/*.js'
    ]
  },

  capabilities: {
    browserName: 'chrome'
  },

  onComplete: () => {

    var options = {
      theme: 'bootstrap',
      jsonFile: './Cucumber.json',
      output: './logs/report/report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: false,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    reporter.generate(options);

    //more info on `metadata` is available in `options` section below.
    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
  }
};