import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Idea } from '../../_models/index';
import { IdeaService } from '../../_services/index';

@Component({
  moduleId: module.id,
  styleUrls: ['new-idea.component.css'],
  templateUrl: 'new-idea.component.html'
})
export class NewIdeaComponent {
  categories = [
    {
      value: 'economical',
      checked: false,
    }, {
      value: 'environmental',
      checked: false,
    }, {
      value: 'political',
      checked: false,
    }, {
      value: 'social',
      checked: false,
    }, {
      value: 'technological',
      checked: false,
    }
  ];
  idea: Idea = new Idea();
  isSaving: boolean = false;

  constructor(
    private ideaService: IdeaService,
    private router: Router
  ) {}

  save(): void {
    this.isSaving = true;

    // TODO trim inputs

    this.idea.categories = this.categories
      .filter(category => category.checked)
      .map(category => category.value);

    this.ideaService.create(this.idea)
      .then((idea) => {
        this.isSaving = false;
        this.router.navigateByUrl(`/idea/${idea.id}`);
      });
  }
}
