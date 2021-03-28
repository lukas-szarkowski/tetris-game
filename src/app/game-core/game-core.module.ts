import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntroComponent} from "./intro/intro.component";
import {MaterialModule} from "../material/material.module";
import {PlayerFormComponent} from "./player-form/player-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";





@NgModule({
  declarations: [IntroComponent, PlayerFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [IntroComponent, PlayerFormComponent]
})
export class GameCoreModule { }
