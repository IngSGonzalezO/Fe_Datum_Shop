import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ApexResponsive, ApexNonAxisChartSeries, ApexTitleSubtitle, ApexTheme, ApexMarkers, ApexAnnotations, ApexGrid, ApexForecastDataPoints, ApexNoData, ApexStates } from "ng-apexcharts";

let primary_color = localStorage.getItem('primary_color') || 'rgb(36,105, 92)';;
let secondary_color = localStorage.getItem('secondary_color') || 'rgb(186, 137, 93)';

export interface ApexOptions {
  annotations?: ApexAnnotations;
  chart?: ApexChart;
  colors?: any[];
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  forecastDataPoints?: ApexForecastDataPoints;
  grid?: ApexGrid;
  labels?: string[];
  legend?: ApexLegend;
  markers?: ApexMarkers;
  noData?: ApexNoData;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  states?: ApexStates;
  stroke?: ApexStroke;
  subtitle?: ApexTitleSubtitle;
  theme?: ApexTheme;
  title?: ApexTitleSubtitle;
  tooltip?: ApexTooltip;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
}

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  tooltip?: any;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis;
  legend?: ApexLegend;
  labels?: string[];
  plotOptions?: ApexPlotOptions;
  fill?: ApexFill;
  responsive?: ApexResponsive[];
  pieseries?: ApexNonAxisChartSeries;
  title?: ApexTitleSubtitle;
  theme?: ApexTheme;
  colors?: string[];
  markers?: ApexMarkers;
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
};


export let bar: ChartOptions | any = {
  series: [{
    name: "Yearly Profit",
    data: [{
      x: "Jan",
      y: 1500
    }, {
      x: "Feb",
      y: 3000
    }, {
      x: "Mar",
      y: 1800
    }, {
      x: "Apr",
      y: 3000,
      fillColor: secondary_color,
    }, {
      x: "May",
      y: 1800
    }, {
      x: "Jun",
      y: 1500
    }, {
      x: "Jul",
      y: 2500
    }, {
      x: "Sep",
      y: 1500,
      fillColor: secondary_color,
    }, {
      x: "Oct",
      y: 2000
    }]
  }],
  colors: [primary_color],
  chart: {
    height: 250,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      startingShape: "rounded",
      endingShape: "rounded",
      colors: {
        backgroundBarColors: ["#e5edef"],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 9
      }
    },
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    labels: {
      show: true,
    },
    axisTicks: {
      show: false,
    }
  },
  yaxis: {
    labels: {
      show: false,
    }
  },
};

export let Transaction: ChartOptions | any = {
  series: [{
    name: 'series1',
    data: [90, 78, 90, 84, 94, 60, 95, 88, 95]
  }],
  chart: {
    height: 405,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  // xaxis: {
  //     type: 'datetime',
  //     enabled: false,
  //     categories: ["2023-09-19T00:00:00.000Z", "2023-09-19T01:30:00.000Z", "2023-09-19T02:30:00.000Z", "2023-09-19T03:30:00.000Z", "2023-09-19T04:30:00.000Z", "2023-09-19T05:30:00.000Z", "2023-09-19T06:30:00.000Z"]
  // },
  yaxis: {
    show: false,
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
      enabled: false,
    },
  },
  colors: [secondary_color],
  responsive: [
    {
      breakpoint: 1365,
      options: {
        chart: {
          height: 220
        }
      },
    },
    {
      breakpoint: 575,
      options: {
        chart: {
          height: 180
        }
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 250
        }
      },
    }],
}

