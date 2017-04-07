import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/index';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    user: User;
    constructor(private http: Http) { }

    login(email: string, pw: string) {
        return this.http.post('https://cityidea.herokuapp.com/app/api/login', {email: email, pw: pw })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json().response;
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        );
    }

    logout() {
        if(!!JSON.parse(localStorage.getItem('currentUser'))) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.post('https://cityidea.herokuapp.com/app/api/logout', {email: this.user.email})
            .map((response: Response) => {
                localStorage.removeItem('currentUser');
            });
        }

    }
}