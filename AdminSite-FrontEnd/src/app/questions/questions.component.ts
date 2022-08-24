import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsModel } from '../Models/QuestionsModel';
import { ConfirmationDialogService } from '../Services/ConfirmationDialog.Service';
import { QuestionsService } from '../Services/Questions.Service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  allQuestions : QuestionsModel[] = [];
  p: number = 1;
  count: number = 10;

  subjectId : number = -1;
  subjectName : string = '';
  n : number = 0;

  constructor(private route: ActivatedRoute, private QuestionsService : QuestionsService,  
    private confirmationDialogService: ConfirmationDialogService,  private routerObj : Router) { }

  ngOnInit(): void 
  {
    this.subjectId = Number(this.route.snapshot.paramMap.get('subjectId')); //Get from URL
    this.getSubjectName(this.subjectId);
    this.displayAllQuestions(this.subjectId);
  }

  goToSubject()
  {
    this.routerObj.navigate(['/GoToSubject']);
  }
  
  getSubjectName(subjectId : number)
  {
    this.QuestionsService.getSubjectName(subjectId).subscribe(
      data =>{
        this.subjectName = data;
        console.log(data);
      }
    );
  }

  displayAllQuestions(subjectId : number)
  {
    this.QuestionsService.getAllQuestions(subjectId).subscribe(
      data =>{
        this.allQuestions = data;

        // if(this.allQuestions.length <= 0){
        //   this.goToHome();
        //   this.confirmationDialogService.confirm('Sorry', 'This Test is Unavailable at the moment');
        //   return;
        // }   
      }
    );

  }

  displayEdit(questionId : number)
  {
    this.routerObj.navigate(['/goToUpdateQuestion', questionId, "edit"]);
  }

  addQuestion()
  {
    this.routerObj.navigate(['/goToUpdateQuestion', this.subjectId, "add"]);
  }

  deleteRow(questionId : number)
  {
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete Question ' 
    + questionId + "?")
    .then((confirmed) =>{
      if(confirmed)
      {
         this.QuestionsService.removeQuestion(questionId).subscribe(data => {
           console.log(data);
           this.displayAllQuestions(this.subjectId);
           }
         )
      }

    });
  }
}
