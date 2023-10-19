import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // If user not loggedIn, redirect to login
  if (!authService.isLoggedIn) {
    console.log('AQUI', authService.isLoggedIn);
    router.navigate(['/login']);
    return false;
  }

  return true;
};
