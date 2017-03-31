import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  // styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService
    ) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}

