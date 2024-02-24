import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-income-card',
  templateUrl: './income-card.component.html',
  styleUrls: ['./income-card.component.scss']
})
export class IncomeCardComponent implements OnInit {

  constructor() { }

  public sales = chartData.sales;

  ngOnInit(): void {
  }

}
