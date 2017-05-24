import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Addition, Idea, Modification, Reaction } from '../../../_models/index';
import { AuthenticationService, IdeaService } from '../../../_services/index';
import { formatDate } from '../../../_helpers/index';

@Component({
  encapsulation: ViewEncapsulation.None,
  moduleId: module.id,
  selector: 'addition',
  styleUrls: ['addition.component.css'],
  templateUrl: 'addition.component.html'
})
export class AdditionComponent implements OnInit {
  @Input() addition: Addition;
  @Input() idea: Idea;
  @Input() modification: Modification;

  constructor(
    private authenticationService: AuthenticationService,
    private ideaService: IdeaService
  ) {}

  getAbsoluteDate(date: number): string {
    return formatDate.absolute(date);
  }

  getDislikes(): number {
    return this.addition.reactions ? this.addition.reactions.filter((reaction: Reaction) => reaction.type === 'dislike').length : 0;
  }

  getLikes(): number {
    return this.addition.reactions ? this.addition.reactions.filter((reaction: Reaction) => reaction.type === 'like').length : 0;
  }

  getRelativeDate(date: number): string {
    return formatDate.relative(date);
  }

  dislike(): void {
    const user = this.authenticationService.getLoggedInUser();
    const existingReaction = (this.addition.reactions || []).find(reaction => reaction.user.id === user.id);

    const isDislikedByCurrentUser = existingReaction ? existingReaction.type === 'dislike' : false;

    if (isDislikedByCurrentUser) {
      this.ideaService.deleteReactionForAddition(this.idea, this.modification, this.addition);
    } else {
      const reaction = new Reaction();
      reaction.type = 'dislike';

      this.ideaService.createReactionForAddition(this.idea, this.modification, this.addition, reaction);
    }
  }

  // TODO move logic to helper file
  getType(): string {
    const dislikes = this.getDislikes();
    const likes = this.getLikes();

    if (likes > 0 && dislikes === 0) {
      return 'likes-only';
    } else if (likes === 0 && dislikes > 0) {
      return 'dislikes-only';
    }

    return 'mixed';
  }

  like(): void {
    const user = this.authenticationService.getLoggedInUser();
    const existingReaction = (this.addition.reactions || []).find(reaction => reaction.user.id === user.id);

    const isLikedByCurrentUser = existingReaction ? existingReaction.type === 'like' : false;

    if (isLikedByCurrentUser) {
      this.ideaService.deleteReactionForAddition(this.idea, this.modification, this.addition);
    } else {
      const reaction = new Reaction();
      reaction.type = 'like';

      this.ideaService.createReactionForAddition(this.idea, this.modification, this.addition, reaction);
    }
  }

  ngOnInit(): void {
    this.ideaService.getReactionsForAddition(this.idea, this.modification, this.addition).then((reactions: Reaction[]) => {
      this.addition.reactions = reactions;
    });
  }
}
