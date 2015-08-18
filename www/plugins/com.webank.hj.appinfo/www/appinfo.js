cordova.define("com.webank.hj.appinfo.appinfo", function(require, exports, module) { exports.getAppInfo = function (success, error) {
    cordova.exec(success, error, 'AppInfo', 'getAppInfo', []);
};

});
