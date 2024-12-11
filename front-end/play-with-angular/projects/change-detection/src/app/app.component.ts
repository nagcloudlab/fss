import { Component, NgZone } from '@angular/core';

import { CartViewComponent } from './cart-view/cart-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CartViewComponent, UserViewComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'change-detection';

  count1 = 0;
  count2 = 0;

  constructor(private zone: NgZone) {}

  cart: Array<any> = []; // state
  user = {
    name: 'Nag',
    age: {
      value: 32,
    },
  };

  userStream = new BehaviorSubject<any>('Guest');

  handleLogin() {
    this.userStream.next('Nag');
  }
  handleLogout() {
    this.userStream.next('Guest');
  }

  handleUserAgeChange() {
    this.user.age.value += 1;
  }

  handleBuy1() {
    // mutation
    this.cart.push({
      name: 'Product',
      price: 0,
    });
    // immutable
    // this.cart = [
    //   ...this.cart,
    //   {
    //     name: 'Product',
    //     price: 0,
    //   },
    // ];
  }

  handler1(event: MouseEvent) {
    this.count1 = 0;
    this.increaseProgress1(() => console.log('Done!'));
  }
  increaseProgress1(doneCallback: () => void) {
    this.count1 += 1;
    console.log(`Current progress: ${this.count1}%`);
    if (this.count1 < 100) {
      // Async
      window.setTimeout(() => {
        this.increaseProgress1(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }

  handler2(event: MouseEvent) {
    this.count2 = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress2(() => {
        this.zone.run(() => console.log('Outside Done!'));
      });
    });
  }
  increaseProgress2(doneCallback: () => void) {
    this.count2 += 1;
    console.log(`Current progress: ${this.count2}%`);
    if (this.count2 % 10 === 0) {
      this.zone.run(() => {
        console.log('10%');
      });
    }
    if (this.count2 < 100) {
      window.setTimeout(() => {
        this.increaseProgress2(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }
}
