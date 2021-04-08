import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import { TetrisCoreComponent } from 'ngx-tetris';
import { Router } from '@angular/router';
import {MatDialog} from "@angular/material/dialog";
import {ScoreListDialogComponent} from "../score-list-dialog/score-list-dialog.component";


@Component({
  selector: 'app-game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public playerName : string
  constructor(private _hotkeysService: HotkeysService, private router: Router, private dialog: MatDialog) {
    this._addHotkeys();
   }

  ngOnInit(): void {
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

  onGameOver() {
    this.message='Game over. Try again';
  }

  onClearMessage() {
    this.message = "";
  }

  openScores() {
    this.dialog.open(ScoreListDialogComponent)
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



  onExitGame() {
    this.router.navigate(['']);
  }
}
