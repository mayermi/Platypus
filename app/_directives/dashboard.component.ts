import { Component, OnInit } from '@angular/core';

import { Idea } from '../_models/index';
import { IdeaService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  ideas: Idea[] = [];

  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.ideaService.getIdeas().then(ideas => this.ideas = ideas.slice(1, 5));
  }
}

