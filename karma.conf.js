// Karma configuration
// Generated on Tue Nov 05 2013 10:47:41 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'app/lib/angular-v1.1.5/angular.js',
        'app/lib/angular-v1.1.5/angular-*.js',
        'app/lib/angular-v1.1.5/angular-mocks.js',

        'app/lib/angular-carousel-v0.0.8/angular-carousel.js',

        'app/js/**/*.js',
        'test/unit/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
        'karma.conf.js',

        // Attention:
        // angular-scenario.js cannot be included, otherwise you will get
        // "Empty test suite." inside test result.
        'app/lib/angular-v1.1.5/angular-scenario.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


      plugins : [
          'karma-junit-reporter',
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-jasmine'
      ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
