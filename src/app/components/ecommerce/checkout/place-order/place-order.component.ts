import { Component, OnInit, inject } from '@angular/core';
import { DrProduct } from 'src/app/shared/model/dr-product.model';
import { DrServiceService } from 'src/app/shared/services/cart/dr-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  products: DrProduct[] = [];
  private readonly cartService = inject(DrServiceService);
  total$ = this.cartService.total;

  constructor() { }

  ngOnInit(): void {
    this.obtenerProductosCarrito();
  }

  obtenerProductosCarrito(): void {
    this.products = this.cartService.obtenerProductos();
  }

}
