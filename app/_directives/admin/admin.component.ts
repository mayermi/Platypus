import { Component, OnInit } from '@angular/core';

import { Idea } from '../../_models/index';
import { IdeaService } from '../../_services/index';

@Component({
  moduleId: module.id,
  styleUrls: ['admin.component.css'],
  templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {
  ideas: Idea[];

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.ideaService.getIdeas().then((ideas: Idea[]) => {
      this.ideas = ideas;
    });
  }
}
