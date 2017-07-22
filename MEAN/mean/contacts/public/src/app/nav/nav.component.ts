import { Component, OnInit } from '@angular/core';
import { FxService } from './../services/fx.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _fxService:FxService) { }

  ngOnInit() {
  }

  logout() {
    this._fxService.logout()
    .then(data => console.log(data))
    .catch(data => console.log('Logout-catch data:', data))
  }

}
