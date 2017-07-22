import { Component, OnInit } from '@angular/core';
import { FxService } from './../fx.service';
import { User } from './../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _fxService:FxService, private router:Router) { }

  ngOnInit() {
    this.logged();
  }

  c:string = '';

  logout() {
    this._fxService.logout()
    .then(data => console.log(data))
    .catch(data => console.log('Logout-catch data:', data))
  }

  logged() {
    this._fxService.logged()
    .then(data => {
      if (data._id != 'error') {
        this.c = data._id;
      } else {
        this.c = '';
        this.router.navigateByUrl("/", { skipLocationChange: true });
      }})
    .catch(data => console.log('Logged-catch data:', data.b))
  }

}
