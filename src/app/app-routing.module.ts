import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IntroComponent} from "./game-core/intro/intro.component";
import {GameComponent} from "./game-core/game/game.component";


const routes : Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'game', component: GameComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
