import { Injectable } from '@angular/core';

import { APIService } from './index';
import { Idea, Modification } from '../_models/index';

@Injectable()
export class IdeaService {
  constructor(private apiService: APIService) {
  }

  getIdeas(): Promise<Idea[]> {
    return this.apiService.get('/ideas')
      .then((response: any) => response as Idea[]);
  }

  getIdea(id: String): Promise<Idea> {
    return this.apiService.get(`/ideas/${id}`)
      .then((response: any) => response as Idea);
  }

  getTopIdeas(): Promise<Idea[]> {
    return this.apiService.get('/ideas')
      .then((response: any) => response.slice(0, 3) as Idea[]);
  }

  delete(id: String): Promise<any> {
    return this.apiService.delete(`/ideas/${id}`)
      .then(() => null);
  }

  create(idea: Idea): Promise<Idea> {
    return this.apiService.post('/ideas', idea)
      .then((response: any) => response);
  }

  update(idea: Idea): Promise<Idea> {
    return this.apiService.put(`/ideas/${idea.id}`, idea)
      .then(() => idea);
  }


  addModification(idea: Idea, modification: String): Promise<Idea> {
    return this.apiService.put('/api/modification/new', {
      content: modification,
      idea: idea.id
    }).then((response) => {
      idea.modifications.push(response.modification);

      return idea;
    });
  }
}
