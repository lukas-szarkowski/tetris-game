import {Component, OnInit, ViewChild} from '@angular/core';
import { Player } from '../../app.component';
import {PlayerFormComponent} from "../player-form/player-form.component";

@Component({
  selector: 'app-intro-component',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @ViewChild('playerForm') playerForm : PlayerFormComponent

  constructor() {
  }

  ngOnInit(): void {
  }
}
