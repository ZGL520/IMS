//折线图处理

var bossline = echarts.init(document.getElementById('bossrateline'));


var bossoption = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: []
    },
    grid: {
        top:'4%',
        left: '3%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisLine:{
            lineStyle:{
                color:'white',
                width:1
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'white',
                width:1
            }
        }
    },
    series: [{
        name: '老板利润',
        type: 'line',
        stack: '总量',
        data: [12, 13.2, 10.1, 13.2, 9, 23, 21]
    }]
};
bossline.setOption(bossoption);

var storeline = echarts.init(document.getElementById('storerateline'));
var storeoption = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: []
    },
    grid: {
        top:'4%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisLine:{
            lineStyle:{
                color:'white',
                width:1
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'white',
                width:1
            }
        }
    },
    series: [{
        name: '店铺利润百分比',
        type: 'line',
        stack: '总量',
        data: [12, 13.2, 10.1, 13.2, 9, 23, 21]
    }]
};
storeline.setOption(storeoption);


//泡泡图配置
// var data = [
//     [
//         [1,19,190000000,'Australia',1990],
//         [2,13,130000000,'Canada',1990],
//         [3,14,140000000,'China',1990],
//         [4,19,190000000,'Cuba',1990],
//         [5,21,210000000,'Finland',1990],
//         [6,10,100000000,'France',1990],
//         [7,17,170000000,'Germany',1990]
//     ]
// ];


// wtfoption = {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//         offset: 0,
//         color: '#f7f8fa'
//     }, {
//         offset: 1,
//         color: '#cdd0d5'
//     }]),
//     title: {
//         // text: '1990 与 2015 年各国家人均寿命与 GDP'
//     },
//     grid: {
//         top:'15%',
//         left: '3%',
//         right: '4%',
//         bottom: '1%',
//         containLabel: true
//     },
//     legend: {
//         right: 10,
//         data: ['1990']
//     },
//     xAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         }
//     },
//     yAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         },
//         scale: true,
//     },
//     // series: [{
//     //     name: '店铺利润百分比',
//     //     type: 'line',
//     //     stack: '总量',
//     //     data: data[0]
//     // }],
//     series: [{
//         // name: '1990',
//         data: data[0],
//         type: 'scatter',
//         symbolSize: function (data) {
//             return Math.sqrt(data[2]) / 5e2;
//         },
//         label: {
//             emphasis: {
//                 show: true,
//                 formatter: function (param) {
//                     return param.data[1];
//                 },
//                 position: 'top'
//             }
//         },
//         itemStyle: {
//             normal: {
//                 shadowBlur: 10,
//                 shadowColor: 'rgba(120, 36, 50, 0.5)',
//                 shadowOffsetY: 5,
//                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//                     offset: 0,
//                     color: 'rgb(251, 118, 123)'
//                 }, {
//                     offset: 1,
//                     color: 'rgb(204, 46, 72)'
//                 }])
//             }
//         }
//     }]
// };
//
// storeline.setOption(wtfoption);


// wtoption = {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//         offset: 0,
//         color: '#f7f8fa'
//     }, {
//         offset: 1,
//         color: '#cdd0d5'
//     }]),
//     title: {
//         // text: '1990 与 2015 年各国家人均寿命与 GDP'
//     },
//     grid: {
//         top:'15%',
//         left: '3%',
//         right: '4%',
//         bottom: '1%',
//         containLabel: true
//     },
//     legend: {
//         right: 10,
//         data: ['1990']
//     },
//     xAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         }
//     },
//     yAxis: {
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed'
//             }
//         },
//         scale: true,
//     },
//     // series: [{
//     //     name: '店铺利润百分比',
//     //     type: 'line',
//     //     stack: '总量',
//     //     data: data[0]
//     // }],
//     series: [{
//         // name: '1990',
//         data: data[0],
//         type: 'scatter',
//         symbolSize: function (data) {
//             return Math.sqrt(data[2]) / 5e2;
//         },
//         label: {
//             emphasis: {
//                 show: true,
//                 formatter: function (param) {
//                     return param.data[1];
//                 },
//                 position: 'top'
//             }
//         },
//         itemStyle: {
//             normal: {
//                 shadowBlur: 10,
//                 shadowColor: 'rgba(120, 36, 50, 0.5)',
//                 shadowOffsetY: 5,
//                 color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//                     offset: 0,
//                     color: 'rgb(251, 118, 123)'
//                 }, {
//                     offset: 1,
//                     color: 'rgb(204, 46, 72)'
//                 }])
//             }
//         }
//     }]
// };
// bossline.setOption(wtfoption);