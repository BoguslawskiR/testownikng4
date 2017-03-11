import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
    private _router: Router,
  ){
    
  }


  public logout(){
    window.localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

}


