import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class FxService {

  constructor(private _http:Http) { }

  add(data) {
    return this._http.post('/api/add', data)
    .map( data => data.json() )
    .toPromise();
  }

  retrieve() {
    return this._http.get('api/retrieve')
    .map( data => data.json() )
    .toPromise();
  }

  del(id) {
    return this._http.post('api/delete', id)
    .map( data => data.json() )
    .toPromise();
  }

  playing(id) {
    return this._http.post('api/playing', id)
    .map( data => data.json() )
    .toPromise();
  }

  notplaying(id) {
    return this._http.post('api/notplaying', id)
    .map( data => data.json() )
    .toPromise();
  }

  undecided(id) {
    return this._http.post('api/undecided', id)
    .map( data => data.json() )
    .toPromise();
  }

}
