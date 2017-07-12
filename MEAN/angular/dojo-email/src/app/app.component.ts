import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails:any[] = [{
    email: 'bob@bob.com',
    importance: true,
    subject: 'Super Important Message',
    content: 'Actually I don\'t have anything to say.'
  },
  {
    email: 'BILL@PERSON.COM',
    importance: true,
    subject: 'Sort of Important Message',
    content: 'Nope.'
  },
  {
    email: 'steve@PERSON.com',
    importance: false,
    subject: 'I\'m a little tea pot',
    content: 'Four score and seven years ago...'
  },
  {
    email: 'tim@timmy.com',
    importance: false,
    subject: 'Blablabla',
    content: 'alsdkjf;lajsd;lfja;lsjdf;laj s;lfja s;ldfja ;lsdjf;l ajsd;lfj a;lksdjf ;lajsdf'
  },
  {
    email: 'bob@bob.com',
    importance: false,
    subject: 'Me again',
    content: 'I\'m running out of things to say.'
  }]
}
