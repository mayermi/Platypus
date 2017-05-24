import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { Idea, Phase, State } from '../../_models/index';
import { IdeaService } from '../../_services/index';

@Component({
  moduleId: module.id,
  selector: 'idea-teaser',
  styleUrls: ['idea-teaser.component.css'],
  templateUrl: 'idea-teaser.component.html',
})
export class IdeaTeaserComponent implements OnInit {
  @Input() idea: Idea;

  currentPhase: Phase;
  hasLoadedStates: boolean = false;
  timeToPhaseEnd: string;

  constructor(
    private ideaService: IdeaService,
    private router: Router
  ) {}

  goToIdea(): void {
    this.router.navigateByUrl(`/ideas/${this.idea.id}`);
  }

  ngOnInit(): void {
    this.ideaService.getStatesForIdea(this.idea).then((states: State[]) => {
      const currentState = states.sort((stateA: State, stateB: State): number => stateB.phase.number - stateA.phase.number)[0];
      this.timeToPhaseEnd = moment(currentState.endsAt).fromNow(false);
      this.currentPhase = currentState.phase;
      this.hasLoadedStates = true;
    });
  }
}
