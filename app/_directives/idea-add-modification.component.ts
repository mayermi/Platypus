
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, Output, EventEmitter }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../_models/index';
import { IdeaService } from '../_services/index';
// import { IdeaDetailComponent } from './index';

@Component({
  moduleId: module.id,
  selector: 'idea-add-modification',
  templateUrl: 'idea-add-modification.component.html',
  // outputs: ['childData : outgoingData'],
  // styleUrls: [ 'idea-edit.component.css' ]
})
export class IdeaAddModificationComponent {
  @Input('parentData') incomingData: string;

  @Input('parentData') idea: Idea;
  @Input('parentData') addModificationVisible: boolean;

  // outgoingData = new EventEmitter<boolean>();
  @Output() outgoingData = new EventEmitter<boolean>();


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

  // eventInChild(): void {
  //   this.addModificationVisible = false;
  //   this.outgoingData.emit(this.addModificationVisible);
  //   console.log( this.addModificationVisible);
  // }

  save(): void {
    // this.ideaService.addModification(this.idea, this.modification)
    //   .then(() => this.goBack());

    console.log( this.addModificationVisible);
    this.addModificationVisible = false;
    this.outgoingData.emit(this.addModificationVisible);
    console.log( this.addModificationVisible);
  }

  // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
  goBack(): void {
    this.location.back();
  }
}
