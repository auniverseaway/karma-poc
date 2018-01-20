// Karma configuration
// Generated on Wed Jan 10 2018 19:23:20 GMT-0700 (MST)

module.exports = function(config) {
  const browsers = {
    chrome: {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    firefox: {
      base: 'SauceLabs',
      browserName: 'firefox'
    },
    safari: {
      base: 'SauceLabs',
      browserName: 'safari'
    },
    ie: {
      base: 'SauceLabs',
      browserName: 'internet explorer'
    }
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    customContextFile: 'index.html',

    client: {
      clearContext: false
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: "sample/**/*.*", included: false },
      'src/js/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/js/**/*.spec.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          { test: /\.spec.js?/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
      },
      watch: true,
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


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
    customLaunchers: browsers,
    browsers: Object.keys(browsers),

    sauceLabs: {
      testName: 'Web App Unit Tests',
      recordVideo: true
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
