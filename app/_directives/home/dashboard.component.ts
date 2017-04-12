import { Component, OnInit } from '@angular/core';

import { User, Idea } from '../../_models/index';
import { UserService, IdeaService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  ideas: Idea[];
  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private ideaService: IdeaService
    ) { }

  public ideaDetailSelected(idea: Idea): void {
    this.router.navigate(['/detail', idea._id]);
  }

  getIdeas(): void {
    this.ideaService.getIdeas().then(ideas => this.ideas = ideas);
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
    this.getIdeas();
  }
}

