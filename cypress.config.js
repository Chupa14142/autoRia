const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://auto.ria.com/uk/',
    viewportWidth: 1920,
    viewportHeight: 800,
    retries: {
          // Configure retry attempts for `cypress run`. Default is 0
          "runMode": 2,
          // Configure retry attempts for `cypress open`. Default is 0
          "openMode": 0
        },
    excludeSpecPattern: [
          '**/cypress/e2e/1-getting-started/*',
          '**/cypress/e2e/2-advanced-examples/*'
      ]
  },
});
