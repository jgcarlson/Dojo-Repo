import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ObsService } from './../obs.service';

@Component({
  selector: 'app-mafraq',
  templateUrl: './mafraq.component.html',
  styleUrls: ['./mafraq.component.css']
})
export class MafraqComponent implements OnInit {
  locations = [];

  constructor(private _httpService: HttpService, private _obsService: ObsService) {
    _obsService.map.subscribe(
      (data) => { this.locations = data; },
      (err) => { },
      () => { }
    )
  }

  getLocations() {
    this._obsService.getLocations(this.locations);
  }

  ngOnInit() {
  }
  weather = [];
  getWeather(loc) {
    console.log(this.locations)
    this._httpService.retrieveWeather(loc)
    .then( weather => { this.weather = weather, console.log('WEATHER WORKED'), console.log('weather', this.weather) })
    .catch( err => { console.log(err); })
  }
}
