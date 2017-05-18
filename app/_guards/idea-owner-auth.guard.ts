import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IdeaOwnerAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;

    // TODO temporarily deactivated as we only check token-existence at the moment
    // if (localStorage.getItem('currentUser')) {
    //   // return `true` if "fake-admin" user
    //   return JSON.parse(localStorage.getItem('currentUser')).username === 'm';
    // }

    // not logged in so redirect to login page with return-URL
    // this.router.navigateByUrl('/login', {
    //   queryParams: {
    //     returnUrl: state.url
    //   }
    // });
    //
    // return false;
  }
}
