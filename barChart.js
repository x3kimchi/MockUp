var dom = document.getElementById("barChart");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'State Tax';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['Pennsylvania','Indiana','South Carolina','New York','Alabama','Iowa','Michigan','California','Chicago']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Properties','Sales','Payroll']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Pennsylvania',
			color: ['#dc6900'],
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'Indiana',
            type:'bar',
			color: ['#ffcc4b'],
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'South Carolina',
            type:'bar',
			color: ['#5dc6c1'],
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'New York',
            type:'bar',
			color: ['#5b9bd5'],
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'Alabama',
            type:'bar',
			color: ['#87639f'],
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
        },
        {
            name:'Iowa',
            type:'bar',
			color: ['#ffcc4b'],
            barWidth : 5,
            stack: 'Others',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'Michigan',
            type:'bar',
			color: ['#a32020'],
            stack: 'Others',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'California',
            type:'bar',
			color: ['#2f6160'],
            stack: 'Others',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'Chicago',
            type:'bar',
			color: ['#48759b'],
            stack: 'Others',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}