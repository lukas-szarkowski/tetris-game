import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IntroComponent} from "./game-core/intro/intro.component";
import {GameComponent} from "./game-core/game/game.component";
import {GameGuard} from "./guards/game.guard";


const routes : Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'game', component: GameComponent, canActivate: [GameGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
