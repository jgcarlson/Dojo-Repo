import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  variable = true;

  buttons = [
    {name: 'b0', status: true, text: 'ON'},
    {name: 'b1', status: true, text: 'ON'},
    {name: 'b2', status: true, text: 'ON'},
    {name: 'b3', status: true, text: 'ON'},
    {name: 'b4', status: true, text: 'ON'},
    {name: 'b5', status: true, text: 'ON'},
    {name: 'b6', status: true, text: 'ON'},
    {name: 'b7', status: true, text: 'ON'},
    {name: 'b8', status: true, text: 'ON'},
    {name: 'b9', status: true, text: 'ON'}
  ];
  sel(query) {
    return this.buttons.filter(b => b.name == query)[0]
  }
  switch(thing) {
    let obj = this.sel(thing);
    if (obj.status == true) {
      obj.text = 'OFF';
      return obj.status = false;
    } else {
      obj.text = 'ON'
      return obj.status = true;
    }
  }
}
