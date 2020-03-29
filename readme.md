Navigate to terminal
npm install // to install all the depedency in package.json
node ./node_modules/protractor/bin/webdriver-manager update // to install webdriver locally
npm test
  OR 
protractor out/config.js --suite SUITE NAME

Command to run from Jankins
Call npm install
Call node ./node_modules/protractor/bin/webdriver-manager update
Call npm test
  OR 
Call protractor out/config.js --suite SUITE NAME

Cucumber report in Jenkins

Install Cucumber Report plugin
Select 'Cucumber Report' from post build action
Set Cucumber.json as File Include Pattern
Set ./ as JSON Reports Path 