import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.scss']
})
export class PieChart2Component implements OnInit {

  public pieChart2 =  chartData.pieChart2
  
  constructor() { }

  ngOnInit(): void {
  }

}
