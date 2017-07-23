import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

  logout() {
    this._userService.logout()
    .then(data => console.log(data))
    .catch(data => console.log('Logout-catch data:', data))
  }

}
