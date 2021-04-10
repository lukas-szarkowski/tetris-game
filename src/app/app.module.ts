import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HotkeyModule} from 'angular2-hotkeys'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { IntroComponent } from './game-core/intro/intro.component';
import { GameComponent } from './game-core/game/game.component';
import { Routes, RouterModule } from '@angular/router';
import { PlayerFormComponent } from './game-core/player-form/player-form.component';
import {GameCoreModule} from "./game-core/game-core.module";
import {MaterialModule} from "./material/material.module";
import {AppRoutingModule} from "./app-routing.module";
import { ScoreListDialogComponent } from './dialogs/score-list-dialog/score-list-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GameService} from "./services/game.service";
import {HttpClientModule} from "@angular/common/http";
import { ControlInstructionsDialogComponent } from './dialogs/control-instructions-dialog/control-instructions-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ScoreListDialogComponent,
    ControlInstructionsDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameCoreModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    HotkeyModule.forRoot()
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
