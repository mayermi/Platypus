import { Component, Input, OnInit } from '@angular/core';

import { Idea, Modification, State } from '../../../_models/index';
import { IdeaService } from '../../../_services/index';
import { formatDate } from '../../../_helpers/index';

@Component({
  moduleId: module.id,
  selector: 'idea-row',
  styleUrls: ['idea-row.component.css'],
  templateUrl: 'idea-row.component.html'
})
export class IdeaRowComponent implements OnInit {
  @Input() idea: Idea;

  hasLoadedStates: boolean = false;
  currentState: State;

  constructor(private ideaService: IdeaService) {}

  forwardToNextPhase(): void {
    this.ideaService.setPhaseForIdea(this.idea, this.currentState.phase.number + 1).then((state: State) => {
      this.idea.states.push(state);
      this.currentState = state;
    });
  }

  getAbsoluteDate(date: number): string {
    return formatDate.absolute(date);
  }

  getRelativeDate(date: number): string {
    return formatDate.relative(date);
  }

  ngOnInit(): void {
    this.ideaService.getModificationsForIdea(this.idea).then((modifications: Modification[]) => {
      this.idea.modifications = modifications;
    });

    this.ideaService.getStatesForIdea(this.idea).then((states: State[]) => {
      this.idea.states = states;
      this.currentState = states[states.length - 1];
      this.hasLoadedStates = true;
    });
  }
}
