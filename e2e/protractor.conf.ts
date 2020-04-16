import { Config } from 'protractor';

var featurePath = '../../e2e/src/features/';

export let config: Config = {
  framework: 'custom',
  directConnect: true,
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
    require: ['./src/specs/**/*.js'],
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
      customData: {
        title: 'Run info',
        data: [
          { label: 'Project', value: 'Custom project' },
          { label: 'Release', value: '1.2.3' },
          { label: 'Cycle', value: 'B11221.34321' },
        ],
      },
    },
  ],
};
