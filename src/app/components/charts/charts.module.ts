import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { FormsModule } from '@angular/forms';
import { ChartistModule } from 'ng-chartist';
import { ChartistComponent } from './chartist/chartist.component';
import { BasicAreaChartComponent } from './apex-chart/basic-area-chart/basic-area-chart.component';
import { AreaSpalineChartComponent } from './apex-chart/area-spaline-chart/area-spaline-chart.component';
import { BarChartComponent } from './apex-chart/bar-chart/bar-chart.component';
import { ColumnChartComponent } from './apex-chart/column-chart/column-chart.component';
import { BubbleChartComponent } from './apex-chart/bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './apex-chart/candlestick-chart/candlestick-chart.component';
import { SteplineChartComponent } from './apex-chart/stepline-chart/stepline-chart.component';
import { ColumnChart1Component } from './apex-chart/column-chart1/column-chart1.component';
import { PieChartComponent } from './apex-chart/pie-chart/pie-chart.component';
import { DonutChartComponent } from './apex-chart/donut-chart/donut-chart.component';
import { MixedChartComponent } from './apex-chart/mixed-chart/mixed-chart.component';
import { RadarChartComponent } from './apex-chart/radar-chart/radar-chart.component';
import { RadialChartComponent } from './apex-chart/radial-chart/radial-chart.component';
import { Chart1Component } from './chartist/chart1/chart1.component';
import { Chart2Component } from './chartist/chart2/chart2.component';
import { Chart3Component } from './chartist/chart3/chart3.component';
import { Chart4Component } from './chartist/chart4/chart4.component';
import { Chart5Component } from './chartist/chart5/chart5.component';
import { Chart6Component } from './chartist/chart6/chart6.component';
import { Chart7Component } from './chartist/chart7/chart7.component';
import { Chart8Component } from './chartist/chart8/chart8.component';
import { Chart9Component } from './chartist/chart9/chart9.component';
import { Chart10Component } from './chartist/chart10/chart10.component';
import { Chart11Component } from './chartist/chart11/chart11.component';
import { Chart12Component } from './chartist/chart12/chart12.component';
import { AreaChart1Component } from './google-chart/area-chart1/area-chart1.component';
import { AreaChart2Component } from './google-chart/area-chart2/area-chart2.component';
import { PieChart1Component } from './google-chart/pie-chart1/pie-chart1.component';
import { PieChart2Component } from './google-chart/pie-chart2/pie-chart2.component';
import { PieChart3Component } from './google-chart/pie-chart3/pie-chart3.component';
import { ColumnChart2Component } from './google-chart/column-chart2/column-chart2.component';
import { LineChartComponent } from './google-chart/line-chart/line-chart.component';
import { ComboChartComponent } from './google-chart/combo-chart/combo-chart.component';
import { BarChart2Component } from './google-chart/bar-chart2/bar-chart2.component';
import { PieChart4Component } from './google-chart/pie-chart4/pie-chart4.component';


@NgModule({
  declarations: [

    ApexChartComponent,
    GoogleChartComponent,
    ChartjsComponent,
    ChartistComponent,
    BasicAreaChartComponent,
    AreaSpalineChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    BubbleChartComponent,
    CandlestickChartComponent,
    SteplineChartComponent,
    ColumnChart1Component,
    PieChartComponent,
    DonutChartComponent,
    MixedChartComponent,
    RadarChartComponent,
    RadialChartComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component,
    Chart5Component,
    Chart6Component,
    Chart7Component,
    Chart8Component,
    Chart9Component,
    Chart10Component,
    Chart11Component,
    Chart12Component,
    AreaChart1Component,
    AreaChart2Component,
    PieChart1Component,
    PieChart2Component,
    PieChart3Component,
    ColumnChart2Component,
    LineChartComponent,
    ComboChartComponent,
    BarChart2Component,
    PieChart4Component,
  ],
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
    NgChartsModule,
    NgApexchartsModule,
    ChartistModule,
    ChartsRoutingModule,
    SharedModule,
    FormsModule,

  ]
})
export class ChartsModule { }
