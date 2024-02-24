import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-total-earning',
  templateUrl: './total-earning.component.html',
  styleUrls: ['./total-earning.component.scss']
})
export class TotalEarningComponent implements OnInit {

  public totalEarningChart =  chartData.TotalEarningChart;

  constructor() { }

  ngOnInit(): void {
  }

}
