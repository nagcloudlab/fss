import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  imports: [],
  templateUrl: './cart-badge.component.html',
  styleUrl: './cart-badge.component.css',
})
export class CartBadgeComponent {
  // @Input()
  count: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log('CartBadgeComponent::ngOnInit');
    this.count = this.cartService.getCartCount();
  }
}
