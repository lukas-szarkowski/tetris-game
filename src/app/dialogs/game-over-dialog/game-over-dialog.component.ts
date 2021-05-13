import {Component, Inject, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Score} from "../../models/score";

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.scss']
})
export class GameOverDialogComponent implements OnInit {
  scoreData = {
    name: '',
    score: null
  }



  constructor(private gameService: GameService,
              private router: Router,
              private dialogRef: MatDialogRef<GameOverDialogComponent>,
              private toast: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  ngOnInit(): void {
    this.updateScoreData();
  }

  updateScoreData() {
    this.scoreData.name = this.passedData.name;
    this.scoreData.score = this.passedData.points;
  }

  addScore() {
    this.gameService.addScore(this.scoreData)
      .subscribe(data => {
        this.onAddScoreSuccess()
      })
  }

  onAddScoreSuccess() {
    this.dialogRef.close();
    this.toast.open("Your current score was added", '', { panelClass: 'toast-success' });
  }

  onAddScoreFailure(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error' })
  }
}
