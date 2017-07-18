import { Component, OnInit } from '@angular/core';
import { Post } from './post'
import { FxService } from './fx.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';

  ngOnInit() {
    this.getComments();
  }

  constructor(private _fxService:FxService){}

  post = new Post();

  posts:Array<any> = [];

  addComment() {
    console.log('In addComment:', this.post)
    this._fxService.add(this.post)
    this.post = new Post()
    this.getComments();
  }

  getComments() {
    console.log('In addComment: before')
    this._fxService.retrieve()
    .then( (data) => this.posts = data )
  }

}
