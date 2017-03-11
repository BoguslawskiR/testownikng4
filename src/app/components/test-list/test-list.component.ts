import {Component, OnInit} from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { Router } from '@angular/router'
import { CurrentUserService } from '../../services/current-user.service';
@Component({
  selector: 'test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

    private testList

    constructor(
      private _ts: TestsService,
      private _router: Router,
      private _cus: CurrentUserService
    ){
      this._cus.getUser().subscribe(x=>console.log(x))

    }

    ngOnInit(){
      this._ts.getAllTests().subscribe(t =>{ 
        this.testList = t;
        console.log(this.testList)
      })
    }

    navigate(id, path){
      this._router.navigate(['/tests', id, path])
    }

}
