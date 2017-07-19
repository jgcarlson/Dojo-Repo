import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';
import { FxService } from './fx.service';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    StatusComponent,
    PlayersComponent,
    Game1Component,
    Game2Component,
    Game3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