export let sales: ChartOptions | any = {
  series: [{
    data: [
      [1327359600000, 65.95],
      [1327446000000, 65.34],
      [1327532400000, 65.18],
      [1327618800000, 65.05],
      [1327878000000, 65.00],
      [1327964400000, 63.95],
      [1328050800000, 62.24],
      [1328137200000, 63.29],
      [1328223600000, 65.85],
      [1328482800000, 60.86],
      [1328569200000, 62.28],
      [1328655600000, 59.10],
      [1328742000000, 59.65],
      [1328828400000, 59.21],
      [1329087600000, 60.35],
      [1329174000000, 60.44],
      [1329260400000, 60.46],
      [1329346800000, 60.86],
      [1329433200000, 65.75],
      [1329778800000, 65.54],
      [1329865200000, 65.33],
      [1329951600000, 65.97],
      [1330038000000, 60.41],
      [1330297200000, 60.27],
      [1330383600000, 60.27],
      [1331161200000, 59.05],
      [1331247600000, 59.64],
      [1331506800000, 59.56],
      [1331593200000, 59.22],
      [1331679600000, 58.77],
      [1331766000000, 58.17],
      [1331852400000, 58.82],
      [1332111600000, 58.51],
      [1332198000000, 58.16],
      [1332284400000, 58.56],
      [1332370800000, 55.71],
      [1332457200000, 55.81],
      [1332712800000, 55.40],
      [1332799200000, 55.63],
      [1332885600000, 55.46],
      [1332972000000, 54.48],
      [1333058400000, 54.31],
      [1333317600000, 54.70],
      [1333404000000, 55.31],
      [1333490400000, 55.46],
      [1333576800000, 55.59],
      [1333922400000, 56.22],
      [1335477600000, 56.58],
      [1335736800000, 56.55],
      [1335823200000, 56.77],
      [1335909600000, 56.76],
      [1335996000000, 56.32],
      [1336082400000, 57.61],
      [1336341600000, 57.52],
      [1336428000000, 57.67],
      [1336514400000, 57.52],
      [1336600800000, 57.92],
      [1336687200000, 58.20],
      [1336946400000, 58.23],
      [1337032800000, 58.33],
      [1337119200000, 58.36],
      [1337205600000, 58.01],
      [1337292000000, 58.31],
      [1337551200000, 55.01],
      [1337637600000, 55.01],
      [1337724000000, 55.18],
      [1337810400000, 55.54],
      [1337896800000, 53.60],
      [1338242400000, 53.05],
      [1338328800000, 53.29],
      [1338415200000, 53.05],
      [1338501600000, 50.82],
      [1338760800000, 50.31],
      [1338847200000, 50.70],
      [1338933600000, 50.69],
      [1339020000000, 50.32],
      [1339106400000, 49.65],
      [1339365600000, 49.13],
      [1339452000000, 49.77],
      [1339538400000, 49.79],
      [1339624800000, 49.67],
      [1339711200000, 49.39],
      [1339970400000, 49.63],
      [1340056800000, 49.89],
      [1340143200000, 48.99],
      [1340229600000, 48.23],
      [1340316000000, 48.57],
      [1340575200000, 48.84],
      [1340661600000, 48.07],
      [1340748000000, 48.41],
      [1340834400000, 48.17],
      [1340920800000, 48.37],
      [1341180000000, 48.19],
      [1341266400000, 45.51],
      [1341439200000, 45.53],
      [1341525600000, 45.37],
      [1341784800000, 45.43],
      [1341871200000, 45.44],
      [1341957600000, 45.20],
      [1342044000000, 43.14],
      [1342130400000, 43.65],
      [1342389600000, 43.40],
      [1342476000000, 43.65],
      [1342562400000, 43.43],
      [1342648800000, 43.89],
      [1342735200000, 40.38],
      [1342994400000, 40.64],
      [1343080800000, 40.02],
      [1343167200000, 40.33],
      [1343253600000, 40.95],
      [1343340000000, 40.89],
      [1343599200000, 40.01],
      [1343685600000, 40.88],
      [1343772000000, 40.69],
      [1343858400000, 40.58],
      [1343944800000, 40.02],
      [1344204000000, 41.14],
      [1344290400000, 41.37],
      [1344376800000, 41.51],
      [1344463200000, 41.65],
      [1344549600000, 41.64],
      [1344808800000, 41.27],
      [1344895200000, 41.10],
      [1344981600000, 41.91],
      [1345068000000, 41.65],
      [1345154400000, 40.80],
      [1345413600000, 40.92],
      [1345500000000, 40.75],
      [1345586400000, 40.84],
      [1345672800000, 40.50],
      [1345759200000, 40.26],
      [1346018400000, 42.32],
      [1346104800000, 42.06],
      [1346191200000, 42.96],
      [1346277600000, 42.46],
      [1346364000000, 42.27],
      [1346709600000, 42.43],
      [1346796000000, 42.26],
      [1346882400000, 42.79],
      [1346968800000, 43.46],
      [1347228000000, 43.13],
      [1347314400000, 40.43],
      [1347400800000, 40.42],
      [1347487200000, 40.81],
      [1347573600000, 40.34],
      [1347832800000, 40.41],
      [1347919200000, 38.57],
      [1348005600000, 38.12],
      [1348092000000, 38.53],
      [1348178400000, 38.83],
      [1348437600000, 38.41],
      [1348524000000, 38.90],
      [1348610400000, 40.53],
      [1348696800000, 40.80],
      [1348783200000, 40.44],
      [1349042400000, 40.62],
      [1349128800000, 40.57],
      [1349215200000, 40.60],
      [1349301600000, 40.68],
      [1349388000000, 40.47],
      [1349647200000, 43.23],
      [1349733600000, 43.68],
      [1349820000000, 43.51],
      [1349906400000, 43.78],
      [1349992800000, 43.94],
      [1350252000000, 43.33],
      [1350338400000, 43.24],
      [1350424800000, 43.44],
      [1350511200000, 43.48],
      [1350597600000, 43.24],
      [1350856800000, 43.49],
      [1350943200000, 43.31],
      [1351029600000, 45.36],
      [1351116000000, 45.40],
      [1351202400000, 45.01],
      [1351638000000, 45.02],
      [1351724400000, 45.36],
      [1351810800000, 45.39],
      [1352070000000, 45.24],
      [1352156400000, 45.39],
      [1352242800000, 45.47],
      [1352329200000, 45.98],
      [1352415600000, 48.90],
      [1352674800000, 48.70],
      [1352761200000, 48.54],
      [1352847600000, 48.23],
      [1352934000000, 48.64],
      [1353020400000, 48.65],
      [1353279600000, 48.92],
      [1353366000000, 48.64],
      [1353452400000, 48.84],
      [1353625200000, 48.40],
      [1353884400000, 48.30],
      [1355353200000, 55.53],
      [1355439600000, 55.56],
      [1355698800000, 55.42],
      [1355785200000, 58.49],
      [1355871600000, 58.09],
      [1355958000000, 58.87],
      [1356044400000, 58.71],
      [1356303600000, 58.53],
      [1356476400000, 58.55],
      [1356562800000, 60.30],
      [1356649200000, 60.90],
      [1356908400000, 60.68],
      [1357081200000, 60.34],
      [1357167600000, 60.75],
      [1357254000000, 60.13],
      [1357513200000, 60.94],
      [1357599600000, 60.14],
      [1357686000000, 60.66],
      [1357772400000, 63.62],
      [1357858800000, 65.09],
      [1358118000000, 63.16],
      [1358204400000, 63.15],
      [1358290800000, 65.88],
      [1358377200000, 60.73],
      [1358463600000, 60.98],
      [1358809200000, 60.95],
      [1358895600000, 60.25],
      [1358982000000, 60.10],
      [1359068400000, 60.32],
      [1359327600000, 60.24],
      [1359414000000, 60.52],
      [1359500400000, 60.94],
      [1359586800000, 60.83],
      [1359673200000, 60.34],
      [1359932400000, 60.10],
      [1360018800000, 63.51],
      [1360105200000, 63.40],
      [1360191600000, 63.20],
      [1360278000000, 63.20],
      [1360537200000, 64.64],
      [1360623600000, 64.89],
      [1360710000000, 64.81],
      [1360796400000, 65.61],
      [1360882800000, 65.63],
      [1361228400000, 65.99],
      [1361314800000, 66.77],
      [1361401200000, 66.34],
      [1361487600000, 66.55],
      [1361746800000, 67.11],
      [1361833200000, 67.59],
      [1361919600000, 67.60]
    ]
  }],
  chart: {
    id: 'area-datetime',
    type: 'area',
    height: 425,
    zoom: {
      autoScaleYaxis: true
    },
    toolbar: {
      show: false
    },
  },
  annotations: {
    yaxis: [{
      y: 50,
      borderColor: primary_color,
      label: {
        show: true,
        text: 'Support',
        style: {
          color: "#fff",
          background: primary_color
        }
      }
    }],
    xaxis: [{
      x: new Date('15 Nov 2012').getTime(),
      borderColor: primary_color,
      yAxisIndex: 50,
      label: {
        show: false,
        text: '$859,432',
        style: {
          color: "#fff",
          background: primary_color
        }
      },
    }]
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    min: new Date('01 Apr 2012').getTime(),
    tickAmount: 6,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  responsive: [{
    breakpoint: 1366,
    options: {
      chart: {
        height: 350
      }
    }
  },
  {
    breakpoint: 1238,
    options: {
      chart: {
        height: 300
      },
      grid: {
        padding: {
          bottom: 5,
        },
      }
    }
  },
  {
    breakpoint: 992,
    options: {
      chart: {
        height: 300
      }
    }
  },
  {
    breakpoint: 551,
    options: {
      grid: {
        padding: {
          bottom: 10,
        },
      }
    }
  },
  {
    breakpoint: 535,
    options: {
      chart: {
        height: 250
      }

    }
  }
  ],

  colors: [primary_color],
};

export let growthChart: ChartOptions | any = {
  series: [76, 67, 61, 90],
  chart: {
    height: 380,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      }
    }
  },
  colors: [primary_color, secondary_color, primary_color, secondary_color],
  labels: ['Total order', 'Total product', 'Cantidad', 'Page views'],
  legend: {
    show: true,
    floating: true,
    fontSize: '14px',
    position: 'left',
    fontFamily: 'Roboto',
    offsetX: 30,
    offsetY: 20,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 0,
      show: false,
    },
    formatter: function (seriesName: any, opts: any) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
      vertical: 5,
      horizontal: 2
    }
  },
  stroke: {
    lineCap: 'round'
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      legend: {
        offsetX: 0,
      }
    }
  },
  {
    breakpoint: 480,
    options: {
      chart: {
        height: 340,
      },
      legend: {
        show: true,
        fontSize: '10px',
      }
    }
  }]
};

