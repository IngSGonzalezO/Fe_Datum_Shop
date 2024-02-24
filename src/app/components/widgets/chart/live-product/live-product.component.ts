import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-live-product',
  templateUrl: './live-product.component.html',
  styleUrls: ['./live-product.component.scss']
})
export class LiveProductComponent implements OnInit {

  public liveChart = chartData.LiveProductChart;
  

  constructor() { }

  ngOnInit(): void {
  }

}
