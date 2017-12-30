import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //redirected from backend
    return this.isAllowedOnState(state.url);
  }

  isAllowedOnState(url: string): boolean {
    const forbiddenWhenLoggedOut = /(\/dashboard\/*.*|\/profile)/ig;
    const forbiddenWhenLoggedIn = ['/login', '/signup', '/'];
    const isLoggedIn = this.userService.loggedIn();
    if (isLoggedIn && forbiddenWhenLoggedIn.indexOf(url) > -1) {
      this.router.navigate(['/dashboard']);
      return false;
    } else if (!isLoggedIn && forbiddenWhenLoggedOut.test(url)) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}