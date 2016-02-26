// Karma configuration
// Generated on Thu Feb 25 2016 12:24:52 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','browserify'],


    // list of files / patterns to load in the browser
    files: [
      'client/lib/angular/angular.js',
      'client/lib/angular-mocks/angular-mocks.js',
      'client/lib/angular-ui-router/release/angular-ui-router.min.js',
      'client/lib/angular-file-model/angular-file-model.js',
      'client/lib/underscore/underscore-min.js',

"assets/peer.js",
"lib/moment/min/moment.min.js",
"lib/file-saver.js/FileSaver.js",
"lib/localforage/dist/localforage.min.js",
"lib/angular-localforage/dist/angular-localForage.min.js",
"lib/jquery/dist/jquery.min.js",
"lib/semantic/dist/semantic.min.js",
"app/peer/peer.js",
"app/services/services.js",
"app/application.js",

      'client/app/**/*.js',
      'specs/client/smokeTest.js'



    ],


    // list of files to exclude
    exclude: [
      'client/lib/FileSaver/index.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'specs/client/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: ['brfs']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
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


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
