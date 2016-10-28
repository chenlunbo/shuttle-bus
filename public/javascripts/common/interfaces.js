/**
 * Created by CHENLA2 on 10/27/2016.
 */

var interfaces_server = "/backend";
var host = window.location.href;
if(host.indexOf('secured') >= 0){
    interfaces_server = "/backend/secured";
}
var interfaces = {
    myShuttleBus : {
        getAllShuttleBusList: interfaces_server + "/getAllShuttleBusRouteInfo/"
    }
};
