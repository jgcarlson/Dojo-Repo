import { Component } from '@angular/core';
import { FuncsService } from './funcs.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];
  constructor(private _funcsService:FuncsService) { }

  title = 'app';
  post:any = {
    post: '',
  }

  retrievePosts() {
    this.posts.push(this._funcsService.retrieve())
  }

  dothething() {
    this.post.createdAt = Date.now();
    this._funcsService.savePost(this.post);
  }

}
