import { Component } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {

}
