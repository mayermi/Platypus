import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
  loggedin : boolean;
  loginbutton: string;
  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngDoCheck() {
    if(this.currentUser) {
      this.loggedin = true;
      this.loginbutton = "Logout";
    } else {
      this.loggedin = false;
      this.loginbutton = "Login";
    }
  }
}