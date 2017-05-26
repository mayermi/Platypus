import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Addition, Idea, Modification, Reaction } from '../../../_models/index';
import { IdeaService } from '../../../_services/index';
import { getTypeForReactions } from '../../../_helpers/index';

@Component({
  encapsulation: ViewEncapsulation.None,
  moduleId: module.id,
  selector: 'addition-teaser',
  styleUrls: ['addition-teaser.component.css'],
  templateUrl: 'addition-teaser.component.html'
})
export class AdditionTeaserComponent implements OnInit {
  @Input() addition: Addition;
  @Input() content: string;
  @Input() currentPhase: number;
  @Input() idea: Idea;
  @Input() modification: Modification;

  type: string;
  isApplicable: boolean = false;

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.ideaService.getReactionsForAddition(this.idea, this.modification, this.addition).then((reactions: Reaction[]) => {
      this.type = getTypeForReactions(reactions);

      const dislikesCount = reactions.filter((reaction: Reaction) => reaction.type === 'dislike').length || 0;
      const likesCount = reactions.filter((reaction: Reaction) => reaction.type === 'like').length || 0;

      this.isApplicable = this.currentPhase === 3 ? (likesCount - dislikesCount > 0) : (likesCount > 0 && dislikesCount === 0);
    });
  }
}
