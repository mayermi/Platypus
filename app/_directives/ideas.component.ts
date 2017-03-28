import { Component, OnInit } from '@angular/core';
import { Idea } from '../_models/index';
import { IdeaService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-ideas',
  templateUrl: 'ideas.component.html',
  // styleUrls: [ 'ideas.component.css' ]
})

export class IdeasComponent implements OnInit {
  ideas: Idea[];
  selectedIdea: Idea;

  constructor(
    private router: Router,
    private ideaService: IdeaService) { }

  // add(title: string): void {
  //   title = title.trim();
  //   if (!title) { return; }
  //   this.ideaService.create(title).then(idea => {
  //     this.ideas.push(idea);
  //     // this.selectedIdea = null;
  //   });
  // }

  delete(idea: Idea): void {
    this.ideaService.delete(idea._id).then(() => {
     this.ideas = this.ideas.filter(h => h !== idea);
     // if (this.selectedIdea === idea) {
     //  this.selectedIdea = null;
     //  }
     });
  }

  getIdeas(): void {
    this.ideaService.getIdeas().then(ideas => this.ideas = ideas);
  }

  ngOnInit(): void {
    this.getIdeas();
  }

  // onSelect(idea: Idea): void {
  //   this.selectedIdea = idea;
  // }

  gotoDetail(idea: Idea): void {
    this.router.navigate(['/detail', idea._id]);
  }
}
