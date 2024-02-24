import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent implements OnInit {

  public bar = chartData.bar;
  public Transaction = chartData.Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
