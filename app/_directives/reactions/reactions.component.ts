import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User, Reaction } from '../../_models/index';
import { AuthenticationService } from '../../_services/index';

@Component({
  moduleId: module.id,
  selector: 'reactions',
  styleUrls: ['reactions.component.css'],
  templateUrl: 'reactions.component.html'
})
export class ReactionsComponent {
  @Input() isViewOnly: boolean;
  @Input() reactions: Reaction[];
  @Output() onDislike = new EventEmitter<void>();
  @Output() onLike = new EventEmitter<void>();

  constructor(private authenticationService: AuthenticationService) {}

  private isDislike(reaction: Reaction) {
    return reaction.type === 'dislike';
  }

  private isLike(reaction: Reaction) {
    return reaction.type === 'like';
  }

  getDislikes(): number {
    return this.reactions.filter((reaction: Reaction) => this.isDislike(reaction)).length;
  }

  getLikes(): number {
    return this.reactions.filter((reaction: Reaction) => this.isLike(reaction)).length;
  }

  dislike(): void {
    this.onDislike.emit();
  }

  like(): void {
    this.onLike.emit();
  }

  wasDislikedByCurrentUser(): boolean {
    const user = this.authenticationService.getLoggedInUser();
    const reaction = this.reactions.find(reaction => reaction.user.id === user.id);

    return reaction ? this.isDislike(reaction) : false;
  }

  wasLikedByCurrentUser(): boolean {
    const user = this.authenticationService.getLoggedInUser();
    const reaction = this.reactions.find(reaction => reaction.user.id === user.id);

    return reaction ? this.isLike(reaction) : false;
  }
}
