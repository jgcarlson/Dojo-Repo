import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from './../quote';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() quotes;

  @Output() addQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  quote = new Quote();

  add() {
    console.log(this.quote)
    this.addQuote.emit(this.quote);
    // this.quotes.push(this.quote);
    this.quote = new Quote();
  }



}
