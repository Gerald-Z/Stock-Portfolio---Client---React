const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
