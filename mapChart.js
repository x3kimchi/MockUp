var dom = document.getElementById("mapChart");
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();

$.get('https://raw.githubusercontent.com/quocphongdn/json/master/USA.json', function (usaJson) {
	console.log("loadoed");
    myChart.hideLoading();

    echarts.registerMap('USA', usaJson, {
        Alaska: {              // 把阿拉斯加移到美国主大陆左下方
            left: -131,
            top: 25,
            width: 15
        },
        Hawaii: {
            left: -140,        // 夏威夷
            top: 25,
            width: 5
        },
        'Puerto Rico': {       // 波多黎各
            left: -76,
            top: 26,
            width: 2
        }
    });
    option = {
        title: {
            text: 'State & Local Return(s)',
            subtext: 'Data from www.census.gov',
            sublink: 'http://www.census.gov/popest/data/datasets.html',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value + '%';
            }
        },
        visualMap: {
            left: 'right',
            min: 0,
            max: 13.3,
            inRange: {
                color: ['#eaf6f5', '#fdeebf', '#ffcc4b', '#faaa44', '#dc6900', '#bf4410', '#a32020']
            },
            text:['High','Low'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'right',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'Taxable Income by State',
                type: 'map',
                roam: true,
                map: 'USA',
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                // 文本位置修正
                textFixed: {
                    Alaska: [20, -20]
                },
                data:[
                    {name: 'Alabama', value: 5},
                    {name: 'Alaska', value: 0},
                    {name: 'Arizona', value: 4.54},
                    {name: 'Arkansas', value: 6.9},
                    {name: 'California', value: 13.3},
                    {name: 'Colorado', value: 4.63},
                    {name: 'Connecticut', value: 6.99},
                    {name: 'Delaware', value: 6.6},
                    {name: 'Florida', value: 0},
                    {name: 'Georgia', value: 6},
                    {name: 'Hawaii', value: 8.25},
                    {name: 'Idaho', value: 7.4},
                    {name: 'Illinois', value: 3.75},
                    {name: 'Indiana', value: 3.23},
                    {name: 'Iowa', value: 8.98},
                    {name: 'Kansas', value: 4.6},
                    {name: 'Kentucky', value: 6},
                    {name: 'Louisiana', value: 6},
                    {name: 'Maine', value: 10.15},
                    {name: 'Maryland', value: 5.75},
                    {name: 'Massachusetts', value: 5.1},
                    {name: 'Michigan', value: 4.25},
                    {name: 'Minnesota', value: 9.85},
                    {name: 'Mississippi', value: 5},
                    {name: 'Missouri', value: 6},
                    {name: 'Montana', value: 6.9},
                    {name: 'Nebraska', value: 6.84},
                    {name: 'Nevada', value: 0},
                    {name: 'New Hampshire', value: 5},
                    {name: 'New Jersey', value: 8.97},
                    {name: 'New Mexico', value: 4.9},
                    {name: 'New York', value: 8.82},
                    {name: 'North Carolina', value: 5.5},
                    {name: 'North Dakota', value: 2.9},
                    {name: 'Ohio', value: 5},
                    {name: 'Oklahoma', value: 5},
                    {name: 'Oregon', value: 9.9},
                    {name: 'Pennsylvania', value: 3.07},
                    {name: 'Rhode Island', value: 6},
                    {name: 'South Carolina', value: 7},
                    {name: 'South Dakota', value: 0},
                    {name: 'Tennessee', value: 5},
                    {name: 'Texas', value: 0},
                    {name: 'Utah', value: 5},
                    {name: 'Vermont', value: 8.95},
                    {name: 'Virginia', value: 5.75},
                    {name: 'Washington', value: 0},
                    {name: 'West Virginia', value: 6.5},
                    {name: 'Wisconsin', value: 7.65},
                    {name: 'Wyoming', value: 0}
				]
            }
        ]
    };

    myChart.setOption(option);
},"json");;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}