function generateDayWiseTimeSeries(s: any, count: any) {
  var values = [[
    4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
  ], [
    2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2
  ]];
  var i = 0;
  var series = [];
  var x = new Date("11 Nov 2012").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}

export let invoice: ChartOptions | any = {
  chart: {
    type: "line",
    height: 450,
    foreColor: "#999",
    stacked: true,
    dropShadow: {
      enabled: true,
      enabledSeries: [0],
      top: -2,
      left: 2,
      blur: 5,
      opacity: 0.06
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1470,
      options: {
        chart: {
          height: 440
        }
      }
    },
    {
      breakpoint: 1365,
      options: {
        chart: {
          height: 300
        }
      }
    },
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 250
        }
      }
    },
  ],
  colors: [primary_color, secondary_color],
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: 'Total Views',
    data: generateDayWiseTimeSeries(0, 18)
  }, {
    name: 'Unique Views',
    data: generateDayWiseTimeSeries(1, 18)
  }],
  markers: {
    size: 5,
    strokeColor: "#e3e3e3",
    strokeWidth: 3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6
    }
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5
    },
    tooltip: {
      enabled: true
    }
  },
  grid: {
    padding: {
      left: -5,
      right: 5
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    show: false
  },
  fill: {
    type: "solid",
    fillOpacity: 0.7
  }
};

