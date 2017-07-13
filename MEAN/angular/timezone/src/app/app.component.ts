import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  time = '';
  tellTime(timezone) {
    let d = new Date();
    if (timezone == 'pst') {
      this.time = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes();
    } else if (timezone == 'mst'){
      this.time = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' - ' + (d.getHours() + 1) + ':' + d.getMinutes();
    } else if (timezone == 'cst') {
      this.time = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' - ' + (d.getHours() + 2) + ':' + d.getMinutes();
    } else if (timezone == 'est') {
      this.time = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' - ' + (d.getHours() + 3) + ':' + d.getMinutes();
    } else {
      this.time = '';
    }
    return this.time;
  }
}
