const webapck = require("webpack");
const webpackConfig = require('./webpack.config');

module.exports = (config) => {
    config.set({
        browser: ["Chrome"],
        singleRun: false,
        frameworks: ["mocha"],
        files: [
            "src/**/*.test.tsx"
        ],
        preprocessors: {
            "src/**/*.test.tsx": ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'react/addons': true,
                "cheerio": "window",
            }
        },
        autoWatch: true,
        reporters: ['progress', 'html', 'coverage'],
    });
};