export let topSales: ChartOptions | any = {
  series: [{
    name: 'TEAM A',
    type: 'area',
    data: [44, 48, 38, 47]
  }, {
    name: 'TEAM B',
    type: 'line',
    data: [42, 38, 48, 30]
  }],
  chart: {
    height: 470,
    type: 'line',
    toolbar: {
      show: false,
    },

  },
  stroke: {
    curve: 'smooth',
    width: [5, 2.8],
    dashArray: [0, 8]

  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.8,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  labels: ['2020', '2021', '2022', '2023'],
  markers: {
    size: 5
  },
  responsive: [
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 300
        }
      }
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 325
        }
      }
    }
  ],
  yaxis: [
    {
      labels: {
        formatter: function (value: any) {
          return value + "k";
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: any) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  },
  legend: {
    show: false,
  },
  colors: [primary_color, secondary_color]
};

export let activityChart: ChartOptions | any = {
  series: [{
    name: 'Inflation',
    data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2, 2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2]
  }],
  chart: {
    height: 90,
    type: 'bar',
    toolbar: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },

      columnWidth: '20%',
      startingShape: 'rounded',
      endingShape: 'rounded',
      colors: {
        backgroundBarColors: ["#d8e3e5"],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 9
      },
    }
  },
  dataLabels: {
    enabled: false,
    formatter: function (val: any) {
      return val + "%";
    },
    offsetY: -10,
    style: {
      fontSize: '12px',
      colors: ["#912efc"]
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'bottom',

    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: primary_color,
          colorTo: '#c481ec',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    },
    labels: {
      show: false
    }

  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: any) {
        return val + "%";
      }
    }
  },
  colors: [secondary_color],
};

