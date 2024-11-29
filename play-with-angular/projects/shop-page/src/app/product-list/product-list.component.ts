import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductComponent],
  // providers: [CartService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // @Output()
  // buy: EventEmitter<any> = new EventEmitter();

  products: any = [
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
  ];

  // handleBuy(event: any) {
  //   this.buy.emit(event);
  // }
}
