import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Http } from '@angular/http';

@Injectable()

export class RouterService {

  constructor(private _http:Http) {};

  isLoggedIn(): boolean {
    return false; // Switch to `false` to make OnlyLoggedInUsersGuard work
  }

  authenticate() {
    console.log('Auth service.')
    return this._http.get('/api/authenticate')
    .map( data => data.json() )
    .toPromise();
  }
}
