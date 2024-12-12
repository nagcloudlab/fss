import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-cart-view',
  imports: [CommonModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartViewComponent {
  @Input() cart: Array<any> = []; // state

  cartCount = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.cartCount = this.cart.length;
  }

  ngDoCheck() {
    if (this.cartCount < 3) {
      if (this.cartCount !== this.cart.length) {
        this.cartCount = this.cart.length;
        this.cdRef.markForCheck();
        //this.cdRef.detectChanges();
      }
    }
  }
}
