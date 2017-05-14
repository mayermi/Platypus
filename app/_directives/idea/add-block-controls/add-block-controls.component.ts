import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'add-block-controls',
  styleUrls: ['add-block-controls.component.css'],
  templateUrl: 'add-block-controls.component.html'
})
export class AddBlockControlsComponent {
  @Output() onCancel = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  isSaving: boolean = false;

  constructor() {
  }

  cancel(): void {
    this.onCancel.emit();
  }

  save(): void {
    this.isSaving = true;
    this.onSave.emit();
  }
}
