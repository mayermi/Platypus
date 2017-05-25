import { Component, Input } from '@angular/core';

import { Idea, Modification } from '../../../_models/index';
import { IdeaService } from '../../../_services/index';
import { formatDate } from '../../../_helpers/index';

@Component({
  moduleId: module.id,
  selector: 'modification-row',
  styleUrls: ['modification-row.component.css'],
  templateUrl: 'modification-row.component.html'
})
export class ModificationRowComponent {
  @Input() idea: Idea;
  @Input() modification: Modification;

  constructor(private ideaService: IdeaService) {}

  setMergeable(): void {
    this.ideaService.setModificationMergeable(this.idea, this.modification).then((modification: Modification) => {
      this.modification = modification;
    });
  }

  getAbsoluteDate(date: number): string {
    return formatDate.absolute(date);
  }

  getRelativeDate(date: number): string {
    return formatDate.relative(date);
  }
}
