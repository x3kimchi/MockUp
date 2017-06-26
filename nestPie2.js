var dom = document.getElementById("nestPie2");
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
        data:['Permanent','Temporary']
    },
    series: [
        {
            name:'PermTemp',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '20%'],

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
                {value:40, name:'Permanent'},
                {value:60, name:'Temporary'}
            ],
			color: ['#A32020','#DC6900']
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['25%', '55%'],

            data:[
                {value:20, name:'Book Income'},
                {value:20, name:'Taxable Income'},
                {value:20, name:'Tax Liability'},
                {value:10, name:'Estimated & Extension'},
                {value:30, name:'Amount Due/(Refund)'},
            ],
			color: [
				'#ba495b', '#eda1b0',
				'#e68b3c', '#faaa44', '#ffcc4b'
			]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}