import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this._route.url.subscribe(x=>console.log(x));
  }


  public logout(){
    window.localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

}


