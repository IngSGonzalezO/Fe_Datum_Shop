import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss']
})
export class InvoiceOverviewComponent implements OnInit {
  public invoice = chartData.invoice;

  constructor() { }

  ngOnInit(): void {
  }

}
