import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material/material.module";
import {GameCoreModule} from "./game-core/game-core.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    GameCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
