import { Component, OnInit } from '@angular/core';
import { Player } from '../app.component';
import {PlayerService} from "../services/player.service";

@Component({
  selector: 'app-intro-component',
  templateUrl: './intro-component.component.html',
  styleUrls: ['./intro-component.component.css']
})
export class IntroComponentComponent implements OnInit {

  constructor(private playerService : PlayerService) {
  }

  ngOnInit(): void {
  }

  public onFormSubmit(pData) {
    this.playerService.playerData = pData;
  }
}
