﻿import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../_models/index';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  //private usersUrl = 'https://cityidea.herokuapp.com/app/api/user';
  private usersUrl = 'http://localhost:3100/app/api/user';

  constructor(private http: Http) { }
  getUsers(): Promise<User[]> {
      return this.http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json().response as User[])
               .catch(this.handleError);
  }

    getById(id: number) {
        return this.http.get('/api/user/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/user', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/user/' + id + '/delete', this.jwt()).map((response: Response) => response.json());
    }

    isLoggedIn() {
      return !!localStorage.getItem('currentUser');
    }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
