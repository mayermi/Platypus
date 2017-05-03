import { Component } from '@angular/core';
import { AuthenticationService, UserService } from '../../_services/index';

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
      private userService: UserService) {
  }

  ngDoCheck() {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout()
      .then((data: any) => {})
      .catch((e: any) => console.log(e));
  }
}
