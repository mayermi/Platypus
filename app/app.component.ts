import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
  isLoggedIn : boolean;
  model: any = {};
  returnUrl: string;

  constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

  ngDoCheck() {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout().subscribe((data) => console.log(data));
  }
}