import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { pathDefinitions } from 'src/app/features/shared/definitions';
import { TokenService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private store: Store<any>
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    /* get token */
    const token = this.tokenService.getToken();

    if (token) {
      /* redirect to login page */
      this.store.select(store => store.auth.user).subscribe(user => {
        return !!user;
      });
    } else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
    return true;
  }
}
