import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Idea }           from '../_models/index';
@Injectable()
export class IdeaSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Idea[]> {
    return this.http
               .get(`app/ideas/?name=${term}`)
               .map((r: Response) => r.json().data as Idea[]);
  }
}
