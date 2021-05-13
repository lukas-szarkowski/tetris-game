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
  sortingType: string = 'descending';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.loadScores();
  }

  loadScores() : void {
    this.gameService.getScores().subscribe((scores) => {
      this.scores = scores;
    })
  }

  get sortedData() {
    return this.scores.sort((a,b)=> {
      if (this.sortingType === 'descending') {
        return b.score - a.score;
      } else if (this.sortingType === 'ascending') {
        return a.score - b.score;
      }
    })
  }

  changeSortingTypeAscending() {
    this.sortingType = 'ascending';

  }

  changeSortingTypeDescending() {
    this.sortingType = 'descending';

  }
}


