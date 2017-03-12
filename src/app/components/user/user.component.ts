import { Component, OnInit, ViewChild } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    constructor(
        private _router: Router
    ){}


    public logout(){
    window.localStorage.removeItem('token');
    this._router.navigate(['login']);
  }


}