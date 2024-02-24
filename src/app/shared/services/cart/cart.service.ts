import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, Observable, Subscriber } from 'rxjs';
import { CartItem } from '../../model/cart.model';
import { Products } from '../../model/product.model';

// let products = JSON.parse(localStorage.getItem('cartItem')) || [];

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // public cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  public observer!: Subscriber<{}>;

  constructor(private route: ActivatedRoute) {
    // this.cartItems.subscribe(products => products = products);

  }

  getAll(): Observable<CartItem[]> {
    const itemsList = new Observable(observer => {
      // observer.next(products);
      observer.complete();
    });
    return <Observable<CartItem[]>>itemsList;
  }
}
