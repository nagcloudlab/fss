import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, HighlightDirective, DiscountPipe],
  // providers: [CartService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: any = {};
  // @Output()
  // buy: EventEmitter<any> = new EventEmitter();

  //private cartService: CartService;

  currentTab: number = 1;

  constructor(private cartService: CartService) {
    //this.cartService = new CartService();
    //this.cartService = cartService;
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
