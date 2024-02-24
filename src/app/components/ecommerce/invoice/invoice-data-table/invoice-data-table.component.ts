import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/e-commerce/invoice'
import { DrProduct } from 'src/app/shared/model/dr-product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoice-data-table',
  templateUrl: './invoice-data-table.component.html',
  styleUrls: ['./invoice-data-table.component.scss']
})
export class InvoiceDataTableComponent implements OnInit {
  @Input() products: DrProduct[] = [];
  @Input() total$!: Observable<number>;

  // data
  public invoice = data.invoice

  constructor() { }

  ngOnInit(): void {
  }

}
