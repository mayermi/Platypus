import { Injectable } from '@angular/core';

import { APIService } from './index';
import { Addition, Idea, Modification } from '../_models/index';

@Injectable()
export class ModificationService {
  constructor(private apiService: APIService) {}

  getModificationsByIdea(idea: Idea): Promise<Modification[]> {
    console.log({ idea });

    return this.apiService.get(`/api/modification?idea=${idea.id}`)
      .then(response => {
        const modifications = response as Modification[];

        // TODO have this be done by the server
        return modifications.map((modification: Modification) => {
          modification.dislikes = Math.floor(Math.random() * 10);
          modification.likes = Math.floor(Math.random() * 10);

          return modification;
        });
      });
  }

  saveAddition(modification: Modification, addition: string): Promise<Modification> {
    return this.apiService.put('/api/addition/new', {
      content: addition,
      modification: modification.id
    }).then((response) => {
      const addition = response.addition as Addition;

      addition.dislikes = Math.floor(Math.random() * 10);
      addition.likes = Math.floor(Math.random() * 10);

      modification.additions.push(addition);

      return modification;
    });
  }
}
