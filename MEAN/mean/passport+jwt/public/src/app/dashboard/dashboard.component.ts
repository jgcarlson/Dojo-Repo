import { Component, OnInit } from '@angular/core';
import { User } from './../models/user';
import { Router } from '@angular/router';

import { UserService } from './../services/user.service';
import { RouterService } from './../services/router.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _userService:UserService, private router:Router, private _routerService:RouterService) { }

  ngOnInit() {
    // this.logged();
    this._routerService.authenticate()
    .then(data => {
      if (!data.success) {
        console.log('Must be logged in to view this page.')
      } else if (data.success) {
        console.log('User logged in.')
      } else {
        console.log('Blerg.')
      }
    })
    .catch(data => console.log('Authenticate-catch data:', data))
  }

  c:string = '';

  logout() {
    this._userService.logout()
    .then(data => console.log(data))

  }

  // logged() {
  //   this._userService.logged()
  //   .then(data => {
  //     if (data._id != 'error') {
  //       this.c = data._id;
  //     } else {
  //       this.c = '';
  //       this.router.navigateByUrl("/", { skipLocationChange: true });
  //     }})
  //   .catch(data => console.log('Logged-catch data:', data.b))
  // }

}
