import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../_models/index';
import { IdeaService } from '../_services/index';
@Component({
  moduleId: module.id,
  selector: 'my-idea-edit',
  templateUrl: 'idea-edit.component.html',
  styleUrls: [ 'idea-edit.component.css' ]
})
export class IdeaEditComponent implements OnInit {
  idea: Idea;
  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      // .switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
      .switchMap((params: Params) => this.ideaService.getIdea(params['id']))
      .subscribe(idea => this.idea = idea);
  }
  save(): void {
    this.ideaService.update(this.idea)
      .then(() => this.goBack());
  }
  // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
  goBack(): void {
    this.location.back();
  }
}
