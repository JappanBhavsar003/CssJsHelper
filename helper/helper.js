/*
    Title: Helper.js Helps to find out common functions.
    Description: Helper.js is intended to use many js function use in daily code
*/

'use strict';

var helper = {};

/*
    method: print(msg,anything)
    param: message in string,anything like aarray , object, string, number etc.
    desc: Print value of passed params.
*/
helper.print = function(msg,anything){
    try{
        var message = msg;
    }catch(ex){
        var message = "Given value is";
    }
    try{
        console.log(''+ msg  +' ->',anything);
    }catch(ex){
        console.log(ex);
    }
}

/*
    method: isObject(object)
    param: objet
    desc: Return true is param is an object otherwise false
*/
helper.isObject = function(obj){
    try{
        return obj === Object(obj);
    }catch(ex){
        helper.print('Error:',ex);
        return false;
    }
}

/*
    method: isJSONStr(string)
    param: JSON string
    desc: Return true if string is json string otherwise false
*/
helper.isJSONStr = function(string){
    try{
        var jsonObj = JSON.parse(string);
        return true;
    }catch(ex){
        helper.print('Error:',ex);
        return false;
    }
}

/*
    method: isArray(arrayVal)
    param: array value
    desc: return true if param is array otherwise return false
*/
helper.isArray = function(arrayVal){
    try{
        return Array.isArray(arrayVal);
    }catch(ex){
        helper.print('Error:',ex);
        return false;
    }
}

/*
    method: setStorage(val);
    param: val is anything like object , number, string, etc.
    desc: return true if value stored successfully.
*/
helper.setStorage = function(value){
    try{
        if(helper.isObject(value)){
            window.localStorage.setItem(JSON.stringify(value));
            return true;
        }else{
            window.localStorage.setItem(value);
            return true;
        }
    }catch(ex){
        helper.print('Error:',ex);
        return false;
    }
}

/*
    method: ajaxCall(val);
    param: uri, params, success callback, error callback, fail callback 
    desc: This is method is used for ajax call and in return it is calling function callback.  
*/
helper.ajaxCall = function(uri,params,success,error,fail){
    var uri = uri;
    var params = params;
    
}

/*
    method: copy(val);
    param: Anything like object, string, etc.
    desc: This is method is used deep copy of an param
*/
helper.copy = function(val){
    try{
        if(typeof val === "object" && !(Array.isArray(val))){
            return jQuery.extend(true, {}, val);
        }else if(Array.isArray(val)){
            return jQuery.extend(true, [], val);
        }else if(typeof val === "string"){
            return String(val);
        }else if(typeof val === "number"){
            return Number(val);
        }else{
           helper.print('val is' + typeof val + 'is not supported', val);
           return undefined;
        }         
    }catch(ex){
        helper.print('Error:',ex);
        return false;
    }
   
}

console.log(helper);