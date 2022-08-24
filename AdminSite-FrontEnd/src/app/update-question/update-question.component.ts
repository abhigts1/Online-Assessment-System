import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../Models/UserModel';
import { updateUserService } from '../Services/updateUser.Service';
import { ConfirmationDialogService } from '../Services/ConfirmationDialog.Service';
import { QuestionsModel } from '../Models/QuestionsModel';
import { updateQuestionService } from '../Services/UpdateQuestion.Service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private updateQuestionService : updateQuestionService, 
    private confirmationDialogService: ConfirmationDialogService, private routerObj : Router) { }

  questionInfo : QuestionsModel = new QuestionsModel();
  questionId : any;
  subjectId : number = 0;
  decisionParameter : string ='';

  ngOnInit(): void 
  {
    this.questionId = Number(this.route.snapshot.paramMap.get('questionId'));  
    this.decisionParameter = this.route.snapshot.paramMap.get('action')!;
    
    if(this.decisionParameter === "add")
    {
      this.subjectId = this.questionId; /*QuestionID works as questionId when updating, and as subjectId when
      adding*/
      
      this.questionInfo.subjectId = this.subjectId;
    }
    else 
    {
      this.viewQuestion();
    }

  }

  addQuestion()
  {

    this.updateQuestionService.addQuestion(this.questionInfo).subscribe(
      data =>{

        if(data)
        {
          this.confirmationDialogService.confirm('Note: ', 'User Added Successfully!')
          .then((confirmed) =>{

            //Take me back to HomePage
            this.goToQuestion();
          });
        }
        else
        {
          this.confirmationDialogService.confirm('Error: ', 'User not added!')
          .then((confirmed) =>{
          });
        }
      }
    );

  }

  updateQuestion()
  {
     //Call Update Service
     this.updateQuestionService.updateQuestion(this.questionId, this.questionInfo).subscribe(
      data =>{

        if(data)
        {
          this.confirmationDialogService.confirm('Note: ', 'Update Successfull!')
          .then((confirmed) =>{
            this.goToQuestion();
          });
        }
        else
        {
          this.confirmationDialogService.confirm('Error: ', 'Update failed!')
          .then((confirmed) =>{
          });
        }
      }
    );
  }

  viewQuestion()
  {
    this.updateQuestionService.viewQuestion(this.questionId).subscribe(
      data =>{
        this.questionInfo = data;
        console.log(this.questionInfo);
      }
    );
  }

  goToQuestion()
  {
    this.routerObj.navigate(['/GoToQuestion']);
  }

}
