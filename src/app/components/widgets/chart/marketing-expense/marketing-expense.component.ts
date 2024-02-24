import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-marketing-expense',
  templateUrl: './marketing-expense.component.html',
  styleUrls: ['./marketing-expense.component.scss']
})
export class MarketingExpenseComponent implements OnInit {

  public marketing = chartData.MarketChart;

  constructor() { }

  ngOnInit(): void {
  }

}
