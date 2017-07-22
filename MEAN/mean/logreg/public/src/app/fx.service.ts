import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class FxService {

  constructor(private _http:Http) { }

  register(user) {
    return this._http.post('/api/register', user)
    .map( data => data.json() )
    .toPromise();
  }

  login(quser) {
    return this._http.post('/api/login', quser)
    .map( data => data.json() )
    .toPromise();
  }

  read() {
    return this._http.get('/api/read')
    .map( data => data.json() )
    .toPromise();
  }

  logged() {
    return this._http.get('/api/logged')
    .map( data => data.json() )
    .toPromise();
  }

  logout() {
    return this._http.get('/api/logout')
    .map( data => data.json() )
    .toPromise();
  }

}
