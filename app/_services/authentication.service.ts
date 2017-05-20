import { Injectable } from '@angular/core';

import { APIService } from './index';
import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
  constructor(private apiService: APIService) {}

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  isLoggedIn() {
    return !!window.sessionStorage.token;
  }

  login(username: string, password: string): Promise<User> {
    return this.apiService.post('/login', {
      username,
      password
    }).then((response: any) => {
      this.startSession(response);

      return response;
    }).catch((error: any) => {
      this.endSession();

      return error;
    });
  }

  logout(): Promise<User> {
    if (this.isLoggedIn()) {
      return this.apiService.get('/logout')
        .then((response: any) => {
          this.endSession();

          return response;
      }).catch((error: any) => {
        return error;
      });
    }
  }

  signup(username: string, password: string): Promise<User> {
    return this.apiService.post('/signup', {
      username,
      password
    }).then((response: any) => {
      this.startSession(response);

      return response;
    });
  }

  startSession(user: User) {
    window.sessionStorage.token = user.token;

    const userCopy = Object.assign({}, user);
    delete userCopy.token;
    localStorage.setItem('user', JSON.stringify(userCopy));
  }

  endSession() {
    delete window.sessionStorage.token;

    localStorage.removeItem('user');
  }
}
