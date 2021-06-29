import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import { TetrisCoreComponent } from 'ngx-tetris';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";
import {ScoreListDialogComponent} from "../../dialogs/score-list-dialog/score-list-dialog.component";
import {ControlInstructionsDialogComponent} from "../../dialogs/control-instructions-dialog/control-instructions-dialog.component";
import {GameService} from "../../services/game.service";
import {GameOverDialogComponent} from "../../dialogs/game-over-dialog/game-over-dialog.component";


@Component({
  selector: 'app-game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public playerName : string;
  isGameStarted : boolean = false;
  isGameOvered : boolean = false;
  timer: number;
  seconds: number = 0;
  highContrastColors: boolean = false;

  constructor(
    private _hotkeysService: HotkeysService,
    private router: Router,
    private dialog: MatDialog,
    private gameService: GameService,
    private _route: ActivatedRoute
  ) {
    this._addHotkeys();
   }

  ngOnInit(): void {
    this.playerName = this.gameService.playerName;

    if (this._route.snapshot.params.colors === "normal") {
      this.highContrastColors = false
    } else if (this._route.snapshot.params.colors === "contrast") {
      this.highContrastColors = true
    }
    console.log(this.highContrastColors);
  }

  @ViewChild('game')
  private _tetris: TetrisCoreComponent


  public points : number = 0;
  public message : string = '';

  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;




  onLineCleared() {
    this.points += 10
  }

  onResetGame() {
    this._tetris.actionReset();
    this.points = 0;
    this.isGameOvered = false;
}

onStartGame() {
    this._tetris.actionStart();
    this.isGameStarted = true;
    this.startOrResumeGameTime();
}

onStopGame() {
    this._tetris.actionStop();
    this.isGameStarted = false;
    clearInterval(this.timer);
}

  onGameOver() {
    this.message='Game over. Try again';
    this.gameService.finalScore = this.points;
    this.dialog.open(GameOverDialogComponent, {
      data: {
        name: this.playerName,
        points: this.points,
        time: this.formatTime(this.seconds),
      }
    });
    clearInterval(this.timer)
    this.isGameOvered = true;
  }

  onClearMessage() {
    this.message = "";
  }

  openScores() {
    this.dialog.open(ScoreListDialogComponent)
  }

  openInstructions() {
    this.dialog.open(ControlInstructionsDialogComponent)
  }

  startOrResumeGameTime() {
     this.timer = setInterval(() => {
      this.seconds = this.seconds + 1;
    }, 1000)
  }

  changColorsToBW() {
    this.highContrastColors = true;
  }

  changColorsToNormal() {
    this.highContrastColors = false;
  }

  private _addHotkeys() {
    this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
      this._tetris.actionLeft();
      return false;
  }));



  this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
    this._tetris.actionDown();
    return false;
}));

  this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
    this._tetris.actionRight();
    return false;
  }));

  this._hotkeysService.add(new Hotkey('space', (event: KeyboardEvent): boolean => {
    this._tetris.actionRotate();
    return false;
  }));

  }


  formatTime(seconds) {
    if (isNaN(seconds)) {
      return "00:00"
    }

    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes().toString().padStart(2, "0");
    const ss = date.getUTCSeconds().toString().padStart(2, "0");

    return `${mm}:${ss}`;
  }

  onExitGame() {
    this.router.navigate(['']);
  }
}
