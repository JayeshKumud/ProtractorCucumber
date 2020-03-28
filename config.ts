import { Config } from 'protractor';

export let config: Config = {

  // set to "custom" instead of cucumber.
  framework: 'custom',
  // directConnect: true,

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  tags: "@smoke",
  specs: [
    '../tests/features/home.feature'
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './tests/steps/*.js' 
    ]
  },

  capabilities: {
    browserName: 'firefox'
  }
};