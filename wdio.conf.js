const { join } = require('path')

exports.config = {
        hostname: 'localhost',
        port: 4723,
        path: '/wd/hub',
        specs: [
            './test/specs/**/*.js'            
        ],
        framework: 'mocha',
        featureFlags: {
            specFiltering: true
        },
        capabilities: [{
            "platformName": "Android",
            "platformVersion": "8.1",
            "deviceName": "ebac-qe",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),            
            "appWaitActivity": 'com.wdiodemoapp.MainActivity'

        }]

}