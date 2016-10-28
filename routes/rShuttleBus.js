/**
 * Created by CHENLA2 on 10/24/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
    var busList = [{"1":"first bus"},{"2":"first bus"},{"3":"first bus"},{"4":"first bus"},{"5":"first bus"},{"6":"first bus"}];
    res.render('./ShuttleBus/SB', busList);
});

router.get('/2', function(req, res, next) {
    res.render('./ShuttleBus/SB2');
});

router.get('/3', function(req, res, next) {
    var sbRoute = {
        "type":"onDuty",
        "typeName":"上班路线1",
        "routeInfo":[
            {
                "route":"No. 1",
                "details":[
                    {"station":"翠微","time":"7:38 am"},
                    {"station":"仁恒星园","time":"7:45 am"},
                    {"station":"香洲区府","time":"7:47 am"},
                    {"station":"南村","time":"7:48 am"},
                    {"station":"华子石西","time":"7:56 am"},
                    {"station":"银坑","time":"8:09 am"},
                    {"station":"公司","time":""}
                ]
            },
            {
                "route":"No. 2",
                "details":[
                    {"station":"暨南大学","time":"7:41 am"},
                    {"station":"卓雅花园","time":"7:43 am"},
                    {"station":"武警支队","time":"7:44 am"},
                    {"station":"柠溪","time":"7:46 am"},
                    {"station":"香柠花园","time":"7:48 am"},
                    {"station":"南香里","time":"7:50 am"},
                    {"station":"公司","time":""}
                ]
            }
        ],
    };
    res.render('./ShuttleBus/SB3', sbRoute);
});

router.get('/4', function(req, res, next) {
    res.render('./ShuttleBus/SB4', {"typeName":"XXXX"});
});

router.get('/4-1', function(req, res, next) {
    res.render('./ShuttleBus/SB4-1', {"typeName":"XXXX"});
});

router.get('/backend', function(req, res, next) {
    res.render('./ShuttleBus/SB4-1', {"typeName":"XXXX"});
});

module.exports = router;
