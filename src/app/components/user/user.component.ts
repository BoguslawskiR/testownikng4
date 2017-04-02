import { Component, OnInit, ViewChild } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { CurrentUserService } from '../../services/current-user.service';
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    private user;
    private time;
    private startTime

    constructor(
        private _router: Router,
        private _cus: CurrentUserService
    ){}

    ngOnInit(){
      this._cus.getUser().subscribe( cu => { 
        this.user = cu;
        console.log(this.user);
      })

    }


    public logout(){
    window.localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

  


}