import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css',
})
export class CartViewComponent
  implements OnChanges, OnInit, OnDestroy, AfterContentInit, AfterViewInit
{
  //@Input()
  cart: any[] = [];

  @ContentChild('header')
  headerElement!: ElementRef;

  @ViewChild('footer')
  footerElement!: ElementRef;

  isHeaderContentGiven = false;

  constructor(private cartService: CartService) {
    console.log('CartViewComponent::constructor');
    // why we  need ?
    // any one-time initialization
    // e.g dependency injection
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CartViewComponent::ngOnChanges', changes);
    // why we need ?
    // to react to changes in input properties
  }

  ngOnInit() {
    console.log('CartViewComponent::ngOnInit');
    // why we need ?
    // to perform any initialization that requires access to input properties
    // e.g. to make an HTTP request to fetch data
    // subscribe to an observable streams
    this.cart = this.cartService.getCart();
  }

  ngOnDestroy() {
    console.log('CartViewComponent::ngOnDestroy');
    // why we need ?
    // to cleanup any resources or subscriptions
  }

  // to perform low-level DOM related work

  ngAfterContentInit() {
    console.log('CartViewComponent::ngAfterContentInit');
    // why we need ?
    // to access the content projected into the component
    //console.log(this.headerElement)
    if (this.headerElement) {
      this.isHeaderContentGiven = true;
    }
  }
  ngAfterViewInit() {
    // component's DOM elements are initialized
    this.footerElement.nativeElement.style.backgroundColor = 'yellow';
  }
}
