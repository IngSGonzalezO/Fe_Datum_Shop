import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexOptions,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

let trigoStrength = 3;
let primary = localStorage.getItem('primary_color') || '#ED1C24';
let secondary = localStorage.getItem('secondary_color') || '#565656';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis | ApexXAxis[];
  stroke?: ApexStroke;
  tooltip?: any;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis | ApexYAxis[];
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
  options?: ApexOptions;
  subtitle?: ApexTitleSubtitle;
};

export let sale: ChartOptions | any = {
  series: [
    {
      name: 'series1',
      data: [12, 23, 17, 32, 18, 32, 15],
    },
  ],
  chart: {
    height: 170,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    show: false,
    type: 'datetime',
    categories: [
      '2023-09-19T00:00:00',
      '2023-09-19T01:30:00',
      '2023-09-19T02:30:00',
      '2023-09-19T03:30:00',
      '2023-09-19T04:30:00',
      '2023-09-19T05:30:00',
      '2023-09-19T06:30:00',
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      bottom: -40,
    },
  },
  fill: {
    colors: [primary],
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 100],
    },
  },
  colors: [primary],
  name: 'SALE',
  price: '3645',
  counter: '90',
  type: '$',
};

export let sale1: ChartOptions | any = {
  series: [
    {
      name: 'series1',
      data: [12, 16, 14, 18, 14, 19, 20],
    },
  ],
  chart: {
    height: 170,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    show: false,
    type: 'datetime',
    categories: [
      '2023-09-19T00:00:00',
      '2023-09-19T01:30:00',
      '2023-09-19T02:30:00',
      '2023-09-19T03:30:00',
      '2023-09-19T04:30:00',
      '2023-09-19T05:30:00',
      '2023-09-19T06:30:00',
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      bottom: -40,
    },
  },
  fill: {
    colors: [secondary],
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 100],
    },
  },
  colors: [secondary],
  name: 'PROJECTS',
  price: '12569',
  counter: '30',
  type: 'none',
};

export let sale2: ChartOptions | any = {
  series: [
    {
      name: 'series1',
      data: [44, 55, 21, 58, 22, 43, 21],
    },
  ],
  chart: {
    height: 170,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    show: false,
    type: 'datetime',
    categories: [
      '2023-09-19T00:00:00',
      '2023-09-19T01:30:00',
      '2023-09-19T02:30:00',
      '2023-09-19T03:30:00',
      '2023-09-19T04:30:00',
      '2023-09-19T05:30:00',
      '2023-09-19T06:30:00',
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      bottom: -40,
    },
  },
  fill: {
    colors: ['#1b4c43'],
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 100],
    },
  },
  colors: ['#1b4c43'],
  name: 'PRODUCTS',
  price: '93',
  counter: '68',
  type: 'm',
};

export const MarketChart: ChartOptions | any = {
  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  chart: {
    height: 360,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      borderRadiusApplication: 'end',
      rangeBarOverlap: true,
      columnWidth: '55%',
      colors: {
        ranges: [
          {
            from: 0,
            to: 0,
            color: undefined,
          },
        ],
        backgroundBarColors: [],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 0,
      },
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
    colors: [primary, secondary],
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  colors: [primary, secondary],
  tooltip: {
    y: {
      formatter: function (val: any) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

export const TotalEarningChart: ChartOptions | any = {
  series: [70],
  chart: {
    height: 330,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '70%',
        image: 'assets/images/email-template/success.png',
        imageWidth: 64,
        imageHeight: 64,
        imageClipped: false,
      },
      dataLabels: {
        name: {
          show: false,
          color: '#fff',
        },
        value: {
          show: true,
          color: '#333',
          offsetY: 70,
          fontSize: '22px',
        },
      },
    },
  },
  fill: {
    type: 'image',
    image: {
      src: ['assets/images/user-card/5.jpg'],
    },
  },
  stroke: {
    lineCap: 'round',
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 300,
        },
      },
    },
  ],
  labels: ['Volatility'],
};

export const LiveProductChart: ChartOptions | any = {
  series: [
    {
      name: 'TEAM A',
      type: 'area',
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: 'TEAM B',
      type: 'line',
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
  chart: {
    height: 320,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  fill: {
    colors: [primary, secondary],
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  colors: [primary, secondary],
  labels: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09 ',
    '10',
    '11',
    '12',
  ],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Series A',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Series B',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y: any) {
        if (typeof y !== 'undefined') {
          return y.toFixed(0) + ' points';
        }
        return y;
      },
    },
  },
};

//turnover chart
const series = {
  monthDataSeries1: {
    prices: [
      8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
      8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25,
      8600.65, 8881.1, 9340.85,
    ],
    dates: [
      '13 Nov 2017',
      '14 Nov 2017',
      '15 Nov 2017',
      '16 Nov 2017',
      '17 Nov 2017',
      '20 Nov 2017',
      '21 Nov 2017',
      '22 Nov 2017',
      '23 Nov 2017',
      '24 Nov 2017',
      '27 Nov 2017',
      '28 Nov 2017',
      '29 Nov 2017',
      '30 Nov 2017',
      '01 Dec 2017',
      '04 Dec 2017',
      '05 Dec 2017',
      '06 Dec 2017',
      '07 Dec 2017',
      '08 Dec 2017',
    ],
  },
};

export const TurnoverChart: ChartOptions | any = {
  series: [
    {
      name: 'STOCK ABC',
      data: series.monthDataSeries1.prices,
    },
  ],
  chart: {
    height: 320,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  fill: {
    colors: [primary],
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 100],
    },
  },
  title: {
    text: 'Fundamental Analysis of Stocks',
    align: 'left',
  },
  colors: [primary],
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    opposite: false,
  },
  legend: {
    horizontalAlign: 'left',
  },
};

export const MonthlySale: ChartOptions | any = {
  series: [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 99, 20],
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'Reflected',
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  colors: [primary, secondary, '#c8b349'],
  chart: {
    height: 300,
    type: 'radar',
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  title: {
    text: 'Radar Chart - Multi Series',
  },
  stroke: {
    width: 0,
  },
  markers: {
    size: 0,
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};

function generateData(baseval: any, count: any, yrange: any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export const WidgetsUserChart: ChartOptions | any = {
  series: [
    {
      name: 'Bubble1',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble2',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble3',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'Bubble4',
      data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chart: {
    height: 320,
    type: 'bubble',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  colors: [primary, secondary, '#222222', '#e2c636'],
  title: {
    text: 'Simple Bubble Chart',
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    max: 70,
  },
};

export const BrowserUses: ChartOptions | any = {
  chart: {
    height: 500,
    type: 'candlestick',
    toolbar: { show: false },
  },
  plotOptions: {
    candlestick: { colors: { upward: primary, downward: secondary } },
  },
  colors: ['#fb740d'],
  title: { text: 'CandleStick Chart', align: 'left' },
  xaxis: { type: 'datetime' },
  yaxis: { tooltip: { enabled: true } },
  series: [
    {
      data: [
        { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
        { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
        { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
        { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
        { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
        { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
        { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
        { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
        { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
        { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
        { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
        { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
        { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
        { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
        { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
        { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
        { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
        { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
        { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
        { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
        { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },
        { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
        { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
        { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },
        { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
        { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
        { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
        { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
        { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },
        { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
        { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
        { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },
        { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
        { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
        { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] },
        { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },
        { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
        { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },
        { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
        { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
        { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },
        { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },
        { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },
        { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },
        { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
        { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },
        { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },
        { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },
        { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },
        { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
        { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },
        { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },
        { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
        { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },
        { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
        { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },
        { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
        { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
      ],
    },
  ],
};
