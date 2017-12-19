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
        name: '老板利润百分比',
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