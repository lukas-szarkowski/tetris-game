import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HotkeyModule} from 'angular2-hotkeys'

import { AppComponent } from './app.component';
import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    HotkeyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
