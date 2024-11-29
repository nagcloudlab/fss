// import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class CartService {
  private cart: Array<any> = [];
  public cartStream = new BehaviorSubject<Array<any>>(this.cart);

  constructor() {
    console.log('CartService instance created');
  }

  addToCart(product: any) {
    this.cart.push({
      product: product,
      quantity: 1,
    });
    this.cartStream.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getCart() {
    return this.cart;
  }

  getCartCount() {
    return this.cart.length;
  }
}
