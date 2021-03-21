import { Injectable } from '@angular/core';
import {Player} from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  lastId: number = 0;

  players: Player[] = [];

  constructor() { }

  addPlayer(player: Player) {
    if(!player.id) {
      player.id = ++this.lastId;
    }
    this.players.push(player)
  }

  getAllPlayers(): Player[] {
    return this.players;
  }
}
