import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FxService } from './fx.service';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DateTimePickerModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DateTimePickerModule

  ],
  providers: [
    FxService,
    Angular2TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
