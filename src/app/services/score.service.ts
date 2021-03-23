import { Injectable } from '@angular/core';
import { Score } from "../models/score";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scoreData : Score;
  constructor() { }
}
