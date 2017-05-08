﻿import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { APIService } from './index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  // //private usersUrl = 'https://cityidea.herokuapp.com/app/api/user';
  // private usersUrl = 'http://localhost:3100/app/api/user';

  constructor(private apiService: APIService) {
  }

  getCreators(): Promise<User[]> {
    return this.apiService.get('/api/user')
      .then((response: any) => response.slice(0, 3) as User[]);
  }

  getContributors(): Promise<User[]> {
    return this.apiService.get('/api/user')
      .then((response: any) => response.slice(1, 4) as User[]);
  }

  getUsers(): Promise<User[]> {
    return this.apiService.get('/api/user')
      .then((response: any) => response as User[]);
  }

  // getById(id: number) {
  //     return this.http.get('/api/user/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  create(user: User) {
    return this.apiService.put('/api/user/new', {})
      .then((response: any) => response);
  }

  // create(user: User) {
  //     return this.http.post('/api/user', user, this.jwt()).map((response: Response) => response.json());
  // }

  // update(user: User) {
  //     return this.http.put('/api/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  // }

  // delete(id: number) {
  //     return this.http.delete('/api/user/' + id + '/delete', this.jwt()).map((response: Response) => response.json());
  // }

  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }

  //  private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  // private helper methods

  // private jwt() {
  //     // create authorization header with jwt token
  //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //     if (currentUser && currentUser.token) {
  //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
  //         return new RequestOptions({ headers: headers });
  //     }
  // }
}
