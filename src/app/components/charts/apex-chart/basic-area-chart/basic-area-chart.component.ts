import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-basic-area-chart',
  templateUrl: './basic-area-chart.component.html',
  styleUrls: ['./basic-area-chart.component.scss']
})
export class BasicAreaChartComponent implements OnInit {

  public turnover =  chartData.splineArea1
  constructor() { }

  ngOnInit(): void {
  }

}
