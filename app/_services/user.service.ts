import { Injectable } from '@angular/core';

import { APIService } from './index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
  constructor(private apiService: APIService) {}

  getCreators(): Promise<User[]> {
    return this.apiService.get('/users')
      .then((response: any) => response.slice(0, 3) as User[]);
  }

  getContributors(): Promise<User[]> {
    return this.apiService.get('/users')
      .then((response: any) => response.slice(1, 4) as User[]);
  }

  getUsers(): Promise<User[]> {
    return this.apiService.get('/users')
      .then((response: any) => response as User[]);
  }

  // update(user: User) {
  //     return this.http.put('/api/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  // }

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
