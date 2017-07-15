import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService){}
  data = [];
  name = '';
  pr = 0;
  fs = 0;
  username = '';
  getTasks() {
    this._httpService.retrieveTasks(this.username)
    .then( data => { this.data = data, this.pr = data.public_repos, this.fs = data.followers, this.name = data.name })
    .catch( err => { this.data = err })
    this.username = '';
  }
}
