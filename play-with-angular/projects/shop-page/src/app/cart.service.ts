// import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class CartService {
  private cart: Array<any> = [
    {
      product: {
        id: 1,
        name: 'Laptop',
        price: 10000.00,
      },
      quantity: 1,
    },
    {
      product: {
        id: 2,
        name: 'Mobile',
        price: 1000.00,
      },
      quantity: 1,
    },
  ];
  public cartStream = new BehaviorSubject<Array<any>>(this.cart);

  constructor() {
    console.log('CartService instance created');
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find((p) => p.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({product, quantity: 1});
    }
  }

  increaseOrDecreaseQuantity(productId: any, qty: number) {
    const existingProduct = this.cart.find((p) => {
      console.log('p', p);
      return p.product.id === productId;
    });
    if (existingProduct) {
      existingProduct.quantity += qty;
    }
    if (existingProduct.quantity === 0) {
      this.cart = this.cart.filter((p) => p.product.id !== productId);
    }
    this.cartStream.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartStream.next(this.cart);
  }

  checkout() {
    console.log('checkout');
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
