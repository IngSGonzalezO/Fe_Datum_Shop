import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-pie-chart4',
  templateUrl: './pie-chart4.component.html',
  styleUrls: ['./pie-chart4.component.scss']
})
export class PieChart4Component implements OnInit {

  public pieChart3 =  chartData.pieChart3

  constructor() { }

  ngOnInit(): void {
  }

}
