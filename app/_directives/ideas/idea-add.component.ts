import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../../_models/index';
import { IdeaService } from '../../_services/index';

@Component({
  moduleId: module.id,
  selector: 'idea-add',
  templateUrl: 'idea-add.component.html',
})
export class IdeaAddComponent implements OnInit {
  ideas: Idea[];
  idea: Idea;
  title: string;
  // ideaService = IdeaService;

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  add(): void {
    // title = title.trim();
    // if (!title) { return; }
    this.ideaService.create(this.title).then((idea: Idea) => {
      this.ideas.push(idea);
      // this.selectedIdea = null;
    });
  }

  ngOnInit(): void {
  }

  // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
  goBack(): void {
    this.location.back();
  }
}
