import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

     public apiURL = 'https://testownikpwr.herokuapp.com/api/';

    constructor(
        private _http: Http
    ) {}

 public login(login: string, password: string) {

     var body = {
    "username": `${login}`,
    "password": `${password}`
}
     const url = this.apiURL+'users/login/';
        let headers: Headers = new Headers({ 
            'Content-Type': 'application/json',
     });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options).map(res => res.json());
}

 public register(login: string, password: string, email: string) {

     var body = {
    "username": `${login}`,
    "password": `${password}`,
    "email": `${email}`
}
     const url = this.apiURL+'users/register/';
        let headers: Headers = new Headers({ 
            'Content-Type': 'application/json',
     });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options).map(res => res.json());
}
}