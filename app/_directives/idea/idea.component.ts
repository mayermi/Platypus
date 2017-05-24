import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Idea, Modification, State } from '../../_models/index';
import { IdeaService, ModificationService } from '../../_services/index';
import { formatDate } from '../../_helpers/index';

@Component({
  moduleId: module.id,
  templateUrl: 'idea.component.html',
  styleUrls: ['idea.component.css']
})
export class IdeaComponent implements OnInit {
  currentState: State;
  hasLoadedModifications: boolean = false;
  hasOpenModifications: boolean = false;
  idea: Idea;
  isModificationFormVisible: boolean = false;
  modification: Modification = new Modification();
  openModifications: Modification[];

  constructor(
    private ideaService: IdeaService,
    private modificationService: ModificationService,
    private route: ActivatedRoute
  ) {}

  closeModificationForm(): void {
    this.isModificationFormVisible = false;
  }

  getAbsoluteDate(date: number): string {
    return formatDate.absolute(date);
  }

  getRelativeDate(date: number): string {
    return formatDate.relative(date);
  }

  openModificationForm() {
    this.isModificationFormVisible = true;
  }

  saveModification(): void {
    this.ideaService.createModificationForIdea(this.idea, this.modification)
      .then((modification) => {
        this.closeModificationForm();
        this.hasLoadedModifications = this.hasOpenModifications = true;
        this.openModifications.unshift(modification);
      });
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params.id))
      .subscribe((idea: Idea) => {
        this.idea = idea;

        this.ideaService.getModificationsForIdea(idea).then((modifications: Modification[]) => {
          idea.modifications = modifications.reverse();
          this.hasLoadedModifications = true;

          this.openModifications = modifications.filter((modification: Modification) => !modification.isMerged);
          this.hasOpenModifications = this.openModifications.length > 0;
        });

        this.ideaService.getStatesForIdea(idea).then((states: State[]) => {
          idea.states = states;

          this.currentState = states.sort((stateA: State, stateB: State): number => stateB.phase.number - stateA.phase.number)[0];
        });
    });
  }
}
