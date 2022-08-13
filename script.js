// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Mass shootings occurring in the US from 1980-2022'
    },
    subtitle: {
        align: 'left',
        text: 'Click the columns to view more details. Source: <a href="https://data.world/awram/us-mass-shootings" target="_blank">data.world</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total victims'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
    },

    series: [
        {
            name: "Shootings",
            colorByPoint: true,
            data: [
                {
                    name: "1980-1990",
                    y: 181,
                    drilldown: "1980-1990"
                },
                {
                    name: "1991-2000",
                    y: 338,
                    drilldown: "1991-2000"
                },
                {
                    name: "2001-2010",
                    y: 305,
                    drilldown: "2001-2010"
                },
                {
                    name: "2011-2020",
                    y: 1576,
                    drilldown: "2011-2020"
                },
                {
                    name: "2021-2022",
                    y: 179,
                    drilldown: "2021-2022"
                },
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: "1980-1990",
                id: "1980-1990",
                data: [
                    [
                        "1982",
                        11
                    ],
                    [
                        "1984",
                        48
                    ],
                    [
                        "1986",
                        21
                    ],
                    [
                        "1987",
                        20
                    ],
                    [
                        "1988",
                        11
                    ],
                    [
                        "1989",
                        56
                    ],
                    [
                        "1990",
                        14
                    ],
                ]
            },
            {
                name: "1991-2000",
                id: "1991-2000",
                data: [
                    [
                        "1991",
                        61
                    ],
                    [
                        "1992",
                        19
                    ],
                    [
                        "1993",
                        57
                    ],
                    [
                        "1994",
                        28
                    ],
                    [
                        "1995",
                        6
                    ],
                    [
                        "1996",
                        7
                    ],
                    [
                        "1997",
                        14
                    ],
                    [
                        "1998",
                        50
                    ],
                    [
                        "1999",
                        89
                    ],
                    [
                        "2000",
                        7
                    ]
                ]
            },
            {
                name: "2001-2010",
                id: "2001-2010",
                data: [
                    [
                        "2001",
                        9
                    ],
                    [
                        "2003",
                        15
                    ],
                    [
                        "2004",
                        12
                    ],
                    [
                        "2005",
                        26
                    ],
                    [
                        "2006",
                        28
                    ],
                    [
                        "2007",
                        85
                    ],
                    [
                        "2008",
                        41
                    ],
                    [
                        "2009",
                        78
                    ],
                    [
                        "2010",
                        11
                    ],
                ]
            },
            {
                name: "2011-2020",
                id: "2011-2020",
                data: [
                    [
                        "2011",
                        40
                    ],
                    [
                        "2012",
                        151
                    ],
                    [
                        "2013",
                        48
                    ],
                    [
                        "2014",
                        46
                    ],
                    [
                        "2015",
                        89
                    ],
                    [
                        "2016",
                        154
                    ],
                    [
                        "2017",
                        704
                    ],
                    [
                        "2018",
                        150
                    ],
                    [
                        "2019",
                        185
                    ],
                    [
                        "2020",
                        9
                    ],
                ]
            },
            {
                name: "2021-2022",
                id: "2021-2022",
                data: [
                    [
                        "2021",
                        59
                    ],
                    [
                        "2022",
                        120
                    ],
                ]
            },
            
        ]
    }
});
