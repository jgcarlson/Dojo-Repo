import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveWeather(loc) {
    console.log('http1')
    console.log('http', loc);
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?' + loc + '&units=imperial&appid=9b1ab16e03adedd1d6727ba7e65aa118').map(data=>data.json()).toPromise();
  }
}
