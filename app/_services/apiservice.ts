import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../_models/user';

@Injectable()
export class APIService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  private options = new RequestOptions({
    headers: this.headers
  });

  // local: 'http://localhost:3000/app';
  private url = 'https://cityidea.herokuapp.com/app';

  constructor(private http: Http) { }

  delete(url: String): Promise<any> {
    return this.http.delete(`${this.url}${url}`, this.jwt())
      .toPromise()
      .then((response: any) => response.json().response)
      .catch((error: any) => this.handleError(error));
  }

  get(url: String): Promise<any> {
    return this.http.get(`${this.url}${url}`, this.jwt())
      .toPromise()
      .then((response: any) => response.json().response)
      .catch((error: any) => this.handleError(error));
  }

  post(url: String, body: any = ''): Promise<any> {
    return this.http.post(`${this.url}${url}`, body, this.jwt())
      .toPromise()
      .then((response: any) => response.json().response)
      .catch((error: any) => this.handleError(error));
  }

  put(url: String, body: any = ''): Promise<any> {
    return this.http.put(`${this.url}${url}`, body, this.jwt())
      .toPromise()
      .then((response: any) => response.json().response)
      .catch((error: any) => this.handleError(error));
  }

  private jwt() {
    if (window.sessionStorage.token) {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      headers.append('Authorization', window.sessionStorage.token);
      // return {headers: headers};
      return new RequestOptions({headers: headers});
    } else {
      return this.options;
    }
  }

  private handleError(error: any): Promise<any> {
    if (error.status === 401) {
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
