import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CurrentUserService } from '../../services/current-user.service';
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'test',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginComponent {
    private password = '';
    private login = '';
    private email = '';
    private email2 = '';
    private register = false;
    private progress = false;
    constructor(
        private _ls: LoginService,
        private _router: Router,
        private _cus: CurrentUserService
    ){ 
        if(window.localStorage.getItem('token')){
            this._router.navigate(['user','tests'])
        }
    }

    logIn(){
        this.progress=true;
        this._ls.login(this.login, this.password).subscribe(res => {
            window.localStorage.setItem('token', res.token);
            this.progress=false;
            this._router.navigate(['user','tests']);
        }, e=>{
            console.log(e)
            this.progress=false;
        });
    }

    registerUser(){
        this.progress=true;
        this._ls.register(this.login, this.password, this.email).subscribe(res=>{
            console.log(res);
            window.localStorage.setItem('token', res.token);
            this.progress=false;
            this._router.navigate(['user','tests']);
        }, e=>console.log(e));
    }

}