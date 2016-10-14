// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec/spec.js'],
  jasmineNodeOpts:{
        print: function () {console.log("HERE")}
    },
  // Options to be passed to Jasmine.
  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
   },

  chromeOnly: true,
  seleniumServerJar: 'node_modules/selenium-standalone-jar/bin/selenium-server-standalone-2.48.2.jar',
  specs: ['spec/spec.js'],
  baseUrl: 'http://127.0.0.1:8080/'
};
