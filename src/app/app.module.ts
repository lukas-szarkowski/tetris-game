import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HotkeyModule} from 'angular2-hotkeys'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { Routes, RouterModule } from '@angular/router';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayersListComponent } from './players-list/players-list.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


const appRoutes: Routes = [
  { path: '', component: IntroComponentComponent },
  { path: 'game', component: GameComponentComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    IntroComponentComponent,
    GameComponentComponent,
    PlayerFormComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    TetrisCoreModule,
    HotkeyModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
