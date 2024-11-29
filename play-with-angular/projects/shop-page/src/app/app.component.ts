import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    ProductListComponent,
    CartBadgeComponent,
    CartViewComponent,
  ],
  providers: [CartService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Shop-IT';
  // cart: any[] = [];
  isCartVisible: boolean = false;

  handleToggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  // handleBuy(event: any) {
  //   // mutable
  //   // this.cart.push({
  //   //   product: event.product,
  //   //   quantity:1
  //   // });
  //   // immutable
  //   this.cart = this.cart.concat({
  //     product: event.product,
  //     quantity: 1,
  //   });
  // }
}
