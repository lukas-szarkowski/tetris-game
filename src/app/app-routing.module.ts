import {Route, RouterModule, Routes} from '@angular/router';
import { NgModule } from "@angular/core";
import {IntroComponent} from "./game-core/intro/intro.component";


const routes : Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
