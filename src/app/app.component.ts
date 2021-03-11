import { Component } from '@angular/core';


export interface Player {
  name: string;
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: Array<Player> = [];

  add(player: Player) {
    this.players.push(player);
  }
}
