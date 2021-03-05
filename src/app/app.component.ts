import { Component, ViewChild } from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('game')
  private _tetris: TetrisCoreComponent

  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;

  constructor(private _hotkeysService: HotkeysService) {
    this._addHotkeys();
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
}
