import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Addition, Idea, Modification, Reaction } from '../../_models/index';
import { AuthenticationService, IdeaService } from '../../_services/index';
import { formatDate } from '../../_helpers/index';

@Component({
  encapsulation: ViewEncapsulation.None,
  moduleId: module.id,
  styleUrls: ['modification.component.css'],
  templateUrl: 'modification.component.html'
})
export class ModificationComponent implements OnInit {
  @Input() idea: Idea;
  @Input() modification: Modification;

  addition: Addition = new Addition();
  hasLoadedAdditions: boolean = false;
  isAdditionFormVisible: boolean = false;
  isMergeable: boolean = false;
  reasoning: string;

  constructor(
    private authenticationService: AuthenticationService,
    private ideaService: IdeaService,
    private route: ActivatedRoute
  ) {}

  dislike(): void {
    const user = this.authenticationService.getLoggedInUser();
    const existingReaction = (this.modification.reactions || []).find(reaction => reaction.user.id === user.id);

    const isDislikedByCurrentUser = existingReaction ? existingReaction.type === 'dislike' : false;

    if (isDislikedByCurrentUser) {
      this.ideaService.deleteReactionForModification(this.idea, this.modification);
    } else {
      const reaction = new Reaction();
      reaction.type = 'dislike';

      this.ideaService.createReactionForModification(this.idea, this.modification, reaction);
    }
  }

  getAbsoluteDate(date: number): string {
    return formatDate.absolute(date);
  }

  getDislikes(): number {
    return this.modification.reactions ? this.modification.reactions.filter((reaction: Reaction) => reaction.type === 'dislike').length : 0;
  }

  getLikes(): number {
    return this.modification.reactions ? this.modification.reactions.filter((reaction: Reaction) => reaction.type === 'like').length : 0;
  }

  getRelativeDate(date: number): string {
    return formatDate.relative(date);
  }

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

  hideAdditionForm(): void {
    this.isAdditionFormVisible = false;
  }

  like(): void {
    const user = this.authenticationService.getLoggedInUser();
    const existingReaction = (this.modification.reactions || []).find(reaction => reaction.user.id === user.id);

    const isLikedByCurrentUser = existingReaction ? existingReaction.type === 'like' : false;

    if (isLikedByCurrentUser) {
      this.ideaService.deleteReactionForModification(this.idea, this.modification);
    } else {
      const reaction = new Reaction();
      reaction.type = 'like';

      this.ideaService.createReactionForModification(this.idea, this.modification, reaction);
    }
  }

  saveAddition(): void {
    this.ideaService.createAdditionForModification(this.idea, this.modification, this.addition)
      .then(() => {
        this.hasLoadedAdditions = true;
        this.hideAdditionForm();
      });
  }

  showAdditionForm(): void {
    this.isAdditionFormVisible = true;
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getModification(params.ideaId, params.modificationId))
      .subscribe((modification: Modification) => {
        this.modification = modification;
        this.idea = modification.idea as Idea;

        this.isMergeable = !modification.isMerged && modification.isMergeable && modification.user.id === this.authenticationService.getLoggedInUser().id;

        this.ideaService.getAdditionsForModification(this.idea, this.modification).then((additions: Addition[]) => {
          this.modification.additions = additions;
          this.hasLoadedAdditions = true;
        });

        this.ideaService.getReactionsForModification(this.idea, this.modification).then((reactions: Reaction[]) => {
          this.modification.reactions = reactions;
        });
      });
  }
}
