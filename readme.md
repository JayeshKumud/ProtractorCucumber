Navigate to terminal
npm install // to install all the depedency in package.json
node ./node_modules/protractor/bin/webdriver-manager update // to install webdriver locally
npm test
  OR 
protractor out/config.js --suite SUITE NAME


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


To update to a new major version all the packages, install the npm-check-updates package globally:

npm install -g npm-check-updates
then run it:

ncu -u
this will upgrade all the version hints in the package.json file, to dependencies and devDependencies, so npm can install the new major version.

You are now ready to run the update:

npm update
If you just downloaded the project without the node_modules dependencies and you want to install the shiny new versions first, just run

npm install

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++