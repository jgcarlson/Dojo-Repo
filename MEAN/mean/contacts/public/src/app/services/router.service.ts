import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { RouterService } from './user.service';

@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(public routerService:RouterService) {};

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.routerService.isLoggedIn()) {
      console.log("OnlyLoggedInUsers: Success");
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}
