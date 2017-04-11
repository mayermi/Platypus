import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

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
      .catch(this.handleError);
  }

  post(urlAppend: String = '', params: String = '', body: any = '') {
    return this.http.post(this.getUrl() + urlAppend + params, body, this.jwt())
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
  }

  delete(urlAppend: String = '', params: String = '') {
    return this.http.delete(this.getUrl() + urlAppend + params, this.jwt())
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
  }

  get(urlAppend: String, params: String = '') {
    return this.http.get(this.getUrl() + urlAppend + params, this.jwt())
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
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
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
