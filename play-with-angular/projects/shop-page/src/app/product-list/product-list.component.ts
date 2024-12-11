import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';

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

  products: any = [];

  constructor(private route: ActivatedRoute) {}

  // handleBuy(event: any) {
  //   this.buy.emit(event);
  // }

  ngOnInit() {
    //console.log(this.route.snapshot.params);
    this.route.params.subscribe((params) => {
      let { category } = params;
      if (category === 'electronics') {
        this.products = [
          //   {
          //     id: 1,
          //     name: 'Laptop',
          //     price: 1000,
          //     discountPercentage: 10,
          //     currencyCode: 'INR',
          //     makeDate: Date.now(),
          //     description: 'This is a laptop',
          //     image: 'assets/Laptop.png',
          //     isAvailable: true,
          //   },
          //   {
          //     id: 2,
          //     name: 'Mobile',
          //     price: 500,
          //     discountPercentage: 0,
          //     makeDate: Date.now(),
          //     description: 'This is a mobile',
          //     image: 'assets/Mobile.png',
          //     isAvailable: true,
          //   },
        ];
      } else {
        this.products = [];
      }

      this.route.data.subscribe({
        next: (data) => {
          this.products = data['products'];
        },
        error: (error) => {
          console.log('Error', error);
        },
      });
    });
  }
}
