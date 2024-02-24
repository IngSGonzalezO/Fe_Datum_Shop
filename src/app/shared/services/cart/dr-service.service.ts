import { Injectable } from '@angular/core';
import { DrProduct } from '../../model/dr-product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrServiceService {
  private productos: DrProduct[] = [];
  private totalSubject = new BehaviorSubject<number>(0);

  constructor() { }

  agregar(producto: DrProduct): void {
    const prd = this.productos.findIndex((p) => p.idProductos === producto.idProductos);
    if (prd === -1) this.productos.push({ ...producto, qty: 1 });
    else this.productos[prd].qty = this.productos[prd].qty + 1;
    this.updateTotal();
  }

  eliminar(indice: number): void {
    this.productos.splice(indice, 1);
    this.updateTotal();
  }

  editar(indice: number, prd: DrProduct): void {
    this.productos[indice] = prd;
    if (prd.qty < 1) this.eliminar(indice);
    this.updateTotal();
  }

  obtenerProductos(): DrProduct[] {
    return this.productos;
  }

  vaciar(): DrProduct[] {
    this.productos = [];
    return this.productos;
  }

  get total(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  private updateTotal() {
    const total = this.productos.reduce((acc, item) => acc + (item.precio * item.qty), 0);
    this.totalSubject.next(total);
  }
}
