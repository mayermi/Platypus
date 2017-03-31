import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Idea } from '../_models/index';
@Injectable()
export class IdeaService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private ideasUrl = 'https://cityidea.herokuapp.com/app/api/idea';  // URL to web api

  constructor(private http: Http) { }
  getIdeas(): Promise<Idea[]> {
    return this.http.get(this.ideasUrl)
               .toPromise()
               .then(response => response.json().response as Idea[])
               .catch(this.handleError);
  }
  getIdea(id: String): Promise<Idea> {
    const url = `${this.ideasUrl}?_id=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().response[0] as Idea)
      .catch(this.handleError);
  }
  delete(id: String): Promise<void> {
    const url = `${this.ideasUrl}?_id=${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  // getIdea(id: number): Promise<Idea> {
  //   const url = `${this.ideasUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Idea)
  //     .catch(this.handleError);
  // }
  // delete(id: number): Promise<void> {
  //   const url = `${this.ideasUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }
  create(title: string): Promise<Idea> {
    return this.http
      .post(this.ideasUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
  }
  update(idea: Idea): Promise<Idea> {
    const url = `${this.ideasUrl}?_id=${idea._id}`;
    return this.http
      .put(url, JSON.stringify(idea), {headers: this.headers})
      .toPromise()
      .then(() => idea)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
