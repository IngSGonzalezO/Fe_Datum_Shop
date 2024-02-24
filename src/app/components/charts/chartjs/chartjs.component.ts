import { Component, OnInit } from '@angular/core';
import { ChartEvent, ChartType } from 'chart.js';
import * as chartData from '../../../shared/data/charts/chartjs'

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  constructor() { }

  // barChart
  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  public barChartData = chartData.barChartData;
  public barChartColors = chartData.barChartColors;

  // lineGraph Chart
  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;

  // radarGraph Chart
  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphLegend = chartData.radarGraphLegend;
  public radarGraphData = chartData.radarGraphData;
  public radarGraphColors = chartData.radarGraphColors;

  // lineChart
  public lineChartData = chartData.lineChartData;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartColors = chartData.lineChartColors;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartType = chartData.lineChartType;

  // Doughnut
  public doughnutChartLabels = chartData.doughnutChartLabels;
  public doughnutChartData = chartData.doughnutChartData;
  public doughnutChartType = chartData.doughnutChartType;
  public doughnutChartColors = chartData.doughnutChartColors;
  public doughnutChartOptions = chartData.doughnutChartOptions;
  public doughnutChartLegend = chartData.doughnutChartLegend;
  

  // polarareaChart
  public polarareaChartLabels = chartData.doughnutChartLabels;
  public polarareaChartData = chartData.doughnutChartData;
  public polarareaChartType = chartData.doughnutChartType;
  public polarareaChartColors = chartData.doughnutChartColors;
  public polarareaChartOptions = chartData.doughnutChartOptions;
  public polarareaChartLegend = chartData.lineChartLegend;


  // bar chart
  public barChartChartLabels = chartData.barChartChartLabels;
  public barChartChartData = chartData.barChartChartData;
  public barChartChartType = chartData.barChartChartType;
  public barChartChartColors = chartData.barChartChartColors;
  public barChartChartOptions = chartData.barChartChartOptions;
  public barChartChartLegend = chartData.barChartChartLegend;

  
  
  // polarChart
  public polarChartLabels = chartData.polarChartLabels;
  public polarChartData = chartData.polarChartData;
  public polarChartType = chartData.polarChartType;
  public polarChartColors = chartData.polarChartColors;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartLegend = chartData.polarChartLegend;

  

  

  public polarAreaChartLabels: String[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: String[] = ["300", "500", "100", "40", "120"];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  
  public chartClicked({ event, active }: { event?: ChartEvent | undefined; active?: {}[] | undefined; }): void {
  }

  public chartHovered({ event, active }: { event: any, active: any }): void {
  }

  ngOnInit(): void {
  }

}
