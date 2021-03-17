import { Component, OnInit } from '@angular/core';
import { Player } from '../app.component'
@Component({
  selector: 'app-intro-component',
  templateUrl: './intro-component.component.html',
  styleUrls: ['./intro-component.component.css']
})
export class IntroComponentComponent implements OnInit {
  players: Array<Player> = [];
  
  ngOnInit(): void {
  }

  add(player: Player) {
    this.players.push(player);
  }

  removePlayer(index) {
    this.players.splice(index, 1);
  }

  clear() {
    this.players = [];
  }
}
