import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";
import {Score} from "../../models/score";

@Component({
  selector: 'app-score-list-dialog',
  templateUrl: './score-list-dialog.component.html',
  styleUrls: ['./score-list-dialog.component.scss']
})
export class ScoreListDialogComponent implements OnInit {
  scores : Score[];
  sortingMode: string = "desc";

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.loadScores();
  }

  loadScores() : void {
    this.gameService.getScores().subscribe((scores) => {
      this.scores = scores;
      if (this.sortingMode === "desc") {
        scores.sort((a,b) => b.score - a.score)
      } else if (this.sortingMode === "asc") {
        scores.sort((a,b) => a.score - b.score)
      }
    })
  }

  onChangeSortingModeToAsc() {
    this.sortingMode = "asc";
    console.log(this.sortingMode)
  }

  onChangeSortingModeToDesc() {
    this.sortingMode = "desc"
    console.log(this.sortingMode)
  }
}
