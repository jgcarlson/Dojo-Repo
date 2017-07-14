import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() quotes;

  constructor() { }

  ngOnInit() {
  }

  inc(i) {
    this.quotes[i].upvotes += 1;
  }

  dec(i) {
    this.quotes[i].downvotes -= 1;
  }

  delete(i) {
    this.quotes.splice(i, 1);
  }

}
