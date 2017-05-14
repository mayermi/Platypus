import { Component, Input } from '@angular/core';

import { Addition } from '../../../_models/index';

@Component({
  moduleId: module.id,
  selector: 'addition',
  styleUrls: ['addition.component.css'],
  templateUrl: 'addition.component.html'
})
export class AdditionComponent {
  @Input() addition: Addition;
  @Input() type: string;

  constructor() {}

  dislike(): void {
    console.log('dislike');
  }

  // TODO move logic to helper file
  getType(): string {
    const { dislikes, likes } = this.addition;

    if (likes > 0 && dislikes === 0) {
      return 'likes-only';
    } else if (likes === 0 && dislikes > 0) {
      return 'dislikes-only';
    }

    return 'mixed';
  }

  like(): void {
    console.log('like');
  }
}
