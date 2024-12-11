import { Injectable } from '@angular/core';
import {Observable,of,delay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products = [
      {
        id: 1,
        name: 'Laptop',
        price: 1000,
        discountPercentage: 10,
        currencyCode: 'INR',
        makeDate: Date.now(),
        description: 'This is a laptop',
        image: 'assets/Laptop.png',
        isAvailable: true,
      },
      {
        id: 2,
        name: 'Mobile',
        price: 500,
        discountPercentage: 0,
        makeDate: Date.now(),
        description: 'This is a mobile',
        image: 'assets/Mobile.png',
        isAvailable: true,
      },
    ]

  getProducts(category:string|null) {
    if(category==="electronics"){
      return of(this.products).pipe(delay(0))
    }else{
      return of([]).pipe(delay(0))
    }

  }

}