export let yearly: ChartOptions | any = {
  series: [
    {
      name: "Yearly Profit",
      data: [
        {
          x: "2001",
          y: 5500
        },
        {
          x: "2002",
          y: 3800
        },
        {
          x: "2003",
          y: 5500

        },
        {
          x: "2004",
          y: 7700
        },
        {
          x: "2005",
          y: 1500

        },
        {
          x: "2006",
          y: 1000,
          fillColor: primary_color,
        },
        {
          x: "2007",
          y: 5000,
          fillColor: primary_color,
        },
        {
          x: "2008",
          y: 6000,
          fillColor: primary_color,
        },
        {
          x: "2009",
          y: 7900,
          fillColor: primary_color,
        },
        {
          x: "2010",
          y: 4700,
          fillColor: primary_color,
        },
        {
          x: "2011",
          y: 4000,
          fillColor: primary_color,
        },
        {
          x: "2012",
          y: 5000,
          fillColor: primary_color,
        },
        {
          x: "2013",
          y: 7500
        },
        {
          x: "2014",
          y: 3500
        },
        {
          x: "2015",
          y: 4000
        },
        {
          x: "2016",
          y: 6500
        },
        {
          x: "2017",
          y: 4000
        },
        {
          x: "2023",
          y: 5853
        },
        {
          x: "2019",
          y: 6553
        },
        {
          x: "2020",
          y: 5200
        },
        {
          x: "2021",
          y: 6200
        },
        {
          x: "2022",
          y: 880,
          fillColor: secondary_color,
        },
        {
          x: "2023",
          y: 1200,
          fillColor: secondary_color,
        },
        {
          x: "2024",
          y: 8010,
          fillColor: secondary_color,
        },
        {
          x: "2025",
          y: 6053,
          fillColor: secondary_color,
        },
        {
          x: "2026",
          y: 4000,
          fillColor: secondary_color,
        },
        {
          x: "2027",
          y: 1000,
          fillColor: secondary_color,
        },
        {
          x: "2028",
          y: 6200
        },
        {
          x: "2029",
          y: 6200
        },
        {
          x: "2030",
          y: 7500
        },
        {
          x: "2031",
          y: 7000
        },
        {
          x: "2032",
          y: 5000
        },
        {
          x: "2033",
          y: 6000
        },
        {
          x: "2034",
          y: 8000
        },
        {
          x: "2035",
          y: 4000
        },
        {
          x: "2036",
          y: 4500
        },
        {
          x: "2037",
          y: 4800
        },
        {
          x: "2038",
          y: 3000,
          fillColor: secondary_color,
        },
        {
          x: "2039",
          y: 4200,
          fillColor: secondary_color,
        },
        {
          x: "2040",
          y: 7900,
          fillColor: secondary_color,
        },
        {
          x: "2041",
          y: 4000,
          fillColor: secondary_color,
        },
        {
          x: "2042",
          y: 5500,
          fillColor: secondary_color,
        },
        {
          x: "2043",
          y: 1000
        },
        {
          x: "2044",
          y: 5500
        },
        {
          x: "2045",
          y: 7000
        },
        {
          x: "2046",
          y: 6500
        },
        {
          x: "2047",
          y: 4000
        }

      ]
    }
  ],
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
    }
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (val: any) {
        return val / 100 + "K";
      },
    }
  },
  responsive: [
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 250
        }
      }
    }
  ],
  colors: ["#d8e3e5"]
}

