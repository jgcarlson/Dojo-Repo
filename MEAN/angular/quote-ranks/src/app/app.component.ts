import { Component } from '@angular/core';

import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';
  quotes = [];
  addQuote(quote) {
    this.quotes.push(quote);
  }
}
