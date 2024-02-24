import { Component, OnInit, inject } from '@angular/core';
import { DrProduct } from 'src/app/shared/model/dr-product.model';
import { DrServiceService } from 'src/app/shared/services/cart/dr-service.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
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
