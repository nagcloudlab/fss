import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-product-list-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './product-list-home.component.html',
  styleUrl: './product-list-home.component.css',
})
export class ProductListHomeComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe({
      next: (data) => {
        // console.log('data', data);
        // console.log(data['title']);
        document.title = data['title'];
      },
    });
  }
}
