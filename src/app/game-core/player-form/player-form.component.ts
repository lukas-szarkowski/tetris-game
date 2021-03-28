import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Player } from '../../app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {
  playerForm : FormGroup;
  public player : Player;


  constructor(private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.buildPlayerForm();
  }

  buildPlayerForm() {
    this.playerForm = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      email: ['', {validators: [Validators.required, Validators.email]}]
    })
  }
}
