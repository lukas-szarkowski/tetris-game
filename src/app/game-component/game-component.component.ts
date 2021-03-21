import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import { TetrisCoreComponent } from 'ngx-tetris';
import { Router } from '@angular/router';
import {Player} from "../models/player";
import {PlayerService} from "../services/player.service";

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {
  public playerName : string
  constructor(private _hotkeysService: HotkeysService, private router: Router, public playerService : PlayerService) {
    this._addHotkeys();
   }

  ngOnInit(): void {
    this.playerName = this.playerService.playerData.name;
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
