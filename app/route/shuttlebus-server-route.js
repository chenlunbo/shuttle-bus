/**
 * Created by CHENLA2 on 10/27/2016.
 */

var Controller = require('../controllers/shuttlebus-server-controller');

module.exports = function(app, io) {
    app.route('/getAllShuttleBusRouteInfo')
        .get(Controller.getAllShuttleBusList(app,io));
};
