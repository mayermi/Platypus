import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Idea, Modification } from '../../_models/index';
import { IdeaService, ModificationService } from '../../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'idea.component.html',
  styleUrls: ['idea.component.css']
})
export class IdeaComponent implements OnInit {
  createdAt: string;
  hasLoadedModifications: boolean = false;
  hasOpenModifications: boolean = false;
  idea: Idea;
  isModificationFormVisible: boolean = false;
  modification: Modification = new Modification();
  openModifications: Modification[];
  updatedAt: string;

  constructor(
    private ideaService: IdeaService,
    private modificationService: ModificationService,
    private route: ActivatedRoute
  ) {}

  closeModificationForm(): void {
    this.isModificationFormVisible = false;
  }

  openModificationForm() {
    this.isModificationFormVisible = true;
  }

  saveModification(): void {
    this.ideaService.createModificationForIdea(this.idea, this.modification)
      .then(() => {
        this.closeModificationForm();
        this.hasLoadedModifications = this.hasOpenModifications = true;
        this.openModifications.push()
      });
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params.id))
      .subscribe((idea: Idea) => {
        this.idea = idea;
        this.createdAt = (new Date(idea.createdAt)).toLocaleString();
        this.updatedAt = (new Date(idea.updatedAt)).toLocaleString();

        this.ideaService.getModificationsForIdea(idea).then(modifications => {
          idea.modifications = modifications;
          this.hasLoadedModifications = true;

          this.openModifications = modifications.filter((modification: Modification) => !modification.isMerged);
          this.hasOpenModifications = this.openModifications.length > 0;
        });
    });
  }
}
