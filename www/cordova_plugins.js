cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/nl.x-services.plugins.toast/www/Toast.js",
        "id": "nl.x-services.plugins.toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.toast/test/tests.js",
        "id": "nl.x-services.plugins.toast.tests"
    },
    {
        "file": "plugins/com.webank.hj.appinfo/www/appinfo.js",
        "id": "com.webank.hj.appinfo.appinfo",
        "clobbers": [
            "AppInfo"
        ]
    },
    {
        "file": "plugins/com.webank.hj.statistics/www/statistics.js",
        "id": "com.webank.hj.statistics.statistics",
        "clobbers": [
            "Statistics"
        ]
    },
    {
        "file": "plugins/com.webank.hj.token/www/webanktoken.js",
        "id": "com.webank.hj.token.webanktoken",
        "clobbers": [
            "WebankToken"
        ]
    },
    {
        "file": "plugins/com.webank.hj.commandchannel/www/cmdchannel.js",
        "id": "com.webank.hj.commandchannel.cmdchannel",
        "clobbers": [
            "CommandChannel"
        ]
    },
    {
        "file": "plugins/com.plugin.datepicker/www/android/DatePicker.js",
        "id": "com.plugin.datepicker.DatePicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/mobi.roshka.cordova.callphone/www/callphone.js",
        "id": "mobi.roshka.cordova.callphone.CallPhone",
        "clobbers": [
            "navigator.callphone"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/com.webank.wemoney.keyboard/www/nativekeyboard.js",
        "id": "com.webank.wemoney.keyboard.WBNumberPadPlugin",
        "clobbers": [
            "navigator.WBNumberPadPlugin"
        ]
    },
    {
        "file": "plugins/hu.dpal.phonegap.plugins.UniqueDeviceID/www/uniqueid.js",
        "id": "hu.dpal.phonegap.plugins.UniqueDeviceID.UniqueDeviceID",
        "merges": [
            "window.plugins.uniqueDeviceID"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.11",
    "cordova-plugin-whitelist": "1.0.1-dev",
    "cordova-plugin-console": "1.0.1-dev",
    "nl.x-services.plugins.toast": "2.0.5",
    "com.webank.hj.appinfo": "0.1.0",
    "com.webank.hj.statistics": "0.1.0",
    "com.webank.hj.token": "0.1.0",
    "com.webank.hj.commandchannel": "0.1.0",
    "com.plugin.datepicker": "0.6.0",
    "cordova-plugin-splashscreen": "2.0.0",
    "cordova-plugin-inappbrowser": "1.0.1-dev",
    "mobi.roshka.cordova.callphone": "0.0.1",
    "org.apache.cordova.network-information": "0.2.11",
    "com.webank.wemoney.keyboard": "0.1.0",
    "hu.dpal.phonegap.plugins.UniqueDeviceID": "1.2.0",
    "com.ionic.keyboard": "1.0.5"
}
// BOTTOM OF METADATA
});