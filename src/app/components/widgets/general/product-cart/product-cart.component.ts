import { Component, OnInit } from '@angular/core';
import { WidgetsProductData } from 'src/app/shared/data/widgets/data';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  public widgetsProductData = WidgetsProductData;

  constructor() { }

  ngOnInit(): void {
  }

}
