import { Injectable } from '@angular/core';

import { APIService } from './index';
import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
  constructor(private apiService: APIService) {}

  isLoggedIn() {
    return !!window.sessionStorage.token;
  }

  login(username: string, password: string): Promise<User> {
    return this.apiService.post('/login', {
      username,
      password
    }).then((response: any) => {
      this.startSession(response.token);

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
      this.startSession(response.token);

      return response;
    });
  }

  startSession(token: String) {
    window.sessionStorage.token = token;
  }

  endSession() {
    delete window.sessionStorage.token;
  }
}
