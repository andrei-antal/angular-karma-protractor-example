module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'spec/**.mocha.js'
    ],
    exclude: [],
    preprocessors: {
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['jsdom'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-mocha',
		  'karma-chai',
  		'karma-sinon',
      'karma-mocha-reporter',
      'karma-jsdom-launcher'
    ]
  })
}
