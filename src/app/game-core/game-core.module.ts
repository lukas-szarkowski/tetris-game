import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameComponent} from "./game/game.component";
import {IntroComponent} from "./intro/intro.component";
import {PlayerFormComponent} from "./player-form/player-form.component";
import {AppRoutingModule} from "../app-routing.module";
import {MaterialModule} from "../material/material.module";
import {TetrisCoreModule} from "ngx-tetris";
import {ScoreListDialogComponent} from "../dialogs/score-list-dialog/score-list-dialog.component";

@NgModule({
  declarations: [PlayerFormComponent, GameComponent, IntroComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    TetrisCoreModule
  ],
  entryComponents: [ScoreListDialogComponent],
  exports: [
    GameComponent,
    IntroComponent
  ]
})
export class GameCoreModule { }
