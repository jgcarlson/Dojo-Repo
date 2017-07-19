import { Component, OnInit } from '@angular/core';
import { FxService } from './../../fx.service';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

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
    this._fxService.playing({id: uid, game: 'game2', index: 1});
    this.getList();
  }

  n(uid) {
    console.log('uid', uid)
    this._fxService.notplaying({id: uid, game: 'game2', index: 1});
    this.getList();
  }

  u(uid) {
    console.log('uid', uid)
    this._fxService.undecided({id: uid, game: 'game2', index: 1});
    this.getList();
  }

}
