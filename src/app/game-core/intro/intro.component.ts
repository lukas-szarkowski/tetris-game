import { Component, OnInit } from '@angular/core';
import { Player } from '../../app.component';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-intro-component',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  highContrastColors: boolean = false;

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
  }

   changeColorPaletteToBW(highContrast: boolean) {
     this.gameService.highContrastColors = highContrast;
     console.log(this.gameService.highContrastColors);
  }

  backToNormalColors(highContrast: boolean) {
    this.gameService.highContrastColors = highContrast;
    console.log(this.gameService.highContrastColors);
  }
}
