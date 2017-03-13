import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../_models/index';
import { IdeaService } from '../_services/index';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'my-idea-detail',
  templateUrl: 'idea-detail.component.html',
  // styleUrls: [ 'idea-detail.component.css' ]
})
export class IdeaDetailComponent implements OnInit {
  idea: Idea;
  ideaParts = ['Awareness', 'Internalization', 'Twist, Defend and Persuade', 'Commitment'];
  phases = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];
  currentPhase = "Phase II";
  modificationActive = false;
  positionActive = false;

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.ideaService.getIdea(params['id']))
      // .switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
      .subscribe(idea => this.idea = idea);
  }

  activateModification(): void {
    this.modificationActive = true;
  }

  activatePosition(): void {
    this.positionActive = true;
  }

  save(): void {
    this.ideaService.update(this.idea)
      .then(() => this.goBack());
  this.modificationActive = false;
  this.positionActive = false;
  }
  // !!! Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.
  goBack(): void {
    this.location.back();
  }
  gotoAdd(): void {
    this.router.navigate(['/idea-add-contribution', this.idea.id]);
  }
  gotoEdit(): void {
    this.router.navigate(['/idea-edit', this.idea.id]);
  }
}
