import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Player } from '../../app.component';
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { Router } from '@angular/router';
import {GameService} from "../../services/game.service"


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup
  normalColors: boolean = true;


  constructor(
  private router: Router,
  private gameService: GameService,
  private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

onSubmitForm() {
    this.gameService.playerName = this.playerForm.value.playerName

    if(this.normalColors === true) {
      this.router.navigate(["/game", 'normal'])
    } else if(this.normalColors === false) {
      this.router.navigate(["/game", 'contrast'])
    }

}


private buildForm() {
    this.playerForm = this.formBuilder.group({
      playerName: ['', {validators: [Validators.required]}]
    })
}
}
