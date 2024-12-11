import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../cart.service';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductComponent],
  // providers: [CartService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

  products: any = [];

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
  ) {
  }

  ngOnInit() {

    // way-1
    //const category=this.route.snapshot.params['category'];

    // way-2
    // this.route.params.subscribe(params => {
    //   const category = params['category'];
    //   this.productService.getProducts(category)
    //     .subscribe({
    //       next: (products) => {
    //         this.products = products;
    //       }
    //     })
    // });

    // way-3
    this.route.data.subscribe(data => {
      this.products = data['products'];
    });

  }

}
