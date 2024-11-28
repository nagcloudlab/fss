import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Shop-IT';
  currentTab: number = 1;
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

  addToCart(event: MouseEvent) {
    console.log('Product added to cart', event);
  }
  handleTabChange(event: MouseEvent, tabIndex: number) {
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
}
