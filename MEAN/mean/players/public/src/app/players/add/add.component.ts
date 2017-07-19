import { Component, OnInit } from '@angular/core';
import { FxService } from './../../fx.service';
import { Player } from './../../player';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _fxService:FxService) { }

  ngOnInit() {
  }

  player = new Player();

  addplayer() {
    this._fxService.add(this.player);
    this.player = new Player();
  }

}
