import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Addition, Idea, Modification, State } from '../../_models/index';
import { IdeaService } from '../../_services/index';
import { getTypeForReactions } from '../../_helpers/index';

@Component({
  encapsulation: ViewEncapsulation.None,
  moduleId: module.id,
  styleUrls: ['merge.component.css'],
  templateUrl: 'merge.component.html'
})
export class MergeComponent implements OnInit {
  applicableAdditions: Addition[];
  currentState: State;
  hasAdditions: boolean = false;
  hasState: boolean = false;
  idea: Idea;
  modification: Modification;
  updatedIdea: Idea = new Idea();

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.ideaService.updateIdeaWithModification(this.updatedIdea, this.modification).then(() => {
      this.router.navigateByUrl(`/ideas/${this.idea.id}`);
    });
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getModification(params.ideaId, params.modificationId))
      .subscribe((modification: Modification) => {
        this.modification = modification;

        this.idea = modification.idea as Idea;

        this.updatedIdea = Object.assign({}, this.idea);

        this.ideaService.getStatesForIdea(this.idea).then((states: State[]) => {
          this.currentState = states[states.length - 1];
          this.hasState = true;
        });

        this.ideaService.getAdditionsForModification(this.idea, this.modification).then((additions: Addition[]) => {
          this.modification.additions = additions;
          this.hasAdditions = additions.length > 0;
        });
      });
  }
}
