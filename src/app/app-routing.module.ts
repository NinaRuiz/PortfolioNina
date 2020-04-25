import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { RockPaperScissorsPageComponent } from './pages/rock-paper-scissors-page/rock-paper-scissors-page.component';


const routes: Routes = [
  {path: './index', component: IndexPageComponent},
  {path: './rockpaperscissors', component: RockPaperScissorsPageComponent},
  //{ path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
  { path: '',   redirectTo: './index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
