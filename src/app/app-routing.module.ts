import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { RockPaperScissorsPageComponent } from './pages/rock-paper-scissors-page/rock-paper-scissors-page.component';


const routes: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'rock-paper-scissors', component: RockPaperScissorsPageComponent},
  //{ path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
