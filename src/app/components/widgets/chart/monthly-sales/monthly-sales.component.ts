import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.scss']
})
export class MonthlySalesComponent implements OnInit {

  public monthly = chartData.MonthlySale;

  constructor() { }

  ngOnInit(): void {
  }

}
