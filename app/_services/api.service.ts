import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { User } from '../_models/user';

@Injectable()
export class APIService {
  // private url = 'http://localhost:8000';
  private url = 'https://platypus-api.herokuapp.com';

  constructor(private http: Http) {}

  handleRequest(request: Observable<any>): Promise<any> {
    return request
      .toPromise()
      .then((response: any) => response.json().data)
      .catch((error: any) => this.handleError(error));
  }

  delete(url: String): Promise<any> {
    return this.handleRequest(this.http.delete(`${this.url}${url}`, this.jwt()));
  }

  get(url: String): Promise<any> {
    return this.handleRequest(this.http.get(`${this.url}${url}`, this.jwt()));
  }

  post(url: String, body: any = ''): Promise<any> {
    return this.handleRequest(this.http.post(`${this.url}${url}`, body, this.jwt()));
  }

  put(url: String, body: any = ''): Promise<any> {
    return this.handleRequest(this.http.put(`${this.url}${url}`, body, this.jwt()));
  }

  private jwt() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    if (window.sessionStorage.token) {
      headers.append('Authorization', `Bearer ${window.sessionStorage.token}`);
    }

    return new RequestOptions({ headers });
  }

  private handleError(error: any): Promise<any> {
    if (error.status === 401) {
      console.log('I WAS going to delete your session, but I won’t just yet.');
      // this.deleteSession();
    }

    return Promise.reject(error.message || error);
  }
}
