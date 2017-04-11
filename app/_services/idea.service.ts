import { Injectable }    from '@angular/core';
import {APIService} from './index';
import 'rxjs/add/operator/toPromise';
import { Idea } from '../_models/index';

@Injectable()
export class IdeaService {

  constructor(private service: APIService) {}

  getIdeas(): Promise<Idea[]> {
    return this.service.get('/api/idea')
      .then(response => response as Idea[])
  }

  getIdea(id: String): Promise<Idea> {
    return this.service.get('/api/idea/'+ id)
      .then(response => response[0] as Idea)
  }

  delete(id: String): Promise<any> {
    return this.service.delete('/api/idea/'+ id)
      .then(() => null)
  }

  create(title: String): Promise<Idea> {
    return this.service.put('/api/idea/new','', {title: title})
      .then(res => res)
  }

  update(idea: Idea): Promise<Idea> {
    return this.service.put('/api/idea/'+ idea._id, '', idea)
      .then(() => idea)
  }


  addModification(idea: Idea, modification: String): Promise<Idea> {
    return this.service.put('/api/modification/new','', {content:modification,phases:[idea.phase],idea:idea._id})
      .then(() => idea)
  }


}
