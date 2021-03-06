import { Component, OnInit } from '@angular/core';

import { Idea } from '../../_models/index';
import { IdeaService } from '../../_services/index';

const containsTerm = (haystack: string, needle: string) =>
  haystack && haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;

@Component({
  moduleId: module.id,
  styleUrls: ['ideas.component.css'],
  templateUrl: 'ideas.component.html'
})
export class IdeasComponent implements OnInit {
  filteredIdeas: Idea[];
  ideas: Idea[];
  query: string;

  constructor(private ideaService: IdeaService) {}

  search(): void {
    console.log('searching with query', this.query.trim());

    if (this.query.trim() === '') {
      this.filteredIdeas = this.ideas;
    } else {
      const queries = this.query.replace(/\s+/g, ' ').split(' ');

      this.filteredIdeas = this.ideas.filter((idea: Idea) =>
        queries.map((term: string) =>
          containsTerm(idea.title, term) ||
          containsTerm(idea.description, term) ||
          containsTerm(idea.location, term) ||
          containsTerm(idea.reasoning, term)
        ).reduce((accumulator: boolean, wasTermFound: boolean): boolean =>
          accumulator && wasTermFound
        , true)
      );
    }
  }

  ngOnInit(): void {
    this.ideaService.getIdeas().then((ideas: Idea[]) => {
      this.ideas = this.filteredIdeas = ideas.reverse();
    });
  }
}
