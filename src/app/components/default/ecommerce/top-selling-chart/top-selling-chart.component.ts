import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-top-selling-chart',
  templateUrl: './top-selling-chart.component.html',
  styleUrls: ['./top-selling-chart.component.scss']
})
export class TopSellingChartComponent implements OnInit {

  public topSales = chartData.topSales;

  constructor() { }

  ngOnInit(): void {
  }

}
