cordova.define("mobi.roshka.cordova.callphone.CallPhone", function(require, exports, module) { var exec = require('cordova/exec');

var callphone = {
    call:function(success, error, number) {
        exec(success, error, "CallPhone", "callNumber", [number]);
    }
};

module.exports = callphone;
});
