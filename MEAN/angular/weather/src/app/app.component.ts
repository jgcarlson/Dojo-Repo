import { Component } from '@angular/core';
import { HttpService } from './http.service';
import {Routes, RouterModule} from "@angular/router";
import { ObsService } from './obs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _httpService: HttpService, private _obsService: ObsService){
    _obsService.getLocations(this.locations);
  }
  title = 'WeatherApp';
  locations = {
    pasadena: 'id=5381396',
    belfast: 'id=2655984',
    kolkata: 'id=1275004',
    phoenix: 'id=5308655',
    mafraq: 'id=250582',
    santa_barbara: 'id=5392952',
    query: 'q=' + null
  }
  weather = [];
  getWeather(loc) {
    console.log(this.locations.belfast)
    this._httpService.retrieveWeather(loc)
    .then( weather => { this.weather = weather, console.log('WEATHER WORKED') })
    .catch( err => { console.log(err); })
  }
}
