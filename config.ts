import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {

  // set to "custom" instead of cucumber.
  framework: 'custom',
  directConnect: true,

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  suites: {
    'calc': '../src/features/calculator/*.feature',
    'cust': '../src/features/customer/*.feature',
    'table': '../src/features/table/*.feature',
    'Two': ['../src/features/calculator/*.feature', '../src/features/customer/*.feature'],
    'all':['../src/features/**/*.feature']
  },

  // require feature files
  specs: [
    '../src/features/**/*.feature'
  ],

  cucumberOpts: {
    tags: "@smoke",
    format: 'json:./Cucumber.json',
    
    // require step definitions
    require: [
      './src/**/*.js',
    ]
  },

  capabilities: {
    browserName: 'chrome'
  },

  onComplete: () => {

    var options = {
      theme: 'bootstrap',
      jsonFile: './Cucumber.json',
      output: './logger/report/report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: false,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
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