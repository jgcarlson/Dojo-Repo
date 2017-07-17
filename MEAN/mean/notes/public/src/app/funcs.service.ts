import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class FuncsService {

  constructor(private _http: Http) { }

  savePost(content) {
    console.log('hello')
    return this._http.post('/', content)
    .map( data => data.json() )
    .toPromise();
  }

  retrieve() {
    return this._http.get('/')
    .map( data => data.json() )
    .toPromise();
  }

}
