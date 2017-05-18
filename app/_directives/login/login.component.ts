import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../_services/index';

@Component({
  moduleId: module.id,
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  password: string = '';
  username: string = '';

  private returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.isLoading = true;

    this.authenticationService.login(this.username, this.password)
      .then((data: any) => {
        this.zone.run(() => {
          this.router.navigateByUrl(this.returnUrl);
        });
      }).catch((error: any) => {
        this.isLoading = false;
      });
  }
}
