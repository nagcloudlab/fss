import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-product',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: any = {};

  @Output()
  buy: EventEmitter<any> = new EventEmitter();

  currentTab: number = 1;

  handleTabChange(event: MouseEvent, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }

  handleBuy(event: MouseEvent) {
    this.buy.emit({
      product: this.product,
    });
  }
}
