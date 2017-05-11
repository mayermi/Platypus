import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, Output, EventEmitter }      from '@angular/core';
import { Idea }        from '../../../_models/index';

@Component({
  moduleId: module.id,
  selector: 'modification-detail',
  templateUrl: 'modification-detail.component.html',
//  styleUrls: [ '../idea-detail.component.css' ]
})
export class ModificationDetailComponent {
  @Input() idea: Idea;
  @Output() onModification = new EventEmitter<boolean>();
  @Output() onAddition = new EventEmitter<boolean>();

  constructor() {}

  additionClicked(): void {
    this.onAddition.emit(true);
  }
  modificationClicked(): void {
    this.onModification.emit(true);
  }
}
