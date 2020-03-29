import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {

  // set to "custom" instead of cucumber.
  framework: 'custom',
  directConnect: true,

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  suites: {
    'home': '../tests/features/home.feature',
    'signIn': '../tests/features/signIn.feature',
    'table': '../tests/features/table.feature',
    'all': ['../tests/features/home.feature', '../tests/features/signIn.feature', '../tests/features/table.feature']
  },

  // require feature files
  specs: [
    '../tests/features/*.feature'
  ],

  cucumberOpts: {
    tags: "@smoke",
    format: 'json:./report.json',
    // require step definitions
    require: [
      './tests/steps/*.js',
      './hooks/hooks/*js'
    ]
  },

  capabilities: {
    browserName: 'firefox'
  },

  onComplete: () => {

    var options = {
      theme: 'bootstrap',
      jsonFile: './report.json',
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