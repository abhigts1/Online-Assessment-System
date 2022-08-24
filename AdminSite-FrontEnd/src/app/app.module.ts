import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
import { HttpClientModule } from '@angular/common/http';


import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';
import { SubjectComponent } from './subject/subject.component';
import { UsersComponent } from './users/users.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationDialogService } from './Services/ConfirmationDialog.Service';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateUserComponent } from './update-user/update-user.component';
import { QuestionsComponent } from './questions/questions.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    HomePageAdminComponent,
    ProfileComponent,
    ResultComponent,
    SubjectComponent,
    UsersComponent,
    ConfirmationDialogComponent,
    UpdateUserComponent,
    QuestionsComponent,
    UpdateQuestionComponent,
    AddSubjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    HttpClientModule,
    MatTabsModule,
    NgbModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
