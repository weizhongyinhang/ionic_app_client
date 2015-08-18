cordova.define("com.webank.hj.statistics.statistics", function(require, exports, module) { // 进入页面上报
exports.reportPageStart = function (pageName) {
    cordova.exec(function(){}, function(){}, 'Statistics', 'reportPageStart', [pageName]);
};

// 离开页面上报
exports.reportPageEnd = function (pageName) {
    cordova.exec(function(){}, function(){}, 'Statistics', 'reportPageEnd', [pageName]);
};

// 自定义事件上报（统计次数）
exports.reportEvent = function (eventID, param) {
    cordova.exec(function(){}, function(){}, 'Statistics', 'reportEvent', [eventID, param]);
};

//接口上报
exports.reportInterface = function (param) {
    cordova.exec(function(){}, function(){}, 'Statistics', 'reportInterface', [param]);
};
});
