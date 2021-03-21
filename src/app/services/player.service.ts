import { Injectable } from '@angular/core';
import {Player} from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerData : Player;

  constructor() { }
}
