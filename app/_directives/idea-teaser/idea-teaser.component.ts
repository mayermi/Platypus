import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Idea } from '../../_models/index';

@Component({
  moduleId: module.id,
  selector: 'idea-teaser',
  styleUrls: ['idea-teaser.component.css'],
  templateUrl: 'idea-teaser.component.html',
})
export class IdeaTeaserComponent {
  @Input() idea: Idea;

  constructor(private router: Router) {}

  goToIdea(): void {
    this.router.navigateByUrl(`/idea/${this.idea.id}`);
  }
}
