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
  @Input() public name: string;
  @Output() addPlayer = new EventEmitter<Player>()
  @Input() public email: string;
  playerForm : FormGroup;
  

  constructor(private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.playerForm = this.buildPlayerForm();
  }

  add(form: FormGroup) {
    const name = this.playerForm.value.name;
    const email = this.playerForm.value.email;

      this._addPlayer(name, email);
      this.playerForm.reset();

      this.router.navigate(['/game']);

     console.log(name, email)
  }


  verifyAndPlay(event) {
    this.add(event)
  }


  private _addPlayer(name, email) {
    this.addPlayer.emit({
      name: name,
      email: email
    })
  }


  buildPlayerForm() {
    return this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }



  onSubmitButton() {
    this.router.navigate(['game'])
  }
}
