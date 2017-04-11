import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import {User} from "../_models/user";

@Injectable()
export class APIService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers});
  private url_local = 'http://localhost:3100/app';
  private url = 'https://cityidea.herokuapp.com/app';
  constructor(private http: Http) { }


  getUrl() {return this.url;}

  put(urlAppend: String = '', params: String = '', body: any = '') {
    return this.http.put(this.getUrl() + urlAppend + params, body, this.jwt())
      .toPromise()
      .then(res => res.json().response)
        .catch( (e:any) => this.handleError(e));
  }

  post(urlAppend: String = '', params: String = '', body: any = '') {
    return this.http.post(this.getUrl() + urlAppend + params, body, this.jwt())
      .toPromise()
      .then(res => res.json().response)
        .catch( (e:any) => this.handleError(e));
  }

  delete(urlAppend: String = '', params: String = '') {
    return this.http.delete(this.getUrl() + urlAppend + params, this.jwt())
      .toPromise()
      .then(res => res.json().response)
        .catch( (e:any) => this.handleError(e));
  }

  get(urlAppend: String, params: String = '') {
    return this.http.get(this.getUrl() + urlAppend + params, this.jwt())
      .toPromise()
      .then(res => res.json().response)
      .catch( (e:any) => this.handleError(e));
  }

  private jwt() {
    if (window.sessionStorage.token) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.set('Authorization', 'Bearer ' + window.sessionStorage.token);
      return new RequestOptions({ headers: headers });
    } else {
      return this.options;
    }
  }

  private handleError(error: any): Promise<any> {
    if(error.status === 401) {
      this.deleteSession();
    }
    return Promise.reject(error.message || error);
  }

  startSession(user: User, token: String) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.sessionStorage.token = token;
  }

  deleteSession() {
    localStorage.removeItem('currentUser');
    delete window.sessionStorage.token;
  }
}
