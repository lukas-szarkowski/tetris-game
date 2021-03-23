import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Player } from '../app.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  @Output() submitPlayer = new EventEmitter<Player>()
  @Input() public name: string;
  @Output() addPlayer = new EventEmitter<Player>()
  @Input() public email: string;
  playerForm : FormGroup;
  public player : Player;


  constructor(private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.playerForm = this.buildPlayerForm();
  }


  buildPlayerForm() {
    return this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }



  onSubmitButton() {
    this.submitPlayer.emit(this.playerForm.value);
    this.router.navigate(['game'])
    console.log(this.playerForm.value)
  }
}
