import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Idea, Modification } from '../../_models/index';
import { IdeaService } from '../../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'idea.component.html',
  styleUrls: ['idea.component.css']
})
export class IdeaComponent implements OnInit {
  isAdditionFormVisible: boolean = false;
  isArgumentFormVisible: boolean = false;
  isModificationFormVisible: boolean = false;

  modification: string = '';

  idea: Idea;
  currentPhase: String;
  selectedPhase: String;
  phases = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];
  argumentsIsVisible = false;
  modifications: ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];
  isModificationDetailVisible = false;

  timeToNextPhase = 120;
  modified = new Date("2013-02-20T12:01:04.753Z");

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute
  ) {
  }

  closeAdditionForm(): void {
    this.isAdditionFormVisible = false;
  }

  closeArgumentForm(): void {
    this.isArgumentFormVisible = false;
  }

  closeModificationForm(): void {
    this.isModificationFormVisible = false;
  }

  getTypeForModification(modification: Modification): string {
    const { dislikes, likes } = modification;

    if (likes > 0 && dislikes === 0) {
      return 'likes-only';
    } else if (likes === 0 && dislikes > 0) {
      return 'dislikes-only';
    }

    return 'mixed';
  }

  openAdditionForm() {
    this.closeForms();
    this.isAdditionFormVisible = true;
  }

  openArgumentForm() {
    this.closeForms();
    this.isArgumentFormVisible = true;
  }

  openModificationForm() {
    this.closeForms();
    this.isModificationFormVisible = true;
  }

  saveModification(): void {
    this.ideaService.addModification(this.idea, this.modification)
      .then(() => this.closeModificationForm());
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params.id))
      .subscribe((idea: Idea) => {
        this.idea = idea;
        this.currentPhase = this.phases[idea.phase];
    });
  }

  private closeForms(): void {
    this.isAdditionFormVisible =
      this.isArgumentFormVisible =
      this.isModificationFormVisible = false;
  }

  // save(): void {
  //   this.ideaService.update(this.idea)
  //     .then(() => this.goBack());
  // this.modificationActive = false;
  // this.positionActive = false;
  // }
}
