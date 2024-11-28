import {Component, Input} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  product:any={}

  currentTab: number = 1;


  handleTabChange(event: MouseEvent, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }

  addToCart(event: MouseEvent) {
    console.log('Product added to cart', event);
  }

}
