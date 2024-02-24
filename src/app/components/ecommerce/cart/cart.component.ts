import { Component, OnInit, inject } from '@angular/core';
import { DrProduct } from 'src/app/shared/model/dr-product.model';
import { DrServiceService } from 'src/app/shared/services/cart/dr-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: DrProduct[] = [];
  cartService = inject(DrServiceService);
  total$ = this.cartService.total;

  constructor() { }

  ngOnInit(): void {
    this.products = this.cartService.obtenerProductos();
  }

  eliminar(i: number): void {
    this.cartService.eliminar(i);
  }

  cambiarCantidad(i: number, accion: string): void {
    const prd = this.products[i];
    if (accion === 'i') prd.qty += 1;
    else prd.qty -= 1;
    this.cartService.editar(i, prd);
  }
}
