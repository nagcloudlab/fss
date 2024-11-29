import { Component, Input } from '@angular/core';
import { CartBadgeComponent } from '../cart-badge/cart-badge.component';

@Component({
  selector: 'app-navbar',
  imports: [CartBadgeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input()
  title: string = 'Shop Page';
}
