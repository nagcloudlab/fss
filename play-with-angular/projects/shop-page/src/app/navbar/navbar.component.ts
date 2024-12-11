import { Component, Input } from '@angular/core';
import { CartBadgeComponent } from '../cart-badge/cart-badge.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CartBadgeComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input()
  title: string = 'Shop Page';
}
