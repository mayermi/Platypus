import { Component, Input, OnInit } from '@angular/core';

import { Addition, Modification } from '../../../_models/index';
import { AdditionService, ModificationService } from '../../../_services/index';

@Component({
  moduleId: module.id,
  selector: 'modification',
  styleUrls: ['modification.component.css'],
  templateUrl: 'modification.component.html'
})
export class ModificationComponent implements OnInit {
  @Input() currentPhase: number;
  @Input() modification: Modification;

  addition: string = '';
  hasLoadedAdditions: boolean = false;
  isAdditionFormVisible: boolean = false;

  constructor(
    private additionService: AdditionService,
    private modificationService: ModificationService
  ) {}

  dislike(): void {
    console.log('dislike');
  }

  getType(): string {
    const { dislikes, likes } = this.modification;

    if (likes > 0 && dislikes === 0) {
      return 'likes-only';
    } else if (likes === 0 && dislikes > 0) {
      return 'dislikes-only';
    }

    return 'mixed';
  }

  hideAdditionForm(): void {
    this.isAdditionFormVisible = false;
  }

  like(): void {
    console.log('like');
  }

  saveAddition(): void {
    this.modificationService.saveAddition(this.modification, this.addition, this.currentPhase)
      .then(() => {
        this.hasLoadedAdditions = true;
        this.hideAdditionForm();
      });
  }

  showAdditionForm(): void {
    this.isAdditionFormVisible = true;
  }

  ngOnInit(): void {
    if (this.modification.additions.length > 0) {
      this.additionService.getAdditionsByModification(this.modification).then((additions: Addition[]) => {
        this.modification.additions = additions;
        this.hasLoadedAdditions = true;
      });
    }
  }
}
