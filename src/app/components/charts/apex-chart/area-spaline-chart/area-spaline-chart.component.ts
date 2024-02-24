import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-area-spaline-chart',
  templateUrl: './area-spaline-chart.component.html',
  styleUrls: ['./area-spaline-chart.component.scss']
})
export class AreaSpalineChartComponent implements OnInit {

  public areaSpalineChart = chartData.areaSpalineChart

  constructor() { }

  ngOnInit(): void {
  }

}
