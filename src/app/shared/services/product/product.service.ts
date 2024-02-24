import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';
import * as product from '../../../shared/data/e-commerce/product';
import { Products } from '../../../shared/model/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  listData: Products[] | undefined;
  productData = product.productData;
  private url = 'http://localhost:8081';
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
}
