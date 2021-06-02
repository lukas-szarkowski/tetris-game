import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Player } from '../../app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {GameService} from "../../services/game.service"


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  @Input()  highContrastColors: boolean = false;
  @Output() changeColorPaletteToBW: EventEmitter<boolean> = new EventEmitter()
  @Output() backToNormalColors: EventEmitter<boolean> = new EventEmitter()

  playerName :string = "";
  constructor(
  private router: Router,
  private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

onSubmitForm() {
    this.gameService.playerName = this.playerName;
    this.router.navigate(["/game"])
}

changeColorsToBW() {
   this.highContrastColors = true;
   this.changeColorPaletteToBW.emit(this.highContrastColors)
}

changeColorsToNormal() {
    this.highContrastColors = false;
    this.backToNormalColors.emit(this.highContrastColors);
}
}
