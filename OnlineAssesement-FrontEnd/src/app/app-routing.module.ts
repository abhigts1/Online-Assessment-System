import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './Login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { AuthenticationGuard } from './Service/authentication.guard';

const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'login', component : LoginComponent},
  {path: 'GoToHome', component : HomePageComponent, canActivate :[AuthenticationGuard]},
  {path : 'goToQuestions/:subjectId', component : QuestionsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
