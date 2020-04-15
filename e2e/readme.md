MAKE SURE THAT YOU ARE AT e2e (TEST DIRECTORY)

cd e2e

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
CONFIGURE PROJECT SETUP
Navigate to terminal
cd e2e
npm install // to install all the dependency in package.json
node ./node_modules/protractor/bin/webdriver-manager update // to install Webdriver locally
npm test

OR
protractor out/protractor.conf.js --suite SUITE NAME

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

RUN THE TESTS FROM JENKINS

Command to run from Jankins
Call cd e2e
Call npm install
Call node ./node_modules/protractor/bin/webdriver-manager update
Call npm test

OR

Call protractor out/config.js --suite SUITE NAME

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
GENERATE CUCUMBER REPORT IN JENKINS

Install Cucumber Report plugin
Select 'Cucumber Report' from post build action
Set Cucumber.json as File Include Pattern
Set ./ as JSON Reports Path (root directory path)

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
PUBLISH HTML REPORT IN JENKINS

Install Publish HTML Report plugin
Select 'Publish HTML Report' from post build action
HTML directory to archive: logs // root directory of report (including all resource)
Index page[s]: report/index.html // html report from root directory of report (logs)
Report title: Test Report
Include files: ++/+ (its star leave it default)

Now after running if generated Test report is not in correct format then

Manage Jenkins->
Manage Nodes->
Click settings(gear icon)->
click Script console on left and type in the following command:
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")

https://kb.froglogic.com/squish/integrations/jenkins/content-security-policy-csp-web-report/

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

To update to a new major version all the packages

MAKE SURE THAT YOU ARE AT e2e (TEST DIRECTORY)

cd e2e

install the npm-check-updates package globally:
npm install -g npm-check-updates

To upgrade all the version hints in the package.json file, to dependencies and devDependencies, so npm can install the new major version.
ncu -u

You are now ready to run the update:
npm update

If you just downloaded the project without the node_modules dependencies and you want to install the shiny new versions first:
npm install

If you want to completely remove the node_modules directory and want to do a fresh npm install
rm -rf node_modules && npm install

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Code for single thread repot generation

//Options on complete
onComplete: () => {
var options = {
theme: "bootstrap",
jsonFile: "./Cucumber.json",
output: "./logs/report/report.html",
reportSuiteAsScenarios: true,
scenarioTimestamp: true,
launchReport: false,
metadata: {
"App Version": "0.3.2",
"Test Environment": "STAGING",
Browser: "Chrome",
Platform: "Windows 10",
Parallel: "Scenarios",
Executed: "Remote",
},
};
reporter.generate(options);
},

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
