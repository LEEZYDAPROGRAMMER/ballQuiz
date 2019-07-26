import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'question-one', loadChildren: './question-one/question-one.module#QuestionOnePageModule' },
  { path: 'question-two', loadChildren: './question-two/question-two.module#QuestionTwoPageModule' },
  { path: 'question-three', loadChildren: './question-three/question-three.module#QuestionThreePageModule' },
  { path: 'question-four', loadChildren: './question-four/question-four.module#QuestionFourPageModule' },
  { path: 'question-five', loadChildren: './question-five/question-five.module#QuestionFivePageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'players', loadChildren: './players/players.module#PlayersPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
