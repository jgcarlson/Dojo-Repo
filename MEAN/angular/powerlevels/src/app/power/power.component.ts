import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    for (var i = 1; i <= 100; i++) {
      this.arr.push(i);
    }
  }

  arr:Array<number> = [];

  plevel = 0;


}
