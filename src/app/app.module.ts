import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HotkeyModule} from 'angular2-hotkeys'

import { AppComponent } from './app.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { GameComponentComponent } from './game-component/game-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponentComponent,
    GameComponentComponent
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
