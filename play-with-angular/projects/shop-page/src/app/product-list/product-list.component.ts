import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule, NgClass, NgForOf, NgIf} from "@angular/common";
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    ProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Output()
  buy: EventEmitter<any> = new EventEmitter();

  products: any = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      description: 'This is a laptop',
      image: 'assets/Laptop.png',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Mobile',
      price: 500,
      description: 'This is a mobile',
      image: 'assets/Mobile.png',
      isAvailable: true,
    },
  ];

  handleBuy(event:any) {
    this.buy.emit(event);
  }

}
