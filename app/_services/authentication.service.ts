import { Injectable } from '@angular/core';
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
          .then((responseJson: any) => {
              this.service.startSession(responseJson.user, responseJson.token);
              return responseJson;
            }
          ).catch((e: any) => {
              this.service.deleteSession();
              return e;
          });
  }

    logout() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if(!!user) {
            this.user = user;
            return this.service.post('/logout', '', {email: this.user.email})
                .then((responseJson: any) => {
                    this.service.deleteSession();
                    return responseJson;
                })
                .catch((e: any) => {
                    return e;
                });
        } else {
            return;
        }
    }
}
