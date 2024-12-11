import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../cart.service';
import { ReviewComponent } from '../review/review.component';
import { ReviewFormComponent } from '../review-form/review-form.component';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    HighlightDirective,
    DiscountPipe,
    ReviewComponent,
    ReviewFormComponent,
  ],
  // providers: [CartService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: any = {};

  reviews: any[] = [
    {
      author: 'who1',
      rating: 5,
      body: 'sample review1',
    },
    {
      author: 'who2',
      rating: 1,
      body: 'sample review2',
    },
  ];

  // @Output()
  // buy: EventEmitter<any> = new EventEmitter();
  //private cartService: CartService;

  currentTab: number = 1;

  constructor(private cartService: CartService) {
    //this.cartService = new CartService();
    //this.cartService = cartService;
  }

  handleNewReview(review: any) {
    // api call
    this.reviews = [review, ...this.reviews];
  }

  handleTabChange(event: MouseEvent, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }

  handleBuy(event: MouseEvent) {
    // this.buy.emit({
    //   product: this.product,
    // });
    this.cartService.addToCart(this.product);
  }
}
