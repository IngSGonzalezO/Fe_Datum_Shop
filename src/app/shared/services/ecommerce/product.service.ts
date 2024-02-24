import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable, retry } from 'rxjs';
// import * as product from '../../../shared/data/'
import { Products } from '../../../shared/model/product.model';
import { environment } from 'src/environments/environment.openshift';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listData: Products[] | undefined;
  // productData = product.productData
  private url = environment.apiProductos;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });
  private options = { headers: this.headers }

  constructor(private http: HttpClient) { }

  products(): Observable<any> {
    return this.http.get('assets/data/product.json').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public getProduct(id: number): Observable<Products> {
    return this.products().pipe(
      map((items) => {
        return items.find((item: Products) => {
          return item.id === id;
        });
      })
    );
  }

  drGetProducts(): Observable<any> {
    const url = this.url + '/api/shop/adm/productos/getAllProductos';
    return this.http.get(url, this.options);
  }

  drGetProductosPorCantidad(cantidad: number): Observable<any> {
    const url = this.url + `/api/shop/adm/productos/getAllProductoByCantidad/${cantidad}`;
    return this.http.get(url, this.options).pipe(retry(2));
  }

  drGetProduct(idProduct: number): Observable<any> {
    const url = this.url + `/api/shop/adm/productos/getProductosById/${idProduct}`;
    return this.http.get(url, this.options);
  }

  drMassiveGetProducts(cantidad: number): Observable<any> {
    const observables: Observable<any>[] = [];
    const url = this.url + '/api/shop/adm/productos/getAllProductos';
    for (let i = 0; i < cantidad; i++) {
      observables.push(this.http.get(url));
    }
    return forkJoin(observables);
  }
}
