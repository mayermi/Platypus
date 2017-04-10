import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Idea }        from '../_models/index';
import { IdeaService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'arguments',
  templateUrl: 'arguments.component.html',
  // styleUrls: [ 'idea-detail.component.css' ]
})
export class ArgumetnsComponent implements OnInit {
  idea: Idea;
  addModificationVisible = false;
  argumentsIsVisible = false;

  constructor(
    private ideaService: IdeaService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {

//     this.ideaService.getIdeas().then(ideas => this.ideas = ideas);

//     this.route.params
//       .switchMap((params: Params) => this.ideaService.getIdea(params['_id']))
//       // .switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
//       .subscribe(idea => {
//         this.idea = idea;
//         this.currentPhase = this.phases[idea.phase];
//       });
  }
}
