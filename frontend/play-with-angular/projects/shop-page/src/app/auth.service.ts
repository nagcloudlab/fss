import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  // Rxjs
  authStream = new BehaviorSubject<boolean>(this.isAuthenticated);

  // Signal ( Angular 16 )
  authSignal = signal(this.isAuthenticated);

  redirectUrl: string = '/';

  constructor() {}

  login(credentials: { username: string; password: string }) {
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      this.isAuthenticated = true;
      this.authStream.next(this.isAuthenticated);
      // this.authSignal.set(this.isAuthenticated); // reactive change
    } else {
      this.isAuthenticated = false;
      this.authStream.next(this.isAuthenticated);
      // this.authSignal.set(this.isAuthenticated); // reactive change
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.authStream.next(this.isAuthenticated);
    // this.authSignal.set(this.isAuthenticated); // reactive change
  }
}
