import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import {Routes, RouterModule} from "@angular/router";
import { ObsService } from './obs.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PasadenaComponent } from './pasadena/pasadena.component';
import { BelfastComponent } from './belfast/belfast.component';
import { MafraqComponent } from './mafraq/mafraq.component';
import { KolkataComponent } from './kolkata/kolkata.component';
import { SantaBarbaraComponent } from './santa-barbara/santa-barbara.component';

const routes:Routes = [
  { path: '', component: PasadenaComponent },
  { path: 'belfast', component: BelfastComponent },
  { path: 'mafraq', component: MafraqComponent },
  { path: 'kolkata', component: KolkataComponent },
  { path: 'santa_barbara', component: SantaBarbaraComponent },
  { path: 'home', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PasadenaComponent,
    BelfastComponent,
    MafraqComponent,
    KolkataComponent,
    SantaBarbaraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [HttpService,
    ObsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
