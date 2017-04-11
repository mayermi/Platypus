import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { User } from '../_models/index';
import {APIService} from './index';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private user: User;
  constructor(private service: APIService) {}

  login(email: string, pw: string) {
      return this.service.post('/login', '', {email: email, pw: pw })
          .then((response: Response) => {
              let responseJson = response.json().response;

              this.startSession(responseJson.user, responseJson.token);
              return responseJson;
            }
          ).catch((e: any) => {
              this.deleteSession();
              return e;
          });
  }

    logout() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if(!!user) {
            this.user = user;
            return this.service.post('/logout', '', {email: this.user.email})
                .then((response: Response) => {
                    let responseJson = response.json().response;

                    console.log(responseJson);

                    this.deleteSession();
                    return responseJson;
                })
                .catch((e) => {
                    return e;
                });
        }
    }

    private startSession(user: User, token: String) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.sessionStorage.token = token;
    }

    private deleteSession() {
        localStorage.removeItem('currentUser');
        delete window.sessionStorage.token;
    }
}
