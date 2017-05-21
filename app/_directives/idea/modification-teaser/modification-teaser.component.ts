import { Component, Input, OnInit } from '@angular/core';

import { Addition, Idea, Modification, Reaction } from '../../../_models/index';
import { IdeaService } from '../../../_services/index';
import { getTypeForReactions } from '../../../_helpers/index';

@Component({
  moduleId: module.id,
  selector: 'modification-teaser',
  styleUrls: ['modification-teaser.component.css'],
  templateUrl: 'modification-teaser.component.html'
})
export class ModificationTeaserComponent implements OnInit {
  @Input() idea: Idea;
  @Input() modification: Modification;

  additionCount: number = 0;
  dislikeCount: number = 0;
  hasAdditions: boolean = false;
  likeCount: number = 0;
  type: string;

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.ideaService.getReactionsForModification(this.idea, this.modification).then((reactions: Reaction[]) => {
      this.likeCount = reactions.filter((reaction: Reaction) => reaction.type === 'like').length;
      this.dislikeCount = reactions.filter((reaction: Reaction) => reaction.type === 'dislike').length;

      this.type = getTypeForReactions(reactions);
    });

    this.ideaService.getAdditionsForModification(this.idea, this.modification).then((additions: Addition[]) => {
      this.additionCount = additions.length;
      this.hasAdditions = additions.length > 0;
    });
  }
}
