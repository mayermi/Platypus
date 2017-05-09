import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Idea } from '../../_models/index';

@Component({
  moduleId: module.id,
  selector: 'idea-teaser',
  styleUrls: ['idea-teaser.component.css'],
  templateUrl: 'idea-teaser.component.html',
})
export class IdeaTeaserComponent implements OnInit {
  @Input() idea: Idea;

  phase: String = '';

  constructor(private router: Router) {
  }

  getPhase(): void {
    // TODO move this to service
    // TODO also map `_id` to `id`
    // TODO map location-array to string
    this.phase = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'][this.idea.phase];
  }

  goToIdea(): void {
    this.router.navigateByUrl(`/detail/${this.idea._id}`);
  }

  ngOnInit(): void {
    this.idea.location = ['Spring Hill'];
    this.idea.tags = [
      ['social', 'economical', 'political'],
      ['economical', 'environmental'],
      ['technological', 'economical'],
      ['political'],
      ['social', 'political', 'economical', 'technological']
    ][Math.floor(Math.random() * 5)];

    this.getPhase();
  }
}
