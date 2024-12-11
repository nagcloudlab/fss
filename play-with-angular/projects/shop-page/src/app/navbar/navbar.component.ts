import { Component, Input, computed, effect } from '@angular/core';
import { CartBadgeComponent } from '../cart-badge/cart-badge.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CartBadgeComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input()
  title: string = 'Shop Page';

  // isAuthenticated = effect(() => {
  // get boolean value from signal
  // const v = this.authService.authSignal().valueOf();
  // console.log('isAuthenticated', v);
  // return v;
  // });

  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authStream.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  handleLogout(event: MouseEvent) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
