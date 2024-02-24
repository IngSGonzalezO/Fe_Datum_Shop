import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-column-chart1',
  templateUrl: './column-chart1.component.html',
  styleUrls: ['./column-chart1.component.scss']
})
export class ColumnChart1Component implements OnInit {

  public columnChart2  = chartData.columnChart2

  constructor() { }

  ngOnInit(): void {
  }

}
