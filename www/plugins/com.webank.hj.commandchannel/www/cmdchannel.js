cordova.define("com.webank.hj.commandchannel.cmdchannel", function(require, exports, module) { exports.execute = function (userParams, onSucc, onError) {
    cordova.exec(onSucc, onError, 'CommandChannel', 'execute', [userParams]);
};

});
