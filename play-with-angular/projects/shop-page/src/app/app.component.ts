import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductListComponent} from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Shop-IT';

}
