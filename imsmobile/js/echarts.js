var dom = document.getElementById("graph");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    // title:{
    //     left:'left',
    //     text:'近期收益',
    //     textStyle:{
    //         color:'white',
    //         fontSize:'16'
    //     }
    // },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisLine: {
            lineStyle: {
                color: 'white'
            }
        }

    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'white',
                height:'90%'
            }
        }
    },
    series: [{
        data: [15, 16, 20, 10, 8, 14, 19],
        type: 'line'
    }],
    grid:[{
        bottom:'15%',
        top:'15%'
    }]

};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}