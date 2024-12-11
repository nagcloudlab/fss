import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './product-list-home.component.html',
  styleUrl: './product-list-home.component.css',
})
export class ProductListHomeComponent {}
