import { Component } from '@angular/core';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closed = true;
  user = new User();
  users = [new User()];
  register() {
    this.users.push(this.user);
    this.user = new User();
    this.closed = false;
  }
}
