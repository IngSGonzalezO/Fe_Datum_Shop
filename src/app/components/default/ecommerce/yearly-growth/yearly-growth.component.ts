import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-yearly-growth',
  templateUrl: './yearly-growth.component.html',
  styleUrls: ['./yearly-growth.component.scss']
})
export class YearlyGrowthComponent implements OnInit {

  public yearly = chartData.yearly;

  constructor() { }

  ngOnInit(): void {
  }

}
