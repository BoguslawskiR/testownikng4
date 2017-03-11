import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrentUserService {

    public apiURL = 'https://testownikpwr.herokuapp.com/api/';

    constructor(
        private _http: Http
    ) { }


    public getUser(){
        const url = this.apiURL+'users/me/';
        let headers: Headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + window.localStorage.getItem('token')
     });
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options).map(user => user.json());
    }



}