import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class FxService {

  constructor(private _http:Http) { }

  add(post) {
    console.log('add in service');
    return this._http.post('/api/posts', post)
    .map( data => data.json() )
    .toPromise()
  }

  retrieve() {
    return this._http.get('/api/posts')
    .map( data => data.json() )
    .toPromise()
  }

}
