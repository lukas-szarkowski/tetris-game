import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";
import {Score} from "../../models/score";

@Component({
  selector: 'app-score-list-dialog',
  templateUrl: './score-list-dialog.component.html',
  styleUrls: ['./score-list-dialog.component.css']
})
export class ScoreListDialogComponent implements OnInit {
  scores : Score[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.loadScores();
  }

  loadScores() : void {
    this.gameService.getScores().subscribe((scores) => {
      this.scores = scores;
      console.log(scores)
    })
  }
}
