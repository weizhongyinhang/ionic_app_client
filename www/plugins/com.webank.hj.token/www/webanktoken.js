cordova.define("com.webank.hj.token.webanktoken", function(require, exports, module) { exports.getToken = function (success, error) {
    cordova.exec(success, error, 'WebankToken', 'getToken', []);
};

});
