/**
 * Created by CHENLA2 on 10/27/2016.
 */
'use strict';


exports.getAllShuttleBusRouteInfo = getAllShuttleBusRouteInfo;


function getAllShuttleBusRouteInfo(userId, callBackFn){
    var result = [{
        "typeName":"上班路线",
        "routeInfo":[
            {
                "route":"一号线",
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
                "route":"二号线",
                "details":[
                    {"station":"暨南大学","time":"7:41 am"},
                    {"station":"卓雅花园","time":"7:43 am"},
                    {"station":"武警支队","time":"7:44 am"},
                    {"station":"柠溪","time":"7:46 am"},
                    {"station":"香柠花园","time":"7:48 am"},
                    {"station":"南香里","time":"7:50 am"},
                    {"station":"公司","time":""}
                ]
            },
            {
                "route":"三号线",
                "details":[
                    {"station":"海荣新村","time":"7:30 am"},
                    {"station":"银石雅园","time":"7:34 am"},
                    {"station":"兰埔","time":"7:35 am"},
                    {"station":"竹苑","time":"7:39 am"},
                    {"station":"中电大厦","time":"7:42 am"},
                    {"station":"海滨南","time":"7:48 am"},
                    {"station":"燃气公司","time":"7:58 am"},
                    {"station":"公司","time":""}
                ]
            },
            {
                "route":"四号线",
                "details":[
                    {"station":"中澳丽珠花园","time":"7:21 am"},
                    {"station":"优越香格里","time":"7:21 am"},
                    {"station":"中澳新城景湖居","time":"7:22 am"},
                    {"station":"安阜工业区","time":"7:28 am"},
                    {"station":"锦绣阳光花园","time":"7:35 am"},
                    {"station":"汇星建材市场","time":"7:37 am"},
                    {"station":"龙塘","time":"7:40 am"},
                    {"station":"琪环村口","time":"7:41 am"},
                    {"station":"金涌大道南","time":"7:47 am"},
                    {"station":"雅居乐塞纳湖","time":"7:50 am"},
                    {"station":"岭峰","time":"7:51 am"},
                    {"station":"雅湖居","time":"7:52 am"},
                    {"station":"雅居乐路口","time":"7:55 am"},
                    {"station":"沙岗","time":"7:56 am"},
                    {"station":"大布","time":"7:57 am"},
                    {"station":"景峰广场","time":"8:13 am"},
                    {"station":"公司","time":""}
                ]
            },
            {
                "route":"五号线",
                "details":[
                    {"station":"新香洲万家","time":"7:33 am"},
                    {"station":"上冲","time":"7:35 am"},
                    {"station":"城轨明珠站","time":"7:36 am"},
                    {"station":"公交花园","time":"7:38 am"},
                    {"station":"长沙","time":"7:43 am"},
                    {"station":"东坑西","time":"7:52 am"},
                    {"station":"普陀寺","time":"7:53 am"},
                    {"station":"公司","time":""}
                ]
            },
            {
                "route":"六号线",
                "details":[
                    {"station":"南屏站（南湾大道）","time":"7:32 am"},
                    {"station":"日华花园","time":"7:50 am"},
                    {"station":"南油大酒店","time":"7:54 am"},
                    {"station":"裕华公司","time":"8:19 am"},
                    {"station":"公司","time":""}
                ]
            }
        ],
    },
        {
            "typeName":"下班路线",
            "routeInfo":[
                {
                    "route":"一号线",
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
                    "route":"二号线",
                    "details":[
                        {"station":"暨南大学","time":"7:41 am"},
                        {"station":"卓雅花园","time":"7:43 am"},
                        {"station":"武警支队","time":"7:44 am"},
                        {"station":"柠溪","time":"7:46 am"},
                        {"station":"香柠花园","time":"7:48 am"},
                        {"station":"南香里","time":"7:50 am"},
                        {"station":"公司","time":""}
                    ]
                },
                {
                    "route":"三号线",
                    "details":[
                        {"station":"海荣新村","time":"7:30 am"},
                        {"station":"银石雅园","time":"7:34 am"},
                        {"station":"兰埔","time":"7:35 am"},
                        {"station":"竹苑","time":"7:39 am"},
                        {"station":"中电大厦","time":"7:42 am"},
                        {"station":"海滨南","time":"7:48 am"},
                        {"station":"燃气公司","time":"7:58 am"},
                        {"station":"公司","time":""}
                    ]
                },
                {
                    "route":"四号线",
                    "details":[
                        {"station":"中澳丽珠花园","time":"7:21 am"},
                        {"station":"优越香格里","time":"7:21 am"},
                        {"station":"中澳新城景湖居","time":"7:22 am"},
                        {"station":"安阜工业区","time":"7:28 am"},
                        {"station":"锦绣阳光花园","time":"7:35 am"},
                        {"station":"汇星建材市场","time":"7:37 am"},
                        {"station":"龙塘","time":"7:40 am"},
                        {"station":"琪环村口","time":"7:41 am"},
                        {"station":"金涌大道南","time":"7:47 am"},
                        {"station":"雅居乐塞纳湖","time":"7:50 am"},
                        {"station":"岭峰","time":"7:51 am"},
                        {"station":"雅湖居","time":"7:52 am"},
                        {"station":"雅居乐路口","time":"7:55 am"},
                        {"station":"沙岗","time":"7:56 am"},
                        {"station":"大布","time":"7:57 am"},
                        {"station":"景峰广场","time":"8:13 am"},
                        {"station":"公司","time":""}
                    ]
                },
                {
                    "route":"五号线",
                    "details":[
                        {"station":"新香洲万家","time":"7:33 am"},
                        {"station":"上冲","time":"7:35 am"},
                        {"station":"城轨明珠站","time":"7:36 am"},
                        {"station":"公交花园","time":"7:38 am"},
                        {"station":"长沙","time":"7:43 am"},
                        {"station":"东坑西","time":"7:52 am"},
                        {"station":"普陀寺","time":"7:53 am"},
                        {"station":"公司","time":""}
                    ]
                },
                {
                    "route":"六号线",
                    "details":[
                        {"station":"南屏站（南湾大道）","time":"7:32 am"},
                        {"station":"日华花园","time":"7:50 am"},
                        {"station":"南油大酒店","time":"7:54 am"},
                        {"station":"裕华公司","time":"8:19 am"},
                        {"station":"公司","time":""}
                    ]
                }
            ],
        }
    ];

    callBackFn(null, result);
}
