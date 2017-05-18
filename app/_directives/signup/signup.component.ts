import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/index';

@Component({
  moduleId: module.id,
  styleUrls: ['signup.component.css'],
  templateUrl: 'signup.component.html'
})
export class SignupComponent {
  isLoading: boolean = false;
  password: string = '';
  username: string = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  signup() {
    this.isLoading = true;

    this.authenticationService.signup(this.username, this.password)
      .then((data: any) => {
        this.router.navigateByUrl('/');
      }).catch((error: any) => {
        this.isLoading = false;
      });
  }
}
