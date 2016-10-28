/**
 * Created by CHENLA2 on 10/26/2016.
 */
var myShuttleBus = (function () {

    var param = {
        vm : null
    };

    var onPageInit = function(page){
        initViewModel();
        getNotificationSettings();
    };

    var initViewModel = function(){
        param.vm = new myShuttleBusViewModel();
        ko.applyBindings(param.vm, document.getElementById('myShuttleBus'));

    };

    var getNotificationSettings = function(){

        commonFunction.loadDataWithAjax(
            interfaces.myShuttleBus.getAllShuttleBusList,
            null,
            null,
            {
                showLoading : true,
                myApp :  F7.instance()
            },
            function(data){
                if(commonFunction.callbackValidate(data, F7.instance())){
                    return F7.mainView().router.back();
                }
                param.vm.routeItems(data);
            },
            function(error){
                param.vm.routeItems([]);
                F7.instance().alert('Can not get data', 'Ooops', function () {
                    F7.mainView().router.back();
                });
            }
        )

    }

    return {
        onPageInit : onPageInit
    }
})();

var myShuttleBusViewModel = function () {
    var self = this;
    self.routeItems = ko.observableArray();
};
