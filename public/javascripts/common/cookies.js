function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}


function getCookieString(name) {
    var ckName = 'seabird';
    var strCookie = '';
    if(window.localStorage){
        if(window.localStorage.getItem(ckName) != null){
            strCookie = window.localStorage.getItem(ckName);
        } else{
            strCookie = getCookie(ckName);
        }
    } else{
        strCookie = getCookie(ckName);
    }
    if((strCookie == null) || (strCookie == '')){
        mainApp.modal({
            title: 'Customer Console',
            afterText: 'Please login first.',
            verticalButtons: false,
            buttons: [{
                text: 'OK',
                onClick: function(){
                    window.location.replace("/NJS_PRS_CUST/web/login");
                }
            }]
        });
        return null;
    } else{
        var jasonCookie = eval('(' + strCookie + ')');
        if(name == 'USER_NAME'){
            return jasonCookie.USER_NAME;
        } else if (name == 'DISPLAY_NAME'){
            return jasonCookie.DISPLAY_NAME;
        }
    }
}
