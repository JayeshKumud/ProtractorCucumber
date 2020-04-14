import { Config } from 'protractor';

var featurePath = '../../test/features/';

export let config: Config = {
  framework: 'custom',
  directConnect: true,

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  multiCapabilities: [
    {
      // browserName: "firefox",
      // "moz:firefoxOptions": {
      //   args: ["--safe-mode"],
      // },

      browserName: 'chrome',
      chromeOptions: {
        args: ['disable-infobars'],
        //args: ["--headless"],
      },
      metadata: {
        device: 'Windows Desktop',
        platform: {
          name: 'Windows',
          version: '10',
        },
        customData: {
          title: 'Sprint Run info',
          data: [
            { label: 'Project', value: 'KvK business challenge' },
            { label: 'Release', value: 'Sprint 0' },
            { label: 'Cycle', value: 'XXX.YYY' },
          ],
        },
      },
      shardTestFiles: true,
      maxInstances: 3,
    },
  ],

  suites: {
    api: featurePath + 'api/*.feature',
    calc: featurePath + 'calculator/*.feature',
    cust: featurePath + 'customer/*.feature',
    Two: [
      featurePath + 'calculator/*.feature',
      featurePath + 'customer/*.feature',
    ],
    all: [featurePath + '**/*.feature'],
  },

  // require feature files | Debug feature file which is passed
  specs: [featurePath + 'api/*.feature'],

  cucumberOpts: {
    tags: '@smoke',
    format: 'json:./logs/Cucumber.json',
    require: ['./steps/**/*.js'],
  },

  plugins: [
    {
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        removeOriginalJsonReportFile: true,
        displayDuration: true,
        reportName: 'report',
      },
    },
  ],
};
