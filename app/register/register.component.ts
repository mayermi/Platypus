import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    user: User;
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.user)
            .then((data: any) => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            })
             .catch((error: any) => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
