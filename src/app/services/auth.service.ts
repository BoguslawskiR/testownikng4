import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';



@Injectable()
export class AuthService implements CanActivate {

    public apiURL = 'https://testownikpwr.herokuapp.com/api/';


    constructor(
        private _http: Http,
    ) {
     }

     public canActivate(){
         if(window.localStorage.getItem('token')){
             return true;
         }else{
             return false;
         }
     }

    



}