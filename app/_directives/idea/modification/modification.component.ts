import { Component, Input } from '@angular/core';

import { Modification } from '../../../_models/index';

@Component({
  moduleId: module.id,
  selector: 'modification',
  styleUrls: ['modification.component.css'],
  templateUrl: 'modification.component.html'
})
export class ModificationComponent {
  @Input() modification: Modification;
  @Input() type: String;

  isAdditionFormVisible: boolean = false;

  constructor() {}

  dislike(): void {
    console.log('dislike');
  }

  hideAdditionForm(): void {
    this.isAdditionFormVisible = false;
  }

  like(): void {
    console.log('like');
  }

  saveAddition(): void {
    // TODO save
    this.hideAdditionForm();
  }

  showAdditionForm(): void {
    this.isAdditionFormVisible = true;
  }
}
