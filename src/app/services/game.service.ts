import { Injectable } from '@angular/core';
import {Score} from "../models/score";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private API_URL = "http://localhost:8080";
  private player = {};

  constructor(private http : HttpClient) { }

  getScores() : Observable<Score[]> {
    return this.http.get<Score[]>(this.API_URL + `/scores`, {headers: {
      'Accept': 'application/json'
      }})
  }

  setPlayer(option, value) {
    this.player[option] = value;
  }
}
