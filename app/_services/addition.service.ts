import { Injectable } from '@angular/core';

import { APIService } from './index';
import { Addition, Modification } from '../_models/index';

@Injectable()
export class AdditionService {
  constructor(private apiService: APIService) {}

  getAdditionsByModification(modification: Modification): Promise<Addition[]> {
    return this.apiService.get(`/api/addition?modification=${modification.id}`)
      .then(response => {
        const additions = response as Addition[];

        // TODO have this be done by the server
        return additions.map((addition: Addition) => {
          addition.dislikes = Math.floor(Math.random() * 10);
          addition.likes = Math.floor(Math.random() * 10);

          return addition;
        });
      });
  }
}
