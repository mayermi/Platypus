
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, Output, EventEmitter }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../_models/index';
import { IdeaService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'idea-add-modification',
  templateUrl: 'idea-add-modification.component.html'
  // styleUrls: [ 'idea-edit.component.css' ]
})
export class IdeaAddModificationComponent {

  @Input() idea: Idea;
  @Output() onSave = new EventEmitter<boolean>();
  @Output() onGoBack = new EventEmitter<boolean>();


  phases = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      // .switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
      .switchMap((params: Params) => this.ideaService.getIdea(params['_id']))
      .subscribe(idea => this.idea = idea);
  }

  save(): void {
    // this.ideaService.addModification(this.idea, this.modification)
    //   .then(() => this.goBack());

    this.onSave.emit(true);
  }

  // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
  goBack(): void {
    this.onGoBack.emit(true);
    // this.location.back();
  }
}
