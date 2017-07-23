import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {
    // this.logCheck();
    // this.read();
  }

  c:string = '';

  users:any = [];

  user:any = new User;

  closed = true;

  quser = {
    username: '',
    password: ''
  }

  logerrors:Array<any> = [];

  regerrors:Array<any> = [];

  registerUser() {
    this.regerrors = [];
    this._userService.register(this.user)
    .then(data => {
      if (data._id != 'error') {
        this._userService.user = data._id;
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Logged did not work.');
        this.regerrors.push('That username is already in use.');
        this.closed = false;
      }
  })
    .catch(data => console.log('Registerreg-catch data:', data))
    this.user = new User;
  };

  login() {
    this.logerrors = [];
    this._userService.login(this.quser)
    .then(data => {
      console.log(data)
      if (data.success) {
        this._userService.sendUser(data.user);
        this.router.navigate(['/dashboard']);
      }
    })
    .catch(data => console.log('Login-catch data:', data))
    this.quser = { username: '', password: '' };
  };

  // read() {
  //   this._userService.read()
  //   .then(data => this.users = data)
  //   .catch(data => console.log('Register-catch data:', data));
  // };

  // logged() {
  //   this._userService.logged()
  //   .then(data => {console.log('Bool:', data.b)
  //     return data.b
  //   })
  //   .catch(data => console.log('Logged-catch data:', data.b))
  // }

  // logCheck() {
  //   this._userService.logged()
  //   .then(data => {
  //     if (data._id !== 'error' && data._id !== undefined) {
  //       console.log('Data ID', data._id)
  //       this.c = data._id;
  //       this.router.navigateByUrl("/dashboard");
  //     }})
  //   .catch(data => console.log('Logged-catch data:', data.b))
  // }


}
