import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable()

export class UserService {

  constructor(private _http:Http) { }

  public user = new Subject<any>();

  sendUser(data:any) {
    this.user.next(data);
  }

  getUser(): Observable<any> {
    return this.user.asObservable();
  }

  clearUser() {
    this.user.next();
  }

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

  // read() {
  //   return this._http.get('/api/read')
  //   .map( data => data.json() )
  //   .toPromise();
  // }
  //
  // logged() {
  //   return this._http.get('/api/logged')
  //   .map( data => data.json() )
  //   .toPromise();
  // }

  logout() {
    return this._http.get('/api/logout')
    .map( data => data.json() )
    .toPromise();
  }

  add(q) {
    return this._http.post('/api/add', q)
    .map( data => data.json() )
    .toPromise();
  }

  retrieve() {
    return this._http.get('/api/retrieve')
    .map( data => data.json() )
    .toPromise();
  }

  retrieveOne(qId) {
    return this._http.post('/api/retrieveOne', qId)
    .map( data => data.json() )
    .toPromise();
  }

  answer(data) {
    return this._http.post('/api/answer', data)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveAnswers(data) {
    return this._http.post('/api/retrieveAnswers', data)
    .map( data => data.json() )
    .toPromise();
  }

}
