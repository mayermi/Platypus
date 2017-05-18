import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/index';

@Component({
  moduleId: module.id,
  selector: 'navigation',
  styleUrls: ['navigation.component.css'],
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent {
  isLoggedIn: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngDoCheck() {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout()
      .then((response: any) => this.router.navigateByUrl('/'));
  }
}
