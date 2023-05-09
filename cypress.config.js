const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  //go to config folder to find the custom config
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  //if the custom config doesnt exist 
  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  //read the custom config file
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: '2qkz2p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //if the custom config file exists, use it, otherwise use nothing
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern:"cypress/e2e/other/*.js",

    baseUrl:"http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin:true,
    // defaultCommandTimeout:10000, //10sec
    // pageLoadTimeout: 120000, //2min

    screenshotOnRunFailure: true,  //make scrennshot if test fails
    trashAssetsBeforeRuns: true, //clear files in downloads,screenshots,videos files before executing tests
    video: false,
    videoUploadOnPasses: false,
    
    viewportHeight: 1080,
    viewportWidth: 1920,

    retries: {
      runMode: 0,
      openMode: 0
    },

    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },

    // environment variable
    env:{
        first_name: "Sarah",
        webdriveruni_homepage: "http://www.webdriveruniversity.com"
    }
  },
});
