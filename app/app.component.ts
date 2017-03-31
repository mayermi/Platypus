import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
  isLoggedIn : boolean;

  constructor(private userService: UserService) { }

  ngDoCheck() {
    //this.isLoggedIn = this.userService.isLoggedIn();
  }
}