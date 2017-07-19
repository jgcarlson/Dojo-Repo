import { Component, OnInit } from '@angular/core';
import { FxService } from './../fx.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private _fxService:FxService) { }

  ngOnInit() {
    this.getList()
  }

  players = [];

  getList() {
    console.log(this.players)
    this._fxService.retrieve()
    .then( data => this.players = data);
  }

  p(uid) {
    console.log('uid', uid)
    this._fxService.playing({id: uid});
    this.getList();
  }

  n(uid) {
    console.log('uid', uid)
    this._fxService.notplaying({id: uid});
    this.getList();
  }

  u(uid) {
    console.log('uid', uid)
    this._fxService.undecided({id: uid});
    this.getList();
  }
}
