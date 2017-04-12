import 'rxjs/add/operator/switchMap';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Idea } from '../../_models/index';

@Component({
  moduleId: module.id,
  selector: 'ideas-teaser',
  templateUrl: 'ideas-teaser.component.html',
  styleUrls: [ '../idea-detail/idea-detail.component.css' ]
})
export class IdeasTeaserComponent {
  phases = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];

  @Input() idea: Idea;
  @Output() onDetailSelected = new EventEmitter<Idea>();

  constructor() {}

  gotoDetail(): void {
    this.onDetailSelected.emit(this.idea);
  }

}