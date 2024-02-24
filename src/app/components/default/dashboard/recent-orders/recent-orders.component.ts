import { Component, OnInit } from '@angular/core';
import { RecentOrders } from 'src/app/shared/data/dashboard/data';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {

  public recentOrders = RecentOrders;
  
  constructor() { }

  ngOnInit(): void {
  }

}
