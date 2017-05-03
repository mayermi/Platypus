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
    this.phase = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'][this.idea.phase];
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.idea._id]);
  }

  ngOnInit(): void {
    this.getPhase();
  }
}
