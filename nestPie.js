var dom = document.getElementById("nestPie");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Germany','Australia','Mexico','United Kingdom']
    },
    series: [
        {
            name:'Countries',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10, name:'Germany', selected:true},
                {value:20, name:'Australia'},
                {value:40, name:'Mexico'},
                {value:30, name:'United Kingdom'}
            ],
			color: ['#dc6900','#a32020','#5dc6c1','#5b9bd5']
        },
        {
            name:'Entities',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:10, name:'Germany Entity'},
                {value:10, name:'Australia 1'},
                {value:10, name:'Australia 2'},
                {value:20, name:'Mexico 1'},
                {value:10, name:'Mexico 2'},
                {value:10, name:'Mexico 3'},
                {value:20, name:'UK 1'},
                {value:10, name:'UK 2'}
            ],
			color: [
				'#faaa44',
				'#d07885','#fad0d8',
				'#2f6160','#a2d9d7','#eaf6f5',
				'#48759b','#5b9bd5'
			]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}