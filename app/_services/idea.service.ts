import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { APIService } from './index';
import { Idea } from '../_models/index';

@Injectable()
export class IdeaService {
  constructor(private apiService: APIService) {
  }

  getIdeas(): Promise<Idea[]> {
    return this.apiService.get('/api/idea')
      .then((response: any) => response as Idea[]);
  }

  getIdea(id: String): Promise<Idea> {
    return this.apiService.get(`/api/idea/?_id=${id}`)
      .then((response: any) => response[0] as Idea);
  }

  getTopIdeas(): Promise<Idea[]> {
    return this.apiService.get('/api/idea')
      .then((response: any) => response.slice(0, 3) as Idea[]);
  }

  delete(id: String): Promise<any> {
    return this.apiService.delete(`/api/idea/${id}`)
      .then(() => null);
  }

  create(title: String): Promise<Idea> {
    return this.apiService.put('/api/idea/new', { title })
      .then((response: any) => response);
  }

  update(idea: Idea): Promise<Idea> {
    return this.apiService.put(`/api/idea/${idea._id}`, idea)
      .then(() => idea);
  }


  addModification(idea: Idea, modification: String): Promise<Idea> {
    return this.apiService.put('/api/modification/new', {
      content: modification,
      idea: idea._id,
      phases: [idea.phase]
    }).then(() => idea);
  }
}
