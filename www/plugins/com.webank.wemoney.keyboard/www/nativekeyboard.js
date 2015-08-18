cordova.define("com.webank.wemoney.keyboard.WBNumberPadPlugin", function(require, exports, module) { var exec = require('cordova/exec');

var WBNumberPadPlugin = {
    input:null,
    
    backspace:null,
    
    showKeyboard:function(type, func1, func2){
        this.input = func1;
        this.backspace = func2;
        exec(this.successCallBack, this.failCallBack, 'WBNumberPadPlugin', 'show', [type]);
    },

    hideKeyboardWithAnimation:function(){
        exec(this.successCallBack, this.failCallBack, 'WBNumberPadPlugin', 'hideWithAnimation', null);
    },

    hideKeyboard:function(){
        exec(this.successCallBack, this.failCallBack, 'WBNumberPadPlugin', 'hide', null);
    },

    getEncryptInputData:function(){
        exec(this.successCallBack, this.failCallBack, 'WBNumberPadPlugin', 'getEncryptInputData', null);
    },

    successCallBack:function(){
        console.log('success');
    },

    failCallBack:function(){
        console.log('fail');
    },

    onClickButton:function(text){
//        window.console.log(text);
//        var input = document.getElementById('identity');
//        input.value = input.value + text;
        this.input(text);
    },

    onClickBackSpace:function(){
//        var input = document.getElementById('identity');
//        var currentValue = input.value;
//        input.value = currentValue.substring(0,currentValue.length-1);
        this.backspace();
    },

    onGetEncryptData:function(data){
        alert(data);
    },
};

module.exports = WBNumberPadPlugin;
});
