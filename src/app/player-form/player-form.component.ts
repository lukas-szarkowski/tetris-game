import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Player } from '../app.component';
import { FormGroup } from '@angular/forms';
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
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add(form: FormGroup) {
    const name = form.value.name;
    const email = form.value.email;

    if(this._validate(name, email)) {
      this._addPlayer(name, email);
      form.reset();
    }
  }

  private _validate(name, email): boolean {
    return name && email
  }


  private _addPlayer(name, email) {
    this.addPlayer.emit({
      name: name,
      email: email
    })
  }

  onSubmitButton() {
    this.router.navigate(['game'])
  }
}
