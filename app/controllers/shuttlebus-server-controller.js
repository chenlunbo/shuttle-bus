/**
 * Created by CHENLA2 on 10/27/2016.
 */
'use strict';

//Load other application class
var ShuttleBusFacade = require('../facade/shuttlebus-facade');

//Define the interface of this class
exports.getAllShuttleBusList = getAllShuttleBusList;

function getAllShuttleBusList(app, io) {
    
    return function(req, res, next) {
        ShuttleBusFacade.getAllShuttleBusRouteInfo("userId", function(err, result) {
            if(err) {
                return next(err);
            } else {
                return res.json(result);
            }
        });
    }
}