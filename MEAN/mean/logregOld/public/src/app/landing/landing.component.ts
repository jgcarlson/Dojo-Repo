import { Component, OnInit } from '@angular/core';
import { FxService } from './../fx.service';
import { User } from './../user';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _fxService:FxService, private router:Router, public authService:AuthService) { }

  ngOnInit() {
    this.logCheck();
    this.read();
  }

  c:string = '';

  users:any = [];

  user:any = new User;

  quser = {
    username: '',
    password: ''
  }

  registerUser() {
    this._fxService.register(this.user)
    .then(data => {
      if (data._id != 'error') {
        this.c = data._id;
        this.router.navigateByUrl("/dashboard", { skipLocationChange: true });
      } else {
        console.log('Logged did not work.')
      }
  })
    .catch(data => console.log('Registerreg-catch data:', data))
    this.user = new User;
  };

  login() {
    this.authService.logInUser(this.quser).subscribe(
        res => {
          if(res.status == 200){
            this.onFormResult.emit({signedIn: true, res});
          }
        },
        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }
    );
    // this._fxService.login(this.quser)
    // .then(data => {
    //   if (data._id != 'error') {
    //     this.c = data._id;
    //     this.router.navigateByUrl("/dashboard", { skipLocationChange: true });
    //   } else {
    //     console.log('Logged did not work.')
    //   }
    // })
    // .catch(data => console.log('Login-catch data:', data))
    // this.quser = { username: '', password: '' };
  };

  read() {
    this._fxService.read()
    .then(data => this.users = data)
    .catch(data => console.log('Register-catch data:', data));
  };

  logged() {
    this._fxService.logged()
    .then(data => {console.log('Bool:', data.b)
      return data.b
    })
    .catch(data => console.log('Logged-catch data:', data.b))
  }

  logCheck() {
    this._fxService.logged()
    .then(data => {
      if (data._id !== 'error' && data._id !== undefined) {
        console.log('Data ID', data._id)
        this.c = data._id;
        this.router.navigateByUrl("/dashboard", { skipLocationChange: true });
      }})
    .catch(data => console.log('Logged-catch data:', data.b))
  }


}
