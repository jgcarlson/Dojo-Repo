import { Component, OnInit } from '@angular/core';
import { FxService } from './../../fx.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _fxService:FxService) { }

  ngOnInit() {
    this.getList();
  }

  players = [];

  getList() {
    this._fxService.retrieve()
    .then( data => this.players = data);
  }

  delete(uid) {
    this._fxService.del({id: uid});
    this.getList();
  }

}
