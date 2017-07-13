import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttons = [
    {b0: true},
    {b1: true},
    {b2: true},
    {b3: true},
    {b4: true},
    {b5: true},
    {b6: true},
    {b7: true},
    {b8: true},
    {b9: true}
  ];
  switch(thing) {
    if (thing == true) {
      thing = false;
    } else {
      thing = true;
    }
  }
}
