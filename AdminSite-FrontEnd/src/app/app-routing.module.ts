import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubjectComponent } from './subject/subject.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'', component : LoginAdminComponent},
  {path: 'GoToHome', component : HomePageAdminComponent},
  {path:'login', component : LoginAdminComponent},
  {path:'goToUpdateUser/:usn', component : UpdateUserComponent},
  {path:'goToUser', component : UsersComponent},
  {path:'goToQuestions/:subjectId', component : QuestionsComponent},
  {path:'goToUpdateQuestion/:questionId/:action', component : UpdateQuestionComponent},
  {path: 'GoToAddSubject', component : AddSubjectComponent},
  {path: 'GoToSubject', component : SubjectComponent},
  {path: 'GoToQuestion', component : QuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }