import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.isAuthenticated;
  if (isAuthenticated) return true;
  else {
    authService.redirectUrl = state.url;
    router.navigate(['/login']);
    return false;
  }
};
