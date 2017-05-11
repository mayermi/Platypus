import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'reactions',
  styleUrls: ['reactions.component.css'],
  templateUrl: 'reactions.component.html'
})
export class ReactionsComponent {
  @Input() dislikes: number;
  @Input() likes: number;
  @Output() onDislike = new EventEmitter<void>();
  @Output() onLike = new EventEmitter<void>();

  constructor() {}

  dislike(): void {
    this.onDislike.emit();
  }

  like(): void {
    this.onLike.emit();
  }
}
