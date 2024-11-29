// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CartService {
  private cart: Array<any> = [];

  constructor() {
    console.log('CartService instance created');
  }

  addToCart(product: any) {
    this.cart.push({
      product: product,
      quantity: 1,
    });
    console.log(this.cart);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getCartCount() {
    return this.cart.length;
  }
}
