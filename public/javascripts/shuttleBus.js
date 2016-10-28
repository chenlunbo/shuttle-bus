/**
 * Created by CHENLA2 on 10/26/2016.
 */

$(document).ready(function () {
    F7.init();
});

var F7 = (function(){
    var param = {
        app : null,
        mainView : null
    };
    var init = function(){
        // new F7
        param.app = new Framework7({
            tapHold: true,
            init: false
        });
        // Add view
        param.mainView = param.app.addView('.view-main', {
            dynamicNavbar: true
        });
        // bind event
        initPageEvent();
        // init F7
        param.app.init();
    };
    var instance = function(){
        return param.app;
    };
    var mainView = function(){
        return param.mainView;
    };
    var initPageEvent = function(){
        param.app.onPageBeforeAnimation('myShuttleBus', function (page) {
            console.log("myShuttleBus show");
            myShuttleBus.onPageInit(page);
        });

        $('#id_route2SB').on('click', loadSettings);
    };

    var loadSettings = function() {
        var url = '/SB/4-1';
        F7.mainView().router.loadPage(url);
    };

    return {
        instance : instance,
        mainView : mainView,
        init : init
    };
})();
