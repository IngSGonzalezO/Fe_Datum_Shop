import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-chart-widgets',
  templateUrl: './chart-widgets.component.html',
  styleUrls: ['./chart-widgets.component.scss']
})
export class ChartWidgetsComponent implements OnInit {

  public sale = chartData.sale;
  public sale1 = chartData.sale1;
  public sale2 = chartData.sale2;

  constructor() { }

  ngOnInit(): void {
  }

}
