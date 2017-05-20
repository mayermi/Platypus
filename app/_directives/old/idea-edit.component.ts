import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Idea } from '../../_models/index';
import { IdeaService } from '../../_services/index';

@Component({
  moduleId: module.id,
  selector: 'my-idea-edit',
  templateUrl: 'idea-edit.component.html'
})
export class IdeaEditComponent implements OnInit {
  idea: Idea;
  ideaParts = ['Awareness', 'Internalization', 'Twist, Defend and Persuade', 'Commitment'];

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params.id))
      .subscribe((idea: Idea) => this.idea = idea);
  }

  save(): void {
    this.ideaService.update(this.idea)
      .then(() => null /* navigate to view */ );
  }
}
