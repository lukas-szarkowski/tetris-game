import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {GameService} from "../services/game.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {
  constructor(
    private gameService: GameService,
    private router: Router,
    private toast: MatSnackBar
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    if (!this.gameService.playerName) {
      this.router.navigate(['/intro']);
      this.toast.open("You have verify  player name to play")
      return false;
    }
    return true;
  }
}
