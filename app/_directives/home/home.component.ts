import { Component, OnInit } from '@angular/core';

import { Idea, User } from '../../_models/index';
import { IdeaService, UserService } from '../../_services/index';

@Component({
  moduleId: module.id,
  styleUrls: ['home.component.css'],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  contributors: User[];
  creators: User[];
  topIdeas: Idea[];

  constructor(
    private ideaService: IdeaService,
    private userService: UserService) {
  }

  getContributors(): void {
    this.userService.getContributors()
      .then((contributors: User[]) => this.contributors = contributors);
  }

  getCreators(): void {
    this.userService.getCreators()
      .then((creators: User[]) => this.creators = creators);
  }

  getTopIdeas(): void {
    this.ideaService.getTopIdeas()
      .then((topIdeas: Idea[]) => this.topIdeas = topIdeas);
  }

  ngOnInit(): void {
    this.getContributors();
    this.getCreators();
    this.getTopIdeas();
  }
}
