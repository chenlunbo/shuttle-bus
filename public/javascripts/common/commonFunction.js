/**
 * Created by Ivan on 15/8/20.
 */

var commonFunction = (function(){
    var loadDataWithAjax = function(url,headerData,postData,param,callBackSucceed,callBackFailed) {
        if(param.showLoading){
            if(param.loadingText){
                if(param.myApp){
                    param.myApp.showIndicator();
                }
            }
            else {
                if(param.myApp){
                    param.myApp.showIndicator();
                }
            }
        }
        jQuery.support.cors = true;
        console.log("url: " + url);
        return $.ajax({
            type : (param.callType != null)?(param.callType||'GET'):'GET',
            url :  url,
            //contentType : (param.contentType != null)?(param.contentType||'application/json'):'application/json',
            //dataType : (param.dataType != null)?(param.dataType||'json'):'json',
            cache : false,
            data: postData,
            headers: headerData,
            success : function(data, textStatus, request) {
                if(param.showLoading){
                    if(param.myApp){
                        param.myApp.hideIndicator();
                    }
                }
                if(data.success == false){
                    if(callBackFailed){
                        callBackFailed(data.error);
                    }
                    return;
                }
                if (callBackSucceed){
                    callBackSucceed(data);
                }
            },
            error : function(XMLHttpRequest,textStatus, errorThrown) {
                if(param.showLoading){
                    if(param.myApp){
                        param.myApp.hideIndicator();
                    }
                }
                if(textStatus == "abort"){
                    return;
                };
                if(callBackFailed){
                    callBackFailed();
                }
            }
        });
    };

    var callbackValidate = function(data, instance){
        if(data.errorMsg){
            instance.alert('Can not get data', 'Seabird');
            return true;
        } else{
            return false;
        }
    };

    var nullValueCheck = function (obj) {
        var value = obj.val();
        if(value == undefined || value == null || value == ""){
            return true;
        }
        else {
            return false;
        }
    };

    var validation = {
        emailFormatCheck : function () {
            if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)) {
                return false;
            }
            return true;
        },
        numberValueCheck : function (event) {
            var keyCode = event.which;
            if (keyCode == 46 || keyCode == 8 || keyCode == 37 || keyCode == 39 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ) {
                return true;
            }
            else {
                return false
            }
        },
        floatValueCheck : function (event) {
            var keyCode = event.which;
            if (keyCode == 110 || keyCode == 190 || keyCode == 46 || keyCode == 8 || keyCode == 37 || keyCode == 39 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ) {
                return true;
            }
            else {
                return false
            }
        }
    };

    // sort on key values
    var arraySort = function(key,desc) {
        return function(a,b){
            return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
        }
    };

    var getQueryString = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }else{
            return '';
        }
    }

    var getJasonArray = function(src){
        var strAry = new Array();
        var strParams = src.substring(src.indexOf('&') + 1);
        strAry = strParams.split(",");
        return strAry;
    }

    var getParamString = function(src, isMutiparam) {
        if(isMutiparam){
            return src.substring(src.indexOf('?') + 1, src.indexOf('&'));
        } else{
            return src.substring(src.indexOf('?') + 1);
        }

    }



    var getOptionJason = function(src){
        var strAry = getJasonArray(src);
        var jsonAry = new Array();
        for (i=0;i<strAry.length;i++){
            var key = strAry[i].substring(0, strAry[i].indexOf('='));
            jsonAry[i] = eval('(' + '{"text":"'+ key +'", "onClick": null})');

            if (i == 0) {
                var msgValue1 = strAry[i].substring(strAry[i].indexOf('=') + 1);
                jsonAry[i].onClick =
                    function () {
                        window.parent.postMessage(eval('({"event":"update-input-chat-text", "context":"' + msgValue1 + '"})'), window.self.location.origin);
                    }
            } else if (i == 1) {
                var msgValue2 = strAry[i].substring(strAry[i].indexOf('=') + 1);
                jsonAry[i].onClick =
                    function () {
                        window.parent.postMessage(eval('({"event":"update-input-chat-text", "context":"' + msgValue2 + '"})'), window.self.location.origin);
                    }

            } else if (i == 2) {
                var msgValue3 = strAry[i].substring(strAry[i].indexOf('=') + 1);
                jsonAry[i].onClick =
                    function () {
                        window.parent.postMessage(eval('({"event":"update-input-chat-text", "context":"' + msgValue3 + '"})'), window.self.location.origin);
                    }
            } else if (i == 3) {
                var msgValue4 = strAry[i].substring(strAry[i].indexOf('=') + 1);
                jsonAry[i].onClick =
                    function () {
                        window.parent.postMessage(eval('({"event":"update-input-chat-text", "context":"' + msgValue4 + '"})'), window.self.location.origin);
                    }
            } else if (i == 4) {
                var msgValue5 = strAry[i].substring(strAry[i].indexOf('=') + 1);
                jsonAry[i].onClick =
                    function () {
                        window.parent.postMessage(eval('({"event":"update-input-chat-text", "context":"' + msgValue5 + '"})'), window.self.location.origin);
                    }
            }
        }
        jsonAry[strAry.length] = eval('(' + '{"text":"Cancel", "close": true})');


        return jsonAry;
    }

    var callBackendForlogging = function(logdata){
      console.log("callBackendForlogging",logdata);
        $.ajax({
            url: '/NJS_PRS_CUST/secured/system/saveInteractionLog',
            data: logdata,
            type: 'post',
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log(XMLHttpRequest);
            },
            success: function(userProfile, status, headers){
                console.log('Interaction Log save Success');
            }
        });
    }

    var saveCookie = function(id, value, expire){
        document.cookie = id + "=" + escape(value) + "; expires=" + expire;
    }

    var getCookies = function(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }


    var callNativeFunction = function(src){
        var device = Framework7.prototype.device;
        if (device.ios || device.android) {
            //if it is from mobile
            var iframe = document.createElement("iframe");
            iframe.src = src;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            iframe.parentNode.removeChild(iframe);
            iframe = null;
        } else{
            //if it is from destop access
            var url = decodeURIComponent(src);
            if(url.indexOf('logging://') == 0){
                var strAry = new Array();
                var event = url.substring(url.indexOf('?') + 1, url.indexOf('&'));
                strAry = url.substring(url.indexOf('&') + 1).split("&");
                var userId = strAry[0].substring(strAry[0].indexOf('=') + 1);
                var shipmentNumber =  strAry[1].substring(strAry[1].indexOf('=') + 1);
                var payloads =  strAry[2].substring(strAry[2].indexOf('=') + 1);
                var appSessionId = getCookies('appSessionId');
                var userAgent = navigator.userAgent;
//                var logdata = eval('({"name":"' + event + '", "userId":"' + userId + '", "channel":"desktop", "appSessionId":"' + sessoionId +'","userAgent":"' + userAgent +'","shipmentNumber":"' + shipmentNumber
//                    +'","payloads":"' + payloads + '"})');
                var logdata = {
                    "name":  event,
                    "userId": userId ,
                    "channel":"desktop",
                    "appSessionId":appSessionId,
                    "userAgent":userAgent ,
                    "shipmentNumber": shipmentNumber,
                    "payloads": JSON.parse(payloads)
                };
                callBackendForlogging(logdata);
            }else if(url.indexOf('chat://') == 0){
                var title = getParamString(url, true);

                F7.instance().modal({
                    title: title,
                    verticalButtons: true,
                    buttons: getOptionJason(url)
                });
            }else if(url.indexOf('shipment://') == 0){
                var shipmentNumber = getParamString(url, false);
                var userId = getQueryString('userId');
                var link = '/NJS_PRS_CUST/secured/myShipments/myShipmentsDetailSeparate?shipmentNumber=' + shipmentNumber +'&userId=' + userId;
                var msg = {
                    "is_linktoShip":  'true',
                    "link": link
                };
                window.parent.postMessage(msg, window.self.location.origin);
            }else if(url.indexOf('link://') == 0){
                var link = getParamString(url, false);
                window.open('http://' + link, "_blank");
            }else if(url.indexOf('chatDirect://') == 0){
                var msg_chatDirect = getParamString(url, false);
                msg_chatDirect = msg_chatDirect.substring(msg_chatDirect.indexOf('=') + 1);
                var chatDirect_msg = {
                    "type": "chatDirect",
                    "msg": {
                        "event":"update-input-chat-text",
                        "context": msg_chatDirect
                    }
                }
                window.parent.postMessage(chatDirect_msg, window.self.location.origin);
            }
        }
    };

    var callNativeLogging = function(event, userId, shipmentNumber, payloads) {
        var url = "logging://?"+ encodeURIComponent(event);
        url += "&userId="+encodeURIComponent(userId);
        url += "&shipmentNumber="+encodeURIComponent(shipmentNumber);
        url += "&payloads="+encodeURIComponent(JSON.stringify(payloads));

        console.log("logging", event, userId, shipmentNumber, payloads, url);
        commonFunction.callNativeFunction(url);
    };

    return {
        loadDataWithAjax : loadDataWithAjax,
        nullValueCheck : nullValueCheck,
        validation : validation,
        arraySort : arraySort,
        callNativeFunction : callNativeFunction,
        callNativeLogging : callNativeLogging,
        saveCookie: saveCookie,
        callbackValidate: callbackValidate,
        getCookies: getCookies
    }
})();
